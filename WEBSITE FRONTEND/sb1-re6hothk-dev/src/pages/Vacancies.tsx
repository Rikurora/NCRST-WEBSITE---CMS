import React, { useState } from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  Clock,
  GraduationCap,
  Users,
  Mail,
  FileText,
} from "lucide-react";
import pexel13 from "../assets/pexels13.jpg";

const Vacancies: React.FC = () => {
  const [activeTab, setActiveTab] = useState("current");

  const currentVacancies = [
    {
      title: "Senior Research Scientist - Biotechnology",
      department: "Research & Innovation",
      location: "Windhoek",
      type: "Permanent",
      level: "Senior Level",
      closingDate: "March 20, 2025",
      publishDate: "February 15, 2025",
      requirements: [
        "PhD in Biotechnology or related field",
        "5+ years research experience",
        "Publication record in peer-reviewed journals",
      ],
      responsibilities: [
        "Lead biotechnology research projects",
        "Supervise junior researchers",
        "Collaborate with international partners",
      ],
      salary: "N$450,000 - N$550,000 per annum",
    },
    {
      title: "AI Research Coordinator",
      department: "Technology & Innovation",
      location: "Windhoek",
      type: "Contract",
      level: "Mid Level",
      closingDate: "March 15, 2025",
      publishDate: "February 10, 2025",
      requirements: [
        "Masters in Computer Science/AI",
        "3+ years AI/ML experience",
        "Programming skills in Python/R",
      ],
      responsibilities: [
        "Coordinate AI research initiatives",
        "Manage AI group activities",
        "Develop AI strategy",
      ],
      salary: "N$320,000 - N$380,000 per annum",
    },
    {
      title: "Laboratory Technician",
      department: "Biosafety & Laboratory Services",
      location: "Windhoek",
      type: "Permanent",
      level: "Entry Level",
      closingDate: "February 28, 2025",
      publishDate: "February 5, 2025",
      requirements: [
        "Diploma in Laboratory Technology",
        "1-2 years laboratory experience",
        "Knowledge of safety protocols",
      ],
      responsibilities: [
        "Conduct laboratory tests",
        "Maintain equipment",
        "Ensure quality control",
      ],
      salary: "N$180,000 - N$220,000 per annum",
    },
    {
      title: "Communications Officer",
      department: "Corporate Services",
      location: "Windhoek",
      type: "Permanent",
      level: "Mid Level",
      closingDate: "March 25, 2025",
      publishDate: "February 20, 2025",
      requirements: [
        "Degree in Communications/Journalism",
        "3+ years communications experience",
        "Digital marketing skills",
      ],
      responsibilities: [
        "Manage public communications",
        "Develop content strategy",
        "Handle media relations",
      ],
      salary: "N$280,000 - N$340,000 per annum",
    },
  ];

  const internshipPrograms = [
    {
      title: "Research Internship Programme",
      duration: "6-12 months",
      intake: "Twice yearly (March & September)",
      eligibility: "Final year undergraduate or recent graduates",
      departments: ["Research & Innovation", "Biotechnology", "Technology"],
      stipend: "N$3,500 per month",
      benefits: [
        "Mentorship",
        "Training workshops",
        "Research experience",
        "Networking opportunities",
      ],
    },
    {
      title: "Graduate Development Programme",
      duration: "24 months",
      intake: "Annual (January)",
      eligibility: "Recent graduates with Honours degree or higher",
      departments: ["All departments"],
      stipend: "N$8,500 per month",
      benefits: [
        "Structured training",
        "Rotation opportunities",
        "Career development",
        "Potential permanent placement",
      ],
    },
    {
      title: "STEM Student Attachment",
      duration: "3-6 months",
      intake: "Continuous",
      eligibility: "Current STEM students (final 2 years)",
      departments: ["Science & Technology", "Laboratory Services"],
      stipend: "N$2,500 per month",
      benefits: [
        "Practical experience",
        "Academic credit",
        "Industry exposure",
        "Skills development",
      ],
    },
  ];

  const applicationRequirements = [
    {
      category: "Required Documents",
      items: [
        "Completed application form",
        "Detailed curriculum vitae",
        "Certified copies of qualifications",
        "Three professional references",
        "Cover letter (max 2 pages)",
        "Valid identity document",
      ],
    },
    {
      category: "Application Process",
      items: [
        "Submit applications via email or online portal",
        "Applications must be received before closing date",
        "Only shortlisted candidates will be contacted",
        "Interviews conducted within 2 weeks of closing",
        "Reference checks for successful candidates",
        "Medical examination may be required",
      ],
    },
  ];

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
              Career Opportunities
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-body opacity-90 text-white">
              Join NCRST and contribute to advancing Namibia's research,
              science, technology, and innovation capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { id: "current", label: "Current Opportunities" },
              { id: "internships", label: "Internship Programmes" },
              { id: "apply", label: "How to Apply" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-ncrst-blue text-white"
                    : "bg-gray-100 text-ncrst-grey hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      {activeTab === "current" && (
        <section id="current" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
                Current Job Opportunities
              </h2>
              <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
                Explore exciting career opportunities to advance your
                professional journey with NCRST.
              </p>
            </div>

            <div className="space-y-6">
              {currentVacancies.map((vacancy, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-ncrst-grey hover:shadow-lg transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
                    <div className="lg:col-span-3 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-ncrst-grey mb-2 leading-heading">
                            {vacancy.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-ncrst-grey-dark">
                            <div className="flex items-center space-x-1">
                              <Briefcase size={14} />
                              <span>{vacancy.department}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin size={14} />
                              <span>{vacancy.location}</span>
                            </div>
                            <span className="bg-ncrst-green/10 text-ncrst-green px-2 py-1 rounded">
                              {vacancy.type}
                            </span>
                            <span className="bg-ncrst-blue/10 text-ncrst-blue px-2 py-1 rounded">
                              {vacancy.level}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div>
                          <h4 className="font-semibold text-ncrst-grey mb-2">
                            Key Requirements
                          </h4>
                          <ul className="text-sm text-ncrst-grey-dark space-y-1">
                            {vacancy.requirements.map((req, idx) => (
                              <li key={idx}>• {req}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-ncrst-grey mb-2">
                            Main Responsibilities
                          </h4>
                          <ul className="text-sm text-ncrst-grey-dark space-y-1">
                            {vacancy.responsibilities.map((resp, idx) => (
                              <li key={idx}>• {resp}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} className="text-ncrst-blue" />
                          <span className="text-ncrst-grey-dark">
                            Published: {vacancy.publishDate}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={16} className="text-red-600" />
                          <span className="text-ncrst-grey-dark">
                            Closes: <strong>{vacancy.closingDate}</strong>
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-ncrst-grey-dark">
                            Salary: <strong>{vacancy.salary}</strong>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-ncrst-grey-light p-6">
                      <h4 className="font-semibold text-ncrst-grey mb-3">
                        Apply Now
                      </h4>
                      <div className="space-y-3">
                        <button className="w-full bg-white border border-gray-300 p-2 rounded text-sm hover:bg-gray-50 transition-colors flex items-center space-x-2">
                          <FileText size={14} />
                          <span>Download Job Description</span>
                        </button>
                        <button className="w-full bg-white border border-gray-300 p-2 rounded text-sm hover:bg-gray-50 transition-colors flex items-center space-x-2">
                          <FileText size={14} />
                          <span>Application Form</span>
                        </button>
                      </div>
                      <button className="w-full mt-4 bg-ncrst-blue text-white py-2 rounded-lg font-medium hover:bg-ncrst-gold/90 transition-colors">
                        Apply Online
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Vacancies Message */}
            {currentVacancies.length === 0 && (
              <div className="text-center py-12">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="text-gray-400" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-ncrst-grey mb-2">
                  No Current Vacancies
                </h3>
                <p className="text-ncrst-grey-dark">
                  Check back regularly for new opportunities or consider our
                  internship programs.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Internship Programmes */}
      {activeTab === "internships" && (
        <section id="internships" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
                Internship Programmes
              </h2>
              <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
                Gain valuable experience and kickstart your career in research,
                science, and technology.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {internshipPrograms.map((program, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-ncrst-grey hover:shadow-lg transition-all"
                >
                  <div className="bg-ncrst-grey p-6 text-white">
                    <div className="flex items-center space-x-3 mb-3">
                      <GraduationCap size={32} />
                      <h3 className="text-xl font-bold leading-heading">
                        {program.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-ncrst-grey">
                            Duration:
                          </span>
                          <p className="text-ncrst-grey-dark">
                            {program.duration}
                          </p>
                        </div>
                        <div>
                          <span className="font-medium text-ncrst-grey">
                            Intake:
                          </span>
                          <p className="text-ncrst-grey-dark">
                            {program.intake}
                          </p>
                        </div>
                      </div>

                      <div>
                        <span className="font-medium text-ncrst-grey">
                          Eligibility:
                        </span>
                        <p className="text-sm text-ncrst-grey-dark">
                          {program.eligibility}
                        </p>
                      </div>

                      <div>
                        <span className="font-medium text-ncrst-grey">
                          Departments:
                        </span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {program.departments.map((dept, idx) => (
                            <span
                              key={idx}
                              className="bg-ncrst-green/10 text-ncrst-green px-2 py-1 rounded text-xs"
                            >
                              {dept}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="font-medium text-ncrst-grey">
                          Stipend:
                        </span>
                        <p className="text-sm text-ncrst-grey-dark font-medium">
                          {program.stipend}
                        </p>
                      </div>

                      <div>
                        <span className="font-medium text-ncrst-grey">
                          Benefits:
                        </span>
                        <ul className="text-sm text-ncrst-grey-dark space-y-1 mt-1">
                          {program.benefits.map((benefit, idx) => (
                            <li key={idx}>• {benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button className="w-full mt-6 bg-ncrst-blue  text-white py-2 rounded-lg font-medium hover:bg-ncrst-green/90 transition-colors">
                      Apply for Programme
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Internship Benefits */}
            <div className="mt-12 bg-ncrst-grey-light rounded-xl p-8">
              <h3 className="text-xl font-bold text-ncrst-grey mb-6 text-center leading-heading">
                Why Intern at NCRST?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-ncrst-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="text-ncrst-green" size={24} />
                  </div>
                  <h4 className="font-bold text-ncrst-grey mb-2">
                    Expert Mentorship
                  </h4>
                  <p className="text-sm text-ncrst-grey-dark">
                    Learn from leading researchers and professionals
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-ncrst-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <GraduationCap className="text-ncrst-blue" size={24} />
                  </div>
                  <h4 className="font-bold text-ncrst-grey mb-2">
                    Skill Development
                  </h4>
                  <p className="text-sm text-ncrst-grey-dark">
                    Gain practical skills and industry experience
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-ncrst-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Briefcase className="text-ncrst-grey" size={24} />
                  </div>
                  <h4 className="font-bold text-ncrst-grey mb-2">
                    Career Opportunities
                  </h4>
                  <p className="text-sm text-ncrst-grey-dark">
                    Potential for permanent employment
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="text-purple-600" size={24} />
                  </div>
                  <h4 className="font-bold text-ncrst-grey mb-2">
                    Professional Network
                  </h4>
                  <p className="text-sm text-ncrst-grey-dark">
                    Build connections in the research community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How to Apply */}
      {activeTab === "apply" && (
        <section id="apply" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
                How to Apply
              </h2>
              <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
                Follow these steps to submit your application for NCRST
                positions and programs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {applicationRequirements.map((section, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-xl p-8"
                >
                  <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
                    {section.category}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-ncrst-grey-dark">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Application Timeline */}
            <div className="bg-ncrst-grey text-white rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center leading-heading">
                Application Timeline
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Application Submission</h4>
                  <p className="text-sm opacity-90">
                    Submit before closing date
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Initial Screening</h4>
                  <p className="text-sm opacity-90">1-2 weeks after closing</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Shortlisting</h4>
                  <p className="text-sm opacity-90">
                    Qualified candidates notified
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">4</span>
                  </div>
                  <h4 className="font-semibold mb-2">Interviews</h4>
                  <p className="text-sm opacity-90">Face-to-face or virtual</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">5</span>
                  </div>
                  <h4 className="font-semibold mb-2">Final Decision</h4>
                  <p className="text-sm opacity-90">
                    Successful candidates notified
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-ncrst-grey-light rounded-xl p-8">
              <h3 className="text-xl font-bold text-ncrst-grey mb-6 text-center leading-heading">
                Human Resources Contact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Mail className="text-ncrst-green" size={24} />
                  </div>
                  <h4 className="font-bold text-ncrst-grey mb-2">
                    Email Applications
                  </h4>
                  <p className="text-sm text-ncrst-grey-dark">
                    careers@ncrst.na
                  </p>
                  <p className="text-sm text-ncrst-grey-dark">hr@ncrst.na</p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Briefcase className="text-ncrst-blue" size={24} />
                  </div>
                  <h4 className="font-bold text-ncrst-grey mb-2">
                    HR Department
                  </h4>
                  <p className="text-sm text-ncrst-grey-dark">
                    +264 61 431 7060
                  </p>
                  <p className="text-sm text-ncrst-grey-dark">
                    Monday - Friday: 8:00 - 17:00
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="text-ncrst-gold" size={24} />
                  </div>
                  <h4 className="font-bold text-ncrst-grey mb-2">
                    Physical Address
                  </h4>
                  <p className="text-sm text-ncrst-grey-dark">NCRST Building</p>
                  <p className="text-sm text-ncrst-grey-dark">
                    Windhoek, Namibia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Vacancies;
