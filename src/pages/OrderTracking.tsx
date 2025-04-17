
import { useState } from 'react';
import { 
  Package, CheckCircle, Clock, Truck, Home, Search,
  ChevronDown, ChevronUp, MapPin, Calendar, Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Sample order data
const orderData = {
  id: 'ORD48756',
  status: 'shipped',
  estimatedDelivery: 'Apr 18, 2025',
  trackingNumber: 'TRK123456789',
  items: [
    {
      name: 'Paracetamol 500mg Tablets',
      quantity: 2,
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Digital Thermometer',
      quantity: 1,
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1584110167227-2d99321570a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    }
  ],
  timeline: [
    {
      status: 'Order Placed',
      date: 'Apr 15, 2025',
      time: '10:30 AM',
      description: 'Your order has been received and confirmed.',
      complete: true
    },
    {
      status: 'Prescription Verified',
      date: 'Apr 15, 2025',
      time: '12:45 PM',
      description: 'Your prescription has been verified by our pharmacists.',
      complete: true
    },
    {
      status: 'Order Processed',
      date: 'Apr 16, 2025',
      time: '09:15 AM',
      description: 'Your order has been processed and packed.',
      complete: true
    },
    {
      status: 'Shipped',
      date: 'Apr 16, 2025',
      time: '03:30 PM',
      description: 'Your package has been picked up by the courier.',
      complete: true
    },
    {
      status: 'Out for Delivery',
      date: 'Apr 18, 2025',
      time: 'Expected',
      description: 'Your package is out for delivery.',
      complete: false
    },
    {
      status: 'Delivered',
      date: 'Apr 18, 2025',
      time: 'Expected',
      description: 'Your package will be delivered.',
      complete: false
    }
  ],
  deliveryAddress: {
    fullName: 'John Doe',
    address: '123 Main St, Apartment 4B',
    city: 'Medical District',
    state: 'NY',
    zipCode: '10001',
    phone: '+1 (555) 123-4567'
  }
};

const OrderTracking = () => {
  const [trackingId, setTrackingId] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [activeTab, setActiveTab] = useState('track');
  const [order, setOrder] = useState(orderData);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would fetch the order with the tracking ID
    console.log('Searching for order:', trackingId);
    // For demo purposes we just show the sample order
    setOrder(orderData);
    setShowDetails(true);
  };

  // Helper function to get status icon
  const getStatusIcon = (status: string, complete: boolean) => {
    if (complete) {
      return <CheckCircle className="h-6 w-6 text-green-500" />;
    }
    
    switch (status.toLowerCase()) {
      case 'order placed':
        return <Package className="h-6 w-6 text-medrush-blue" />;
      case 'shipped':
        return <Truck className="h-6 w-6 text-medrush-blue" />;
      case 'out for delivery':
        return <Truck className="h-6 w-6 text-medrush-blue" />;
      case 'delivered':
        return <Home className="h-6 w-6 text-medrush-blue" />;
      default:
        return <Clock className="h-6 w-6 text-medrush-blue" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Track Your Order</h1>

      <div className="bg-white rounded-lg shadow-md p-6 border mb-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="track">Track by Order ID</TabsTrigger>
            <TabsTrigger value="recent">Recent Orders</TabsTrigger>
          </TabsList>

          <TabsContent value="track">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
              <Input
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="Enter order ID or tracking number"
                className="flex-1"
                required
              />
              <Button type="submit">
                <Search className="h-4 w-4 mr-2" /> Track Order
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="recent">
            <div className="space-y-4">
              <Card 
                className="cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => {
                  setOrder(orderData);
                  setShowDetails(true);
                }}
              >
                <CardContent className="p-4 flex justify-between items-center">
                  <div>
                    <p className="font-medium">Order #{orderData.id}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Placed on Apr 15, 2025</span>
                    </div>
                  </div>
                  <div>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                      {orderData.status.charAt(0).toUpperCase() + orderData.status.slice(1)}
                    </span>
                  </div>
                </CardContent>
              </Card>
              
              <Alert variant="default" className="bg-gray-50">
                <AlertDescription className="text-sm text-center py-2">
                  These are your recent orders from the last 30 days.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {showDetails && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Order Status */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 border">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-lg font-semibold">Order #{order.id}</h2>
                  <p className="text-sm text-gray-500">
                    Tracking Number: {order.trackingNumber}
                  </p>
                </div>
                <div>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-sm">
                  <span className="text-gray-500">Estimated Delivery:</span>{' '}
                  <span className="font-medium">{order.estimatedDelivery}</span>
                </p>
              </div>

              {/* Status Timeline */}
              <div className="relative">
                {order.timeline.map((event, index) => (
                  <div 
                    key={index} 
                    className={`flex mb-8 last:mb-0 ${!event.complete ? 'opacity-50' : ''}`}
                  >
                    {/* Status Icon */}
                    <div className="mr-4">
                      {getStatusIcon(event.status, event.complete)}
                    </div>
                    
                    {/* Status Content */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">{event.status}</h3>
                        <div className="text-sm text-gray-500">
                          {event.date} {event.time !== 'Expected' && `• ${event.time}`}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mt-1">{event.description}</p>
                    </div>
                  </div>
                ))}
                {/* Timeline Connection Lines */}
                <div className="absolute left-3 top-3 w-[1px] bg-gray-200 h-[calc(100%-3rem)] -z-10"></div>
              </div>
            </div>
          </div>

          {/* Order Details & Delivery Address */}
          <div className="lg:col-span-1 space-y-6">
            {/* Order Items */}
            <Card className="shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div 
                  className="p-4 border-b flex justify-between items-center cursor-pointer"
                  onClick={() => setShowDetails(!showDetails)}
                >
                  <h3 className="font-semibold">Order Items ({order.items.length})</h3>
                  {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
                
                <div className="p-4 space-y-4">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-12 h-12 rounded-md overflow-hidden mr-3 flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-xs text-gray-500">
                          Qty: {item.quantity} × ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Delivery Address */}
            <Card className="shadow-md">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Delivery Address</h3>
                    <p className="text-sm text-gray-600">{order.deliveryAddress.fullName}</p>
                    <p className="text-sm text-gray-600">{order.deliveryAddress.address}</p>
                    <p className="text-sm text-gray-600">
                      {order.deliveryAddress.city}, {order.deliveryAddress.state} {order.deliveryAddress.zipCode}
                    </p>
                    <div className="flex items-center mt-2 text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-1" />
                      {order.deliveryAddress.phone}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              Contact Support
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;
