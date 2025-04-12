'use client';

import { useState } from 'react';
import { englishCenters, EnglishCenter } from '@/data/centers';

export default function SearchPage() {
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const uniqueCities = Array.from(new Set(englishCenters.map(center => center.city)));
  const uniqueCourses = Array.from(new Set(englishCenters.flatMap(center => center.courses)));

  const filteredCenters = englishCenters.filter(center => {
    const matchesCity = !selectedCity || center.city === selectedCity;
    const matchesCourse = !selectedCourse || center.courses.includes(selectedCourse);
    const matchesSearch = !searchTerm || 
      center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      center.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCity && matchesCourse && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Find English Centers</h1>
        
        {/* Search Filters */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Search centers..."
              className="p-3 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="p-3 border rounded-lg"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="">All Cities</option>
              {uniqueCities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <select
              className="p-3 border rounded-lg"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              <option value="">All Courses</option>
              {uniqueCourses.map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              onClick={() => {
                setSelectedCity('');
                setSelectedCourse('');
                setSearchTerm('');
              }}
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Centers List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCenters.map(center => (
            <div key={center.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{center.name}</h2>
                <p className="text-gray-600 mb-4">{center.description}</p>
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mr-2">
                    {center.city}
                  </span>
                  {center.courses.map(course => (
                    <span key={course} className="inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full mr-2 mb-2">
                      {course}
                    </span>
                  ))}
                </div>
                <a
                  href={center.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Visit Website →
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredCenters.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No centers found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
} 