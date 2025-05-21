import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, Users } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us - SriSriPort';
  }, []);

  const contactInfo = [
    {
      icon: <MapPin className="h-10 w-10 text-blue-900" />,
      title: "Our Location",
      details: [
        "Headquarters, Gorakhpur",
        "273013, India"
      ]
    },
    {
      icon: <Phone className="h-10 w-10 text-blue-900" />,
      title: "Phone Number",
      details: [
        "+91 8052 747 236"
      ]
    },
    {
      icon: <Mail className="h-10 w-10 text-blue-900" />,
      title: "Email Address",
      details: [
        "info@srisriport.com"
      ]
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-900" />,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9am - 6pm",
        "Saturday: 10am - 2pm"
      ]
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our export-import experts"
      />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-blue-900">Get In Touch</h2>
                <p className="text-gray-600 mb-4">
                  Have questions about our services or ready to start your export journey? Our team is here to help. 
                  Fill out the form below and one of our export-import experts will get back to you soon.
                </p>
              </div>
              
              <ContactForm />
            </div>
            
            <div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-6 text-blue-900 border-b border-gray-200 pb-3">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-1">{info.title}</h4>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-900 text-white p-8 rounded-lg shadow-md">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="h-6 w-6 text-yellow-400" />
                  <h3 className="text-xl font-semibold">Join Our Team</h3>
                </div>
                <p className="mb-6">
                  Interested in a career with SriSriPort? We're always looking for talented individuals to join our team.
                </p>
                <a 
                  href="mailto:careers@srisriport.com" 
                  className="inline-block bg-white text-blue-900 hover:bg-yellow-400 px-6 py-2 rounded-md 
                    font-medium transition-all duration-300"
                >
                  Send Your Resume
                </a>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md h-[400px] bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114486.51286951645!2d83.30525673106704!3d26.771862242149647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446a0c332489%3A0x1ff3f97fdcc6bfa2!2sGorakhpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1639997440363!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="SriSriPort Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;