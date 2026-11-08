import type {
  ContactFormData,
  ContactSubmissionResult,
} from "../types/contact.types";

/**
 * Handles contact submission logic.
 * Encapsulates communication and error handling.
 */
export async function submitContactMessage(
  data: ContactFormData
): Promise<ContactSubmissionResult> {
  try {
    // In demo/initial mode without backend, simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // When an API endpoint or email service is configured, call it here.
    return {
      success: true,
      message: "Thank you for reaching out! We will be in touch with you shortly.",
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to submit message. Please try again later.",
    };
  }
}

