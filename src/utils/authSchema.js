import { z } from "zod";

const mainAuthSchema = z.object({
  email: z
    .email("This is not a valid email")
    .trim()
    .min(1, { error: "Email cannot be empty!" }),
  password: z
    .string()
    .trim()
    .min(8, "The password must be at least 8 characters long")
    .regex(/[a-z]/, "At least 1 lowercase letter!")
    .regex(/[A-Z]/, "At least 1 uppercase letter!")
    .regex(/[0-9]/, "At least 1 number!"),
  confirmPassword: z.string().trim().min(1, "Confirm password is required"),
});

export const signInSchema = mainAuthSchema.omit({
  confirmPassword: true,
});

export const signUpSchema = mainAuthSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    error: "Passwords do not match",
    path: ["confirmPassword"],
  },
);
