'use client';

import { useState } from 'react';
import { sampleTests, Test } from '@/data/tests';

export default function PracticeTestsPage() {
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const handleTestSelect = (test: Test) => {
    setSelectedTest(test);
    setCurrentSection(0);
    setAnswers({});
    setShowResults(false);
  };

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const calculateScore = () => {
    if (!selectedTest) return 0;
    
    let correctAnswers = 0;
    let totalQuestions = 0;

    selectedTest.sections.forEach(section => {
      section.questions.forEach(question => {
        totalQuestions++;
        if (answers[question.id] === question.correctAnswer) {
          correctAnswers++;
        }
      });
    });

    return Math.round((correctAnswers / totalQuestions) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Practice Tests</h1>

        {!selectedTest ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleTests.map(test => (
              <div
                key={test.id}
                className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => handleTestSelect(test)}
              >
                <h2 className="text-xl font-semibold mb-2">{test.name}</h2>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {test.type}
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                    {test.level}
                  </span>
                </div>
                <p className="text-gray-600">
                  {test.sections.length} sections with practice questions
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">{selectedTest.name}</h2>
              <div className="flex items-center gap-4 mb-6">
                <button
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() => setSelectedTest(null)}
                >
                  ← Back to Tests
                </button>
                <span className="text-gray-600">
                  Section {currentSection + 1} of {selectedTest.sections.length}
                </span>
              </div>

              {!showResults ? (
                <div>
                  <h3 className="text-xl font-medium mb-4">
                    {selectedTest.sections[currentSection].name}
                  </h3>
                  {selectedTest.sections[currentSection].questions.map(question => (
                    <div key={question.id} className="mb-6">
                      <p className="font-medium mb-3">{question.question}</p>
                      <div className="space-y-2">
                        {question.options.map((option, index) => (
                          <label
                            key={index}
                            className={`block p-3 border rounded-lg cursor-pointer ${
                              answers[question.id] === index
                                ? 'bg-blue-50 border-blue-500'
                                : 'hover:bg-gray-50'
                            }`}
                          >
                            <input
                              type="radio"
                              name={`question-${question.id}`}
                              value={index}
                              checked={answers[question.id] === index}
                              onChange={() => handleAnswerSelect(question.id, index)}
                              className="mr-3"
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-between mt-8">
                    <button
                      className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                      onClick={() => setCurrentSection(prev => Math.max(0, prev - 1))}
                      disabled={currentSection === 0}
                    >
                      Previous Section
                    </button>
                    {currentSection < selectedTest.sections.length - 1 ? (
                      <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        onClick={() => setCurrentSection(prev => prev + 1)}
                      >
                        Next Section
                      </button>
                    ) : (
                      <button
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                        onClick={() => setShowResults(true)}
                      >
                        Submit Test
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Test Results</h3>
                  <div className="text-center mb-8">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {calculateScore()}%
                    </div>
                    <p className="text-gray-600">Overall Score</p>
                  </div>

                  {selectedTest.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-8">
                      <h4 className="text-xl font-medium mb-4">{section.name}</h4>
                      {section.questions.map(question => (
                        <div key={question.id} className="mb-4 p-4 bg-gray-50 rounded-lg">
                          <p className="font-medium mb-2">{question.question}</p>
                          <div className="mb-2">
                            <span className="font-medium">Your answer: </span>
                            <span className={answers[question.id] === question.correctAnswer ? 'text-green-600' : 'text-red-600'}>
                              {question.options[answers[question.id]]}
                            </span>
                          </div>
                          <div className="mb-2">
                            <span className="font-medium">Correct answer: </span>
                            <span className="text-green-600">
                              {question.options[question.correctAnswer]}
                            </span>
                          </div>
                          <p className="text-gray-600">{question.explanation}</p>
                        </div>
                      ))}
                    </div>
                  ))}

                  <button
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    onClick={() => handleTestSelect(selectedTest)}
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 