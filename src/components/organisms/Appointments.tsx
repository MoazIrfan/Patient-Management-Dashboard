import React, { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Appointment } from '../../types/Patient';
import {fetchAppointmentsByDoctor} from "../../../api/api"
import BreadcrumbsNav from "../molecules/BreadcrumbsNav";

const Appointments: React.FC = () => {
  
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  

  const userString = localStorage.getItem('user');
  if (!userString) {
    return <Navigate to="/" replace />;
  }
  const user = JSON.parse(userString);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const appointmentData = await fetchAppointmentsByDoctor(user.id);
        setAppointments(appointmentData);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, [user?.id]);


  return (
    <>
    <BreadcrumbsNav
      links={[
        { label: "Patients", to: "/patients" },
        { label: "Appointments" },
      ]}
    />

    <TableContainer aria-labelledby="appointment-table-heading">
      <Table className="striped-table">
        <TableHead>
          <TableRow>
            <TableCell>
              Date
            </TableCell>
            <TableCell>
              Type
            </TableCell>
            <TableCell>
              Notes
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.length > 0 ? (
            appointments.map((appointment) => (
              <TableRow 
                key={appointment.id} 
                hover 
                tabIndex={0}
                
              >
                <TableCell>{`${appointment.date}, ${appointment.time} `}</TableCell>
                <TableCell>{appointment.type}</TableCell>
                <TableCell>{appointment.notes}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} align="center">
                <Typography variant="body1" aria-live="polite">
                  No records found
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default Appointments;