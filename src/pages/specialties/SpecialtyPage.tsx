import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, FileText, Users, Video } from 'lucide-react';

interface Doctor {
  id: number;
  name: string;
  image: string;
  experience: string;
  rating: number;
  availability: string;
  consultationFee: string;
}

interface Condition {
  name: string;
  description: string;
}

interface Treatment {
  name: string;
  description: string;
}

interface SpecialtyPageProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  doctors: Doctor[];
  conditions: Condition[];
  treatments: Treatment[];
}

export function SpecialtyPage({
  title,
  description,
  icon,
  doctors,
  conditions,
  treatments,
}: SpecialtyPageProps) {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-16 w-16 flex items-center justify-center rounded-lg bg-primary/10">
          {icon}
        </div>
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-muted-foreground mt-1">{description}</p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="doctors">Doctors</TabsTrigger>
          <TabsTrigger value="conditions">Conditions</TabsTrigger>
          <TabsTrigger value="treatments">Treatments</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Virtual Consultations</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Connect with specialists remotely through secure video calls
                </p>
                <Button className="mt-4 w-full">Book Online</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">In-Person Visits</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Schedule face-to-face appointments with our specialists
                </p>
                <Button className="mt-4 w-full">Book Visit</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Second Opinion</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Get expert second opinions on your diagnosis and treatment
                </p>
                <Button className="mt-4 w-full">Request</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="doctors" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {doctors.map((doctor) => (
              <Card key={doctor.id}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="h-24 w-24 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{doctor.name}</h3>
                      <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{doctor.experience} experience</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>{doctor.rating} rating</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{doctor.availability}</span>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm font-medium">
                          Consultation: {doctor.consultationFee}
                        </span>
                        <Button size="sm">Book Now</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="conditions" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {conditions.map((condition) => (
              <Card key={condition.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{condition.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{condition.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="treatments" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {treatments.map((treatment) => (
              <Card key={treatment.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{treatment.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{treatment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}