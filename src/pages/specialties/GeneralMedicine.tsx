import { Stethoscope } from 'lucide-react';
import { SpecialtyPage } from './SpecialtyPage';

const generalMedicineDoctors = [
  {
    id: 1,
    name: 'Dr. Thomas Brown',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200&h=200',
    experience: '20 years',
    rating: 4.9,
    availability: 'Available today',
    consultationFee: '$120',
  },
  {
    id: 2,
    name: 'Dr. Maria Garcia',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200',
    experience: '15 years',
    rating: 4.8,
    availability: 'Next available: Tomorrow',
    consultationFee: '$130',
  },
];

const generalMedicineConditions = [
  {
    name: 'Common Cold & Flu',
    description: 'Viral infections affecting the respiratory system.',
  },
  {
    name: 'Diabetes',
    description: 'Chronic condition affecting blood sugar regulation.',
  },
  {
    name: 'Hypertension',
    description: 'High blood pressure requiring ongoing management.',
  },
  {
    name: 'Respiratory Infections',
    description: 'Conditions affecting the respiratory system, including bronchitis and pneumonia.',
  },
];

const generalMedicineTreatments = [
  {
    name: 'Preventive Care',
    description: 'Regular check-ups and screenings to maintain health and prevent disease.',
  },
  {
    name: 'Chronic Disease Management',
    description: 'Ongoing care for long-term health conditions.',
  },
  {
    name: 'Vaccinations',
    description: 'Immunizations to prevent various diseases.',
  },
  {
    name: 'Health Counseling',
    description: 'Guidance on lifestyle modifications and health maintenance.',
  },
];

export function GeneralMedicine() {
  return (
    <SpecialtyPage
      title="General Medicine"
      description="Primary healthcare services for overall health and wellness"
      icon={<Stethoscope className="h-8 w-8 text-primary" />}
      doctors={generalMedicineDoctors}
      conditions={generalMedicineConditions}
      treatments={generalMedicineTreatments}
    />
  );
}