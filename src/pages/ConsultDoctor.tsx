
import { useState } from "react";
import { 
  Button
} from "@/components/ui/button";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Step } from "@/components/ui/step";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Stethoscope, 
  Calendar, 
  Clock, 
  Video, 
  Phone, 
  MessageCircle,
  Star,
  CalendarDays,
  Heart,
  Brain,
  Baby,
  Activity
} from "lucide-react";
import { useForm } from "react-hook-form";

const specialists = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "15+ years",
    rating: 4.8,
    reviews: 120,
    image: "/placeholder.svg",
    availability: "Today",
    icon: <Heart className="text-red-500" />
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    experience: "12+ years",
    rating: 4.7,
    reviews: 98,
    image: "/placeholder.svg",
    availability: "Tomorrow",
    icon: <Brain className="text-purple-500" />
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    experience: "10+ years",
    rating: 4.9,
    reviews: 145,
    image: "/placeholder.svg",
    availability: "Today",
    icon: <Baby className="text-blue-500" />
  },
  {
    id: 4,
    name: "Dr. Robert Williams",
    specialty: "Pulmonologist",
    experience: "14+ years",
    rating: 4.6,
    reviews: 87,
    image: "/placeholder.svg",
    availability: "Tomorrow",
    icon: <Activity className="text-green-500" />
  }
];

type FormValues = {
  name: string;
  age: string;
  gender: string;
  symptoms: string;
  preferredTime: string;
};

