
import { ArrowRight, TrendingUp, DollarSign, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-commerce Platform Migration",
      client: "TechCommerce Inc.",
      industry: "E-commerce",
      challenge: "Legacy infrastructure causing frequent downtime and limiting scalability during peak seasons.",
      solution: "Complete migration to AWS with auto-scaling, containerization, and CDN implementation.",
      results: [
        { metric: "Uptime", value: "99.9%", improvement: "+15%" },
        { metric: "Load Time", value: "0.8s", improvement: "-60%" },
        { metric: "Cost Savings", value: "$50K/year", improvement: "-35%" },
        { metric: "Scalability", value: "10x", improvement: "+900%" }
      ],
      image: "photo-1498050108023-c5249f4df085",
      testimonial: "CloudCompass transformed our entire infrastructure. We can now handle Black Friday traffic without breaking a sweat.",
      duration: "3 months",
      technologies: ["AWS", "Docker", "Kubernetes", "CloudFront"]
    },
    {
      title: "Healthcare Data Analytics Platform",
      client: "MediCare Solutions",
      industry: "Healthcare",
      challenge: "Need for HIPAA-compliant data analytics platform to process patient data and generate insights.",
      solution: "Built secure data lake on Azure with advanced analytics and machine learning capabilities.",
      results: [
        { metric: "Data Processing", value: "10TB/day", improvement: "+500%" },
        { metric: "Compliance Score", value: "100%", improvement: "HIPAA Certified" },
        { metric: "Analysis Time", value: "2 hours", improvement: "-80%" },
        { metric: "Cost per Query", value: "$0.05", improvement: "-70%" }
      ],
      image: "photo-1581091226825-a6a2a5aee158",
      testimonial: "The analytics platform has revolutionized how we understand patient care patterns and outcomes.",
      duration: "6 months",
      technologies: ["Azure", "Data Lake", "Power BI", "Machine Learning"]
    },
    {
      title: "Financial Services DevOps Transformation",
      client: "SecureBank Corp",
      industry: "Financial Services",
      challenge: "Slow deployment cycles and manual processes affecting time-to-market for new features.",
      solution: "Implemented comprehensive DevOps pipeline with automated testing, security scanning, and deployment.",
      results: [
        { metric: "Deployment Frequency", value: "Daily", improvement: "+2000%" },
        { metric: "Lead Time", value: "2 days", improvement: "-90%" },
        { metric: "Security Issues", value: "0", improvement: "-100%" },
        { metric: "Developer Productivity", value: "40%", improvement: "+40%" }
      ],
      image: "photo-1531297484001-80022131f5a1",
      testimonial: "Our development velocity has increased dramatically while maintaining the highest security standards.",
      duration: "4 months",
      technologies: ["Jenkins", "Docker", "Terraform", "SonarQube"]
    },
    {
      title: "Manufacturing IoT Cloud Integration",
      client: "SmartFactory Ltd",
      industry: "Manufacturing",
      challenge: "Isolated manufacturing systems needed integration for real-time monitoring and predictive maintenance.",
      solution: "Connected IoT devices to cloud platform with real-time analytics and predictive maintenance algorithms.",
      results: [
        { metric: "Equipment Uptime", value: "98%", improvement: "+12%" },
        { metric: "Maintenance Costs", value: "$200K", improvement: "-40%" },
        { metric: "Production Efficiency", value: "25%", improvement: "+25%" },
        { metric: "Defect Rate", value: "0.1%", improvement: "-80%" }
      ],
      image: "photo-1605810230434-7631ac76ec81",
      testimonial: "The IoT integration has given us unprecedented visibility into our operations and prevented costly breakdowns.",
      duration: "5 months",
      technologies: ["AWS IoT", "Lambda", "DynamoDB", "QuickSight"]
    }
  ];

  const metrics = [
    { value: "500+", label: "Projects Completed", icon: TrendingUp },
    { value: "$50M+", label: "Cost Savings Generated", icon: DollarSign },
    { value: "99.5%", label: "Average Uptime", icon: Clock },
    { value: "98%", label: "Client Satisfaction", icon: Users }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Success Stories</h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover how we've helped businesses across industries achieve their cloud transformation goals 
              and drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <metric.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600">Real transformations, real results</p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative">
                    <img 
                      src={`https://images.unsplash.com/${study.image}?auto=format&fit=crop&w=600&q=80`}
                      alt={study.title}
                      className="w-full h-full object-cover min-h-[400px]"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{study.industry}</Badge>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{study.title}</h3>
                      <p className="text-blue-600 font-semibold">{study.client}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                        <span>Duration: {study.duration}</span>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Results</h4>
                          <div className="grid grid-cols-2 gap-4">
                            {study.results.map((result, resultIndex) => (
                              <div key={resultIndex} className="bg-blue-50 p-3 rounded-lg">
                                <div className="text-2xl font-bold text-blue-600">{result.value}</div>
                                <div className="text-sm text-gray-600">{result.metric}</div>
                                <div className="text-xs text-green-600 font-medium">{result.improvement}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-gray-600 italic">"{study.testimonial}"</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline">{tech}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Transform</h2>
            <p className="text-xl text-gray-600">Success across diverse sectors</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Healthcare", "Finance", "E-commerce", "Manufacturing", "Education", "Startups"].map((industry, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold">{industry}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of successful companies that have transformed their business with our cloud solutions.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Start Your Transformation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
