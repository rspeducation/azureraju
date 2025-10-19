
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EnrollmentForm from '@/components/EnrollmentForm';
import { 
  ArrowRight, 
  Users, 
  Award, 
  BookOpen, 
  TrendingUp,
  CheckCircle,
  Star,
  Play,
  Calendar,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Home = () => {
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative azure-gradient text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Master Azure Cloud
              <span className="block text-blue-200">Get Certified. Get Placed.</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Join 500+ students who have transformed their careers with professional Azure training
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-azure hover:bg-gray-100 text-lg px-8 py-3"
                onClick={() => setShowEnrollmentForm(true)}
              >
                Join Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {/* <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-azure text-lg px-8 py-3">
                <Play className="mr-2 h-5 w-5" /> Watch Demo
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="text-4xl font-bold text-azure mb-2">500+</div>
              <p className="text-gray-600">Students Trained</p>
            </div>
            <div className="animate-slide-up">
              <div className="text-4xl font-bold text-azure mb-2">200+</div>
              <p className="text-gray-600">Placed Students</p>
            </div>
            <div className="animate-slide-up">
              <div className="text-4xl font-bold text-azure mb-2">9+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="animate-slide-up">
              <div className="text-4xl font-bold text-azure mb-2">100%</div>
              <p className="text-gray-600">Placement Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                About <span className="text-azure">AzureRaju</span>
              </h2>
              <p className="text-lg text-gray-600">
                Founded by <strong>RAJU</strong>, a seasoned Azure expert with 9+ years of real-time experience, 
                AzureRaju is your gateway to mastering Microsoft Azure Cloud technologies.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Real-time project experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Industry-recognized certifications</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">100% placement assistance</span>
                </div>
              </div>
              <Link to="/about">
                <Button className="bg-azure hover:bg-azure-dark">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-azure-gradient-light p-8 rounded-lg">
                <div className="text-center">
                  <div className="w-32 h-32 bg-azure rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">RAJU</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">RAJU</h3>
                  <p className="text-azure font-semibold">Founder & CEO</p>
                  <p className="text-gray-600 mt-2">9+ Years Azure Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular <span className="text-azure">Courses</span>
            </h2>
            <p className="text-lg text-gray-600">Master the most in-demand Azure skills</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Azure Fundamentals',
                description: 'Start your cloud journey with Azure basics',
                icon: <BookOpen className="h-8 w-8" />
              },
              {
                title: 'Azure DevOps',
                description: 'Master CI/CD and deployment automation',
                icon: <TrendingUp className="h-8 w-8" />
              },
              {
                title: 'Azure Architecture',
                description: 'Design scalable cloud solutions',
                icon: <Award className="h-8 w-8" />
              }
            ].map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-azure mb-2">{course.icon}</div>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-azure text-azure hover:bg-azure hover:text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/courses">
              <Button size="lg" className="bg-azure hover:bg-azure-dark">
                View All Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student <span className="text-azure">Success Stories</span>
            </h2>
            <p className="text-lg text-gray-600">Hear from our successful graduates</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rangaswamy',
                role: 'Cloud Engineer',
                package: '₹8.5 LPA',
                review: 'Classes by Raju anna is enough to crack the interview, Just make sure to learn well and Follow Raju Anna guidelines properly.'
              },
              {
                name: 'Sathavahana Reddy',
                role: 'DevOps Engineer',
                package: '₹12 LPA',
                review: 'RAJU sir\'s teaching method is unique. I got placed within 2 months of course completion.'
              },
              {
                name: 'NIVAS',
                role: 'Solutions Architect',
                package: '₹15 LPA',
                review: 'Raju sir without you it’s not possible, Thank you for your tireless support, Hope for the good ✊🏼.'
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.review}"</p>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-azure text-sm">{testimonial.role}</p>
                    <p className="text-green-600 font-semibold text-sm">{testimonial.package}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 azure-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Azure Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful professionals who have advanced their careers with AzureRaju
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-azure hover:bg-gray-100 text-lg px-8 py-3"
              onClick={() => setShowEnrollmentForm(true)}
            >
              <Calendar className="mr-2 h-5 w-5" /> Book Free Demo
            </Button>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-blue hover:bg-white hover:text-azure text-lg px-8 py-3">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enrollment Form Modal */}
      <EnrollmentForm 
        isOpen={showEnrollmentForm}
        onClose={() => setShowEnrollmentForm(false)}
      />
    </div>
  );
};

export default Home;
