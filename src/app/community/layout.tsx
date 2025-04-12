import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'English Learning Community - V-Solution',
  description: 'Join our community of English learners, share experiences, and get expert tips',
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 