import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  Sparkles,
  Instagram,
  Linkedin,
  Facebook,
  Compass,
} from 'lucide-react';
import { SHOWROOM_INFO } from '../data/furnitureData';
import { ContactFormState } from '../types';

interface ContactSectionProps {
  prefillMessage?: string;
  prefillInterest?: ContactFormState['interest'];
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefillMessage = '',
  prefillInterest = 'showroom_visit',
}) => {
  const [formData, setFormData] = useState<ContactFormState>({
    fullName: '',
    email: '',
    phone: '',
    interest: prefillInterest,
    preferredDate: '',
    message: prefillMessage,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update when prefill props change
  React.useEffect(() => {
    if (prefillMessage) {
      setFormData((prev) => ({ ...prev, message: prefillMessage }));
    }
    if (prefillInterest) {
      setFormData((prev) => ({ ...prev, interest: prefillInterest }));
    }
  }, [prefillMessage, prefillInterest]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    // Simulate brief concierge dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F5F2ED] border-t border-[#E2DDD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-[#736B63] block mb-2">
            06 // Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4">
            Visit Our Showroom & Inquire
          </h2>
          <p className="text-xs sm:text-sm text-[#66615B] leading-relaxed font-light">
            Whether booking a private showroom viewing, inquiring about custom dimensions,
            or consulting on interior layouts, our design specialists are here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Column: Contact Cards & Showroom Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Showroom Location Card */}
            <div className="bg-white p-6 sm:p-8 rounded-none border border-[#E2DDD5] shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-2">
                <span>Flagship Design Showroom</span>
              </h3>

              <div className="space-y-5 text-xs sm:text-sm text-[#4A443C]">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-none bg-[#F5F2ED] text-[#1A1A1A] border border-[#E2DDD5] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#736B63] block">
                      Address
                    </span>
                    <p className="font-medium text-[#1A1A1A]">{SHOWROOM_INFO.address}</p>
                    <p className="text-[#66615B]">{SHOWROOM_INFO.cityStateZip}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-none bg-[#F5F2ED] text-[#1A1A1A] border border-[#E2DDD5] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#736B63] block">
                      Direct Concierge
                    </span>
                    <a
                      href={`tel:${SHOWROOM_INFO.phone}`}
                      className="font-medium text-[#1A1A1A] hover:text-[#8C6239] transition-colors"
                    >
                      {SHOWROOM_INFO.phone}
                    </a>
                    <p className="text-[10px] font-mono text-[#8C8377]">Toll-free • Private consultations</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-none bg-[#F5F2ED] text-[#1A1A1A] border border-[#E2DDD5] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#736B63] block">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${SHOWROOM_INFO.email}`}
                      className="font-medium text-[#1A1A1A] hover:text-[#8C6239] transition-colors"
                    >
                      {SHOWROOM_INFO.email}
                    </a>
                    <p className="text-[10px] font-mono text-[#8C8377]">Guaranteed response within 4 hours</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 pt-4 border-t border-[#E2DDD5]">
                  <div className="w-10 h-10 rounded-none bg-[#F5F2ED] text-[#1A1A1A] border border-[#E2DDD5] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#736B63] block">
                      Showroom Hours
                    </span>
                    <p className="font-medium text-[#1A1A1A]">{SHOWROOM_INFO.hoursWeekday}</p>
                    <p className="text-[#66615B]">{SHOWROOM_INFO.hoursWeekend}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Connect */}
            <div className="bg-[#1A1A1A] text-[#F5F2ED] p-6 rounded-none border border-white/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-serif text-lg font-bold text-white">Connect With Us</h4>
                <p className="text-xs text-[#A69E92]">Follow our latest architectural releases</p>
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href="#instagram"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-none bg-white/10 hover:bg-white hover:text-[#1A1A1A] text-white flex items-center justify-center transition-colors border border-white/15"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#linkedin"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-none bg-white/10 hover:bg-white hover:text-[#1A1A1A] text-white flex items-center justify-center transition-colors border border-white/15"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#facebook"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-none bg-white/10 hover:bg-white hover:text-[#1A1A1A] text-white flex items-center justify-center transition-colors border border-white/15"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#pinterest"
                  aria-label="Pinterest"
                  className="w-9 h-9 rounded-none bg-white/10 hover:bg-white hover:text-[#1A1A1A] text-white flex items-center justify-center transition-colors border border-white/15"
                >
                  <Compass className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-none border border-[#E2DDD5] shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-[#1A1A1A] text-white rounded-none flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-[#1A1A1A]">
                  Inquiry Received
                </h3>
                <p className="text-xs sm:text-sm text-[#66615B] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. A dedicated GM Furniture design concierge
                  has received your request and will reach out shortly at <strong>{formData.email}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        interest: 'showroom_visit',
                        preferredDate: '',
                        message: '',
                      });
                    }}
                    className="px-6 py-3 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-[0.15em] rounded-none hover:bg-[#333333] transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-1">
                    Send An Inquiry
                  </h3>
                  <p className="text-xs text-[#736B63] font-light">
                    Complete the form below to reserve a showroom appointment or request tailored pricing.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-none">
                    {errorMessage}
                  </div>
                )}

                {/* Form Fields Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-4 py-3 bg-[#FAF8F5] rounded-none border border-[#E2DDD5] text-xs text-[#1A1A1A] placeholder-[#8C8377] focus:outline-none focus:border-[#1A1A1A] transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="eleanor@example.com"
                      className="w-full px-4 py-3 bg-[#FAF8F5] rounded-none border border-[#E2DDD5] text-xs text-[#1A1A1A] placeholder-[#8C8377] focus:outline-none focus:border-[#1A1A1A] transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 019-2834"
                      className="w-full px-4 py-3 bg-[#FAF8F5] rounded-none border border-[#E2DDD5] text-xs text-[#1A1A1A] placeholder-[#8C8377] focus:outline-none focus:border-[#1A1A1A] transition-all"
                    />
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5 flex items-center justify-between">
                      <span>Preferred Visit Date</span>
                      <span className="text-[10px] text-[#8C8377] font-normal lowercase">(optional)</span>
                    </label>
                    <div className="relative">
                      <input
                        id="contact-date"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F5] rounded-none border border-[#E2DDD5] text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                    How Can We Assist You?
                  </label>
                  <select
                    id="contact-interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value as any })}
                    className="w-full px-4 py-3 bg-[#FAF8F5] rounded-none border border-[#E2DDD5] text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-all cursor-pointer font-medium"
                  >
                    <option value="showroom_visit">Private Showroom Walkthrough & Touch Session</option>
                    <option value="custom_furniture">Custom Dimensions & Bespoke Timber Finishes</option>
                    <option value="interior_consult">Complimentary 3D Spatial Layout Consultation</option>
                    <option value="bulk_corporate">Commercial / Executive Office Procurement</option>
                    <option value="general">General Inquiries & Product Availability</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                    Message / Project Details
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the pieces you love, room dimensions, or preferred timber and fabric swatches..."
                    className="w-full px-4 py-3 bg-[#FAF8F5] rounded-none border border-[#E2DDD5] text-xs text-[#1A1A1A] placeholder-[#8C8377] focus:outline-none focus:border-[#1A1A1A] transition-all"
                  />
                </div>

                {/* Submit Button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-[0.18em] rounded-none hover:bg-[#333333] active:scale-[0.99] transition-all flex items-center justify-center gap-3 shadow-sm border border-[#1A1A1A] focus:outline-none disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 animate-spin text-[#D4AF37]" />
                      Transmitting to Concierge...
                    </span>
                  ) : (
                    <>
                      <span>Submit Showroom Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
