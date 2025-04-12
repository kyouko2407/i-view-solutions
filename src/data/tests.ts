export interface Test {
  id: string;
  name: string;
  type: 'IELTS' | 'TOEIC' | 'TOEFL';
  level: string;
  sections: {
    name: string;
    questions: {
      id: number;
      question: string;
      options: string[];
      correctAnswer: number;
      explanation: string;
    }[];
  }[];
}

export const sampleTests: Test[] = [
  {
    id: 'ielts-band-6',
    name: 'IELTS Practice Test - Band 6',
    type: 'IELTS',
    level: 'Intermediate',
    sections: [
      {
        name: 'Listening',
        questions: [
          {
            id: 1,
            question: 'What is the main purpose of the museum tour?',
            options: [
              'To show historical artifacts',
              'To explain art techniques',
              'To demonstrate scientific principles',
              'To promote local artists'
            ],
            correctAnswer: 0,
            explanation: 'The speaker mentions that the tour focuses on historical artifacts from the region.'
          },
          {
            id: 2,
            question: 'How long does the complete tour take?',
            options: [
              '30 minutes',
              '45 minutes',
              '1 hour',
              '1.5 hours'
            ],
            correctAnswer: 2,
            explanation: 'The guide states that the full tour duration is one hour.'
          }
        ]
      },
      {
        name: 'Reading',
        questions: [
          {
            id: 1,
            question: 'According to the passage, what is the primary benefit of renewable energy?',
            options: [
              'Lower initial costs',
              'Environmental sustainability',
              'Higher energy output',
              'Easier maintenance'
            ],
            correctAnswer: 1,
            explanation: 'The text emphasizes the environmental benefits of renewable energy sources.'
          }
        ]
      }
    ]
  },
  {
    id: 'toeic-700',
    name: 'TOEIC Practice Test - 700 Points',
    type: 'TOEIC',
    level: 'Intermediate',
    sections: [
      {
        name: 'Listening',
        questions: [
          {
            id: 1,
            question: 'Where is the meeting scheduled to take place?',
            options: [
              'Conference Room A',
              'Main Office',
              'Training Center',
              'Cafeteria'
            ],
            correctAnswer: 0,
            explanation: 'The announcement clearly states the meeting will be in Conference Room A.'
          }
        ]
      },
      {
        name: 'Reading',
        questions: [
          {
            id: 1,
            question: 'What is the main purpose of the email?',
            options: [
              'To request information',
              'To confirm an appointment',
              'To report a problem',
              'To make a complaint'
            ],
            correctAnswer: 1,
            explanation: 'The email is primarily about confirming the details of an upcoming appointment.'
          }
        ]
      }
    ]
  },
  {
    id: 'toefl-80',
    name: 'TOEFL Practice Test - 80 Points',
    type: 'TOEFL',
    level: 'Intermediate',
    sections: [
      {
        name: 'Reading',
        questions: [
          {
            id: 1,
            question: 'What can be inferred about the author\'s opinion on technology in education?',
            options: [
              'It should be completely integrated',
              'It should be used selectively',
              'It should be avoided',
              'It should replace traditional methods'
            ],
            correctAnswer: 1,
            explanation: 'The author suggests a balanced approach to technology integration in education.'
          }
        ]
      },
      {
        name: 'Listening',
        questions: [
          {
            id: 1,
            question: 'What is the professor\'s main point about the research method?',
            options: [
              'It is outdated',
              'It needs modification',
              'It is perfect as is',
              'It should be abandoned'
            ],
            correctAnswer: 1,
            explanation: 'The professor indicates that while the method is good, it needs some adjustments.'
          }
        ]
      }
    ]
  }
]; 