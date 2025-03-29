import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Stethoscope, Search, Menu, X } from 'lucide-react';
import { ModeToggle } from '@/components/theme/ModeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <Stethoscope className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">MedAI</span>
          </Link>
        </div>

        <NavigationMenu className="mx-6 hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/find-doctors">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Find Doctors
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/services">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Services
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/health-tools">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Health Tools
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <ModeToggle />
          <div className="hidden md:flex space-x-2">
            <Button variant="outline">Sign In</Button>
            <Button>Register</Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-b md:hidden">
          <nav className="container py-4">
            <ul className="space-y-4">
              <li>
                <Link to="/find-doctors" className="block px-4 py-2 hover:bg-accent rounded-md">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link to="/services" className="block px-4 py-2 hover:bg-accent rounded-md">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/health-tools" className="block px-4 py-2 hover:bg-accent rounded-md">
                  Health Tools
                </Link>
              </li>
              <li className="pt-4 border-t">
                <div className="flex flex-col space-y-4 px-4">
                  <Button variant="outline" className="w-full">Sign In</Button>
                  <Button className="w-full">Register</Button>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}