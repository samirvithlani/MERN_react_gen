import React from "react";
import { useForm } from "react-hook-form";

export const JsonForm = () => {
  var formData = [
    {
      type: "text",
      label: "Enter Name",
      name: "name",
      placeholder: "Enter Name",
    },
    {
      type: "text",
      label: "Enter Email",
      name: "email",
      placeholder: "Enter Email",
    },
    {
      type: "number",
      label: "Enter Mobile",
      name: "mobile",
      placeholder: "Enter Mobile",
    },
    {
      label: "male",
      type: "radio",
      value: "male",
      name: "gender",
    },
    {
      label: "female",
      type: "radio",
      value: "female",
      name: "gender",
    },
    {
      label: "java",
      type: "checkbox",
      value: "java",
      name: "skills",
    },
    {
      label: "react",
      type: "checkbox",
      value: "react",
      name: "skills",
    },
    {
      label: "node",
      type: "checkbox",
      value: "node",
      name: "skills",
    },
    {
      label: "city",
      type: "select",
      name: "city",
      options: [
        {
          label: "Ahmedabad",
          value: "Ahmedabad",
        },
        {
          label: "Surat",
          value: "Surat",
        },
        {
          label: "Baroda",
          value: "Baroda",
        },
      ],
    },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log("data", data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="form-group">
          {formData.map((form) => {
            return (
              <>
                {form.type !== "select" ? (
                  <div>
                    <label>{form.label}</label>
                    <input
                      type={form.type}
                      placeholder={form.placeholder}
                      {...register(form.name)}
                      value={form?.value}
                    ></input>
                  </div>
                ) : (
                  <div>
                    <label>{form.label}</label>
                    <select {...register(form.name)}>
                      {form.options.map((option) => {
                        return (
                          <option value={option.value}>{option.label}</option>
                        );
                      })}
                    </select>
                  </div>
                )}
              </>
            );
          })}
        </div>
        <div>
          <input type="submit" className="btn btn-primary" value="ADD"></input>
        </div>
      </form>
    </div>
  );
};
