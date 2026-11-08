"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  admissionInquirySchema,
  type AdmissionInquiryValues,
} from "../schemas/admission.schema";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2 } from "lucide-react";

export function AdmissionForm() {
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AdmissionInquiryValues>({
    resolver: zodResolver(admissionInquirySchema),
    defaultValues: {
      studentName: "",
      guardianName: "",
      email: "",
      phone: "",
      gradeApplying: "",
      previousSchool: "",
      message: "",
    },
  });

  const onSubmit = () => {
    startTransition(async () => {
      // Simulate submission delay
      await new Promise((r) => setTimeout(r, 800));
      setIsSuccess(true);
      reset();
    });
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <h3 className="text-xl font-bold tracking-tight text-foreground">
        Online Admission Inquiry
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Submit this form to express your interest. Our admission cell will contact you within 2 business days.
      </p>

      {isSuccess && (
        <div
          role="alert"
          className="mt-6 flex items-start gap-3 rounded-lg bg-emerald-500/10 p-4 text-sm text-emerald-600 dark:text-emerald-400"
        >
          <CheckCircle2 className="size-5 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Inquiry Submitted Successfully!</p>
            <p className="mt-0.5 text-xs">
              Thank you for applying. A confirmation copy and next steps will be communicated to your email and phone.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Student Name */}
          <div className="space-y-1.5">
            <label htmlFor="studentName" className="text-xs font-medium text-foreground block">
              Student Full Name <span className="text-destructive">*</span>
            </label>
            <input
              id="studentName"
              type="text"
              disabled={isPending}
              {...register("studentName")}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Full name of student"
            />
            {errors.studentName && (
              <p className="text-xs text-destructive">{errors.studentName.message}</p>
            )}
          </div>

          {/* Guardian Name */}
          <div className="space-y-1.5">
            <label htmlFor="guardianName" className="text-xs font-medium text-foreground block">
              Guardian / Parent Name <span className="text-destructive">*</span>
            </label>
            <input
              id="guardianName"
              type="text"
              disabled={isPending}
              {...register("guardianName")}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Name of parent or guardian"
            />
            {errors.guardianName && (
              <p className="text-xs text-destructive">{errors.guardianName.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Email */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-medium text-foreground block">
              Contact Email <span className="text-destructive">*</span>
            </label>
            <input
              id="email"
              type="email"
              disabled={isPending}
              {...register("email")}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="parent@example.com"
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-xs font-medium text-foreground block">
              Phone Number <span className="text-destructive">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              disabled={isPending}
              {...register("phone")}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="+1 (555) 000-0000"
            />
            {errors.phone && (
              <p className="text-xs text-destructive">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Grade Applying For */}
          <div className="space-y-1.5">
            <label htmlFor="gradeApplying" className="text-xs font-medium text-foreground block">
              Grade / Class Applying For <span className="text-destructive">*</span>
            </label>
            <select
              id="gradeApplying"
              disabled={isPending}
              {...register("gradeApplying")}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">Select Grade / Program</option>
              <option value="Primary - Class 1 to 5">Primary (Class 1 - 5)</option>
              <option value="Middle School - Class 6 to 8">Middle School (Class 6 - 8)</option>
              <option value="Secondary - Class 9 & 10">Secondary (Class 9 - 10)</option>
              <option value="Higher Secondary - Science">Higher Secondary (Science)</option>
              <option value="Higher Secondary - Commerce">Higher Secondary (Commerce)</option>
              <option value="Higher Secondary - Humanities">Higher Secondary (Arts/Humanities)</option>
            </select>
            {errors.gradeApplying && (
              <p className="text-xs text-destructive">{errors.gradeApplying.message}</p>
            )}
          </div>

          {/* Previous School */}
          <div className="space-y-1.5">
            <label htmlFor="previousSchool" className="text-xs font-medium text-foreground block">
              Previous Institution / School Attended
            </label>
            <input
              id="previousSchool"
              type="text"
              disabled={isPending}
              {...register("previousSchool")}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Name of previous school"
            />
          </div>
        </div>

        {/* Remarks / Message */}
        <div className="space-y-1.5">
          <label htmlFor="message" className="text-xs font-medium text-foreground block">
            Additional Notes or Queries
          </label>
          <textarea
            id="message"
            rows={3}
            disabled={isPending}
            {...register("message")}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-y"
            placeholder="Any specific inquiry, transportation needs, or questions..."
          />
        </div>

        <Button type="submit" disabled={isPending} className="w-full mt-2" size="lg">
          {isPending ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Submitting Application...
            </>
          ) : (
            "Submit Admission Inquiry"
          )}
        </Button>
      </form>
    </div>
  );
}

