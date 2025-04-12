import Image from "next/image";
import Link from "next/link";
import VSolutionsLogo from '@/components/VSolutionsLogo';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-12">
          <Image
            src="/logo.png"
            alt="i-View Solutions Logo"
            width={300}
            height={100}
            className="mx-auto"
          />
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mt-8">
            INNOVATIVE SOLUTIONS FOR EVERY CHALLENGE
          </h1>
        </div>

        <p className="mt-3 text-xl text-gray-600 sm:mt-5 sm:text-2xl max-w-xl mx-auto">
          Discover, compare, and select the best English learning centers with
          AI-powered recommendations and immersive VR experiences.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/search"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Find Centers
          </Link>
          <Link
            href="/practice-tests"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white border-blue-600 hover:bg-blue-50"
          >
            Take Practice Test
          </Link>
        </div>
      </div>
    </div>
  );
}
