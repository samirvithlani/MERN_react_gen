import { Slider } from '@mui/material';
import Switch from '@mui/material/Switch';

import { Box } from "@mui/system";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";

const label = { inputProps: { 'aria-label': 'Switch demo' } };
export const MuiTable = () => {
    

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "age", headerName: "Age", type: "number", width: 90 },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];
  const rows = [
    {
      id: 1,
      firstName: "John",
      lastName: "Snow",
      age: 35,
    },
    {
      id: 2,
      firstName: "Cersei",
      lastName: "Lannister",
      age: 42,
    },
    {
      id: 3,
      firstName: "Jaime",
      lastName: "Lannister",
      age: 45,
    },
    {
      id: 4,
      firstName: "Arya",
      lastName: "Stark",
      age: 16,
    },
    {
      id: 5,
      firstName: "Daenerys",
      lastName: "Targaryen",
      age: 25,
    },
  ];
  return (
    <div>
        <Switch {...label} defaultChecked />
        <Slider
        size="small"
        defaultValue={30}
        aria-label="Small"
        valueLabelDisplay='auto'

        >

        </Slider>
      <h1>MUI TABLE...</h1>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
        rows={rows}
        columns={columns}
        slots={{toolbar:GridToolbar}}
        initialState={{
            pagination:{
                paginationModel:{
                    pageSize:3
                }
            }
        }}
        pageSizeOptions={[3,5,10]}
        >

        </DataGrid>
      </Box>
    </div>
  );
};
