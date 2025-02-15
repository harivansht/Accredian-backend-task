import z from "zod";

// Define a zod schema for the referral object
export const referralSchema = z.object({
  referrerName: z.string().nonempty(),
  referrerEmail: z.string().email(),
  referrerPhone: z.string().nonempty(),
  refereeName: z.string().nonempty(),
  refereeEmail: z.string().email(),
  refereePhone: z.string().nonempty(),
  course: z.string().nonempty(),
});
