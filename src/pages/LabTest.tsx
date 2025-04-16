
import { useState } from "react";
import { 
  Button
} from "@/components/ui/button";
import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TestTube,
  Search,
  Clock,
  Home,
  CheckCircle,
  BookOpen,
  Calendar,
  MapPin,
  Star,
  Activity,
  Heart,
  Microscope,
  FlaskConical,
  Droplet,
  FlaskRound,
  Store
} from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const labTests = [
  {
    id: 1,
    name: "Complete Blood Count (CBC)",
    category: "Blood",
    price: 29.99,
    discount: 10,
    description: "Measures red and white blood cells, platelets, hemoglobin, and hematocrit.",
    preparation: "No special preparation required. Fasting may be required for certain tests.",
    sampleType: "Blood",
    reportTime: "Same day",
    icon: <Droplet className="text-red-500" />
  },
  {
    id: 2,
    name: "Lipid Profile",
    category: "Cardiac",
    price: 49.99,
    discount: 15,
    description: "Measures cholesterol levels including HDL, LDL, triglycerides, and total cholesterol.",
    preparation: "Fasting for 9-12 hours before the test. Water is allowed.",
    sampleType: "Blood",
    reportTime: "1 day",
    icon: <Heart className="text-red-500" />
  },
  {
    id: 3,
    name: "Liver Function Test",
    category: "Liver",
    price: 39.99,
    discount: 5,
    description: "Evaluates how well the liver is working by measuring proteins, liver enzymes, and bilirubin.",
    preparation: "No special preparation required.",
    sampleType: "Blood",
    reportTime: "1 day",
    icon: <FlaskRound className="text-orange-500" />
  },
  {
    id: 4,
    name: "Blood Glucose Test",
    category: "Diabetes",
    price: 19.99,
    discount: 0,
    description: "Measures the amount of glucose in blood to screen for diabetes.",
    preparation: "Fasting for 8 hours before the test. Water is allowed.",
    sampleType: "Blood",
    reportTime: "Same day",
    icon: <Activity className="text-purple-500" />
  },
  {
    id: 5,
    name: "Thyroid Profile",
    category: "Hormone",
    price: 59.99,
    discount: 20,
    description: "Measures thyroid hormones to evaluate thyroid function.",
    preparation: "No special preparation required.",
    sampleType: "Blood",
    reportTime: "2 days",
    icon: <FlaskConical className="text-blue-500" />
  },
  {
    id: 6,
    name: "Complete Urine Analysis",
    category: "Urine",
    price: 24.99,
    discount: 0,
    description: "Evaluates urine composition to detect various diseases.",
    preparation: "Collect mid-stream urine in a sterile container.",
    sampleType: "Urine",
    reportTime: "Same day",
    icon: <TestTube className="text-yellow-500" />
  }
];

const popularPackages = [
  {
    id: 1,
    name: "Basic Health Checkup",
    tests: 10,
    price: 99.99,
    discount: 20,
    description: "Essential tests to screen for common health issues.",
    includes: ["CBC", "Lipid Profile", "Blood Glucose", "Liver Function", "Kidney Function"],
    icon: <Activity className="text-medrush-blue" />
  },
  {
    id: 2,
    name: "Cardiac Health",
    tests: 8,
    price: 129.99,
    discount: 25,
    description: "Comprehensive cardiac risk assessment.",
    includes: ["Lipid Profile", "ECG", "Cardiac Enzymes", "Blood Pressure", "C-Reactive Protein"],
    icon: <Heart className="text-red-500" />
  },
  {
    id: 3,
    name: "Diabetes Screening",
    tests: 6,
    price: 79.99,
    discount: 15,
    description: "Complete diabetes screening and risk assessment.",
    includes: ["HbA1c", "Fasting Blood Sugar", "Post Prandial Blood Sugar", "Lipid Profile"],
    icon: <Activity className="text-purple-600" />
  },
  {
    id: 4,
    name: "Women's Health",
    tests: 12,
    price: 149.99,
    discount: 30,
    description: "Comprehensive women's health checkup.",
    includes: ["CBC", "Thyroid Profile", "Vitamin D", "Calcium", "Iron", "Pap Smear"],
    icon: <FlaskConical className="text-pink-500" />
  }
];

