import { Button, Grid2, Typography } from '@mui/material'
import React from 'react'
import {useErrorBoundary} from 'react-error-boundary'
import { isAxiosError } from 'axios'
const ErrorFallBack = ({error}) => {
    const {resetBoundary}=useErrorBoundary();
  return (
    <Grid2>
        <Typography>Something went wrong. Try after sometime</Typography>
        <Typography color='warn'>{error.message}</Typography>
        <Button onClick={resetBoundary}>Try again</Button>
    </Grid2>
  )
}

export default ErrorFallBack