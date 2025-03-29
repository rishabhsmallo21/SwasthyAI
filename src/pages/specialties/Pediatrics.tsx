import { Baby } from 'lucide-react';
import { SpecialtyPage } from './SpecialtyPage';

const pediatricsDoctors = [
  {
    id: 1,
    name: 'Dr. Lisa Anderson',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200',
    experience: '10 years',
    rating: 4.9,
    availability: 'Available today',
    consultationFee: '$140',
  },
  {
    id: 2,
    name: 'Dr. James Wilson',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200&h=200',
    experience: '15 years',
    rating: 4.8,
    availability: 'Next available: Tomorrow',
    consultationFee: '$160',
  },
];

const pediatricsConditions = [
  {
    name: 'Childhood Asthma',
    description: 'A chronic condition affecting the airways, causing breathing difficulties.',
  },
  {
    name: 'Growth and Development Issues',
    description: 'Concerns related to physical growth, motor skills, and developmental milestones.',
  },
  {
    name: 'Pediatric Allergies',
    description: 'Allergic reactions to food, environment, or other substances in children.',
  },
  {
    name: 'Childhood Infections',
    description: 'Common infectious diseases affecting children, including ear infections and strep throat.',
  },
];

const pediatricsTreatments = [
  {
    name: 'Immunizations',
    description: 'Comprehensive vaccination programs to prevent childhood diseases.',
  },
  {
    name: 'Growth Monitoring',
    description: 'Regular tracking of height, weight, and developmental progress.',
  },
  {
    name: 'Behavioral Health',
    description: 'Assessment and treatment of behavioral and emotional concerns.',
  },
  {
    name: 'Acute Care',
    description: 'Treatment for illnesses, injuries, and other immediate health concerns.',
  },
];

export function Pediatrics() {
  return (
    <SpecialtyPage
      title="Pediatrics"
      description="Comprehensive healthcare for infants, children, and adolescents"
      icon={<Baby className="h-8 w-8 text-primary" />}
      doctors={pediatricsDoctors}
      conditions={pediatricsConditions}
      treatments={pediatricsTreatments}
    />
  );
}