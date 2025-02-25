import { z } from "zod"

export const ADDRESSE_SCHEMA = z.object({
  redeemer_name: z.string({
    required_error: "Nome é um campo obrigatório",
  }).min(3),
  redeemer_email: z.string(
    {
      required_error: "Email é um campo obrigatório",
    }
  ).email({
    message: "E-mail inválido",
  }),
  redeemer_document_number: z.string({
    required_error: "CPF/CNPJ é um campo obrigatório",
  }).min(11, {
    message: "CPF/CNPJ inválido",
  }).max(14),
  redeemer_zipcode: z.string({
    required_error: "CEP é um campo obrigatório",
  }).min(8, {
    message: "CEP inválido",
  }),
  redeemer_street: z.string({
    required_error: "Rua é um campo obrigatório",
  }),
  redeemer_number: z.string({
    required_error: "Número é um campo obrigatório",
  }),
  redeemer_complement: z.string().nullable(),
  redeemer_neighborhood: z.string({
    required_error: "Bairro é um campo obrigatório",
  }),
  redeemer_city: z.string({
    required_error: "Cidade é um campo obrigatório",
  }),
  redeemer_state: z.string({
    required_error: "Estado é um campo obrigatório",
  }),
  redeemer_country: z.string({
    required_error: "País é um campo obrigatório",
  }),
  redeemer_phone: z.string().nullable(),
  items: z.array(
    z.object({
      customer_product_id: z.number(),
      size_name: z.string().nullable(),
    })
  ),
  extra_question_responses: z.array(
    z.object({ 
      extra_question_id: z.number(),
      answer: z.string(),
    })
  ).nullable(),
})