import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Filter, X, Grid3X3, List, ArrowDownAZ, ArrowUp, Heart, ShoppingCart, Clock, Star, ChevronLeft, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import ProductFilters from '@/components/products/ProductFilters';

// This is a stub. In a real app, we would fetch this data from a backend
const products = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: ['Paracetamol 500mg', 'Vitamin C 1000mg', 'Digital Thermometer', 'Blood Pressure Monitor', 
         'Omeprazole 20mg', 'Amoxicillin 250mg', 'First Aid Kit', 'Heating Pad', 
         'Multivitamin Tablets', 'Aspirin 325mg', 'Ibuprofen 400mg', 'Bandages'][i % 12],
  image: `https://source.unsplash.com/random/300x300/?medicine&sig=${i}`,
  price: (Math.random() * 50 + 5).toFixed(2),
  rating: (Math.random() * 2 + 3).toFixed(1),
  ratingCount: Math.floor(Math.random() * 500 + 50),
  availability: ['In Stock', 'Low Stock', 'In Stock', 'In Stock'][Math.floor(Math.random() * 3)],
  pharmacy: ['HealthPlus Pharmacy', 'MedWorld', 'VitaLife Pharmacy', 'CareFirst'][Math.floor(Math.random() * 4)],
  deliveryTime: ['30-45 min', '45-60 min', '1-2 hours'][Math.floor(Math.random() * 3)]
}));

const ProductListing = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'In Stock': return 'bg-green-100 text-green-800';
      case 'Low Stock': return 'bg-yellow-100 text-yellow-800';
      case 'Out of Stock': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm">
            <ol className="list-none p-0 flex items-center space-x-2">
              <li className="flex items-center">
                <Link to="/" className="text-gray-500 hover:text-medrush-blue transition-colors">Home</Link>
              </li>
              <span className="text-gray-400">/</span>
              <li className="font-medium text-medrush-dark">Medicines</li>
            </ol>
          </nav>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-medrush-dark">Medicines</h1>
          
          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              className="md:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? <X size={16} className="mr-1.5" /> : <Filter size={16} className="mr-1.5" />}
              {showFilters ? 'Close' : 'Filters'}
            </Button>
            
            <div className="hidden md:flex items-center space-x-3">
              <Button 
                variant={view === 'grid' ? 'default' : 'outline'} 
                size="icon" 
                className="h-9 w-9" 
                onClick={() => setView('grid')}
              >
                <Grid3X3 size={16} />
              </Button>
              <Button 
                variant={view === 'list' ? 'default' : 'outline'} 
                size="icon" 
                className="h-9 w-9" 
                onClick={() => setView('list')}
              >
                <List size={16} />
              </Button>
            </div>
            
            <Select defaultValue="featured">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="az"><div className="flex items-center"><ArrowDownAZ size={14} className="mr-2" /> A to Z</div></SelectItem>
                <SelectItem value="za"><div className="flex items-center"><ArrowUp size={14} className="mr-2" /> Z to A</div></SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters - Mobile drawer */}
          <div 
            className={`${
              showFilters ? 'block' : 'hidden'
            } md:block fixed md:relative z-40 top-0 left-0 w-full md:w-64 h-full md:h-auto overflow-y-auto bg-white md:bg-transparent pt-16 md:pt-0`}
          >
            <div className="p-4 md:p-0">
              <div className="flex justify-between items-center md:hidden mb-4">
                <h3 className="font-bold text-lg">Filters</h3>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setShowFilters(false)}
                >
                  <X size={20} />
                </Button>
              </div>
              
              <ProductFilters />
            </div>
          </div>
          
          {/* Products */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
              <div className="relative">
                <Input 
                  type="text" 
                  placeholder="Search in medicines..." 
                  className="pl-10"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            {view === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="relative">
                      <Link to={`/product/${product.id}`}>
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-48 object-cover"
                        />
                      </Link>
                      
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white shadow-md hover:bg-gray-100"
                      >
                        <Heart size={16} />
                      </Button>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(product.availability)}`}>
                          {product.availability}
                        </span>
                        
                        <div className="flex items-center">
                          <Star size={14} className="text-yellow-400 fill-yellow-400 mr-1" />
                          <span className="text-sm">{product.rating}</span>
                          <span className="text-xs text-gray-500 ml-1">({product.ratingCount})</span>
                        </div>
                      </div>
                      
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-medium text-gray-900 mb-1 hover:text-medrush-blue">{product.name}</h3>
                      </Link>
                      
                      <div className="mb-3">
                        <p className="text-sm text-gray-500">{product.pharmacy}</p>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Clock size={12} className="mr-1" />
                          <span>Delivery in {product.deliveryTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-medrush-dark">${product.price}</span>
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
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {products.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-sm border p-4 flex flex-col md:flex-row">
                    <div className="md:w-48 mb-4 md:mb-0">
                      <div className="relative">
                        <Link to={`/product/${product.id}`}>
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-48 md:h-32 object-cover rounded-lg"
                          />
                        </Link>
                        
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white shadow-md hover:bg-gray-100"
                        >
                          <Heart size={16} />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex-1 md:pl-4">
                      <div className="flex flex-col md:flex-row justify-between mb-2">
                        <Link to={`/product/${product.id}`}>
                          <h3 className="font-medium text-lg text-gray-900 hover:text-medrush-blue">{product.name}</h3>
                        </Link>
                        
                        <div className="flex items-center mt-1 md:mt-0">
                          <Star size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
                          <span>{product.rating}</span>
                          <span className="text-sm text-gray-500 ml-1">({product.ratingCount})</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 mb-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(product.availability)}`}>
                          {product.availability}
                        </span>
                        <span className="text-sm text-gray-500">{product.pharmacy}</span>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock size={12} className="mr-1" />
                          <span>Delivery in {product.deliveryTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xl font-semibold text-medrush-dark">${product.price}</span>
                        <Button 
                          size="sm" 
                          className="rounded-full bg-medrush-blue hover:bg-blue-600"
                        >
                          <ShoppingCart size={16} className="mr-2" /> Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-1">
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <ChevronLeft size={16} />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  1
                </Button>
                <Button variant="default" size="icon" className="h-8 w-8">
                  2
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  3
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <ChevronRight size={16} />
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
