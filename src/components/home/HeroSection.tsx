import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <div className="container relative z-10">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Your Health, Our Priority
          </h1>
          <p className="text-xl text-muted-foreground">
            Find the right doctor instantly with our AI-powered recommendation system
          </p>
          
          <div className="max-w-xl mx-auto">
            <div className="flex w-full items-center space-x-2">
              <Input
                type="text"
                placeholder="Search doctors, specialties, or symptoms..."
                className="h-12"
              />
              <Button size="lg" className="h-12 px-8">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>

          <div className="pt-8">
            <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
              🏥 Emergency? Call 108 or
              <Button variant="link" className="h-auto p-0 pl-1">
                find nearest hospital
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}