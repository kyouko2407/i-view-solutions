'use client';

import Image from 'next/image';

export default function VSolutionsLogo() {
  return (
    <div className="flex items-center">
      <Image
        src="/logo-full.png"
        alt="V-Solutions Logo"
        width={200}
        height={60}
        priority
        className="h-auto"
      />
    </div>
  );
} 