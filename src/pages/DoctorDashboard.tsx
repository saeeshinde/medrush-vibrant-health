
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, ClipboardList, Settings, Video, Phone, MessageSquare, Clock, Calendar as CalendarIcon } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";

// Sample data for demonstration
const appointments = [
  {
    id: "apt-001",
    patientName: "Sarah Johnson",
    patientId: "PT10045",
    date: "2025-04-18",
    time: "10:30 AM",
    status: "upcoming",
    issue: "Regular checkup",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3276&q=80",
  },
  {
    id: "apt-002",
    patientName: "Mike Roberts",
    patientId: "PT10089",
    date: "2025-04-18",
    time: "11:45 AM",
    status: "upcoming",
    issue: "Flu symptoms",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3276&q=80",
  },
  {
    id: "apt-003",
    patientName: "Emily Chen",
    patientId: "PT10023",
    date: "2025-04-18",
    time: "2:15 PM",
    status: "upcoming",
    issue: "Follow-up consultation",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3276&q=80",
  }
];

const recentPatients = [
  {
    id: "pt-001",
    name: "James Wilson",
    age: 45,
    lastVisit: "Apr 15, 2025",
    condition: "Hypertension",
    avatarUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3276&q=80",
  },
  {
    id: "pt-002",
    name: "Lisa Brown",
    age: 35,
    lastVisit: "Apr 14, 2025",
    condition: "Diabetes",
    avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3276&q=80",
  },
  {
    id: "pt-003",
    name: "Robert Davis",
    age: 62,
    lastVisit: "Apr 12, 2025",
    condition: "Arthritis",
    avatarUrl: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3276&q=80",
  }
];

const pendingReports = [
  {
    id: "rep-001",
    patientName: "Lisa Brown",
    testType: "Blood Work",
    dateOrdered: "Apr 14, 2025",
    priority: "high",
  },
  {
    id: "rep-002",
    patientName: "James Wilson",
    testType: "X-Ray Results",
    dateOrdered: "Apr 15, 2025",
    priority: "medium",
  },
  {
    id: "rep-003",
    patientName: "Sarah Johnson",
    testType: "MRI Scan",
    dateOrdered: "Apr 10, 2025",
    priority: "high",
  }
];

