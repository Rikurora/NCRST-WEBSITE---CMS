import React from "react";
import { Users, Scale, Award } from "lucide-react";
import ceoImg from "../assets/ceo_img_prof_a.jpeg";
import pexel1 from "../assets/pexels1.jpg";

const About: React.FC = () => {
  const boardMembers = [
    {
      name: "Prof. Dr Jacob Nyambe",
      role: "Chairperson",
      committees: ["FRST", "Chairperson of EXCO"],
      expertise: "Geology & Environmental Sciences",
    },
    {
      name: "Prof. Dr Teresia Kaulihowa",
      role: "Vice Chairperson",
      committees: ["FAC", "EXCO"],
      expertise: "Economics & Development Studies",
    },
    {
      name: "Prof. Dr. Martha Kandawa-Schulz",
      role: "Commissioner",
      committees: ["FRST", "HRC"],
      expertise: "Biochemistry & Molecular Biology",
    },
    {
      name: "Dr Fillemon Nangolo",
      role: "Commissioner",
      committees: ["Chairperson of FRST"],
      expertise: "Agricultural Sciences",
    },
    {
      name: "Dr Marius Mutorwa",
      role: "Commissioner",
      committees: ["FRST"],
      expertise: "Veterinary Sciences",
    },
    {
      name: "Dr. Alisa Amupolo",
      role: "Commissioner",
      committees: ["FAC", "EXCO"],
      expertise: "Public Health & Epidemiology",
    },
    {
      name: "Ms. Nailoke Mhanda",
      role: "Commissioner",
      committees: ["Chairperson HRC", "EXCO"],
      expertise: "Human Resources & Administration",
    },
    {
      name: "Mr Titus Kanyanda",
      role: "Commissioner",
      committees: ["Chairperson of FAC", "FRC", "EXCO"],
      expertise: "Finance & Risk Management",
    },
  ];

  const councils = [
    {
      name: "Space Science Council",
      description:
        "Provides strategic guidance on space science initiatives and satellite technology development.",
      members: "12 members including space science experts and engineers",
      link: "/councils/space-science",
    },
    {
      name: "Biosafety Council",
      description:
        "Regulates the development, handling, transport, use, transfer and release of genetically modified organisms.",
      members: "9 members with expertise in biotechnology and biosafety",
      link: "/councils/biosafety",
    },
    {
      name: "National Indigenous Knowledge System",
      description:
        "Promotes and preserves traditional knowledge systems and their integration with modern science.",
      members: "11 members including traditional leaders and knowledge holders",
      link: "/councils/iks",
    },
  ];

  const legislation = [
    {
      title: "Research, Science, Technology and Innovation Act",
      year: "2004",
      description:
        "Establishes NCRST and provides the legal framework for promoting and regulating research, science, and technology in Namibia.",
      status: "Active",
    },
    {
      title: "Biosafety Act",
      year: "2006",
      description:
        "Regulates activities involving genetically modified organisms to ensure environmental and human health protection.",
      status: "Active",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section
        className="relative min-h-[75vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${pexel1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-10 leading-heading text-white">
              About NCRST
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-body opacity-90 text-white">
              Established to promote and regulate research, science, technology,
              innovation, and biosafety in Namibia since 2004.
            </p>
          </div>
        </div>
      </section>

      {/* CEO's Forward */}
      <section id="ceo-forward" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-ncrst-grey p-6 text-white text-center bg-opacity-70">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    {/* <Users className="text-white" size={48} /> */}
                    <img
                      src={ceoImg}
                      alt="CEO"
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold leading-heading">
                    Chief Executive Officer
                  </h3>
                  <p className="text-sm opacity-90">Prof. Dr Anicia Peters</p>
                </div>
                <div className="p-6">
                  <p className="text-sm text-ncrst-grey-dark italic">
                    "Leading Namibia's transformation through science,
                    technology, and innovation."
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-ncrst-grey mb-6 leading-heading">
                CEO's Foreword
              </h2>
              <div className="space-y-6 text-ncrst-grey-dark leading-body">
                <div>
                  <h3 className="text-xl font-semibold text-ncrst-grey mb-3">
                    NCRST Mandate
                  </h3>
                  <p>
                    The National Commission on Research, Science and Technology
                    serves as Namibia's apex institution for coordinating and
                    promoting research, science, technology, and innovation. Our
                    mandate encompasses the development of policies, allocation
                    of resources, and facilitation of partnerships that drive
                    scientific advancement and technological innovation across
                    all sectors of the economy.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-ncrst-grey mb-3">
                    Vision
                  </h3>
                  <p className="bg-ncrst-blue/5 p-4 rounded-lg border-l-4 border-ncrst-blue italic">
                    "To be a leading institution in promoting research, science,
                    technology, and innovation for sustainable development in
                    Namibia."
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-ncrst-grey mb-3">
                    Mission
                  </h3>
                  <p className="bg-ncrst-blue/5 p-4 rounded-lg border-l-4 border-ncrst-blue italic">
                    "To coordinate, promote, and regulate research, science,
                    technology, and innovation activities in Namibia through
                    strategic partnerships, capacity building, and
                    evidence-based policy development."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Functions */}
          <div className="mt-12 bg-ncrst-grey-light rounded-xl p-8">
            <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
              Key Functions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    Advise government on science and technology policy
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    Coordinate and promote research activities
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    Facilitate technology transfer and innovation
                  </span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    Regulate biosafety and GMO activities
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    Promote STEM education and awareness
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    Foster international research partnerships
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Commissioners */}
      <section id="board" className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Board of Commissioners
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Distinguished leaders providing strategic oversight and governance
              for NCRST's operations and mandate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-ncrst-blue/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Award className="text-ncrst-blue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-ncrst-grey leading-heading">
                      {member.name}
                    </h3>
                    <p className="text-sm text-ncrst-blue font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-ncrst-grey">
                      Committees:{" "}
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {member.committees.map((committee, idx) => (
                        <span
                          key={idx}
                          className="bg-ncrst-blue/10 text-ncrst-blue px-2 py-1 rounded text-xs"
                        >
                          {committee}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="font-medium text-ncrst-grey">
                      Expertise:{" "}
                    </span>
                    <span className="text-ncrst-grey-dark">
                      {member.expertise}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organisational Structure */}
      <section id="structure" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Organisational Structure
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Our organizational structure ensures effective governance and
              implementation of our mandate.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            {/* Line Ministry */}
            <div className="text-center mb-8">
              <div className="bg-ncrst-grey text-white px-8 py-4 rounded-lg inline-block mb-4 max-w-2xl">
                <h3 className="font-bold text-lg leading-heading">
                  Ministry of Education, Innovation, Youth, Sports, Arts, and
                  Culture
                </h3>
                <p className="text-sm opacity-90 mt-1">(Line Ministry)</p>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="text-center mb-8">
              <div className="w-1 h-12 bg-ncrst-grey mx-auto"></div>
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-ncrst-grey mx-auto"></div>
            </div>

            {/* Board of Commissioners */}
            <div className="text-center mb-8">
              <div className="bg-ncrst-grey text-white px-8 py-4 rounded-lg inline-block mb-4">
                <h3 className="font-bold text-lg leading-heading">
                  Board of Commissioners
                </h3>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="text-center mb-8">
              <div className="w-1 h-12 bg-ncrst-grey mx-auto"></div>
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-ncrst-grey mx-auto"></div>
            </div>
            <div className="text-center mb-8">
              <div className="bg-ncrst-grey text-white px-8 py-4 rounded-lg inline-block mb-4">
                <h3 className="font-bold text-lg leading-heading">
                  Chief Executive Officer
                </h3>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="text-center mb-8">
              <div className="w-1 h-12 bg-ncrst-grey mx-auto"></div>
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-ncrst-grey mx-auto"></div>
            </div>

            {/* General Managers */}
            <div className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-ncrst-gold text-ncrst-grey px-6 py-4 rounded-lg">
                  <h4 className="font-bold text-lg leading-heading">
                    General Manager
                  </h4>
                  <p className="text-sm font-medium mt-1">BSS</p>
                  <p className="text-xs mt-1 opacity-80">
                    (Business Support Services)
                  </p>
                </div>
                <div className="bg-ncrst-gold text-ncrst-grey px-6 py-4 rounded-lg">
                  <h4 className="font-bold text-lg leading-heading">
                    General Manager
                  </h4>
                  <p className="text-sm font-medium mt-1">RSTIC&S</p>
                  <p className="text-xs mt-1 opacity-80">
                    (Research, Science, Technology, Innovation, Communication &
                    Stakeholder Relations)
                  </p>
                </div>
                <div className="bg-ncrst-gold text-ncrst-grey px-6 py-4 rounded-lg">
                  <h4 className="font-bold text-lg leading-heading">
                    General Manager
                  </h4>
                  <p className="text-sm font-medium mt-1">ITD</p>
                  <p className="text-xs mt-1 opacity-80">
                    (Innovation & Technology Development)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Councils */}
      <section id="councils" className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Councils
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Expert advisory bodies providing strategic guidance on specialized
              areas of science and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {councils.map((council, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-ncrst-blue/10 p-3 rounded-lg">
                    <Users className="text-ncrst-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ncrst-grey leading-heading">
                      <a
                        href={council.link}
                        className="hover:text-ncrst-blue transition-colors"
                      >
                        {council.name}
                      </a>
                    </h3>
                  </div>
                </div>
                <p className="text-ncrst-grey-dark mb-4 leading-body">
                  {council.description}
                </p>
                <div className="text-sm text-ncrst-blue font-medium">
                  {council.members}
                </div>
                <div className="mt-4">
                  <a
                    href={council.link}
                    className="text-ncrst-blue hover:text-ncrst-green transition-colors font-medium text-sm"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legislation */}
      <section id="legislation" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Legislative Framework
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              The legal foundation governing our operations and regulatory
              activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {legislation.map((law, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-ncrst-blue transition-colors"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-ncrst-green/10 p-3 rounded-lg">
                    <Scale className="text-ncrst-green" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ncrst-grey leading-heading">
                      {law.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-ncrst-grey-dark">
                        Enacted: {law.year}
                      </span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        {law.status}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-ncrst-grey-dark leading-body">
                  {law.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
