'use server'
import { redirect } from 'next/navigation'
 
export async function createRedeem(formData: FormData) {
  
  redirect(`/success`)
}