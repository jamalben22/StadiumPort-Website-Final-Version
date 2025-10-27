
import { useEffect } from 'react';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Card } from '../../components/base/Card';
import { Button } from '../../components/base/Button';
import { Link } from 'react-router-dom';
import { SchemaOrg, generateOrganizationSchema, generateBreadcrumbSchema } from '../../components/seo/SchemaOrg';

export default function AboutPage() {
  useEffect(() => {
    // Set page title and meta description
    document.title = 'About StadiumPort - World Cup 2026 Travel Experts | StadiumPort';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about StadiumPort, the premier World Cup 2026 travel platform. Meet our team of travel experts helping fans plan unforgettable trips across all 16 host cities.');
    }

    // Add canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/about`);
    }
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: import.meta.env.VITE_SITE_URL || 'https://example.com' },
    { name: 'About', url: `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/about` }
  ]);

  const organizationSchema = generateOrganizationSchema();

  const teamMembers = [
    {
      name: 'Sarah Martinez',
      role: 'Founder & Lead Travel Expert',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20CEO%20headshot%2C%20travel%20industry%20leader%2C%20confident%20business%20woman%2C%20warm%20smile%2C%20executive%20portrait%2C%20professional%20photography%2C%20leadership%20presence&width=300&height=300&seq=team1&orientation=squarish',
      bio: 'Former travel journalist who\'s covered World Cups, Olympics, and major tournaments for 15+ years. Started StadiumPort after seeing how hard it was to plan multi-city sports trips.',
      expertise: ['Budget travel', 'Multi-city planning', 'Match day logistics']
    },
    {
      name: 'James Wellington',
      role: 'Premium Experiences Director',
      image: 'https://readdy.ai/api/search-image?query=Sophisticated%20male%20luxury%20travel%20expert%2C%20professional%20businessman%20headshot%2C%20high-end%20travel%20specialist%2C%20confident%20expression%2C%20executive%20portrait%2C%20premium%20photography&width=300&height=300&seq=team2&orientation=squarish',
      bio: '20 years in luxury hospitality creating VIP experiences at major sporting events. Knows which upgrades are worth it and which aren\'t.',
      expertise: ['Premium hotels', 'VIP access', 'Hospitality packages']
    },
    {
      name: 'Maria Rodriguez',
      role: 'City Guides Lead',
      image: 'https://readdy.ai/api/search-image?query=Hispanic%20female%20travel%20guide%20expert%2C%20professional%20city%20specialist%2C%20warm%20friendly%20expression%2C%20urban%20travel%20expert%2C%20professional%20headshot%2C%20cultural%20guide%20specialist&width=300&height=300&seq=team3&orientation=squarish',
      bio: 'Born in Mexico City, lived in 8 host cities, traveled to all 16. Creates our neighborhood guides and finds the local spots tourists miss.',
      expertise: ['Local culture', 'Hidden gems', 'Best eats']
    },
    {
      name: 'David Chen',
      role: 'Technology Director',
      image: 'https://readdy.ai/api/search-image?query=Asian%20male%20technology%20expert%20headshot%2C%20travel%20tech%20specialist%2C%20professional%20software%20developer%2C%20friendly%20expression%2C%20tech%20industry%20professional%2C%20modern%20photography&width=300&height=300&seq=team4&orientation=squarish',
      bio: 'Built travel comparison tools at major booking platforms. Now builds our deal-finding tech and price monitoring systems.',
      expertise: ['Price tracking', 'Travel tech', 'Deal alerts']
    }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'StadiumPort Launches',
      description: 'Started as a passion project helping friends plan trips to major tournaments.'
    },
    {
      year: '2020',
      title: 'First Travel Partnerships',
      description: 'Partnered with hotels and airlines to bring exclusive deals to sports fans.'
    },
    {
      year: '2022',
      title: '100,000 Fans Helped',
      description: 'Hit a major milestone and helped travelers save millions on sports trips.'
    },
    {
      year: '2023',
      title: 'Smarter Tools Launch',
      description: 'Built AI-powered price tracking and personalized recommendation systems.'
    },
    {
      year: '2024',
      title: 'World Cup 2026 Focus',
      description: 'Went all-in on becoming the go-to resource for World Cup 2026 travel.'
    }
  ];

  const stats = [
    { number: '500,000+', label: 'Fans Helped' },
    { number: '$50M+', label: 'in Savings' },
    { number: '2,500+', label: 'Travel Partners' },
    { number: '16', label: 'Host Cities' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-navy-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20team%20meeting%20in%20modern%20office%2C%20travel%20industry%20professionals%2C%20diverse%20team%20collaboration%2C%20world%20map%20on%20wall%2C%20travel%20planning%20workspace%2C%20inspiring%20business%20environment&width=1920&height=600&seq=about-hero&orientation=landscape')`,
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-space font-bold text-5xl md:text-6xl mb-6">
              About StadiumPort
            </h1>
            <p className="font-inter text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-4">
              The World Cup 2026 Travel Guide Built by Fans, for Fans
            </p>
            <p className="font-inter text-lg text-slate-300 max-w-4xl mx-auto">
              We're a team of travel experts, football lovers, and local insiders helping supporters plan unforgettable World Cup trips across the USA, Mexico, and Canada—no matter their budget.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-emerald-400 mb-2">{stat.number}</div>
                <div className="text-slate-300 font-inter">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <div className="bg-white dark:bg-navy-900 rounded-3xl shadow-xl border border-slate-200 dark:border-navy-700 p-12">
        <div className="text-center">
          <h2 className="font-space font-bold text-4xl text-navy-900 dark:text-white mb-6">
            Why We Built StadiumPort
          </h2>
          
          <p className="font-inter text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed max-w-4xl mx-auto">
            Every football fan deserves to experience the World Cup, whether you're backpacking on a budget or traveling in comfort. We created StadiumPort because planning a trip across three countries and 16 cities shouldn't be overwhelming—or overpriced.
          </p>
          
          <p className="font-inter text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-4xl mx-auto">
            Our team monitors prices, tests routes, explores neighborhoods, and partners with trusted travel brands to bring you honest advice and real deals. We're here to take the stress out of planning so you can focus on the football.
          </p>
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                <i className="ri-check-line text-white text-sm"></i>
              </div>
              <span className="font-inter text-slate-700 dark:text-slate-300">
                Honest recommendations — We tell you what's actually worth it
              </span>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                <i className="ri-check-line text-white text-sm"></i>
              </div>
              <span className="font-inter text-slate-700 dark:text-slate-300">
                Real-time deal alerts — Be first to know when prices drop
              </span>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                <i className="ri-check-line text-white text-sm"></i>
              </div>
              <span className="font-inter text-slate-700 dark:text-slate-300">
                Guides for every budget — From hostels to five-star hotels
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-20 bg-slate-50 dark:bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-4xl text-navy-900 dark:text-white mb-6">
              Meet the Team
            </h2>
            <p className="font-inter text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Travel experts, local insiders, and football fans working to make your World Cup trip incredible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center" padding="lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-space font-bold text-xl text-navy-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <div className="text-emerald-600 font-semibold mb-4">{member.role}</div>
                <p className="text-slate-600 dark:text-slate-400 font-inter text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                <div className="space-y-1">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="inline-block text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 px-2 py-1 rounded mr-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-4xl text-navy-900 dark:text-white mb-6">
              How We Got Here
            </h2>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-space font-bold text-xl text-navy-900 dark:text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 font-inter leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50 dark:bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-4xl text-navy-900 dark:text-white mb-6">
              What We Believe
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center" padding="lg">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-line text-emerald-600 text-2xl"></i>
              </div>
              <h3 className="font-space font-bold text-xl text-navy-900 dark:text-white mb-4">
                Fans Come First
              </h3>
              <p className="text-slate-600 dark:text-slate-400 font-inter leading-relaxed">
                Every recommendation is based on what's best for travelers, not what earns us the biggest commission.
              </p>
            </Card>

            <Card className="text-center" padding="lg">
              <div className="w-16 h-16 bg-gold-100 dark:bg-gold-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-gold-600 text-2xl"></i>
              </div>
              <h3 className="font-space font-bold text-xl text-navy-900 dark:text-white mb-4">
                Total Transparency
              </h3>
              <p className="text-slate-600 dark:text-slate-400 font-inter leading-relaxed">
                We clearly mark affiliate links and never let partnerships influence our honest reviews.
              </p>
            </Card>

            <Card className="text-center" padding="lg">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-star-line text-purple-600 text-2xl"></i>
              </div>
              <h3 className="font-space font-bold text-xl text-navy-900 dark:text-white mb-4">
                Quality Matters
              </h3>
              <p className="text-slate-600 dark:text-slate-400 font-inter leading-relaxed">
                We obsess over accuracy, test our recommendations, and keep every guide up to date.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-space font-bold text-4xl md:text-5xl mb-6">
            Ready to Plan Your World Cup 2026 Trip?
          </h2>
          <p className="font-inter text-xl text-slate-300 mb-8">
            Join half a million fans who've trusted StadiumPort to help them travel smarter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/cities"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-emerald-500/50 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-map-pin-line mr-2"></i>
              Explore Host Cities
            </Link>
            <Link 
              to="/deals"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-navy-900 rounded-lg hover:bg-slate-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-white/30 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-price-tag-3-line mr-2"></i>
              Find Today's Best Deals
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
