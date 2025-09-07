import React from "react";

export default function About() {
  return (
    <div className="w-full mx-auto h-screen p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We are a leading consulting firm dedicated to helping businesses
          achieve their goals through innovative solutions and expert guidance.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Our Mission
        </h2>
        <p className="text-gray-700 mb-4">
          Our mission is to empower organizations by providing top-notch
          consulting services that drive growth, efficiency, and success. We
          strive to build lasting relationships with our clients based on trust,
          integrity, and excellence.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Team</h2>
        <p className="text-gray-700 mb-4">
          Our team consists of experienced professionals with diverse
          backgrounds in various industries. We bring a wealth of knowledge and
          expertise to every project, ensuring that our clients receive the best
          possible solutions tailored to their unique needs.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Why Choose Us?
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            Proven track record of success with numerous satisfied clients.
          </li>
          <li>
            Customized solutions designed to meet your specific business
            challenges.
          </li>
          <li>Commitment to excellence and continuous improvement.</li>
          <li>Collaborative approach that values your input and feedback.</li>
        </ul>
      </div>
    </div>
  );
}
