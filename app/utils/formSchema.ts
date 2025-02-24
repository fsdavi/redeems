import { z } from "zod"

export const ADDRESSE_SCHEMA = z.object({
  redeemer_name: z.string().min(3),
  redeemer_email: z.string().email(),
  redeemer_document_number: z.string(),
  redeemer_zipcode: z.string(),
  redeemer_street: z.string(),
  redeemer_number: z.string(),
  redeemer_complement: z.string(),
  redeemer_neighborhood: z.string(),
  redeemer_city: z.string(),
  redeemer_state: z.string(),
  redeemer_country: z.string(),
  redeemer_phone: z.string(),
  extra_question_responses: z.array(
    z.object({
      extra_question_id: z.number(),
      answer: z.string(),
    })
  ),
})