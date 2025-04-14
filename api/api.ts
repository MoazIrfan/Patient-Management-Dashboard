import { Appointment, Patient } from "../src/types/Patient";

// fetch patients by doctor (patient list)
export const fetchPatients = async (doctorId: string): Promise<Patient[]> => {
  try {
    const response = await fetch(`http://localhost:3000/patients?doctorId=${doctorId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch patients');
    }
    const data: Patient[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
};

// patient detail
export const fetchPatient = async (id: string): Promise<Patient> => {
  try {
    const response = await fetch(`http://localhost:3000/patients/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch patient');
    }
    const data: Patient = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching patient:', error);
    throw error;
  }
};

// patient appointment
export const fetchAppointments = async (patientId: string): Promise<Appointment[]> => {
  try {
    const response = await fetch(`http://localhost:3000/appointments?patientId=${patientId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch appointments');
    }
    const data: Appointment[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching appointments:', error);
    throw error;
  }
};

// fetch appointments by doctor
export const fetchAppointmentsByDoctor = async (doctorId: string): Promise<Appointment[]> => {
  try {
    const response = await fetch(`http://localhost:3000/appointments?doctorId=${doctorId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch appointments');
    }
    const data: Appointment[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching appointments:', error);
    throw error;
  }
};
