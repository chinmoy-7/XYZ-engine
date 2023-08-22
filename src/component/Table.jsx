import React, { useContext } from 'react'
import { AgGridReact } from "ag-grid-react";    
import { formContext } from '../context/contextForm';
import { Box,Button,Grid } from '@mui/material';
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import { generatePDF } from './PDFGenerator';
export const Table = () => {
    const {csv,setCsv,errors} =useContext(formContext)
    console.log(csv)
    const columnDef=[
        { headerName: "KP", field: "KP",editable:false },
        { headerName: "X ", field: "X" },
        { headerName: "Y", field: "Y" },
        { headerName: "Z", field: "Z" },
    ]
    const defaultCol = {
        sortable: true,
        filter: true,
        floatingFilter: true,
        flex: 1,
        // editable: edit,
      };
  return (
    <>
    <Grid container display={"flex"} gap={5} justifyContent={"center"} alignItems={"center"}>
        <Grid item>
                <Button variant='contained' onClick={()=>generatePDF(csv)}>Export as pdf</Button>
        </Grid>
        <Box className="ag-theme-alpine" sx={{ height: "90vh", width: "100vw" }}>

        <AgGridReact
          columnDefs={columnDef}
          rowData={csv}
          defaultColDef={defaultCol}
          pagination={true}
          paginationAutoPageSize={true}
        //   onGridReady={handleGrid}
        />
      </Box>
      </Grid>
    </>
  )
}
