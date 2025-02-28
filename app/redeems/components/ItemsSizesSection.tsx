import { z } from "zod";
import styled from "styled-components";
import { Controller, FieldPath, UseFormReturn } from "react-hook-form";
import { Item } from "@/redeems/types";
import { ADDRESSE_SCHEMA } from "@/utils/formSchema";

import SelectList from "@/components/Select";

type ItemsSizesSectionProps = {
  items: Item[];
  form: UseFormReturn<z.infer<typeof ADDRESSE_SCHEMA>>;
};

const Wrapper = styled.div`
  display: grid;
  align-items: center;

  grid-template-columns: repeat(auto-fit, minmax(310px, 398px));
`

function ItemsSizesSection({ items, form }: ItemsSizesSectionProps) {
  return (
    <Wrapper>
      {items.map((item, index) => {
        const fieldName: FieldPath<z.infer<typeof ADDRESSE_SCHEMA>> = `items.${index}.size_name`;
        if(!item.sizes_grid) return null;

        const options = item.sizes.map((size) => size.name);

        return (
          <Controller
            key={item.customer_product_id}
            name={fieldName}
            control={form.control}
            rules={{ required: "Selecione um tamanho" }}
            render={({ field }) => (
              <SelectList
                fullWidth
                {...field}
                label={`Qual o seu tamanho (${item.sizes_grid!.name})?`}
                options={options.filter((option) => Boolean(option))}
              />
            )}
          />
        );
      })}
    </Wrapper>
  );
}

export default ItemsSizesSection;
