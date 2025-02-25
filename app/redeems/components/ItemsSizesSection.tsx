import { Item } from "@/types";
import { ADDRESSE_SCHEMA } from "@/utils/formSchema";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

type ItemsSizesSectionProps = {
  items: Item[];
  form: UseFormReturn<z.infer<typeof ADDRESSE_SCHEMA>>;
}

function ItemsSizesSection(props: ItemsSizesSectionProps) {
  return (
    <></>
  )
}

export default ItemsSizesSection