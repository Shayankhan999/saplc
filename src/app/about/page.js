// app/about/page.js
import Image from 'next/image';

export default function AboutPage() {
  // Team members data
  const teamMembers = [
    {
      name: "Waseem Siddiqui",
      position: "Founder & CEO",
      image: "public/images/ceo.jpeg",
      bio: "SAP expert with 15+ years of industry experience"
    },
    {
      name: "Ghous Ahmed",
      position: "Head of Training",
      image: "/images/team/sana.jpg",
      bio: "Specialized in SAP FICO and MM modules"
    }
  ];

  // Statistics data
  const stats = [
    { value: "1,000+", label: "Students Trained" },
    { value: "50+", label: "Courses Offered" },
    { value: "100%", label: "Satisfaction Rate" }
  ];

  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About SAP Training Center
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Empowering professionals with industry-leading SAP education since 2010
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="bg-white shadow rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                At SAPLC, we are committed to delivering world-class SAP training programs that bridge 
                the gap between academic knowledge and industry requirements. Our mission is to create 
                job-ready professionals through practical, hands-on training.
              </p>
              <p className="mt-4">
                We believe in learning by doing, which is why our courses emphasize real-world case 
                studies and projects from actual SAP implementations.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="bg-blue-700 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-10 text-center">By The Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-5xl font-bold mb-2">{stat.value}</p>
                  <p className="text-xl">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0">
                      {/* <Image
                        className="h-24 w-24 rounded-full object-cover"
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                      /> */}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-blue-600">{member.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white shadow rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Email:</span> info@saplc.com
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Phone:</span> +92 300 1234567
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Address:</span> 123 Tech Street, Karachi, Pakistan
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <p className="text-gray-600 mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}