import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { Patient, Appointment } from '../../types/Patient';
import {fetchPatient, fetchAppointments} from '../../../api/api'
import BreadcrumbsNav from "../molecules/BreadcrumbsNav";


const PatientDetail: React.FC = () => {
  const { id } = useParams();

  const [patient, setPatient] = useState<Patient | null>(null);
  const [appointment, setAppointment] = useState<Appointment[] | null>(null);
  
  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const patientData = await fetchPatient(id);
        setPatient(patientData);

        const appointmentData = await fetchAppointments(id);
        setAppointment(appointmentData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]); 
  
  if (!patient) return <Typography>Select a patient to view details.</Typography>;

  return (
    <>
    <BreadcrumbsNav
      links={[
        { label: "Patients", to: "/patients" },
        { label: patient.firstName },
      ]}
    />

    <TableContainer aria-labelledby="patient-name-heading">
      <Typography className="user-name-detail" variant="h5" >
        {`${patient.firstName} ${patient.lastName}`}
      </Typography>
      <Table className="striped-table">
        <TableBody>
          <TableRow>
            <TableCell>Email:</TableCell>
            <TableCell>{patient.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Contact:</TableCell>
            <TableCell>{patient.contactNumber}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Conditions:</TableCell>
            <TableCell>{patient.conditions.join(", ")}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Medications:</TableCell>
            <TableCell>
              {patient.medications.map((med, index) => (
                <div key={index}>{`${med.name}`}</div>
              ))}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Appointments:</TableCell>
            <TableCell>
              {appointment?.map((app) => (
                <div key={app.id}>{`${app?.date?.toString()} - ${app.type} `}</div>
              ))}
            </TableCell>
          </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default PatientDetail;