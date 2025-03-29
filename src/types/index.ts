export interface Doctor {
  id: number;
  name: string;
  image: string;
  experience: string;
  rating: number;
  availability: string;
  consultationFee: string;
  specialty: string;
  hospital: string;
  education: string[];
  languages: string[];
}

export interface Specialty {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Symptom {
  id: string;
  name: string;
  severity: 'low' | 'medium' | 'high';
  duration: string;
}

export interface DoctorProfile {
  id: string;
  userId: string;
  specialty: string;
  experience: number;
  rating: number;
  availability: string[];
  education: string[];
  certifications: string[];
}

export interface PatientProfile {
  id: string;
  userId: string;
  dateOfBirth: string;
  medicalHistory: string[];
  allergies: string[];
  medications: string[];
}