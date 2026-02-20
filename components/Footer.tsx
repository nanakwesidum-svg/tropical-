'use client';

import Link from 'next/link';
import { Mail, Linkedin, Twitter, Globe } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-lg">🥭</span>
              </div>
              <span className="font-bold text-lg">
                Tropical Fruit Trader
              </span>
            </div>
            <p className="text-white/70 text-sm mb-6">
              Premium tropical fruits and snacks from Ghana and Kenya, delivered fresh to European markets. Fair trade, transparent sourcing, exceptional quality.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                className="text-white/70 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                className="text-white/70 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@afro-iberian.com"
                className="text-white/70 hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#products" className="hover:text-accent transition-colors">
                  Tropical Fruits
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent transition-colors">
                  Specialty Crops
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent transition-colors">
                  Value-Added
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#bridge" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#market" className="hover:text-accent transition-colors">
                  Market Insights
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Locations */}
        <div className="py-8 border-t border-white/10">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl mb-2">🇬🇭</div>
              <p className="text-sm font-semibold">Ghana</p>
              <p className="text-xs text-white/60">Production Hub</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🇪🇸</div>
              <p className="text-sm font-semibold">Spain</p>
              <p className="text-xs text-white/60">Distribution Gateway</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🇰🇪</div>
              <p className="text-sm font-semibold">Kenya</p>
              <p className="text-xs text-white/60">Production & Processing</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-sm text-white/70">
          <p>
            &copy; {currentYear} Afro-Iberian Trade Bridge. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <span className="text-accent">♥</span> for impact
          </p>
        </div>
      </div>
    </footer>
  );
}
