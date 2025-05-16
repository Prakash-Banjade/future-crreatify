import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Filter, User, ExternalLink } from 'lucide-react';
import { events } from '../data/eventData';

const Events: React.FC = () => {
  const [filterType, setFilterType] = useState('all');
  
  // Filter events based on type
  const filteredEvents = filterType === 'all' 
    ? events 
    : events.filter(event => event.type === filterType);
  
  // Group events by month
  const groupedEvents = filteredEvents.reduce((groups, event) => {
    const date = new Date(event.date);
    const month = date.toLocaleString('default', { month: 'long', year: 'numeric' });
    
    if (!groups[month]) {
      groups[month] = [];
    }
    
    groups[month].push(event);
    return groups;
  }, {} as Record<string, typeof events>);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-cream">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold">Events</span>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-3 mb-6">
                Join Our Educational Events
              </h1>
              <p className="text-lg text-slate-600">
                Discover workshops, webinars, conferences, and other events designed to 
                inspire and empower educators with new skills and perspectives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section bg-white">
        <div className="container-custom">
          {/* Filter Options */}
          <div className="mb-12 flex flex-wrap items-center gap-4">
            <div className="flex items-center mr-4">
              <Filter size={20} className="text-primary mr-2" />
              <span className="font-semibold">Filter by:</span>
            </div>
            
            <button
              onClick={() => setFilterType('all')}
              className={`px-4 py-2 rounded-full ${
                filterType === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
              }`}
            >
              All Events
            </button>
            
            <button
              onClick={() => setFilterType('workshop')}
              className={`px-4 py-2 rounded-full ${
                filterType === 'workshop'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
              }`}
            >
              Workshops
            </button>
            
            <button
              onClick={() => setFilterType('conference')}
              className={`px-4 py-2 rounded-full ${
                filterType === 'conference'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
              }`}
            >
              Conferences
            </button>
            
            <button
              onClick={() => setFilterType('webinar')}
              className={`px-4 py-2 rounded-full ${
                filterType === 'webinar'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
              }`}
            >
              Webinars
            </button>
          </div>
          
          {/* Events List */}
          {Object.keys(groupedEvents).length > 0 ? (
            <div className="space-y-16">
              {Object.entries(groupedEvents).map(([month, monthEvents], monthIndex) => (
                <div key={month}>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold mb-8 border-b pb-4"
                  >
                    {month}
                  </motion.h2>
                  
                  <div className="space-y-8">
                    {monthEvents.map((event, eventIndex) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: eventIndex * 0.1 }}
                        className="card p-0 overflow-hidden hover-scale"
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3 lg:w-1/4">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="p-6 md:w-2/3 lg:w-3/4">
                            <div className="flex flex-wrap gap-2 mb-4">
                              <span className={`text-sm px-3 py-1 rounded-full ${
                                event.type === 'workshop' ? 'bg-accent/10 text-accent' :
                                event.type === 'conference' ? 'bg-secondary/10 text-secondary' :
                                'bg-warning/10 text-warning'
                              }`}>
                                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                              </span>
                              
                              {event.isVirtual && (
                                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                                  Virtual
                                </span>
                              )}
                            </div>
                            
                            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                            
                            <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-slate-600 mb-4">
                              <div className="flex items-center">
                                <Calendar size={16} className="mr-1" />
                                <span>{event.date}</span>
                              </div>
                              
                              <div className="flex items-center">
                                <Clock size={16} className="mr-1" />
                                <span>{event.time}</span>
                              </div>
                              
                              <div className="flex items-center">
                                <MapPin size={16} className="mr-1" />
                                <span>{event.location}</span>
                              </div>
                              
                              {event.seats && (
                                <div className="flex items-center">
                                  <User size={16} className="mr-1" />
                
                                  <span>{event.seats} seats available</span>
                                </div>
                              )}
                            </div>
                            
                            <p className="text-slate-600 mb-6">
                              {event.description}
                            </p>
                            
                            {event.moreInfoLink && (
                              <a
                                href={event.moreInfoLink}
                                className="btn btn-outline inline-flex items-center"
                              >
                                More Details <ExternalLink size={16} className="ml-1" />
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-4">No Events Found</h3>
              <p className="text-slate-600 mb-6">
                There are no events matching your current filter.
              </p>
              <button
                onClick={() => setFilterType('all')}
                className="btn btn-primary"
              >
                View All Events
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Events;