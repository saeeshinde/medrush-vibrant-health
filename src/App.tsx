
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import EmergencyPage from "./pages/EmergencyPage";
import UploadPrescription from "./pages/UploadPrescription";
import NotFound from "./pages/NotFound";
import Healthcare from "./pages/Healthcare";
import ConsultDoctor from "./pages/ConsultDoctor";
import LabTest from "./pages/LabTest";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import Cart from "./pages/Cart";
import OrderTracking from "./pages/OrderTracking";
import Checkout from "./pages/Checkout";

const queryClient = new QueryClient();

const App = () => {
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Dialog open={showWelcomeDialog} onOpenChange={setShowWelcomeDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl">Welcome to MedRush!</DialogTitle>
              <DialogDescription className="text-lg">
                Please sign in to access all features and personalized services.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end space-x-4 mt-4">
              <Button variant="outline" onClick={() => setShowWelcomeDialog(false)}>
                Later
              </Button>
              <Button onClick={() => {
                setShowWelcomeDialog(false);
                window.location.href = "/login";
              }}>
                Sign In
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/medicines" element={<ProductListing />} />
              <Route path="/emergency" element={<EmergencyPage />} />
              <Route path="/upload" element={<UploadPrescription />} />
              <Route path="/healthcare" element={<Healthcare />} />
              <Route path="/consult" element={<ConsultDoctor />} />
              <Route path="/lab-tests" element={<LabTest />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/track-order" element={<OrderTracking />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
