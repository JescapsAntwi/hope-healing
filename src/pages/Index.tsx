
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { Shield, Heart, Users } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - Dark Theme */}
      <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
                Hope & Healing: A Support Network
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                for Survivors
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Providing resources, community, and support for survivors of gender-based 
              violence and their allies.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-warm hover:bg-warm/90 text-white font-semibold px-12 py-6 text-lg rounded-lg"
              >
                <Link to="/get-help">Get Help Now</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-400 text-white hover:bg-gray-800 hover:border-gray-300 px-12 py-6 text-lg rounded-lg bg-transparent"
              >
                <Link to="/understand">Explore Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 - Safe & Secure */}
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Safe & Secure</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Your privacy and safety are our top priorities. All interactions are secure and confidential.
              </p>
            </div>

            {/* Feature 2 - Community Support */}
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Compassionate Care</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Connect with trained professionals and counselors who understand your journey.
              </p>
            </div>

            {/* Feature 3 - Resources */}
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Community Network</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Join a supportive community of survivors, allies, and advocates working together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Making a Difference Together
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every day, we help survivors find the support they need to heal and rebuild their lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">10,000+</div>
              <div className="text-xl text-gray-300">Survivors Supported</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">500+</div>
              <div className="text-xl text-gray-300">Partner Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4">24/7</div>
              <div className="text-xl text-gray-300">Crisis Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-20 w-20 mx-auto mb-8 text-pink-400" />
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-8 text-white">
            Ready to Take the First Step?
          </h2>
          <p className="text-xl mb-12 text-gray-200 leading-relaxed">
            Whether you're seeking help for yourself or someone you care about, 
            we're here to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-warm hover:bg-warm/90 text-white px-12 py-6 text-lg rounded-lg"
            >
              <Link to="/get-help">Find Support Services</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-12 py-6 text-lg rounded-lg bg-transparent"
            >
              <Link to="/understand">Learn About GBV</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
