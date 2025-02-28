import { ADDRESSE_SCHEMA } from "@/utils/formSchema";
import { Controller, FieldPath, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import FormInput from "./FormInput";
import { ExtraQuestion } from "@/types";
import SelectList from "@/components/Select";
import { DateField } from "@mui/x-date-pickers/DateField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

type InputsTypes = "text" | "select_one" | "date" | "text_area";

type ExtraQuestionsInputManagerProps = {
  question: ExtraQuestion;
  fieldName: FieldPath<z.infer<typeof ADDRESSE_SCHEMA>>;
  form: UseFormReturn<z.infer<typeof ADDRESSE_SCHEMA>>;
};

function ExtraQuestionsInputManager(props: ExtraQuestionsInputManagerProps) {
  const { question, fieldName, form } = props;
  const { control } = form;
  const [answerDate, setAnswerDate] = useState<Dayjs>();

  const handleDateChange = (date: Dayjs | null) => {
    if (!date) return;
    setAnswerDate(date);
    form.setValue(fieldName, date.format("YYYY-MM-DD"));
  };

  switch (question.answer_type) {
    case "text":
      return (
        <FormInput
          control={control}
          name={fieldName}
          label={question.question}
        />
      );
    case "text_area":
      // The max of rows is 1 because wasn't specified on spec
      return (
        <FormInput
          control={control}
          name={fieldName}
          label={question.question}
          multiline
          slotProps={{
            input: {
              maxRows: 1
            }
          }}
        />
      );
    case "select_one":
      return (
        <Controller
          control={control}
          name={fieldName}
          render={({ field, fieldState: { error } }) => (
            <SelectList
              options={question.options}
              label={question.question}
              value={field.value || ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={Boolean(error)}
            />
          )}
        />
      );
    case "date":
      return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateField
            label={question.question}
            value={answerDate}
            onChange={handleDateChange}
            maxDate={dayjs()}
            variant="standard"
            format="DD/MM/YYYY"
          />
        </LocalizationProvider>
      );
  }
}

export default ExtraQuestionsInputManager;
