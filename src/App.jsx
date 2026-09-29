import React, { useState } from 'react';
import {
  Menu, X, Star, MapPin, Phone, Mail, Clock, ShieldCheck, Wind,
  Droplets, GraduationCap, Trees, Siren, Sprout, ShoppingCart,
  Trophy, PartyPopper, ChevronRight, PlayCircle, Send
} from 'lucide-react';

import logo from './assets/as1.png';

export default function LittleTreasuresWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    childAge: '',
    service: '',
    branch: '',
    visitDate: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Practical Learning', href: '#practical-learning' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Contact', href: '#contact' },
  ];

  const practicalLearning = [
    { icon: Sprout, title: 'Terrace Organic Farming', desc: 'Kids grow, water, and harvest their own veggies — learning patience, biology, and where food really comes from.', color: 'bg-[#4ECDC4]' },
    { icon: ShoppingCart, title: 'Real-World Role Play', desc: 'Mini supermarket checkouts and traffic signal setups teach money sense, road safety, and social skills through play.', color: 'bg-[#FF6B6B]' },
    { icon: Trophy, title: 'Sports & Outdoor Play', desc: 'Daily outdoor games build gross motor skills, teamwork, and a lifelong love for movement and fresh air.', color: 'bg-[#FFC837]' },
    { icon: PartyPopper, title: 'Annual Milestone Celebrations', desc: 'Birthdays, festivals, and graduation days are celebrated together, building confidence and joyful memories.', color: 'bg-[#4ECDC4]' },
  ];

  const programs = [
    { title: 'Preschool & Playgroup', age: 'Age 1.5 - 5 Yrs', time: '9:00 AM - 12:30 PM', desc: 'A gentle, activity-based introduction to structured learning, language, and social play.' },
    { title: 'Extended Daycare', age: 'Age 1 - 10 Yrs', time: '9:00 AM - 8:00 PM', desc: 'Safe, nurturing full-day care with meals, nap time, homework help, and supervised play.' },
    { title: 'Activity Classes', age: 'All Age Groups', time: 'Flexible Slots', desc: "Art, music, dance, and skill-building sessions designed to nurture every child's unique talent." },
  ];

  const facilities = [
    { icon: ShieldCheck, title: 'CCTV Monitoring', desc: '24/7 surveillance for complete peace of mind.' },
    { icon: Wind, title: 'AC Rooms', desc: 'Comfortable, climate-controlled classrooms.' },
    { icon: Droplets, title: 'Hygienic Washrooms', desc: 'Child-friendly, sanitized facilities.' },
    { icon: GraduationCap, title: 'Trained Staff', desc: 'Qualified, caring, and background-verified educators.' },
    { icon: Trees, title: 'Outdoor Play Area', desc: 'Safe, spacious area for active outdoor fun.' },
    { icon: Siren, title: 'Emergency Support', desc: 'On-call medical assistance and first-aid ready staff.' },
  ];

  const trustBadges = [
    { icon: Star, text: '4.9 ★ Rating' },
    { icon: MapPin, text: '2 Branches in Ramapuram' },
    { icon: ShieldCheck, text: 'CCTV & AC Rooms' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ parentName: '', phone: '', childAge: '', service: '', branch: '', visitDate: '' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1B2A4A] font-sans antialiased w-full overflow-x-hidden scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FAFAFA]/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Rectangular logo: fixed height, width adjusts automatically */}
            <a href="#about" className="flex items-center min-w-0 shrink-0" aria-label="Little Treasures home">
              <img
                src={logo}
                alt="Little Treasures Day Care & Play School logo"
                className="h-10 sm:h-14 w-auto max-w-[200px] sm:max-w-[260px] object-contain"
              />
            </a>

            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-[#1B2A4A] hover:text-[#FF6B6B] transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:block shrink-0">
              <a
                href="#admissions"
                className="inline-flex items-center gap-2 bg-[#FF6B6B] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-[#e85a5a] transition-colors whitespace-nowrap"
              >
                Book a School Tour
              </a>
            </div>

            <button
              className="lg:hidden p-2 sm:p-2.5 rounded-xl bg-[#FFC837]/30 text-[#1B2A4A] focus:outline-none shrink-0"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 sm:px-6 pt-3 pb-6 space-y-1 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-base font-semibold text-[#1B2A4A] py-3 border-b border-gray-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#admissions"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-[#FF6B6B] text-white px-5 py-3 rounded-full text-sm font-bold shadow-md mt-4"
            >
              Book a School Tour
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="about" className="relative overflow-hidden py-10 sm:py-16 md:py-20 lg:py-24">
        <div className="absolute -top-10 -right-10 w-56 sm:w-72 md:w-96 h-56 sm:h-72 md:h-96 bg-[#FFC837]/20 rounded-full blur-3xl -z-10" />
        <div className="absolute top-40 -left-10 w-56 sm:w-72 md:w-96 h-56 sm:h-72 md:h-96 bg-[#4ECDC4]/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">

            <div className="text-left order-2 lg:order-1">
              <span className="inline-block bg-[#4ECDC4]/20 text-[#1B2A4A] font-bold text-[11px] sm:text-sm px-3 sm:px-3.5 py-1.5 rounded-full mb-4 leading-snug">
                From Tiny Hands to Big Dreams | Practical & Activity-Based Early Learning
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#1B2A4A] mb-4 sm:mb-6">
                Nurturing Little Minds through{' '}
                <span className="text-[#FF6B6B]">Practical Learning</span> in Ramapuram
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-[#1B2A4A]/70 mb-6 sm:mb-8 max-w-xl">
                A safe, joyful, and activity-driven space where your child learns by doing —
                from terrace farming to real-world role play, every day is an adventure.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
                <a
                  href="#admissions"
                  className="inline-flex items-center justify-center gap-2 bg-[#FF6B6B] text-white px-6 py-3.5 rounded-full font-bold shadow-lg hover:bg-[#e85a5a] transition-colors text-center text-sm sm:text-base"
                >
                  Enquire Now <ChevronRight className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#1B2A4A] px-6 py-3.5 rounded-full font-bold shadow-md hover:bg-[#FFC837]/20 transition-colors border border-gray-200 text-sm sm:text-base"
                >
                  <PlayCircle className="w-5 h-5 text-[#FF6B6B]" /> Virtual Tour
                </button>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {trustBadges.map((badge) => (
                  <div
                    key={badge.text}
                    className="flex items-center gap-1.5 sm:gap-2 bg-white px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl shadow-sm border border-gray-100"
                  >
                    <badge.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFC837] fill-[#FFC837] shrink-0" />
                    <span className="text-[10px] sm:text-xs font-bold text-[#1B2A4A] whitespace-nowrap">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative order-1 lg:order-2 max-w-sm sm:max-w-md mx-auto lg:max-w-none w-full">
              <div className="bg-gradient-to-br from-[#FFC837] via-[#FF6B6B] to-[#4ECDC4] rounded-[1.75rem] sm:rounded-[2.5rem] p-1.5 sm:p-2 shadow-xl">
                <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] aspect-square flex items-center justify-center p-6 sm:p-8 text-center">
                  <div className="w-full">
                    {/* Large rectangular logo in the hero card */}
                    <img
                      src={logo}
                      alt="Little Treasures Day Care & Play School logo"
                      className="w-full max-w-[280px] sm:max-w-[340px] h-auto object-contain mx-auto mb-4 sm:mb-6"
                    />
                    <p className="text-[#1B2A4A] font-bold text-sm sm:text-lg mb-1">
                      Little Treasures Play & Learning Environment
                    </p>
                    <p className="text-xs sm:text-sm text-[#1B2A4A]/60">
                      Designed for safety, fun, and active discovery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Practical Learning Section */}
      <section id="practical-learning" className="py-10 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
            <span className="text-[#FF6B6B] font-bold text-xs sm:text-sm uppercase tracking-wide">What Makes Us Different</span>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[#1B2A4A] mt-2">Unique Practical Learning Experiences</h2>
            <p className="text-xs sm:text-base text-[#1B2A4A]/60 mt-3">We believe children learn best by doing, not just watching.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {practicalLearning.map((item) => (
              <div key={item.title} className="bg-[#FAFAFA] rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl ${item.color} flex items-center justify-center mb-4 text-white`}>
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-[#1B2A4A] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#1B2A4A]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-10 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
            <span className="text-[#4ECDC4] font-bold text-xs sm:text-sm uppercase tracking-wide">Our Offerings</span>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[#1B2A4A] mt-2">Programs Designed for Every Stage</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {programs.map((program, idx) => (
              <div
                key={program.title}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-md border-t-4"
                style={{ borderTopColor: idx === 0 ? '#FF6B6B' : idx === 1 ? '#4ECDC4' : '#FFC837' }}
              >
                <h3 className="text-base sm:text-xl font-extrabold text-[#1B2A4A] mb-3">{program.title}</h3>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FF6B6B] mb-1">
                  <GraduationCap className="w-4 h-4 shrink-0" /> {program.age}
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1B2A4A]/60 mb-4">
                  <Clock className="w-4 h-4 shrink-0" /> {program.time}
                </div>
                <p className="text-xs sm:text-sm text-[#1B2A4A]/60 leading-relaxed">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-10 sm:py-16 md:py-20 lg:py-24 bg-[#1B2A4A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
            <span className="text-[#FFC837] font-bold text-xs sm:text-sm uppercase tracking-wide">Peace of Mind</span>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold mt-2">Safety & Facilities</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {facilities.map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 hover:bg-white/10 transition-colors">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFC837] flex items-center justify-center mb-3">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#1B2A4A]" />
                </div>
                <h3 className="font-bold text-white mb-1 text-sm sm:text-base">{item.title}</h3>
                <p className="text-xs sm:text-sm text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Form Section */}
      <section id="admissions" className="py-10 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-10 border border-gray-100">
            <div className="text-center mb-6 sm:mb-8">
              <span className="text-[#FF6B6B] font-bold text-xs sm:text-sm uppercase tracking-wide">Admissions Open</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#1B2A4A] mt-1">Book Your Free School Tour</h2>
            </div>

            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="parentName" className="block text-xs font-bold text-[#1B2A4A] mb-1.5 uppercase">Parent Name</label>
                <input id="parentName" type="text" name="parentName" value={formData.parentName} onChange={handleChange} required placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#4ECDC4] bg-[#FAFAFA] text-sm" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-[#1B2A4A] mb-1.5 uppercase">Phone Number</label>
                <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#4ECDC4] bg-[#FAFAFA] text-sm" />
              </div>

              <div>
                <label htmlFor="childAge" className="block text-xs font-bold text-[#1B2A4A] mb-1.5 uppercase">Child's Age</label>
                <input id="childAge" type="text" name="childAge" value={formData.childAge} onChange={handleChange} required placeholder="e.g. 3 Years"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#4ECDC4] bg-[#FAFAFA] text-sm" />
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-bold text-[#1B2A4A] mb-1.5 uppercase">Program Choice</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#4ECDC4] bg-[#FAFAFA] text-sm">
                  <option value="">Select a program</option>
                  <option value="preschool">Preschool & Playgroup</option>
                  <option value="daycare">Extended Daycare</option>
                  <option value="activity">Activity Classes</option>
                </select>
              </div>

              <div>
                <label htmlFor="branch" className="block text-xs font-bold text-[#1B2A4A] mb-1.5 uppercase">Branch Location</label>
                <select id="branch" name="branch" value={formData.branch} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#4ECDC4] bg-[#FAFAFA] text-sm">
                  <option value="">Select a branch</option>
                  <option value="branch1">Branch 1 - Raghavendra Nagar</option>
                  <option value="branch2">Branch 2 - Kumaran Street</option>
                </select>
              </div>

              <div>
                <label htmlFor="visitDate" className="block text-xs font-bold text-[#1B2A4A] mb-1.5 uppercase">Visit Date</label>
                <input id="visitDate" type="date" name="visitDate" value={formData.visitDate} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#4ECDC4] bg-[#FAFAFA] text-sm" />
              </div>

              <div className="sm:col-span-2 mt-2">
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#FF6B6B] text-white py-3.5 rounded-xl font-bold shadow-md hover:bg-[#e85a5a] transition-colors text-sm sm:text-base">
                  <Send className="w-4 h-4" /> Submit Tour Request
                </button>
                {submitted && (
                  <p className="text-center text-[#4ECDC4] font-bold text-sm mt-3">
                    Thank you! We will reach out to confirm your visit. 🎉
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#1B2A4A] text-white py-10 sm:py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12">
            <div>
              {/* Rectangular logo on a white plate so it stays readable on the dark footer */}
              <div className="inline-block bg-white rounded-xl p-2 mb-3">
                <img
                  src={logo}
                  alt="Little Treasures Day Care & Play School logo"
                  className="h-10 sm:h-12 w-auto max-w-[200px] object-contain"
                />
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                Practical & activity-based early childhood education in Ramapuram, Chennai.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#FFC837] mb-3 text-xs uppercase tracking-wide">Branch 1</h4>
              <p className="text-xs text-white/70 leading-relaxed flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 text-[#4ECDC4] mt-0.5" />
                <span>No. 11, Raghavendra Nagar, 1st Street, Ramapuram, Chennai - 600089</span>
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#FFC837] mb-3 text-xs uppercase tracking-wide">Branch 2</h4>
              <p className="text-xs text-white/70 leading-relaxed flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 text-[#4ECDC4] mt-0.5" />
                <span>No. 102, Kumaran Street, Nehru Nagar, Ramapuram, Chennai - 600089</span>
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#FFC837] mb-3 text-xs uppercase tracking-wide">Contact Us</h4>
              <div className="space-y-2 text-xs text-white/70">
                <p className="flex items-center gap-2 flex-wrap">
                  <Phone className="w-3.5 h-3.5 text-[#4ECDC4] shrink-0" /> +91 9087131608 / +91 8825533815
                </p>
                <p className="flex items-center gap-2 break-all">
                  <Mail className="w-3.5 h-3.5 text-[#4ECDC4] shrink-0" /> littletreasureschennai@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#4ECDC4] shrink-0" /> Mon-Sat: 8:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-white/40 pt-6 border-t border-white/10">
            © {new Date().getFullYear()} Little Treasures Day Care & Play School. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}