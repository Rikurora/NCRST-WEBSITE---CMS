import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import CurvedBackground from "../components/CurvedBackground";
import {
  ArrowRight,
  Calendar,
  Users,
  Award,
  Brain,
  Microscope,
  Target,
  Lightbulb,
  Globe,
  Shield,
  BookOpen,
  ChevronDown,
} from "lucide-react";

const Home: React.FC = () => {
  const strategicPillars = [
    {
      title: "Science",
      description:
        "Advancing scientific knowledge through research, education, and innovation to address national challenges.",
      icon: Microscope,
      color: "bg-ncrst-blue",
      link: "/science",
    },
    {
      title: "Technology & Innovation Promotion",
      description:
        "Fostering technological advancement and innovation ecosystems for economic growth.",
      icon: Brain,
      color: "bg-ncrst-green",
      link: "/technology",
    },
    {
      title: "Smart Partnerships & Cooperation",
      description:
        "Building strategic alliances with local and international partners for knowledge exchange.",
      icon: Globe,
      color: "bg-ncrst-gold",
      link: "/about#partnerships",
    },
    {
      title: "Enabling Policy & Regulatory Environment",
      description:
        "Developing supportive policies and regulations that promote research and innovation.",
      icon: Shield,
      color: "bg-ncrst-grey",
      link: "/about#legislation",
    },
    {
      title: "Building Research & Development Capacity",
      description:
        "Strengthening human resources and infrastructure for sustainable R&D capabilities.",
      icon: Award,
      color: "bg-purple-600",
      link: "/research",
    },
  ];

  const priorityPrograms = [
    {
      title: "National Programme on RSTI",
      description:
        "A 3–4 year directional policy framework defining priorities, projects, and implementation strategies for RSTI development.",
      icon: Target,
      color: "bg-ncrst-blue",
      link: "/about#rsti-programme",
    },
    {
      title: "Biotechnology",
      description:
        "Advanced biotechnology research and applications for agriculture, health, and environmental solutions.",
      icon: Microscope,
      color: "bg-ncrst-green",
      link: "/technology#biotech",
    },
    {
      title: "Innovation & Industrial Research",
      description:
        "Promoting innovation-driven industrial development and technology commercialization.",
      icon: Lightbulb,
      color: "bg-ncrst-gold",
      link: "/innovation",
    },
    {
      title: "Natural Sciences Research",
      description:
        "Fundamental and applied research in physics, chemistry, earth sciences, and environmental studies.",
      icon: Globe,
      color: "bg-ncrst-grey",
      link: "/research#natural-sciences",
    },
    {
      title: "Social Science Research",
      description:
        "Research addressing social, economic, and cultural challenges for sustainable development.",
      icon: Users,
      color: "bg-purple-600",
      link: "/research#social-sciences",
    },
    {
      title: "Smart Partnerships",
      description:
        "Strategic collaborations with academia, industry, and international organizations.",
      icon: BookOpen,
      color: "bg-indigo-600",
      link: "/about#partnerships",
    },
  ];

  const latestNews = [
    {
      title: "BOOSTUP 2025 Applications Now Open",
      date: "January 15, 2025",
      category: "Innovation",
      summary:
        "Apply for the largest innovation challenge in Namibia with prizes up to N$500,000",
    },
    {
      title: "National Science Fair Registration Extended",
      date: "January 12, 2025",
      category: "Science",
      summary:
        "Extended deadline for schools to register for the annual National Science Fair",
    },
    {
      title: "New AI Research Collaboration with University",
      date: "January 10, 2025",
      category: "Technology",
      summary:
        "NCRST partners with local universities to establish AI research centers",
    },
  ];

  const handleGetStartedClick = () => {
    const pillarsSection = document.getElementById("strategic-pillars");
    if (pillarsSection) {
      pillarsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Carousel code added here
  const carouselItems = [
    {
      image: slide1,
      title: "Welcome to NCRST",
      description: "Driving innovation, research, and technology in Namibia.",
    },
    {
      image: slide2,
      title: "Empowering Innovators",
      description: "Supporting Namibian entrepreneurs and scientists.",
      button: (
        <Link
          to="/innovation"
          className="mt-6 bg-ncrst-gold text-ncrst-grey px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all shadow-lg"
        >
          Explore Innovation
        </Link>
      ),
    },
    {
      image: slide3,
      title: "Building the Future",
      description: "Fostering a culture of science and technology.",
    },
  ];

  return (
    <div>
      {/* Carousel Section */}
      <section className="relative text-white h-screen overflow-hidden">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          interval={5000}
          className="h-full w-full"
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-10
                           rounded-full text-ncrst-blue p-3
                           shadow-none hover:shadow-lg hover:shadow-ncrst-blue/40
                           transition-all duration-200 focus:outline-none
                           bg-transparent hover:bg-white/80"
                style={{ boxShadow: "none" }}
              >
                <ArrowRight className="rotate-180" size={24} />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-10
                           rounded-full text-ncrst-blue p-3
                           shadow-none hover:shadow-lg hover:shadow-ncrst-blue/40
                           transition-all duration-200 focus:outline-none
                           bg-transparent hover:bg-white/80"
                style={{ boxShadow: "none" }}
              >
                <ArrowRight size={24} />
              </button>
            )
          }
        >
          {carouselItems.map((item, idx) => (
            <div
              key={idx}
              className="relative h-screen w-full flex items-center justify-start"
            >
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-screen"
              />
              {/* Darker overlay */}
              <div className="absolute inset-0 bg-black/70"></div>
              <div className="absolute inset-0 flex flex-col items-start justify-center z-10 pl-24 md:pl-40 max-w-2xl">
                <h2 className="text-4xl font-bold mb-4 drop-shadow">
                  {item.title}
                </h2>
                <p className="text-lg drop-shadow">{item.description}</p>
                {item.button && item.button}
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Hero Section */}
      <div className="border-t-4 border-ncrst-gold w-full"></div>
      <section className="relative text-ncrst-grey pt-0 mt-0">
        <div className="absolute inset-0"></div>
        <CurvedBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-heading">
              Research, Science, Technology and Innovation for
              <span className="block text-ncrst-gold">
                Namibia's Development Aspirations.
              </span>
            </h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-7 mb-8 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl leading-body opacity-95 text-ncrst-grey">
                The National Commission on Research, Science and Technology
                (NCRST) is a statutory body promoting coordination and
                development of Research, Science, Technology and Innovation in
                Namibia.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleGetStartedClick}
                className="bg-ncrst-gold text-ncrst-grey px-6 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg"
              >
                <span>Get Started</span>
                <ChevronDown size={20} className="animate-bounce" />
              </button>
              <Link
                to="/about"
                className="border-2 border-ncrst-grey text-ncrst-grey px-8 py-4 rounded-lg font-semibold hover:bg-ncrst-grey-light hover:text-ncrst-blue transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <div className="border-t-4 border-ncrst-gold w-1/4"></div>
        </div>
      </section>

      {/* Strategic Pillars Section */}
      <section id="strategic-pillars" className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ncrst-grey mb-4 leading-heading">
              Our Strategic Pillars
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              These pillars guide NCRST's efforts to develop a knowledge-based
              society and contribute to Namibia's long-term socio-economic
              prosperity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {strategicPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <Link
                  key={index}
                  to={pillar.link}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className={`${pillar.color} p-6 text-white`}>
                    <IconComponent size={40} className="mb-3" />
                    <h3 className="text-lg font-bold leading-heading">
                      {pillar.title}
                    </h3>
                  </div>
                  <div className="p-4">
                    <p className="text-ncrst-grey-dark text-sm leading-body mb-4">
                      {pillar.description}
                    </p>
                    <div className="flex items-center text-ncrst-blue font-semibold text-sm">
                      <span>Learn More</span>
                      <ArrowRight size={14} className="ml-2" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Priority Programmes Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ncrst-grey mb-4 leading-heading">
              Priority Programmes
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              The National Programme on Research, Science, Technology and
              Innovation (RSTI) outlines strategic areas that drive progress and
              innovation across Namibia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {priorityPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`${program.color} p-6 text-white`}>
                    <div className="flex items-center space-x-3 mb-3">
                      <IconComponent size={28} />
                      <h3 className="text-lg font-bold leading-heading">
                        {program.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-ncrst-grey-dark leading-body mb-4">
                      {program.description}
                    </p>
                    <Link
                      to={program.link}
                      className="inline-flex items-center space-x-2 text-ncrst-blue hover:text-ncrst-green transition-colors font-medium"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ncrst-grey mb-4 leading-heading">
                Latest News & Events
              </h2>
              <p className="text-lg text-ncrst-grey-dark leading-body">
                Stay updated with the latest developments
              </p>
            </div>
            <Link
              to="/news"
              className="bg-ncrst-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-ncrst-blue/90 transition-colors inline-flex items-center space-x-2"
            >
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((news, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-ncrst-blue/10 text-ncrst-blue px-2 py-1 rounded text-xs font-medium">
                      {news.category}
                    </span>
                    <div className="flex items-center text-sm text-ncrst-grey-dark">
                      <Calendar size={14} className="mr-1" />
                      {news.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                    {news.title}
                  </h3>
                  <p className="text-ncrst-grey-dark text-sm leading-body">
                    {news.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Dashboard */}
      <section
        id="impact-statistics"
        className="py-16 bg-ncrst-blue text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-heading">
              Our Impact
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto leading-body">
              Real-time data showcasing NCRST's contribution to Namibian
              research and innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-ncrst-gold mb-2">
                245
              </div>
              <div className="text-sm opacity-90">Active Research Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-ncrst-gold mb-2">
                N$12.5M
              </div>
              <div className="text-sm opacity-90">Grants Awarded (2024)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-ncrst-gold mb-2">
                89
              </div>
              <div className="text-sm opacity-90">Innovation Startups</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-ncrst-gold mb-2">
                156
              </div>
              <div className="text-sm opacity-90">Registered Institutes</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
