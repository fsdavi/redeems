'use server'
import { ADDRESSE_SCHEMA } from '@/utils/formSchema';
import { redirect } from 'next/navigation'
import { z } from 'zod';
 
type FormData = z.infer<typeof ADDRESSE_SCHEMA>;

export async function createRedeem(formData: FormData, redeemPageId: string) {
  try {
    const parsedData = ADDRESSE_SCHEMA.parse(formData);

    const response = await fetch("/redeem_pages/")
    return { success: true };
  } catch (error) {
    console.error("Submission error:", error);
    return { success: false, error: "Invalid form submission." };
  }
}