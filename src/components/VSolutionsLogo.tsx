'use client';

import Image from 'next/image';

export default function VSolutionsLogo() {
  return (
    <Image
      src="/logo.png"
      alt="i-View Solutions Logo"
      width={150}
      height={40}
      priority
    />
  );
} 