const DoctorDashboard = () => {
  const [activeVideoCall, setActiveVideoCall] = useState<string | null>(null);
  
  const handleStartVideoCall = (patientName: string) => {
    setActiveVideoCall(patientName);
  };
  
  const handleEndVideoCall = () => {
    setActiveVideoCall(null);
    toast.success("Video call ended successfully");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Doctor Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Patients</p>
              <h2 className="text-2xl font-bold">128</h2>
            </div>
            <Users className="h-8 w-8 text-muted-foreground" />
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Today's Appointments</p>
              <h2 className="text-2xl font-bold">8</h2>
            </div>
            <Calendar className="h-8 w-8 text-muted-foreground" />
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Pending Reports</p>
              <h2 className="text-2xl font-bold">12</h2>
            </div>
            <ClipboardList className="h-8 w-8 text-muted-foreground" />
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Consultations</p>
              <h2 className="text-2xl font-bold">256</h2>
            </div>
            <Settings className="h-8 w-8 text-muted-foreground" />
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="appointments" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="appointments">Today's Appointments</TabsTrigger>
          <TabsTrigger value="patients">Recent Patients</TabsTrigger>
          <TabsTrigger value="reports">Pending Reports</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
        </TabsList>

        {/* Today's Appointments Tab */}
        <TabsContent value="appointments">
          <Card>
            <CardHeader>
              <CardTitle>Today's Appointments</CardTitle>
              <CardDescription>You have {appointments.length} appointments scheduled for today.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <Card key={appointment.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="p-4 flex-grow">
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarImage src={appointment.avatarUrl} />
                              <AvatarFallback>{appointment.patientName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold">{appointment.patientName}</h3>
                              <p className="text-sm text-muted-foreground">ID: {appointment.patientId}</p>
                            </div>
                            <Badge className={`ml-auto ${getStatusColor(appointment.status)}`}>
                              {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                            </Badge>
                          </div>
                          
                          <div className="mt-3 grid grid-cols-2 gap-2">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span className="text-sm">{appointment.time}</span>
                            </div>
                            <div className="flex items-center">
                              <CalendarIcon className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span className="text-sm">{appointment.date}</span>
                            </div>
                          </div>
                          
                          <p className="text-sm mt-2">
                            <span className="font-medium">Issue:</span> {appointment.issue}
                          </p>
                        </div>
                        
                        <div className="bg-muted p-4 flex flex-row md:flex-col justify-center gap-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex items-center" 
                            onClick={() => toast.info("Opening medical records...")}
                          >
                            <ClipboardList className="h-4 w-4 mr-1" />
                            Records
                          </Button>
                          <Button 
                            variant="default" 
                            size="sm" 
                            className="flex items-center" 
                            onClick={() => handleStartVideoCall(appointment.patientName)}
                          >
                            <Video className="h-4 w-4 mr-1" />
                            Video Call
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex items-center" 
                            onClick={() => toast.info(`Messaging ${appointment.patientName}...`)}
                          >
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Message
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Recent Patients Tab */}
        <TabsContent value="patients">
          <Card>
            <CardHeader>
              <CardTitle>Recent Patients</CardTitle>
              <CardDescription>Your recently treated patients.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPatients.map((patient) => (
                  <Card key={patient.id} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={patient.avatarUrl} />
                          <AvatarFallback>{patient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-grow">
                          <h3 className="font-semibold">{patient.name}</h3>
                          <div className="flex text-sm text-muted-foreground">
                            <span className="mr-4">Age: {patient.age}</span>
                            <span>Last Visit: {patient.lastVisit}</span>
                          </div>
                          <p className="text-sm mt-1">
                            <span className="font-medium">Condition:</span> {patient.condition}
                          </p>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => toast.info("Viewing patient history...")}>
                          View History
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pending Reports Tab */}
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Pending Reports</CardTitle>
              <CardDescription>Reports awaiting your review.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingReports.map((report) => (
                  <Card key={report.id} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <div className="flex-grow">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold">{report.patientName}</h3>
                            <Badge className={`${getPriorityColor(report.priority)}`}>
                              {report.priority.charAt(0).toUpperCase() + report.priority.slice(1)} Priority
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {report.testType} - Ordered: {report.dateOrdered}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-end gap-2">
                        <Button variant="outline" size="sm" onClick={() => toast.info("Downloading report...")}>
                          Download
                        </Button>
                        <Button size="sm" onClick={() => toast.info("Opening report for review...")}>
                          Review
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Schedule Tab */}
        <TabsContent value="schedule">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Schedule</CardTitle>
              <CardDescription>Manage your appointments and availability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center bg-muted rounded-lg">
                <p className="text-muted-foreground">Calendar view will be displayed here</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Morning</Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Afternoon</Badge>
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Evening</Badge>
                <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Unavailable</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="mr-2" onClick={() => toast.success("Schedule updated")}>
                Save Changes
              </Button>
              <Button variant="outline" onClick={() => toast.info("Set availability...")}>
                Set Availability
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Video Call Dialog */}
      <Dialog open={activeVideoCall !== null} onOpenChange={() => activeVideoCall && handleEndVideoCall()}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Video Call with {activeVideoCall}</DialogTitle>
            <DialogDescription>
              You are currently in a video consultation with your patient.
            </DialogDescription>
          </DialogHeader>
          
          <div className="relative mt-2 rounded-lg overflow-hidden aspect-video bg-black">
            {/* Video placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Video className="h-16 w-16 text-white opacity-50" />
            </div>
            
            {/* Self view */}
            <div className="absolute bottom-4 right-4 w-1/4 aspect-video bg-gray-600 rounded-lg border-2 border-white overflow-hidden">
              <div className="flex items-center justify-center h-full">
                <User className="h-6 w-6 text-white opacity-50" />
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-4">
            <Button variant="outline" className="rounded-full h-10 w-10 p-0" onClick={() => toast.info("Camera toggled")}>
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="rounded-full h-10 w-10 p-0" onClick={() => toast.info("Microphone toggled")}>
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="destructive" className="rounded-full h-10 w-10 p-0" onClick={handleEndVideoCall}>
              <Phone className="h-4 w-4 rotate-135" />
            </Button>
          </div>
          
          <DialogFooter>
            <Button onClick={handleEndVideoCall}>End Call</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DoctorDashboard;
