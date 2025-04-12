'use client';

import { useState } from 'react';

interface Resource {
  id: string;
  title: string;
  type: 'book' | 'test' | 'material';
  description: string;
  level: string;
  format: string;
  downloadUrl?: string;
  previewUrl?: string;
  imageUrl: string;
  rating: number;
  reviews: number;
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'Cambridge IELTS 18 Academic',
    type: 'book',
    description: 'Latest official IELTS preparation materials with authentic test papers and answers.',
    level: 'All Levels',
    format: 'PDF + Audio',
    downloadUrl: '#',
    previewUrl: '#',
    imageUrl: '/images/cambridge-ielts.jpg',
    rating: 4.8,
    reviews: 156,
  },
  {
    id: '2',
    title: 'Official TOEIC Test Preparation',
    type: 'test',
    description: 'Complete TOEIC test preparation package with practice tests and answer keys.',
    level: 'Intermediate - Advanced',
    format: 'PDF',
    downloadUrl: '#',
    previewUrl: '#',
    imageUrl: '/images/toeic-test.jpg',
    rating: 4.6,
    reviews: 89,
  },
  {
    id: '3',
    title: 'English Grammar in Use',
    type: 'book',
    description: 'Comprehensive grammar reference and practice book for intermediate learners.',
    level: 'Intermediate',
    format: 'PDF',
    downloadUrl: '#',
    previewUrl: '#',
    imageUrl: '/images/grammar-in-use.jpg',
    rating: 4.9,
    reviews: 234,
  },
  {
    id: '4',
    title: 'Business English Vocabulary Builder',
    type: 'material',
    description: 'Essential business vocabulary and phrases for professional communication.',
    level: 'Upper Intermediate - Advanced',
    format: 'PDF + Audio',
    downloadUrl: '#',
    previewUrl: '#',
    imageUrl: '/images/business-vocab.jpg',
    rating: 4.7,
    reviews: 112,
  },
  {
    id: '5',
    title: 'IELTS Speaking Practice Tests',
    type: 'test',
    description: 'Collection of IELTS speaking test samples with model answers.',
    level: 'All Levels',
    format: 'PDF + Audio',
    downloadUrl: '#',
    previewUrl: '#',
    imageUrl: '/images/ielts-speaking.jpg',
    rating: 4.5,
    reviews: 78,
  },
  {
    id: '6',
    title: 'Academic Writing for IELTS',
    type: 'material',
    description: 'Step-by-step guide to academic writing with sample essays and exercises.',
    level: 'Upper Intermediate - Advanced',
    format: 'PDF',
    downloadUrl: '#',
    previewUrl: '#',
    imageUrl: '/images/academic-writing.jpg',
    rating: 4.8,
    reviews: 145,
  },
];

export default function Resources() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const filteredResources = resources.filter(resource => {
    if (selectedType !== 'all' && resource.type !== selectedType) return false;
    if (selectedLevel !== 'all' && resource.level !== selectedLevel) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Resources</h1>
          <p className="text-xl text-gray-600">
            Access our collection of premium study materials, test papers, and books
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Types</option>
            <option value="book">Books</option>
            <option value="test">Test Papers</option>
            <option value="material">Study Materials</option>
          </select>

          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Upper Intermediate">Upper Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Resource Image</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
                    {resource.type}
                  </span>
                  <span className="text-sm text-gray-500">{resource.format}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{resource.level}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-gray-600">{resource.rating} ({resource.reviews})</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Download
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                    Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resource Categories */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Resource Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">IELTS Preparation</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">• Cambridge IELTS Series</li>
                <li className="text-gray-600">• Speaking Practice Tests</li>
                <li className="text-gray-600">• Writing Samples</li>
                <li className="text-gray-600">• Listening Exercises</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">TOEIC Materials</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">• Official Test Papers</li>
                <li className="text-gray-600">• Vocabulary Lists</li>
                <li className="text-gray-600">• Grammar Exercises</li>
                <li className="text-gray-600">• Practice Tests</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">General English</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">• Grammar Books</li>
                <li className="text-gray-600">• Vocabulary Builders</li>
                <li className="text-gray-600">• Speaking Practice</li>
                <li className="text-gray-600">• Reading Materials</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 