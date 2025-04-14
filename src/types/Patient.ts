export interface User {
  id: string;
  username: string;
  password: string;
  name: string;
}

export interface Patient {
  id: string;
  doctorId: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  contactNumber: string;
  email: string;
  conditions: string[];
  lastVisit: Date;
  gender: Gender;
  medications: Medication[];
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: Date;
  time: string;
  type: AppointmentType;
  notes: string;
}

export enum Gender {
  Male = "male",
  Female = "female"
}

export enum AppointmentType {
  FollowUp = "Follow-up",
  Regular = "Regular"
}

export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
}