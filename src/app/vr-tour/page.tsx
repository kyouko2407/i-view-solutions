'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import the VR viewer component to avoid SSR issues
const ReactVirtualTour = dynamic(() => import('@/components/VirtualTour'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] flex items-center justify-center bg-gray-100">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
    </div>
  ),
});

const rooms = [
  {
    id: 'classroom1',
    name: 'Modern Classroom',
    description: 'Experience our state-of-the-art classroom equipped with interactive whiteboards and comfortable seating.',
    features: ['Interactive Whiteboard', 'Ergonomic Seating', 'Natural Lighting']
  },
  {
    id: 'library',
    name: 'Learning Library',
    description: 'Browse through our extensive collection of learning materials and study resources.',
    features: ['Quiet Study Areas', 'Digital Resources', 'Reference Materials']
  },
  {
    id: 'discussion',
    name: 'Discussion Room',
    description: 'Perfect space for group discussions and speaking practice sessions.',
    features: ['Group Tables', 'Presentation Equipment', 'Acoustic Design']
  },
  {
    id: 'language_lab',
    name: 'Language Lab',
    description: 'High-tech facility for immersive language learning and practice.',
    features: ['Audio Stations', 'Recording Studio', 'Pronunciation Software']
  }
];

export default function VRTourPage() {
  const [selectedRoom, setSelectedRoom] = useState('classroom1');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">Virtual Center Tour</h1>
          <p className="text-xl text-center text-blue-100">
            Experience our learning spaces in immersive 360° virtual reality
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Room Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {rooms.map((room) => (
            <button
              key={room.id}
              onClick={() => setSelectedRoom(room.id)}
              className={`p-6 rounded-xl text-left transition-all ${
                selectedRoom === room.id
                  ? 'bg-blue-600 text-white ring-2 ring-blue-600 ring-offset-2'
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <h3 className="font-semibold text-lg mb-2">{room.name}</h3>
              <p className={`text-sm mb-4 ${selectedRoom === room.id ? 'text-blue-100' : 'text-gray-600'}`}>
                {room.description}
              </p>
              <div className="space-y-1">
                {room.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center text-sm ${
                      selectedRoom === room.id ? 'text-blue-100' : 'text-gray-500'
                    }`}
                  >
                    <svg
                      className="w-4 h-4 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* VR Viewer */}
        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="absolute top-4 right-4 z-10 space-x-2">
            <button
              onClick={toggleFullscreen}
              className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg transition-colors"
              title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isFullscreen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20H5a2 2 0 01-2-2v-4m14 6h4a2 2 0 002-2v-4M5 4h4M15 4h4a2 2 0 012 2v4M5 16v4m14-4v4"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                )}
              </svg>
            </button>
          </div>
          <ReactVirtualTour roomId={selectedRoom} />
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">How to Navigate</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Look Around</h3>
                <p className="text-gray-600 mt-1">Click and drag or use touch controls to explore the space</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Interact</h3>
                <p className="text-gray-600 mt-1">Click on hotspots to learn more about specific features</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Fullscreen</h3>
                <p className="text-gray-600 mt-1">Click the fullscreen button for an immersive experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 