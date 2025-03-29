import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AISymptomChecker } from '@/components/tools/AISymptomChecker';
import { HealthRiskAssessment } from '@/components/tools/HealthRiskAssessment';
import { SmartScheduling } from '@/components/tools/SmartScheduling';
import { VirtualConsultation } from '@/components/tools/VirtualConsultation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function HealthTools() {
  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">AI-Powered Health Tools</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Advanced tools powered by artificial intelligence to help you make informed
          decisions about your health.
        </p>
      </div>

      <Tabs defaultValue="symptom-checker" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="symptom-checker">Symptom Checker</TabsTrigger>
          <TabsTrigger value="risk-assessment">Risk Assessment</TabsTrigger>
          <TabsTrigger value="scheduling">Smart Scheduling</TabsTrigger>
          <TabsTrigger value="consultation">Virtual Consultation</TabsTrigger>
        </TabsList>
        
        <TabsContent value="symptom-checker">
          <AISymptomChecker />
        </TabsContent>
        
        <TabsContent value="risk-assessment">
          <HealthRiskAssessment />
        </TabsContent>
        
        <TabsContent value="scheduling">
          <SmartScheduling />
        </TabsContent>
        
        <TabsContent value="consultation">
          <VirtualConsultation />
        </TabsContent>
      </Tabs>
    </div>
  );
}