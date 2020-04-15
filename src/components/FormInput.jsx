import React from "react";
import { useFormInput } from "src/hooks/useFormInput";
import { useDocumentTitleFlash } from "src/hooks/useDocumentTitleFlash";

const FormInput = () => {
  const inputName = useFormInput("brian");

  const inputLastName = useFormInput("nguyen");

  useDocumentTitleFlash([
    "(1) First name " + inputName.value,
    "Last name " + inputLastName.value,
  ]);

  return (
    <div>
      <div className="row">
        <label>Firstname</label>
        <br />
        <input {...inputName} type="text" />
      </div>

      <div className="row">
        <label>Lastname</label>
        <br />
        <input {...inputLastName} type="text" />
      </div>
    </div>
  );
};

export default React.memo(FormInput);
