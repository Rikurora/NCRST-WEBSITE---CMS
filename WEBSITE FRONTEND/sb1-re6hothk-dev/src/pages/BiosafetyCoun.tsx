import React from "react";
import {
  Shield,
  FileText,
  Users,
  AlertTriangle,
  Download,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";

const BiosafetyCouncil: React.FC = () => {
  const committeeMembers = [
    {
      name: "Prof. Dr. Martha Kandawa-Schulz",
      role: "Chairperson",
    },
    {
      name: "Ms Priska Naimhwaka",
      role: "Member",
    },
    {
      name: "Ms Victoria Weyulu",
      role: "Member",
    },
    {
      name: "Mr Salomon Tsanigab",
      role: "Member",
    },
    {
      name: "Dr Milton Maseke",
      role: "Member",
    },
    {
      name: "Dr Natasha Cheikhyoussef",
      role: "Member",
    },
    {
      name: "Mr Moses Moses",
      role: "Member",
    },
  ];

  const applicationTypes = [
    {
      type: "Contained Use",
      description:
        "Laboratory research involving genetically modified organisms in contained facilities",
      timeline: "30-45 days",
      fee: "N$2,500",
      requirements: [
        "Risk assessment",
        "Containment measures",
        "Waste management plan",
      ],
    },
    {
      type: "Deliberate Release",
      description:
        "Field trials and environmental release of genetically modified organisms",
      timeline: "90-120 days",
      fee: "N$15,000",
      requirements: [
        "Environmental risk assessment",
        "Monitoring plan",
        "Emergency response plan",
      ],
    },
    {
      type: "Import/Export",
      description:
        "Import or export of genetically modified organisms and products",
      timeline: "14-21 days",
      fee: "N$1,000",
      requirements: [
        "Product documentation",
        "Country of origin permits",
        "Transport protocols",
      ],
    },
    {
      type: "Commercial Use",
      description: "Commercial production and marketing of GMO products",
      timeline: "120-180 days",
      fee: "N$25,000",
      requirements: [
        "Comprehensive risk assessment",
        "Labeling plan",
        "Post-market monitoring",
      ],
    },
  ];

  const faqs = [
    {
      question: "What is biosafety and why is it important?",
      answer:
        "Biosafety refers to the safe handling, use, and management of biological materials, particularly genetically modified organisms (GMOs), to prevent adverse effects on human health and the environment.",
    },
    {
      question: "Do I need a permit for all GMO-related activities?",
      answer:
        "Yes, the Biosafety Act requires permits for contained use, deliberate release, import/export, and commercial use of GMOs. Exemptions may apply for certain research activities.",
    },
    {
      question: "How long does the permit application process take?",
      answer:
        "Processing times vary by application type: Import/Export (14-21 days), Contained Use (30-45 days), Deliberate Release (90-120 days), Commercial Use (120-180 days).",
    },
    {
      question: "What happens if I conduct GMO activities without a permit?",
      answer:
        "Unauthorized GMO activities are illegal under the Biosafety Act and may result in fines, imprisonment, and immediate cessation of activities.",
    },
    {
      question: "Can I appeal a permit decision?",
      answer:
        "Yes, applicants have the right to appeal permit decisions to the Minister within 30 days of receiving the decision.",
    },
  ];

  const downloadableForms = [
    {
      title: "Contained Use Application Form",
      description: "Application for laboratory research involving GMOs",
      fileType: "PDF",
      size: "1.2 MB",
    },
    {
      title: "Deliberate Release Application Form",
      description: "Application for field trials and environmental release",
      fileType: "PDF",
      size: "2.8 MB",
    },
    {
      title: "Import/Export Permit Form",
      description: "Application for importing or exporting GMOs",
      fileType: "PDF",
      size: "850 KB",
    },
    {
      title: "Risk Assessment Guidelines",
      description:
        "Comprehensive guide for conducting biosafety risk assessments",
      fileType: "PDF",
      size: "4.5 MB",
    },
    {
      title: "Monitoring and Reporting Template",
      description: "Template for post-approval monitoring reports",
      fileType: "DOC",
      size: "320 KB",
    },
    {
      title: "Emergency Response Protocol",
      description: "Guidelines for emergency response in case of GMO incidents",
      fileType: "PDF",
      size: "1.8 MB",
    },
  ];

  const recentDecisions = [
    {
      applicant: "AgriTech Research Institute",
      activity: "Field trial of drought-resistant maize",
      decision: "Approved",
      date: "January 15, 2025",
      status: "approved",
    },
    {
      applicant: "BioNamibia Ltd",
      activity: "Import of GM cotton seeds for research",
      decision: "Approved with conditions",
      date: "January 10, 2025",
      status: "conditional",
    },
    {
      applicant: "University Research Lab",
      activity: "Contained use of modified bacteria",
      decision: "Under review",
      date: "December 20, 2024",
      status: "pending",
    },
    {
      applicant: "International Seed Company",
      activity: "Commercial release of GM soybeans",
      decision: "Rejected",
      date: "December 15, 2024",
      status: "rejected",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-gradient-to-r from-ncrst-grey to-ncrst-gold text-white py-32 min-h-[80vh] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-heading">
              Biosafety Council
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-body opacity-90">
              Ensuring the safe development, handling, and use of genetically
              modified organisms to protect human health and the environment.
            </p>
          </div>
        </div>
      </section>

      {/* Regulatory Framework Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Regulatory Framework
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Comprehensive biosafety regulation based on international best
              practices and scientific risk assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="text-ncrst-green" size={32} />
                <h3 className="text-2xl font-bold text-ncrst-grey leading-heading">
                  Biosafety Act (2006)
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-ncrst-grey-dark leading-body">
                  The Biosafety Act provides the legal framework for regulating
                  genetically modified organisms in Namibia, ensuring safety
                  while promoting beneficial biotechnology applications.
                </p>
                <div>
                  <h4 className="font-semibold text-ncrst-grey mb-2">
                    Key Provisions
                  </h4>
                  <ul className="space-y-1 text-sm text-ncrst-grey-dark">
                    <li>• Mandatory permits for GMO activities</li>
                    <li>• Risk assessment requirements</li>
                    <li>• Public participation mechanisms</li>
                    <li>• Monitoring and enforcement powers</li>
                    <li>• Liability and compensation provisions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-ncrst-grey text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 leading-heading">
                Regulatory Principles
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Science-Based Assessment
                    </h4>
                    <p className="text-sm opacity-90">
                      Decisions based on rigorous scientific risk assessment
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Precautionary Approach
                    </h4>
                    <p className="text-sm opacity-90">
                      Caution when scientific evidence is insufficient
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Transparency</h4>
                    <p className="text-sm opacity-90">
                      Open and transparent decision-making process
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Public Participation</h4>
                    <p className="text-sm opacity-90">
                      Meaningful stakeholder engagement and consultation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Application Types */}
          <div className="bg-ncrst-grey-light rounded-xl p-8">
            <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
              Permit Application Types
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {applicationTypes.map((app, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-ncrst-grey mb-2 leading-heading">
                    {app.type}
                  </h4>
                  <p className="text-sm text-ncrst-grey-dark mb-4 leading-body">
                    {app.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-ncrst-grey-dark">
                        Processing time:
                      </span>
                      <span className="font-medium text-ncrst-grey">
                        {app.timeline}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ncrst-grey-dark">
                        Application fee:
                      </span>
                      <span className="font-medium text-ncrst-grey">
                        {app.fee}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h5 className="font-medium text-ncrst-grey mb-2">
                      Key Requirements:
                    </h5>
                    <ul className="text-xs text-ncrst-grey-dark space-y-1">
                      {app.requirements.map((req, idx) => (
                        <li key={idx}>• {req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* National Biosafety Committee */}
      <section className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              National Biosafety Committee
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Expert advisory body providing scientific and technical guidance
              on biosafety matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {committeeMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-ncrst-green/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Users className="text-ncrst-green" size={20} />
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
                      Expertise:{" "}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-ncrst-grey">
                      Institution:{" "}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
              Committee Functions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-ncrst-grey mb-3">
                  Advisory Functions
                </h4>
                <ul className="space-y-2 text-sm text-ncrst-grey-dark">
                  <li>• Review and evaluate permit applications</li>
                  <li>• Provide scientific and technical advice</li>
                  <li>• Assess environmental and health risks</li>
                  <li>• Recommend approval conditions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-ncrst-grey mb-3">
                  Regulatory Support
                </h4>
                <ul className="space-y-2 text-sm text-ncrst-grey-dark">
                  <li>• Develop technical guidelines</li>
                  <li>• Review monitoring reports</li>
                  <li>• Investigate biosafety incidents</li>
                  <li>• Advise on policy development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process & Forms */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Application Process & Forms
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Download application forms and guidelines for biosafety permit
              applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {downloadableForms.map((form, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-ncrst-green hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <FileText className="text-ncrst-green" size={24} />
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {form.fileType}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                  {form.title}
                </h3>
                <p className="text-sm text-ncrst-grey-dark mb-4 leading-body">
                  {form.description}
                </p>
                <div className="flex items-center justify-between text-xs text-ncrst-grey-dark mb-4">
                  <span>Size: {form.size}</span>
                </div>
                <button className="w-full bg-ncrst-blue text-white py-2 rounded-lg font-medium hover:bg-ncrst-gold/90 transition-colors flex items-center justify-center space-x-2">
                  <Download size={16} />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>

          {/* Application Process Steps */}
          <div className="bg-ncrst-grey text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center leading-heading">
              Application Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Pre-Application</h4>
                <p className="text-sm opacity-90">Consultation and guidance</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Submit Application</h4>
                <p className="text-sm opacity-90">
                  Complete forms and documents
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Technical Review</h4>
                <p className="text-sm opacity-90">
                  Expert committee assessment
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold">4</span>
                </div>
                <h4 className="font-semibold mb-2">Public Consultation</h4>
                <p className="text-sm opacity-90">
                  Stakeholder input (if required)
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold">5</span>
                </div>
                <h4 className="font-semibold mb-2">Decision</h4>
                <p className="text-sm opacity-90">Permit issued or denied</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Decisions */}
      <section className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Recent Permit Decisions
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Transparency in biosafety decision-making through public
              disclosure of permit decisions.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-ncrst-grey text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Applicant</th>
                    <th className="px-6 py-4 text-left">Activity</th>
                    <th className="px-6 py-4 text-left">Decision</th>
                    <th className="px-6 py-4 text-left">Date</th>
                    <th className="px-6 py-4 text-left">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentDecisions.map((decision, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="font-medium text-ncrst-grey">
                          {decision.applicant}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-ncrst-grey-dark">
                          {decision.activity}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-ncrst-grey">
                          {decision.decision}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-ncrst-grey-dark">
                          {decision.date}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            decision.status === "approved"
                              ? "bg-green-100 text-green-800"
                              : decision.status === "conditional"
                              ? "bg-yellow-100 text-yellow-800"
                              : decision.status === "pending"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {decision.status === "approved" && (
                            <CheckCircle size={12} className="mr-1" />
                          )}
                          {decision.status === "conditional" && (
                            <AlertTriangle size={12} className="mr-1" />
                          )}
                          {decision.status === "pending" && (
                            <Clock size={12} className="mr-1" />
                          )}
                          {decision.status === "rejected" && (
                            <XCircle size={12} className="mr-1" />
                          )}
                          {decision.status.charAt(0).toUpperCase() +
                            decision.status.slice(1)}
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

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Common questions about biosafety regulation and permit
              requirements.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                  {faq.question}
                </h3>
                <p className="text-ncrst-grey-dark leading-body">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-ncrst-blue text-white rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 leading-heading">
                Need More Information?
              </h3>
              <p className="mb-6 opacity-90 leading-body">
                Contact our biosafety team for guidance on permit applications
                and regulatory requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-ncrst-green px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Biosafety Team
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-ncrst-green transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BiosafetyCouncil;