const labPartners = [
  {
    id: 1,
    name: "MedLab Diagnostics",
    rating: 4.8,
    tests: 240,
    address: "123 Main St, Downtown",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "HealthFirst Labs",
    rating: 4.7,
    tests: 180,
    address: "456 Elm St, Westside",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "CityHealth Diagnostics",
    rating: 4.9,
    tests: 320,
    address: "789 Oak St, Northside",
    image: "/placeholder.svg"
  }
];

const LabTest = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTest, setSelectedTest] = useState<null | typeof labTests[0]>(null);
  
  const filteredTests = labTests.filter(test => 
    test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    test.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Book Lab Tests</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Book diagnostic tests and checkup packages from our certified lab partners. Home sample collection available.
        </p>
      </div>

      <div className="relative mb-10">
        <div className="absolute inset-0 bg-medrush-blue/10 rounded-3xl"></div>
        <div className="relative bg-white/80 rounded-3xl p-6 md:p-10 backdrop-blur-sm">
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Book Your Tests from Home</h2>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle size={20} className="text-medrush-blue mr-2" />
                  <span>Free home sample collection</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={20} className="text-medrush-blue mr-2" />
                  <span>Certified lab partners</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={20} className="text-medrush-blue mr-2" />
                  <span>Digital reports within 24-48 hours</span>
                </li>
              </ul>
              
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  type="text" 
                  placeholder="Search for tests, packages, or conditions..." 
                  className="pl-10 py-6"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="md:w-1/3">
              <img src="/placeholder.svg" alt="Lab Test" className="w-full h-64 object-contain" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Popular Test Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularPackages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-50 p-3 inline-block rounded-full mb-4">
                  {pkg.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{pkg.name}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Includes {pkg.tests} tests • {pkg.description}
                </p>
                <div className="mb-3">
                  <span className="text-lg font-bold text-medrush-blue mr-2">
                    ${(pkg.price * (1 - pkg.discount/100)).toFixed(2)}
                  </span>
                  {pkg.discount > 0 && (
                    <span className="text-sm text-gray-500 line-through">
                      ${pkg.price.toFixed(2)}
                    </span>
                  )}
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    View Details
                  </Button>
                  <Button size="sm" className="flex-1">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Individual Tests</h2>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Tests</TabsTrigger>
            <TabsTrigger value="blood">Blood</TabsTrigger>
            <TabsTrigger value="cardiac">Cardiac</TabsTrigger>
            <TabsTrigger value="diabetes">Diabetes</TabsTrigger>
            <TabsTrigger value="hormone">Hormone</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Test Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Sample</TableHead>
                    <TableHead>Report Time</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTests.map((test) => (
                    <TableRow key={test.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center">
                          <div className="mr-3">{test.icon}</div>
                          {test.name}
                        </div>
                      </TableCell>
                      <TableCell>{test.category}</TableCell>
                      <TableCell>{test.sampleType}</TableCell>
                      <TableCell>{test.reportTime}</TableCell>
                      <TableCell>
                        <div>
                          <span className="font-semibold">
                            ${(test.price * (1 - test.discount/100)).toFixed(2)}
                          </span>
                          {test.discount > 0 && (
                            <span className="text-sm text-gray-500 line-through ml-2">
                              ${test.price.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Drawer>
                          <DrawerTrigger asChild>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => setSelectedTest(test)}
                            >
                              View Details
                            </Button>
                          </DrawerTrigger>
                          {selectedTest && (
                            <DrawerContent className="p-6 max-w-3xl mx-auto">
                              <div className="mb-6">
                                <div className="flex items-center mb-4">
                                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                                    {selectedTest.icon}
                                  </div>
                                  <div>
                                    <h3 className="text-xl font-bold">{selectedTest.name}</h3>
                                    <p className="text-gray-600">{selectedTest.category} Test</p>
                                  </div>
                                </div>
                                <p className="mb-6">{selectedTest.description}</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                  <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2 flex items-center">
                                      <BookOpen size={18} className="mr-2 text-medrush-blue" />
                                      Preparation
                                    </h4>
                                    <p className="text-sm">{selectedTest.preparation}</p>
                                  </div>
                                  <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2 flex items-center">
                                      <Clock size={18} className="mr-2 text-medrush-blue" />
                                      Report Time
                                    </h4>
                                    <p className="text-sm">{selectedTest.reportTime}</p>
                                  </div>
                                </div>
                                
                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                  <div className="flex justify-between items-center">
                                    <div>
                                      <p className="text-sm text-gray-600">Price</p>
                                      <div className="flex items-center">
                                        <p className="text-2xl font-bold text-medrush-blue">
                                          ${(selectedTest.price * (1 - selectedTest.discount/100)).toFixed(2)}
                                        </p>
                                        {selectedTest.discount > 0 && (
                                          <span className="text-sm text-gray-500 line-through ml-2 self-end">
                                            ${selectedTest.price.toFixed(2)}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                    <Button>Book Now</Button>
                                  </div>
                                </div>
                                
                                <div>
                                  <h4 className="font-semibold mb-3">Available Labs</h4>
                                  <div className="space-y-3">
                                    {labPartners.map((lab) => (
                                      <div key={lab.id} className="border p-3 rounded-lg flex justify-between">
                                        <div className="flex items-center">
                                          <div className="w-12 h-12 bg-gray-200 rounded-full mr-3 flex items-center justify-center overflow-hidden">
                                            <img src={lab.image} alt={lab.name} className="w-full h-full object-cover" />
                                          </div>
                                          <div>
                                            <p className="font-medium">{lab.name}</p>
                                            <div className="flex items-center text-sm text-gray-600">
                                              <Star size={14} className="text-yellow-400 mr-1" fill="#FBBF24" />
                                              <span>{lab.rating}</span>
                                              <span className="mx-1">•</span>
                                              <MapPin size={14} className="mr-1" />
                                              <span className="truncate max-w-[200px]">{lab.address}</span>
                                            </div>
                                          </div>
                                        </div>
                                        <Button size="sm" variant="outline">Select</Button>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </DrawerContent>
                          )}
                        </Drawer>
                        <Button className="ml-2" size="sm">Book</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          {/* Other tabs would contain filtered data */}
          <TabsContent value="blood" className="mt-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Test Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Sample</TableHead>
                    <TableHead>Report Time</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTests
                    .filter(test => test.category === 'Blood')
                    .map((test) => (
                      <TableRow key={test.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <div className="mr-3">{test.icon}</div>
                            {test.name}
                          </div>
                        </TableCell>
                        <TableCell>{test.category}</TableCell>
                        <TableCell>{test.sampleType}</TableCell>
                        <TableCell>{test.reportTime}</TableCell>
                        <TableCell>
                          <div>
                            <span className="font-semibold">
                              ${(test.price * (1 - test.discount/100)).toFixed(2)}
                            </span>
                            {test.discount > 0 && (
                              <span className="text-sm text-gray-500 line-through ml-2">
                                ${test.price.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Drawer>
                          <DrawerTrigger asChild>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => setSelectedTest(test)}
                            >
                              View Details
                            </Button>
                          </DrawerTrigger>
                          {selectedTest && (
                            <DrawerContent className="p-6 max-w-3xl mx-auto">
                              <div className="mb-6">
                                <div className="flex items-center mb-4">
                                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                                    {selectedTest.icon}
                                  </div>
                                  <div>
                                    <h3 className="text-xl font-bold">{selectedTest.name}</h3>
                                    <p className="text-gray-600">{selectedTest.category} Test</p>
                                  </div>
                                </div>
                                <p className="mb-6">{selectedTest.description}</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                  <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2 flex items-center">
                                      <BookOpen size={18} className="mr-2 text-medrush-blue" />
                                      Preparation
                                    </h4>
                                    <p className="text-sm">{selectedTest.preparation}</p>
                                  </div>
                                  <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2 flex items-center">
                                      <Clock size={18} className="mr-2 text-medrush-blue" />
                                      Report Time
                                    </h4>
                                    <p className="text-sm">{selectedTest.reportTime}</p>
                                  </div>
                                </div>
                                
                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                  <div className="flex justify-between items-center">
                                    <div>
                                      <p className="text-sm text-gray-600">Price</p>
                                      <div className="flex items-center">
                                        <p className="text-2xl font-bold text-medrush-blue">
                                          ${(selectedTest.price * (1 - selectedTest.discount/100)).toFixed(2)}
                                        </p>
                                        {selectedTest.discount > 0 && (
                                          <span className="text-sm text-gray-500 line-through ml-2 self-end">
                                            ${selectedTest.price.toFixed(2)}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                    <Button>Book Now</Button>
                                  </div>
                                </div>
                                
                                <div>
                                  <h4 className="font-semibold mb-3">Available Labs</h4>
                                  <div className="space-y-3">
                                    {labPartners.map((lab) => (
                                      <div key={lab.id} className="border p-3 rounded-lg flex justify-between">
                                        <div className="flex items-center">
                                          <div className="w-12 h-12 bg-gray-200 rounded-full mr-3 flex items-center justify-center overflow-hidden">
                                            <img src={lab.image} alt={lab.name} className="w-full h-full object-cover" />
                                          </div>
                                          <div>
                                            <p className="font-medium">{lab.name}</p>
                                            <div className="flex items-center text-sm text-gray-600">
                                              <Star size={14} className="text-yellow-400 mr-1" fill="#FBBF24" />
                                              <span>{lab.rating}</span>
                                              <span className="mx-1">•</span>
                                              <MapPin size={14} className="mr-1" />
                                              <span className="truncate max-w-[200px]">{lab.address}</span>
                                            </div>
                                          </div>
                                        </div>
                                        <Button size="sm" variant="outline">Select</Button>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </DrawerContent>
                          )}
                        </Drawer>
                        <Button className="ml-2" size="sm">Book</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 md:p-10 mb-10">
        <div className="md:flex items-center justify-between">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Home Sample Collection</h2>
            <p className="text-gray-600 mb-4">
              Our phlebotomists will visit your home to collect samples at your preferred time slot. Safe, convenient, and no extra charges.
            </p>
            <Button className="bg-medrush-blue hover:bg-blue-700">
              <Home size={16} className="mr-2" /> Schedule Home Collection
            </Button>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img src="/placeholder.svg" alt="Home Sample Collection" className="w-48 h-48 object-contain" />
          </div>
        </div>
      </div>
      
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-3">Our Lab Partners</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We partner with certified diagnostic labs to ensure accurate test results.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {labPartners.map((lab) => (
          <Card key={lab.id}>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 flex items-center justify-center overflow-hidden">
                  <img src={lab.image} alt={lab.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold">{lab.name}</h3>
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-400 mr-1" fill="#FBBF24" />
                    <span>{lab.rating} Rating</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-3">
                <Store size={16} className="mr-2" />
                <span>{lab.tests}+ tests available</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <MapPin size={16} className="mr-2" />
                <span>{lab.address}</span>
              </div>
              <Button variant="outline" className="w-full">View Tests</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="bg-blue-100 p-4 inline-block rounded-full mb-4">
              <TestTube size={28} className="text-medrush-blue" />
            </div>
            <h3 className="text-lg font-semibold mb-2">NABL Accredited Labs</h3>
            <p className="text-gray-600">
              All our partner labs are NABL certified ensuring quality and accuracy.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="bg-green-100 p-4 inline-block rounded-full mb-4">
              <Microscope size={28} className="text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Advanced Equipment</h3>
            <p className="text-gray-600">
              State-of-the-art technology for accurate and reliable results.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="bg-purple-100 p-4 inline-block rounded-full mb-4">
              <Calendar size={28} className="text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Digital Reports</h3>
            <p className="text-gray-600">
              Access your test reports online through our secure portal.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LabTest;
