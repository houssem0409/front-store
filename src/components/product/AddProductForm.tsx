import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { getAllCategories } from "../../services/category.services";
import { addProduct } from "../../services/product.services";
const validationSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  categoryId: yup.string().required(),
  sku: yup.string().required(),
});
// let schema = yup.object().shape({
//   name: yup.string().required(),
//   age: yup.number().required().positive().integer(),
//   email: yup.string().email(),
//   website: yup.string().url(),
//   createdOn: yup.date().default(function () {
//     return new Date();
//   }),
// });

export const AddProductForm = () => {
  const [categories, setCategories] = useState([]);
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      categoryId: "",
      sku: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      
      // alert(JSON.stringify(values, null, 2));
      addProduct(values).then((res) => {
        if(res){
          alert(JSON.stringify(values, null, 2));
        }
      })
    },
  });
console.log(formik.values);


  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <div style={{ width: "80%" }}>
      <h2
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        Add New Product
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          style={{ margin: 10 }}
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <TextField
          style={{ margin: 10 }}
          fullWidth
          id="price"
          name="price"
          label="price"
          type="number"
          value={formik.values.price}
          onChange={formik.handleChange}
        />
        <Select
          style={{ margin: 10, width: "100%" }}
          labelId="demo-simple-select-standard-label"
          name="categoryId"
          id="categoryId"
          value={formik.values.categoryId}
          onChange={formik.handleChange}
          label="Categories"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {categories?.map((cat: any, e: any) => (
            <MenuItem key={e} value={cat.id} >
              {cat.name}
            </MenuItem>
          ))}
        </Select>
        <Select
          style={{ margin: 10, width: "100%" }}
          labelId="demo-simple-select-standard-label"
          name="sku"
          id="sku"
          value={formik.values.sku}
          onChange={formik.handleChange}
          label="sku"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
         
            <MenuItem  value="available" >
              Available
            </MenuItem>
            <MenuItem  value="not available" >
              Not Available
            </MenuItem>
       
        </Select>

        <Button
          style={{ margin: 10 }}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
