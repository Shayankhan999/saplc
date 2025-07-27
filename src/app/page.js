// app/page.js
'use client'
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // Featured courses data
  const featuredCourses = [
    {
      id: 1,
      title: "SAP FICO",
      description: "Finance and Controlling training with practical examples",
      duration: "6 Weeks",
      image: "/images/courses/SAPFICO.png"
    },
    {
      id: 2,
      title: "SAP MM",
      description: "Material Management complete course",
      duration: "4 Weeks",
      image: "/images/courses/bg.png"
    },
    {
      id: 3,
      title: "SAP SD",
      description: "Sales and Distribution professional training",
      duration: "5 Weeks",
      image: "/images/courses/sap-sd.jpg"
    }
  ];

  // Why choose us points
  const benefits = [
    "Industry expert trainers",
    "Practical hands-on training",
    "Certification preparation",
    "Job placement assistance",
    "Flexible class schedules"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-700 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-blue-700 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block">SAP Training Center</span>
                    <span className="block text-blue-200">Professional SAP Courses</span>
                  </h1>
                  <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Become SAP certified with our industry-leading training programs. Practical learning with job placement support.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link 
                        href="/courses" 
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
                      >
                        View Courses
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link 
                        href="/request" 
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
                      >
                        Get Information
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Featured Courses
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Industry-relevant SAP training programs
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredCourses.map((course) => (
                <div key={course.id} className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-md h-full">
                    <div className="-mt-6">
                      <div className="relative h-40 w-full">
                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          className="rounded-t-lg object-cover"
                        />
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-gray-900">{course.title}</h3>
                      <p className="mt-2 text-base text-gray-500">
                        {course.description}
                      </p>
                      <p className="mt-3 text-sm font-medium text-blue-600">
                        Duration: {course.duration}
                      </p>
                      <Link 
                        href={`/courses/${course.id}`}
                        className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-500"
                      >
                        Learn more
                        <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Our Training Center
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We provide the best SAP training experience
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{benefit}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to start your SAP journey?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Join thousands of professionals who boosted their careers with our training programs
          </p>
          <Link
            href="/auth/signup"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Sign up today
          </Link>
        </div>
      </div>
    </div>
  );
}