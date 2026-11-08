import { z } from "zod";

export const admissionInquirySchema = z.object({
  studentName: z
    .string()
    .min(2, { message: "Student name must be at least 2 characters long." })
    .max(100),
  guardianName: z
    .string()
    .min(2, { message: "Guardian name must be at least 2 characters long." })
    .max(100),
  email: z.string().email({ message: "Please provide a valid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .max(15),
  gradeApplying: z.string().min(1, { message: "Please select a grade/class." }),
  previousSchool: z.string().optional(),
  message: z.string().max(1000).optional(),
});

export type AdmissionInquiryValues = z.infer<typeof admissionInquirySchema>;

