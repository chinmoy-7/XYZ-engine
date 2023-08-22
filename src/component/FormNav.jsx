import React from 'react'
import { Button } from '@mui/material'
export const FormNav = (props) => {
  return (
    <div>
        {props.hasPrevious&&<Button  variant='contained' color="warning" onClick={props.onClickBack}>Back</Button>}
        <Button type="submit" variant='contained' color='success'>{props.isLastStep?"Submit":"Next"}</Button>
    </div>
  )
}
