import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  FileCode,
  FolderOpen,
  GitBranch,
  Package,
  Search,
  Settings,
} from 'lucide-react';

export function Sidebar() {
  return (
    <div className="w-[60px] border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-full flex-col items-center py-4 space-y-4">
        <Button variant="ghost" size="icon" className="rounded-md">
          <FileCode className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-md">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-md">
          <FolderOpen className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-md">
          <GitBranch className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-md">
          <Package className="h-5 w-5" />
        </Button>
        <div className="flex-1" />
        <Button variant="ghost" size="icon" className="rounded-md">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}