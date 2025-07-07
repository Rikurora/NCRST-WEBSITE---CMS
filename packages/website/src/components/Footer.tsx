import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Phone, Mail, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-ncrst-grey text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About NCRST */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-white">
                <img
                  src="/NCRST.png"
                  alt="NCRST Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold">NCRST</h3>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-body mb-4">
              Promoting and regulating Research, Science, Technology,
              Innovation, and Biosafety in Namibia.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+264 61 431 7000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@ncrst.na</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Windhoek, Namibia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/research#grants"
                  className="text-gray-300 hover:text-ncrst-gold transition-colors"
                >
                  Research Grants
                </Link>
              </li>
              <li>
                <Link
                  to="/innovation#boostup"
                  className="text-gray-300 hover:text-ncrst-gold transition-colors"
                >
                  BOOSTUP Challenge
                </Link>
              </li>
              <li>
                <Link
                  to="/technology#ai"
                  className="text-gray-300 hover:text-ncrst-gold transition-colors"
                >
                  National AI Working Group
                </Link>
              </li>
              <li>
                <Link
                  to="/science#fair"
                  className="text-gray-300 hover:text-ncrst-gold transition-colors"
                >
                  Science Fair
                </Link>
              </li>
              <li>
                <Link
                  to="/councils/biosafety"
                  className="text-gray-300 hover:text-ncrst-gold transition-colors"
                >
                  Biosafety Council
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-gray-300 hover:text-ncrst-gold transition-colors"
                >
                  News & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/procurement#open"
                  className="text-gray-300 hover:text-ncrst-gold transition-colors"
                >
                  Open Bids
                </Link>
              </li>
              <li>
                <Link
                  to="/vacancies#current"
                  className="text-gray-300 hover:text-ncrst-gold transition-colors"
                >
                  Current Vacancies
                </Link>
              </li>
              <li>
                <Link
                  to="/councils"
                  className="text-gray-300 hover:text-ncrst-gold transition-colors"
                >
                  National Councils
                </Link>
              </li>
              <li>
                <Link
                  to="/resources#infrastructure"
                  className="text-gray-300 hover:text-ncrst-gold transition-colors"
                >
                  Lab Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  to="/about#legislation"
                  className="text-gray-300 hover:text-ncrst-gold transition-colors"
                >
                  Legislation
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-ncrst-gold transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Online Portals */}
          <div id="portals">
            <h4 className="text-lg font-semibold mb-4">Online Portals</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://gms.ncrst.na"
                  className="text-gray-300 hover:text-ncrst-gold transition-colors flex items-center space-x-1"
                >
                  <span>Grants Management System</span>
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-ncrst-gold transition-colors flex items-center space-x-1"
                >
                  <span>Researcher Portal</span>
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-ncrst-gold transition-colors flex items-center space-x-1"
                >
                  <span>Document Repository</span>
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-ncrst-gold transition-colors flex items-center space-x-1"
                >
                  <span>Research Institute Registration</span>
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-300 mb-4 md:mb-0">
              © 2025 National Commission on Research, Science and Technology.
              All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-300 hover:text-ncrst-gold transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-ncrst-gold transition-colors"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-ncrst-gold transition-colors"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
