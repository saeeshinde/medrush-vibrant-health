
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, ShieldPlus, Baby, Activity, Brain, Eye, Sun, Sandwich } from "lucide-react";

const categories = [
  { 
    name: "Heart Health", 
    icon: <Heart className="text-red-500" />,
    products: [
      { id: 1, name: "Omega-3 Fish Oil", price: 24.99, rating: 4.5, image: "/placeholder.svg" },
      { id: 2, name: "CoQ10 Supplement", price: 32.50, rating: 4.7, image: "/placeholder.svg" },
      { id: 3, name: "Blood Pressure Monitor", price: 59.99, rating: 4.8, image: "/placeholder.svg" },
      { id: 4, name: "Cholesterol Testing Kit", price: 45.75, rating: 4.3, image: "/placeholder.svg" }
    ]
  },
  { 
    name: "Immunity", 
    icon: <ShieldPlus className="text-purple-500" />,
    products: [
      { id: 1, name: "Vitamin C Tablets", price: 15.99, rating: 4.6, image: "/placeholder.svg" },
      { id: 2, name: "Zinc Supplements", price: 12.50, rating: 4.4, image: "/placeholder.svg" },
      { id: 3, name: "Elderberry Syrup", price: 22.99, rating: 4.7, image: "/placeholder.svg" },
      { id: 4, name: "Echinacea Extract", price: 18.75, rating: 4.2, image: "/placeholder.svg" }
    ]
  },
  { 
    name: "Baby Care", 
    icon: <Baby className="text-blue-400" />,
    products: [
      { id: 1, name: "Baby Thermometer", price: 29.99, rating: 4.8, image: "/placeholder.svg" },
      { id: 2, name: "Diaper Rash Cream", price: 8.50, rating: 4.6, image: "/placeholder.svg" },
      { id: 3, name: "Baby Probiotic Drops", price: 19.99, rating: 4.5, image: "/placeholder.svg" },
      { id: 4, name: "Infant Fever Reducer", price: 14.75, rating: 4.7, image: "/placeholder.svg" }
    ]
  },
  { 
    name: "Fitness", 
    icon: <Activity className="text-green-500" />,
    products: [
      { id: 1, name: "Protein Powder", price: 39.99, rating: 4.5, image: "/placeholder.svg" },
      { id: 2, name: "Pre-Workout Supplement", price: 34.50, rating: 4.3, image: "/placeholder.svg" },
      { id: 3, name: "BCAA Capsules", price: 28.99, rating: 4.6, image: "/placeholder.svg" },
      { id: 4, name: "Recovery Electrolytes", price: 22.75, rating: 4.4, image: "/placeholder.svg" }
    ]
  },
  { 
    name: "Brain Health", 
    icon: <Brain className="text-yellow-500" />,
    products: [
      { id: 1, name: "Omega DHA Supplement", price: 32.99, rating: 4.7, image: "/placeholder.svg" },
      { id: 2, name: "Ginkgo Biloba Extract", price: 25.50, rating: 4.4, image: "/placeholder.svg" },
      { id: 3, name: "Memory Support Formula", price: 42.99, rating: 4.6, image: "/placeholder.svg" },
      { id: 4, name: "B-Complex Vitamins", price: 18.75, rating: 4.5, image: "/placeholder.svg" }
    ]
  },
  { 
    name: "Eye Care", 
    icon: <Eye className="text-blue-600" />,
    products: [
      { id: 1, name: "Eye Drops", price: 14.99, rating: 4.6, image: "/placeholder.svg" },
      { id: 2, name: "Lutein Supplement", price: 22.50, rating: 4.5, image: "/placeholder.svg" },
      { id: 3, name: "Blue Light Glasses", price: 36.99, rating: 4.7, image: "/placeholder.svg" },
      { id: 4, name: "Eye Compress Mask", price: 19.75, rating: 4.3, image: "/placeholder.svg" }
    ]
  },
  { 
    name: "Skin Care", 
    icon: <Sun className="text-orange-500" />,
    products: [
      { id: 1, name: "Vitamin E Cream", price: 18.99, rating: 4.5, image: "/placeholder.svg" },
      { id: 2, name: "Hyaluronic Acid Serum", price: 28.50, rating: 4.8, image: "/placeholder.svg" },
      { id: 3, name: "Aloe Vera Gel", price: 12.99, rating: 4.6, image: "/placeholder.svg" },
      { id: 4, name: "Collagen Peptides", price: 32.75, rating: 4.7, image: "/placeholder.svg" }
    ]
  },
  { 
    name: "Nutrition", 
    icon: <Sandwich className="text-green-600" />,
    products: [
      { id: 1, name: "Multivitamin", price: 24.99, rating: 4.7, image: "/placeholder.svg" },
      { id: 2, name: "Magnesium Supplement", price: 18.50, rating: 4.5, image: "/placeholder.svg" },
      { id: 3, name: "Greens Powder", price: 39.99, rating: 4.6, image: "/placeholder.svg" },
      { id: 4, name: "Fiber Capsules", price: 16.75, rating: 4.4, image: "/placeholder.svg" }
    ]
  }
];

