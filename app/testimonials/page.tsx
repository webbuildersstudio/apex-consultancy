import { Star, Quote, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Apex Consultancy transformed our business operations, resulting in a 40% increase in efficiency and significant cost savings. Their team's expertise in process optimization was exactly what we needed.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
      rating: 5,
      results: "40% efficiency increase, 25% cost reduction",
    },
    {
      quote:
        "Their strategic planning expertise helped us expand into new markets successfully. The roadmap they developed was comprehensive and actionable, leading to a 60% revenue growth in the first year.",
      author: "Michael Chen",
      role: "Director, Global Solutions",
      rating: 5,
      results: "60% revenue growth, 3 new markets entered",
    },
    {
      quote:
        "Professional, insightful, and results-driven. Exactly what we needed for our growth phase. The digital transformation strategy they implemented modernized our entire operation.",
      author: "Emma Rodriguez",
      role: "Founder, StartupX",
      rating: 5,
      results: "Complete digital transformation, 50% productivity boost",
    },
    {
      quote:
        "The financial advisory services provided by Apex Consultancy helped us optimize our capital structure and improve our cash flow management. Outstanding results and professional service.",
      author: "David Thompson",
      role: "CFO, ManufacturingPlus",
      rating: 5,
      results: "Improved cash flow by 35%, optimized capital structure",
    },
    {
      quote:
        "Working with Apex Consultancy was a game-changer for our organization. Their risk management framework helped us identify and mitigate potential issues before they became problems.",
      author: "Jennifer Liu",
      role: "COO, HealthTech Solutions",
      rating: 5,
      results: "Risk reduction by 45%, improved compliance",
    },
    {
      quote:
        "The operational excellence program delivered by Apex Consultancy exceeded our expectations. We saw immediate improvements in productivity and quality metrics across all departments.",
      author: "Robert Martinez",
      role: "VP Operations, RetailGroup",
      rating: 5,
      results: "30% productivity increase, 20% quality improvement",
    },
  ];

  const stats = [
    { value: "95%", label: "Client Satisfaction Rate" },
    { value: "500+", label: "Projects Completed" },
    { value: "200+", label: "Happy Clients" },
    { value: "15+", label: "Years of Experience" },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-blue-100">
              Discover how we&apos;ve helped businesses like yours achieve remarkable
              results and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real clients who have experienced
              transformational results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm font-medium text-gray-600">
                      Verified Client
                    </span>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 h-6 w-6 text-blue-200" />
                    <blockquote className="text-gray-700 italic pl-4">
                      {testimonial.quote}
                    </blockquote>
                  </div>

                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900 mb-1">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600 mb-3">
                      {testimonial.role}
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-sm font-medium text-blue-800 mb-1">
                        Results Achieved:
                      </div>
                      <div className="text-sm text-blue-700">
                        {testimonial.results}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              We&apos;re proud to work with companies across various industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Fortune 500",
              "Technology",
              "Healthcare",
              "Manufacturing",
              "Financial Services",
              "Retail",
              "Energy",
              "Startups",
            ].map((category, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md"
              >
                <div className="text-lg font-semibold text-gray-900">
                  {category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Success Stories</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to achieve similar results for your business? Let&apos;s discuss
            how we can help you reach your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-3 px-8 rounded-lg transition-colors">
              Schedule Consultation
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-8 rounded-lg transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
