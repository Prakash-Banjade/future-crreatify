import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Calendar, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

// Components
import BlogCard from '../components/blog/BlogCard';
import TestimonialCard from '../components/testimonials/TestimonialCard';
import ContactForm from '../components/contact/ContactForm';

// Data
import { featuredBlogs } from '../data/blogData';
import { testimonials } from '../data/testimonialData';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-cream">
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-primary font-semibold">Future Creatify</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-3 mb-6">
                Empowering Educators for a <span className="text-primary">Creative Future</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                We train, facilitate, and design innovative programs through 
                project-based integrated pedagogy to shape the minds and futures of students.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="btn btn-primary">
                  Learn More
                </Link>
                <Link to="/blogs" className="btn btn-outline">
                  Read Our Blog
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Education Innovation" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="bg-primary text-white p-2 rounded-md">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">100+</p>
                    <p className="text-sm text-slate-500">Programs Created</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="bg-secondary text-white p-2 rounded-md">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">5000+</p>
                    <p className="text-sm text-slate-500">Educators Trained</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-primary/10 rounded-tl-full -z-0" />
        <div className="absolute left-0 top-0 w-1/4 h-1/4 bg-accent/10 rounded-br-full -z-0" />
      </section>

      {/* Mission Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Making a Difference in Education
            </h2>
            <p className="text-slate-600">
              At Future Creatify, we believe in the power of education to transform lives.
              Our mission is to empower educators with innovative teaching methodologies 
              and resources to create meaningful learning experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovative Pedagogy",
                description: "Developing cutting-edge teaching methods that inspire creativity and critical thinking in students.",
                icon: <BookOpen className="text-primary" size={32} />,
                delay: 0.1
              },
              {
                title: "Educator Support",
                description: "Providing resources, training, and community for educators to excel in their noble profession.",
                icon: <Users className="text-primary" size={32} />,
                delay: 0.2
              },
              {
                title: "Project-Based Learning",
                description: "Facilitating hands-on, engaging projects that make learning relevant and memorable for students.",
                icon: <Calendar className="text-primary" size={32} />,
                delay: 0.3
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.delay }}
                className="card p-8 hover-scale"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blogs Section */}
      <section className="section bg-cream">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <span className="text-primary font-semibold">Recent Blogs</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Educational Insights & Resources
              </h2>
            </div>
            <Link to="/blogs" className="btn btn-outline mt-4 md:mt-0 self-start md:self-auto">
              View All Blogs <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-fade-in">
            {featuredBlogs.slice(0, 3).map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              What Our Community Says
            </h2>
            <p className="text-slate-600">
              Don't just take our word for it. Hear from the educators and institutions 
              who have partnered with us and experienced transformative results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-cream">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Let's Connect and Collaborate
              </h2>
              <p className="text-slate-600 mb-8">
                Whether you're an educator looking for resources, a school interested in 
                our programs, or just want to learn more about what we do, we'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-md mr-4">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Our Location</h4>
                    <p className="text-slate-600">123 Education Street, Knowledge City, 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-md mr-4">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <p className="text-slate-600">info@futurecreatify.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;