
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  MapPin,
  ArrowRight, 
  CheckCircle, 
  Truck, 
  ShieldCheck 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/components/ui/use-toast';

const Checkout = () => {
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [deliveryOption, setDeliveryOption] = useState("standard");
  
  // Sample cart items
  const cartItems = [
    {
      id: 1,
      name: 'Paracetamol 500mg Tablets',
      image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=300',
      price: 5.99,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Digital Thermometer',
      image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=300',
      price: 12.99,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Antibiotics (Prescription)',
      image: 'https://images.unsplash.com/photo-1550572017-edd951b55074?q=80&w=300',
      price: 24.50,
      quantity: 1,
    }
  ];
  
  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = deliveryOption === "express" ? 9.99 : 4.99;
  const discount = 3.50;
  const total = subtotal + deliveryFee - discount;
  
  const handlePlaceOrder = () => {
    toast({
      title: "Order Placed Successfully!",
      description: "Your order has been placed and will be delivered soon.",
      duration: 5000,
    });
    // In a real app, we would redirect to order confirmation page
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Delivery & Payment */}
        <div className="lg:col-span-2 space-y-6">
          {/* Delivery Address */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-medrush-blue" />
                  Delivery Address
                </h2>
                <Link to="/dashboard" className="text-sm text-medrush-blue hover:underline">
                  Change
                </Link>
              </div>
              
              <div className="bg-gray-50 border rounded-md p-4">
                <div className="flex items-start">
                  <div>
                    <p className="font-medium">Home</p>
                    <p className="text-gray-700 mt-1">123 Main St, Apartment 4B, Medical District, NY 10001</p>
                    <p className="text-gray-600 text-sm mt-1">John Doe • +1 (555) 123-4567</p>
                  </div>
                  <div className="ml-auto">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Default</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Delivery Options */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <Truck className="mr-2 h-5 w-5 text-medrush-blue" />
                Delivery Options
              </h2>
              
              <RadioGroup value={deliveryOption} onValueChange={setDeliveryOption} className="space-y-3">
                <div className={`flex items-center justify-between rounded-md border p-4 ${deliveryOption === "standard" ? "border-medrush-blue bg-blue-50" : ""}`}>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="standard" id="standard" />
                    <label htmlFor="standard" className="flex flex-col cursor-pointer">
                      <span className="font-medium">Standard Delivery</span>
                      <span className="text-sm text-gray-600">Delivery within 24-48 hours</span>
                    </label>
                  </div>
                  <span className="font-medium">${deliveryOption === "standard" ? "4.99" : ""}</span>
                </div>
                
                <div className={`flex items-center justify-between rounded-md border p-4 ${deliveryOption === "express" ? "border-medrush-blue bg-blue-50" : ""}`}>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="express" id="express" />
                    <label htmlFor="express" className="flex flex-col cursor-pointer">
                      <span className="font-medium">Express Delivery</span>
                      <span className="text-sm text-gray-600">Delivery within 2-4 hours</span>
                    </label>
                  </div>
                  <span className="font-medium">${deliveryOption === "express" ? "9.99" : ""}</span>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
          
          {/* Payment Method */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <CreditCard className="mr-2 h-5 w-5 text-medrush-blue" />
                Payment Method
              </h2>
              
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                <div className={`flex items-center justify-between rounded-md border p-4 ${paymentMethod === "card" ? "border-medrush-blue bg-blue-50" : ""}`}>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="card" id="card" />
                    <label htmlFor="card" className="flex items-center cursor-pointer">
                      <span className="font-medium">Credit/Debit Card</span>
                      <div className="flex ml-3 space-x-1">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" alt="Visa" className="h-5" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" alt="Mastercard" className="h-5" />
                      </div>
                    </label>
                  </div>
                </div>
                
                <div className={`flex items-center justify-between rounded-md border p-4 ${paymentMethod === "cod" ? "border-medrush-blue bg-blue-50" : ""}`}>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="cod" id="cod" />
                    <label htmlFor="cod" className="font-medium cursor-pointer">Cash on Delivery</label>
                  </div>
                </div>
                
                <div className={`flex items-center justify-between rounded-md border p-4 ${paymentMethod === "wallet" ? "border-medrush-blue bg-blue-50" : ""}`}>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="wallet" id="wallet" />
                    <label htmlFor="wallet" className="font-medium cursor-pointer">Pay with Digital Wallet</label>
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>
        
        {/* Right Column - Order Summary */}
        <div>
          <Card className="sticky top-20">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              
              {/* Items */}
              <div className="space-y-4 mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center">
                    <div className="h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-3 flex-grow">
                      <p className="text-sm font-medium line-clamp-1">{item.name}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              {/* Price Breakdown */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
                
                <Separator className="my-2" />
                
                <div className="flex justify-between font-semibold text-base pt-2">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <Button 
                className="w-full mt-6 bg-medrush-blue hover:bg-medrush-blue/90"
                onClick={handlePlaceOrder}
              >
                Place Order <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                  <CheckCircle className="h-3 w-3" />
                  <span>Free Returns</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                  <ShieldCheck className="h-3 w-3" />
                  <span>Secure Checkout</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
