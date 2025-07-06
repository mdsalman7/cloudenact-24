
import { Users, Award, Target, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We challenge the status quo with creative, forward-thinking solutions."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Transparency and accountability in everything we do."
    },
    {
      icon: Users,
      title: "Customer-Centricity",
      description: "Your goals shape our strategies and drive our solutions."
    },
    {
      icon: Lightbulb,
      title: "Excellence",
      description: "Delivering high-performance solutions with quality and precision."
    }
  ];

  const team = [
    {
      name: "Alex Rodriguez",
      role: "CEO & Cloud Architect",
      image: "photo-1581091226825-a6a2a5aee158",
      description: "15+ years of experience in cloud architecture and digital transformation."
    },
    {
      name: "Sarah Chen",
      role: "CTO & DevOps Lead",
      image: "photo-1649972904349-6e44c42644a7",
      description: "Expert in DevOps, automation, and cloud security with 12+ years of experience."
    },
    {
      name: "Michael Johnson",
      role: "Solutions Director",
      image: "photo-1581092795360-fd1ca04f0952",
      description: "Specialized in enterprise cloud migrations and optimization strategies."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About CloudEnact</h1>
            <p className="text-xl text-gray-600 mb-8">
              At CloudEnact, we turn cloud complexity into clarity. We help startups, SMEs, and enterprises 
              confidently navigate their cloud journey with end-to-end consulting, migration, and DevOps services 
              across AWS, Azure, and Google Cloud.
            </p>
            <p className="text-lg text-gray-600">
              Your success in the cloud isn't just possible — it's enacted.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  At CloudEnact, we empower businesses to unlock their full potential through intelligent 
                  cloud solutions. Founded on the principles of agility, innovation, and trust, we specialize 
                  in transforming traditional IT infrastructures into scalable, secure, and cost-efficient 
                  cloud environments.
                </p>
                <p>
                  With deep expertise in AWS, Azure, Google Cloud, and hybrid cloud ecosystems, our team 
                  delivers tailored consulting, migration, and optimization services that align with your 
                  unique business goals. Whether you're a startup embracing digital growth or an enterprise 
                  modernizing legacy systems, we enact seamless cloud transformations that drive results.
                </p>
                <p>
                  What sets us apart is our commitment to action — we don't just design strategies; we 
                  implement them. From architecture planning to DevOps automation and continuous monitoring, 
                  CloudEnact provides end-to-end cloud enablement with measurable impact.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={`https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80`}
                alt="Our Office"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg">
                  To help businesses thrive in the cloud era by delivering reliable, scalable, 
                  and future-ready cloud solutions that drive measurable outcomes and long-term success.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg">
                  To be the most trusted partner for organizations navigating digital transformation 
                  through the cloud, recognized for our innovation, expertise, and transformative impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AWS Partnership Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">AWS Select Tier Partner</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              As an AWS Select Tier Partner, we demonstrate proven technical expertise and customer success 
              in delivering AWS cloud solutions. This partnership validates our commitment to excellence 
              and provides our clients with additional benefits and support.
            </p>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/61375615-6fde-4030-befa-dd906c44a262.png" 
                alt="AWS Partner Select Tier Services" 
                className="h-32 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals leading the way in cloud innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <img 
                    src={`https://images.unsplash.com/${member.image}?auto=format&fit=crop&w=300&q=80`}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl opacity-90">Numbers that speak to our success</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="opacity-90">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="opacity-90">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="opacity-90">Expert Consultants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="opacity-90">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
