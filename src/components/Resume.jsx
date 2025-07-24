import React from 'react';
import { personalInfo } from '../data';

const Resume = () => {
  return (
    <div className="text-center my-8">
      <h2 className="text-3xl font-bold mb-4">Resume</h2>

      {/* View Button */}
      <a
        href={personalInfo.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition mx-2"
      >
        View Resume
      </a>

      {/* Download Button */}
      <a
        href={personalInfo.resume}
        download
        className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition mx-2"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
