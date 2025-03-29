import { Brain } from 'lucide-react';
import { SpecialtyPage } from './SpecialtyPage';

const neurologyDoctors = [
  {
    id: 1,
    name: 'Dr. Michael Chen',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200',
    experience: '12 years',
    rating: 4.9,
    availability: 'Available today',
    consultationFee: '$180',
  },
  {
    id: 2,
    name: 'Dr. Emily Wilson',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200',
    experience: '15 years',
    rating: 4.8,
    availability: 'Next available: Tomorrow',
    consultationFee: '$160',
  },
];

const neurologyConditions = [
  {
    name: 'Epilepsy',
    description: 'A neurological disorder causing recurring seizures.',
  },
  {
    name: 'Multiple Sclerosis',
    description: 'A condition affecting the central nervous system.',
  },
  {
    name: 'Parkinson\'s Disease',
    description: 'A progressive nervous system disorder affecting movement.',
  },
  {
    name: 'Migraine',
    description: 'Severe recurring headaches often accompanied by other symptoms.',
  },
];

const neurologyTreatments = [
  {
    name: 'Neurological Rehabilitation',
    description: 'Therapy to improve function and well-being of people with neurological disorders.',
  },
  {
    name: 'Deep Brain Stimulation',
    description: 'A surgery to implant a device that sends electrical signals to brain areas responsible for body movement.',
  },
  {
    name: 'Medication Therapy',
    description: 'Customized medication plans for various neurological conditions.',
  },
  {
    name: 'Cognitive Rehabilitation',
    description: 'Therapy to help improve memory, thinking, and other cognitive skills.',
  },
];

export function Neurology() {
  return (
    <SpecialtyPage
      title="Neurology"
      description="Specialized care for brain, spine, and nervous system disorders"
      icon={<Brain className="h-8 w-8 text-primary" />}
      doctors={neurologyDoctors}
      conditions={neurologyConditions}
      treatments={neurologyTreatments}
    />
  );
}