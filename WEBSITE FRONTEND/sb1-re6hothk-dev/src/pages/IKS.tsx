import React from "react";
import {
  BookOpen,
  Users,
  Star,
  Globe,
  Target,
  Award,
  Calendar,
  FileText,
} from "lucide-react";

const IKS: React.FC = () => {
  const councilMembers = [
    {
      name: "Dr Fillemon Nangolo",
      role: "Chairperson",
      expertise: "",
      community: "",
    },
    {
      name: "Dr. Michael Shirungu",
      role: "Council Member",
    },
    {
      name: "Ms. Munolwisho Ipangelua",
      role: "Council Member",
    },
    {
      name: "Dr Michael Akuupa",
      role: "Council Member",
    },
    {
      name: "Prof. Dr Nailoke Kadhila",
      role: "Council Member",
    },
    {
      name: "Ms Nzila Mubusisi",
      role: "Council Member",
    },
    {
      name: "Mr Onesmus Joseph",
      role: "Council Member",
    },
    {
      name: "Mr Henry Ndengejeho",
      role: "Council Member",
    },
  ];

  const knowledgeAreas = [
    {
      title: "Traditional Medicine",
      description:
        "Documentation and preservation of indigenous healing practices and medicinal plants",
      icon: Star,
      color: "bg-ncrst-green",
      examples: [
        "Medicinal plant identification",
        "Traditional healing methods",
        "Herbal preparations",
      ],
    },
    {
      title: "Agricultural Practices",
      description:
        "Traditional farming methods and crop varieties adapted to local conditions",
      icon: Target,
      color: "bg-ncrst-blue",
      examples: [
        "Drought-resistant crops",
        "Soil conservation",
        "Seasonal farming calendars",
      ],
    },
    {
      title: "Environmental Knowledge",
      description:
        "Traditional ecological knowledge and sustainable resource management",
      icon: Globe,
      color: "bg-ncrst-gold",
      examples: [
        "Weather prediction",
        "Wildlife conservation",
        "Water management",
      ],
    },
    {
      title: "Cultural Heritage",
      description:
        "Preservation of languages, oral traditions, and cultural practices",
      icon: BookOpen,
      color: "bg-ncrst-grey",
      examples: ["Oral histories", "Traditional crafts", "Cultural ceremonies"],
    },
  ];

  const initiatives = [
    {
      title: "Traditional Medicine Documentation Project",
      description:
        "Comprehensive documentation of traditional healing practices across Namibian communities",
      status: "Active",
      timeline: "2023-2026",
      communities: "12 traditional authorities",
      outcomes: [
        "500+ medicinal plants documented",
        "50+ traditional healers interviewed",
        "Digital archive created",
      ],
    },
    {
      title: "Indigenous Language Preservation",
      description:
        "Digital preservation of indigenous languages and oral traditions",
      status: "Active",
      timeline: "2024-2027",
      communities: "8 language groups",
      outcomes: [
        "Audio recordings",
        "Written documentation",
        "Educational materials",
      ],
    },
    {
      title: "Traditional Agriculture Research",
      description:
        "Study of traditional farming practices and their integration with modern agriculture",
      status: "Planning",
      timeline: "2025-2028",
      communities: "15 farming communities",
      outcomes: [
        "Best practices guide",
        "Seed bank establishment",
        "Training programs",
      ],
    },
  ];

  const resources = [
    {
      title: "Traditional Knowledge Database",
      description: "Searchable database of documented indigenous knowledge",
      type: "Online Portal",
      access: "Restricted Access",
    },
    {
      title: "IKS Research Guidelines",
      description: "Ethical guidelines for indigenous knowledge research",
      type: "PDF Document",
      access: "Public Access",
    },
    {
      title: "Community Protocols Handbook",
      description: "Guide for establishing community research protocols",
      type: "PDF Document",
      access: "Public Access",
    },
    {
      title: "Traditional Medicine Compendium",
      description: "Comprehensive guide to traditional medicinal practices",
      type: "Publication",
      access: "Restricted Access",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-gradient-to-r from-ncrst-grey to-ncrst-gold text-white py-32 min-h-[80vh] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-heading">
              National Indigenous Knowledge System (IKS)
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-body opacity-90">
              Promoting, preserving, and integrating traditional knowledge
              systems with modern science for sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* IKS Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-ncrst-grey mb-6 leading-heading">
                Our Mission
              </h2>
              <div className="space-y-4 text-ncrst-grey-dark leading-body">
                <p>
                  The NIKSC performs its functions as per Section 19 (1) of the
                  Research, Science and Technology Act, 2004 (Act 23 of 2004).
                </p>
                <p>
                  The NIKSC serves as an advisory body to the NCRST to
                  facilitate the development and implementation of a national
                  agenda on Indigenous Knowledge System (IKS) in all sectors.
                </p>
                <p>
                  The Council further provides strategic direction and guidance
                  on policy issues and other matters related to IKS, e.g.,
                  ethics in IKS research.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-ncrst-green/10 to-ncrst-gold/10 p-8 rounded-xl">
              <div className="text-center mb-6">
                <BookOpen className="text-ncrst-green mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-ncrst-grey leading-heading">
                  Key Objectives
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    Document and preserve traditional knowledge
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    Protect intellectual property rights of communities
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    Promote integration with modern science
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    Support sustainable development practices
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    Facilitate intergenerational knowledge transfer
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Council Members */}
      <section className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              IKS Council Members
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Traditional leaders, knowledge holders, and researchers working
              together to preserve and promote indigenous knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {councilMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-ncrst-green/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Users className="text-ncrst-green" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-ncrst-grey leading-heading">
                      {member.name}
                    </h3>
                    <p className="text-sm text-ncrst-green font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-ncrst-grey">
                      Expertise:{" "}
                    </span>
                    <span className="text-ncrst-grey-dark">
                      {member.expertise}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-ncrst-grey">
                      Community:{" "}
                    </span>
                    <span className="text-ncrst-grey-dark">
                      {member.community}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Knowledge Areas
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Key areas of traditional knowledge that we document, preserve, and
              promote.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {knowledgeAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`${area.color} p-6 text-white`}>
                    <IconComponent size={32} className="mb-3" />
                    <h3 className="text-lg font-bold leading-heading">
                      {area.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-ncrst-grey-dark text-sm mb-4 leading-body">
                      {area.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-2 text-sm">
                        Examples:
                      </h4>
                      <ul className="text-xs text-ncrst-grey-dark space-y-1">
                        {area.examples.map((example, idx) => (
                          <li key={idx}>• {example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Initiatives */}
      <section className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Current Initiatives
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Active projects documenting and preserving traditional knowledge
              across Namibian communities.
            </p>
          </div>

          <div className="space-y-8">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="bg-gradient-to-r from-ncrst-grey to-ncrst-gold text-white p-8">
                    <h3 className="text-2xl font-bold mb-4 leading-heading">
                      {initiative.title}
                    </h3>
                    <p className="opacity-90 leading-body">
                      {initiative.description}
                    </p>
                    <div className="mt-6">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          initiative.status === "Active"
                            ? "bg-green-500/20 text-green-100"
                            : initiative.status === "Planning"
                            ? "bg-yellow-500/20 text-yellow-100"
                            : "bg-blue-500/20 text-blue-100"
                        }`}
                      >
                        {initiative.status}
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-ncrst-grey mb-3">
                          Project Details
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="font-medium text-ncrst-grey">
                              Timeline:{" "}
                            </span>
                            <span className="text-ncrst-grey-dark">
                              {initiative.timeline}
                            </span>
                          </div>
                          <div>
                            <span className="font-medium text-ncrst-grey">
                              Communities:{" "}
                            </span>
                            <span className="text-ncrst-grey-dark">
                              {initiative.communities}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-ncrst-grey mb-3">
                          Expected Outcomes
                        </h4>
                        <ul className="space-y-1">
                          {initiative.outcomes.map((outcome, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2"
                            >
                              <Award
                                className="text-ncrst-green flex-shrink-0 mt-0.5"
                                size={14}
                              />
                              <span className="text-sm text-ncrst-grey-dark">
                                {outcome}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Documentation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Resources & Documentation
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Access to traditional knowledge resources and research materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-ncrst-green hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <FileText className="text-ncrst-green" size={24} />
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      resource.access === "Public Access"
                        ? "bg-green-100 text-green-800"
                        : "bg-orange-100 text-orange-800"
                    }`}
                  >
                    {resource.access}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                  {resource.title}
                </h3>
                <p className="text-sm text-ncrst-grey-dark mb-4 leading-body">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-ncrst-grey-dark">
                    {resource.type}
                  </span>
                  <button className="text-ncrst-green hover:text-ncrst-gold transition-colors text-sm font-medium">
                    Access Resource →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Research Ethics */}
          <div className="bg-ncrst-grey text-white rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 leading-heading">
                Research Ethics & Community Protocols
              </h3>
              <p className="text-lg opacity-90 max-w-3xl mx-auto leading-body">
                Ensuring respectful and ethical research practices that honor
                traditional knowledge holders and communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-lg mb-3">
                  <h4 className="font-bold text-ncrst-gold">
                    Free, Prior & Informed Consent
                  </h4>
                </div>
                <p className="text-sm opacity-90">
                  Community consent before any research activities
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-lg mb-3">
                  <h4 className="font-bold text-ncrst-gold">Benefit Sharing</h4>
                </div>
                <p className="text-sm opacity-90">
                  Equitable sharing of research benefits with communities
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-lg mb-3">
                  <h4 className="font-bold text-ncrst-gold">
                    Cultural Protocols
                  </h4>
                </div>
                <p className="text-sm opacity-90">
                  Respect for traditional customs and practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Collaboration */}
      <section className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
                Collaborate with IKS
              </h3>
              <div className="space-y-4">
                <p className="text-ncrst-grey-dark leading-body">
                  Partner with us to document, preserve, and promote traditional
                  knowledge while respecting community rights and protocols.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="text-ncrst-green" size={20} />
                    <span className="text-ncrst-grey">
                      Research Collaboration Opportunities
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="text-ncrst-green" size={20} />
                    <span className="text-ncrst-grey">
                      Community Engagement Programs
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="text-ncrst-green" size={20} />
                    <span className="text-ncrst-grey">
                      International Knowledge Exchange
                    </span>
                  </div>
                </div>
                <button className="bg-ncrst-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-ncrst-green/90 transition-colors">
                  Contact IKS Council
                </button>
              </div>
            </div>

            <div className="bg-ncrst-gold/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
                Upcoming Events
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="text-ncrst-green" size={16} />
                    <span className="text-sm font-medium text-ncrst-grey">
                      March 21, 2025
                    </span>
                  </div>
                  <h4 className="font-semibold text-ncrst-grey mb-2">
                    Traditional Knowledge Symposium
                  </h4>
                  <p className="text-sm text-ncrst-grey-dark">
                    Annual gathering of traditional knowledge holders and
                    researchers
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="text-ncrst-green" size={16} />
                    <span className="text-sm font-medium text-ncrst-grey">
                      April 15-17, 2025
                    </span>
                  </div>
                  <h4 className="font-semibold text-ncrst-grey mb-2">
                    Community Documentation Workshop
                  </h4>
                  <p className="text-sm text-ncrst-grey-dark">
                    Training workshop for community-based documentation
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="text-ncrst-green" size={16} />
                    <span className="text-sm font-medium text-ncrst-grey">
                      May 20-22, 2025
                    </span>
                  </div>
                  <h4 className="font-semibold text-ncrst-grey mb-2">
                    Traditional Medicine Conference
                  </h4>
                  <p className="text-sm text-ncrst-grey-dark">
                    Conference on traditional healing practices and modern
                    medicine
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default IKS;
