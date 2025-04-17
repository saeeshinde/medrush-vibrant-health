
import { Phone, AlertCircle, Heart, Stethoscope, Shield, Ambulance } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const emergencyContacts = [
  {
    name: 'Emergency Services',
    number: '911',
    description: 'For life-threatening emergencies',
    icon: <AlertCircle className="h-5 w-5 text-red-500" />
  },
  {
    name: 'Poison Control',
    number: '1-800-222-1222',
    description: 'For exposure to poisonous substances',
    icon: <Shield className="h-5 w-5 text-purple-500" />
  },
  {
    name: 'Nurse Advice Line',
    number: '1-800-874-2273',
    description: 'For medical advice from registered nurses',
    icon: <Stethoscope className="h-5 w-5 text-blue-500" />
  },
  {
    name: 'Mental Health Hotline',
    number: '1-800-273-8255',
    description: 'National Suicide Prevention Lifeline',
    icon: <Heart className="h-5 w-5 text-pink-500" />
  }
];

const EmergencyContacts = () => {
  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center">
          <Phone className="mr-2 text-red-600" size={20} />
          Emergency Contacts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {emergencyContacts.map((contact, index) => (
            <div 
              key={index}
              className="border rounded-lg p-4 hover:bg-red-50 transition-colors"
            >
              <div className="flex items-start">
                <div className="mr-3">
                  {contact.icon}
                </div>
                <div>
                  <h3 className="font-medium">{contact.name}</h3>
                  <a 
                    href={`tel:${contact.number.replace(/\D/g, '')}`} 
                    className="text-xl font-bold text-red-600 hover:underline"
                  >
                    {contact.number}
                  </a>
                  <p className="text-sm text-gray-600 mt-1">{contact.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-red-50 border border-red-100 rounded-lg p-4 mt-6">
          <div className="flex">
            <Ambulance className="h-8 w-8 text-red-600 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-medium">Need an ambulance?</h3>
              <p className="text-sm text-gray-700 mt-1">
                In a serious emergency, call 911 immediately. Provide your location and describe the situation clearly.
              </p>
              <a href="tel:911" className="inline-block mt-2 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium text-sm">
                Call 911 Now
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmergencyContacts;
