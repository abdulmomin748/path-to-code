"use client";
import React, { use, useEffect, useState } from "react";
import { ArrowLeft, Clock, Users, Star } from "lucide-react";
import Link from "next/link";

function CourseDetailsPage({ params }) {
  const { id } = use(params);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    fetch("/courseDetails.json")
      .then((res) => res.json())
      .then((data) => {
        const foundCourse = data.find((c) => c.id === Number(id));
        setCourse(foundCourse);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch course data:", err);
        setLoading(false);
      });
  }, [id]);
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Course not found.
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href={"/"}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Title & Meta */}
        <div className="mb-8">
          <span className="text-sm text-gray-600">{course.category}</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            {course.title}
          </h1>
          <p className="text-lg text-gray-600 mb-6">{course.description}</p>

          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="font-semibold text-gray-900">
                {course.rating}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{course.students.toLocaleString()} students</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
            <span className="px-2 py-1 bg-gray-100 rounded text-xs">
              {course.level}
            </span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="border-t border-b border-gray-200 py-8 mb-8">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold text-gray-900">
              {course.price}
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Enroll Now
            </button>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What you'll learn
          </h2>
          <ul className="space-y-2">
            {course.whatYouWillLearn.map((item, idx) => (
              <li key={idx} className="text-gray-700">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Prerequisites */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Prerequisites
          </h2>
          <p className="text-gray-700">{course.prerequisites}</p>
        </div>

        {/* Instructor */}
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Instructor</h2>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-semibold">
              {course.instructor
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <div className="font-semibold text-gray-900">
                {course.instructor}
              </div>
              <div className="text-sm text-gray-600">Course Instructor</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CourseDetailsPage;
