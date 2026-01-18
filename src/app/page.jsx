"use client";
import {
  Menu,
  X,
  Code,
  BookOpen,
  Users,
  Award,
  DollarSign,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {
  const [courses, setCourses] = useState([]);
   const testimonials = [
    { name: 'Sarah Chen', role: 'Frontend Developer', text: 'PathToCode helped me transition from marketing to web development in 6 months!' },
    { name: 'Marcus Johnson', role: 'Software Engineer', text: 'The structured learning paths made complex topics easy to understand.' },
  ];

  console.log(courses);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white-600 mb-6">
            Learn Programming,
            <br />
            Your Way
          </h1>
          <p className="text-xl text-white-700 mb-8 max-w-2xl mx-auto">
            Accessible programming courses for everyone. Start your coding
            journey today and build the future you want.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
            Start Learning
          </button>
          <p className="mt-4 text-white">Join 50,000+ students worldwide</p>
        </div>
      </section>
      {/* Courses Section */}
      <section id="courses" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Browse Courses
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    {course.level}
                  </span>
                  <span className="font-semibold text-gray-900">
                    {course.price}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{course.category}</p>
                <Link href={`/courses/${course.id}`} className="w-full inline-block text-center border border-blue-600 text-black py-2 rounded hover:bg-blue-50 transition">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Pricing Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl text-black font-semibold mb-2">Free</h3>
              <p className="text-3xl text-black font-bold mb-4">$0</p>
              <ul className="space-y-2 mb-6 text-gray-400">
                <li>• Access to free courses</li>
                <li>• Community forum</li>
                <li>• Basic resources</li>
              </ul>
              <button className="w-full border border-gray-300 text-black py-2 rounded hover:bg-gray-50 transition">
                Get Started
              </button>
            </div>

            <div className="bg-gray-500 text-white p-8 rounded-lg shadow-lg transform scale-105">
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <p className="text-3xl font-bold mb-4">$29/mo</p>
              <ul className="space-y-2 mb-6">
                <li>• All course access</li>
                <li>• Certificates</li>
                <li>• Priority support</li>
                <li>• Live coding sessions</li>
              </ul>
              <button className="w-full bg-white text-black py-2 rounded hover:bg-gray-100 transition">
                Subscribe Now
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl text-black font-semibold mb-2">Lifetime</h3>
              <p className="text-3xl text-black font-bold mb-4">$299</p>
              <ul className="space-y-2 mb-6 text-gray-400">
                <li>• Everything in Pro</li>
                <li>• Lifetime access</li>
                <li>• All future courses</li>
                <li>• 1-on-1 mentorship</li>
              </ul>
              <button className="w-full border border-gray-300 text-black py-2 rounded hover:bg-gray-50 transition">
                Buy Once
              </button>
            </div>
          </div>
        </div>
      </section>
       {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Student Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Learning Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <BookOpen className="w-8 h-8 text-black mb-4" />
              <h3 className="font-semibold text-black text-lg mb-2">Learning Paths</h3>
              <p className="text-gray-400">
                Structured roadmaps for Frontend, Backend, and Full Stack
                development.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <Users className="w-8 h-8 text-black mb-4" />
              <h3 className="font-semibold text-black text-lg mb-2">Community Forum</h3>
              <p className="text-gray-400">
                Connect with fellow learners and get help from instructors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <Award className="w-8 h-8 text-black mb-4" />
              <h3 className="font-semibold text-black text-lg mb-2">Coding Challenges</h3>
              <p className="text-gray-400">
                Practice your skills with real-world coding problems.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-lg mb-2">
                Do I get a certificate after completing a course?
              </h3>
              <p className="text-gray-400">
                Yes, all paid courses include a certificate of completion.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-lg mb-2">
                Can I learn at my own pace?
              </h3>
              <p className="text-gray-400">
                Absolutely! All courses are self-paced with lifetime access.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-lg mb-2">
                What if I need help?
              </h3>
              <p className="text-gray-400">
                Our community forum and support team are here to help you
                succeed.
              </p>
            </div>
            <div className="pb-4">
              <h3 className="font-semibold text-lg mb-2">
                Is there a refund policy?
              </h3>
              <p className="text-gray-400">
                Yes, we offer a 30-day money-back guarantee on all courses.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
