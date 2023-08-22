import React from 'react'
import { Box, Button } from '@mui/material'
export const FormNav = (props) => {
  return (
    <div >
      <Box width={"100%"} display={"flex"} justifyContent={"space-evenly"}>
        {props.hasPrevious&&<Button  variant='contained' color="warning" onClick={props.onClickBack}>Back</Button>}
        <Button type="submit" variant='contained' color='success'>{props.isLastStep?"Submit":"Next"}</Button>
        </Box>
    </div>
  )
}
