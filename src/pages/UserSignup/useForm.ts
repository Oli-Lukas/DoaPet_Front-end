import { ChangeEvent, useState } from "react";
import { FormResponse, emptyFormResponse } from "./types";

function useForm()
{
  const [formResponses, setFormResponses] = useState<FormResponse>(emptyFormResponse);

  const updateFormResponses = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormResponses((previousState) => ({ ...previousState, [name]: value }));
  }

  const resetFormResponse = () => {
    setFormResponses(emptyFormResponse);
  }

  return {
    formResponses,
    updateFormResponses,
    resetFormResponse
  };
}

export default useForm;