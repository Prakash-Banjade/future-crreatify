import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream pt-20">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-primary mb-6">
            <span className="text-9xl font-bold">404</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
            The page you are looking for doesn't exist or has been moved. Let's get you back on track!
          </p>
          <Link to="/" className="btn btn-primary inline-flex items-center">
            <Home size={18} className="mr-2" /> Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;