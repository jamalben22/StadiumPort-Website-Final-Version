
import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { Card } from '../../../components/base/Card';
import { Button } from '../../../components/base/Button';

export default function TravelGuideArticlePage() {
  const [searchParams] = useSearchParams();
  const articleId = searchParams.get('id');
  const [article, setArticle] = useState<any>(null);

  const articles = [
    {
      id: 1,
      title: 'Complete New York World Cup 2026 Travel Guide',
      category: 'City Guides',
      author: 'Sarah Mitchell',
      readTime: '25 min read',
      publishDate: '2024-01-15',
      image: '/images/cities/new-york-new-jersey-world-cup-2026.webp',
      excerpt: 'Your ultimate guide to experiencing World Cup 2026 in New York. From MetLife Stadium to Manhattan attractions, discover the best of the Big Apple during the tournament.',
      content: [
        {
          subtitle: 'Getting to New York',
          text: 'New York offers three major airports: JFK, LaGuardia, and Newark. Newark is closest to MetLife Stadium in New Jersey. Book flights early as prices surge during major events.',
          tips: [
            'Newark Airport is 20 minutes from MetLife Stadium',
            'JFK and LaGuardia connect via public transport to Manhattan',
            'Consider Amtrak from other East Coast cities',
            'Book airport transfers in advance during World Cup'
          ]
        },
        {
          subtitle: 'MetLife Stadium Experience',
          text: 'MetLife Stadium in East Rutherford, New Jersey, will host 8 World Cup matches including the final. The 82,500-capacity venue is accessible via NJ Transit.',
          tips: [
            'Take NJ Transit train from Penn Station NYC',
            'Stadium has strict bag policy - check before arriving',
            'Arrive 2-3 hours early for World Cup matches',
            'Download the MetLife Stadium app for navigation'
          ]
        },
        {
          subtitle: 'Where to Stay',
          text: 'Manhattan offers luxury options but book early. Consider New Jersey hotels near the stadium for convenience, or Brooklyn/Queens for better value.',
          tips: [
            'Times Square hotels for tourist experience',
            'Financial District for business travelers',
            'Brooklyn for authentic NYC neighborhoods',
            'New Jersey for stadium proximity'
          ]
        },
        {
          subtitle: 'NYC Attractions During World Cup',
          text: 'Beyond football, New York offers world-class attractions. Plan visits around match schedules as crowds will be intense during the tournament.',
          tips: [
            'Book Broadway shows well in advance',
            'Visit Central Park early morning to avoid crowds',
            'Empire State Building offers World Cup viewing packages',
            'Food tours showcase NYC\'s diverse cuisine'
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Los Angeles World Cup 2026: Complete Travel Guide',
      category: 'City Guides',
      author: 'Mike Rodriguez',
      readTime: '22 min read',
      publishDate: '2024-01-12',
      image: '/images/cities/los-angeles-world-cup-2026.webp',
      excerpt: 'Experience World Cup 2026 in the entertainment capital. From SoFi Stadium to Hollywood attractions, your complete LA travel guide.',
      content: [
        {
          subtitle: 'Arriving in Los Angeles',
          text: 'LAX is the main gateway, 30 minutes from SoFi Stadium. Consider Burbank or Long Beach airports for potentially easier access depending on your accommodation.',
          tips: [
            'LAX Metro connection opens direct route to SoFi',
            'Uber/Lyft surge pricing during World Cup events',
            'Rental cars recommended for LA exploration',
            'Traffic planning essential - allow extra time'
          ]
        },
        {
          subtitle: 'SoFi Stadium Guide',
          text: 'The ultra-modern SoFi Stadium in Inglewood hosts 7 World Cup matches. The 70,240-capacity venue features cutting-edge technology and amenities.',
          tips: [
            'Metro K Line connects downtown LA to stadium',
            'Stadium offers premium dining experiences',
            'Clear bag policy strictly enforced',
            'Parking fills up quickly - use public transport'
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Miami World Cup 2026: Beach & Football Paradise',
      category: 'City Guides',
      author: 'Elena Vasquez',
      readTime: '20 min read',
      publishDate: '2024-01-10',
      image: '/images/cities/miami-world-cup-2026.webp',
      excerpt: 'Combine World Cup excitement with Miami\'s tropical paradise. Your guide to beaches, nightlife, and Hard Rock Stadium.',
      content: [
        {
          subtitle: 'Miami International Airport',
          text: 'MIA is well-connected to both Miami Beach and Hard Rock Stadium. The airport offers direct connections to most major cities worldwide.',
          tips: [
            'Metrobus connects airport to stadium',
            'Rental cars recommended for beach access',
            'Tri-Rail connects to Fort Lauderdale',
            'Airport hotels available for early flights'
          ]
        },
        {
          subtitle: 'Hard Rock Stadium Experience',
          text: 'Located in Miami Gardens, Hard Rock Stadium hosts 6 World Cup matches. The renovated venue offers excellent sightlines and modern amenities.',
          tips: [
            'Stadium has retractable canopy for weather',
            'Multiple transportation options available',
            'Tailgating culture embraced for World Cup',
            'VIP experiences include field access'
          ]
        }
      ]
    },
    {
      id: 4,
      title: 'Dallas World Cup 2026: Big D Football Experience',
      category: 'City Guides',
      author: 'Robert Kim',
      readTime: '18 min read',
      publishDate: '2024-01-08',
      image: '/images/cities/dallas-world-cup-2026.webp',
      excerpt: 'Experience World Cup 2026 in Big D. From AT&T Stadium to authentic Texas culture, your complete Dallas travel guide.',
      content: [
        {
          subtitle: 'Dallas/Fort Worth International Airport',
          text: 'DFW is one of the world\'s largest airports, centrally located between Dallas and Fort Worth. AT&T Stadium is about 30 minutes away.',
          tips: [
            'DFW Skylink connects all terminals',
            'Trinity Metro connects to Arlington',
            'Rental cars popular for Texas exploration',
            'Love Field closer to downtown Dallas'
          ]
        },
        {
          subtitle: 'AT&T Stadium - The Star',
          text: 'AT&T Stadium in Arlington hosts 6 World Cup matches. Known as "Jerry\'s World," the 80,000-capacity venue features a massive video board.',
          tips: [
            'Stadium tours available on non-match days',
            'Parking requires advance purchase',
            'The Star district offers dining and entertainment',
            'Retractable roof provides climate control'
          ]
        }
      ]
    },
    {
      id: 5,
      title: 'Budget Travel Guide: World Cup 2026 on a Shoestring',
      category: 'Budget Guides',
      author: 'Jennifer Park',
      readTime: '15 min read',
      publishDate: '2024-01-05',
      image: '/images/metlife-stadium-east-rutherford-world-cup-2026.webp',
      excerpt: 'Experience World Cup 2026 without breaking the bank. Proven strategies for affordable accommodation, transport, and match tickets.',
      content: [
        {
          subtitle: 'Accommodation Strategies',
          text: 'Budget accommodation fills up fast during World Cup. Book early and consider alternative options like hostels, shared accommodations, or staying outside city centers.',
          tips: [
            'Hostels offer social atmosphere and savings',
            'Airbnb shared rooms reduce costs significantly',
            'Consider staying 30-60 minutes from stadiums',
            'University dorms sometimes available during summer'
          ]
        },
        {
          subtitle: 'Transportation Savings',
          text: 'Public transportation is your best friend for budget World Cup travel. Many cities offer special tournament passes and deals.',
          tips: [
            'Buy weekly/monthly transit passes',
            'Walk when possible - explore neighborhoods',
            'Avoid surge pricing on rideshares',
            'Consider budget airlines for inter-city travel'
          ]
        }
      ]
    },
    {
      id: 6,
      title: 'Luxury World Cup 2026: Premium Experiences',
      category: 'Luxury Travel',
      author: 'David Thompson',
      readTime: '20 min read',
      publishDate: '2024-01-03',
      image: '/images/metlife-stadium-east-rutherford-world-cup-2026.webp',
      excerpt: 'Experience World Cup 2026 in ultimate luxury. Premium accommodations, VIP stadium access, and exclusive experiences.',
      content: [
        {
          subtitle: 'Luxury Accommodations',
          text: 'Five-star hotels in host cities offer World Cup packages with stadium transfers, concierge services, and exclusive amenities.',
          tips: [
            'Book luxury hotels 12+ months in advance',
            'Look for World Cup hospitality packages',
            'Consider private villa rentals for groups',
            'Luxury hotels often include stadium transfers'
          ]
        },
        {
          subtitle: 'VIP Stadium Experiences',
          text: 'Premium stadium packages include club seating, gourmet dining, and exclusive access areas. These experiences sell out quickly.',
          tips: [
            'Club seats include premium food and beverage',
            'Field-level suites offer closest action views',
            'Hospitality packages include pre-match events',
            'Some packages include player meet-and-greets'
          ]
        }
      ]
    }
  ];

  useEffect(() => {
    if (articleId) {
      const foundArticle = articles.find(a => a.id === parseInt(articleId));
      setArticle(foundArticle);
    }
  }, [articleId]);

  if (!article) {
    return (
      <div className="min-h-screen bg-white dark:bg-navy-900">
        <Header />
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">Article Not Found</h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">The article you're looking for doesn't exist.</p>
            <Link to="/travel-guides">
              <Button variant="primary">
                <i className="ri-arrow-left-line mr-2"></i>
                Back to Travel Guides
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-navy-900">
      <Header />
      
      {/* Breadcrumbs */}
      <section className="pt-24 pb-8 bg-slate-50 dark:bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
            <Link to="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <i className="ri-arrow-right-s-line"></i>
            <Link to="/travel-guides" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Travel Guides
            </Link>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-slate-900 dark:text-white">{article.title}</span>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-16 bg-slate-50 dark:bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-4 py-2 mb-6">
              <i className="ri-bookmark-line text-emerald-600"></i>
              <span className="text-emerald-700 dark:text-emerald-300 font-medium">{article.category}</span>
            </div>
            
            <h1 className="font-space font-bold text-4xl md:text-5xl text-navy-900 dark:text-white mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="font-inter text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
              {article.excerpt}
            </p>

            <div className="flex items-center justify-center space-x-6 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {article.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <i className="ri-time-line"></i>
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <i className="ri-calendar-line"></i>
                <span>{new Date(article.publishDate).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                <div className="space-y-12">
                  {article.content.map((section, index) => (
                    <div key={index} className="space-y-6">
                      <h2 className="font-space font-bold text-2xl text-navy-900 dark:text-white">
                        {section.subtitle}
                      </h2>
                      
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                        {section.text}
                      </p>

                      {section.tips && (
                        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
                          <h4 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-4 flex items-center">
                            <i className="ri-lightbulb-line mr-2"></i>
                            Pro Tips
                          </h4>
                          <ul className="space-y-3">
                            {section.tips.map((tip, tipIndex) => (
                              <li key={tipIndex} className="flex items-start space-x-3">
                                <i className="ri-check-line text-emerald-600 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-700 dark:text-slate-300">{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 p-8 bg-gradient-to-r from-emerald-50 to-gold-50 dark:from-emerald-900/20 dark:to-gold-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                  <div className="text-center">
                    <h3 className="font-space font-bold text-2xl text-navy-900 dark:text-white mb-4">
                      Ready to Plan Your World Cup 2026 Trip?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                      Get the best deals on accommodation and start planning your ultimate World Cup experience.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a 
                        href="https://hotel-affiliate-link.com"
                        target="_blank"
                        rel="nofollow sponsored noopener noreferrer"
                        data-affiliate-type="hotel"
                        className="affiliate-btn inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer px-6 py-3 text-base bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        <i className="ri-hotel-line mr-2"></i>
                        Find Hotels
                      </a>
                      <Link to="/deals">
                        <Button variant="outline" size="lg">
                          <i className="ri-price-tag-3-line mr-2"></i>
                          View Deals
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Table of Contents */}
                <Card className="p-6">
                  <h3 className="font-space font-bold text-lg text-navy-900 dark:text-white mb-4">
                    Table of Contents
                  </h3>
                  <div className="space-y-3">
                    {article.content.map((section, index) => (
                      <a
                        key={index}
                        href={`#section-${index}`}
                        className="block text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm"
                      >
                        {section.subtitle}
                      </a>
                    ))}
                  </div>
                </Card>

                {/* Related Articles */}
                <Card className="p-6">
                  <h3 className="font-space font-bold text-lg text-navy-900 dark:text-white mb-4">
                    Related Guides
                  </h3>
                  <div className="space-y-4">
                    {articles.filter(a => a.id !== article.id).slice(0, 3).map((relatedArticle) => (
                      <Link
                        key={relatedArticle.id}
                        to={`/travel-guides/article?id=${relatedArticle.id}`}
                        className="block group"
                      >
                        <div className="flex space-x-3">
                          <img
                            src={relatedArticle.image}
                            alt={relatedArticle.title}
                            className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-navy-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors text-sm line-clamp-2">
                              {relatedArticle.title}
                            </h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                              {relatedArticle.readTime}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </Card>

                {/* Quick Links */}
                <Card className="p-6">
                  <h3 className="font-space font-bold text-lg text-navy-900 dark:text-white mb-4">
                    Quick Links
                  </h3>
                  <div className="space-y-3">
                    <Link to="/world-cup-2026-host-cities" className="block text-emerald-600 hover:text-emerald-700 transition-colors text-sm">
                      Host Cities Guide
                    </Link>
                    <Link to="/deals" className="block text-emerald-600 hover:text-emerald-700 transition-colors text-sm">
                      Latest Deals
                    </Link>
                    <Link to="/safety-guide" className="block text-emerald-600 hover:text-emerald-700 transition-colors text-sm">
                      Safety Guide
                    </Link>
                    <Link to="/packing-lists" className="block text-emerald-600 hover:text-emerald-700 transition-colors text-sm">
                      Packing Lists
                    </Link>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
