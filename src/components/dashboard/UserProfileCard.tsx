
import { User, Mail, MapPin, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface UserProfileCardProps {
  name: string;
  email: string;
  phone: string;
  address: string;
  avatarUrl?: string;
}

const UserProfileCard = ({ name, email, phone, address, avatarUrl }: UserProfileCardProps) => {
  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">User Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Avatar className="h-20 w-20 border">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback className="text-xl bg-medrush-blue text-white">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="space-y-2 mt-2 sm:mt-0">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-gray-500" />
              <span className="font-medium">{name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gray-500" />
              <span>{email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-500" />
              <span>{phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">{address}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;
