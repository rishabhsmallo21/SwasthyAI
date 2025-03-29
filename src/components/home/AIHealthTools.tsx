import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Brain, Activity, Calendar, MessageSquare } from 'lucide-react';

const tools = [
  {
    icon: Brain,
    title: 'AI Symptom Checker',
    description: 'Get instant insights about your symptoms',
  },
  {
    icon: Activity,
    title: 'Health Risk Assessment',
    description: 'Evaluate your health risks with AI analysis',
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'AI-powered appointment recommendations',
  },
  {
    icon: MessageSquare,
    title: 'Virtual Consultation',
    description: 'Connect with doctors remotely',
  },
];

export function AIHealthTools() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">AI-Powered Health Tools</h2>
          <p className="text-muted-foreground mt-4">
            Advanced tools to help you make informed health decisions
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <Card key={tool.title} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <tool.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="px-0">
                  Try Now →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}