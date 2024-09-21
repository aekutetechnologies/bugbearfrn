import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
// import Link from "next/link";

import { FiMail } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col ">
      {/* First div with equal sections */}
      <div className="w-full max-w-screen-xl mx-auto flex flex-col">
        {/* First div with equal sections */}
        <div className="flex flex-wrap w-full  p-6 gap-8">
          {/* Section 1 */}
          <div className="flex-1 max-w-xs flex flex-col gap-4 ">
            <Image src={logo} alt="logo" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
              tenetur eius inventore sint? Delectus iure rerum, eius distinctio
              magnam accusantium reiciendis esse quis dignissimos exercitationem
              culpa..
            </p>
          </div>

          {/* Section 2 */}
          <div className="flex-1 max-w-xs">
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Copyright Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Code and Conduct
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Fees and Charges
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="flex-1 max-w-xs ">
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help and Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Offerings
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="flex-1 max-w-xs">
  <ul className="space-y-2">
    <li className="flex items-center gap-2">
      <span>Stay Connected</span>
    </li>
    <li className="flex items-center gap-2">
      <FaFacebookF />
      <a href="#" className="hover:underline">
        Facebook
      </a>
    </li>
    <li className="flex items-center gap-2">
      <FaTwitter />
      <a href="#" className="hover:underline">
        Twitter
      </a>
    </li>
    <li className="flex items-center gap-2">
      <FaInstagram />
      <a href="#" className="hover:underline">
        Instagram
      </a>
    </li>
    <li className="flex items-center gap-2">
      <FaLinkedinIn />
      <a href="#" className="hover:underline">
        LinkedIn
      </a>
    </li>
  </ul>
</div>
        </div>

        <hr className="my-8 border-gray-400" />

        {/* Second div */}
        <div className="flex justify-between p-4 text-gray-700">
          <div>Copyright © 2024 Bugbear. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <FiMail />
            <a href="mailto:info@bugbear.com" className="hover:underline">
              info@bugbear.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
