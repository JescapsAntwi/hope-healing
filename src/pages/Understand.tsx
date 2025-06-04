
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { BookOpen, AlertTriangle, Users, Heart } from 'lucide-react';

const Understand = () => {
  const gbvTypes = [
    {
      title: "Physical Violence",
      description: "Any intentional act causing physical injury or harm",
      examples: ["Hitting, slapping, punching", "Throwing objects", "Using weapons", "Restraining movement"]
    },
    {
      title: "Sexual Violence",
      description: "Any sexual act committed without consent",
      examples: ["Sexual assault", "Rape", "Sexual harassment", "Forced sexual acts"]
    },
    {
      title: "Emotional/Psychological",
      description: "Behaviors that harm emotional well-being and self-worth",
      examples: ["Threats and intimidation", "Isolation from friends/family", "Constant criticism", "Gaslighting"]
    },
    {
      title: "Economic Abuse",
      description: "Controlling access to financial resources",
      examples: ["Preventing employment", "Controlling finances", "Hiding assets", "Accumulating debt"]
    }
  ];

  const warningSigns = [
    "Extreme jealousy or possessiveness",
    "Controlling behavior",
    "Isolation from friends and family",
    "Threats or intimidation",
    "Mood swings and unpredictable behavior",
    "Checking phone, email, or social media",
    "Preventing access to money or transportation",
    "Making threats about children or pets"
  ];

  const myths = [
    {
      myth: "GBV only happens to certain types of people",
      fact: "GBV affects people of all backgrounds, ages, ethnicities, and social classes"
    },
    {
      myth: "Victims can just leave if they want to",
      fact: "Leaving can be the most dangerous time and involves complex barriers"
    },
    {
      myth: "Alcohol or drugs cause domestic violence",
      fact: "Substance abuse may be present but is not the cause of violent behavior"
    },
    {
      myth: "It's a private family matter",
      fact: "GBV is a serious crime and public health issue that affects entire communities"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple/10 to-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              Understanding Gender-Based Violence
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Education and awareness are powerful tools in preventing GBV and supporting survivors. 
              Learn about the forms, causes, and impacts of gender-based violence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="types" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="types">Types of GBV</TabsTrigger>
              <TabsTrigger value="signs">Warning Signs</TabsTrigger>
              <TabsTrigger value="myths">Myths vs Facts</TabsTrigger>
              <TabsTrigger value="impact">Impact & Effects</TabsTrigger>
            </TabsList>

            <TabsContent value="types">
              <div className="mb-8">
                <h2 className="font-heading font-bold text-3xl text-gray-900 mb-4">
                  Types of Gender-Based Violence
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  GBV takes many forms. Understanding these different types helps in recognizing 
                  and addressing violence in all its manifestations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {gbvTypes.map((type, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="font-heading text-xl text-primary">
                        {type.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {type.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-3 text-gray-900">Examples include:</h4>
                      <ul className="space-y-2">
                        {type.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="signs">
              <div className="mb-8">
                <h2 className="font-heading font-bold text-3xl text-gray-900 mb-4">
                  Warning Signs & Red Flags
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Recognizing warning signs early can help prevent escalation and provide 
                  opportunities for intervention and support.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-l-4 border-l-warm">
                  <CardHeader>
                    <AlertTriangle className="h-8 w-8 text-warm mb-4" />
                    <CardTitle className="font-heading text-xl">
                      Behavioral Warning Signs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {warningSigns.map((sign, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-warm rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-l-4 border-l-primary">
                  <CardHeader>
                    <Heart className="h-8 w-8 text-primary mb-4" />
                    <CardTitle className="font-heading text-xl">
                      If You Notice These Signs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Listen without judgment</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Offer support and resources</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Respect their autonomy and decisions</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Help create a safety plan</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Connect them with professional help</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="myths">
              <div className="mb-8">
                <h2 className="font-heading font-bold text-3xl text-gray-900 mb-4">
                  Myths vs Facts About GBV
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Dispelling common myths about gender-based violence is crucial for understanding 
                  the reality of this issue and supporting survivors effectively.
                </p>
              </div>

              <div className="space-y-6">
                {myths.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-l-red-500">
                          <Badge variant="destructive" className="mb-3">MYTH</Badge>
                          <p className="text-gray-800 font-medium">{item.myth}</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-l-green-500">
                          <Badge className="mb-3 bg-green-600">FACT</Badge>
                          <p className="text-gray-800 font-medium">{item.fact}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="impact">
              <div className="mb-8">
                <h2 className="font-heading font-bold text-3xl text-gray-900 mb-4">
                  Impact & Effects of GBV
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Gender-based violence has far-reaching effects on individuals, families, 
                  and communities. Understanding these impacts helps in providing appropriate support.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="border-l-4 border-l-red-500">
                  <CardHeader>
                    <CardTitle className="font-heading text-lg text-red-700">
                      Physical Health Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Injuries and chronic pain</li>
                      <li>• Reproductive health issues</li>
                      <li>• Sleep disorders</li>
                      <li>• Substance abuse</li>
                      <li>• Increased health risks</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple">
                  <CardHeader>
                    <CardTitle className="font-heading text-lg text-purple">
                      Mental Health Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• PTSD and trauma</li>
                      <li>• Depression and anxiety</li>
                      <li>• Low self-esteem</li>
                      <li>• Suicidal thoughts</li>
                      <li>• Trust issues</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="font-heading text-lg text-primary">
                      Social & Economic Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Social isolation</li>
                      <li>• Employment difficulties</li>
                      <li>• Financial instability</li>
                      <li>• Housing insecurity</li>
                      <li>• Educational disruption</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 mx-auto mb-6 text-secondary" />
          <h2 className="font-heading font-bold text-3xl text-gray-900 mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Now that you understand more about GBV, learn how you can help prevent it 
            and support survivors in your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/prevent" className="btn btn-primary">Learn About Prevention</a>
            <a href="/get-help" className="btn btn-outline">Find Support Resources</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Understand;
