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
        flex: 0,
        // editable: edit,
      };
  return (
    <>
    <Grid container sx={{background: "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)"}} display={"flex"} gap={1} flexDirection={"column"}  height={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Grid item>
                <Button variant='contained' onClick={()=>generatePDF(csv)}>Export as pdf</Button>
        </Grid>
        <Box width={"100vw"} display={"flex"} justifyContent={"center"} alignItems={"center"}>       
         <Box className="ag-theme-alpine" boxShadow={"10px 10px black"} sx={{ height: "90vh", width: {xs:"90vw",sm:"90vw",md:"90vw",lg:"60vw"} }} >

        <AgGridReact
        
          columnDefs={columnDef}
          rowData={csv}
          defaultColDef={defaultCol}
          pagination={true}
          paginationAutoPageSize={true}
        //   onGridReady={handleGrid}
        />
      </Box>
      </Box>

      </Grid>
    </>
  )
}
