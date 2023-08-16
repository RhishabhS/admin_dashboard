import React, { useState } from "react";
import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

const UserList = () => {
    
    const rows = [
        {
          id: 1,
          username: "Snow",
          fullName: "Jon",
          avatar:
            "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
          email: "example@example.com",
          status: "active",
          transactions: 123,
        },
        {
          id: 2,
          username: "Lannister",
          fullName: "Cersei",
          avatar:
            "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
          email: "example@example.com",
          status: "active",
          transactions: 126,
        },
        {
          id: 3,
          username: "Lannister",
          fullName: "Jaime",
          avatar:
            "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
          email: "example@example.com",
          status: "active",
          transactions: 213,
        },
        {
          id: 4,
          username: "Stark",
          fullName: "Arya",
          avatar:
            "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
          email: "example@example.com",
          status: "active",
          transactions: 134,
        },
        {
          id: 5,
          username: "Targaryen",
          fullName: "Daenerys",
          avatar:
            "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
          email: "example@example.com",
          status: "active",
          transactions: 523,
        },
        {
          id: 6,
          username: "Melisandre",
          fullName: null,
          avatar:
            "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
          email: "example@example.com",
          status: "active",
          transactions: 126,
        },
        {
          id: 7,
          username: "Clifford",
          fullName: "Ferrara",
          avatar:
            "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
          email: "example@example.com",
          status: "active",
          transactions: 133,
        },
        {
          id: 8,
          username: "Frances",
          fullName: "Rossini",
          avatar:
            "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
          email: "example@example.com",
          status: "active",
          transactions: 193,
        },
        {
          id: 9,
          username: "Roxie",
          fullName: "Harvey",
          avatar:
            "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
          email: "example@example.com",
          status: "active",
          transactions: 1230,
        },
      ];
      const [Data,setData]=useState(rows);
      const handleDelete=(id)=>{
        setData(Data.filter((item)=>item.id!==id))
      }
      const columns = [
        { field: "id", headerName: "ID", width: 70 },
        {
          field: "username",
          headerName: "User",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="user-list-item">
                <img src={params.row.img} alt="" className="user-list-avatar" />
                {params.row.username}
              </div>
            );
          },
        },
        {
          field: "email",
          headerName: "Email",
          width: 250,
        },
        {
          field: "transactions",
          headerName: "transactions",
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
          headerName:"Action",
          width: 150,
          renderCell: (params)=>{
              return(
                  <>
                  <Link to={"./"+params.row.id}>
                  <button className="user-list-edit">Edit</button>
                  </Link>
                  <DeleteIcon className="user-list-icon"onClick={
                      ()=>{handleDelete(params.row.id)}
                  }/>
                  </>
              )
          }
        }
      ];
      
  return (
    <div className="user-list">
        <h1 className="user-list-title">User List</h1>
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

export default UserList;
