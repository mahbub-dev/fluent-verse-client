import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { RiFacebookFill, RiTwitterFill, RiInstagramFill, RiLinkedinFill } from "react-icons/ri";
// import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-white font-[200]">
              <FaPhone className="inline-block mr-2" />
              1234 Language Street
            </p>
            <p className="text-white font-[200]">
              <FaEnvelope className="inline-block mr-2" />
              info@languagewebsite.com
            </p>
          </div>
      
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Services</h2>
            <ul className="text-white font-[200]">
              <li>Online Language Courses</li>
              <li>Language Tutors</li>
              <li>Language Resources</li>
              <li>Language Exams</li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#1F2937]">
                <RiFacebookFill />
              </a>
              <a href="#" className="text-white hover:text-[#1F2937]">
                <RiTwitterFill />
              </a>
              <a href="#" className="text-white hover:text-[#1F2937]">
                <RiInstagramFill />
              </a>
              <a href="#" className="text-white hover:text-[#1F2937]">
                <RiLinkedinFill />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-[#1F2937] pt-8">
          <p className="text-white text-sm text-center">
            &copy; {new Date().getFullYear()} FluentVerse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
