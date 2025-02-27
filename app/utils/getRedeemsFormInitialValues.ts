import { Item } from "@/types";

export const getRedeemsFormInitialValues = (selectedItems: Item[]) => {
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
    extra_question_responses: [],
    items: selectedItems.map((item) => ({
      customer_product_id: item.customer_product_id,
      size_name: ""
    })),
  };
}