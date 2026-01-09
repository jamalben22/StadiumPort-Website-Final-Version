'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { AlertTriangle, ArrowRight, Building, Calendar, ChevronDown, CreditCard, ExternalLink, MapPin, Plane, Shield, Thermometer, Ticket, Train } from 'lucide-react';

function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-slate-200 dark:border-white/10 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors pr-8 tracking-tight">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-teal-500 text-slate-900 dark:text-white rotate-180' : ' text-slate-500 group-hover:bg-teal-500/10 group-hover:text-teal-600'}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg max-w-3xl">
          {answer}
        </div>
      </div>
    </div>
  );
}

const AffiliateButton = ({
  href,
  text,
  icon: Icon = ArrowRight,
  variant = 'primary',
}: {
  href: string;
  text: string;
  icon?: any;
  variant?: 'primary' | 'secondary' | 'outline';
}) => {
  const variants = {
    primary: 'bg-teal-600 hover:bg-teal-700 text-slate-900 dark:text-white shadow-lg shadow-teal-600/20',
    secondary:
      'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors',
    outline:
      'bg-transparent border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5',
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 relative overflow-hidden ${variants[variant]}`}
    >
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      )}
      <span className="relative z-10">{text}</span>
      <Icon className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
};

export default function GroupEClientPage() {
  const lastUpdated = 'January 8, 2026';

  const sections = useMemo(
    () => [
      { id: 'intro', label: 'Introduction' },
      { id: 'teams', label: 'Teams' },
      { id: 'schedule', label: 'Match Schedule' },
      { id: 'strategy', label: 'Transport Strategy' },
      { id: 'accommodation', label: 'Accommodation' },
      { id: 'budget', label: 'Budget Breakdown' },
      { id: 'visas', label: 'Visa & Entry' },
      { id: 'insider', label: 'Insider Tips' },
      { id: 'packing', label: 'Packing Essentials' },
      { id: 'faq', label: 'FAQ' },
    ],
    [],
  );

  const matches = useMemo(
    () => [
      {
        matchId: 'M9',
        teams: "Côte d'Ivoire vs. Ecuador",
        date: 'Sun, June 14, 2026',
        time: '7:00pm',
        timeNote: 'Local time',
        city: 'Philadelphia',
        stadium: 'Lincoln Financial Field',
        guideHref: '/world-cup-2026-philadelphia-guide',
        move: 'Northeast base option',
      },
      {
        matchId: 'M10',
        teams: 'Germany vs. Curaçao',
        date: 'Sun, June 14, 2026',
        time: '12:00pm',
        timeNote: 'Local time',
        city: 'Houston',
        stadium: 'NRG Stadium',
        guideHref: '/world-cup-2026-houston-guide',
        move: 'Texas jump option',
      },
      {
        matchId: 'M33',
        teams: "Germany vs. Côte d'Ivoire",
        date: 'Sat, June 20, 2026',
        time: '4:00pm',
        timeNote: 'Local time',
        city: 'Toronto',
        stadium: 'BMO Field',
        guideHref: '/world-cup-2026-toronto-guide',
        move: 'Cross-border midweek',
      },
      {
        matchId: 'M34',
        teams: 'Ecuador vs. Curaçao',
        date: 'Sat, June 20, 2026',
        time: '7:00pm',
        timeNote: 'Local time',
        city: 'Kansas City',
        stadium: 'Arrowhead Stadium',
        guideHref: '/world-cup-2026-kansas-city-guide',
        move: 'Midwest leg',
      },
      {
        matchId: 'M55',
        teams: "Curaçao vs. Côte d'Ivoire",
        date: 'Thu, June 25, 2026',
        time: '4:00pm',
        timeNote: 'Local time',
        city: 'Philadelphia',
        stadium: 'Lincoln Financial Field',
        guideHref: '/world-cup-2026-philadelphia-guide',
        move: 'Back to Northeast',
      },
      {
        matchId: 'M56',
        teams: 'Ecuador vs. Germany',
        date: 'Thu, June 25, 2026',
        time: '4:00pm',
        timeNote: 'Local time',
        city: 'New York / New Jersey',
        stadium: 'MetLife Stadium',
        guideHref: '/world-cup-2026-new-york-new-jersey-guide',
        move: 'Same-day Northeast hop',
      },
    ],
    [],
  );

  const faqs = useMemo(
    () => [
      {
        q: 'What is the best way to travel between Group E cities?',
        a: (
          <span>
            Split your trip into two phases. Use <strong>Amtrak</strong> for the Northeast (Philadelphia + New York/New
            Jersey). Fly for <strong>Houston</strong>, <strong>Kansas City</strong>, and <strong>Toronto</strong>. Trying
            to drive the full loop burns too many days and adds risk.
          </span>
        ),
      },
      {
        q: 'Which cities host Group E matches?',
        a: (
          <span>
            Group E is hosted across <strong>Philadelphia</strong>, <strong>Houston</strong>, <strong>Kansas City</strong>,{' '}
            <strong>Toronto</strong>, and <strong>New York / New Jersey</strong>.
          </span>
        ),
      },
      {
        q: 'Do I need a visa for Group E travel?',
        a: (
          <span>
            Potentially. Group E can require entry to the <strong>USA</strong> and <strong>Canada</strong>. Check your
            passport’s requirements early, especially if you need multi-entry permissions.
          </span>
        ),
      },
      {
        q: 'When should I book hotels and flights for Group E?',
        a: (
          <span>
            Book refundable hotels first (especially Philadelphia, Toronto, and New York / New Jersey), then lock flights
            once your match plan is final. Multi-city itineraries get expensive when you delay.
          </span>
        ),
      },
      {
        q: 'Where is the safest place to buy tickets?',
        a: (
          <span>
            Start with FIFA ticket sales phases. Avoid random DMs and “PDF ticket” offers. If you miss a sales phase,
            prioritize platforms with buyer protection and clear refund rules.
          </span>
        ),
      },
    ],
    [],
  );

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeSection, setActiveSection] = useState('intro');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 120;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#0A0A0A] font-sans text-slate-900 dark:text-slate-100 selection:bg-teal-500/30">
      <main>
        <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/10 via-[#F5F5F7] to-[#F5F5F7] dark:from-teal-900/20 dark:via-[#0A0A0A] dark:to-[#0A0A0A]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F5F7] dark:from-[#0A0A0A] to-transparent" />

          <div className="container mx-auto max-w-7xl relative z-10">
            <Breadcrumb
              items={[
                { label: 'Groups', href: '/world-cup-2026-groups' },
                { label: 'Group E', href: '/world-cup-2026-groups/group-e' },
              ]}
            />

            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6 animate-fade-up">
                <span className="px-3 py-1 rounded-full border border-slate-300 dark:border-white/30 text-slate-600 dark:text-white/90 text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
                  Last Updated: {lastUpdated}
                </span>
                <span className="px-3 py-1 rounded-full border border-white/30 text-white/90 text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
                  Schedule + Strategy
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-slate-900 dark:text-white animate-fade-up">
                World Cup 2026 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500 dark:from-teal-400 dark:to-emerald-300">
                  Group E Guide
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal mb-10 animate-fade-up delay-100">
                A cross-border group with a Northeast rail spine, a Midwest jump, and a Texas wildcard.
              </p>
            </div>
          </div>

          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2 cursor-pointer z-20"
            onClick={() => scrollToSection('teams')}
          >
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Explore</span>
            <ChevronDown className="w-5 h-5 text-teal-500" />
          </div>
        </section>

        <div className="container mx-auto max-w-7xl px-6 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
            <aside className="hidden lg:block lg:col-span-3 relative">
              <div className="sticky top-32">
                <nav className="space-y-1 border-l border-slate-200 dark:border-slate-800 ml-2">
                  {sections.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`group flex items-center w-full pl-6 py-2.5 text-sm font-medium transition-all duration-300 border-l-2 -ml-[2px] ${
                        activeSection === item.id
                          ? 'border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400'
                          : 'border-transparent text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="lg:col-span-9 space-y-24">
              <section id="intro" className="max-w-3xl scroll-mt-32">
                <div className="prose prose-xl dark:prose-invert max-w-none">
                  <p className="text-2xl md:text-3xl leading-relaxed font-light text-slate-900 dark:text-white mb-10">
                    Group E is built for planners. You get a Northeast rail corridor for the final stretch, but the group
                    also pulls you into the Midwest, Texas, and Toronto.
                  </p>
                  <p className="text-lg leading-loose text-slate-600 dark:text-slate-300 mb-10">
                    The core travel challenge is not distance—it’s timing. Two matchdays are split across multiple cities
                    with overlapping kickoffs. The winning move is to pick a base, then target a realistic set of games
                    instead of trying to “collect them all.”
                  </p>
                </div>

                <div className="p-10 rounded-[2rem] shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-800 mt-12">
                  <h3 className="text-lg font-bold text-teal-600 dark:text-teal-400 mb-6 flex items-center gap-3 tracking-tight uppercase">
                    <Plane className="w-5 h-5" />
                    The Group E Split Strategy
                  </h3>
                  <p className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                    Rail in the Northeast, fly everywhere else.
                  </p>
                  <p className="text-base text-slate-500 dark:text-slate-400">
                    Treat Philadelphia + New York / New Jersey as one rail-connected zone, then use flights for Houston,
                    Kansas City, and Toronto. Build an open-jaw flight plan if you’re doing multiple matches across the
                    continent.
                  </p>
                </div>
              </section>

              <section id="teams" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-teal-500 font-mono text-sm font-bold tracking-widest uppercase">01</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">
                    Teams in Group E
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      name: 'Germany',
                      note: 'Highest-demand tickets and hotels. Lock your base early if you’re following them.',
                    },
                    {
                      name: 'Curaçao',
                      note: 'A bucket-list underdog for neutrals. Great choice for finding affordable seats.',
                    },
                    {
                      name: "Côte d'Ivoire",
                      note: 'Expect passionate traveling fans and high-energy match atmospheres.',
                    },
                    {
                      name: 'Ecuador',
                      note: 'Strong fan culture and plenty of neutrals. Plan around altitude-to-heat swings.',
                    },
                  ].map((team) => (
                    <div
                      key={team.name}
                      className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-teal-200 dark:hover:border-teal-800 transition-colors"
                    >
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                        {team.name}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{team.note}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="schedule" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-teal-500 font-mono text-sm font-bold tracking-widest uppercase">02</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">
                    Match Schedule
                  </h2>
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-300 leading-loose mb-10 max-w-3xl">
                  This schedule view is built for travel decisions: where you sleep, when you move, and which games can
                  realistically be combined.
                </p>

                <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-100 dark:border-slate-800">
                        <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Match</th>
                        <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                        <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest hidden lg:table-cell">
                          Kickoff
                        </th>
                        <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Venue</th>
                        <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:table-cell">
                          Move
                        </th>
                        <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Guide</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {matches.map((m) => (
                        <tr key={m.matchId}>
                          <td className="p-6">
                            <div className="font-semibold text-slate-900 dark:text-white">{m.matchId}</div>
                            <div className="text-sm text-slate-600 dark:text-slate-300">{m.teams}</div>
                          </td>
                          <td className="p-6 text-slate-600 dark:text-slate-300 text-sm">{m.date}</td>
                          <td className="p-6 text-slate-600 dark:text-slate-300 text-sm hidden lg:table-cell">
                            {m.time} <span className="text-slate-400">({m.timeNote})</span>
                          </td>
                          <td className="p-6">
                            <div className="flex items-start gap-3">
                              <MapPin className="w-4 h-4 text-teal-500 mt-0.5" />
                              <div>
                                <div className="font-semibold text-slate-900 dark:text-white text-sm">{m.city}</div>
                                <div className="text-slate-600 dark:text-slate-300 text-sm">{m.stadium}</div>
                              </div>
                            </div>
                          </td>
                          <td className="p-6 text-slate-600 dark:text-slate-300 text-sm hidden md:table-cell">{m.move}</td>
                          <td className="p-6">
                            <Link
                              href={m.guideHref}
                              className="inline-flex items-center gap-2 text-sm font-bold text-teal-600 dark:text-teal-400 hover:underline"
                            >
                              City guide <ArrowRight className="w-4 h-4" />
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-10 grid md:grid-cols-3 gap-6">
                  <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3 mb-3">
                      <Ticket className="w-5 h-5 text-teal-500" />
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">Tickets</h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      Use official sales phases as your baseline, then plan the travel around the matches you can
                      realistically combine.
                    </p>
                    <AffiliateButton href="https://www.fifa.com/tickets" text="FIFA Tickets" variant="secondary" icon={Ticket} />
                  </div>
                  <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="w-5 h-5 text-teal-500" />
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">Full Schedule</h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      Verify kickoffs and any venue naming changes before you lock non-refundable travel.
                    </p>
                    <AffiliateButton href="https://www.fifa.com/" text="Official FIFA Site" variant="outline" icon={Calendar} />
                  </div>
                  <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3 mb-3">
                      <Building className="w-5 h-5 text-teal-500" />
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">Hotels</h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      Philadelphia, Toronto, and New York / New Jersey spike first. Book refundable rooms early.
                    </p>
                    <AffiliateButton
                      href="https://expedia.com/affiliates/hotel-search-philadelphia"
                      text="Start with Philly"
                      variant="primary"
                      icon={Building}
                    />
                  </div>
                </div>
              </section>

              <section id="strategy" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-teal-500 font-mono text-sm font-bold tracking-widest uppercase">03</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">
                    Logistics & Transport
                  </h2>
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-300 leading-loose mb-12 max-w-3xl">
                  Your routing depends on which match you anchor. The Northeast leg is easy (train). The Midwest and
                  Texas legs are flight-first. Think in blocks, not in cities.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {[
                    {
                      title: 'Northeast Rail Base',
                      text: 'Philadelphia + New York / New Jersey can be treated as one zone. Amtrak between stations keeps you flexible and avoids traffic.',
                      icon: Train,
                    },
                    {
                      title: 'Texas Jump',
                      text: 'If you’re targeting Houston, fly in early. Houston is spread out and matchday traffic can be slow.',
                      icon: Plane,
                    },
                    {
                      title: 'Midwest Move',
                      text: 'Kansas City is compact downtown, but the stadium is not. Plan rideshare or parking and accept the exit time.',
                      icon: AlertTriangle,
                    },
                  ].map((item) => (
                    <div key={item.title} className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-3 mb-4">
                        <item.icon className="w-5 h-5 text-teal-500" />
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-100 dark:border-slate-800">
                        <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Route</th>
                        <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:table-cell">
                          Mode
                        </th>
                        <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:table-cell">
                          Time
                        </th>
                        <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Est. Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      <tr>
                        <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">
                          Philadelphia → New York / New Jersey
                        </td>
                        <td className="p-6 text-slate-500 hidden md:table-cell text-sm">Amtrak + local transit</td>
                        <td className="p-6 text-slate-500 hidden md:table-cell text-sm">~1h–2h (station-to-station)</td>
                        <td className="p-6 font-bold text-teal-600 dark:text-teal-400 text-base">$30 – $150</td>
                      </tr>
                      <tr>
                        <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">Northeast → Houston</td>
                        <td className="p-6 text-slate-500 hidden md:table-cell text-sm">Flight</td>
                        <td className="p-6 text-slate-500 hidden md:table-cell text-sm">~3h–5h (nonstop vs connection)</td>
                        <td className="p-6 font-bold text-teal-600 dark:text-teal-400 text-base">$200 – $450</td>
                      </tr>
                      <tr>
                        <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">
                          Houston → Kansas City
                        </td>
                        <td className="p-6 text-slate-500 hidden md:table-cell text-sm">Flight</td>
                        <td className="p-6 text-slate-500 hidden md:table-cell text-sm">~2h–4h (airport-to-airport)</td>
                        <td className="p-6 font-bold text-teal-600 dark:text-teal-400 text-base">$150 – $350</td>
                      </tr>
                      <tr>
                        <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">
                          Kansas City → Toronto
                        </td>
                        <td className="p-6 text-slate-500 hidden md:table-cell text-sm">Flight</td>
                        <td className="p-6 text-slate-500 hidden md:table-cell text-sm">~2h–6h (nonstop vs connection)</td>
                        <td className="p-6 font-bold text-teal-600 dark:text-teal-400 text-base">$200 – $500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-12 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
                        <Plane className="w-5 h-5 text-teal-500" />
                        Book Multi-City Flights
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
                        Use open-jaw and multi-city searches to keep your itinerary clean (and avoid backtracking).
                      </p>
                    </div>
                    <Link
                      href="https://expedia.com/affiliates/flight-search-stadiumport"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-slate-900 dark:text-white font-bold rounded-xl transition-colors shadow-lg shadow-teal-600/20"
                    >
                      Search Flights <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </section>

              <section id="accommodation" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-teal-500 font-mono text-sm font-bold tracking-widest uppercase">04</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">
                    Where to Stay
                  </h2>
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-300 leading-loose mb-12 max-w-3xl">
                  Prioritize location over “closest to the stadium.” In Philadelphia and New York, you want transit access
                  and walkability. In Houston and Kansas City, you’re managing sprawl and matchday traffic.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      city: 'Philadelphia',
                      stadium: 'Lincoln Financial Field',
                      note: 'Stay Center City for the fan vibe, then take the Broad Street Line to the Sports Complex.',
                      href: 'https://expedia.com/affiliates/hotel-search-philadelphia',
                      guideHref: '/world-cup-2026-philadelphia-guide',
                    },
                    {
                      city: 'New York / New Jersey',
                      stadium: 'MetLife Stadium',
                      note: 'Choose Manhattan (rail base) or Jersey City (value) and use NJ Transit for matchday.',
                      href: 'https://expedia.com/affiliates/hotel-search-new-york-new-jersey',
                      guideHref: '/world-cup-2026-new-york-new-jersey-guide',
                    },
                    {
                      city: 'Houston',
                      stadium: 'NRG Stadium',
                      note: 'Focus on the METRORail corridor (Medical Center / Museum District) for stadium access.',
                      href: 'https://expedia.com/affiliates/hotel-search-houston',
                      guideHref: '/world-cup-2026-houston-guide',
                    },
                    {
                      city: 'Kansas City',
                      stadium: 'Arrowhead Stadium',
                      note: 'Stay Downtown / Power & Light for nightlife, then accept the rideshare/parking reality.',
                      href: 'https://expedia.com/affiliates/hotel-search-kansas-city',
                      guideHref: '/world-cup-2026-kansas-city-guide',
                    },
                    {
                      city: 'Toronto',
                      stadium: 'BMO Field',
                      note: 'Stay Downtown/Waterfront for transit + food, and take TTC/GO to the stadium area.',
                      href: 'https://expedia.com/affiliates/hotel-search-toronto',
                      guideHref: '/world-cup-2026-toronto-guide',
                    },
                  ].map((c) => (
                    <div
                      key={c.city}
                      className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-teal-200 dark:hover:border-teal-800 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-6 mb-6">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                            {c.city} <span className="text-slate-400 font-normal">({c.stadium})</span>
                          </h3>
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{c.note}</p>
                        </div>
                        <Building className="w-5 h-5 text-teal-500 mt-1" />
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Link
                          href={c.guideHref}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                        >
                          City guide <ArrowRight className="w-4 h-4" />
                        </Link>
                        <AffiliateButton href={c.href} text="Search hotels" variant="primary" icon={ExternalLink} />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="budget" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-teal-500 font-mono text-sm font-bold tracking-widest uppercase">05</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">
                    Budget Breakdown
                  </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      title: 'High-cost nights',
                      text: 'New York / New Jersey and Toronto can spike quickly. Book refundable inventory early.',
                      icon: CreditCard,
                    },
                    {
                      title: 'Value bases',
                      text: 'Philadelphia can be better value than NYC if you stay transit-adjacent, not stadium-adjacent.',
                      icon: Building,
                    },
                    {
                      title: 'Hidden costs',
                      text: 'Kansas City and Houston add rideshare/rental/parking costs even if hotels look cheaper.',
                      icon: AlertTriangle,
                    },
                  ].map((item) => (
                    <div key={item.title} className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-3 mb-4">
                        <item.icon className="w-5 h-5 text-teal-500" />
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">{item.title}</h3>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/world-cup-2026-budget-guide"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                  >
                    Read the budget guide <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/world-cup-2026-accommodation-guide"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                  >
                    Accommodation strategy <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </section>

              <section id="visas" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-teal-500 font-mono text-sm font-bold tracking-widest uppercase">06</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">
                    Visa & Entry
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="w-5 h-5 text-teal-500" />
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">Cross-border reality</h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Group E can require travel across the USA and Canada. Don’t assume a single permission covers both.
                      Check entry rules early and plan for multi-entry if you’re bouncing between countries.
                    </p>
                  </div>
                  <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle className="w-5 h-5 text-amber-500" />
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">Buffer time</h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      If you fly into Toronto mid-trip, treat it like an international transit day: earlier flights, extra
                      airport time, and a “fail-safe” hotel night.
                    </p>
                  </div>
                </div>

                <div className="mt-10 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
                        <Shield className="w-5 h-5 text-teal-500" />
                        Travel insurance for multi-city trips
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
                        For a cross-border itinerary, prioritize medical coverage, trip delay, and cancellation protection.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/world-cup-2026-travel-insurance-guide"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                      >
                        What to cover <ArrowRight className="w-4 h-4" />
                      </Link>
                      <AffiliateButton href="https://www.worldnomads.com/" text="World Nomads" variant="primary" icon={ExternalLink} />
                    </div>
                  </div>
                </div>
              </section>

              <section id="insider" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-teal-500 font-mono text-sm font-bold tracking-widest uppercase">07</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">
                    Insider Tips
                  </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Matchday arrival',
                      text: 'Arrive early. Security lines are unpredictable and transit surges happen fast.',
                    },
                    {
                      title: 'Exit plan',
                      text: 'In Kansas City and Houston, expect long post-match traffic. Either leave early or wait it out.',
                    },
                    {
                      title: 'Keep it light',
                      text: 'Bring minimal items. Clear bag policies and checks can slow you down.',
                    },
                  ].map((t) => (
                    <div key={t.title} className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">{t.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{t.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <AffiliateButton
                    href="https://www.amazon.com/s?k=clear+stadium+bag&tag=stadiumport-20"
                    text="Clear Stadium Bag"
                    variant="primary"
                  />
                  <AffiliateButton
                    href="https://www.amazon.com/s?k=portable+phone+charger&tag=stadiumport-20"
                    text="Portable Charger"
                    variant="outline"
                  />
                </div>
              </section>

              <section id="packing" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-teal-500 font-mono text-sm font-bold tracking-widest uppercase">08</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">
                    Packing Essentials
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3 mb-4">
                      <Thermometer className="w-5 h-5 text-teal-500" />
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">Dress for extremes</h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Houston can feel hot and humid while Toronto can turn cool at night. Pack layers and plan for rain.
                    </p>
                  </div>
                  <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3 mb-4">
                      <CreditCard className="w-5 h-5 text-teal-500" />
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">Offline backups</h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Save tickets and hotel confirmations offline, plus a screenshot of your stadium entry rules.
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <AffiliateButton
                    href="https://www.amazon.com/s?k=packable+rain+jacket&tag=stadiumport-20"
                    text="Packable Rain Jacket"
                    variant="secondary"
                  />
                  <AffiliateButton
                    href="https://www.amazon.com/s?k=collapsible+water+bottle&tag=stadiumport-20"
                    text="Collapsible Bottle"
                    variant="outline"
                  />
                </div>
              </section>

              <section id="faq" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-teal-500 font-mono text-sm font-bold tracking-widest uppercase">FAQ</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">
                    Common Questions
                  </h2>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <AccordionItem
                      key={faq.q}
                      question={faq.q}
                      answer={faq.a}
                      isOpen={openFaqIndex === idx}
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    />
                  ))}
                </div>
              </section>

              <section className="mt-24 mb-12">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 dark:bg-white px-8 py-16 md:px-16 md:py-24 text-center">
                  <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white dark:text-slate-900 mb-6 tracking-tight">
                      Build Your Group E Plan
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 dark:text-slate-600 mb-10 leading-relaxed">
                      Use a multi-city itinerary, lock refundable hotels, and pick a realistic match set you can actually
                      attend.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        href="/world-cup-2026-itinerary-planning"
                        className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-teal-600 hover:bg-teal-700 text-slate-900 dark:text-white font-bold text-sm tracking-wide transition-colors"
                      >
                        Itinerary planning
                      </Link>
                      <Link
                        href="/world-cup-2026-groups"
                        className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-transparent border border-slate-700 dark:border-slate-200 text-white dark:text-slate-900 font-bold text-sm tracking-wide hover:bg-white/10 dark:hover:bg-slate-900/5 transition-colors"
                      >
                        View other groups
                      </Link>
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[80%] rounded-full bg-teal-500/20 blur-[100px]" />
                    <div className="absolute -bottom-[50%] -right-[20%] w-[80%] h-[80%] rounded-full bg-blue-500/20 blur-[100px]" />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}










