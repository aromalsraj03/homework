import React from 'react'
import { useForm } from 'react-hook-form';
import axios from'axios';
import { Button, Stack, TextField } from '@mui/material';

const Addblog = () => {
    const { register,handleSubmit}= useForm();
  const getVal=(val)=>{
        console.log(val);
        alert('FORM SUBMITTED');
         axios.post('',val).then((response)=>{
            console.log(response);
         })
        }
  return (
    <div>
         <Stack
      component="form"
      sx={{
        marginTop:'40px',
        marginLeft:'45%',
      
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
      name='name'
      {...register('name')}
        hiddenLabel
        id="filled-hidden-label-small"
      
        defaultValue=" employeename "
        variant="filled"
        size="small"
      />
      <TextField
      name='describtion'
      {...register('describtion')}
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="emp location"
        variant="filled"
      />
       <TextField
       name='author-name'
       {...register('author-name')}
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="emp desigination"
        variant="filled"
      />
      <Button onClick={handleSubmit(getVal)} variant='contained'>submit</Button>
    </Stack>
      
    </div>
  )
}

export default Addblog
