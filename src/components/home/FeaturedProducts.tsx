
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingCart, Heart, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock product data
const products = [
  {
    id: 1,
    name: 'Paracetamol 500mg',
    image: 'https://images.unsplash.com/photo-1626285594050-75715ff0982c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    price: 5.99,
    rating: 4.7,
    ratingCount: 245,
    availability: 'In Stock',
    pharmacy: 'HealthPlus Pharmacy',
    deliveryTime: '30-45 min',
    category: 'medicines'
  },
  {
    id: 2,
    name: 'Digital Thermometer',
    image: 'https://images.unsplash.com/photo-1615486511262-c7b5c7f42b32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    price: 12.50,
    rating: 4.5,
    ratingCount: 189,
    availability: 'In Stock',
    pharmacy: 'MedWorld',
    deliveryTime: '1-2 hours',
    category: 'healthcare'
  },
  {
    id: 3,
    name: 'Vitamin D3 Supplements',
    image: 'https://images.unsplash.com/photo-1577349516274-37ff88a53627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    price: 15.99,
    rating: 4.8,
    ratingCount: 312,
    availability: 'In Stock',
    pharmacy: 'VitaLife Pharmacy',
    deliveryTime: '45-60 min',
    category: 'healthcare'
  },
  {
    id: 4,
    name: 'Blood Glucose Monitor',
    image: 'https://images.unsplash.com/photo-1579154341098-e4e158cc7f53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    price: 45.00,
    rating: 4.6,
    ratingCount: 178,
    availability: 'Low Stock',
    pharmacy: 'DiabeCare',
    deliveryTime: '1-2 hours',
    category: 'healthcare'
  },
  {
    id: 5,
    name: 'Omeprazole 20mg',
    image: 'https://images.unsplash.com/photo-1584308234264-dca91899d489?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    price: 8.75,
    rating: 4.5,
    ratingCount: 156,
    availability: 'In Stock',
    pharmacy: 'HealthPlus Pharmacy',
    deliveryTime: '30-45 min',
    category: 'medicines'
  },
  {
    id: 6,
    name: 'First Aid Kit Deluxe',
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    price: 29.99,
    rating: 4.9,
    ratingCount: 203,
    availability: 'In Stock',
    pharmacy: 'MedWorld',
    deliveryTime: '1-2 hours',
    category: 'healthcare'
  },
  {
    id: 7,
    name: 'Amoxicillin 250mg',
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    price: 7.50,
    rating: 4.6,
    ratingCount: 122,
    availability: 'In Stock',
    pharmacy: 'VitaLife Pharmacy',
    deliveryTime: '45-60 min',
    category: 'medicines'
  },
  {
    id: 8,
    name: 'Blood Pressure Monitor',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    price: 35.99,
    rating: 4.7,
    ratingCount: 165,
    availability: 'In Stock',
    pharmacy: 'HealthPlus Pharmacy',
    deliveryTime: '1-2 hours',
    category: 'healthcare'
  }
];

const ProductCard = ({ product }: { product: any }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  // Status color based on availability
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'In Stock': return 'bg-green-100 text-green-800';
      case 'Low Stock': return 'bg-yellow-100 text-yellow-800';
      case 'Out of Stock': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="product-card">
      <div className="relative group">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-48 object-cover"
          />
        </Link>
        
        <button 
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3 right-3 p-1.5 bg-white rounded-full shadow-md transition-colors"
        >
          <Heart 
            size={18} 
            className={isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'} 
          />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between mb-2">
          <span className={`text-xs px-2.5 py-1 rounded-full ${getStatusColor(product.availability)}`}>
            {product.availability}
          </span>
          
          <div className="flex items-center text-sm">
            <Star size={14} className="text-yellow-400 fill-yellow-400 mr-1" />
            <span>{product.rating}</span>
            <span className="text-gray-500 ml-1">({product.ratingCount})</span>
          </div>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-gray-900 mb-1 hover:text-medrush-blue truncate">{product.name}</h3>
        </Link>
        
        <div className="mb-2">
          <p className="text-sm text-gray-500">{product.pharmacy}</p>
          <div className="flex items-center text-xs text-gray-500 mt-1">
            <Clock size={12} className="mr-1" />
            <span>Delivery in {product.deliveryTime}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-3">
          <span className="font-semibold text-medrush-dark">${product.price.toFixed(2)}</span>
          <Button 
            size="sm" 
            variant="ghost" 
            className="rounded-full bg-medrush-blue/10 text-medrush-blue hover:bg-medrush-blue hover:text-white"
          >
            <ShoppingCart size={16} className="mr-1" /> Add
          </Button>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-medrush-dark">Featured Products</h2>
          <Link to="/products" className="text-medrush-blue hover:text-blue-700 flex items-center">
            View All
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All Products</TabsTrigger>
            <TabsTrigger value="medicines">Medicines</TabsTrigger>
            <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
            <TabsTrigger value="offers">Offers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="medicines" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products
                .filter(product => product.category === 'medicines')
                .map(product => (
                  <ProductCard key={product.id} product={product} />
                ))
              }
            </div>
          </TabsContent>
          
          <TabsContent value="healthcare" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products
                .filter(product => product.category === 'healthcare')
                .map(product => (
                  <ProductCard key={product.id} product={product} />
                ))
              }
            </div>
          </TabsContent>
          
          <TabsContent value="offers" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Show first 4 products as "offers" for demo */}
              {products.slice(0, 4).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FeaturedProducts;
