import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { getAllUsers } from '../../services/user.services';
import { json } from 'stream/consumers';
import { getProducts } from '../../services/product.services';
import { getAllCategories } from '../../services/category.services';
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'name', headerName: 'name', width: 200 },
  


];



export default function CategoriesTable() {
    const [users , setUsers] = React.useState([])
    React.useEffect(() =>{
        getAllCategories().then((data) => {
         setUsers( data)
        })

    } ,[] )

    console.log(users);
    

  return (
    <div style={{ height: 400, width: '90%' , justifyContent :"center" , backgroundColor : "#e1e1e1" }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
