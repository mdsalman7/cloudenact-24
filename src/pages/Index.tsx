
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, Cloud, Shield, Zap, HeadphonesIcon, Globe, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const stats = [
    { label: "Clients Served", value: "100+", icon: Users },
    { label: "Projects Completed", value: "300+", icon: CheckCircle },
    { label: "Awards Won", value: "15+", icon: Award },
    { label: "Yearly Growth", value: "25%", icon: TrendingUp },
  ];

  const testimonials = [
    {
      name: "Jane Doe",
      title: "CEO, Company ABC",
      quote: "CloudEnact transformed our business with their innovative cloud solutions. Highly recommended!",
    },
    {
      name: "John Smith",
      title: "CTO, Tech Solutions",
      quote: "Their expertise in cloud migration and security is unmatched. A true partner in our digital journey.",
    },
  ];

  const features = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum efficiency."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-grade security solutions to protect your data and applications in the cloud."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize your cloud resources for peak performance and cost-effectiveness."
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock expert support to ensure your cloud infrastructure runs smoothly."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Deploy and manage your applications across multiple regions worldwide."
    },
    {
      icon: Rocket,
      title: "Rapid Deployment",
      description: "Fast-track your cloud adoption with our proven methodologies and automation tools."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="lg:flex items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Unlock Your Business Potential with CloudEnact
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                We provide cutting-edge cloud solutions tailored to your unique business needs.
                From migration to optimization, we've got you covered.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/contact">Get Started Today <ArrowRight className="ml-2" /></Link>
              </Button>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/lovable-uploads/58a76519-3320-4263-886d-9ffbbaaca398.png"
                alt="Cloud Computing Solutions"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose CloudEnact?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver comprehensive cloud solutions that drive innovation, reduce costs, and accelerate your digital transformation journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent>
                  <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="ml-4">
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.title}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Transform Your Business with the Cloud?
          </h2>
          <p className="text-xl mb-12">
            Contact us today to learn more about our cloud solutions and how we can help you achieve your business goals.
          </p>
          <Button asChild variant="secondary">
            <Link to="/contact">Request a Consultation <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
