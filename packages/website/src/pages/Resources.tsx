import React, { useState } from "react";
import {
  FileText,
  Download,
  Search,
  Calendar,
  Building,
  BarChart,
  Database,
} from "lucide-react";
import pexel13 from "../assets/pexels13.jpg";

const Resources: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  const categories = [
    { id: "all", name: "All Resources" },
    { id: "annual", name: "Annual Reports" },
    { id: "research", name: "R&D Reports" },
    { id: "policy", name: "Policy Documents" },
    { id: "guidelines", name: "Guidelines & Manuals" },
    { id: "infrastructure", name: "Infrastructure" },
  ];

  const years = ["all", "2024", "2023", "2022", "2021", "2020"];

  const resources = [
    {
      title: "NCRST Annual Report 2024",
      category: "annual",
      year: "2024",
      description:
        "Comprehensive overview of NCRST activities, achievements, and financial performance for 2024",
      fileType: "PDF",
      size: "8.5 MB",
      downloads: "2,340",
      date: "January 2025",
    },
    {
      title: "National R&D Survey Report 2024",
      category: "research",
      year: "2024",
      description:
        "Analysis of research and development activities across Namibian institutions and industries",
      fileType: "PDF",
      size: "12.3 MB",
      downloads: "1,890",
      date: "December 2024",
    },
    {
      title: "Biotechnology Policy Framework",
      category: "policy",
      year: "2024",
      description:
        "Strategic framework for biotechnology development and regulation in Namibia",
      fileType: "PDF",
      size: "3.2 MB",
      downloads: "1,560",
      date: "November 2024",
    },
    {
      title: "Research Grant Application Guidelines",
      category: "guidelines",
      year: "2024",
      description:
        "Comprehensive guide for researchers applying for NCRST funding opportunities",
      fileType: "PDF",
      size: "2.1 MB",
      downloads: "4,230",
      date: "October 2024",
    },
    {
      title: "Laboratory Infrastructure Assessment",
      category: "infrastructure",
      year: "2024",
      description:
        "Evaluation of research infrastructure capabilities across Namibian institutions",
      fileType: "PDF",
      size: "15.7 MB",
      downloads: "890",
      date: "September 2024",
    },
    {
      title: "Innovation Ecosystem Mapping Study",
      category: "research",
      year: "2023",
      description:
        "Comprehensive analysis of Namibia's innovation landscape and stakeholder networks",
      fileType: "PDF",
      size: "9.8 MB",
      downloads: "1,450",
      date: "December 2023",
    },
    {
      title: "STEM Education Strategy 2023-2027",
      category: "policy",
      year: "2023",
      description:
        "National strategy for strengthening science, technology, engineering, and mathematics education",
      fileType: "PDF",
      size: "4.6 MB",
      downloads: "2,100",
      date: "August 2023",
    },
    {
      title: "Biosafety Regulatory Guidelines",
      category: "guidelines",
      year: "2023",
      description:
        "Updated guidelines for biosafety assessment and GMO regulation procedures",
      fileType: "PDF",
      size: "5.4 MB",
      downloads: "1,230",
      date: "June 2023",
    },
  ];

  const infrastructure = [
    {
      name: "Biotechnology Laboratory Complex",
      location: "NCRST Windhoek Campus",
      facilities: [
        "Molecular Biology Lab",
        "Microbiology Lab",
        "Biosafety Level 2 Facility",
      ],
      equipment: "PCR machines, DNA sequencers, cell culture facilities",
      capacity: "50+ researchers",
      availability: "Available for external use",
    },
    {
      name: "Materials Testing Laboratory",
      location: "NCRST Windhoek Campus",
      facilities: ["Mechanical Testing", "Chemical Analysis", "Metallurgy Lab"],
      equipment: "Universal testing machines, spectrometers, microscopes",
      capacity: "30+ researchers",
      availability: "Available for external use",
    },
    {
      name: "Environmental Monitoring Station",
      location: "Multiple locations nationwide",
      facilities: [
        "Air Quality Monitoring",
        "Water Quality Testing",
        "Soil Analysis",
      ],
      equipment:
        "Environmental sensors, sampling equipment, analytical instruments",
      capacity: "Continuous monitoring",
      availability: "Data sharing available",
    },
    {
      name: "Innovation Hub & Fabrication Lab",
      location: "NCRST Windhoek Campus",
      facilities: ["3D Printing", "Electronics Workshop", "Prototyping Space"],
      equipment: "3D printers, laser cutters, electronics equipment",
      capacity: "40+ innovators",
      availability: "Open access program",
    },
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || resource.category === selectedCategory;
    const matchesYear =
      selectedYear === "all" || resource.year === selectedYear;

    return matchesSearch && matchesCategory && matchesYear;
  });

  return (
    <div>
      {/* Page Header */}
      <section
        className="relative min-h-[75vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${pexel13})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-10 leading-heading text-white">
              Resources & Infrastructure
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-body opacity-90 text-white">
              Access comprehensive reports, research publications, policy
              documents, and world-class research infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="md:col-span-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ncrst-blue focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ncrst-blue focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ncrst-blue focus:border-transparent"
                >
                  <option value="all">All Years</option>
                  {years.slice(1).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Library */}
      <section id="reports" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-ncrst-grey leading-heading">
              Document Library
            </h2>
            <div className="text-sm text-ncrst-grey-dark">
              Showing {filteredResources.length} of {resources.length} resources
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-ncrst-blue hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-ncrst-blue/10 p-2 rounded-lg">
                    <FileText className="text-ncrst-gold" size={20} />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {resource.fileType}
                    </span>
                    <span className="text-xs text-ncrst-grey-dark">
                      {resource.size}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                  {resource.title}
                </h3>
                <p className="text-sm text-ncrst-grey-dark mb-4 leading-body">
                  {resource.description}
                </p>

                <div className="space-y-2 mb-4 text-xs text-ncrst-grey-dark">
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} />
                    <span>{resource.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Download size={14} />
                    <span>{resource.downloads} downloads</span>
                  </div>
                </div>

                <button className="w-full bg-ncrst-blue text-white py-2 rounded-lg font-medium hover:bg-ncrst-blue/90 transition-colors flex items-center justify-center space-x-2">
                  <Download size={16} />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-gray-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-ncrst-grey mb-2">
                No resources found
              </h3>
              <p className="text-ncrst-grey-dark">
                Try adjusting your search criteria or filters
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Research Infrastructure */}
      <section id="infrastructure" className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Research Infrastructure
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              State-of-the-art facilities and equipment available to support
              research and innovation activities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {infrastructure.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="bg-ncrst-blue p-6 text-white">
                  <div className="flex items-center space-x-3 mb-3">
                    <Building size={32} />
                    <h3 className="text-xl font-bold leading-heading">
                      {facility.name}
                    </h3>
                  </div>
                  <p className="opacity-90">{facility.location}</p>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-2">
                        Facilities
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {facility.facilities.map((fac, idx) => (
                          <span
                            key={idx}
                            className="bg-ncrst-blue/10 text-ncrst-blue px-3 py-1 rounded-full text-sm"
                          >
                            {fac}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-2">
                        Equipment
                      </h4>
                      <p className="text-sm text-ncrst-grey-dark">
                        {facility.equipment}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-semibold text-ncrst-grey mb-1">
                          Capacity
                        </h4>
                        <p className="text-ncrst-grey-dark">
                          {facility.capacity}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-ncrst-grey mb-1">
                          Availability
                        </h4>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                          {facility.availability}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-ncrst-blue text-white py-2 rounded-lg font-medium hover:bg-ncrst-blue/90 transition-colors">
                    Request Access
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Infrastructure Statistics */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-ncrst-grey mb-6 text-center leading-heading">
              Infrastructure Utilization 2024
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="bg-ncrst-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Building className="text-ncrst-blue" size={24} />
                </div>
                <div className="text-2xl font-bold text-ncrst-grey mb-1">
                  12
                </div>
                <div className="text-sm text-ncrst-grey-dark">
                  Research Facilities
                </div>
              </div>
              <div>
                <div className="bg-ncrst-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BarChart className="text-ncrst-green" size={24} />
                </div>
                <div className="text-2xl font-bold text-ncrst-grey mb-1">
                  85%
                </div>
                <div className="text-sm text-ncrst-grey-dark">
                  Average Utilization
                </div>
              </div>
              <div>
                <div className="bg-ncrst-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Database className="text-ncrst-grey" size={24} />
                </div>
                <div className="text-2xl font-bold text-ncrst-grey mb-1">
                  340
                </div>
                <div className="text-sm text-ncrst-grey-dark">
                  External Users
                </div>
              </div>
              <div>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="text-purple-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-ncrst-grey mb-1">
                  1,250
                </div>
                <div className="text-sm text-ncrst-grey-dark">
                  Research Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Portal */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-ncrst-grey to-ncrst-gold text-white rounded-xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 leading-heading">
                Need More Resources?
              </h3>
              <p className="text-lg mb-6 opacity-90 leading-body">
                Access our comprehensive online portals for additional resources
                and services.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors">
                  <h4 className="font-semibold mb-2">Document Repository</h4>
                  <p className="text-sm opacity-90">
                    Complete archive of all NCRST publications
                  </p>
                </button>
                <button className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors">
                  <h4 className="font-semibold mb-2">Research Database</h4>
                  <p className="text-sm opacity-90">
                    Searchable database of Namibian research
                  </p>
                </button>
                <button className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors">
                  <h4 className="font-semibold mb-2">Equipment Booking</h4>
                  <p className="text-sm opacity-90">
                    Online booking system for lab equipment
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
