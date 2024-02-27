import React from "react";

interface IInputField {
  type?: React.HTMLInputTypeAttribute | undefined;
  title?: string;
  name?: string;
}

function InputField({ type, title, name }: IInputField) {
  return (
    <div className="flex flex-col gap-2">
      {title ? <p>{title}</p> : <></>}
      <input
        className="bg-gray-200"
        name={name ?? "undefined"}
        type={type ?? "text"}
      />
    </div>
  );
}

export default InputField;
