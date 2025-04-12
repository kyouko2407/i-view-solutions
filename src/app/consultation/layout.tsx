import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Consultation - English Center Comparison',
  description: 'Compare English centers and get AI-powered recommendations',
};

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 