import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <Image
              src="/images/logo.png"
              alt="V-Solutions Logo"
              width={400}
              height={120}
              className="mx-auto mb-12 h-auto w-auto"
              priority
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              INNOVATIVE SOLUTIONS FOR
              <br className="hidden sm:block" /> EVERY CHALLENGE
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Discover, compare, and select the best English learning centers with
              AI-powered recommendations and immersive VR experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/search"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base sm:text-lg font-medium rounded-lg text-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                Find Centers
              </Link>
              <Link
                href="/practice-tests"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-base sm:text-lg font-medium rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Take Practice Test
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Why Choose V-Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Matching</h3>
              <p className="text-gray-600">
                Get personalized recommendations based on your learning style and goals.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Virtual Tours</h3>
              <p className="text-gray-600">
                Experience learning centers through immersive VR technology.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">
                Connect with other learners and share experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have found their perfect learning center
            through V-Solutions.
          </p>
          <Link
            href="/search"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base sm:text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Find Your Center Today
          </Link>
        </div>
      </section>
    </div>
  );
}
