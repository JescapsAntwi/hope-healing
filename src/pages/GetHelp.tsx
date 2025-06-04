
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Phone, Shield, Heart, Users, Search, Calendar } from 'lucide-react';

const GetHelp = () => {
  const immediateHelp = [
    {
      title: "National Crisis Hotline",
      description: "24/7 confidential support for those in immediate danger",
      contact: "1-800-HELP-NOW",
      type: "Emergency"
    },
    {
      title: "Local Emergency Services",
      description: "For immediate physical danger",
      contact: "911",
      type: "Emergency"
    },
    {
      title: "Crisis Text Line",
      description: "Text-based support available 24/7",
      contact: "Text HOPE to 741741",
      type: "Crisis Support"
    }
  ];

  const services = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Emergency Shelters",
      description: "Safe, temporary housing for survivors and their families",
      features: ["24/7 access", "Confidential locations", "Family accommodations"],
      action: "Find Shelter"
    },
    {
      icon: <Heart className="h-8 w-8 text-secondary" />,
      title: "Counseling Services",
      description: "Professional mental health support and therapy",
      features: ["Individual therapy", "Group sessions", "Trauma-informed care"],
      action: "Find Counselor"
    },
    {
      icon: <Users className="h-8 w-8 text-purple" />,
      title: "Legal Aid",
      description: "Legal assistance and advocacy services",
      features: ["Restraining orders", "Legal representation", "Court advocacy"],
      action: "Find Legal Help"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              Get Help Now
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Find immediate support, safe spaces, and professional services. 
              You deserve safety, support, and respect.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-warm hover:bg-warm/90 text-white animate-pulse"
            >
              <Link to="/emergency" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Emergency Help</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Immediate Help Section */}
      <section className="py-12 bg-red-50 border-l-4 border-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl text-gray-900 mb-6 text-center">
            Immediate Help Available 24/7
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {immediateHelp.map((help, index) => (
              <Card key={index} className="border-2 border-red-200">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{help.title}</CardTitle>
                    <Badge variant="destructive">{help.type}</Badge>
                  </div>
                  <CardDescription>{help.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-warm mb-4">{help.contact}</div>
                  <Button className="w-full bg-warm hover:bg-warm/90">
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Directory */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-gray-900 mb-4">
              Support Services Directory
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support services to help you on your journey to safety and healing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline">
                    {service.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Search className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h2 className="font-heading font-bold text-3xl text-gray-900 mb-6">
            Find Services Near You
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Use our comprehensive directory to find trusted support services in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" className="flex-1">
              Search by Location
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              Browse All Services
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetHelp;
