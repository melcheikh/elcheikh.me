'use client';

import { useState, FormEvent } from 'react';
import type { ContactSubmission } from '@/types';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    message: '',
    honeypot: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', businessName: '', message: '', honeypot: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send message');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-teal/5 border border-teal/20 rounded-[2rem] p-12 text-center animate-in fade-in zoom-in duration-700">
        <div className="w-24 h-24 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-teal/20 shadow-lg shadow-teal/10">
          <CheckCircle2 className="w-12 h-12 text-teal" />
        </div>
        <h3 className="text-4xl font-display font-bold text-white mb-4">Target Acquired!</h3>
        <p className="text-tertiary-fixed-dim text-lg font-body max-w-md mx-auto leading-relaxed">
          Your strategic inquiry has been received. Our analysts will reach out within 12 business hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-12 text-teal font-black uppercase tracking-[0.2em] text-xs hover:text-white transition-colors flex items-center justify-center gap-3 mx-auto group"
        >
          <span>Submit Another Mission</span>
          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    );
  }

  const inputClasses = "w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-gold focus:ring-4 focus:ring-gold/5 outline-none transition-all text-white font-body placeholder:text-white/20";
  const labelClasses = "block text-[10px] font-black uppercase tracking-[0.3em] text-gold mb-3 ml-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full Name <span className="text-gold/50">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClasses}
            placeholder="John Citizen"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Corporate Email <span className="text-gold/50">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClasses}
            placeholder="john@business.com.au"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="phone" className={labelClasses}>Priority Phone</label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={inputClasses}
            placeholder="04XX XXX XXX"
          />
        </div>
        <div>
          <label htmlFor="business" className={labelClasses}>Company Entity</label>
          <input
            id="business"
            type="text"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            className={inputClasses}
            placeholder="Ocean Ventures Pty Ltd"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Strategic Objectives <span className="text-gold/50">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputClasses} resize-none`}
          placeholder="Outline your primary goals and current technical challenges..."
        />
      </div>

      {status === 'error' && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl px-6 py-5 text-red-400 text-sm font-medium flex items-center gap-4 animate-shake">
          <AlertCircle className="w-6 h-6 flex-shrink-0" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="group relative w-full bg-gold text-navy-dark py-6 rounded-2xl text-xl font-black transition-all shadow-2xl shadow-gold/20 hover:shadow-gold/40 hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        <span className="relative flex items-center justify-center gap-4">
          {status === 'loading' ? (
            <>
              <Loader2 className="animate-spin h-6 w-6" />
              <span>Strategizing...</span>
            </>
          ) : (
            <>
              <span>Get Your ROI Roadmap</span>
              <Send className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
            </>
          )}
        </span>
      </button>
    </form>
  );
}
