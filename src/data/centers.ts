export interface EnglishCenter {
  id: string;
  name: string;
  location: string;
  city: string;
  courses: string[];
  website: string;
  description: string;
}

export const englishCenters: EnglishCenter[] = [
  {
    id: 'apollo-hanoi',
    name: 'Apollo English',
    location: 'Hanoi',
    city: 'Hanoi',
    courses: ['Kids', 'Adults', 'IELTS'],
    website: 'https://apollo.edu.vn',
    description: 'Leading English center offering courses for kids, adults, and IELTS preparation.'
  },
  {
    id: 'ila-hanoi',
    name: 'ILA Vietnam',
    location: 'Hanoi',
    city: 'Hanoi',
    courses: ['General English', 'Business English', 'IELTS', 'TOEFL'],
    website: 'https://ila.edu.vn',
    description: 'Diverse English programs with native teachers and modern teaching methods.'
  },
  {
    id: 'gln-hanoi',
    name: 'GLN English Center',
    location: 'Hanoi',
    city: 'Hanoi',
    courses: ['IELTS', 'Communication', 'Business English'],
    website: 'https://gln.edu.vn',
    description: 'Specializes in IELTS preparation and communication skills development.'
  },
  {
    id: 'vus-hcmc',
    name: 'VUS',
    location: 'Ho Chi Minh City',
    city: 'Ho Chi Minh City',
    courses: ['Kids', 'Teens', 'Adults', 'IELTS', 'TOEFL'],
    website: 'https://vus.edu.vn',
    description: 'Large network of English centers offering varied courses for all ages.'
  },
  {
    id: 'yola-hcmc',
    name: 'YOLA Education',
    location: 'Ho Chi Minh City',
    city: 'Ho Chi Minh City',
    courses: ['IELTS', 'TOEFL', 'Kids\' English', 'Academic English'],
    website: 'https://yola.vn',
    description: 'Comprehensive English education with focus on IELTS and TOEFL preparation.'
  },
  {
    id: 'acet-hcmc',
    name: 'ACET Vietnam',
    location: 'Ho Chi Minh City',
    city: 'Ho Chi Minh City',
    courses: ['IELTS', 'Academic English', 'Business English'],
    website: 'https://acet.edu.vn',
    description: 'Specialized in IELTS and academic English preparation.'
  },
  {
    id: 'apollo-danang',
    name: 'Apollo English',
    location: 'Da Nang',
    city: 'Da Nang',
    courses: ['Kids', 'Adults', 'IELTS'],
    website: 'https://apollo.edu.vn',
    description: 'Quality English education for kids and adults in Da Nang.'
  },
  {
    id: 'res-danang',
    name: 'RES English Center',
    location: 'Da Nang',
    city: 'Da Nang',
    courses: ['IELTS', 'Kids\' English', 'Communication'],
    website: 'https://res.edu.vn',
    description: 'Specialized in IELTS preparation and kids\' English programs.'
  },
  {
    id: 'eiv-danang',
    name: 'EIV Education',
    location: 'Da Nang',
    city: 'Da Nang',
    courses: ['General English', 'Business English', 'IELTS'],
    website: 'https://eiv.edu.vn',
    description: 'Flexible courses with native teachers and modern teaching methods.'
  }
]; 