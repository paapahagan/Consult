import React from "react";
import {
  FiCodepen,
  FiCodesandbox,
  FiGrid,
  FiGitMerge,
  FiSlack,
  FiCpu,
} from "react-icons/fi";

export default function Services() {
  const posts = [
    {
      id: 1,
      icons: <FiCodepen size={48} />,
      title: "Residential Real Estate Services",
      content:
        "From property search to negotiation and closing, we're dedicated to finding your dream home.",
    },
    {
      id: 2,
      icons: <FiCodesandbox size={48} />,
      title: "Commercial Property Sales and Leasing",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat dignissim neque, nec lobortis nulla.",
    },
    {
      id: 3,
      icons: <FiGrid size={48} />,
      title: "Property management for commercial spaces",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat dignissim neque, nec lobortis nulla.",
    },
    {
      id: 4,
      icons: <FiGitMerge size={48} />,
      title: "Investment Strategy Development",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat dignissim neque, nec lobortis nulla.",
    },
    {
      id: 5,
      icons: <FiSlack size={48} />,
      title: "Legal and Regulatory Guidance",
      content:
        "We recognize that the legal and regulatory aspects of real estate transactions can be complex and daunting.",
    },
    {
      id: 6,
      icons: <FiCpu size={48} />,
      title: "Building Long-Term Client Relationships",
      content:
        "We take pride in offering personalized attention,ensuring that every client receives the dedicated service they deserve.",
    },
  ];
  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {posts.map((post) => (
          <div key={post.id} className="mb-8 p-6 border-l ">
            <p className="mb-4">{post.icons}</p>
            <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
            <p className="text-gray-700">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
