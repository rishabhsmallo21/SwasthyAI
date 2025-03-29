import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Brain,
  MessageSquare,
  Sparkles,
  Wand2,
  Zap,
} from 'lucide-react';

export function AIAssistant() {
  const [prompt, setPrompt] = useState('');

  return (
    <div className="h-full flex flex-col">
      <Tabs defaultValue="assistant" className="flex-1">
        <div className="border-b p-2">
          <TabsList className="w-full">
            <TabsTrigger value="assistant">AI Assistant</TabsTrigger>
            <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
            <TabsTrigger value="docs">Documentation</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="assistant" className="flex-1 flex flex-col">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Brain className="h-6 w-6 text-primary mt-1" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    Hello! I'm your AI coding assistant. How can I help you today?
                  </p>
                </div>
              </div>
            </div>
          </ScrollArea>

          <div className="border-t p-4">
            <div className="flex space-x-2">
              <Input
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ask me anything about coding..."
                className="flex-1"
              />
              <Button>
                <Sparkles className="h-4 w-4 mr-2" />
                Ask AI
              </Button>
            </div>
            <div className="mt-4 flex space-x-2">
              <Button variant="secondary" size="sm">
                <Wand2 className="h-4 w-4 mr-2" />
                Explain Code
              </Button>
              <Button variant="secondary" size="sm">
                <Zap className="h-4 w-4 mr-2" />
                Optimize
              </Button>
              <Button variant="secondary" size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                Debug
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}