'use client';

import { useState } from 'react';

interface Center {
  id: string;
  name: string;
  location: string;
  courses: string[];
  pricing: {
    ielts: number;
    general: number;
    business: number;
  };
  features: string[];
  ratings: {
    overall: number;
    teaching: number;
    facilities: number;
    support: number;
  };
  reviews: {
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  source: string;
  link: string;
}

interface Thread {
  id: string;
  title: string;
  author: string;
  content: string;
  date: string;
  likes: number;
  comments: number;
  tags: string[];
}

interface LearningTip {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  likes: number;
}

// Sample data - In a real app, this would come from your database
const centers: Center[] = [
  {
    id: '1',
    name: 'Global English Academy',
    location: 'District 1, Ho Chi Minh City',
    courses: ['IELTS', 'General English', 'Business English'],
    pricing: {
      ielts: 6500000,
      general: 4500000,
      business: 7000000,
    },
    features: [
      'Native speakers',
      'Small class sizes',
      'Modern facilities',
      'Free study materials',
    ],
    ratings: {
      overall: 4.5,
      teaching: 4.7,
      facilities: 4.3,
      support: 4.4,
    },
    reviews: [
      {
        user: 'Nguyen Minh',
        rating: 5,
        comment: 'Excellent teaching quality and supportive staff. My IELTS score improved significantly after 3 months.',
        date: '2024-02-15',
      },
      {
        user: 'Tran Thi',
        rating: 4,
        comment: 'Good facilities but a bit crowded during peak hours. Teachers are very professional.',
        date: '2024-01-20',
      },
    ],
  },
  {
    id: '2',
    name: 'Language Excellence Center',
    location: 'District 3, Ho Chi Minh City',
    courses: ['IELTS', 'TOEIC', 'General English'],
    pricing: {
      ielts: 7000000,
      general: 5000000,
      business: 7500000,
    },
    features: [
      'Blended learning',
      'Virtual classrooms',
      'Practice lab',
      '24/7 support',
    ],
    ratings: {
      overall: 4.6,
      teaching: 4.8,
      facilities: 4.5,
      support: 4.7,
    },
    reviews: [
      {
        user: 'Le Van',
        rating: 5,
        comment: 'The virtual classroom feature is amazing! Perfect for busy professionals.',
        date: '2024-02-10',
      },
      {
        user: 'Pham Anh',
        rating: 4,
        comment: 'Great course materials and practice tests. Would recommend for TOEIC preparation.',
        date: '2024-01-25',
      },
    ],
  },
  {
    id: '3',
    name: 'Future English Institute',
    location: 'District 2, Ho Chi Minh City',
    courses: ['IELTS', 'Business English', 'Academic English'],
    pricing: {
      ielts: 6000000,
      general: 4000000,
      business: 6500000,
    },
    features: [
      'AI-powered learning',
      'VR practice rooms',
      'Career counseling',
      'Study abroad support',
    ],
    ratings: {
      overall: 4.4,
      teaching: 4.5,
      facilities: 4.6,
      support: 4.3,
    },
    reviews: [
      {
        user: 'Hoang Long',
        rating: 5,
        comment: 'The VR practice rooms are revolutionary! Makes learning so much more engaging.',
        date: '2024-02-05',
      },
      {
        user: 'Vu Mai',
        rating: 4,
        comment: 'Good value for money. The AI learning system is very helpful for self-study.',
        date: '2024-01-30',
      },
    ],
  },
];

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'New IELTS Test Format Coming in 2024',
    summary: 'The British Council announces changes to the IELTS test format, focusing on more practical speaking tasks.',
    date: '2024-02-20',
    source: 'British Council',
    link: '#',
  },
  {
    id: '2',
    title: 'English Learning Trends in Vietnam',
    summary: 'A recent survey shows increasing demand for online and hybrid English learning options in Vietnam.',
    date: '2024-02-18',
    source: 'Education Times',
    link: '#',
  },
  {
    id: '3',
    title: 'TOEIC Score Requirements Updated',
    summary: 'Many companies in Vietnam are raising their TOEIC score requirements for new hires.',
    date: '2024-02-15',
    source: 'Career Vietnam',
    link: '#',
  },
];

