import React from 'react';
import { Calendar, Users, Clock, Upload, Bell, Shield, Zap, Globe, Smartphone } from 'lucide-react';

export default function FeaturesPage() {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-indigo-600" />,
      title: 'Smart Schedule Import',
      description: 'Seamlessly import from Google Calendar, Outlook, Apple Calendar, or upload your class schedule directly. Our AI handles all formats automatically.',
      details: ['Google Calendar integration', 'Outlook sync', 'Manual upload support', 'Auto-format detection']
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: 'Friend Groups Management',
      description: 'Create unlimited friend groups for different activities. Keep your study buddies separate from your workout crew.',
      details: ['Unlimited groups', 'Easy invite system', 'Group permissions', 'Activity-based organization']
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-600" />,
      title: 'Instant Overlap Detection',
      description: 'Our algorithm instantly finds when everyone is free. No more endless group chats trying to coordinate.',
      details: ['Real-time availability', 'Smart suggestions', 'Conflict resolution', 'Time zone support']
    },
    {
      icon: <Bell className="w-8 h-8 text-indigo-600" />,
      title: 'Smart Notifications',
      description: 'Get notified when new time slots open up or when plans change. Stay in the loop without the spam.',
      details: ['Customizable alerts', 'Plan change notifications', 'Availability updates', 'Smart timing']
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: 'Privacy First',
      description: 'Your schedule data is encrypted and never shared without permission. You control who sees what.',
      details: ['End-to-end encryption', 'Granular privacy controls', 'Data ownership', 'No ads or tracking']
    },
    {
      icon: <Zap className="w-8 h-8 text-indigo-600" />,
      title: 'Lightning Fast',
      description: 'Built for speed. Find available times in seconds, not minutes. Real-time sync across all devices.',
      details: ['Sub-second search', 'Real-time updates', 'Offline support', 'Instant sync']
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-600" />,
      title: 'Global Time Zones',
      description: 'Perfect for international students and remote teams. Automatically handles time zone conversions.',
      details: ['Auto timezone detection', 'Global scheduling', 'DST handling', 'Multi-location support']
    },
    {
      icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
      title: 'Mobile Optimized',
      description: 'Native mobile experience with push notifications. Schedule on the go from any device.',
      details: ['Progressive Web App', 'Push notifications', 'Offline capability', 'Touch-optimized UI']
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Stay Connected
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover all the powerful features that make ScheduleSync the ultimate tool for group coordination and scheduling.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-xl">
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience These Features?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of students who are already scheduling smarter.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}