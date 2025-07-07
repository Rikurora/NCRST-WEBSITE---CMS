import React, { useState } from "react";
import {
  FileText,
  Download,
  Calendar,
  DollarSign,
  Building,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import pexel13 from "../assets/pexels13.jpg";

const Procurement: React.FC = () => {
  const [activeTab, setActiveTab] = useState("open");

  const openBids = [
    {
      title: "Laboratory Equipment Procurement",
      reference: "NCRST/PROC/2025/001",
      category: "Equipment",
      description:
        "Supply and installation of advanced laboratory equipment for biotechnology research",
      value: "N$2,500,000",
      closingDate: "March 15, 2025",
      publishDate: "February 1, 2025",
      status: "Open",
      documents: [
        "Bid Document",
        "Technical Specifications",
        "Terms & Conditions",
      ],
    },
    {
      title: "IT Infrastructure Upgrade",
      reference: "NCRST/PROC/2025/002",
      category: "Technology",
      description:
        "Upgrade of network infrastructure and server systems across NCRST facilities",
      value: "N$1,800,000",
      closingDate: "March 20, 2025",
      publishDate: "February 5, 2025",
      status: "Open",
      documents: [
        "Bid Document",
        "Technical Requirements",
        "Site Survey Report",
      ],
    },
    {
      title: "Research Facility Maintenance",
      reference: "NCRST/PROC/2025/003",
      category: "Services",
      description:
        "Comprehensive maintenance services for research laboratories and equipment",
      value: "N$950,000",
      closingDate: "February 28, 2025",
      publishDate: "January 20, 2025",
      status: "Closing Soon",
      documents: [
        "Service Agreement",
        "Maintenance Schedule",
        "Performance Standards",
      ],
    },
    {
      title: "Security Services Contract",
      reference: "NCRST/PROC/2025/004",
      category: "Services",
      description: "24/7 security services for NCRST premises and facilities",
      value: "N$1,200,000",
      closingDate: "April 10, 2025",
      publishDate: "February 10, 2025",
      status: "Open",
      documents: [
        "Service Specifications",
        "Security Requirements",
        "Contract Terms",
      ],
    },
  ];

  const awardedBids = [
    {
      title: "Office Furniture Supply",
      reference: "NCRST/PROC/2024/015",
      category: "Furniture",
      vendor: "Modern Office Solutions (Pty) Ltd",
      awardValue: "N$450,000",
      awardDate: "December 15, 2024",
      contractPeriod: "3 months",
      status: "Completed",
    },
    {
      title: "Vehicle Fleet Maintenance",
      reference: "NCRST/PROC/2024/012",
      category: "Services",
      vendor: "AutoCare Namibia",
      awardValue: "N$280,000",
      awardDate: "November 20, 2024",
      contractPeriod: "12 months",
      status: "Active",
    },
    {
      title: "Cleaning Services",
      reference: "NCRST/PROC/2024/008",
      category: "Services",
      vendor: "CleanTech Services",
      awardValue: "N$180,000",
      awardDate: "October 10, 2024",
      contractPeriod: "24 months",
      status: "Active",
    },
    {
      title: "Scientific Instruments Calibration",
      reference: "NCRST/PROC/2024/006",
      category: "Services",
      vendor: "Precision Calibration Services",
      awardValue: "N$320,000",
      awardDate: "September 5, 2024",
      contractPeriod: "18 months",
      status: "Active",
    },
  ];

  const procurementGuidelines = [
    {
      title: "NCRST Procurement Policy",
      description: "Comprehensive procurement policy and procedures manual",
      type: "PDF",
      size: "2.8 MB",
      lastUpdated: "January 2025",
    },
    {
      title: "Vendor Registration Guidelines",
      description:
        "Step-by-step guide for supplier registration and requirements",
      type: "PDF",
      size: "1.5 MB",
      lastUpdated: "December 2024",
    },
    {
      title: "Bid Submission Requirements",
      description:
        "Detailed requirements for bid document preparation and submission",
      type: "PDF",
      size: "1.2 MB",
      lastUpdated: "November 2024",
    },
    {
      title: "Evaluation Criteria Framework",
      description: "Standard evaluation criteria and scoring methodology",
      type: "PDF",
      size: "900 KB",
      lastUpdated: "October 2024",
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
              Procurement & Bids
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-body opacity-90 text-white">
              Transparent and competitive procurement processes supporting
              NCRST's research and operational requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { id: "open", label: "Open Bids" },
              { id: "awarded", label: "Awarded Bids" },
              { id: "guidelines", label: "Procurement Guidelines" },
              { id: "instructions", label: "Submission Instructions" },
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

      {/* Open Bids */}
      {activeTab === "open" && (
        <section id="open" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
                Current Open Bids
              </h2>
              <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
                Active procurement opportunities for suppliers and service
                providers.
              </p>
            </div>

            <div className="space-y-6">
              {openBids.map((bid, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-ncrst-blue hover:shadow-lg transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
                    <div className="lg:col-span-3 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-ncrst-grey mb-2 leading-heading">
                            {bid.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-ncrst-grey-dark">
                            <span>Ref: {bid.reference}</span>
                            <span className="bg-ncrst-blue/10 text-ncrst-blue px-2 py-1 rounded">
                              {bid.category}
                            </span>
                          </div>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            bid.status === "Open"
                              ? "bg-green-100 text-green-800"
                              : bid.status === "Closing Soon"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {bid.status}
                        </span>
                      </div>

                      <p className="text-ncrst-grey-dark mb-4 leading-body">
                        {bid.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <DollarSign size={16} className="text-ncrst-green" />
                          <span className="text-ncrst-grey-dark">
                            Value: <strong>{bid.value}</strong>
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} className="text-ncrst-blue" />
                          <span className="text-ncrst-grey-dark">
                            Published: {bid.publishDate}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={16} className="text-red-600" />
                          <span className="text-ncrst-grey-dark">
                            Closes: <strong>{bid.closingDate}</strong>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-ncrst-grey-light p-6">
                      <h4 className="font-semibold text-ncrst-grey mb-3">
                        Download Documents
                      </h4>
                      <div className="space-y-2">
                        {bid.documents.map((doc, idx) => (
                          <button
                            key={idx}
                            className="w-full text-left bg-white p-2 rounded text-sm hover:bg-ncrst-blue hover:text-white transition-colors flex items-center space-x-2"
                          >
                            <Download size={14} />
                            <span>{doc}</span>
                          </button>
                        ))}
                      </div>
                      <button className="w-full mt-4 bg-ncrst-blue text-white py-2 rounded-lg font-medium hover:bg-ncrst-blue/90 transition-colors">
                        Submit Bid
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Awarded Bids */}
      {activeTab === "awarded" && (
        <section id="awarded" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
                Awarded Bids
              </h2>
              <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
                Recently awarded contracts and their details for transparency
                and accountability.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-ncrst-grey text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Bid Details</th>
                      <th className="px-6 py-4 text-left">Awarded Vendor</th>
                      <th className="px-6 py-4 text-left">Award Value</th>
                      <th className="px-6 py-4 text-left">Award Date</th>
                      <th className="px-6 py-4 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {awardedBids.map((bid, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-medium text-ncrst-grey">
                              {bid.title}
                            </div>
                            <div className="text-sm text-ncrst-grey-dark">
                              Ref: {bid.reference}
                            </div>
                            <span className="bg-ncrst-blue/10 text-ncrst-blue px-2 py-1 rounded text-xs mt-1 inline-block">
                              {bid.category}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <Building size={16} className="text-ncrst-green" />
                            <span className="text-ncrst-grey">
                              {bid.vendor}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-medium text-ncrst-grey">
                            {bid.awardValue}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-ncrst-grey">
                              {bid.awardDate}
                            </div>
                            <div className="text-sm text-ncrst-grey-dark">
                              {bid.contractPeriod}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              bid.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : bid.status === "Completed"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {bid.status === "Active" && (
                              <CheckCircle size={12} className="mr-1" />
                            )}
                            {bid.status === "Completed" && (
                              <CheckCircle size={12} className="mr-1" />
                            )}
                            {bid.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Procurement Guidelines */}
      {activeTab === "guidelines" && (
        <section id="guidelines" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
                Procurement Guidelines
              </h2>
              <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
                Essential documents and guidelines for understanding NCRST's
                procurement processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {procurementGuidelines.map((guideline, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-ncrst-blue hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <FileText className="text-ncrst-blue" size={24} />
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {guideline.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                    {guideline.title}
                  </h3>
                  <p className="text-sm text-ncrst-grey-dark mb-4 leading-body">
                    {guideline.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-ncrst-grey-dark mb-4">
                    <span>Size: {guideline.size}</span>
                    <span>Updated: {guideline.lastUpdated}</span>
                  </div>
                  <button className="w-full bg-ncrst-blue text-white py-2 rounded-lg font-medium hover:bg-ncrst-blue/90 transition-colors flex items-center justify-center space-x-2">
                    <Download size={16} />
                    <span>Download</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Key Procurement Principles */}
            <div className="bg-ncrst-grey-light rounded-xl p-8">
              <h3 className="text-xl font-bold text-ncrst-grey mb-6 text-center leading-heading">
                Key Procurement Principles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-ncrst-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="text-ncrst-blue" size={24} />
                  </div>
                  <h4 className="font-bold text-ncrst-grey mb-2">
                    Transparency
                  </h4>
                  <p className="text-sm text-ncrst-grey-dark">
                    Open and transparent procurement processes
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-ncrst-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="text-ncrst-green" size={24} />
                  </div>
                  <h4 className="font-bold text-ncrst-grey mb-2">
                    Value for Money
                  </h4>
                  <p className="text-sm text-ncrst-grey-dark">
                    Optimal value through competitive processes
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-ncrst-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Building className="text-ncrst-grey" size={24} />
                  </div>
                  <h4 className="font-bold text-ncrst-grey mb-2">
                    Fair Competition
                  </h4>
                  <p className="text-sm text-ncrst-grey-dark">
                    Equal opportunities for all qualified suppliers
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <AlertCircle className="text-purple-600" size={24} />
                  </div>
                  <h4 className="font-bold text-ncrst-grey mb-2">
                    Accountability
                  </h4>
                  <p className="text-sm text-ncrst-grey-dark">
                    Responsible stewardship of public resources
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Submission Instructions */}
      {activeTab === "instructions" && (
        <section id="instructions" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
                Submission Instructions
              </h2>
              <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
                Step-by-step guide for preparing and submitting bid proposals to
                NCRST.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
                  Submission Process
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-ncrst-gold text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-2">
                        Download Bid Documents
                      </h4>
                      <p className="text-sm text-ncrst-grey-dark">
                        Obtain all required documents from the bid listing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-ncrst-gold text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-2">
                        Prepare Proposal
                      </h4>
                      <p className="text-sm text-ncrst-grey-dark">
                        Complete all required forms and compile supporting
                        documents
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-ncrst-gold text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-2">
                        Submit Before Deadline
                      </h4>
                      <p className="text-sm text-ncrst-grey-dark">
                        Submit via specified method before closing date and time
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-ncrst-gold text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-2">
                        Await Evaluation
                      </h4>
                      <p className="text-sm text-ncrst-grey-dark">
                        Evaluation committee reviews and scores all submissions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-ncrst-gold text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-2">
                        Award Notification
                      </h4>
                      <p className="text-sm text-ncrst-grey-dark">
                        Successful bidder notified and contract finalized
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-ncrst-grey text-white rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6 leading-heading">
                  Required Documents
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">
                      Company Documentation
                    </h4>
                    <ul className="text-sm space-y-1 opacity-90">
                      <li>• Valid business registration certificate</li>
                      <li>• Tax clearance certificate</li>
                      <li>• Social Security Commission compliance</li>
                      <li>• Company profile and organizational chart</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technical Proposal</h4>
                    <ul className="text-sm space-y-1 opacity-90">
                      <li>• Detailed technical specifications</li>
                      <li>• Implementation methodology</li>
                      <li>• Project timeline and milestones</li>
                      <li>• Quality assurance measures</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Financial Proposal</h4>
                    <ul className="text-sm space-y-1 opacity-90">
                      <li>• Detailed cost breakdown</li>
                      <li>• Payment schedule proposal</li>
                      <li>• Financial statements (last 3 years)</li>
                      <li>• Bank guarantee or performance bond</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-ncrst-grey-light rounded-xl p-8">
              <h3 className="text-xl font-bold text-ncrst-grey mb-6 text-center leading-heading">
                Procurement Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FileText className="text-ncrst-blue" size={24} />
                  </div>
                  <h4 className="font-bold text-ncrst-grey mb-2">
                    Bid Submissions
                  </h4>
                  <p className="text-sm text-ncrst-grey-dark">
                    procurement@ncrst.na
                  </p>
                  <p className="text-sm text-ncrst-grey-dark">
                    +264 61 431 7050
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Building className="text-ncrst-green" size={24} />
                  </div>
                  <h4 className="font-bold text-ncrst-grey mb-2">
                    Vendor Registration
                  </h4>
                  <p className="text-sm text-ncrst-grey-dark">
                    vendors@ncrst.na
                  </p>
                  <p className="text-sm text-ncrst-grey-dark">
                    +264 61 431 7051
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <AlertCircle className="text-ncrst-gold" size={24} />
                  </div>
                  <h4 className="font-bold text-ncrst-grey mb-2">
                    General Inquiries
                  </h4>
                  <p className="text-sm text-ncrst-grey-dark">info@ncrst.na</p>
                  <p className="text-sm text-ncrst-grey-dark">
                    +264 61 431 7000
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

export default Procurement;
