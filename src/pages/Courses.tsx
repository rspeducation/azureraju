
import React, { useState } from 'react';
import { Clock, Users, Award, CheckCircle, Play, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import EnrollmentForm from '@/components/EnrollmentForm';

const Courses = () => {
  const [isEnrollmentFormOpen, setIsEnrollmentFormOpen] = useState(false);
  const courses = [
    {
      title: 'Azure Fundamentals (AZ-900)',
      description: 'Perfect starting point for cloud beginners',
      duration: '4 weeks',
      level: 'Beginner',
      // students: '1500+',
      topics: ['Cloud Concepts', 'Azure Services', 'Security & Privacy', 'Pricing & Support']
    },
    {
      title: 'Azure Administrator (AZ-104)',
      description: 'Manage Azure subscriptions and resources',
      duration: '6 weeks',
      level: 'Intermediate',
      // students: '1200+',
      topics: ['Virtual Machines', 'Storage Solutions', 'Virtual Networks', 'Monitoring & Backup']
    },
    {
      title: 'Azure Solutions Architect (AZ-305)',
      description: 'Design Azure solutions and architecture',
      duration: '8 weeks',
      level: 'Advanced',
      // students: '800+',
      topics: ['Design Solutions', 'Security', 'Data Storage', 'Business Continuity']
    },
    {
      title: 'Azure DevOps Engineer (AZ-400)',
      description: 'Implement DevOps practices using Azure',
      duration: '6 weeks',
      level: 'Advanced',
      // students: '600+',
      topics: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Security & Compliance']
    },
    {
      title: 'Azure Security Engineer (AZ-500)',
      description: 'Secure Azure cloud environments',
      duration: '5 weeks',
      level: 'Advanced',
      // students: '400+',
      topics: ['Identity Management', 'Platform Protection', 'Data & Applications', 'Security Operations']
    },
    {
      title: 'Azure Data Engineer (DP-203)',
      description: 'Design and implement data solutions',
      duration: '7 weeks',
      level: 'Advanced',
      // students: '500+',
      topics: ['Data Storage', 'Data Processing', 'Data Security', 'Monitoring & Optimization']
    }
  ];

  const schedule = [
    { day: 'Monday', time: '7:00 AM - 8:00 AM', topic: 'Azure Fundamentals' },
    { day: 'Tuesday', time: '7:00 AM - 8:00 AM', topic: 'Virtual Machines & Networking' },
    { day: 'Wednesday', time: '7:00 AM - 8:00 AM', topic: 'Storage Solutions' },
    { day: 'Thursday', time: '7:00 AM - 8:00 AM', topic: 'Azure DevOps' },
    { day: 'Friday', time: '7:00 AM - 8:00 AM', topic: 'Security & Monitoring' },
    { day: 'Saturday', time: 'Week off', topic: 'Mork Interview' },
    { day: 'Sunday', time: ' Week offf', topic: 'Mork Interview' }
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="azure-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Azure Courses</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive training programs designed to make you Azure certified and job-ready
            </p>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Watch Our Demo Class</h2>
          <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" className="bg-azure hover:bg-azure-dark">
                <Play className="mr-2 h-6 w-6" /> Play Demo Video
              </Button>
            </div>
            <div className="absolute bottom-4 left-4 text-white text-sm bg-black/50 px-2 py-1 rounded">
              Sample: Azure Virtual Machines Explained
            </div>
          </div>
          <p className="text-gray-600 mt-4">
            Get a taste of our teaching methodology and course content quality
          </p>
        </div>
      </section> */}

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Training Programs</h2>
            <p className="text-lg text-gray-600">Choose the right course for your career goals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={course.level === 'Beginner' ? 'secondary' : course.level === 'Intermediate' ? 'default' : 'destructive'}>
                      {course.level}
                    </Badge>
                    <div className="text-right text-sm text-gray-500">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {/* {course.students} */}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-sm">Key Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-azure hover:bg-azure-dark"
                      onClick={() => setIsEnrollmentFormOpen(true)}
                    >
                      Enroll Now
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Weekly Schedule</h2>
            <p className="text-lg text-gray-600">Regular classes designed to fit your schedule</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Training Schedule (IST)</CardTitle>
                <CardDescription className="text-center">All sessions include hands-on practice</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Day</th>
                        <th className="text-left py-3 px-4 font-semibold">Time</th>
                        <th className="text-left py-3 px-4 font-semibold">Topic Focus</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schedule.map((session, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">{session.day}</td>
                          <td className="py-3 px-4 text-azure">{session.time}</td>
                          <td className="py-3 px-4">{session.topic}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold text-gray-900">Flexible Timings Available</p>
                      <p className="text-gray-600">Weekend batches and recorded sessions for working professionals</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What You Get</h2>
            <p className="text-lg text-gray-600">Comprehensive learning experience beyond just lectures</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award className="h-8 w-8" />, title: 'Certification Prep', description: 'Complete exam preparation with practice tests' },
              { icon: <Users className="h-8 w-8" />, title: 'Small Batches', description: 'Maximum 15 students per batch for personalized attention' },
              { icon: <Play className="h-8 w-8" />, title: 'Recorded Sessions', description: 'Access to all recorded classes for revision' },
              { icon: <CheckCircle className="h-8 w-8" />, title: 'Placement Support', description: '100% placement assistance with interview prep' }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit text-azure">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Enrollment Form */}
      <EnrollmentForm 
        isOpen={isEnrollmentFormOpen} 
        onClose={() => setIsEnrollmentFormOpen(false)} 
      />
    </div>
  );
};

export default Courses;
