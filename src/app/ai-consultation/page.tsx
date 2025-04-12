'use client';

import { useState } from 'react';

interface Center {
  id: string;
  name: string;
  rating: number;
  location: string;
  pricing: string;
  features: string[];
  courses: string[];
  schedule: string[];
  facilities: string[];
}

const mockCenters: Center[] = [
  {
    id: '1',
    name: 'Global English Academy',
    rating: 4.8,
    location: 'District 1, HCMC',
    pricing: '$200-400/month',
    features: ['Native Teachers', 'Small Class Size', 'Free Trial Class'],
    courses: ['IELTS Preparation', 'Business English', 'General English'],
    schedule: ['Morning', 'Evening', 'Weekend'],
    facilities: ['Modern Classrooms', 'Library', 'Study Room']
  },
  {
    id: '2',
    name: 'Language Excellence Center',
    rating: 4.6,
    location: 'District 3, HCMC',
    pricing: '$180-350/month',
    features: ['Certified Teachers', 'Online Support', '1-on-1 Tutoring'],
    courses: ['TOEIC Preparation', 'Conversational English', 'Academic English'],
    schedule: ['Flexible Hours', 'Weekend Classes'],
    facilities: ['Computer Lab', 'Cafeteria', 'Practice Rooms']
  }
];

export default function AIConsultation() {
  const [activeTab, setActiveTab] = useState<'form' | 'comparison'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    level: 'beginner',
    goals: '',
    schedule: '',
  });
  const [showComparison, setShowComparison] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowComparison(true);
    setActiveTab('comparison');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-gray-600">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            AI-Powered Learning Consultation
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Get personalized recommendations and compare learning centers based on
            your goals, schedule, and preferences.
          </p>
        </div>

        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('form')}
                className={`${
                  activeTab === 'form'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Consultation Form
              </button>
              <button
                onClick={() => setActiveTab('comparison')}
                className={`${
                  activeTab === 'comparison'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Center Comparison
              </button>
            </nav>
          </div>
        </div>

        {activeTab === 'form' && (
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
        )}

        {activeTab === 'comparison' && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-6">
              <div className="col-span-1">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Comparison Criteria</h3>
              </div>
              {mockCenters.map((center) => (
                <div key={center.id} className="col-span-1">
                  <h3 className="text-lg font-medium text-blue-600 mb-4">{center.name}</h3>
                </div>
              ))}

              {/* Rating */}
              <div className="col-span-1 py-3 bg-gray-50 px-4">
                <span className="font-medium text-gray-700">Rating</span>
              </div>
              {mockCenters.map((center) => (
                <div key={center.id} className="col-span-1 py-3 bg-gray-50 px-4">
                  {renderStars(center.rating)}
                </div>
              ))}

              {/* Location */}
              <div className="col-span-1 py-3 px-4">
                <span className="font-medium text-gray-700">Location</span>
              </div>
              {mockCenters.map((center) => (
                <div key={center.id} className="col-span-1 py-3 px-4">
                  {center.location}
                </div>
              ))}

              {/* Pricing */}
              <div className="col-span-1 py-3 bg-gray-50 px-4">
                <span className="font-medium text-gray-700">Pricing</span>
              </div>
              {mockCenters.map((center) => (
                <div key={center.id} className="col-span-1 py-3 bg-gray-50 px-4">
                  {center.pricing}
                </div>
              ))}

              {/* Features */}
              <div className="col-span-1 py-3 px-4">
                <span className="font-medium text-gray-700">Key Features</span>
              </div>
              {mockCenters.map((center) => (
                <div key={center.id} className="col-span-1 py-3 px-4">
                  <ul className="list-disc list-inside space-y-1">
                    {center.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Courses */}
              <div className="col-span-1 py-3 bg-gray-50 px-4">
                <span className="font-medium text-gray-700">Available Courses</span>
              </div>
              {mockCenters.map((center) => (
                <div key={center.id} className="col-span-1 py-3 bg-gray-50 px-4">
                  <ul className="list-disc list-inside space-y-1">
                    {center.courses.map((course, index) => (
                      <li key={index}>{course}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Schedule */}
              <div className="col-span-1 py-3 px-4">
                <span className="font-medium text-gray-700">Class Schedule</span>
              </div>
              {mockCenters.map((center) => (
                <div key={center.id} className="col-span-1 py-3 px-4">
                  <ul className="list-disc list-inside space-y-1">
                    {center.schedule.map((time, index) => (
                      <li key={index}>{time}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Facilities */}
              <div className="col-span-1 py-3 bg-gray-50 px-4">
                <span className="font-medium text-gray-700">Facilities</span>
              </div>
              {mockCenters.map((center) => (
                <div key={center.id} className="col-span-1 py-3 bg-gray-50 px-4">
                  <ul className="list-disc list-inside space-y-1">
                    {center.facilities.map((facility, index) => (
                      <li key={index}>{facility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">AI Recommendation</h3>
              <p className="text-gray-600">
                Based on your goals and preferences, we recommend{' '}
                <span className="font-medium text-blue-600">Global English Academy</span>. 
                Their IELTS preparation program and flexible schedule align well with your requirements. 
                The center's native teachers and small class sizes will provide the personalized attention 
                you need for rapid improvement.
              </p>
            </div>
          </div>
        )}

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