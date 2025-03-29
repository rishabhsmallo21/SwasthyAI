import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

export function SmartScheduling() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>Smart Scheduling</CardTitle>
        <CardDescription>
          AI-powered appointment scheduling for optimal care
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-[1fr,300px]">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Appointment Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="checkup">Regular Checkup</SelectItem>
                  <SelectItem value="followup">Follow-up Visit</SelectItem>
                  <SelectItem value="specialist">Specialist Consultation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Preferred Doctor</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select doctor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dr-johnson">Dr. Sarah Johnson</SelectItem>
                  <SelectItem value="dr-chen">Dr. Michael Chen</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Available Time Slots</label>
              <div className="grid grid-cols-3 gap-2">
                <Button variant="outline" className="justify-start">
                  <Clock className="mr-2 h-4 w-4" />
                  9:00 AM
                </Button>
                <Button variant="outline" className="justify-start">
                  <Clock className="mr-2 h-4 w-4" />
                  10:30 AM
                </Button>
                <Button variant="outline" className="justify-start">
                  <Clock className="mr-2 h-4 w-4" />
                  2:00 PM
                </Button>
              </div>
            </div>

            <Button className="w-full">Schedule Appointment</Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Select Date</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md"
              />
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}