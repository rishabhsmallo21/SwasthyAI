import { Bone } from 'lucide-react';
import { SpecialtyPage } from './SpecialtyPage';

const orthopedicsDoctors = [
  {
    id: 1,
    name: 'Dr. David Thompson',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200&h=200',
    experience: '18 years',
    rating: 4.9,
    availability: 'Available today',
    consultationFee: '$170',
  },
  {
    id: 2,
    name: 'Dr. Rachel Martinez',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200',
    experience: '12 years',
    rating: 4.7,
    availability: 'Next available: Tomorrow',
    consultationFee: '$150',
  },
];

const orthopedicsConditions = [
  {
    name: 'Arthritis',
    description: 'Inflammation of joints causing pain and stiffness.',
  },
  {
    name: 'Sports Injuries',
    description: 'Injuries affecting muscles, bones, and joints during physical activities.',
  },
  {
    name: 'Spinal Disorders',
    description: 'Conditions affecting the spine, including herniated discs and scoliosis.',
  },
  {
    name: 'Joint Problems',
    description: 'Issues affecting knee, hip, shoulder, and other joints.',
  },
];

const orthopedicsTreatments = [
  {
    name: 'Joint Replacement',
    description: 'Surgical replacement of damaged joints with artificial components.',
  },
  {
    name: 'Physical Therapy',
    description: 'Exercise and treatment programs to improve mobility and strength.',
  },
  {
    name: 'Arthroscopic Surgery',
    description: 'Minimally invasive procedures to diagnose and treat joint conditions.',
  },
  {
    name: 'Sports Medicine',
    description: 'Treatment and prevention of sports-related injuries.',
  },
];

export function Orthopedics() {
  return (
    <SpecialtyPage
      title="Orthopedics"
      description="Expert care for bones, joints, muscles, and related structures"
      icon={<Bone className="h-8 w-8 text-primary" />}
      doctors={orthopedicsDoctors}
      conditions={orthopedicsConditions}
      treatments={orthopedicsTreatments}
    />
  );
}