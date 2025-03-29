import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Save } from 'lucide-react';

export function CodeEditor() {
  const [code, setCode] = useState('// Start coding here...');

  return (
    <div className="h-full flex flex-col">
      <div className="border-b p-2 flex items-center justify-between">
        <Tabs defaultValue="main.ts" className="w-full">
          <TabsList>
            <TabsTrigger value="main.ts">main.ts</TabsTrigger>
            <TabsTrigger value="index.html">index.html</TabsTrigger>
            <TabsTrigger value="styles.css">styles.css</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center space-x-2">
          <Button size="sm" variant="ghost">
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
          <Button size="sm">
            <Play className="h-4 w-4 mr-2" />
            Run
          </Button>
        </div>
      </div>
      <div className="flex-1 p-4 font-mono text-sm">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-full bg-transparent resize-none focus:outline-none"
          spellCheck="false"
        />
      </div>
    </div>
  );
}