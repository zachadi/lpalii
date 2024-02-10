import * as z from "zod";
export const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  city: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email("This is not a valid email."),
});
