
import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Phone, Mail, MapPin, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Cloud className="h-8 w-8 text-blue-400" />
              <div>
                <span className="text-xl font-bold">AzureRaju</span>
                <p className="text-sm text-gray-400">Learn. Certify. Succeed.</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Professional Azure Cloud Coaching Center helping 500+ students achieve their certification and career goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-white">Courses</Link></li>
              <li><Link to="/placements" className="text-gray-400 hover:text-white">Placements</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Courses</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Azure Fundamentals</li>
              <li className="text-gray-400">Azure VMs & Networking</li>
              <li className="text-gray-400">Azure DevOps</li>
              <li className="text-gray-400">Azure Storage Solutions</li>
              <li className="text-gray-400">Azure Architecture</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-blue-400" />
                <p className="text-sm text-gray-400">
                  Near Government Hospital, Madakasira<br />
                  Sri Sathya Sai Dist., AP 515203
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <p className="text-sm text-gray-400">+91 7569790229</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <p className="text-sm text-gray-400">support@azureraju.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 AzureRaju. All rights reserved. | Developed by RSP Softweres
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