const threads: Thread[] = [
  {
    id: '1',
    title: 'How to improve speaking skills quickly?',
    author: 'Nguyen Minh',
    content: 'I\'ve been studying English for 2 years but still struggle with speaking. Any tips for improving quickly?',
    date: '2024-02-20',
    likes: 24,
    comments: 15,
    tags: ['Speaking', 'Tips', 'Practice'],
  },
  {
    id: '2',
    title: 'Best resources for IELTS preparation',
    author: 'Tran Thi',
    content: 'Share your favorite books, websites, and apps for IELTS preparation. Let\'s create a comprehensive list!',
    date: '2024-02-19',
    likes: 18,
    comments: 12,
    tags: ['IELTS', 'Resources', 'Study Materials'],
  },
  {
    id: '3',
    title: 'Daily English practice routine',
    author: 'Le Van',
    content: 'What does your daily English practice routine look like? Looking for inspiration to improve my schedule.',
    date: '2024-02-18',
    likes: 32,
    comments: 20,
    tags: ['Routine', 'Practice', 'Habits'],
  },
];

const learningTips: LearningTip[] = [
  {
    id: '1',
    title: 'The 30-Day Speaking Challenge',
    content: 'Practice speaking English for 15 minutes every day. Record yourself and listen back to identify areas for improvement.',
    author: 'English Coach',
    date: '2024-02-20',
    category: 'Speaking',
    likes: 45,
  },
  {
    id: '2',
    title: 'Vocabulary Building Strategy',
    content: 'Learn 5 new words daily and use them in sentences. Create flashcards and review them weekly.',
    author: 'Language Expert',
    date: '2024-02-19',
    category: 'Vocabulary',
    likes: 38,
  },
  {
    id: '3',
    title: 'Listening Practice Tips',
    content: 'Watch English movies with subtitles, then without. Listen to podcasts at different speeds.',
    author: 'Study Coach',
    date: '2024-02-18',
    category: 'Listening',
    likes: 29,
  },
];

