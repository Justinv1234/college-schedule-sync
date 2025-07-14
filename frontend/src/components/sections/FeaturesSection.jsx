import React from 'react';
import { Calendar, Users, Clock } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-indigo-600" />,
      title: 'Smart Schedule Upload',
      description: 'Import from Google Calendar, Outlook, or upload your class schedule directly.'
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: 'Friend Groups',
      description: 'Create separate groups for study, gym, or chill. Keep things organized and flexible.'
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-600" />,
      title: 'Instant Overlap Detection',
      description: 'See shared free time instantly. No more back-and-forth texts.'
    }
  ];

  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Everything You Need to Stay Connected
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Powerful features built to make group scheduling effortless.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}