const Healthcare = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Healthcare Products</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Quality healthcare products to help you live a healthier life. Browse our extensive range of supplements, devices, and wellness essentials.
        </p>
      </div>

      <div className="mb-10">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-6">
            <TabsList className="bg-muted/30">
              <TabsTrigger value="all">All Categories</TabsTrigger>
              <TabsTrigger value="supplements">Supplements</TabsTrigger>
              <TabsTrigger value="devices">Medical Devices</TabsTrigger>
              <TabsTrigger value="wellness">Wellness</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="p-6 flex flex-col items-center text-center">
                      <div className="bg-blue-50 p-3 rounded-full mb-4">
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{category.products.length} Products</p>
                      <a href="#" className="text-medrush-blue hover:text-medrush-blue-dark text-sm font-medium">
                        Browse Category →
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="supplements" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories
                .filter(c => ["Immunity", "Heart Health", "Brain Health", "Nutrition"].includes(c.name))
                .map((category, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="p-6 flex flex-col items-center text-center">
                        <div className="bg-blue-50 p-3 rounded-full mb-4">
                          {category.icon}
                        </div>
                        <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{category.products.length} Products</p>
                        <a href="#" className="text-medrush-blue hover:text-medrush-blue-dark text-sm font-medium">
                          Browse Category →
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="devices" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories
                .filter(c => ["Heart Health", "Fitness", "Baby Care"].includes(c.name))
                .map((category, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="p-6 flex flex-col items-center text-center">
                        <div className="bg-blue-50 p-3 rounded-full mb-4">
                          {category.icon}
                        </div>
                        <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{category.products.length} Products</p>
                        <a href="#" className="text-medrush-blue hover:text-medrush-blue-dark text-sm font-medium">
                          Browse Category →
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="wellness" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories
                .filter(c => ["Skin Care", "Eye Care", "Fitness"].includes(c.name))
                .map((category, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="p-6 flex flex-col items-center text-center">
                        <div className="bg-blue-50 p-3 rounded-full mb-4">
                          {category.icon}
                        </div>
                        <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{category.products.length} Products</p>
                        <a href="#" className="text-medrush-blue hover:text-medrush-blue-dark text-sm font-medium">
                          Browse Category →
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 md:p-10 mb-10">
        <div className="md:flex items-center justify-between">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Free Health Consultation</h2>
            <p className="text-gray-600 mb-4">
              Not sure which products are right for you? Talk to our healthcare experts for personalized recommendations.
            </p>
            <button className="bg-medrush-blue hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
              Book Consultation
            </button>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img src="/placeholder.svg" alt="Consultation" className="w-48 h-48 object-contain" />
          </div>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Healthcare Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.flatMap(c => c.products).slice(0, 4).map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="h-32 w-32 object-contain" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {"★".repeat(Math.floor(product.rating))}
                      {"☆".repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span className="text-sm text-gray-500 ml-1">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">${product.price.toFixed(2)}</span>
                    <button className="bg-medrush-blue text-white px-2 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Healthcare;
