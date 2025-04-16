
import { useState } from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

const illnessTypes: FilterOption[] = [
  { id: 'fever', label: 'Fever', count: 124 },
  { id: 'cold', label: 'Cold & Cough', count: 98 },
  { id: 'headache', label: 'Headache', count: 86 },
  { id: 'allergies', label: 'Allergies', count: 67 },
  { id: 'stomach', label: 'Stomach Issues', count: 45 },
  { id: 'skin', label: 'Skin Conditions', count: 38 }
];

const medicineTypes: FilterOption[] = [
  { id: 'tablets', label: 'Tablets', count: 210 },
  { id: 'capsules', label: 'Capsules', count: 157 },
  { id: 'syrup', label: 'Syrups', count: 89 },
  { id: 'drops', label: 'Drops', count: 52 },
  { id: 'inhalers', label: 'Inhalers', count: 34 },
  { id: 'injections', label: 'Injections', count: 26 }
];

const brands: FilterOption[] = [
  { id: 'advil', label: 'Advil', count: 67 },
  { id: 'tylenol', label: 'Tylenol', count: 59 },
  { id: 'benadryl', label: 'Benadryl', count: 47 },
  { id: 'vicks', label: 'Vicks', count: 43 },
  { id: 'zyrtec', label: 'Zyrtec', count: 38 },
  { id: 'claritin', label: 'Claritin', count: 32 }
];

const pharmacies: FilterOption[] = [
  { id: 'healthplus', label: 'HealthPlus Pharmacy', count: 124 },
  { id: 'medworld', label: 'MedWorld', count: 105 },
  { id: 'vitalife', label: 'VitaLife Pharmacy', count: 98 },
  { id: 'carefirst', label: 'CareFirst', count: 76 },
  { id: 'quickmed', label: 'QuickMed', count: 63 }
];

const ProductFilters = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedIllnesses, setSelectedIllnesses] = useState<string[]>([]);
  const [selectedMedicineTypes, setSelectedMedicineTypes] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPharmacies, setSelectedPharmacies] = useState<string[]>([]);

  const toggleFilter = (id: string, currentSelected: string[], setSelected: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (currentSelected.includes(id)) {
      setSelected(currentSelected.filter(item => item !== id));
    } else {
      setSelected([...currentSelected, id]);
    }
  };

  const handleReset = () => {
    setPriceRange([0, 100]);
    setSelectedIllnesses([]);
    setSelectedMedicineTypes([]);
    setSelectedBrands([]);
    setSelectedPharmacies([]);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <h3 className="font-semibold text-lg mb-4">Search Filters</h3>
        
        <div className="relative mb-5">
          <Input
            type="text"
            placeholder="Search in filters..."
            className="pl-9 bg-gray-50"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
        </div>
        
        <div className="mb-4">
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleReset}
            className="w-full border-medrush-blue text-medrush-blue hover:bg-medrush-blue hover:text-white"
          >
            Reset Filters
          </Button>
        </div>
      </div>
      
      <Accordion type="multiple" className="bg-white p-4 rounded-lg shadow-sm border">
        <AccordionItem value="price" className="border-b">
          <AccordionTrigger className="font-medium">Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="py-4 px-2">
              <Slider 
                defaultValue={[0, 100]} 
                max={100} 
                step={1}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value)}
                className="my-6"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="illness" className="border-b">
          <AccordionTrigger className="font-medium">Illness Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {illnessTypes.map((illness) => (
                <div key={illness.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`illness-${illness.id}`} 
                    checked={selectedIllnesses.includes(illness.id)}
                    onCheckedChange={() => toggleFilter(
                      illness.id, 
                      selectedIllnesses, 
                      setSelectedIllnesses
                    )}
                  />
                  <label 
                    htmlFor={`illness-${illness.id}`}
                    className="text-sm flex items-center justify-between flex-1 cursor-pointer"
                  >
                    <span>{illness.label}</span>
                    <span className="text-gray-500 text-xs">({illness.count})</span>
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="medicine-type" className="border-b">
          <AccordionTrigger className="font-medium">Medicine Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {medicineTypes.map((type) => (
                <div key={type.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`medicine-${type.id}`} 
                    checked={selectedMedicineTypes.includes(type.id)}
                    onCheckedChange={() => toggleFilter(
                      type.id, 
                      selectedMedicineTypes, 
                      setSelectedMedicineTypes
                    )}
                  />
                  <label 
                    htmlFor={`medicine-${type.id}`}
                    className="text-sm flex items-center justify-between flex-1 cursor-pointer"
                  >
                    <span>{type.label}</span>
                    <span className="text-gray-500 text-xs">({type.count})</span>
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="brand" className="border-b">
          <AccordionTrigger className="font-medium">Brand</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`brand-${brand.id}`} 
                    checked={selectedBrands.includes(brand.id)}
                    onCheckedChange={() => toggleFilter(
                      brand.id, 
                      selectedBrands, 
                      setSelectedBrands
                    )}
                  />
                  <label 
                    htmlFor={`brand-${brand.id}`}
                    className="text-sm flex items-center justify-between flex-1 cursor-pointer"
                  >
                    <span>{brand.label}</span>
                    <span className="text-gray-500 text-xs">({brand.count})</span>
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="pharmacy" className="border-b-0">
          <AccordionTrigger className="font-medium">Pharmacy</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {pharmacies.map((pharmacy) => (
                <div key={pharmacy.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`pharmacy-${pharmacy.id}`} 
                    checked={selectedPharmacies.includes(pharmacy.id)}
                    onCheckedChange={() => toggleFilter(
                      pharmacy.id, 
                      selectedPharmacies, 
                      setSelectedPharmacies
                    )}
                  />
                  <label 
                    htmlFor={`pharmacy-${pharmacy.id}`}
                    className="text-sm flex items-center justify-between flex-1 cursor-pointer"
                  >
                    <span>{pharmacy.label}</span>
                    <span className="text-gray-500 text-xs">({pharmacy.count})</span>
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductFilters;
