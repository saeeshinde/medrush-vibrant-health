
import { useState } from 'react';
import { 
  MapPin, Phone, Navigation, Clock, Star, Shield, ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const pharmacies = [
  {
    id: 1,
    name: 'MedPlus Emergency Care',
    address: '123 Main St, Medical District',
    distance: '0.8 miles',
    status: 'Open 24/7',
    phone: '+1 (555) 123-4567',
    rating: 4.8,
    waitTime: '~10 mins',
    img: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    name: 'QuickCare Pharmacy',
    address: '456 Health Ave, Downtown',
    distance: '1.2 miles',
    status: 'Open 24/7',
    phone: '+1 (555) 987-6543',
    rating: 4.6,
    waitTime: '~15 mins',
    img: 'https://images.unsplash.com/photo-1576072446584-4955dfe17b9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    name: 'Urgent MedStop',
    address: '789 Emergency Road',
    distance: '1.5 miles',
    status: 'Open 24/7',
    phone: '+1 (555) 456-7890',
    rating: 4.7,
    waitTime: '~5 mins',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd467388b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 4,
    name: 'AllNight Medical Supply',
    address: '101 Night Shift Blvd',
    distance: '2.3 miles',
    status: 'Open 24/7',
    phone: '+1 (555) 234-5678',
    rating: 4.5,
    waitTime: '~20 mins',
    img: 'https://images.unsplash.com/photo-1583187940594-f9feb2203847?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  }
];

const EmergencyPage = () => {
  const [activeTab, setActiveTab] = useState('list');
  
  return (
    <div>
      {/* Emergency Header */}
      <div className="bg-red-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Emergency Services</h1>
              <p className="opacity-90">Find 24/7 open pharmacies near you</p>
            </div>
            
            <a href="tel:911" className="w-full md:w-auto">
              <Button 
                size="lg" 
                className="w-full md:w-auto bg-white text-red-600 hover:bg-gray-100 hover:text-red-700"
              >
                <Phone className="mr-2" /> Call Emergency (911)
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-5 mb-6 border">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold mb-2">24/7 Emergency Pharmacies Near You</h2>
              <p className="text-gray-600">4 pharmacies found within 5 miles of your location</p>
            </div>
            
            <Tabs 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="w-full md:w-auto"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="list">List View</TabsTrigger>
                <TabsTrigger value="map">Map View</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        <div className="mb-8">
          <TabsContent value="list" className="m-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pharmacies.map((pharmacy) => (
                <div key={pharmacy.id} className="bg-white rounded-lg shadow-md overflow-hidden border">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={pharmacy.img} 
                      alt={pharmacy.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{pharmacy.name}</h3>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        {pharmacy.status}
                      </span>
                    </div>
                    
                    <div className="flex items-start mb-1">
                      <MapPin size={16} className="text-gray-500 mt-1 mr-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{pharmacy.address}</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Navigation size={14} className="text-blue-500 mr-1" />
                        <span className="text-sm">{pharmacy.distance}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Star size={14} className="text-yellow-400 fill-yellow-400 mr-1" />
                        <span className="text-sm">{pharmacy.rating}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Clock size={14} className="text-gray-500 mr-1" />
                        <span className="text-sm">{pharmacy.waitTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <a href={`tel:${pharmacy.phone}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          <Phone size={16} className="mr-2" /> Call
                        </Button>
                      </a>
                      <a href={`https://maps.google.com/?q=${pharmacy.address}`} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button className="w-full bg-medrush-blue hover:bg-blue-600">
                          <Navigation size={16} className="mr-2" /> Directions
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="map" className="m-0">
            <div className="bg-white rounded-lg shadow-md p-4 border">
              <div className="aspect-[16/9] bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin size={48} className="mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-500 mb-2">Map View Would Display Here</p>
                  <p className="text-sm text-gray-400">In a real application, this would show an interactive map with pharmacy locations</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </div>
        
        {/* Emergency Services Info */}
        <div className="bg-white rounded-lg shadow-md p-6 border">
          <h3 className="text-xl font-semibold mb-4">Emergency Medical Services</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Phone size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Emergency Contacts</h4>
                  <p className="text-sm text-gray-600 mb-2">Important numbers for immediate assistance</p>
                  <a href="#" className="text-blue-600 hover:underline text-sm flex items-center">
                    View all contacts <ArrowRight size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4 border border-green-100">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Shield size={24} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">First Aid Guide</h4>
                  <p className="text-sm text-gray-600 mb-2">Basic procedures for common emergencies</p>
                  <a href="#" className="text-green-600 hover:underline text-sm flex items-center">
                    Learn first aid <ArrowRight size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Clock size={24} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Nearest Hospitals</h4>
                  <p className="text-sm text-gray-600 mb-2">Find emergency rooms near your location</p>
                  <a href="#" className="text-purple-600 hover:underline text-sm flex items-center">
                    View hospitals <ArrowRight size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyPage;
