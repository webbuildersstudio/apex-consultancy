import { Users, Award, Target, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Strategic Excellence",
      description:
        "We deliver strategic solutions that align with your business objectives and drive measurable results.",
    },
    {
      icon: Users,
      title: "Client Partnership",
      description:
        "Building lasting relationships through collaboration, transparency, and unwavering commitment to your success.",
    },
    {
      icon: Award,
      title: "Proven Expertise",
      description:
        "Our team brings decades of industry experience and a track record of successful transformations.",
    },
    {
      icon: TrendingUp,
      title: "Innovation Focus",
      description:
        "Staying ahead of industry trends to provide cutting-edge solutions for modern business challenges.",
    },
  ];

  const team = [
    {
      name: "Sarah Thompson",
      role: "Managing Director",
      description:
        "With over 20 years in strategic consulting, Sarah leads our team with vision and expertise.",
    },
    {
      name: "Michael Rodriguez",
      role: "Senior Partner",
      description:
        "Michael specializes in operational excellence and digital transformation initiatives.",
    },
    {
      name: "Emily Chen",
      role: "Principal Consultant",
      description:
        "Emily brings deep expertise in financial advisory and risk management consulting.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Apex Consultancy
            </h1>
            <p className="text-xl text-blue-100">
              Empowering businesses to reach their full potential through expert
              guidance, strategic insights, and proven methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, Apex Consultancy emerged from a simple yet
                powerful vision: to help businesses navigate complexity and
                achieve sustainable growth. What started as a small team of
                passionate consultants has evolved into a trusted partner for
                organizations worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey has been marked by countless success stories, from
                helping startups scale to Fortune 500 companies optimize their
                operations. We&apos;ve learned that every business is unique, and our
                approach reflects this understanding.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to push boundaries, embracing new
                technologies and methodologies to deliver exceptional value to
                our clients. Our commitment to excellence remains unwavering.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800 mb-2">
                    500+
                  </div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800 mb-2">
                    200+
                  </div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800 mb-2">
                    15+
                  </div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800 mb-2">
                    95%
                  </div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we
              serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-blue-800" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the experts who drive our success and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-20 h-20 bg-gradient-to-br from-blue-800 to-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-blue-100 mb-8">
              To empower businesses with strategic insights, operational
              excellence, and transformative solutions that drive sustainable
              growth and competitive advantage in an ever-evolving marketplace.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Excellence</div>
                <div className="text-blue-200">In everything we deliver</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Innovation</div>
                <div className="text-blue-200">Driving future success</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Partnership</div>
                <div className="text-blue-200">
                  Building lasting relationships
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
