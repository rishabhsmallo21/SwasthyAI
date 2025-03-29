import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedSpecialties } from '@/components/home/FeaturedSpecialties';
import { EmergencyBanner } from '@/components/home/EmergencyBanner';
import { AIHealthTools } from '@/components/home/AIHealthTools';
import { FindDoctors } from '@/pages/FindDoctors';
import { Services } from '@/pages/Services';
import { HealthTools } from '@/pages/HealthTools';
import { Cardiology } from '@/pages/specialties/Cardiology';
import { Neurology } from '@/pages/specialties/Neurology';
import { Pediatrics } from '@/pages/specialties/Pediatrics';
import { Orthopedics } from '@/pages/specialties/Orthopedics';
import { Ophthalmology } from '@/pages/specialties/Ophthalmology';
import { GeneralMedicine } from '@/pages/specialties/GeneralMedicine';

function HomePage() {
  return (
    <>
      <HeroSection />
      <AIHealthTools />
      <FeaturedSpecialties />
      <EmergencyBanner />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/find-doctors" element={<FindDoctors />} />
            <Route path="/services" element={<Services />} />
            <Route path="/health-tools" element={<HealthTools />} />
            <Route path="/specialties/cardiology" element={<Cardiology />} />
            <Route path="/specialties/neurology" element={<Neurology />} />
            <Route path="/specialties/pediatrics" element={<Pediatrics />} />
            <Route path="/specialties/orthopedics" element={<Orthopedics />} />
            <Route path="/specialties/ophthalmology" element={<Ophthalmology />} />
            <Route path="/specialties/general-medicine" element={<GeneralMedicine />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}