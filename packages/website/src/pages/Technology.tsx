import React from "react";
import {
  Brain,
  Microscope,
  Database,
  Cpu,
  Download,
  Users,
  BarChart,
  FileText,
  Shield,
  Rocket,
} from "lucide-react";
import pexel7 from "../assets/pexels7.jpg";

const Technology: React.FC = () => {
  const aiInitiatives = [
    {
      title: "AI Research & Development",
      description:
        "Collaborative research projects focusing on machine learning applications for Namibian challenges",
      participants: "40+ researchers",
      projects: "1 active projects",
    },
    {
      title: "AI Education & Training",
      description:
        "Capacity building programs for students, researchers, and industry professionals",
      participants: "200+ trainees",
      projects: "6 training modules",
    },
    {
      title: "AI for Development",
      description:
        "Applying AI solutions to agriculture, healthcare, and environmental monitoring",
      participants: "0 partner organizations",
      projects: "1 pilot projects",
    },
  ];

  const biotechLabs = [
    {
      name: "Molecular Biology Laboratory",
      location: "",
      services: ["DNA Analysis", "PCR Testing", "Genetic Sequencing"],
      equipment: "State-of-the-art molecular analysis equipment",
      certification: "ISO 17025 Accredited",
    },
    {
      name: "Biosafety Testing Facility",
      location: "",
      services: ["GMO Detection", "Risk Assessment", "Environmental Testing"],
      equipment: "Advanced biosafety containment systems",
      certification: "International Standards Compliant",
    },
    {
      name: "Microbiology Laboratory",
      location: "",
      services: [
        "Pathogen Detection",
        "Food Safety Testing",
        "Water Quality Analysis",
      ],
      equipment: "Modern microbiological analysis tools",
      certification: "WHO Guidelines Compliant",
    },
  ];

  const techResources = [
    {
      title: "AI Implementation Guide for SMEs",
      description: "Practical guide for small businesses to adopt AI solutions",
      type: "PDF Guide",
      size: "3.2 MB",
      downloads: "1,240",
    },
    {
      title: "Biotechnology Investment Opportunities",
      description:
        "Market analysis and investment landscape in Namibian biotech",
      type: "Report",
      size: "5.8 MB",
      downloads: "890",
    },
    {
      title: "Digital Transformation Roadmap",
      description:
        "Strategic framework for digital adoption in various sectors",
      type: "Whitepaper",
      size: "2.1 MB",
      downloads: "2,150",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section
        className="relative min-h-[75vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${pexel7})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-10 leading-heading text-white">
              Technology & Innovation
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-body opacity-90 text-white">
              Advancing Namibia's technological capabilities through
              cutting-edge research, world-class laboratories, and strategic
              innovation initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* National AI Working Group Section */}
      <section id="ai" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              National AI Working Group
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Leading artificial intelligence research and development
              initiatives to transform key sectors of the Namibian economy.
            </p>
          </div>

          {/* AI Group Overview */}
          <div className="bg-ncrst-grey-light text-ncrst-grey rounded-xl p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 leading-heading">
                  Join the AI Revolution
                </h3>
                <p className="text-lg mb-6 opacity-90 leading-body">
                  The National AI Working Group brings together researchers,
                  industry experts, and innovators to harness the power of
                  artificial intelligence for national development.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-ncrst-gold">
                      40+
                    </div>
                    <div className="text-sm opacity-90">Members</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-ncrst-gold">1</div>
                    <div className="text-sm opacity-90">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-ncrst-gold">8</div>
                    <div className="text-sm opacity-90">Affilaitions</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-ncrst-grey/10 p-8 rounded-xl">
                  <Brain className="text-ncrst-gold mx-auto mb-4" size={64} />
                  <h4 className="text-xl font-bold mb-2 leading-heading">
                    Become a Member
                  </h4>
                  <p className="text-sm opacity-90 mb-4">
                    Join Namibia's premier AI community
                  </p>
                  <a
                    href="/contact"
                    className="bg-ncrst-gold text-ncrst-grey px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-block"
                  >
                    Join AI Working Group
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* AI Initiatives */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {aiInitiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-ncrst-blue hover:shadow-lg transition-all"
              >
                <div className="bg-ncrst-blue/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="text-ncrst-blue" size={24} />
                </div>
                <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                  {initiative.title}
                </h3>
                <p className="text-ncrst-grey-dark mb-4 leading-body">
                  {initiative.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-ncrst-grey-dark">Participants:</span>
                    <span className="font-medium text-ncrst-grey">
                      {initiative.participants}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ncrst-grey-dark">Active:</span>
                    <span className="font-medium text-ncrst-grey">
                      {initiative.projects}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* AI Reports & Resources */}
          <div className="bg-ncrst-grey-light rounded-xl p-8">
            <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
              AI Research & Reports
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="text-ncrst-blue" size={24} />
                  <h4 className="font-semibold text-ncrst-grey">
                    National AI Strategy 2024
                  </h4>
                </div>
                <p className="text-sm text-ncrst-grey-dark mb-4 leading-body">
                  Comprehensive roadmap for AI development and adoption across
                  Namibian sectors.
                </p>
                <button className="flex items-center space-x-2 text-ncrst-blue hover:text-ncrst-green transition-colors">
                  <Download size={16} />
                  <span className="text-sm font-medium">Download Report</span>
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <BarChart className="text-ncrst-green" size={24} />
                  <h4 className="font-semibold text-ncrst-grey">
                    AI Impact Assessment
                  </h4>
                </div>
                <p className="text-sm text-ncrst-grey-dark mb-4 leading-body">
                  Analysis of AI implementation outcomes in agriculture and
                  healthcare sectors.
                </p>
                <button className="flex items-center space-x-2 text-ncrst-blue hover:text-ncrst-green transition-colors">
                  <Download size={16} />
                  <span className="text-sm font-medium">Download Report</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biotechnology Labs */}
      <section id="biotech" className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Biotechnology Laboratories
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              State-of-the-art laboratory facilities providing specialized
              services for research, industry, and regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {biotechLabs.map((lab, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="bg-ncrst-blue p-6 text-white">
                  <div className="flex items-center space-x-3 mb-3">
                    <Microscope size={32} />
                    <h3 className="text-lg font-bold leading-heading">
                      {lab.name}
                    </h3>
                  </div>
                  <p className="text-sm opacity-90">{lab.location}</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-2">
                        Services Offered
                      </h4>
                      <ul className="text-sm text-ncrst-grey-dark space-y-1">
                        {lab.services.map((service, idx) => (
                          <li key={idx}>• {service}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-2">
                        Equipment
                      </h4>
                      <p className="text-sm text-ncrst-grey-dark">
                        {lab.equipment}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-2">
                        Certification
                      </h4>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                        {lab.certification}
                      </span>
                    </div>
                  </div>
                  <a
                    href="/contact"
                    className="w-full mt-6 bg-ncrst-blue text-white py-2 rounded-lg font-medium hover:bg-ncrst-gold/90 transition-colors block text-center"
                  >
                    Request Services
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Lab Services Overview */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-ncrst-grey mb-6 text-center leading-heading">
              Laboratory Services & Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Database className="text-blue-600" size={24} />
                </div>
                <h4 className="font-semibold text-ncrst-grey mb-2">
                  Genetic Analysis
                </h4>
                <p className="text-sm text-ncrst-grey-dark">
                  DNA sequencing and genetic profiling services
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Microscope className="text-green-600" size={24} />
                </div>
                <h4 className="font-semibold text-ncrst-grey mb-2">
                  Biosafety Testing
                </h4>
                <p className="text-sm text-ncrst-grey-dark">
                  GMO detection and environmental risk assessment
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Cpu className="text-purple-600" size={24} />
                </div>
                <h4 className="font-semibold text-ncrst-grey mb-2">
                  Food Safety
                </h4>
                <p className="text-sm text-ncrst-grey-dark">
                  Contamination testing and quality assurance
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="text-orange-600" size={24} />
                </div>
                <h4 className="font-semibold text-ncrst-grey mb-2">Training</h4>
                <p className="text-sm text-ncrst-grey-dark">
                  Laboratory techniques and biosafety protocols
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biosafety Section */}
      <section id="biosafety" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Biosafety
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Ensuring the safe development, handling, and use of genetically
              modified organisms to protect human health and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-ncrst-grey to-ncrst-gold text-white rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Shield size={32} />
                <h3 className="text-2xl font-bold leading-heading">
                  Biosafety Regulation
                </h3>
              </div>
              <div className="space-y-4">
                <p className="opacity-90 leading-body">
                  NCRST regulates biotechnology activities through comprehensive
                  biosafety assessment and monitoring programs.
                </p>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• GMO permit applications and approvals</li>
                  <li>• Environmental risk assessments</li>
                  <li>• Post-market monitoring and surveillance</li>
                  <li>• Public participation and transparency</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
                Biosafety Services
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey">
                      Permit Applications
                    </h4>
                    <p className="text-sm text-ncrst-grey-dark">
                      Guidance and processing of biosafety permits
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey">
                      Risk Assessment
                    </h4>
                    <p className="text-sm text-ncrst-grey-dark">
                      Scientific evaluation of potential risks
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey">
                      Compliance Monitoring
                    </h4>
                    <p className="text-sm text-ncrst-grey-dark">
                      Ensuring adherence to biosafety regulations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Space Science and Technology */}
      <section id="sst" className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Space Science and Technology (SST)
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Advancing Namibia's space science capabilities and leveraging
              space technology for national development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-ncrst-grey to-ncrst-gold text-white rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Rocket size={32} />
                <h3 className="text-2xl font-bold leading-heading">
                  Space Initiatives
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">NamibSat Programme</h4>
                  <p className="text-sm opacity-90">
                    Development of Namibia's first satellite for earth
                    observation
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Dark Sky Initiative</h4>
                  <p className="text-sm opacity-90">
                    Protecting exceptional night skies for astronomical research
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    Space Weather Monitoring
                  </h4>
                  <p className="text-sm opacity-90">
                    Real-time monitoring of space weather effects
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
                Space Science Applications
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey">
                      Earth Observation
                    </h4>
                    <p className="text-sm text-ncrst-grey-dark">
                      Satellite monitoring for agriculture and environment
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey">
                      Communications
                    </h4>
                    <p className="text-sm text-ncrst-grey-dark">
                      Satellite communication services for remote areas
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey">
                      Navigation
                    </h4>
                    <p className="text-sm text-ncrst-grey-dark">
                      GPS and positioning services enhancement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Resources */}
      <section id="resources" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Technology Resources
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Access comprehensive guides, reports, and resources to support
              technology adoption and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {techResources.map((resource, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-ncrst-blue hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <FileText className="text-ncrst-blue" size={24} />
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                  {resource.title}
                </h3>
                <p className="text-sm text-ncrst-grey-dark mb-4 leading-body">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between text-xs text-ncrst-grey-dark mb-4">
                  <span>Size: {resource.size}</span>
                  <span>{resource.downloads} downloads</span>
                </div>
                <button className="w-full bg-ncrst-blue text-white py-2 rounded-lg font-medium hover:bg-ncrst-blue/90 transition-colors flex items-center justify-center space-x-2">
                  <Download size={16} />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>

          {/* Technology Partnerships */}
          <div className="bg-ncrst-blue text-white rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 leading-heading">
                Technology Partnerships
              </h3>
              <p className="text-lg opacity-90 max-w-3xl mx-auto leading-body">
                Collaborating with leading institutions and organizations to
                advance Namibia's technological capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-lg mb-3">
                  <h4 className="font-bold text-ncrst-gold">Universities</h4>
                </div>
                <p className="text-sm opacity-90">
                  Research collaboration with local and international
                  universities
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-lg mb-3">
                  <h4 className="font-bold text-ncrst-gold">Industry</h4>
                </div>
                <p className="text-sm opacity-90">
                  Technology transfer and commercialization partnerships
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-lg mb-3">
                  <h4 className="font-bold text-ncrst-gold">Government</h4>
                </div>
                <p className="text-sm opacity-90">
                  Policy development and digital transformation initiatives
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-lg mb-3">
                  <h4 className="font-bold text-ncrst-gold">International</h4>
                </div>
                <p className="text-sm opacity-90">
                  Global technology networks and knowledge exchange
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
