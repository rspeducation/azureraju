
import React from 'react';
import { Award, Users, Target, BookOpen, TrendingUp, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="azure-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About AzureRaju</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Empowering professionals with world-class Azure Cloud training and certification guidance
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At AzureRaju, we are committed to bridging the gap between industry requirements and 
                professional skills. Our mission is to provide comprehensive Azure Cloud training that 
                not only helps you get certified but also ensures you are job-ready with real-world experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-azure mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Practical Learning</h3>
                    <p className="text-gray-600">Hands-on experience with real Azure projects and scenarios</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-azure mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Industry Certification</h3>
                    <p className="text-gray-600">Preparation for Microsoft Azure certification exams</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-6 w-6 text-azure mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Career Growth</h3>
                    <p className="text-gray-600">100% placement assistance and career guidance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="azure-gradient-light p-8 rounded-lg">
              <div className="text-center">
                <div className="w-48 h-48 bg-azure rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">AR</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">300+ Students Trained</h3>
                <p className="text-azure font-semibold mb-4">Across 50 companies</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-2xl text-azure">500+</div>
                    <div className="text-gray-600">Placed Students</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-2xl text-azure">95%</div>
                    <div className="text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer Profile */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Your Trainer</h2>
            <p className="text-lg text-gray-600">Learn from industry expert with real-world experience</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="azure-gradient p-12 text-white text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl font-bold">RAJU</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">RAJU</h3>
                  <p className="text-blue-100 mb-4">Founder AzureRaju</p>
                  <div className="space-y-2 text-sm">
                    <p>✦ 9+ Years Azure Experience</p>
                    <p>✦ Microsoft Certified Trainer</p>
                    <p>✦ 500+ Students Mentored</p>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Professional Journey</h4>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      With over 9 years of hands-on experience in Microsoft Azure, RAJU has been instrumental 
                      in helping professionals transition to cloud computing careers.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Azure Solutions Architect Expert</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Azure DevOps Engineer Expert</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Microsoft Certified Trainer (MCT)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Real-time Project Experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Teaching Method</h2>
            <p className="text-lg text-gray-600">Learn through practical, real-world scenarios</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <BookOpen className="h-8 w-8 text-azure" />
                </div>
                <CardTitle>Theory + Practice</CardTitle>
                <CardDescription>
                  Balanced approach combining theoretical knowledge with hands-on labs
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <Users className="h-8 w-8 text-azure" />
                </div>
                <CardTitle>Interactive Sessions</CardTitle>
                <CardDescription>
                  Small batch sizes ensuring personalized attention and doubt clearing
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <TrendingUp className="h-8 w-8 text-azure" />
                </div>
                <CardTitle>Real Projects</CardTitle>
                <CardDescription>
                  Work on live projects to gain industry-relevant experience
                </CardDescription>
              </CardHeader>
            </Card>

            
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">What drives us to excel in training delivery</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Quality', description: 'Never compromise on training quality' },
              { title: 'Innovation', description: 'Stay updated with latest technologies' },
              { title: 'Support', description: '24/7 student support and guidance' },
              { title: 'Success', description: 'Student success is our primary goal' }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-azure rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{value.title[0]}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
