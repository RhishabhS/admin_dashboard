import { useState } from "react";
import React from "react";
import "./ProductList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

const ProductList = () => {
  const rows = [
    {
      id: 1,
      name: "Snow",
      img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      stock: 123,
      status: "active",
      price: 123,
    },
    {
      id: 2,
      name: "Lannister",
      img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      stock: 123,
      status: "active",
      price: 126,
    },
    {
      id: 3,
      name: "Lannister",
      img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      stock: 123,
      status: "active",
      price: 213,
    },
    {
      id: 4,
      name: "Stark",
      img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      stock: 123,
      status: "active",
      price: 134,
    },
    {
      id: 5,
      name: "Targaryen",
      img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      stock: 123,
      status: "active",
      price: 523,
    },
    {
      id: 6,
      name: "Melisandre",
      img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      stock: 123,
      status: "active",
      price: 126,
    },
    {
      id: 7,
      name: "Clifford",
      img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      stock: 123,
      status: "active",
      price: 133,
    },
    {
      id: 8,
      name: "Frances",
      img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      stock: 123,
      status: "active",
      price: 193,
    },
    {
      id: 9,
      name: "Roxie",
      img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      stock: 123,
      status: "active",
      price: 1230,
    },
  ];
  const [Data, setData] = useState(rows);
  const handleDelete = (id) => {
    setData(Data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Product Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="product-list-item">
            <img src={params.row.img} alt="" className="product-list-avatar" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 250,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
      type: Number,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"./" + params.row.id}>
              <button className="product-list-edit">Edit</button>
            </Link>
            <DeleteIcon
              className="product-list-icon"
              onClick={() => {
                handleDelete(params.row.id);
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="product-list">
        <h1 className="product-list-title">Product List</h1>
      <DataGrid
        rows={Data}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;
