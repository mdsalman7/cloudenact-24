import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, DollarSign, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { staticJobPostings } from "@/data/staticData";

const Careers = () => {
  const jobs = staticJobPostings.filter(job => job.is_active);

  const stats = [
    { icon: Users, label: "Team Members", value: "50+" },
    { icon: Briefcase, label: "Open Positions", value: jobs.length.toString() },
    { icon: MapPin, label: "Locations", value: "5+" },
    { icon: DollarSign, label: "Competitive Pay", value: "Always" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">Join Our Team</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build the future of cloud technology with us. We're looking for passionate individuals 
              who want to make a real impact in the world of cloud computing.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground">Find your next career opportunity</p>
          </div>

          {jobs.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-muted-foreground">No open positions at the moment. Check back soon!</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobs.map((job) => (
                <Card key={job.id} className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl text-foreground">{job.title}</CardTitle>
                      <Badge variant="secondary">{job.type}</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-2" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {job.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{job.description}</p>
                    
                    {job.requirements && job.requirements.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-foreground">Requirements:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {job.requirements.slice(0, 3).map((req: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <Button className="w-full">Apply Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;