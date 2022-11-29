import NavBar from "../components/Navbar";
import Product from "../components/Product";
import React, { useRef, useState, useEffect } from "react";
import { List } from "@mui/material";

export default function Products() {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const response = await fetch("http://localhost:5000/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const result = await response.json(); // why await , response.json() is async function ?
      setProducts(result);
      return { result };
    } else {
      return response;
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
       <NavBar>
        
      <div>

      <List sx={{ width: '100%', bgcolor: 'background.paper' , flexDirection : "row" ,display : "flex" , justifyContent : "space-between" }}>
        {products?.map((prod , e) => (
            <Product props={prod}/>
        ))}
      </List>
      </div>
       </NavBar>
    </div>
  );
}
