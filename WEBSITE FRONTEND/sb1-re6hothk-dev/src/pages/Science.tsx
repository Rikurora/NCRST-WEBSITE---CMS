import React from "react";
import {
  Trophy,
  Users,
  Star,
  Calendar,
  Award,
  Brain,
  Microscope,
  Target,
} from "lucide-react";
import pexel3 from "../assets/pexel11.jpg";

const Science: React.FC = () => {
  const sciencePrograms = [
    {
      title: "National Science Fair",
      description:
        "Namibia's premier science competition showcasing student innovation and scientific excellence across all regions.",
      icon: Trophy,
      color: "bg-ncrst-blue",

      stats: {
        participants: "134 students",
        schools: "60 schools",
        projects: "134 projects",
      },
      link: "#fair",
    },
    {
      title: "Namibia Mathematics Olympiad (NMO)",
      description:
        "National competition promoting mathematical excellence and problem-solving skills among high school students.",
      icon: Target,
      color: "bg-ncrst-grey",
      stats: {
        participants: "2744 students",
        regions: "All 14 regions",
        levels: "3 competition levels",
      },
      link: "#nmo",
    },
    {
      title: "National Science Quiz",
      description:
        "Interactive competition testing scientific knowledge and encouraging STEM learning among young Namibians.",
      icon: Brain,
      color: "bg-ncrst-gold",
      stats: {
        participants: "27 students",
        schools: " schools",
        subjects: "5 science subjects",
      },
      link: "#quiz",
    },
    {
      title: "STEM Programmes",
      description:
        "This initiative provides a unique platform to build practical skills, test scientific knowledge and showcase talents in STEM.",
      icon: Users,
      color: "bg-ncrst-gold",
      stats: {
        beneficiaries: "4,300+ students",
        programs: "Mr. & Mrs. STEM",
        impact: "Gender equality focus",
      },
      link: "#stem",
    },
    {
      title: "Science Week",
      description:
        "Annual celebration of scientific achievements with workshops, exhibitions, and public engagement activities.",
      icon: Star,
      color: "bg-ncrst-blue",
      stats: {
        duration: "1 week annually",
        events: "7 activities",
        reach: "National coverage",
      },
      link: "#science-week",
    },
    {
      title: "Space Week",
      description:
        "Celebrating space science and astronomy, inspiring curiosity about the universe and Namibia's dark skies.",
      icon: Microscope,
      color: "bg-ncrst-grey",
      stats: {
        duration: "1 week annually",
        activities: "Stargazing events",
        participants: "5,000+ people",
      },
      link: "#space",
    },
  ];

  const upcomingEvents = [
    {
      title: "National Science Fair 2025",
      date: "April 15-18, 2025",
      location: "Windhoek Showgrounds",
      category: "Science Fair",
      description:
        "Annual showcase of student scientific innovation and research projects",
    },
    {
      title: "Mathematics Olympiad Regional",
      date: "June 5, 2025",
      location: "Regional Centers",
      category: "Mathematics",
      description:
        "Regional competitions leading to national mathematics olympiad",
    },
    {
      title: "Science Week 2025",
      date: "May 20-26, 2025",
      location: "Nationwide",
      category: "Science Week",
      description:
        "Week-long celebration of scientific achievements and discoveries",
    },
    {
      title: "Space Science Week",
      date: "October 6-10, 2025",
      location: "Nationwide",
      category: "Space Science",
      description:
        "Annual celebration of space science with public stargazing events",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section
        className="relative min-h-[75vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${pexel3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-10 leading-heading text-white">
              Science Education & Outreach
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-body opacity-90 text-white">
              Inspiring the next generation of scientists through education
              programs, competitions, and hands-on learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Science Programs Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Our Science Programmes
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Comprehensive programs designed to promote scientific excellence
              and STEM education across Namibia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sciencePrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className={`${program.color} p-6 text-white`}>
                    <IconComponent size={48} className="mb-4" />
                    <h3 className="text-xl font-bold mb-2 leading-heading">
                      {program.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-ncrst-grey-dark mb-4 leading-body">
                      {program.description}
                    </p>
                    <div className="space-y-2 text-sm mb-4">
                      {Object.entries(program.stats).map(
                        ([key, value], idx) => (
                          <div key={idx} className="flex justify-between">
                            <span className="text-ncrst-grey-dark capitalize">
                              {key.replace(/([A-Z])/g, " $1")}:
                            </span>
                            <span className="font-medium text-ncrst-grey">
                              {value}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                    <a
                      href={program.link}
                      className="inline-flex items-center text-ncrst-blue hover:text-ncrst-green transition-colors font-medium"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* National Science Fair */}
      <section id="fair" className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              National Science Fair
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Namibia's premier science competition showcasing student
              innovation and scientific excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
                Science Fair 2025
              </h3>
              <p className="text-lg mb-6 opacity-90">
                "Innovation for Tomorrow's World"
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-ncrst-gold" size={20} />
                  <span>April 15-18, 2025</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy className="text-ncrst-gold" size={20} />
                  <span>N$100,000 in prizes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-ncrst-gold" size={20} />
                  <span>Open to Grades 8-12</span>
                </div>
              </div>
              <button className="bg-ncrst-gold text-ncrst-grey px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Register Your School
              </button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
                Competition Categories
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey">
                      Physical Sciences
                    </h4>
                    <p className="text-sm text-ncrst-grey-dark">
                      Physics, Chemistry, Earth Sciences
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey">
                      Life Sciences
                    </h4>
                    <p className="text-sm text-ncrst-grey-dark">
                      Biology, Botany, Zoology, Medicine
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey">
                      Engineering & Technology
                    </h4>
                    <p className="text-sm text-ncrst-grey-dark">
                      Computer Science, Engineering, Innovation
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey">
                      Environmental Sciences
                    </h4>
                    <p className="text-sm text-ncrst-grey-dark">
                      Ecology, Conservation, Sustainability
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey">
                      Mathematics
                    </h4>
                    <p className="text-sm text-ncrst-grey-dark">
                      Pure & Applied Mathematics
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey">
                      Social Sciences
                    </h4>
                    <p className="text-sm text-ncrst-grey-dark">
                      Psychology, Sociology, Behavioral Sciences
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Namibia Mathematics Olympiad */}
      <section id="nmo" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Namibia Mathematics Olympiad (NMO)
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              National competition promoting mathematical excellence and
              problem-solving skills.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-red-600" size={32} />
                </div>
                <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                  Competition Levels
                </h3>
                <ul className="text-sm text-ncrst-grey-dark space-y-1">
                  <li>• Junior Level (Grades 8-10)</li>
                  <li>• Senior Level (Grades 11-12)</li>
                  <li>• National Finals</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-blue-600" size={32} />
                </div>
                <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                  Participation
                </h3>
                <ul className="text-sm text-ncrst-grey-dark space-y-1">
                  <li>• 450+ students annually</li>
                  <li>• All 14 regions represented</li>
                  <li>• Top performers advance</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-green-600" size={32} />
                </div>
                <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                  Recognition
                </h3>
                <ul className="text-sm text-ncrst-grey-dark space-y-1">
                  <li>• Certificates and medals</li>
                  <li>• Scholarship opportunities</li>
                  <li>• International competitions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* National Science Quiz */}
      <section id="quiz" className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              National Science Quiz
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Interactive competition testing scientific knowledge and
              encouraging STEM learning.
            </p>
          </div>

          <div className="bg-ncrst-gold text-ncrst-grey rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 leading-heading">
                  Quiz Format
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-ncrst-grey rounded-full"></div>
                    <span>Multiple choice questions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-ncrst-grey rounded-full"></div>
                    <span>Team-based competition</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-ncrst-grey rounded-full"></div>
                    <span>Regional and national rounds</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-ncrst-grey rounded-full"></div>
                    <span>Live audience participation</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-white/20  p-6 rounded-xl shadow-lg">
                  <Brain size={64} className="mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Subject Areas</h4>
                  <p className="text-sm">
                    Biology, Chemistry, Physics, Mathematics, Environmental
                    Science
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEM Gender Programmes */}
      <section id="stem" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              STEM Gender Programmes
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Promoting gender balance and leadership in Science, Technology,
              Engineering, and Mathematics fields.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-ncrst-grey-light p-6 text-ncrst-grey">
                <h3 className="text-2xl font-bold mb-2 leading-heading">
                  Mr. STEM Namibia
                </h3>
                <p className="opacity-90 leading-body">
                  Male role model program promoting STEM careers among young men
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-ncrst-grey mb-2">
                      Target Audience
                    </h4>
                    <p className="text-sm text-ncrst-grey-dark">
                      High school male students
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey mb-2">
                      Key Activities
                    </h4>
                    <ul className="text-sm text-ncrst-grey-dark space-y-1">
                      <li>• School visits and presentations</li>
                      <li>• Mentorship programs</li>
                      <li>• Career guidance sessions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey mb-2">
                      2024 Impact
                    </h4>
                    <p className="text-sm text-ncrst-grey-dark">
                      Reached 2,500+ students
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-ncrst-grey-light p-6 text-ncrst-grey">
                <h3 className="text-2xl font-bold mb-2 leading-heading">
                  Mrs. STEM Namibia
                </h3>
                <p className="opacity-90 leading-body">
                  Female leadership program encouraging women in STEM fields
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-ncrst-grey mb-2">
                      Target Audience
                    </h4>
                    <p className="text-sm text-ncrst-grey-dark">
                      High school female students
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey mb-2">
                      Key Activities
                    </h4>
                    <ul className="text-sm text-ncrst-grey-dark space-y-1">
                      <li>• Leadership workshops</li>
                      <li>• University partnerships</li>
                      <li>• Industry connections</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey mb-2">
                      2024 Impact
                    </h4>
                    <p className="text-sm text-ncrst-grey-dark">
                      Supported 1,800+ female students
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Science Week */}
      <section id="science-week" className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Science Week
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Annual celebration of scientific achievements with workshops,
              exhibitions, and public engagement.
            </p>
          </div>

          <div className="bg-ncrst-grey text-ncrst-gold rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 leading-heading">
                Science Week 2025
              </h3>
              <p className="text-lg opacity-90">
                "Science for Sustainable Development"
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white/20 p-4 rounded-lg mb-3">
                  <h4 className="font-bold">May 20-26, 2025</h4>
                </div>
                <p className="text-sm opacity-90">Week-long celebration</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 p-4 rounded-lg mb-3">
                  <h4 className="font-bold">50+ Activities</h4>
                </div>
                <p className="text-sm opacity-90">Workshops and exhibitions</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 p-4 rounded-lg mb-3">
                  <h4 className="font-bold">National Coverage</h4>
                </div>
                <p className="text-sm opacity-90">All regions participate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Space Week */}
      <section id="space" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Space Week
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Annual celebration of space science and astronomy, inspiring
              curiosity about the universe.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
                World Space Week 2025
              </h3>
              <p className="text-lg mb-6 opacity-90">
                "Space and Sustainability"
              </p>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold mb-2">October 4-10, 2025</h4>
                  <p className="text-sm opacity-90">
                    Week-long celebration across Namibia
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Key Activities</h4>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>• Public astronomy nights</li>
                    <li>• School telescope programs</li>
                    <li>• Space science exhibitions</li>
                    <li>• Planetarium shows</li>
                  </ul>
                </div>
              </div>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Register Event
              </button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
                Educational Programs
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-ncrst-grey mb-2">
                    Astronomy for Schools
                  </h4>
                  <p className="text-sm text-ncrst-grey-dark mb-2">
                    Mobile telescope program visiting schools nationwide
                  </p>
                  <div className="text-xs bg-ncrst-blue/10 text-ncrst-blue px-2 py-1 rounded inline-block">
                    200+ schools reached
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-ncrst-grey mb-2">
                    Teacher Training
                  </h4>
                  <p className="text-sm text-ncrst-grey-dark mb-2">
                    Capacity building for educators in space science
                  </p>
                  <div className="text-xs bg-ncrst-green/10 text-ncrst-green px-2 py-1 rounded inline-block">
                    150 teachers trained
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-ncrst-grey mb-2">
                    Public Stargazing
                  </h4>
                  <p className="text-sm text-ncrst-grey-dark mb-2">
                    Community astronomy events and dark sky experiences
                  </p>
                  <div className="text-xs bg-ncrst-gold/20 text-ncrst-grey px-2 py-1 rounded inline-block">
                    5,000+ participants
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Science Olympiads */}
      <section id="olympiads" className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Science Olympiads
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              National and international competitions recognizing excellence in
              mathematics and science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-600 font-bold text-xl">M</span>
              </div>
              <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                Mathematics Olympiad
              </h3>
              <p className="text-sm text-ncrst-grey-dark mb-4 leading-body">
                National competition for high school mathematics excellence
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-ncrst-grey-dark">Participants:</span>
                  <span className="font-medium">450+ students</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ncrst-grey-dark">Regions:</span>
                  <span className="font-medium">All 14 regions</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">P</span>
              </div>
              <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                Physics Olympiad
              </h3>
              <p className="text-sm text-ncrst-grey-dark mb-4 leading-body">
                Theoretical and practical physics challenges
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-ncrst-grey-dark">Participants:</span>
                  <span className="font-medium">320+ students</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ncrst-grey-dark">International:</span>
                  <span className="font-medium">Top 5 advance</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold text-xl">C</span>
              </div>
              <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                Chemistry Olympiad
              </h3>
              <p className="text-sm text-ncrst-grey-dark mb-4 leading-body">
                Laboratory skills and chemical knowledge competition
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-ncrst-grey-dark">Participants:</span>
                  <span className="font-medium">280+ students</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ncrst-grey-dark">Lab Sessions:</span>
                  <span className="font-medium">Practical & Theory</span>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
              Upcoming Science Events
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-ncrst-grey-light rounded-lg"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-ncrst-grey leading-heading">
                      {event.title}
                    </h4>
                    <p className="text-sm text-ncrst-grey-dark">
                      {event.description}
                    </p>
                    <p className="text-sm text-ncrst-grey-dark">
                      {event.location}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 md:mt-0">
                    <span className="bg-ncrst-blue/10 text-ncrst-blue px-3 py-1 rounded-full text-xs font-medium">
                      {event.category}
                    </span>
                    <div className="text-sm font-medium text-ncrst-grey">
                      {event.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <button className="bg-ncrst-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-ncrst-blue/90 transition-colors">
                View All Events
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Science;
