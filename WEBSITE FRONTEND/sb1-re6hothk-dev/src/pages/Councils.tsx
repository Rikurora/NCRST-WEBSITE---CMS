import React from "react";
import {
  Users,
  BookOpen,
  Scale,
  Building,
  Target,
  Globe,
  FileText,
} from "lucide-react";
import pexel12 from "../assets/pexels12.jpg";

const Councils: React.FC = () => {
  const strategicPriorities = [
    {
      title: "Research Excellence",
      description:
        "Promoting high-quality research that addresses national development priorities",
      icon: BookOpen,
      color: "bg-ncrst-blue",
    },
    {
      title: "Innovation Ecosystem",
      description:
        "Building a robust innovation system that supports entrepreneurship and technology transfer",
      icon: Target,
      color: "bg-ncrst-green",
    },
    {
      title: "Human Capital Development",
      description:
        "Strengthening research capacity and developing the next generation of scientists",
      icon: Users,
      color: "bg-ncrst-gold",
    },
    {
      title: "International Collaboration",
      description:
        "Fostering partnerships with global research institutions and organizations",
      icon: Globe,
      color: "bg-ncrst-grey",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section
        className="relative min-h-[75vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${pexel12})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-10 leading-heading text-white">
              National Commission on Research, Science & Technology
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-body opacity-90 text-white">
              The governing body responsible for setting strategic direction and
              overseeing the implementation of Namibia's research, science, and
              technology agenda.
            </p>
          </div>
        </div>
      </section>

      {/* Commission Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-ncrst-grey mb-6 leading-heading">
                Our Mandate
              </h2>
              <div className="space-y-4 text-ncrst-grey-dark leading-body">
                <p>
                  The National Commission on Research, Science and Technology
                  serves as the apex body for coordinating and directing
                  Namibia's research and innovation activities. Established
                  under the Research, Science, Technology and Innovation Act of
                  2004, the Commission provides strategic oversight and policy
                  guidance.
                </p>
                <p>
                  Our mandate encompasses the development of national research
                  priorities, allocation of research funding, promotion of
                  international collaboration, and ensuring that research
                  activities contribute meaningfully to Namibia's socio-economic
                  development.
                </p>
                <p>
                  The Commission works closely with government ministries,
                  academic institutions, private sector partners, and
                  international organizations to create a vibrant research and
                  innovation ecosystem.
                </p>
              </div>
            </div>
            <div className="bg-ncrst-grey-light p-8 rounded-xl">
              <h3 className="text-xl font-bold text-ncrst-grey mb-4 leading-heading">
                Key Responsibilities
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    Develop national research and innovation policies
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    Oversee research funding allocation and management
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    Monitor and evaluate research performance
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    Promote technology transfer and commercialization
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

      {/* Strategic Priorities */}
      <section className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Strategic Priorities
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Our focus areas for advancing Namibia's research and innovation
              capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategicPriorities.map((priority, index) => {
              const IconComponent = priority.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`${priority.color} p-6 text-white`}>
                    <IconComponent size={32} className="mb-3" />
                    <h3 className="text-lg font-bold leading-heading">
                      {priority.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-ncrst-grey-dark text-sm leading-body">
                      {priority.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Strategic Plans & Documents
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Key strategic documents guiding our work and decision-making
              processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-ncrst-blue hover:shadow-lg transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="text-ncrst-blue" size={24} />
                <h3 className="text-lg font-bold text-ncrst-grey leading-heading">
                  National Research Strategy 2025-2030
                </h3>
              </div>
              <p className="text-sm text-ncrst-grey-dark mb-4 leading-body">
                Comprehensive strategy outlining research priorities and
                implementation framework for the next five years.
              </p>
              <button className="text-ncrst-blue hover:text-ncrst-green transition-colors font-medium text-sm">
                Download Strategy →
              </button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-ncrst-blue hover:shadow-lg transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <Scale className="text-ncrst-green" size={24} />
                <h3 className="text-lg font-bold text-ncrst-grey leading-heading">
                  Commission Charter
                </h3>
              </div>
              <p className="text-sm text-ncrst-grey-dark mb-4 leading-body">
                Founding document establishing the Commission's mandate, powers,
                and operational framework.
              </p>
              <button className="text-ncrst-blue hover:text-ncrst-green transition-colors font-medium text-sm">
                View Charter →
              </button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-ncrst-blue hover:shadow-lg transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <Building className="text-ncrst-gold" size={24} />
                <h3 className="text-lg font-bold text-ncrst-grey leading-heading">
                  Annual Performance Report 2024
                </h3>
              </div>
              <p className="text-sm text-ncrst-grey-dark mb-4 leading-body">
                Comprehensive review of achievements, challenges, and impact of
                Commission activities in 2024.
              </p>
              <button className="text-ncrst-blue hover:text-ncrst-green transition-colors font-medium text-sm">
                Download Report →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Councils;
