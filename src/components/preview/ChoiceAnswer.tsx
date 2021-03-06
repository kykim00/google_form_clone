/* eslint-disable react-hooks/exhaustive-deps */
import { Radio } from "@mui/material";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Question, setSingleAnswer } from "../../stores/question";
import { CardContainer } from "../common/layouts/CardContainer";
import { FlexBox } from "../common/layouts/FlexBox";
import { QuestionTitle } from "../common/QuestionTitle";

const ChoiceAnswer = ({
  id,
  title,
  isEssential,
  options,
  answers,
}: Question) => {
  const dispatch = useDispatch();

  const onChangeAnswer = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        setSingleAnswer({
          id: id,
          answerId: 1,
          answer: e.target.value,
        })
      );
    },
    []
  );

  return (
    <CardContainer>
      <QuestionTitle title={title} isEssential={isEssential} />

      {options.map((option, index) => (
        <FlexBox key={`${index}_${id}`} justifyContent="flex-start">
          <Radio
            checked={answers.some((answer) => answer.answer === option.option)}
            onChange={onChangeAnswer}
            value={option.option}
            name={`OPTION${option.id}`}
          />
          <label>{option.option}</label>
        </FlexBox>
      ))}
    </CardContainer>
  );
};

export default React.memo(ChoiceAnswer);
