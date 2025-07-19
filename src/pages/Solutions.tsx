import { Cloud, Shield, Zap, Database, Settings, Users, ArrowRight, CheckCircle, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { staticSolutions } from "@/data/staticData";

const Solutions = () => {
  const solutions = staticSolutions;

  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: any } = {
      Cloud, Shield, Zap, Database, Settings, Users, BarChart3
    };
    return icons[iconName] || Cloud;
  };

  const industries = [
    { name: "Healthcare", description: "HIPAA-compliant cloud solutions for healthcare providers" },
    { name: "Financial Services", description: "Secure, regulated cloud infrastructure for financial institutions" },
    { name: "E-commerce", description: "Scalable cloud platforms for online retail businesses" },
    { name: "Manufacturing", description: "IoT and cloud integration for smart manufacturing" },
    { name: "Education", description: "Cloud solutions for educational institutions and e-learning" },
    { name: "Startups", description: "Cost-effective cloud strategies for growing businesses" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">Cloud Solutions</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive cloud services designed to accelerate your digital transformation 
              and drive business growth across every stage of your cloud journey.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact">
                Get Custom Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Service Offerings</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From migration to optimization, we provide end-to-end cloud solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = getIconComponent(solution.icon);
              return (
                <Card key={solution.id || index} className="hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader className="text-center pb-4">
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2 text-foreground">{solution.title}</h3>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0 flex-1 flex flex-col">
                    <ul className="space-y-2 mb-6 flex-1">
                      {(solution.features || []).map((feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-center border-t pt-4">
                      <div className="text-2xl font-bold text-primary mb-4">{solution.price}</div>
                      <Button asChild className="w-full">
                        <Link to="/contact">Learn More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Proven Process</h2>
            <p className="text-xl text-muted-foreground">A systematic approach to ensure successful cloud transformation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Discovery & Assessment</h3>
              <p className="text-muted-foreground">We analyze your current infrastructure and identify optimization opportunities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Strategy & Planning</h3>
              <p className="text-muted-foreground">We develop a comprehensive cloud strategy tailored to your business goals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Implementation</h3>
              <p className="text-muted-foreground">Our experts execute the plan with minimal disruption to your operations.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Optimization & Support</h3>
              <p className="text-muted-foreground">Ongoing monitoring and optimization to ensure peak performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground">Specialized solutions for diverse industry requirements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{industry.name}</h3>
                  <p className="text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
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
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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