
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    id: 1,
    title: "20% OFF on First Order",
    description: "Use code MEDRUSH20 at checkout",
    buttonText: "Shop Now",
    buttonLink: "/medicines",
    background: "bg-gradient-to-r from-blue-600 to-purple-600",
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1240&q=80",
  },
  {
    id: 2,
    title: "Free Home Delivery",
    description: "On orders above $25",
    buttonText: "Order Now",
    buttonLink: "/medicines",
    background: "bg-gradient-to-r from-orange-500 to-red-500",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1240&q=80",
  },
  {
    id: 3,
    title: "Health Awareness Week",
    description: "Free doctor consultation",
    buttonText: "Book Now",
    buttonLink: "/consult",
    background: "bg-gradient-to-r from-green-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1240&q=80",
  }
];

const OfferBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`transition-opacity duration-500 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
              }`}
              style={{ zIndex: currentSlide === index ? 10 : 0 }}
            >
              <div className={`${banner.background} relative overflow-hidden rounded-2xl`}>
                <div className="absolute inset-0">
                  <img 
                    src={banner.image} 
                    alt={banner.title} 
                    className="w-full h-full object-cover opacity-20"
                  />
                </div>
                
                <div className="relative z-10 py-16 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center">
                  <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">{banner.title}</h3>
                    <p className="text-white/90 md:text-lg mb-4">{banner.description}</p>
                    <Button 
                      asChild
                      size="lg" 
                      className="bg-white text-blue-600 hover:bg-white/90"
                    >
                      <a href={banner.buttonLink}>{banner.buttonText}</a>
                    </Button>
                  </div>
                  
                  <div className="hidden md:block">
                    {/* SVG or graphic can go here */}
                    <div className="w-40 h-40 bg-white/10 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? 'w-6 bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
