import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonial = () => {
  return (
    <div
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="testimonials"
    >
      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Real Stories From Those Who Found Home With Us
      </p>

      {/* Testimonials grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col items-center text-center"
          >
            {/* Avatar */}
            <img
              src={testimonial.image}
              alt={testimonial.alt || testimonial.name}
              className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-gray-200"
            />

            {/* Name */}
            <h2 className="text-lg font-semibold text-gray-800">
              {testimonial.name}
            </h2>

            {/* Title/Role */}
            <p className="text-sm text-gray-500 mb-3">{testimonial.title}</p>

            {/* Rating */}
            <div className="flex justify-center mb-3 text-yellow-500">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <span key={i} className="text-xl">★</span>
              ))}
            </div>

            {/* Review */}
            <p className="text-gray-600 text-sm leading-relaxed">
              “{testimonial.text}”
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
