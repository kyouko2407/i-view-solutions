'use client';

import { useState } from 'react';

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

export default function Community() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">English Learning Community</h1>
          <p className="text-xl text-gray-600">
            Join our community of English learners, share experiences, and get expert tips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Learning Tips Section */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Learning Tips</h2>
            <div className="space-y-4">
              {learningTips.map((tip) => (
                <div key={tip.id} className="bg-white rounded-lg shadow-sm p-4">
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
                <div key={thread.id} className="bg-white rounded-lg shadow-sm p-4">
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
    </div>
  );
} 