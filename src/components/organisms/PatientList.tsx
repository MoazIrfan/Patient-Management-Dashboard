import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import { Table, TableBody, TableSortLabel, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { Patient } from '../../types/Patient';
import { fetchPatients } from "../../../api/api"

const PatientList: React.FC = () => {
  
  const [patients, setPatients] = useState<Patient[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<keyof Patient | "">("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" >("asc");
  
  const handleSort = (field: keyof Patient) => {
    const isAsc = sortField === field && sortOrder === "asc";
    setSortOrder(isAsc ? "desc" : "asc");
    setSortField(field);
  };

  const filteredPatients = patients.filter((patient) =>
    Object.values(patient).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const userString = localStorage.getItem('user');
  if (!userString) {
    return <Navigate to="/" replace />;
  }
  const user = JSON.parse(userString);

  useEffect(() => {
    const getPatients = async () => {
      try {
        const data = await fetchPatients(user.id);
        setPatients(data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    getPatients();
  }, [user?.id, sortField, sortOrder]); 

  const navigate = useNavigate();

  return (
    <>
    <TextField
      fullWidth
      label="Search Patients"
      aria-label="Search patients by name or contact"
      className="patient-search"
      variant="outlined"
      margin="dense"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <TableContainer aria-labelledby="patient-table-heading">
      <Table className="striped-table">
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={sortField === "firstName"}
                direction={sortField === "firstName" ? sortOrder : "asc"}
                onClick={() => handleSort("firstName")}
              >
                Patient Name
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortField === "contactNumber"}
                direction={sortField === "contactNumber" ? sortOrder : "asc"}
                onClick={() => handleSort("contactNumber")}
              >
                Contact Number
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortField === "gender"}
                direction={sortField === "gender" ? sortOrder : "asc"}
                onClick={() => handleSort("gender")}
              >
                Gender
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortField === "lastVisit"}
                direction={sortField === "lastVisit" ? sortOrder : "asc"}
                onClick={() => handleSort("lastVisit")}
              >
                Last Visit
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredPatients.length > 0 ? (
            [...filteredPatients].sort((a, b) => {
              if (!sortField) return 0;
              return sortOrder === "asc"
                ? String(a[sortField]).localeCompare(String(b[sortField]))
                : String(b[sortField]).localeCompare(String(a[sortField]));
            }).map((patient) => (
              <TableRow 
                key={patient.id} 
                hover 
                className="clickable-row" 
                onClick={() => {navigate(`/patients/${patient.id}`);}}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${patient.firstName} ${patient.lastName}`}
              >
                <TableCell>{`${patient.firstName} ${patient.lastName}`}</TableCell>
                <TableCell>{patient.contactNumber}</TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell>{patient.lastVisit.toString()}</TableCell>
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

export default PatientList;