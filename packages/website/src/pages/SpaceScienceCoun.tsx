import React from "react";
import {
  Rocket,
  Satellite,
  Globe,
  Star,
  Calendar,
  Users,
  Target,
  BookOpen,
} from "lucide-react";

const SpaceScienceCoun: React.FC = () => {
  const councilMembers = [
    {
      name: "Dr. Marius Mutorwa",
      role: "Chairperson",
      expertise: "",
      institution: "",
    },
    {
      name: "Dr Riaan Steenkamp",
      role: "Member",
    },
    {
      name: "Dr Eliakim Hamunyela",
      role: "Member",
    },
    {
      name: "Mr Laban Hiwilepo",
      role: "Member",
    },
    {
      name: "Miss Loide Anbelina Shaparara",
      role: "Member",
    },
    {
      name: "Mr Peter Ndemuweda",
      role: "Member",
    },
    {
      name: "Ms. Victoria Munenge",
      role: "Member",
    },
  ];

  const programmes = [
    {
      title: "NamibSat Programme",
      description:
        "Development of Namibia's first satellite for earth observation and communications",
      status: "In Development",
      timeline: "2025-2027",
      partners: ["UNAM", "NUST", "International Partners"],
      objectives: [
        "Earth observation capabilities",
        "Communication services",
        "Technology transfer",
      ],
    },
    {
      title: "Dark Sky Initiative",
      description:
        "Protecting Namibia's exceptional night skies for astronomical research",
      status: "Active",
      timeline: "Ongoing",
      partners: [
        "Tourism Board",
        "Local Communities",
        "International Observatories",
      ],
      objectives: [
        "Light pollution reduction",
        "Astro-tourism development",
        "Research facilitation",
      ],
    },
    {
      title: "Space Weather Monitoring",
      description:
        "Monitoring space weather effects on technology and communications",
      status: "Operational",
      timeline: "2020-2030",
      partners: ["SANSA", "International Space Weather Consortium"],
      objectives: [
        "Real-time monitoring",
        "Early warning systems",
        "Research collaboration",
      ],
    },
  ];

  const strategicObjectives = [
    {
      title: "Satellite Technology Development",
      description:
        "Building indigenous satellite capabilities for national development",
      icon: Satellite,
      color: "bg-ncrst-blue",
    },
    {
      title: "Space Science Research",
      description:
        "Advancing fundamental research in astronomy and space physics",
      icon: Star,
      color: "bg-ncrst-green",
    },
    {
      title: "International Collaboration",
      description:
        "Strengthening partnerships with global space agencies and institutions",
      icon: Globe,
      color: "bg-ncrst-gold",
    },
    {
      title: "Capacity Building",
      description: "Developing human resources in space science and technology",
      icon: Users,
      color: "bg-ncrst-grey",
    },
  ];

  const upcomingActivities = [
    {
      title: "World Space Week 2025",
      date: "October 4-10, 2025",
      type: "Public Outreach",
      description:
        "National celebration of space science with public events and school programs",
    },
    {
      title: "NamibSat Design Review",
      date: "March 20, 2025",
      type: "Technical Meeting",
      description:
        "Critical design review for Namibia's first satellite mission",
    },
    {
      title: "Southern African Space Science Conference",
      date: "June 15-18, 2025",
      type: "Conference",
      description:
        "Regional conference on space science and technology developments",
    },
    {
      title: "Dark Sky Reserve Assessment",
      date: "May 5-10, 2025",
      type: "Site Visit",
      description:
        "International assessment for Dark Sky Reserve certification",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-gradient-to-r from-ncrst-grey to-ncrst-gold text-white py-32 min-h-[80vh] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-heading">
              National Space Science Council
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-body opacity-90">
              Advancing Namibia's space science capabilities and leveraging
              space technology for national development and scientific
              excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Council Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-ncrst-grey mb-6 leading-heading">
                Our Mission
              </h2>
              <div className="space-y-4 text-ncrst-grey-dark leading-body">
                <p>
                  The NSSC performs its functions as per Section 19 (1) of the
                  Research, Science and Technology Act, 2004 (Act 23 of 2004).
                </p>
                <p>
                  The NSSC serves as an advisory body to the NCRST to safeguard
                  the development and implementation of a national agenda on
                  space science and technologies in all sectors.
                </p>
                <p>
                  The NSSC further provide strategic direction and guidance on
                  policy issues pertaining to space science and technology.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-xl">
              <div className="text-center mb-6">
                <Rocket className="text-purple-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-ncrst-grey leading-heading">
                  Key Focus Areas
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    Satellite technology development and deployment
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    Astronomical research and dark sky preservation
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    Space weather monitoring and early warning
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    International space science collaboration
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    Space science education and outreach
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
              Council Members
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Leading experts in space science, astronomy, and satellite
              technology providing strategic guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {councilMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <Star className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-ncrst-grey leading-heading">
                      {member.name}
                    </h3>
                    <p className="text-sm text-purple-600 font-medium">
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
                      Institution:{" "}
                    </span>
                    <span className="text-ncrst-grey-dark">
                      {member.institution}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Strategic Objectives
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Our key focus areas for advancing Namibia's space science and
              technology capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategicObjectives.map((objective, index) => {
              const IconComponent = objective.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`${objective.color} p-6 text-white`}>
                    <IconComponent size={32} className="mb-3" />
                    <h3 className="text-lg font-bold leading-heading">
                      {objective.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-ncrst-grey-dark text-sm leading-body">
                      {objective.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Space Science Programmes */}
      <section className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Space Science Programmes
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Major initiatives advancing Namibia's space science and technology
              capabilities.
            </p>
          </div>

          <div className="space-y-8">
            {programmes.map((programme, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="bg-gradient-to-r from-ncrst-grey to-ncrst-gold text-white p-8">
                    <h3 className="text-2xl font-bold mb-4 leading-heading">
                      {programme.title}
                    </h3>
                    <p className="opacity-90 leading-body">
                      {programme.description}
                    </p>
                    <div className="mt-6">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          programme.status === "Active"
                            ? "bg-green-500/20 text-green-100"
                            : programme.status === "In Development"
                            ? "bg-yellow-500/20 text-yellow-100"
                            : "bg-blue-500/20 text-blue-100"
                        }`}
                      >
                        {programme.status}
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-ncrst-grey mb-3">
                          Timeline
                        </h4>
                        <p className="text-ncrst-grey-dark">
                          {programme.timeline}
                        </p>

                        <h4 className="font-semibold text-ncrst-grey mb-3 mt-6">
                          Key Partners
                        </h4>
                        <ul className="space-y-1">
                          {programme.partners.map((partner, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-ncrst-grey-dark"
                            >
                              • {partner}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-ncrst-grey mb-3">
                          Objectives
                        </h4>
                        <ul className="space-y-2">
                          {programme.objectives.map((objective, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2"
                            >
                              <Target
                                className="text-purple-600 flex-shrink-0 mt-0.5"
                                size={16}
                              />
                              <span className="text-sm text-ncrst-grey-dark">
                                {objective}
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

      {/* Upcoming Activities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Upcoming Activities
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Key events and milestones in our space science calendar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingActivities.map((activity, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-500 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-ncrst-grey mb-2 leading-heading">
                      {activity.title}
                    </h3>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {activity.type}
                    </span>
                  </div>
                  <Calendar className="text-purple-600" size={24} />
                </div>

                <p className="text-ncrst-grey-dark mb-4 leading-body">
                  {activity.description}
                </p>

                <div className="flex items-center space-x-2 text-sm text-ncrst-grey-dark">
                  <Calendar size={16} className="text-purple-600" />
                  <span className="font-medium">{activity.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Namibia's Space Advantages */}
      <section className="py-16 bg-gradient-to-r from-ncrst-grey to-ncrst-grey text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 leading-heading">
              Namibia's Space Science Advantages
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto leading-body">
              Unique geographical and environmental factors that make Namibia
              ideal for space science research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white/10 p-6 rounded-xl mb-4">
                <h3 className="text-2xl font-bold text-ncrst-gold mb-2">
                  300+
                </h3>
                <p className="text-sm opacity-90">Clear nights per year</p>
              </div>
              <h4 className="font-bold mb-2">Exceptional Dark Skies</h4>
              <p className="text-sm opacity-90">
                Minimal light pollution for optimal astronomical observations
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 p-6 rounded-xl mb-4">
                <h3 className="text-2xl font-bold text-ncrst-gold mb-2">
                  -22°S
                </h3>
                <p className="text-sm opacity-90">Latitude position</p>
              </div>
              <h4 className="font-bold mb-2">Strategic Location</h4>
              <p className="text-sm opacity-90">
                Ideal position for southern hemisphere space observations
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 p-6 rounded-xl mb-4">
                <h3 className="text-2xl font-bold text-ncrst-gold mb-2">
                  1,500m
                </h3>
                <p className="text-sm opacity-90">Average altitude</p>
              </div>
              <h4 className="font-bold mb-2">High Altitude</h4>
              <p className="text-sm opacity-90">
                Reduced atmospheric interference for clearer observations
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 p-6 rounded-xl mb-4">
                <h3 className="text-2xl font-bold text-ncrst-gold mb-2">Low</h3>
                <p className="text-sm opacity-90">Humidity levels</p>
              </div>
              <h4 className="font-bold mb-2">Dry Climate</h4>
              <p className="text-sm opacity-90">
                Minimal atmospheric water vapor for optimal imaging
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
                Get Involved
              </h3>
              <div className="space-y-4">
                <p className="text-ncrst-grey-dark leading-body">
                  Join Namibia's space science community and contribute to our
                  growing capabilities in space research and technology.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="text-purple-600" size={20} />
                    <span className="text-ncrst-grey">
                      Research Collaboration Opportunities
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="text-purple-600" size={20} />
                    <span className="text-ncrst-grey">
                      Student Internship Programs
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="text-purple-600" size={20} />
                    <span className="text-ncrst-grey">
                      International Partnership Projects
                    </span>
                  </div>
                </div>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Contact Space Science Council
                </button>
              </div>
            </div>

            <div className="bg-ncrst-grey-light rounded-xl p-8">
              <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
                Resources & Publications
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-ncrst-grey mb-2">
                    National Space Strategy 2025-2030
                  </h4>
                  <p className="text-sm text-ncrst-grey-dark mb-2">
                    Strategic roadmap for space science development
                  </p>
                  <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                    Download PDF →
                  </button>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-ncrst-grey mb-2">
                    Space Science Annual Report 2024
                  </h4>
                  <p className="text-sm text-ncrst-grey-dark mb-2">
                    Comprehensive review of achievements and progress
                  </p>
                  <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                    Download PDF →
                  </button>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-ncrst-grey mb-2">
                    Dark Sky Guidelines
                  </h4>
                  <p className="text-sm text-ncrst-grey-dark mb-2">
                    Best practices for light pollution reduction
                  </p>
                  <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                    Download PDF →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpaceScienceCoun;
