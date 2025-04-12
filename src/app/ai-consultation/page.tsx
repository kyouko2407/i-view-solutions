'use client';

import { useState } from 'react';

export default function AIConsultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    level: 'beginner',
    goals: '',
    schedule: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            AI-Powered Learning Consultation
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Get personalized recommendations for your English learning journey based on
            your goals, schedule, and preferences.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="level" className="block text-sm font-medium text-gray-700">
                Current English Level
              </label>
              <select
                name="level"
                id="level"
                value={formData.level}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label htmlFor="goals" className="block text-sm font-medium text-gray-700">
                Learning Goals
              </label>
              <textarea
                name="goals"
                id="goals"
                value={formData.goals}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="What do you want to achieve? (e.g., IELTS score, business English, etc.)"
                required
              />
            </div>

            <div>
              <label htmlFor="schedule" className="block text-sm font-medium text-gray-700">
                Preferred Schedule
              </label>
              <textarea
                name="schedule"
                id="schedule"
                value={formData.schedule}
                onChange={handleChange}
                rows={2}
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="When are you available for classes?"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Get AI Recommendations
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            How AI Consultation Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl font-bold">1</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Share Your Goals</h3>
              <p className="text-gray-600">Tell us about your learning objectives and preferences</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl font-bold">2</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">AI Analysis</h3>
              <p className="text-gray-600">Our AI analyzes your needs and matches with learning centers</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl font-bold">3</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Get Recommendations</h3>
              <p className="text-gray-600">Receive personalized center and course recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 