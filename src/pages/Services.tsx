import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Stethoscope,
  Brain,
  Heart,
  Baby,
  Activity,
  Microscope,
  Pill,
  Syringe,
} from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'Primary Care',
    description: 'Comprehensive health care for all ages',
  },
  {
    icon: Brain,
    title: 'Neurology',
    description: 'Expert care for neurological conditions',
  },
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Advanced heart care and treatments',
  },
  {
    icon: Baby,
    title: 'Pediatrics',
    description: 'Specialized care for children',
  },
  {
    icon: Activity,
    title: 'Emergency Care',
    description: '24/7 emergency medical services',
  },
  {
    icon: Microscope,
    title: 'Laboratory',
    description: 'Advanced diagnostic testing',
  },
  {
    icon: Pill,
    title: 'Pharmacy',
    description: 'Full-service pharmacy with expert guidance',
  },
  {
    icon: Syringe,
    title: 'Vaccinations',
    description: 'Preventive care and immunizations',
  },
];

export function Services() {
  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Our Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive healthcare services delivered by expert professionals using
          state-of-the-art technology and AI-powered solutions.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Card key={service.title} className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="#" className="text-primary hover:underline">
                Learn more →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}