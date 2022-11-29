import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { getAllUsers } from '../../services/user.services';
import { json } from 'stream/consumers';
import { getProducts } from '../../services/product.services';
import { Button, Input } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'name', headerName: 'name', width: 200 },
  { field: 'price', headerName: 'Price', width: 200 },


];



export default function ProductsTable() {
  const navigate = useNavigate()
    const [users , setUsers] = React.useState([])
    React.useEffect(() =>{
        getProducts().then((data) => {
         setUsers( data)
        })

    } ,[] )

    console.log(users);
    

  return (
    <div style={{ height: 600, width: '95%' , justifyContent :"center" , backgroundColor : "#a3a3a3"  }}>
      <div style={{ display : "flex" , flexDirection : "row"}}>

      <Button style={{justifyContent : "flex-end" ,  fontSize : 20 , backgroundColor : "#f8f5a4" , marginBottom : 20 , borderRadius : 20}} onClick={() => navigate("/addProduct")}>Add Product</Button>
      <div style={{backgroundColor : "turquoise" , width : "50%" , height : 70 , padding : 15 , marginBottom : 20 , marginLeft : 60 , borderWidth : 2 , borderStyle : "solid" , borderRadius : 20}}>
         <Input placeholder='Search' />
      </div>
      </div>
      <div style={{ height: 400, width: '90%' , justifyContent :"center" , backgroundColor : "#e1e1e1" , borderWidth : 2 , borderStyle : "solid" ,  borderRadius : 25}}>

      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      </div>
    </div>
  );
}