const ConsultDoctor = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      age: "",
      gender: "",
      symptoms: "",
      preferredTime: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // Move to next step
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      alert("Consultation booked successfully!");
      // Reset form and steps
      form.reset();
      setCurrentStep(1);
      setSelectedDoctor(null);
      setSelectedMode(null);
    }
  };

  const handleDoctorSelection = (doctorId: number) => {
    setSelectedDoctor(doctorId);
  };

  const handleModeSelection = (mode: string) => {
    setSelectedMode(mode);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Consult a Doctor</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get expert medical advice from our network of specialists. Choose your preferred consultation mode and schedule an appointment.
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="w-full max-w-4xl">
          <div className="flex justify-between mb-8">
            <Step className={`${currentStep >= 1 ? "text-medrush-blue" : "text-gray-400"}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${currentStep >= 1 ? "bg-medrush-blue text-white" : "bg-gray-200"}`}>1</div>
              <span className="text-sm">Patient Details</span>
            </Step>
            <div className={`flex-1 border-t-2 self-center ${currentStep >= 2 ? "border-medrush-blue" : "border-gray-200"}`} />
            <Step className={`${currentStep >= 2 ? "text-medrush-blue" : "text-gray-400"}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${currentStep >= 2 ? "bg-medrush-blue text-white" : "bg-gray-200"}`}>2</div>
              <span className="text-sm">Select Doctor</span>
            </Step>
            <div className={`flex-1 border-t-2 self-center ${currentStep >= 3 ? "border-medrush-blue" : "border-gray-200"}`} />
            <Step className={`${currentStep >= 3 ? "text-medrush-blue" : "text-gray-400"}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${currentStep >= 3 ? "bg-medrush-blue text-white" : "bg-gray-200"}`}>3</div>
              <span className="text-sm">Book Appointment</span>
            </Step>
          </div>

          {currentStep === 1 && (
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Tell us about yourself</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Age</FormLabel>
                            <FormControl>
                              <Input type="number" placeholder="Enter your age" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Gender</FormLabel>
                          <FormControl>
                            <select
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              {...field}
                            >
                              <option value="">Select gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="symptoms"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Describe your symptoms</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Please describe your symptoms or health concerns" {...field} />
                          </FormControl>
                          <FormDescription>
                            This information will be shared with the doctor before your consultation.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-end">
                      <Button type="submit">Continue</Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}

          {currentStep === 2 && (
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Select a Specialist</h2>
                
                <Tabs defaultValue="all" className="w-full mb-6">
                  <TabsList className="w-full grid grid-cols-4 mb-6">
                    <TabsTrigger value="all">All Specialists</TabsTrigger>
                    <TabsTrigger value="today">Available Today</TabsTrigger>
                    <TabsTrigger value="top">Top Rated</TabsTrigger>
                    <TabsTrigger value="cardio">Cardiologists</TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {specialists.map((doctor) => (
                        <div 
                          key={doctor.id} 
                          className={`border rounded-lg p-4 cursor-pointer transition-all ${selectedDoctor === doctor.id ? 'border-medrush-blue bg-blue-50' : 'hover:border-medrush-blue'}`}
                          onClick={() => handleDoctorSelection(doctor.id)}
                        >
                          <div className="flex items-center">
                            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center mr-4">
                              <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{doctor.name}</h3>
                              <div className="flex items-center mb-1">
                                {doctor.icon}
                                <span className="text-sm ml-1">{doctor.specialty}</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <span>{doctor.experience} exp</span>
                                <span className="mx-2">•</span>
                                <div className="flex items-center">
                                  <Star size={14} className="text-yellow-400 mr-1" fill="#FBBF24" />
                                  <span>{doctor.rating} ({doctor.reviews})</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-3 flex items-center justify-between">
                            <span className={`text-sm px-2 py-0.5 rounded ${doctor.availability === 'Today' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                              Available {doctor.availability}
                            </span>
                            <span className="text-medrush-blue text-sm font-medium">
                              View Profile
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="today" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {specialists.filter(d => d.availability === 'Today').map((doctor) => (
                        <div 
                          key={doctor.id} 
                          className={`border rounded-lg p-4 cursor-pointer transition-all ${selectedDoctor === doctor.id ? 'border-medrush-blue bg-blue-50' : 'hover:border-medrush-blue'}`}
                          onClick={() => handleDoctorSelection(doctor.id)}
                        >
                          <div className="flex items-center">
                            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center mr-4">
                              <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{doctor.name}</h3>
                              <div className="flex items-center mb-1">
                                {doctor.icon}
                                <span className="text-sm ml-1">{doctor.specialty}</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <span>{doctor.experience} exp</span>
                                <span className="mx-2">•</span>
                                <div className="flex items-center">
                                  <Star size={14} className="text-yellow-400 mr-1" fill="#FBBF24" />
                                  <span>{doctor.rating} ({doctor.reviews})</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-3 flex items-center justify-between">
                            <span className="text-sm px-2 py-0.5 rounded bg-green-100 text-green-800">
                              Available Today
                            </span>
                            <span className="text-medrush-blue text-sm font-medium">
                              View Profile
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  {/* Other tabs would be implemented similarly */}
                </Tabs>

                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={() => setCurrentStep(1)}>Back</Button>
                  <Button 
                    onClick={() => setCurrentStep(3)} 
                    disabled={!selectedDoctor}
                  >
                    Continue
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 3 && (
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Schedule Your Appointment</h2>
                
                <div className="mb-6">
                  <h3 className="text-base font-medium mb-3">Select Consultation Mode</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div 
                      className={`border rounded-lg p-4 flex flex-col items-center cursor-pointer transition-all ${selectedMode === 'video' ? 'border-medrush-blue bg-blue-50' : 'hover:border-medrush-blue'}`}
                      onClick={() => handleModeSelection('video')}
                    >
                      <div className="bg-blue-100 p-3 rounded-full mb-2">
                        <Video size={24} className="text-medrush-blue" />
                      </div>
                      <span className="font-medium">Video Call</span>
                    </div>
                    <div 
                      className={`border rounded-lg p-4 flex flex-col items-center cursor-pointer transition-all ${selectedMode === 'audio' ? 'border-medrush-blue bg-blue-50' : 'hover:border-medrush-blue'}`}
                      onClick={() => handleModeSelection('audio')}
                    >
                      <div className="bg-green-100 p-3 rounded-full mb-2">
                        <Phone size={24} className="text-green-600" />
                      </div>
                      <span className="font-medium">Audio Call</span>
                    </div>
                    <div 
                      className={`border rounded-lg p-4 flex flex-col items-center cursor-pointer transition-all ${selectedMode === 'chat' ? 'border-medrush-blue bg-blue-50' : 'hover:border-medrush-blue'}`}
                      onClick={() => handleModeSelection('chat')}
                    >
                      <div className="bg-purple-100 p-3 rounded-full mb-2">
                        <MessageCircle size={24} className="text-purple-600" />
                      </div>
                      <span className="font-medium">Live Chat</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-base font-medium mb-3">Select Date & Time</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="preferredTime"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Select Date</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
                              <Input type="date" className="pl-10" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormItem className="flex flex-col">
                      <FormLabel>Available Time Slots</FormLabel>
                      <div className="grid grid-cols-3 gap-2">
                        {["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"].map((time) => (
                          <div 
                            key={time}
                            className="border rounded p-2 text-center text-sm cursor-pointer hover:border-medrush-blue hover:bg-blue-50"
                          >
                            {time}
                          </div>
                        ))}
                      </div>
                    </FormItem>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="text-base font-medium mb-2">Consultation Summary</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <p className="text-sm text-gray-600">Doctor</p>
                      <p className="font-medium">{specialists.find(d => d.id === selectedDoctor)?.name || "Not selected"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Specialty</p>
                      <p className="font-medium">{specialists.find(d => d.id === selectedDoctor)?.specialty || "Not selected"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Consultation Mode</p>
                      <p className="font-medium capitalize">{selectedMode || "Not selected"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Fee</p>
                      <p className="font-medium">$49.99</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setCurrentStep(2)}>Back</Button>
                  <Button 
                    onClick={form.handleSubmit(onSubmit)}
                    disabled={!selectedMode}
                  >
                    Confirm Booking
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 md:p-10 mb-10">
        <div className="md:flex items-center justify-between">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">24/7 Emergency Consultations</h2>
            <p className="text-gray-600 mb-4">
              Need urgent medical advice? Connect with our emergency doctors available round the clock.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
              <Phone size={16} className="inline-block mr-2" /> Emergency Consult
            </button>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img src="/placeholder.svg" alt="Emergency Consultation" className="w-48 h-48 object-contain" />
          </div>
        </div>
      </div>
      
      <div className="text-center mt-10 mb-6">
        <h2 className="text-2xl font-bold mb-3">Why Choose Our Doctors?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our platform connects you with experienced and qualified medical professionals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="bg-blue-100 p-4 inline-block rounded-full mb-4">
              <Stethoscope size={28} className="text-medrush-blue" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Experienced Specialists</h3>
            <p className="text-gray-600">
              Our doctors have 10+ years of experience in their specialized fields.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="bg-green-100 p-4 inline-block rounded-full mb-4">
              <Clock size={28} className="text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Quick Appointments</h3>
            <p className="text-gray-600">
              Get same-day appointments with our wide network of specialists.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="bg-purple-100 p-4 inline-block rounded-full mb-4">
              <Calendar size={28} className="text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Flexible Scheduling</h3>
            <p className="text-gray-600">
              Choose from video, audio, or chat consultations at your convenience.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConsultDoctor;
