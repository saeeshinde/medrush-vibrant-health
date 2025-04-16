
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Diabetes Care',
    image: 'https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    count: '1,240+ products',
    path: '/category/diabetes-care'
  },
  {
    title: 'Heart Health',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    count: '890+ products',
    path: '/category/heart-health'
  },
  {
    title: 'First Aid',
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    count: '450+ products',
    path: '/category/first-aid'
  },
  {
    title: 'Vitamins & Supplements',
    image: 'https://images.unsplash.com/photo-1576671353166-c1eef41d5be7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    count: '1,750+ products',
    path: '/category/vitamins-supplements'
  },
  {
    title: 'Baby Care',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    count: '980+ products',
    path: '/category/baby-care'
  },
  {
    title: 'Pain Relief',
    image: 'https://images.unsplash.com/photo-1616391182219-e080b4d1ef0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    count: '740+ products',
    path: '/category/pain-relief'
  }
];

const FeaturedCategories = () => {
  return (
    <div className="py-10 bg-medrush-light">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-medrush-dark">Featured Categories</h2>
          <Link to="/categories" className="text-medrush-blue hover:text-blue-700 flex items-center">
            View All
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link to={category.path} key={index} className="category-card">
              <div className="h-32 md:h-36 mb-3 overflow-hidden rounded-lg">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="font-medium text-medrush-dark">{category.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{category.count}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
