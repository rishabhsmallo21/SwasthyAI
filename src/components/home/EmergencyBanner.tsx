import { Button } from '@/components/ui/button';
import { Phone, MapPin } from 'lucide-react';

export function EmergencyBanner() {
  return (
    <section className="bg-destructive text-destructive-foreground">
      <div className="container py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <Phone className="h-6 w-6" />
            <div>
              <h3 className="font-semibold">Emergency Services</h3>
              <p className="text-sm">24/7 Emergency Care Available</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="secondary" size="sm">
              <MapPin className="mr-2 h-4 w-4" />
              Find Nearest Hospital
            </Button>
            <Button variant="secondary" size="sm">
              <Phone className="mr-2 h-4 w-4" />
              Call 911
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}