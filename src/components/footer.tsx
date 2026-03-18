import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Projects", href: "/projects" },
    { name: "Contact Us", href: "/contact" },
  ];

  const services = [
    { name: "HT & EHV Substations", href: "/services" },
    { name: "Protection Refurbishment", href: "/services" },
    { name: "Substation Automation", href: "/services" },
    { name: "Training Programs", href: "/services" },
    { name: "Repair Services", href: "/services" },
  ];

  const products = [
    { name: "VCB Panels (11kV & 33kV)", href: "/products" },
    { name: "DB Boxes", href: "/products" },
    { name: "Cable Trays", href: "/products" },
    { name: "Automation & IoT", href: "/products" },
    { name: "Genuine Spares", href: "/products" },
  ];

  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Column 1 */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <h3 className="text-3xl font-black text-white tracking-tighter">SRES <span className="text-blue-500">Electric</span></h3>
            </Link>
            <p className="text-sm mb-2 font-bold text-gray-200">Sree Raghavendra Electric Services Pvt. Ltd.</p>
            <p className="text-xs text-gray-500 font-semibold tracking-wider uppercase mb-8">ISO 9001:2015 Certified | Est. 1994</p>

            <address className="not-italic text-sm text-gray-400 space-y-6">
              <div className="flex gap-3">
                <span className="font-bold text-white shrink-0 mt-0.5 w-6">HQ</span>
                <p className="leading-relaxed">Old #37-A, New #32, Kesari Nagar 6th Street Ext, Adambakkam, Chennai — 600088</p>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-blue-500 shrink-0 mt-0.5 w-6">FX</span>
                <p className="leading-relaxed">#59, Erikkarai Street, Amarambedu Village, Kanchipuram — 602109</p>
              </div>
            </address>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white mb-8 border-b border-gray-800 pb-4 inline-block pr-6">Company</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center text-sm font-medium hover:text-white transition-colors">
                    <ChevronRight size={14} className="mr-3 text-blue-600/70 transition-transform group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="text-base font-bold text-white mb-8 border-b border-gray-800 pb-4 inline-block pr-6">Solutions</h4>
            <ul className="space-y-4">
              {services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center text-sm font-medium hover:text-white transition-colors">
                    <ChevronRight size={14} className="mr-3 text-blue-600/70 transition-transform group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Products */}
          <div>
            <h4 className="text-base font-bold text-white mb-8 border-b border-gray-800 pb-4 inline-block pr-6">Equipment</h4>
            <ul className="space-y-4">
              {products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center text-sm font-medium hover:text-white transition-colors">
                    <ChevronRight size={14} className="mr-3 text-blue-600/70 transition-transform group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 pt-8 border-t border-slate-800/80">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} SRES Electric. Powering Your World with Precision.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-blue-400 transition-colors">Careers & Internships</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
