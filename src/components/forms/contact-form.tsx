'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || 'Something went wrong');
      }

      setIsSuccess(true);
      reset();

      // Redirect to thank you page after a short delay
      setTimeout(() => {
        window.location.href = '/thank-you?type=contact';
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12 px-6 bg-success-light rounded-2xl border border-green-200">
        <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
        <h3 className="text-heading-lg font-heading font-bold text-primary mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-body-md text-gray-600">
          Thank you for contacting SHL. Our logistics expert will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {error && (
        <div className="p-4 bg-error-light rounded-xl border border-red-200 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5">
            Full Name <span className="text-error">*</span>
          </label>
          <Input
            id="name"
            placeholder="Enter your full name"
            error={errors.name?.message}
            {...register('name')}
          />
        </div>

        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-primary mb-1.5">
            Mobile Number <span className="text-error">*</span>
          </label>
          <Input
            id="mobile"
            type="tel"
            placeholder="10-digit mobile number"
            error={errors.mobile?.message}
            {...register('mobile')}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">
          Email Address <span className="text-error">*</span>
        </label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          error={errors.email?.message}
          {...register('email')}
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-primary mb-1.5">
          Subject <span className="text-error">*</span>
        </label>
        <Input
          id="subject"
          placeholder="How can we help?"
          error={errors.subject?.message}
          {...register('subject')}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">
          Message <span className="text-error">*</span>
        </label>
        <Textarea
          id="message"
          placeholder="Tell us about your logistics requirements..."
          error={errors.message?.message}
          {...register('message')}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </>
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        We respond within 2 hours during business hours (Mon-Sat, 9 AM - 7 PM)
      </p>
    </form>
  );
}
