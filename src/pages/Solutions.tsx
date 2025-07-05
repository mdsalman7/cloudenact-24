
import { Cloud, Shield, Zap, Database, Settings, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Solutions = () => {
  const solutions = [
    {
      icon: Cloud,
      title: "Cloud Migration Services",
      description: "Seamlessly migrate your applications and data to the cloud with minimal downtime.",
      features: ["Assessment & Planning", "Lift & Shift Migration", "Re-architecting", "Hybrid Cloud Setup"],
      price: "Starting at $10,000",
      popular: false
    },
    {
      icon: Shield,
      title: "Cloud Security & Compliance",
      description: "Comprehensive security solutions to protect your cloud infrastructure and ensure compliance.",
      features: ["Security Audits", "Compliance Framework", "Identity Management", "24/7 Monitoring"],
      price: "Starting at $5,000",
      popular: true
    },
    {
      icon: Zap,
      title: "DevOps & Automation",
      description: "Streamline your development processes with advanced DevOps practices and automation.",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration", "Monitoring & Logging"],
      price: "Starting at $8,000",
      popular: false
    },
    {
      icon: Database,
      title: "Data Analytics & AI",
      description: "Unlock insights from your data with advanced analytics and machine learning solutions.",
      features: ["Data Lake Architecture", "Real-time Analytics", "ML Model Deployment", "Business Intelligence"],
      price: "Starting at $15,000",
      popular: false
    },
    {
      icon: Settings,
      title: "Cloud Optimization",
      description: "Optimize your cloud resources for maximum performance and cost efficiency.",
      features: ["Cost Analysis", "Performance Tuning", "Resource Right-sizing", "Multi-cloud Strategy"],
      price: "Starting at $3,000",
      popular: false
    },
    {
      icon: Users,
      title: "Managed Cloud Services",
      description: "Complete cloud management and support services for your peace of mind.",
      features: ["24/7 Support", "Proactive Monitoring", "Backup & Recovery", "Maintenance & Updates"],
      price: "Starting at $2,000/month",
      popular: false
    }
  ];

  const industries = [
    { name: "Healthcare", description: "HIPAA-compliant cloud solutions for healthcare providers" },
    { name: "Financial Services", description: "Secure, regulated cloud infrastructure for financial institutions" },
    { name: "E-commerce", description: "Scalable cloud platforms for online retail businesses" },
    { name: "Manufacturing", description: "IoT and cloud integration for smart manufacturing" },
    { name: "Education", description: "Cloud solutions for educational institutions and e-learning" },
    { name: "Startups", description: "Cost-effective cloud strategies for growing businesses" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Cloud Solutions</h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive cloud services designed to accelerate your digital transformation 
              and drive business growth across every stage of your cloud journey.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/contact">
                Get Custom Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Offerings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From migration to optimization, we provide end-to-end cloud solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${solution.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {solution.popular && (
                  <Badge className="absolute -top-3 left-6 bg-blue-600">Most Popular</Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <solution.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center border-t pt-4">
                    <div className="text-2xl font-bold text-blue-600 mb-4">{solution.price}</div>
                    <Button asChild className="w-full">
                      <Link to="/contact">Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600">A systematic approach to ensure successful cloud transformation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Discovery & Assessment</h3>
              <p className="text-gray-600">We analyze your current infrastructure and identify optimization opportunities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Strategy & Planning</h3>
              <p className="text-gray-600">We develop a comprehensive cloud strategy tailored to your business goals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600">Our experts execute the plan with minimal disruption to your operations.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Optimization & Support</h3>
              <p className="text-gray-600">Ongoing monitoring and optimization to ensure peak performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Specialized solutions for diverse industry requirements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Cloud Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our cloud solutions can transform your business and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-blue-600 hover:bg-white hover:text-blue-600">
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
