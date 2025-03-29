import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, MapPin, Star, Calendar, Building2, Stethoscope } from 'lucide-react';

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    hospital: 'City General Hospital',
    rating: 4.8,
    location: 'New York, NY',
    availability: 'Next available: Today',
    experience: '15 years',
    consultationFee: '$150',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Neurology',
    hospital: 'Metropolitan Medical Center',
    rating: 4.9,
    location: 'New York, NY',
    availability: 'Next available: Tomorrow',
    experience: '12 years',
    consultationFee: '$180',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200',
  },
    {
      id: 3,
      name: 'Dr. Emily Williams',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200',
      experience: '12 years',
      rating: 4.7,
      availability: 'Available today',
      consultationFee: '$160',
      specialty: 'Cardiology',
      hospital: 'Heart Care Institute',
      education: ['MD - Cardiology', 'Fellowship in Interventional Cardiology'],
      languages: ['English', 'French'],
    },
    {
      id: 4,
      name: 'Dr. Michael Chen',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200',
      experience: '12 years',
      rating: 4.9,
      availability: 'Available today',
      consultationFee: '$180',
      specialty: 'Neurology',
      hospital: 'Metropolitan Medical Center',
      education: ['MD - Neurology', 'Fellowship in Neurosurgery'],
      languages: ['English', 'Mandarin'],
    },
    {
      id: 5,
      name: 'Dr. Emily Wilson',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200',
      experience: '15 years',
      rating: 4.8,
      availability: 'Next available: Tomorrow',
      consultationFee: '$160',
      specialty: 'Neurology',
      hospital: 'Neuro Care Center',
      education: ['MD - Neurology', 'PhD in Neuroscience'],
      languages: ['English', 'Spanish'],
    },
    {
      id: 6,
      name: 'Dr. James Anderson',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200&h=200',
      experience: '18 years',
      rating: 4.9,
      availability: 'Available today',
      consultationFee: '$190',
      specialty: 'Neurology',
      hospital: 'Brain & Spine Institute',
      education: ['MD - Neurology', 'Fellowship in Movement Disorders'],
      languages: ['English'],
    },
    {
      id: 7,
      name: 'Dr. Lisa Anderson',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200',
      experience: '10 years',
      rating: 4.9,
      availability: 'Available today',
      consultationFee: '$140',
      specialty: 'Pediatrics',
      hospital: 'Children\'s Medical Center',
      education: ['MD - Pediatrics', 'Fellowship in Pediatric Emergency Medicine'],
      languages: ['English', 'Spanish'],
    },
    {
      id: 8,
      name: 'Dr. James Wilson',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200&h=200',
      experience: '15 years',
      rating: 4.8,
      availability: 'Next available: Tomorrow',
      consultationFee: '$160',
      specialty: 'Pediatrics',
      hospital: 'Kids Care Hospital',
      education: ['MD - Pediatrics', 'Fellowship in Pediatric Cardiology'],
      languages: ['English'],
    },
    {
      id: 9,
      name: 'Dr. Maria Rodriguez',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200',
      experience: '8 years',
      rating: 4.7,
      availability: 'Available today',
      consultationFee: '$130',
      specialty: 'Pediatrics',
      hospital: 'Children\'s Medical Center',
      education: ['MD - Pediatrics', 'Fellowship in Pediatric Neurology'],
      languages: ['English', 'Spanish'],
    },
    {
      id: 10,
      name: 'Dr. David Thompson',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200&h=200',
      experience: '18 years',
      rating: 4.9,
      availability: 'Available today',
      consultationFee: '$170',
      specialty: 'Orthopedics',
      hospital: 'Orthopedic & Spine Center',
      education: ['MD - Orthopedics', 'Fellowship in Sports Medicine'],
      languages: ['English'],
    },
    {
      id: 11,
      name: 'Dr. Rachel Martinez',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200',
      experience: '12 years',
      rating: 4.7,
      availability: 'Next available: Tomorrow',
      consultationFee: '$150',
      specialty: 'Orthopedics',
      hospital: 'Joint Care Institute',
      education: ['MD - Orthopedics', 'Fellowship in Joint Replacement'],
      languages: ['English', 'Spanish'],
    },
    {
      id: 12,
      name: 'Dr. John Parker',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200&h=200',
      experience: '20 years',
      rating: 4.9,
      availability: 'Available today',
      consultationFee: '$180',
      specialty: 'Orthopedics',
      hospital: 'Sports Medicine Center',
      education: ['MD - Orthopedics', 'Fellowship in Trauma Surgery'],
      languages: ['English'],
    },
    {
      id: 13,
      name: 'Dr. Jennifer Lee',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200',
      experience: '14 years',
      rating: 4.8,
      availability: 'Available today',
      consultationFee: '$160',
      specialty: 'Ophthalmology',
      hospital: 'Vision Care Center',
      education: ['MD - Ophthalmology', 'Fellowship in Retina Surgery'],
      languages: ['English', 'Korean'],
    },
    {
      id: 14,
      name: 'Dr. Mark Stevens',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200&h=200',
      experience: '16 years',
      rating: 4.9,
      availability: 'Next available: Tomorrow',
      consultationFee: '$170',
      specialty: 'Ophthalmology',
      hospital: 'Eye Institute',
      education: ['MD - Ophthalmology', 'Fellowship in Cornea and Refractive Surgery'],
      languages: ['English'],
    },
    {
      id: 15,
      name: 'Dr. Sarah Chang',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200',
      experience: '10 years',
      rating: 4.7,
      availability: 'Available today',
      consultationFee: '$150',
      specialty: 'Ophthalmology',
      hospital: 'Vision Care Center',
      education: ['MD - Ophthalmology', 'Fellowship in Pediatric Ophthalmology'],
      languages: ['English', 'Mandarin'],
    },
    {
      id: 16,
      name: 'Dr. Thomas Brown',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200&h=200',
      experience: '20 years',
      rating: 4.9,
      availability: 'Available today',
      consultationFee: '$120',
      specialty: 'General Medicine',
      hospital: 'City General Hospital',
      education: ['MD - Internal Medicine', 'MBBS'],
      languages: ['English'],
    },
    {
      id: 17,
      name: 'Dr. Maria Garcia',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200',
      experience: '15 years',
      rating: 4.8,
      availability: 'Next available: Tomorrow',
      consultationFee: '$130',
      specialty: 'General Medicine',
      hospital: 'Community Health Center',
      education: ['MD - Family Medicine', 'MBBS'],
      languages: ['English', 'Spanish'],
    },
    {
      id: 18,
      name: 'Dr. William Taylor',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200',
      experience: '12 years',
      rating: 4.7,
      availability: 'Available today',
      consultationFee: '$110',
      specialty: 'General Medicine',
      hospital: 'Primary Care Clinic',
      education: ['MD - Internal Medicine', 'MPH'],
      languages: ['English'],
    }  
];

