import { z } from "zod";
import styled from "styled-components";
import { FieldPath, UseFormReturn } from "react-hook-form";
import { ADDRESSE_SCHEMA } from "@/utils/formSchema";
import { ExtraQuestion } from "@/types";
import { useState } from "react";
import ExtraQuestionsInputManager from "./ExtraQuestionsInputManager";

type ExtraQuestionsSectionProps = {
  questions: ExtraQuestion[];
  form: UseFormReturn<z.infer<typeof ADDRESSE_SCHEMA>>;
};

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  column-gap: 32px;
  row-gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(310px, 398px));
`;

function ExtraQuestionsSection({
  questions,
  form,
}: ExtraQuestionsSectionProps) {
  const sortedQuestions = questions.sort(
    (firstQuestion, secondQuestion) => firstQuestion.position - secondQuestion.position
  );

  return (
    <Wrapper>
      {sortedQuestions.map((question, index) => {
        const fieldName: FieldPath<
          z.infer<typeof ADDRESSE_SCHEMA>
        > = `extra_question_responses.${index}.answer`;

        return (
          <ExtraQuestionsInputManager
            key={question.id}
            question={question}
            fieldName={fieldName}
            form={form}
          />
        );
      })}
    </Wrapper>
  );
}

export default ExtraQuestionsSection;
