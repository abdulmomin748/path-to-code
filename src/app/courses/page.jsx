"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, Clock, Users, Star } from "lucide-react";
import ProtectedRoute from "@/components/ProtectedRoute";
import Link from "next/link";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  console.log();
  
  return (
    <ProtectedRoute>
      <section id="courses" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            All Courses
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
                <Link
                  href={`/courses/${course.id}`}
                  className="w-full inline-block text-center border border-blue-600 text-black py-2 rounded hover:bg-blue-50 transition"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ProtectedRoute>
  );
}
