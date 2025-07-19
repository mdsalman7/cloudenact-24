import { ArrowRight, TrendingUp, DollarSign, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { staticCaseStudies } from "@/data/staticData";

const CaseStudies = () => {
  const caseStudies = staticCaseStudies;

  const metrics = [
    { value: "500+", label: "Projects Completed", icon: TrendingUp },
    { value: "$50M+", label: "Cost Savings Generated", icon: DollarSign },
    { value: "99.5%", label: "Average Uptime", icon: Clock },
    { value: "98%", label: "Client Satisfaction", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">Success Stories</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover how we've helped businesses across industries achieve their cloud transformation goals 
              and drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <metric.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-foreground mb-1">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Case Studies</h2>
            <p className="text-xl text-muted-foreground">Real transformations, real results</p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={study.id || index} className="overflow-hidden shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative">
                    <img 
                      src={study.image_url}
                      alt={study.title}
                      className="w-full h-full object-cover min-h-[400px]"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{study.industry}</Badge>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <h3 className="text-3xl font-bold text-foreground mb-2">{study.title}</h3>
                      <p className="text-primary font-semibold">{study.client}</p>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                          <p className="text-muted-foreground">{study.description}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Results</h4>
                          <p className="text-muted-foreground">{study.results}</p>
                        </div>

                        {study.technologies && study.technologies.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {study.technologies.map((tech: string, techIndex: number) => (
                                <Badge key={techIndex} variant="outline">{tech}</Badge>
                              ))}
                            </div>
                          </div>
                        )}
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Industries We Transform</h2>
            <p className="text-xl text-muted-foreground">Success across diverse sectors</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Healthcare", "Finance", "E-commerce", "Manufacturing", "Education", "Startups"].map((industry, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground">{industry}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
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