import { MapPin, Phone, Mail, Send, AlertCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="inline-block py-1.5 px-4 rounded-full bg-brand-bg/10 text-brand-primary font-bold text-xs tracking-widest uppercase mb-6 shadow-sm border border-brand-bg/50">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
            Let's Discuss Your <br className="hidden md:block"/>
            <span className="text-brand-primary">Next Project.</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Have a question or need a service? Contact us today and we'll be happy to assist you with your electrical infrastructure needs.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 relative">
          
          {/* Form */}
          <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative z-20">
            <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Send a Message</h3>
            
            <form className="space-y-8" name="contact" method="POST" data-netlify="true" action="/success">
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name *</label>
                  <input type="text" required placeholder="John Doe" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all bg-slate-50 hover:bg-white text-slate-900 font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address *</label>
                  <input type="email" required placeholder="john@company.com" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all bg-slate-50 hover:bg-white text-slate-900 font-medium" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all bg-slate-50 hover:bg-white text-slate-900 font-medium" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Your Message *</label>
                <textarea required rows={5} placeholder="Describe your project, requirements, or enquiry..." className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all bg-slate-50 hover:bg-white text-slate-900 font-medium resize-none"></textarea>
              </div>

              {/* Notice for Internship */}
              <div className="bg-brand-bg/5 p-4 rounded-xl border border-brand-bg/20 flex gap-4 items-start">
                  <AlertCircle size={24} className="text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm text-slate-900 mb-1">Applying for an internship?</h5>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed mb-0">Please mention "Internship" in your message, or call the Admin Office directly. We offer hands-on training opportunities.</p>
                  </div>
              </div>
              
              <button type="submit" className="w-full bg-brand-primary hover:bg-brand-dark text-black hover:text-white font-bold text-lg py-5 px-10 rounded-xl transition-all shadow-[0_10px_30px_rgba(155,244,103,0.3)] hover:shadow-[0_20px_40px_rgba(155,244,103,0.4)] flex items-center justify-center gap-3 group">
                Send Inquiry
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
          
          {/* Details & Map */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-slate-900 p-8 md:p-10 rounded-[2rem] shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[60px] rounded-full mix-blend-screen pointer-events-none" />
                
                <h3 className="text-2xl font-black text-white mb-10 tracking-tight">Direct Contacts</h3>
                
                <div className="space-y-8 relative z-10">
                    <div className="flex gap-5 group">
                        <div className="w-12 h-12 rounded-xl bg-brand-primary/20 text-brand-primary flex items-center justify-center shrink-0 border border-brand-primary/20 group-hover:bg-brand-primary group-hover:text-black transition-colors duration-300">
                            <MapPin size={24} />
                        </div>
                        <div>
                        <h4 className="font-bold text-white mb-2 tracking-wide uppercase text-sm">Registered Office</h4>
                        <p className="text-slate-400 text-sm leading-relaxed font-medium">Old #37-A, New #32, Kesari Nagar 6th Street Extension, Adambakkam, Chennai — 600088</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-5 group">
                        <div className="w-12 h-12 rounded-xl bg-brand-primary/20 text-brand-primary flex items-center justify-center shrink-0 border border-brand-primary/20 group-hover:bg-brand-primary group-hover:text-black transition-colors duration-300">
                            <MapPin size={24} />
                        </div>
                        <div>
                        <h4 className="font-bold text-white mb-2 tracking-wide uppercase text-sm">Factory Site</h4>
                        <p className="text-slate-400 text-sm leading-relaxed font-medium">#59, S. No.504/1A, 1B, 1C, Erikkarai Street, Amarambedu Village, Kanchipuram — 602109</p>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-slate-800 my-8" />

                <div className="space-y-6">
                    <div className="flex gap-5 group items-center">
                        <div className="w-12 h-12 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 border border-slate-700 group-hover:bg-brand-primary group-hover:text-black group-hover:border-brand-primary transition-colors duration-300">
                            <Phone size={20} />
                        </div>
                        <div className="grid grid-cols-2 gap-4 w-full">
                            <div>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Admin</p>
                                <a href="tel:04442697322" className="text-white font-medium text-sm hover:text-brand-primary transition-colors">044-42697322</a>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Factory</p>
                                <a href="tel:04429997069" className="text-white font-medium text-sm hover:text-brand-primary transition-colors">044-29997069</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-5 group items-center">
                        <div className="w-12 h-12 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 border border-slate-700 group-hover:bg-brand-primary group-hover:text-black group-hover:border-brand-primary transition-colors duration-300">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Direct Email</p>
                            <a href="mailto:info@sres-electric.com" className="text-white font-medium text-sm hover:text-brand-primary transition-colors">info@sres-electric.com</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="w-full h-64 md:h-80 bg-slate-200 rounded-[2rem] overflow-hidden relative shadow-lg shadow-slate-200 border border-slate-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15548.868779836965!2d80.1917!3d12.986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d883e0ac2b5%3A0x8677f9cd4ad545ba!2sAdambakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1708453482711!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-1000 w-full h-full"
              ></iframe>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
