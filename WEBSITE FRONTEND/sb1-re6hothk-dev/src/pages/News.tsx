import React, { useState } from "react";
import { Calendar, Search, ArrowRight, Clock, MapPin } from "lucide-react";

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All News" },
    { id: "research", name: "Research" },
    { id: "innovation", name: "Innovation" },
    { id: "science", name: "Science" },
    { id: "technology", name: "Technology" },
    { id: "biosafety", name: "Biosafety" },
    { id: "events", name: "Events" },
  ];

  const newsArticles = [
    {
      id: 1,
      title:
        "BOOSTUP 2025 Innovation Challenge Launches with Record Prize Pool",
      excerpt:
        "Namibia's premier innovation competition opens applications with N$500,000 in prizes, targeting breakthrough solutions in technology, agriculture, health, and environment.",
      category: "innovation",
      date: "January 20, 2025",
      readTime: "3 min read",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
    },
    {
      id: 2,
      title:
        "National Science Fair 2025 Registration Extended Due to High Demand",
      excerpt:
        "Over 200 schools have already registered for this year's National Science Fair. Registration deadline extended to February 15th to accommodate additional participants.",
      category: "science",
      date: "January 18, 2025",
      readTime: "2 min read",
      image:
        "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      title:
        "NCRST Partners with International Universities for AI Research Initiative",
      excerpt:
        "New collaboration with leading global institutions will establish AI research centers across Namibia, focusing on applications in agriculture and healthcare.",
      category: "technology",
      date: "January 15, 2025",
      readTime: "4 min read",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      title:
        "Breakthrough in Drought-Resistant Crop Research Approved for Field Trials",
      excerpt:
        "National Biosafety Committee approves field trials for genetically modified maize varieties designed to withstand Namibia's challenging climate conditions.",
      category: "biosafety",
      date: "January 12, 2025",
      readTime: "5 min read",
      image:
        "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 5,
      title:
        "Young Researcher Development Program Announces 2025 Grant Recipients",
      excerpt:
        "Fifteen early-career researchers receive funding totaling N$2.25 million to pursue innovative research projects across various scientific disciplines.",
      category: "research",
      date: "January 10, 2025",
      readTime: "3 min read",
      image:
        "https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 6,
      title: "Space Science Week 2025: Celebrating Namibia's Dark Sky Heritage",
      excerpt:
        "Annual celebration of space science returns with public stargazing events, school programs, and the launch of the NamibSat educational initiative.",
      category: "science",
      date: "January 8, 2025",
      readTime: "4 min read",
      image:
        "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const upcomingEvents = [
    {
      title: "Research Symposium 2025",
      date: "May 15-17, 2025",
      location: "Safari Hotel & Convention Centre, Windhoek",
      type: "Conference",
      description:
        "Annual gathering of researchers showcasing innovation for sustainable development",
    },
    {
      title: "National Science Fair",
      date: "April 15-18, 2025",
      location: "Windhoek Showgrounds",
      type: "Competition",
      description:
        "Student science competition featuring projects from schools nationwide",
    },
    {
      title: "AI Workshop Series",
      date: "March 5-7, 2025",
      location: "NCRST Campus, Windhoek",
      type: "Workshop",
      description:
        "Hands-on training in artificial intelligence applications for local industries",
    },
    {
      title: "Biosafety Committee Public Hearing",
      date: "February 20, 2025",
      location: "NCRST Auditorium",
      type: "Public Hearing",
      description:
        "Public consultation on proposed GMO field trial applications",
    },
  ];

  const pressReleases = [
    {
      title: "NCRST Annual Report 2024 Released",
      date: "January 25, 2025",
      summary:
        "Comprehensive overview of achievements in research funding, innovation support, and scientific advancement",
    },
    {
      title: "New Partnership with European Space Agency Announced",
      date: "January 22, 2025",
      summary:
        "Collaboration will enhance Namibia's space science capabilities and satellite technology development",
    },
    {
      title: "Record Investment in Research Infrastructure",
      date: "January 20, 2025",
      summary:
        "N$15 million allocated for upgrading laboratory facilities and acquiring advanced research equipment",
    },
  ];

  const filteredNews = newsArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = newsArticles.find((article) => article.featured);
  const regularArticles = filteredNews.filter((article) => !article.featured);

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-gradient-to-r from-ncrst-grey to-ncrst-gold text-white py-32 min-h-[80vh] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-heading">
              News & Events
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-body opacity-90">
              Stay informed about the latest developments in Namibian research,
              science, technology, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search news and events..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ncrst-blue focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Category Filter */}
              <div className="md:w-64">
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
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-ncrst-gold text-ncrst-grey px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-ncrst-blue/10 text-ncrst-blue px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {featuredArticle.category}
                    </span>
                    <div className="flex items-center text-sm text-ncrst-grey-dark">
                      <Calendar size={14} className="mr-1" />
                      {featuredArticle.date}
                    </div>
                    <div className="flex items-center text-sm text-ncrst-grey-dark">
                      <Clock size={14} className="mr-1" />
                      {featuredArticle.readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-ncrst-grey-dark mb-6 leading-body">
                    {featuredArticle.excerpt}
                  </p>
                  <button className="inline-flex items-center space-x-2 bg-ncrst-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-ncrst-blue/90 transition-colors">
                    <span>Read Full Article</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-12" id="news">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-ncrst-grey leading-heading">
              Latest News
            </h2>
            <div className="text-sm text-ncrst-grey-dark">
              Showing {regularArticles.length} articles
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-ncrst-blue/10 backdrop-blur-sm text-ncrst-blue px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-ncrst-grey-dark">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                    {article.title}
                  </h3>
                  <p className="text-ncrst-grey-dark text-sm mb-4 leading-body">
                    {article.excerpt}
                  </p>
                  <button className="text-ncrst-blue hover:text-ncrst-green transition-colors font-medium text-sm inline-flex items-center space-x-1">
                    <span>Read More</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {regularArticles.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-gray-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-ncrst-grey mb-2">
                No articles found
              </h3>
              <p className="text-ncrst-grey-dark">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-ncrst-grey-light" id="events">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Upcoming Events
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Join us at upcoming conferences, workshops, and public events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-ncrst-grey mb-2 leading-heading">
                      {event.title}
                    </h3>
                    <span className="bg-ncrst-green/10 text-ncrst-green px-3 py-1 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                  </div>
                </div>

                <p className="text-ncrst-grey-dark mb-4 leading-body">
                  {event.description}
                </p>

                <div className="space-y-2 text-sm text-ncrst-grey-dark">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-ncrst-blue" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-ncrst-blue" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-ncrst-blue text-white py-2 rounded-lg font-medium hover:bg-ncrst-blue/90 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16" id="media">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-ncrst-grey mb-8 leading-heading">
                Recent Press Releases
              </h2>
              <div className="space-y-6">
                {pressReleases.map((release, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-ncrst-blue transition-colors"
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar size={16} className="text-ncrst-blue" />
                      <span className="text-sm text-ncrst-grey-dark">
                        {release.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                      {release.title}
                    </h3>
                    <p className="text-ncrst-grey-dark text-sm leading-body">
                      {release.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
                Media Resources
              </h3>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-ncrst-grey mb-2">
                      Media Contacts
                    </h4>
                    <div className="text-sm text-ncrst-grey-dark space-y-1">
                      <p>Communications Office</p>
                      <p>Phone: +264 61 431 7000</p>
                      <p>Email: media@ncrst.na</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey mb-2">
                      Press Kit
                    </h4>
                    <button className="text-ncrst-blue hover:text-ncrst-green transition-colors text-sm font-medium">
                      Download Media Kit →
                    </button>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey mb-2">
                      Photo Gallery
                    </h4>
                    <button className="text-ncrst-blue hover:text-ncrst-green transition-colors text-sm font-medium">
                      View Gallery →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
