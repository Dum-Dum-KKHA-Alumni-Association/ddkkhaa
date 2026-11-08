"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "../schemas/contact.schema";
import { submitContactMessage } from "../services/contact.service";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    setFeedback(null);
    startTransition(async () => {
      const result = await submitContactMessage(data);
      if (result.success) {
        setFeedback({ type: "success", text: result.message });
        reset();
      } else {
        setFeedback({ type: "error", text: result.message });
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
      aria-label="Contact form"
    >
      {feedback && (
        <div
          role="alert"
          className={`flex items-start gap-3 rounded-lg p-4 text-sm ${
            feedback.type === "success"
              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
              : "bg-destructive/10 text-destructive"
          }`}
        >
          {feedback.type === "success" ? (
            <CheckCircle2 className="size-5 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="size-5 shrink-0 mt-0.5" />
          )}
          <p>{feedback.text}</p>
        </div>
      )}

      {/* Name Field */}
      <div className="space-y-1.5">
        <label
          htmlFor="name"
          className="text-sm font-medium text-foreground block"
        >
          Your Name <span className="text-destructive">*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          disabled={isPending}
          {...register("name")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full rounded-md border border-input bg-background px-3.5 py-2 text-sm text-foreground shadow-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
          placeholder="Jane Doe"
        />
        {errors.name && (
          <p id="name-error" className="text-xs text-destructive">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-1.5">
        <label
          htmlFor="email"
          className="text-sm font-medium text-foreground block"
        >
          Email Address <span className="text-destructive">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          disabled={isPending}
          {...register("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="w-full rounded-md border border-input bg-background px-3.5 py-2 text-sm text-foreground shadow-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
          placeholder="jane@example.com"
        />
        {errors.email && (
          <p id="email-error" className="text-xs text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Subject Field */}
      <div className="space-y-1.5">
        <label
          htmlFor="subject"
          className="text-sm font-medium text-foreground block"
        >
          Subject
        </label>
        <input
          id="subject"
          type="text"
          disabled={isPending}
          {...register("subject")}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className="w-full rounded-md border border-input bg-background px-3.5 py-2 text-sm text-foreground shadow-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
          placeholder="Project Inquiry / Consultation"
        />
        {errors.subject && (
          <p id="subject-error" className="text-xs text-destructive">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground block"
        >
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          disabled={isPending}
          {...register("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full rounded-md border border-input bg-background px-3.5 py-2 text-sm text-foreground shadow-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 resize-y"
          placeholder="Tell us about your project requirements..."
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="w-full"
        size="lg"
      >
        {isPending ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending Message...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}

