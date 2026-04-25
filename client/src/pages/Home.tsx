import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Zap, TrendingUp, Award, BarChart3 } from "lucide-react";
import { useState } from "react";

const montserratDisplay = { fontFamily: 'Montserrat, sans-serif', fontWeight: 900, letterSpacing: '-0.02em' };
const montserratHeading = { fontFamily: 'Montserrat, sans-serif', fontWeight: 700 };
const montserratBold = { fontFamily: 'Montserrat, sans-serif', fontWeight: 600 };

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container flex items-center justify-between py-4">
          <div style={montserratDisplay} className="text-2xl text-primary">Rep Rank</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground/70 hover:text-foreground transition">Features</a>
            <a href="#how-it-works" className="text-foreground/70 hover:text-foreground transition">How It Works</a>
            <a href="#results" className="text-foreground/70 hover:text-foreground transition">Results</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="accent-bar mb-6"></div>
              <h1 style={montserratDisplay} className="text-5xl md:text-6xl text-foreground leading-tight mb-6">
                Measure Your Personal Brand
              </h1>
              <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                Get an objective score of your professional reputation, benchmark against peers, and unlock a data-driven roadmap to industry leadership.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white"
                  style={montserratBold}
                  onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary/5"
                >
                  Watch Demo
                </Button>
              </div>
              <p className="text-sm text-foreground/50 mt-6">Stealth mode. Limited early access.</p>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663584406591/T9RdV8cRCD3qMo2GreuXiJ/reprank_hero_bg-3qcbsriWAKGyVFxC7HesYb.webp" 
                alt="Rep Rank Dashboard" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="features" className="py-20 md:py-32 bg-foreground/2">
        <div className="container">
          <div className="text-center mb-16">
            <div className="accent-bar mx-auto mb-6"></div>
            <h2 style={montserratDisplay} className="text-4xl md:text-5xl text-foreground mb-4">
              Three Pillars of Personal Brand Intelligence
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Rep Rank combines digital audits, peer benchmarking, and strategic planning into one powerful platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-card p-8 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-none flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 style={montserratHeading} className="text-2xl mb-4 text-foreground">Digital Brand Audit</h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                We scan your entire online presence across LinkedIn, Google, Twitter, and your personal website to identify gaps and opportunities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">Profile completeness</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">Search visibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">Authority signals</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-card p-8 border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-none flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 style={montserratHeading} className="text-2xl mb-4 text-foreground">Peer Benchmarking</h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                See exactly how you stack up against your industry peers and identify the specific gaps holding you back.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">Competitive positioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">Strength & weakness analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">Growth opportunities</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-card p-8 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-none flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 style={montserratHeading} className="text-2xl mb-4 text-foreground">30-60-90 Roadmap</h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Get a customized action plan to improve your Rep Score and achieve industry leadership within 90 days.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">Day 30: Foundation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">Day 60: Momentum</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">Day 90: Leadership</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <div className="accent-bar mx-auto mb-6"></div>
            <h2 style={montserratDisplay} className="text-4xl md:text-5xl text-foreground mb-4">
              How Rep Rank Works
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663584406591/T9RdV8cRCD3qMo2GreuXiJ/reprank_audit_visual-Gozs3tMekRQDCUJvSwPyF7.webp" 
                alt="Digital Brand Audit" 
                className="w-full h-auto"
              />
            </div>
            <div>
              <h3 style={montserratDisplay} className="text-3xl mb-6 text-foreground">The Digital Brand Audit</h3>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Rep Rank conducts a comprehensive 4-step analysis of your online presence:
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div style={montserratBold} className="w-10 h-10 bg-primary text-white flex items-center justify-center flex-shrink-0 rounded-none">1</div>
                  <div>
                    <h4 style={montserratHeading} className="text-lg mb-2">Discover</h4>
                    <p className="text-foreground/70">We analyze your presence across LinkedIn, Twitter, Google, and your personal website.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div style={montserratBold} className="w-10 h-10 bg-primary text-white flex items-center justify-center flex-shrink-0 rounded-none">2</div>
                  <div>
                    <h4 style={montserratHeading} className="text-lg mb-2">Evaluate</h4>
                    <p className="text-foreground/70">We assess visibility, consistency, content quality, and sentiment across all platforms.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div style={montserratBold} className="w-10 h-10 bg-primary text-white flex items-center justify-center flex-shrink-0 rounded-none">3</div>
                  <div>
                    <h4 style={montserratHeading} className="text-lg mb-2">Score</h4>
                    <p className="text-foreground/70">We calculate your Rep Score (0-100) based on weighted criteria and industry benchmarks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div style={montserratBold} className="w-10 h-10 bg-primary text-white flex items-center justify-center flex-shrink-0 rounded-none">4</div>
                  <div>
                    <h4 style={montserratHeading} className="text-lg mb-2">Recommend</h4>
                    <p className="text-foreground/70">We provide actionable insights prioritized by impact and effort to boost your score.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 style={montserratDisplay} className="text-3xl mb-6 text-foreground">Peer Benchmarking</h3>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                See exactly where you stand compared to your industry peers. Rep Rank identifies your competitive advantages and the specific areas where you need to improve.
              </p>
              <div className="bg-primary/5 border-l-4 border-primary p-6 mb-8">
                <p style={montserratHeading} className="text-foreground mb-2">Your Rep Score vs Peers Average</p>
                <div className="flex items-baseline gap-4">
                  <span style={montserratDisplay} className="text-4xl text-primary">72</span>
                  <span className="text-foreground/70">vs</span>
                  <span style={montserratHeading} className="text-2xl text-foreground/50">58</span>
                </div>
              </div>
              <p className="text-foreground/70">
                You're in the top 15% of your peer group. Keep leveraging your strengths while addressing gaps in authority signals.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663584406591/T9RdV8cRCD3qMo2GreuXiJ/reprank_benchmark_visual-6Mx2EG2ez6TfrFR2BiLFKe.webp" 
                alt="Peer Benchmarking" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rep Score Section */}
      <section className="py-20 md:py-32 bg-foreground/2">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663584406591/T9RdV8cRCD3qMo2GreuXiJ/reprank_score_card-nX4SsFwcfimyeC4676ts6C.webp" 
                alt="Rep Score" 
                className="w-full h-auto"
              />
            </div>
            <div>
              <div className="accent-bar mb-6"></div>
              <h2 style={montserratDisplay} className="text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                Your Rep Score: The Single Metric That Matters
              </h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                A proprietary 0-100 score that quantifies your professional influence and brand health. Unlike vanity metrics, your Rep Score is based on objective data and industry benchmarks.
              </p>
              <div className="space-y-4">
                <div>
                  <p style={montserratHeading} className="text-foreground mb-2">Visibility (35%)</p>
                  <p className="text-foreground/70">Your searchability and reach across digital channels</p>
                </div>
                <div>
                  <p style={montserratHeading} className="text-foreground mb-2">Authority (40%)</p>
                  <p className="text-foreground/70">Trust signals, citations, and industry recognition</p>
                </div>
                <div>
                  <p style={montserratHeading} className="text-foreground mb-2">Engagement (25%)</p>
                  <p className="text-foreground/70">Quality of professional interactions and network influence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <div className="accent-bar mx-auto mb-6"></div>
            <h2 style={montserratDisplay} className="text-4xl md:text-5xl text-foreground mb-4">
              Real Results from Early Users
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Professionals and entrepreneurs are already using Rep Rank to accelerate their careers and businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border p-8">
              <div className="flex items-baseline gap-2 mb-4">
                <span style={montserratDisplay} className="text-4xl text-primary">+24</span>
                <span style={montserratHeading} className="text-lg text-accent">Points</span>
              </div>
              <h4 style={montserratHeading} className="text-lg mb-2 text-foreground">Entrepreneur</h4>
              <p className="text-foreground/70 mb-4">
                Secured $2M seed round by establishing founder authority and digital trust.
              </p>
              <p className="text-sm text-foreground/50">Rep Score: 45 → 69 in 90 days</p>
            </div>

            <div className="bg-card border border-border p-8">
              <div className="flex items-baseline gap-2 mb-4">
                <span style={montserratDisplay} className="text-4xl text-primary">+18</span>
                <span style={montserratHeading} className="text-lg text-accent">Points</span>
              </div>
              <h4 style={montserratHeading} className="text-lg mb-2 text-foreground">Executive</h4>
              <p className="text-foreground/70 mb-4">
                Recruited for CMO role at Fortune 500 firm via optimized inbound visibility.
              </p>
              <p className="text-sm text-foreground/50">Rep Score: 62 → 80 in 60 days</p>
            </div>

            <div className="bg-card border border-border p-8">
              <div className="flex items-baseline gap-2 mb-4">
                <span style={montserratDisplay} className="text-4xl text-primary">+31</span>
                <span style={montserratHeading} className="text-lg text-accent">Points</span>
              </div>
              <h4 style={montserratHeading} className="text-lg mb-2 text-foreground">Consultant</h4>
              <p className="text-foreground/70 mb-4">
                3x inbound lead flow through strategic content and peer benchmarking.
              </p>
              <p className="text-sm text-foreground/50">Rep Score: 51 → 82 in 90 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="waitlist" className="py-20 md:py-32 bg-primary text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 style={montserratDisplay} className="text-4xl md:text-5xl mb-6 leading-tight">
              Own Your Reputation
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join the waitlist for early access to Rep Rank. Limited spots available for beta users.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
              <Input 
                type="email" 
                placeholder="your@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                required
              />
              <Button 
                type="submit" 
                className="bg-accent hover:bg-accent/90 text-primary whitespace-nowrap"
                style={montserratBold}
              >
                Join Waitlist
              </Button>
            </form>

            {submitted && (
              <div className="bg-white/10 border border-white/20 rounded-none p-4 text-white">
                <p style={montserratHeading}>✓ Thanks for joining! Check your email for next steps.</p>
              </div>
            )}

            <p className="text-sm opacity-75">
              Stealth mode. We'll never spam you. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div style={montserratDisplay} className="text-lg text-primary mb-4">Rep Rank</div>
              <p className="text-foreground/70 text-sm">Personal branding intelligence for professionals and entrepreneurs.</p>
            </div>
            <div>
              <h4 style={montserratHeading} className="text-sm mb-4 text-foreground">Product</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#features" className="hover:text-foreground transition">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-foreground transition">How It Works</a></li>
                <li><a href="#results" className="hover:text-foreground transition">Results</a></li>
              </ul>
            </div>
            <div>
              <h4 style={montserratHeading} className="text-sm mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-foreground transition">About</a></li>
                <li><a href="#" className="hover:text-foreground transition">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 style={montserratHeading} className="text-sm mb-4 text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-foreground transition">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-foreground/50">
              © 2026 Rep Rank. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
