import { Eye } from 'lucide-react';
import { SpecialtyPage } from './SpecialtyPage';

const ophthalmologyDoctors = [
  {
    id: 1,
    name: 'Dr. Jennifer Lee',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200',
    experience: '14 years',
    rating: 4.8,
    availability: 'Available today',
    consultationFee: '$160',
  },
  {
    id: 2,
    name: 'Dr. Mark Stevens',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200&h=200',
    experience: '16 years',
    rating: 4.9,
    availability: 'Next available: Tomorrow',
    consultationFee: '$170',
  },
];

const ophthalmologyConditions = [
  {
    name: 'Cataracts',
    description: 'Clouding of the eye\'s natural lens that affects vision.',
  },
  {
    name: 'Glaucoma',
    description: 'Group of eye conditions that damage the optic nerve.',
  },
  {
    name: 'Refractive Errors',
    description: 'Vision problems including nearsightedness, farsightedness, and astigmatism.',
  },
  {
    name: 'Retinal Disorders',
    description: 'Conditions affecting the light-sensitive tissue at the back of the eye.',
  },
];

const ophthalmologyTreatments = [
  {
    name: 'Cataract Surgery',
    description: 'Removal of clouded lens and replacement with artificial lens.',
  },
  {
    name: 'LASIK',
    description: 'Laser eye surgery to correct vision problems.',
  },
  {
    name: 'Glaucoma Treatment',
    description: 'Various treatments to manage eye pressure and prevent vision loss.',
  },
  {
    name: 'Vision Therapy',
    description: 'Exercises and procedures to improve visual skills and processing.',
  },
];

export function Ophthalmology() {
  return (
    <SpecialtyPage
      title="Ophthalmology"
      description="Comprehensive eye care and vision services"
      icon={<Eye className="h-8 w-8 text-primary" />}
      doctors={ophthalmologyDoctors}
      conditions={ophthalmologyConditions}
      treatments={ophthalmologyTreatments}
    />
  );
}