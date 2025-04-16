
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-medrush-blue to-blue-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Medicines Delivered <br /> 
              <span className="text-yellow-300">Quick & Reliable</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              Find and order the medicines you need from nearby pharmacies and get them delivered to your doorstep within hours.
            </p>
            
            <div className="relative max-w-md">
              <Input 
                type="text" 
                placeholder="Search for medicines, healthcare products..." 
                className="pl-4 pr-12 py-6 rounded-full bg-white/20 backdrop-blur-md border-white/30 text-white placeholder:text-white/70"
              />
              <Button 
                size="icon" 
                className="absolute right-1 top-1 bottom-1 rounded-full bg-white text-medrush-blue hover:bg-white/90 hover:text-blue-700"
              >
                <Search size={20} />
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                Fever Medicine
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                Diabetes Care
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                Vitamin Supplements
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                First Aid
              </span>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-medrush-orange/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-blue-400/30 rounded-full blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1582560475093-ba66accbc953?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
                alt="Medical professional with medicine" 
                className="rounded-2xl w-full object-cover max-h-96 shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-background w-full h-12 text-background"
          style={{ fill: "currentColor" }}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.73,118.92,146.7,109.69,214.34,93.3,260.47,82.29,291.88,70.92,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
