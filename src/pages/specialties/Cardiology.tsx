import { Heart } from 'lucide-react';
import { SpecialtyPage } from './SpecialtyPage';

const cardiologyDoctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200',
    experience: '15 years',
    rating: 4.8,
    availability: 'Available today',
    consultationFee: '$150',
  },
  {
    id: 2,
    name: 'Dr. Robert Chen',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200',
    experience: '20 years',
    rating: 4.9,
    availability: 'Next available: Tomorrow',
    consultationFee: '$180',
  },
];

const cardiologyConditions = [
  {
    name: 'Coronary Artery Disease',
    description: 'A condition where the hearts blood supply is blocked or interrupted by a build-up of fatty substances.',
  },
  {
    name: 'Heart Failure',
    description: 'When the heart cannot pump blood around the body as well as it should.',
  },
  {
    name: 'Arrhythmia',
    description: 'Irregular heartbeat or abnormal heart rhythm.',
  },
  {
    name: 'Hypertension',
    description: 'High blood pressure that can lead to severe health complications.',
  },
];

const cardiologyTreatments = [
  {
    name: 'Angioplasty',
    description: 'A procedure to widen blocked or narrowed coronary arteries.',
  },
  {
    name: 'Cardiac Rehabilitation',
    description: 'A program to help you recover from heart problems and procedures.',
  },
  {
    name: 'Pacemaker Implantation',
    description: 'A device placement to help control abnormal heart rhythms.',
  },
  {
    name: 'Medication Management',
    description: 'Prescription and monitoring of heart medications.',
  },
];

export function Cardiology() {
  return (
    <SpecialtyPage
      title="Cardiology"
      description="Expert care for heart and cardiovascular conditions"
      icon={<Heart className="h-8 w-8 text-primary" />}
      doctors={cardiologyDoctors}
      conditions={cardiologyConditions}
      treatments={cardiologyTreatments}
    />
  );
}