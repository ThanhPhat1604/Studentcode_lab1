import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const JobFinder = () => {
  const categories = [
    { name: "Design", jobs: 235 },
    { name: "Sales", jobs: 756 },
    { name: "Marketing", jobs: 140 },
    { name: "Finance", jobs: 325 },
    { name: "Technology", jobs: 436 },
    { name: "Engineering", jobs: 542 },
    { name: "Business", jobs: 211 },
    { name: "Human Resource", jobs: 346 },
  ];

  const featuredJobs = [
    { title: "Email Marketing", company: "Revolut", location: "Madrid, Spain", tags: ["Marketing", "Design"], type: "Full Time" },
    { title: "Brand Designer", company: "Dropbox", location: "San Francisco, US", tags: ["Marketing", "Design"], type: "Full Time" },
    { title: "Product Designer", company: "ClassPass", location: "Manchester, UK", tags: ["Marketing", "Design"], type: "Full Time" },
    { title: "Lead Designer", company: "Canva", location: "Ontario, Canada", tags: ["Marketing"], type: "Full Time" },
    { title: "Brand Strategist", company: "GoDaddy", location: "Marseille, France", tags: ["Marketing"], type: "Full Time" },
    { title: "Data Analyst", company: "Twitter", location: "San Diego, US", tags: ["Design"], type: "Full Time" },
  ];

  return (
    <div className="w-full flex flex-col items-center text-gray-900">
      <header className="w-full bg-white shadow-sm p-5 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">Job Finder</h1>
        <nav className="flex space-x-6">
          <a href="#" className="text-indigo-600 font-semibold">Find Jobs</a>
          <a href="#" className="text-gray-600">Browse Companies</a>
        </nav>
        <div className="flex space-x-4">
          <button className="text-gray-600">Login</button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded">Sign Up</button>
        </div>
      </header>

      <section className="w-full max-w-4xl text-center py-16">
        <h2 className="text-3xl font-bold">Discover more than <span className="text-indigo-600">5000+ Jobs</span></h2>
        <p className="text-gray-500 mt-2">Great platform for the job seeker passionate about startups.</p>
        <div className="mt-6 flex justify-center items-center space-x-2">
          <input type="text" placeholder="Job title or keyword" className="w-1/2 border rounded p-2" />
          <button className="bg-indigo-600 text-white px-6 flex items-center"> <FaSearch className="mr-2" /> Search my job</button>
        </div>
      </section>

      <section className="w-full max-w-5xl text-left py-8">
        <h3 className="text-2xl font-semibold">Explore by <span className="text-indigo-600">category</span></h3>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {categories.map((category, index) => (
            <div key={index} className={`p-4 border rounded-lg ${category.name === "Marketing" ? "bg-indigo-600 text-white" : ""}`}>
              <h4 className="font-semibold">{category.name}</h4>
              <p className="text-sm">{category.jobs} jobs available</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-5xl text-left py-8">
        <h3 className="text-2xl font-semibold">Featured <span className="text-indigo-600">jobs</span></h3>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {featuredJobs.map((job, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <h4 className="font-semibold">{job.title}</h4>
              <p className="text-sm text-gray-600">{job.company} - {job.location}</p>
              <div className="flex space-x-2 mt-2">
                {job.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <span className="text-xs bg-blue-200 px-2 py-1 rounded-full mt-2 inline-block">{job.type}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="w-full bg-gray-900 text-white p-8 mt-12">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-semibold">Job Finder</h3>
            <p className="text-sm mt-2">Find your dream job easier.</p>
          </div>
          <div>
            <h4 className="font-semibold">Resources</h4>
            <ul className="text-sm mt-2 space-y-2">
              <li>Help Docs</li>
              <li>Guide</li>
              <li>Updates</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Get job notifications</h4>
            <div className="mt-2 flex items-center border rounded p-2 bg-gray-800">
              <FiMail className="text-white mr-2" />
              <input type="email" placeholder="Email Address" className="bg-transparent text-white outline-none w-full" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JobFinder;
