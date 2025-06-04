
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Phone, Shield, AlertTriangle, Clock } from 'lucide-react';

const Emergency = () => {
  const emergencyContacts = [
    {
      title: "Immediate Danger",
      description: "If you are in immediate physical danger",
      contact: "911",
      subtitle: "Police, Fire, Medical Emergency"
    },
    {
      title: "National GBV Hotline",
      description: "24/7 confidential crisis support",
      contact: "1-800-799-7233",
      subtitle: "National Domestic Violence Hotline"
    },
    {
      title: "Crisis Text Line",
      description: "Text-based crisis support",
      contact: "Text START to 88788",
      subtitle: "Free, 24/7 crisis counseling"
    }
  ];

  const safetyTips = [
    "Trust your instincts - if something feels wrong, it probably is",
    "Keep important documents in a safe, accessible place",
    "Memorize important phone numbers",
    "Have a safety plan and practice it",
    "Tell trusted friends or family about your situation",
    "Keep emergency cash and supplies ready"
  ];

  return (
    <Layout>
      {/* Emergency Alert */}
      <Alert className="bg-red-50 border-red-200 mb-0 rounded-none">
        <AlertTriangle className="h-4 w-4 text-red-600" />
        <AlertTitle className="text-red-800">Emergency Help Available 24/7</AlertTitle>
        <AlertDescription className="text-red-700">
          If you are in immediate danger, call 911. For confidential crisis support, call 1-800-799-7233.
        </AlertDescription>
      </Alert>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              Emergency Help
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              If you are in immediate danger or need crisis support, help is available right now. 
              You are not alone.
            </p>
            <div className="flex items-center justify-center space-x-2 text-warm mb-8">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">Available 24 hours a day, 7 days a week</span>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-center text-gray-900 mb-12">
            Emergency Contact Numbers
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="border-2 border-red-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center bg-red-50">
                  <Phone className="h-10 w-10 mx-auto mb-4 text-red-600" />
                  <CardTitle className="text-xl text-gray-900">{contact.title}</CardTitle>
                  <CardDescription className="text-base">{contact.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-6">
                  <div className="text-3xl font-bold text-warm mb-2">{contact.contact}</div>
                  <div className="text-sm text-gray-600 mb-6">{contact.subtitle}</div>
                  <Button className="w-full bg-warm hover:bg-warm/90 text-white font-semibold">
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Planning */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Shield className="h-12 w-12 text-primary mb-6" />
              <h2 className="font-heading font-bold text-3xl text-gray-900 mb-6">
                Safety Planning
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Having a safety plan can help protect you and your loved ones. 
                These tips can help you prepare for emergency situations.
              </p>
              <Button size="lg" className="mb-8">
                Download Safety Plan Template
              </Button>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">Quick Safety Tips</CardTitle>
                <CardDescription>
                  Important steps to consider for your safety
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {safetyTips.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl mb-6">
            Need More Support?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Beyond immediate crisis support, we offer comprehensive resources 
            to help you on your journey to safety and healing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-warm hover:bg-warm/90"
            >
              <a href="/get-help">Find Support Services</a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <a href="/resources">Browse Resources</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Emergency;
