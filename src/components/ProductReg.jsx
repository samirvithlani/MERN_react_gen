import React from "react";
import { useForm } from "react-hook-form";

export const ProductReg = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addProduct = (product) => {
    alert("submitted")
    console.log(product);
  }


  const validationSchema = {
    pname:{
        required:{
            value:true,
            message:"product name is required.."
        }
    },
    pprice:{
        min:{
            value:100,
            message:"price should be greater than 100"
        }
    },
    pdescription:{
        required:{
            value:true,
            message:"product description is required.."
        },
        minLength:{
            value:10,
            message:"product description should be greater than 10"
        },maxLength:{
            value:100,
            message:"product description should be less than 100"
        }
    }
  }

  console.log("error...",errors)
  return (
    <div>
      <h1>ADD PRODUCT</h1>
      <form onSubmit={handleSubmit(addProduct)}>
        <div>
            <label>Product Name :</label>
            {/* <input type="text" {...register("pname",{required:{value:true,message:"product name is required.."}})}></input> */}
            <input type="text" {...register("pname",validationSchema.pname)}></input>
            <span>{errors.pname?.message}</span>
        </div>
        <div>
            <label>Product Price :</label>
            <input type ="number" {...register("pprice",validationSchema.pprice)}></input>
            <span>{errors.pprice?.message}</span>
        </div>
        <div>
            <label>Product Description :</label>
            <input type="text" {...register("pdescription",validationSchema.pdescription)}></input>
            <span>{errors.pdescription?.message}</span>
        </div>
        <div>
            <input type="submit" value="ADD"></input>
        </div>

      </form>
    </div>
  );
};
