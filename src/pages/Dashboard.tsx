
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import UserProfileCard from '@/components/dashboard/UserProfileCard';
import OrderHistoryCard from '@/components/dashboard/OrderHistoryCard';
import AddressCard from '@/components/dashboard/AddressCard';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard, Heart, Bell, ShieldCheck } from 'lucide-react';

// Sample data for demonstration
const userData = {
  name: "John Doe",
  email: "johndoe@example.com",
  phone: "+1 (555) 123-4567",
  address: "123 Main St, Medical District, NY 10001",
  avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
};

const recentOrders = [
  { 
    id: "ORD48756", 
    date: "Apr 15, 2025", 
    status: "completed" as const, 
    items: 3, 
    total: 45.99 
  },
  { 
    id: "ORD48721", 
    date: "Apr 10, 2025", 
    status: "shipped" as const, 
    items: 2, 
    total: 29.99 
  },
  { 
    id: "ORD48698", 
    date: "Apr 02, 2025", 
    status: "processing" as const, 
    items: 1, 
    total: 12.50 
  }
];

const savedAddresses = [
  {
    id: "addr1",
    type: "Home",
    fullAddress: "123 Main St, Apartment 4B, Medical District, NY 10001",
    default: true
  },
  {
    id: "addr2",
    type: "Work",
    fullAddress: "456 Office Plaza, Suite 200, Downtown, NY 10002",
    default: false
  }
];

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">My Account</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - User Profile */}
        <div className="lg:col-span-1 space-y-6">
          <UserProfileCard {...userData} />
          
          <Card className="shadow-md">
            <CardContent className="p-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col items-center justify-center p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                  <CreditCard className="h-6 w-6 text-medrush-blue mb-2" />
                  <span className="text-sm font-medium">Payment Methods</span>
                </div>
                
                <div className="flex flex-col items-center justify-center p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                  <Heart className="h-6 w-6 text-medrush-blue mb-2" />
                  <span className="text-sm font-medium">Wishlist</span>
                </div>
                
                <div className="flex flex-col items-center justify-center p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                  <Bell className="h-6 w-6 text-medrush-blue mb-2" />
                  <span className="text-sm font-medium">Notifications</span>
                </div>
                
                <div className="flex flex-col items-center justify-center p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                  <ShieldCheck className="h-6 w-6 text-medrush-blue mb-2" />
                  <span className="text-sm font-medium">Privacy</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Right column - Tabs for Orders & Addresses */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="orders" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="addresses">Addresses</TabsTrigger>
            </TabsList>
            <TabsContent value="orders" className="mt-4">
              <OrderHistoryCard recentOrders={recentOrders} />
            </TabsContent>
            <TabsContent value="addresses" className="mt-4">
              <AddressCard addresses={savedAddresses} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
