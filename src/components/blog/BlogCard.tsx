import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlogPost } from '../../types/Blog';

interface BlogCardProps {
  blog: BlogPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="@container card overflow-hidden hover-scale"
    >
      <div className="flex flex-col @2xl:flex-row">
        <div className="">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full max-h-[300px] object-cover"
          />
        </div>
        
        <div className="p-6">
          <div className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded inline-block mb-3">
            {blog.category}
          </div>
          
          <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
          
          <div className="flex items-center text-sm text-slate-500 mb-3">
            <div className="flex items-center mr-4">
              <Calendar size={14} className="mr-1" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center">
              <User size={14} className="mr-1" />
              <span>{blog.author}</span>
            </div>
          </div>
          
          <p className="text-slate-600 mb-4">{blog.excerpt}</p>
          
          <Link to={`/blogs/${blog.id}`} className="inline-flex items-center text-primary font-medium hover:underline">
            Read More <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;