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
import { Input } from '@/components/ui/input';
import { Activity, Heart, Scale, LineChart } from 'lucide-react';

export function HealthRiskAssessment() {
  const [age, setAge] = useState('');

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>Health Risk Assessment</CardTitle>
        <CardDescription>
          Evaluate your health risks with our AI-powered assessment tool
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Age</label>
              <Input
                type="number"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            
            <div>
              <label className="text-sm font-medium">Gender</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium">Lifestyle</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select lifestyle" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedentary">Sedentary</SelectItem>
                  <SelectItem value="moderate">Moderately Active</SelectItem>
                  <SelectItem value="active">Very Active</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full">
              Calculate Risk Assessment
            </Button>
          </div>

          <div className="grid gap-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Heart Health</CardTitle>
                  <Heart className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-2 bg-muted rounded-full" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">BMI</CardTitle>
                  <Scale className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-2 bg-muted rounded-full" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Activity Level</CardTitle>
                  <Activity className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-2 bg-muted rounded-full" />
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}