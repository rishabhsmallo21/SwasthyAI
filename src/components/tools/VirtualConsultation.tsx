import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Camera, Mic, Phone, MessageSquare } from 'lucide-react';

export function VirtualConsultation() {
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>Virtual Consultation</CardTitle>
        <CardDescription>
          Connect with healthcare providers remotely
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
          <Card className="aspect-video bg-muted flex items-center justify-center">
            <div className="text-center">
              <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                Your video will appear here when the consultation starts
              </p>
            </div>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Consultation Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium">Dr. Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Cardiologist</p>
                </div>
                <div>
                  <p className="font-medium">Appointment Time</p>
                  <p className="text-sm text-muted-foreground">
                    Today, 2:00 PM - 2:30 PM
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-4">
              <Button size="icon" variant="outline">
                <Camera className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Mic className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="destructive">
                <Phone className="h-4 w-4" />
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] space-y-4 overflow-y-auto">
                  <div className="flex items-start gap-2">
                    <MessageSquare className="h-4 w-4 mt-1" />
                    <div>
                      <p className="text-sm font-medium">Dr. Johnson</p>
                      <p className="text-sm text-muted-foreground">
                        Hello! I'll be with you shortly.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Input placeholder="Type a message..." />
                  <Button size="icon">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}