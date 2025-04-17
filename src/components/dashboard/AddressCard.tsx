
import { useState } from 'react';
import { MapPin, Edit, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export interface Address {
  id: string;
  type: string;
  fullAddress: string;
  default: boolean;
}

interface AddressCardProps {
  addresses: Address[];
}

const AddressCard = ({ addresses }: AddressCardProps) => {
  const [selectedAddress, setSelectedAddress] = useState<string | undefined>(
    addresses.find(addr => addr.default)?.id
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddNewAddress = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the submission to add a new address
    setIsDialogOpen(false);
  };

  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">Saved Addresses</CardTitle>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" className="gap-1">
                <Plus className="h-4 w-4" /> Add New
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Address</DialogTitle>
                <DialogDescription>
                  Enter the details for your new address.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAddNewAddress} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="addressType">Address Type</Label>
                  <Input id="addressType" placeholder="Home, Work, etc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fullAddress">Full Address</Label>
                  <Input id="fullAddress" placeholder="Street, City, State, ZIP" />
                </div>
                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Save Address</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        {addresses.length === 0 ? (
          <div className="text-center py-6 text-gray-500">
            <MapPin className="mx-auto h-10 w-10 text-gray-400 mb-2" />
            <p>You haven't saved any addresses yet.</p>
            <Button variant="outline" className="mt-2" onClick={() => setIsDialogOpen(true)}>
              <Plus className="h-4 w-4 mr-1" /> Add Address
            </Button>
          </div>
        ) : (
          <RadioGroup value={selectedAddress} onValueChange={setSelectedAddress}>
            <div className="space-y-3">
              {addresses.map((address) => (
                <div key={address.id} className="flex items-start space-x-3 border rounded-md p-3">
                  <RadioGroupItem value={address.id} id={`address-${address.id}`} className="mt-1" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <Label htmlFor={`address-${address.id}`} className="font-medium cursor-pointer">
                        {address.type}
                        {address.default && (
                          <span className="ml-2 bg-medrush-blue bg-opacity-10 text-medrush-blue text-xs px-2 py-0.5 rounded-full">
                            Default
                          </span>
                        )}
                      </Label>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Edit className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{address.fullAddress}</p>
                  </div>
                </div>
              ))}
            </div>
          </RadioGroup>
        )}
      </CardContent>
    </Card>
  );
};

export default AddressCard;
