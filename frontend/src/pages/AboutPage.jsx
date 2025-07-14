import React, { useState } from 'react';
import { Calendar, Users, Clock } from 'lucide-react';

export default function AboutPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col">
      <main className="flex-grow max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          About ScheduleSync
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          ScheduleSync helps students coordinate class schedules with friends seamlessly. Upload your calendar, create friend groups, and instantly find free time to hang out without the scheduling chaos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
            <Calendar className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Smart Schedule Upload</h3>
            <p className="text-gray-600">
              Import your schedules from Google Calendar, Outlook, or upload manually.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
            <Users className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Friend Groups</h3>
            <p className="text-gray-600">
              Organize friends into groups to see overlapping free time easily.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
            <Clock className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Instant Overlap Detection</h3>
            <p className="text-gray-600">
              Quickly find time slots where everyone’s free to hang out.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            {isSubmitted ? 'Thanks!' : 'Get Started'}
          </button>
        </form>
        <p className="text-indigo-700 text-sm mt-4">
          Free to use. No credit card required.
        </p>
      </main>

      <footer className="bg-gray-900 text-white py-12 text-center">
        <p>&copy; 2025 ScheduleSync. All rights reserved.</p>
      </footer>
    </div>
  );
}