'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import {
  quoteFormSchema,
  type QuoteFormData,
  shipmentTypeOptions,
  vehicleOptions,
  volumeOptions,
} from '@/lib/validations';

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/request-quote', {
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

      // Redirect to thank you page
      setTimeout(() => {
        window.location.href = '/thank-you?type=quote';
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
          Quote Request Submitted!
        </h3>
        <p className="text-body-md text-gray-600">
          Thank you for contacting SHL. Our logistics expert will review your requirements and share a customized quote shortly.
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

      {/* Company & Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-primary mb-1.5">
            Company Name <span className="text-error">*</span>
          </label>
          <Input
            id="companyName"
            placeholder="Your company name"
            error={errors.companyName?.message}
            {...register('companyName')}
          />
        </div>

        <div>
          <label htmlFor="contactPerson" className="block text-sm font-medium text-primary mb-1.5">
            Contact Person <span className="text-error">*</span>
          </label>
          <Input
            id="contactPerson"
            placeholder="Your full name"
            error={errors.contactPerson?.message}
            {...register('contactPerson')}
          />
        </div>
      </div>

      {/* Phone & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="quote-mobile" className="block text-sm font-medium text-primary mb-1.5">
            Mobile Number <span className="text-error">*</span>
          </label>
          <Input
            id="quote-mobile"
            type="tel"
            placeholder="10-digit mobile number"
            error={errors.mobile?.message}
            {...register('mobile')}
          />
        </div>

        <div>
          <label htmlFor="quote-email" className="block text-sm font-medium text-primary mb-1.5">
            Email Address <span className="text-error">*</span>
          </label>
          <Input
            id="quote-email"
            type="email"
            placeholder="your@email.com"
            error={errors.email?.message}
            {...register('email')}
          />
        </div>
      </div>

      {/* Locations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="pickupLocation" className="block text-sm font-medium text-primary mb-1.5">
            Pickup Location <span className="text-error">*</span>
          </label>
          <Input
            id="pickupLocation"
            placeholder="City / Area / Pin Code"
            error={errors.pickupLocation?.message}
            {...register('pickupLocation')}
          />
        </div>

        <div>
          <label htmlFor="deliveryLocation" className="block text-sm font-medium text-primary mb-1.5">
            Delivery Location <span className="text-error">*</span>
          </label>
          <Input
            id="deliveryLocation"
            placeholder="City / Area / Pin Code"
            error={errors.deliveryLocation?.message}
            {...register('deliveryLocation')}
          />
        </div>
      </div>

      {/* Shipment Type & Vehicle */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="shipmentType" className="block text-sm font-medium text-primary mb-1.5">
            Shipment Type <span className="text-error">*</span>
          </label>
          <Select
            id="shipmentType"
            placeholder="Select shipment type"
            options={shipmentTypeOptions}
            error={errors.shipmentType?.message}
            {...register('shipmentType')}
          />
        </div>

        <div>
          <label htmlFor="vehicleRequirement" className="block text-sm font-medium text-primary mb-1.5">
            Vehicle Requirement <span className="text-error">*</span>
          </label>
          <Select
            id="vehicleRequirement"
            placeholder="Select vehicle type"
            options={vehicleOptions}
            error={errors.vehicleRequirement?.message}
            {...register('vehicleRequirement')}
          />
        </div>
      </div>

      {/* Monthly Volume */}
      <div>
        <label htmlFor="monthlyVolume" className="block text-sm font-medium text-primary mb-1.5">
          Monthly Shipment Volume <span className="text-error">*</span>
        </label>
        <Select
          id="monthlyVolume"
          placeholder="Select monthly volume"
          options={volumeOptions}
          error={errors.monthlyVolume?.message}
          {...register('monthlyVolume')}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="quote-message" className="block text-sm font-medium text-primary mb-1.5">
          Additional Requirements (Optional)
        </label>
        <Textarea
          id="quote-message"
          placeholder="Any specific requirements, cargo details, or scheduling preferences..."
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
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Submit Quote Request
          </>
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        We provide customized quotes within 2 hours during business hours
      </p>
    </form>
  );
}
