import { ExtraQuestion, Item } from "@/redeems/types";

type RedeemFormInitialValues = {
  items: Item[];
  extraQuestions: ExtraQuestion[];
}

export const getRedeemsFormInitialValues = (values: RedeemFormInitialValues) => {
  const { items, extraQuestions } = values;

  return {
    redeemer_name: "",
    redeemer_email: "",
    redeemer_document_number: "",
    redeemer_zipcode: "",
    redeemer_street: "",
    redeemer_number: "",
    redeemer_complement: "",
    redeemer_neighborhood: "",
    redeemer_city: "",
    redeemer_state: "",
    redeemer_country: "",
    redeemer_phone: "",
    extra_question_responses: extraQuestions.map((question) => ({
      extra_question_id: question.id,
      answer: "",
    })),
    items: items.map((item) => ({
      customer_product_id: item.customer_product_id,
      size_name: item.sizes[0]?.name ?? "",
    })),
  };
}