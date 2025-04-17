
import { useState } from 'react';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

// Sample cart data
const initialCartItems = [
  {
    id: 1,
    name: 'Paracetamol 500mg Tablets',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    price: 5.99,
    quantity: 2,
    prescription: false
  },
  {
    id: 2,
    name: 'Digital Thermometer',
    image: 'https://images.unsplash.com/photo-1584110167227-2d99321570a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    price: 12.99,
    quantity: 1,
    prescription: false
  },
  {
    id: 3,
    name: 'Antibiotics (Prescription)',
    image: 'https://images.unsplash.com/photo-1584308666999-d9e2e4a5321f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    price: 24.50,
    quantity: 1,
    prescription: true
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  
  const handleQuantityChange = (id: number, change: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };
  
  const handleRemoveItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 4.99;
  const discount = 3.50;
  const total = subtotal + deliveryFee - discount;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <div className="mx-auto w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <ShoppingCart className="h-10 w-10 text-gray-400" />
          </div>
          <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
          <Link to="/medicines">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 border">
              <h2 className="text-lg font-semibold mb-4">Cart Items ({cartItems.length})</h2>
              
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-center py-4 border-b last:border-b-0">
                  <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow sm:ml-4 mt-2 sm:mt-0 w-full">
                    <div className="flex flex-col sm:flex-row justify-between">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        {item.prescription && (
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full inline-flex items-center">
                            Prescription Required
                          </span>
                        )}
                      </div>
                      <div className="mt-2 sm:mt-0 text-right">
                        <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                        <span className="text-xs text-gray-500 block">${item.price.toFixed(2)} each</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex border rounded-md">
                        <button 
                          className="px-3 py-1 border-r"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-1 flex items-center justify-center min-w-[40px]">
                          {item.quantity}
                        </span>
                        <button 
                          className="px-3 py-1 border-l"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <button 
                        className="text-red-500 flex items-center"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        <span className="text-sm">Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-3">
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
                  
                  <Separator />
                  
                  <div className="flex justify-between font-semibold text-lg pt-2">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-medrush-blue hover:bg-medrush-blue/90">
                  Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <div className="mt-4">
                  <Link to="/medicines" className="text-medrush-blue text-sm hover:underline flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 mr-1 transform rotate-180" />
                    Continue Shopping
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
              <p className="text-sm text-yellow-800">
                Some items in your cart require a valid prescription. Please upload your prescription before checkout.
              </p>
              <Link to="/upload">
                <Button variant="outline" size="sm" className="mt-2 w-full border-yellow-300 text-yellow-800 hover:bg-yellow-100">
                  Upload Prescription
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Import at the top of the file
import { ShoppingCart } from 'lucide-react';

export default Cart;
