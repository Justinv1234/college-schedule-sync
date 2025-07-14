import React from 'react';

export default function HowItWorksSection() {
  const steps = [
    {
      step: '1',
      title: 'Upload Your Schedule',
      description: 'Import your calendar or add classes, work, and commitments manually.'
    },
    {
      step: '2',
      title: 'Add Your Friends',
      description: 'Invite friends to share their schedules securely in your group.'
    },
    {
      step: '3',
      title: 'Find Free Time',
      description: 'Instantly see when everyone is available to hang out together.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Three Steps to Perfect Timing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}