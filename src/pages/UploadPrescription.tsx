
import { useState } from 'react';
import { 
  Upload, FileText, X, Check, Image, FileCheck, AlertTriangle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Step } from '@/components/ui/step';
import { Steps } from '@/components/ui/steps';

// Mock pharmacies data
const pharmacies = [
  { value: "pharmacy1", label: "HealthPlus Pharmacy - 0.8 miles away" },
  { value: "pharmacy2", label: "MedWorld - 1.2 miles away" },
  { value: "pharmacy3", label: "VitaLife Pharmacy - 1.5 miles away" },
  { value: "pharmacy4", label: "CareFirst - 2.3 miles away" }
];

// Mock prescription status
const prescriptions = [
  {
    id: 'rx-123456',
    date: '10 April 2023',
    status: 'Delivered',
    items: 3,
    pharmacy: 'HealthPlus Pharmacy',
    class: 'text-green-600 bg-green-50'
  },
  {
    id: 'rx-123457',
    date: '5 April 2023',
    status: 'Processing',
    items: 2,
    pharmacy: 'MedWorld',
    class: 'text-blue-600 bg-blue-50'
  },
  {
    id: 'rx-123458',
    date: '28 March 2023',
    status: 'Delivered',
    items: 1,
    pharmacy: 'VitaLife Pharmacy',
    class: 'text-green-600 bg-green-50'
  }
];

