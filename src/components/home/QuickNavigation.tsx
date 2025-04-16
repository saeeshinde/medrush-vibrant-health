
import { 
  ShoppingBag, Upload, Phone, Stethoscope 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickNavigation = () => {
  const navItems = [
    {
      title: 'Buy Medicines',
      description: 'Order medicines online',
      icon: <ShoppingBag className="text-medrush-blue" size={28} />,
      path: '/medicines',
      color: 'bg-blue-50',
      borderColor: 'border-blue-100'
    },
    {
      title: 'Upload Prescription',
      description: 'Quick order via prescription',
      icon: <Upload className="text-medrush-green" size={28} />,
      path: '/upload',
      color: 'bg-green-50',
      borderColor: 'border-green-100'
    },
    {
      title: 'Emergency 24x7',
      description: 'Get emergency assistance',
      icon: <Phone className="text-red-500" size={28} />,
      path: '/emergency',
      color: 'bg-red-50',
      borderColor: 'border-red-100'
    },
    {
      title: 'Consult Doctor',
      description: 'Online doctor consultation',
      icon: <Stethoscope className="text-purple-500" size={28} />,
      path: '/consult',
      color: 'bg-purple-50',
      borderColor: 'border-purple-100'
    }
  ];

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {navItems.map((item, index) => (
            <Link to={item.path} key={index}>
              <div className={`rounded-xl p-6 border ${item.borderColor} ${item.color} h-full flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:shadow-md`}>
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickNavigation;