const hospitals = [
  'City General Hospital',
  'Metropolitan Medical Center',
  'St. Mary\'s Hospital',
  'Valley View Medical Center',
];

const localities = [
  'Manhattan, NY',
  'Brooklyn, NY',
  'Queens, NY',
  'Bronx, NY',
  'Staten Island, NY',
];

const specialties = [
  'Cardiology',
  'Neurology',
  'Pediatrics',
  'Orthopedics',
  'Ophthalmology',
  'General Medicine',
  'Dermatology',
  'ENT',
  'Psychiatry',
  'Gynecology',
];

export function FindDoctors() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedHospital, setSelectedHospital] = useState('');
  const [selectedLocality, setSelectedLocality] = useState('');
  const [selectedAvailability, setSelectedAvailability] = useState('');
  const [priceRange, setPriceRange] = useState('');

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Find Doctors</h1>
        <p className="text-muted-foreground">
          Connect with top healthcare professionals in your area
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-[300px,1fr]">
        {/* Filters */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Specialty</label>
                <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    {specialties.map((specialty) => (
                      <SelectItem key={specialty} value={specialty.toLowerCase()}>
                        {specialty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Hospital</label>
                <Select value={selectedHospital} onValueChange={setSelectedHospital}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select hospital" />
                  </SelectTrigger>
                  <SelectContent>
                    {hospitals.map((hospital) => (
                      <SelectItem key={hospital} value={hospital.toLowerCase()}>
                        {hospital}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Locality</label>
                <Select value={selectedLocality} onValueChange={setSelectedLocality}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select locality" />
                  </SelectTrigger>
                  <SelectContent>
                    {localities.map((locality) => (
                      <SelectItem key={locality} value={locality.toLowerCase()}>
                        {locality}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Availability</label>
                <Select value={selectedAvailability} onValueChange={setSelectedAvailability}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="tomorrow">Tomorrow</SelectItem>
                    <SelectItem value="this-week">This Week</SelectItem>
                    <SelectItem value="next-week">Next Week</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Consultation Fee</label>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select price range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-50">$0 - $50</SelectItem>
                    <SelectItem value="51-100">$51 - $100</SelectItem>
                    <SelectItem value="101-200">$101 - $200</SelectItem>
                    <SelectItem value="201+">$201+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full" variant="outline">
                Reset Filters
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="flex gap-4">
            <Input
              placeholder="Search doctors by name, specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button>
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>

          <div className="space-y-4">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-32 h-32 rounded-lg object-cover"
                    />
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold">{doctor.name}</h3>
                        <p className="text-muted-foreground">{doctor.specialty}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-muted-foreground" />
                          <span>{doctor.hospital}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{doctor.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span>{doctor.rating} ({Math.floor(Math.random() * 500)} reviews)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{doctor.availability}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Stethoscope className="h-4 w-4 text-muted-foreground" />
                          <span>{doctor.experience} experience</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Consultation Fee</p>
                          <p className="font-semibold">{doctor.consultationFee}</p>
                        </div>
                        <div className="space-x-2">
                          <Button variant="outline">View Profile</Button>
                          <Button>Book Appointment</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center pt-6">
            <Button variant="outline">Load More Doctors</Button>
          </div>
        </div>
      </div>
    </div>
  );
}