const UploadPrescription = () => {
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };
  
  const handleDragLeave = () => {
    setDragOver(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };
  
  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };
  
  const handleNextStep = () => {
    setStep(prev => prev + 1);
  };
  
  const handlePreviousStep = () => {
    setStep(prev => Math.max(1, prev - 1));
  };

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-medrush-dark mb-2">Upload Your Prescription</h1>
            <p className="text-gray-600">Get medicines delivered from your prescription in simple steps</p>
          </div>
          
          <div className="mb-8">
            <Steps currentStep={step} className="flex">
              <Step>Upload</Step>
              <Step>Details</Step>
              <Step>Review</Step>
              <Step>Complete</Step>
            </Steps>
          </div>
          
          <Card className="shadow-md">
            {step === 1 && (
              <>
                <CardHeader>
                  <CardTitle>Upload Prescription</CardTitle>
                  <CardDescription>
                    Upload your prescription as PDF, JPEG, or PNG files
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div 
                    className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                      dragOver ? 'border-medrush-blue bg-blue-50' : 'border-gray-300 hover:border-medrush-blue'
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById('file-upload')?.click()}
                  >
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm font-medium text-gray-900">
                      Drag & drop files here, or click to browse
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Supports: PDF, JPEG, PNG (Max 5MB per file)
                    </p>
                    <input 
                      id="file-upload" 
                      type="file" 
                      accept=".pdf,.jpg,.jpeg,.png" 
                      className="hidden" 
                      multiple
                      onChange={handleFileChange}
                    />
                  </div>
                  
                  {files.length > 0 && (
                    <div className="mt-6">
                      <h3 className="font-medium text-sm mb-3">Uploaded Files:</h3>
                      <div className="space-y-3">
                        {files.map((file, index) => {
                          const isImage = file.type.startsWith('image/');
                          return (
                            <div key={index} className="flex items-center justify-between bg-gray-50 border rounded-lg p-3">
                              <div className="flex items-center">
                                {isImage ? (
                                  <Image size={20} className="text-medrush-blue mr-3" />
                                ) : (
                                  <FileText size={20} className="text-medrush-blue mr-3" />
                                )}
                                <div>
                                  <p className="text-sm font-medium">{file.name}</p>
                                  <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                </div>
                              </div>
                              <button 
                                onClick={() => removeFile(index)} 
                                className="text-gray-500 hover:text-red-500"
                              >
                                <X size={18} />
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-col md:flex-row gap-4 mt-8 md:justify-between">
                    <Button 
                      variant="outline"
                      onClick={() => window.history.back()}
                    >
                      Cancel
                    </Button>
                    <Button 
                      onClick={handleNextStep}
                      disabled={files.length === 0}
                    >
                      Continue
                    </Button>
                  </div>
                </CardContent>
              </>
            )}
            
            {step === 2 && (
              <>
                <CardHeader>
                  <CardTitle>Patient Details</CardTitle>
                  <CardDescription>
                    Please provide the patient information for this prescription
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="patientName">Patient Name*</Label>
                        <Input id="patientName" placeholder="Full name" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="patientAge">Patient Age*</Label>
                        <Input id="patientAge" type="number" placeholder="Age in years" className="mt-1" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phoneNumber">Phone Number*</Label>
                        <Input id="phoneNumber" placeholder="Your contact number" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Your email address" className="mt-1" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="pharmacy">Preferred Pharmacy*</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a nearby pharmacy" />
                        </SelectTrigger>
                        <SelectContent>
                          {pharmacies.map((pharmacy) => (
                            <SelectItem key={pharmacy.value} value={pharmacy.value}>
                              {pharmacy.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea 
                        id="notes" 
                        placeholder="Provide any special instructions or additional information about your prescription"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4 mt-8 md:justify-between">
                    <Button 
                      variant="outline"
                      onClick={handlePreviousStep}
                    >
                      Back
                    </Button>
                    <Button onClick={handleNextStep}>
                      Continue
                    </Button>
                  </div>
                </CardContent>
              </>
            )}
            
            {step === 3 && (
              <>
                <CardHeader>
                  <CardTitle>Review Your Prescription</CardTitle>
                  <CardDescription>
                    Please confirm your prescription details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-gray-50 border rounded-lg p-4">
                      <h3 className="font-medium mb-3">Uploaded Files:</h3>
                      <div className="space-y-2">
                        {files.map((file, index) => (
                          <div key={index} className="flex items-center">
                            <FileCheck size={18} className="text-green-500 mr-2" />
                            <span className="text-sm">{file.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 border rounded-lg p-4">
                      <h3 className="font-medium mb-3">Patient Details:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Name</p>
                          <p className="font-medium">John Doe</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Age</p>
                          <p className="font-medium">35</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Contact</p>
                          <p className="font-medium">(555) 123-4567</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="font-medium">john.doe@example.com</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-sm text-gray-500">Pharmacy</p>
                          <p className="font-medium">HealthPlus Pharmacy - 0.8 miles away</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <AlertTriangle size={20} className="text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-blue-600">Important Information</h4>
                          <p className="text-sm text-blue-600">
                            Your prescription will be reviewed by licensed pharmacists. You'll be notified when it's approved and ready for processing.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4 mt-8 md:justify-between">
                    <Button 
                      variant="outline"
                      onClick={handlePreviousStep}
                    >
                      Back
                    </Button>
                    <Button onClick={handleNextStep}>
                      Submit Prescription
                    </Button>
                  </div>
                </CardContent>
              </>
            )}
            
            {step === 4 && (
              <>
                <CardHeader>
                  <CardTitle>Prescription Submitted</CardTitle>
                  <CardDescription>
                    Your prescription has been successfully uploaded
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
                      <Check size={32} />
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                      Your prescription has been uploaded successfully. We'll notify you once it's reviewed by our pharmacist team.
                    </p>
                    
                    <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">Prescription ID</p>
                          <p className="font-medium">RX-924857</p>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
                          Under Review
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-x-4">
                      <Button asChild>
                        <a href="/">Return Home</a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="/account">View My Prescriptions</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </>
            )}
          </Card>
          
          {step < 4 && (
            <div className="mt-10">
              <h3 className="font-medium mb-4">Previous Prescriptions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {prescriptions.map((prescription) => (
                  <div 
                    key={prescription.id} 
                    className="bg-white rounded-lg shadow-sm border p-4"
                  >
                    <div className="flex justify-between mb-2">
                      <p className="font-medium">{prescription.id}</p>
                      <span className={`px-2 py-0.5 rounded-full text-xs ${prescription.class}`}>
                        {prescription.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">Uploaded: {prescription.date}</p>
                    <p className="text-sm text-gray-500 mb-3">Items: {prescription.items}</p>
                    <p className="text-sm">{prescription.pharmacy}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadPrescription;
