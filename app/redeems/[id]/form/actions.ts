import { ADDRESSE_SCHEMA } from '@/utils/formSchema';
import { z } from 'zod';
 
type FormData = z.infer<typeof ADDRESSE_SCHEMA>;

export async function createRedeem(formData: FormData, redeemPageId: string) {
  try {

    const response = await fetch(`/api/redeem/${redeemPageId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Request failed');
    }

    const data = await response.json()
    return data;
  } catch (error) {
    console.error("Submission error:", error);
    return { message: "Erro ao criar resgate!" };
  }
}