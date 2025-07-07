import {
  ArrowRight,
  Target,
  TrendingUp,
  Users,
  Briefcase,
  BarChart3,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: Target,
      title: "Strategic Planning",
      description:
        "Comprehensive strategic planning services to define your vision, set objectives, and create actionable roadmaps.",
      features: [
        "Market Analysis & Competitive Intelligence",
        "Strategic Roadmap Development",
        "Goal Setting & KPI Framework",
        "Implementation Planning",
      ],
    },
    {
      icon: TrendingUp,
      title: "Operations Management",
      description:
        "Optimize your operations for maximum efficiency, cost reduction, and improved performance.",
      features: [
        "Process Optimization",
        "Supply Chain Management",
        "Quality Management Systems",
        "Performance Metrics & Analytics",
      ],
    },
    {
      icon: Users,
      title: "Digital Transformation",
      description:
        "Navigate the digital landscape with technology solutions that drive innovation and growth.",
      features: [
        "Digital Strategy Development",
        "Technology Implementation",
        "Change Management",
        "Digital Culture Development",
      ],
    },
    {
      icon: Briefcase,
      title: "Financial Advisory",
      description:
        "Expert financial guidance to optimize your financial performance and strategic investments.",
      features: [
        "Financial Planning & Analysis",
        "Investment Strategy",
        "Risk Management",
        "Budgeting & Forecasting",
      ],
    },
    {
      icon: BarChart3,
      title: "Performance Optimization",
      description:
        "Enhance organizational performance through data-driven insights and proven methodologies.",
      features: [
        "Performance Measurement",
        "Benchmarking Analysis",
        "Efficiency Improvement",
        "Productivity Enhancement",
      ],
    },
    {
      icon: Shield,
      title: "Risk Management",
      description:
        "Comprehensive risk assessment and mitigation strategies to protect your business.",
      features: [
        "Risk Assessment & Analysis",
        "Compliance Management",
        "Crisis Management Planning",
        "Business Continuity",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We begin by understanding your business, challenges, and objectives through comprehensive analysis.",
    },
    {
      step: "02",
      title: "Strategy",
      description:
        "Our experts develop tailored strategies based on industry best practices and your unique needs.",
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "We work alongside your team to execute solutions with minimal disruption to operations.",
    },
    {
      step: "04",
      title: "Optimization",
      description:
        "Continuous monitoring and refinement ensure sustained success and measurable results.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100">
              Comprehensive consulting solutions designed to transform your
              business and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategic planning to digital transformation, we provide
              end-to-end solutions tailored to your industry and business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-blue-800" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology that ensures successful outcomes for every
              engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-blue-200 transform -translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Deep industry expertise across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Technology",
              "Healthcare",
              "Manufacturing",
              "Financial Services",
              "Retail",
              "Energy",
              "Education",
              "Non-Profit",
            ].map((industry, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-lg font-semibold text-gray-900">
                  {industry}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business
            objectives and drive sustainable growth.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900"
          >
            <Link href="/contact">
              Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
