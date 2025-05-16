import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { teamMembers } from '../data/teamData';

const Teams: React.FC = () => {
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
              <span className="text-primary font-semibold">Our Team</span>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-3 mb-6">
                Meet the Passionate Educators Behind Future Creatify
              </h1>
              <p className="text-lg text-slate-600">
                Our team brings together diverse expertise in education, curriculum design, 
                technology, and more to create innovative solutions for educators worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Our Visionary Leaders
            </h2>
            <p className="text-slate-600">
              Meet the dedicated individuals who guide our mission and drive our organization forward.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.filter(member => member.type === 'leadership').map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden hover-scale group"
              >
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-secondary hover:text-primary transition-colors">
                          <Linkedin size={20} />
                        </a>
                      )}
                      {member.twitter && (
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-secondary hover:text-primary transition-colors">
                          <Twitter size={20} />
                        </a>
                      )}
                      {member.email && (
                        <a href={`mailto:${member.email}`} className="bg-white p-2 rounded-full text-secondary hover:text-primary transition-colors">
                          <Mail size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                  <p className="mt-3 text-slate-600 line-clamp-3">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Experts */}
      <section className="section bg-cream">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold">Education Experts</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Our Curriculum Specialists
            </h2>
            <p className="text-slate-600">
              These talented educators develop our innovative programs and provide expert guidance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.filter(member => member.type === 'expert').map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden hover-scale group"
              >
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-secondary hover:text-primary transition-colors">
                          <Linkedin size={20} />
                        </a>
                      )}
                      {member.twitter && (
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-secondary hover:text-primary transition-colors">
                          <Twitter size={20} />
                        </a>
                      )}
                      {member.email && (
                        <a href={`mailto:${member.email}`} className="bg-white p-2 rounded-full text-secondary hover:text-primary transition-colors">
                          <Mail size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-primary text-sm">{member.role}</p>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-2">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="section bg-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold">Join Our Team</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Become Part of Our Mission
              </h2>
              <p className="text-lg mb-8 text-gray-300">
                We're always looking for passionate educators and professionals to join our team. 
                If you're committed to transforming education and making a difference in 
                students' lives, we'd love to hear from you.
              </p>
              <a href="#" className="btn bg-primary hover:bg-primary-dark">
                View Open Positions
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Teams;