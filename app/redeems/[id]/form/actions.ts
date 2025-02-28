'use server'
import { ADDRESSE_SCHEMA } from '@/utils/formSchema';
import { z } from 'zod';
 
type FormData = z.infer<typeof ADDRESSE_SCHEMA>;

export async function createRedeem(formData: FormData, redeemPageId: string) {
  try {
    const parsedData = ADDRESSE_SCHEMA.parse(formData);

    const response = await fetch(`/redeem_pages/${redeemPageId}/redeem`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsedData),
    })

    return response.json();
  } catch (error) {
    console.error("Submission error:", error);
    return { success: false, error: "Invalid form submission." };
  }
}