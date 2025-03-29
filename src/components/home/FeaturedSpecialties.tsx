import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Brain, Heart, Stethoscope, Baby, Bone, Eye } from 'lucide-react';

const specialties = [
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Expert care for heart conditions',
    path: '/specialties/cardiology',
  },
  {
    icon: Brain,
    title: 'Neurology',
    description: 'Specialized brain and nerve treatment',
    path: '/specialties/neurology',
  },
  {
    icon: Baby,
    title: 'Pediatrics',
    description: 'Comprehensive child healthcare',
    path: '/specialties/pediatrics',
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    description: 'Joint and bone specialists',
    path: '/specialties/orthopedics',
  },
  {
    icon: Eye,
    title: 'Ophthalmology',
    description: 'Complete eye care services',
    path: '/specialties/ophthalmology',
  },
  {
    icon: Stethoscope,
    title: 'General Medicine',
    description: 'Primary healthcare services',
    path: '/specialties/general-medicine',
  },
];

export function FeaturedSpecialties() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Featured Specialties</h2>
          <p className="text-muted-foreground mt-4">
            Connect with specialists across all medical fields
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((specialty) => (
            <Card key={specialty.title} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <specialty.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{specialty.title}</CardTitle>
                <CardDescription>{specialty.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link 
                  to={specialty.path}
                  className="text-primary hover:underline inline-flex items-center"
                >
                  Find Specialists →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}