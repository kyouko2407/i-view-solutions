import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learning Resources - V-Solution',
  description: 'Access premium study materials, test papers, and books for English learning',
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 