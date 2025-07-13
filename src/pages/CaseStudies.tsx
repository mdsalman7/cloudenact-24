
import { useState, useEffect } from "react";
import { ArrowRight, TrendingUp, DollarSign, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { IMAGES, getUnsplashImage, isExternalUrl } from "@/config/images";

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCaseStudies(data || []);
    } catch (error) {
      console.error('Error fetching case studies:', error);
      // Fallback to static data if database fails
      setCaseStudies(getStaticCaseStudies());
    } finally {
      setLoading(false);
    }
  };

  const getStaticCaseStudies = () => [
    {
      title: "E-commerce Platform Migration",
      client: "TechCommerce Inc.",
      industry: "E-commerce",
      challenge: "Legacy infrastructure causing frequent downtime and limiting scalability during peak seasons.",
      solution: "Complete migration to AWS with auto-scaling, containerization, and CDN implementation.",
      results: [],
      image_url: IMAGES.PLACEHOLDER_UNSPLASH.ECOMMERCE_TECH,
      testimonial: "CloudCompass transformed our entire infrastructure. We can now handle Black Friday traffic without breaking a sweat.",
      duration: "3 months",
      technologies: ["AWS", "Docker", "Kubernetes", "CloudFront"]
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

          {loading ? (
            <div className="text-center py-8">
              <div className="text-gray-500">Loading case studies...</div>
            </div>
          ) : caseStudies.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-gray-500">No case studies available at the moment.</div>
            </div>
          ) : (
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <Card key={study.id || index} className="overflow-hidden shadow-xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative">
                      <img 
                        src={isExternalUrl(study.image_url) 
                          ? study.image_url 
                          : getUnsplashImage(study.image_url || IMAGES.PLACEHOLDER_UNSPLASH.BLOG_DEFAULT, 600, 400)
                        }
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
                          {study.duration && <span>Duration: {study.duration}</span>}
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

                          {study.testimonial && (
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <p className="text-gray-600 italic">"{study.testimonial}"</p>
                            </div>
                          )}

                          {study.technologies && study.technologies.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
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
          )}
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
