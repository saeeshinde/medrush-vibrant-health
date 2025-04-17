
import { Package, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export interface Order {
  id: string;
  date: string;
  status: 'completed' | 'processing' | 'shipped' | 'cancelled';
  items: number;
  total: number;
}

interface OrderHistoryCardProps {
  recentOrders: Order[];
}

const OrderHistoryCard = ({ recentOrders }: OrderHistoryCardProps) => {
  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        {recentOrders.length === 0 ? (
          <div className="text-center py-6 text-gray-500">
            <Package className="mx-auto h-10 w-10 text-gray-400 mb-2" />
            <p>You haven't placed any orders yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div 
                key={order.id} 
                className="border rounded-md p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Order #{order.id}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{order.date}</div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                  <div className="text-sm">
                    <span className="font-medium">${order.total.toFixed(2)}</span>
                    <span className="text-gray-500 ml-1">({order.items} items)</span>
                  </div>
                  <Link to={`/orders/${order.id}`}>
                    <Button variant="ghost" size="sm" className="text-medrush-blue hover:text-medrush-blue p-0 h-auto">
                      View Details <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
            
            <div className="text-center mt-2">
              <Link to="/dashboard/orders">
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                  View All Orders
                </Button>
              </Link>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default OrderHistoryCard;
