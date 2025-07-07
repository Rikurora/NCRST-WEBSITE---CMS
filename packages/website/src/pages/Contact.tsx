import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Building,
} from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    category: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      organization: "",
      subject: "",
      category: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+264 61 431 7000", "+264 61 431 7001 (Fax)"],
      color: "bg-ncrst-blue",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@ncrst.na", "research@ncrst.na"],
      color: "bg-ncrst-green",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["NCRST Building", "Private Bag 13253", "Windhoek, Namibia"],
      color: "bg-ncrst-grey",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday - Sunday: Closed",
      ],
      color: "bg-ncrst-gold",
    },
  ];

  const departments = [
    {
      name: "Research & Innovation",
      contact: "research@ncrst.na",
      phone: "+264 61 431 7010",
      description:
        "Research grants, innovation programs, and collaboration opportunities",
    },
    {
      name: "Science & Technology",
      contact: "science@ncrst.na",
      phone: "+264 61 431 7048",
      description: "STEM education, science fair, and technology transfer",
    },
    {
      name: "Biosafety",
      contact: "biosafety@ncrst.na",
      phone: "+264 61 431 7008",
      description: "GMO permits, biosafety regulations, and compliance",
    },
    {
      name: "Corporate Services",
      contact: "admin@ncrst.na",
      phone: "+264 61 431 7006",
      description: "General administration, finance, and human resources",
    },
  ];

  const inquiryCategories = [
    "General Inquiry",
    "Research Grants",
    "Innovation Programs",
    "Science Education",
    "Biosafety Permits",
    "Technology Transfer",
    "Partnership Opportunities",
    "Media Inquiry",
    "Other",
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-gradient-to-r from-ncrst-grey to-ncrst-gold text-white py-32 min-h-[80vh] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-heading">
              Contact Us
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-body opacity-90">
              Get in touch with our team for information, support, or
              collaboration opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 text-center"
                >
                  <div
                    className={`${info.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-ncrst-grey-dark">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-ncrst-grey mb-6 leading-heading">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-ncrst-grey mb-2"
                    >
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ncrst-blue focus:border-transparent"
                        placeholder="Your full name"
                      />
                      <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-ncrst-grey mb-2"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ncrst-blue focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                      <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm font-medium text-ncrst-grey mb-2"
                  >
                    Organization
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ncrst-blue focus:border-transparent"
                      placeholder="Your organization or institution"
                    />
                    <Building className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-ncrst-grey mb-2"
                    >
                      Inquiry Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ncrst-blue focus:border-transparent"
                    >
                      <option value="">Select a category</option>
                      {inquiryCategories.map((category, index) => (
                        <option key={index} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-ncrst-grey mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ncrst-blue focus:border-transparent"
                      placeholder="Brief subject line"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-ncrst-grey mb-2"
                  >
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ncrst-blue focus:border-transparent resize-none"
                      placeholder="Please provide details about your inquiry..."
                    />
                    <MessageSquare className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-ncrst-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-ncrst-blue/90 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Department Contacts */}
            <div>
              <h2 className="text-2xl font-bold text-ncrst-grey mb-6 leading-heading">
                Department Contacts
              </h2>
              <div className="space-y-6">
                {departments.map((dept, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-ncrst-blue transition-colors"
                  >
                    <h3 className="text-lg font-bold text-ncrst-grey mb-2 leading-heading">
                      {dept.name}
                    </h3>
                    <p className="text-sm text-ncrst-grey-dark mb-4 leading-body">
                      {dept.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Mail size={16} className="text-ncrst-blue" />
                        <a
                          href={`mailto:${dept.contact}`}
                          className="text-ncrst-blue hover:text-ncrst-green transition-colors"
                        >
                          {dept.contact}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone size={16} className="text-ncrst-green" />
                        <a
                          href={`tel:${dept.phone}`}
                          className="text-ncrst-grey-dark hover:text-ncrst-green transition-colors"
                        >
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Location */}
      <section className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Visit Our Office
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Located in the heart of Windhoek, our offices are easily
              accessible by public transport and private vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-gray-400 mx-auto mb-4" size={48} />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">
                    NCRST Building, Windhoek
                  </p>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
                Location Details
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-ncrst-grey mb-2">
                    Physical Address
                  </h4>
                  <p className="text-ncrst-grey-dark">
                    NCRST Building
                    <br />
                    Corner of Beethoven & Brahms Streets
                    <br />
                    Windhoek West
                    <br />
                    Windhoek, Namibia
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-ncrst-grey mb-2">
                    Postal Address
                  </h4>
                  <p className="text-ncrst-grey-dark">
                    Private Bag 13253
                    <br />
                    Windhoek
                    <br />
                    Namibia
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-ncrst-grey mb-2">
                    Parking
                  </h4>
                  <p className="text-ncrst-grey-dark">
                    Free parking available on-site for visitors. Additional
                    street parking available nearby.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-ncrst-grey mb-2">
                    Public Transport
                  </h4>
                  <p className="text-ncrst-grey-dark">
                    Accessible by city bus routes. Taxi services available from
                    the city center.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <Phone className="text-red-600" size={24} />
              <h3 className="text-xl font-bold text-red-800 leading-heading">
                Emergency Biosafety Hotline
              </h3>
            </div>
            <p className="text-red-700 mb-4 leading-body">
              For urgent biosafety incidents or emergencies involving
              genetically modified organisms, contact our 24/7 emergency
              hotline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+26461234567"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
              >
                Emergency Hotline: +264 61 234 567
              </a>
              <a
                href="mailto:emergency@ncrst.na"
                className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors text-center"
              >
                emergency@ncrst.na
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