export default function Consultation() {
  const [selectedCenters, setSelectedCenters] = useState<[string, string]>(['', '']);
  const [comparison, setComparison] = useState<{ strengths: string[]; recommendations: string[] } | null>(null);
  const [activeTab, setActiveTab] = useState<'comparison' | 'community' | 'news'>('comparison');

  const handleCenterSelect = (index: number, centerId: string) => {
    setSelectedCenters(prev => {
      const newSelection = [...prev] as [string, string];
      newSelection[index] = centerId;
      return newSelection;
    });
    setComparison(null);
  };

  const generateComparison = () => {
    const center1 = centers.find(c => c.id === selectedCenters[0]);
    const center2 = centers.find(c => c.id === selectedCenters[1]);

    if (!center1 || !center2) return;

    // AI analysis simulation - In a real app, this would be an API call to your AI service
    const strengths = [
      `${center1.name} excels in ${center1.ratings.teaching > center2.ratings.teaching ? 'teaching quality' : 'facility standards'}`,
      `${center2.name} offers ${center2.pricing.ielts < center1.pricing.ielts ? 'more competitive pricing' : 'better support services'}`,
      `${center1.name} provides ${center1.features.includes('Native speakers') ? 'native speaking teachers' : 'modern learning technology'}`,
      `${center2.name} features ${center2.features.includes('VR practice rooms') ? 'innovative VR learning spaces' : 'comprehensive study materials'}`,
    ];

    const recommendations = [
      `Choose ${center1.name} if you prioritize ${center1.ratings.teaching > center2.ratings.teaching ? 'teaching quality' : 'modern facilities'}`,
      `${center2.name} is better suited for students looking for ${center2.features.includes('24/7 support') ? 'extensive support' : 'flexible learning options'}`,
      `Consider your budget: ${center1.pricing.ielts < center2.pricing.ielts ? center1.name : center2.name} offers more affordable IELTS courses`,
      'Schedule a trial class at both centers to experience their teaching methods firsthand',
    ];

    setComparison({ strengths, recommendations });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Center Comparison</h1>
          <p className="text-xl text-gray-600">
            Let our AI help you choose the perfect English center for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {[0, 1].map((index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Select Center {index + 1}</h2>
              <div className="space-y-4">
                {centers.map((center) => (
                  <button
                    key={center.id}
                    onClick={() => handleCenterSelect(index, center.id)}
                    className={`w-full p-4 rounded-lg text-left transition-all ${
                      selectedCenters[index] === center.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <h3 className="font-semibold">{center.name}</h3>
                    <p className={`text-sm ${
                      selectedCenters[index] === center.id ? 'text-blue-100' : 'text-gray-600'
                    }`}>
                      {center.location}
                    </p>
                    <div className="flex items-center mt-1">
                      <span className="text-yellow-400">★</span>
                      <span className={`ml-1 ${
                        selectedCenters[index] === center.id ? 'text-blue-100' : 'text-gray-600'
                      }`}>
                        {center.ratings.overall} ({center.reviews.length} reviews)
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <button
            onClick={generateComparison}
            disabled={!selectedCenters[0] || !selectedCenters[1]}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400"
          >
            Compare Centers
          </button>
        </div>

        <div className="mb-8">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-4 py-2 font-medium ${
                activeTab === 'comparison'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Comparison
            </button>
            <button
              onClick={() => setActiveTab('community')}
              className={`px-4 py-2 font-medium ${
                activeTab === 'community'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Community
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={`px-4 py-2 font-medium ${
                activeTab === 'news'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Latest News
            </button>
          </div>
        </div>

        {activeTab === 'comparison' && comparison && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Key Strengths</h2>
                <ul className="space-y-3">
                  {comparison.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-600">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">AI Recommendations</h2>
                <ul className="space-y-3">
                  {comparison.recommendations.map((recommendation, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <span className="text-gray-600">{recommendation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Detailed Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-2 text-left text-gray-600">Feature</th>
                      {selectedCenters.map((centerId) => (
                        <th key={centerId} className="px-4 py-2 text-left text-gray-600">
                          {centers.find(c => c.id === centerId)?.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 text-gray-600">IELTS Course</td>
                      {selectedCenters.map((centerId) => (
                        <td key={centerId} className="px-4 py-2 text-gray-900">
                          {formatPrice(centers.find(c => c.id === centerId)?.pricing.ielts || 0)}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-600">Teaching Rating</td>
                      {selectedCenters.map((centerId) => (
                        <td key={centerId} className="px-4 py-2 text-gray-900">
                          {centers.find(c => c.id === centerId)?.ratings.teaching} / 5
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-600">Facilities Rating</td>
                      {selectedCenters.map((centerId) => (
                        <td key={centerId} className="px-4 py-2 text-gray-900">
                          {centers.find(c => c.id === centerId)?.ratings.facilities} / 5
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-600">Key Features</td>
                      {selectedCenters.map((centerId) => (
                        <td key={centerId} className="px-4 py-2 text-gray-900">
                          <ul className="list-disc list-inside">
                            {centers.find(c => c.id === centerId)?.features.map((feature, index) => (
                              <li key={index} className="text-gray-600">{feature}</li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'community' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Learning Tips Section */}
              <div className="md:col-span-1">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">Learning Tips</h2>
                <div className="space-y-4">
                  {learningTips.map((tip) => (
                    <div key={tip.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-600">{tip.category}</span>
                        <span className="text-sm text-gray-500">{tip.date}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{tip.content}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">By {tip.author}</span>
                        <div className="flex items-center">
                          <span className="text-yellow-400">★</span>
                          <span className="ml-1 text-gray-600">{tip.likes}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Discussion Threads Section */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">Discussion Threads</h2>
                <div className="space-y-4">
                  {threads.map((thread) => (
                    <div key={thread.id} className="border-b border-gray-200 pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{thread.title}</h3>
                        <span className="text-sm text-gray-500">{thread.date}</span>
                      </div>
                      <p className="text-gray-600 mb-3">{thread.content}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <span className="text-gray-500 mr-1">By</span>
                            <span className="font-medium text-gray-900">{thread.author}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-500">★ {thread.likes}</span>
                            <span className="text-gray-500">💬 {thread.comments}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {thread.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Create New Thread Button */}
                <div className="mt-6">
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Start New Discussion
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'news' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Latest Education News</h2>
            <div className="space-y-6">
              {newsItems.map((news) => (
                <div key={news.id} className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{news.title}</h3>
                    <span className="text-sm text-gray-500">{news.date}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{news.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Source: {news.source}</span>
                    <a
                      href={news.link}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 