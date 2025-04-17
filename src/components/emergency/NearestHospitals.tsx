
import { Hospital, Navigation, Phone, Clock, Star, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const hospitals = [
  {
    name: 'City General Hospital',
    address: '123 Hospital Ave, Medical District',
    distance: '1.2 miles',
    phone: '+1 (555) 234-5678',
    rating: 4.8,
    emergency: true,
    hours: '24/7'
  },
  {
    name: 'University Medical Center',
    address: '456 Health Blvd, Downtown',
    distance: '2.5 miles',
    phone: '+1 (555) 876-5432',
    rating: 4.9,
    emergency: true,
    hours: '24/7'
  },
  {
    name: 'Community Hospital',
    address: '789 Care Street, Westside',
    distance: '3.1 miles',
    phone: '+1 (555) 345-6789',
    rating: 4.6,
    emergency: true,
    hours: '24/7'
  }
];

const NearestHospitals = () => {
  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center">
          <Hospital className="mr-2 text-red-600" size={20} />
          Nearest Emergency Hospitals
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {hospitals.map((hospital, index) => (
            <div key={index} className="border rounded-lg p-4 hover:bg-red-50 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <h3 className="font-semibold">{hospital.name}</h3>
                    {hospital.emergency && (
                      <span className="ml-2 bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full">
                        ER
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <Navigation className="h-4 w-4 mr-1" />
                    <span>{hospital.distance}</span>
                    
                    <span className="mx-2">•</span>
                    
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                    <span>{hospital.rating}</span>
                    
                    <span className="mx-2">•</span>
                    
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{hospital.hours}</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mt-1">{hospital.address}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 mt-3">
                <a href={`tel:${hospital.phone.replace(/\D/g, '')}`} className="flex-1">
                  <Button variant="outline" size="sm" className="w-full">
                    <Phone className="h-4 w-4 mr-2" /> Call
                  </Button>
                </a>
                
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(hospital.name + ', ' + hospital.address)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1"
                >
                  <Button size="sm" className="w-full">
                    <Navigation className="h-4 w-4 mr-2" /> Directions
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-6">
          <div className="flex">
            <Info className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
            <div className="text-sm text-blue-700">
              <p>
                Always call 911 for life-threatening emergencies. For non-life-threatening situations, 
                consider urgent care centers or calling ahead to the emergency room.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NearestHospitals;
