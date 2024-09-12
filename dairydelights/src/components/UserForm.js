import React from 'react'
import { useForm } from "react-hook-form";
import { Button,  Grid2, TextField } from '@mui/material'
import axios from 'axios';
import styled from '@emotion/styled/macro';
import { useNavigate } from 'react-router-dom';

const Error = styled.p`
  color: red;
  font-size: 0.8rem;
  margin:0;
`;
const UserForm = () => {

        const onSubmit=(data)=>{

        }
    const{register,handleSubmit,formState:{errors},trigger,reset,watch}=useForm();
  return (
    <div>
            <Grid2 container   spacing={5} p={5} alignContent={'center'}>
            
            <Grid2 display={'flex'}p={2} item xs={12} sm={6} >
            <form style={{  flexDirection: 'column' ,overflow:'hidden'}}
          onSubmit={handleSubmit(onSubmit)}   >
  <Grid2  container spacing={5}>
    <Grid2 item xs={12} md={6}> 
            <TextField width={'100%'} name='firstName' variant="standard"  label="First Name *"
            {...register('firstName',{
                required:"Name is required",
            })} filledWidth
            onBlur={(e)=>trigger('firstName')}/> 
           <Error>{errors.firstName?.message}</Error>
    </Grid2> 
    <Grid2 item xs={12} md={6}>
      <TextField name='lastName' variant="standard" label="Last Name *"
      {...register('lastName',{
          required:"Last Name is required"
      })}
      onBlur={(e)=>trigger('lastName')}/>
      <Error>{errors.firstName?.message}</Error>
    </Grid2>
</Grid2>
<Grid2 spacing={5} container>
    <Grid2 item xs={12} md={6}>
      <TextField name='email' variant="standard" label="email *"
      {...register('email',{
          required:"Email is required",
          pattern:{
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Enter valid mail address",
          }
      })}
      onBlur={(e)=>trigger('email')}/> <Error>{errors.email?.message}</Error> 
    </Grid2>
    <Grid2 item xs={12} md={6}>
      <TextField name='contactNo' variant='standard' label='Contact number *'
        {...register('contactNo',{
            required:"Contact no is required",
            pattern:{
              value:/^[7-9]\d{9}$/,
              message:"Enter valid contact number"
            }
        })}
        onBlur={(e)=>trigger('contactNo')}/> <Error>{errors.contactNo?.message}</Error>

          </Grid2>
</Grid2>
<Grid2 container spacing={5}>
  <Grid2 item xs={12} md={6}><TextField  name='quantity'label='Quantity' variant='standard'
            {...register('quantity',{
              required:'Quantity is required',
            })} type='number'
            onBlur={(e)=>trigger('quantity')}/> <Error>{errors.quantity?.message}</Error>
            </Grid2>
  <Grid2 item xs={12} md={6}><TextField  name='deliverydate' label='Delivery Date' variant='standard'
            {...register('deliveryDate',{
                required:'Delivery date is required'
            })}
            onBlur={(e)=>trigger('deliveryDate')}/>
                      <Error>{errors.deliveryDate?.message}</Error>

            </Grid2>

</Grid2>
             <TextField name="address" variant='standard'label='address'
            {...register("address", {
              required: "address is required",

            })} onBlur={(e) => trigger("address")}
          />
          <Error>{errors.address?.message}</Error>
    <Grid2 container spacing={5} >
      <Grid2 item xs={12} md={6}>
      <TextField name="city" variant='standard' label='City'
              {...register("city", {
                required: "City is required",
              })}
              onBlur={(e) => trigger("city")}
              placeholder='city'
            /><Error item >{errors.city?.message}</Error>

      </Grid2>
      <Grid2 item xs={12} md={6}>
      <TextField name='state' variant='standard' label='State'
              {...register("state", {
                required: "State is required",
              })}
              onBlur={(e) => trigger("state")}
              placeholder='State'
            />  <Error>{errors.state?.message}</Error>

      </Grid2>
      <Grid2 item xs={12} md={6}>
           <TextField name="postalCode" variant='standard' label='Postal Code'
              {...register("postalCode", {
                required: "Postal Code is required",
                maxLength: { value: 6, message: "postal Code must be 5 digits" },
                pattern: {
                  value: /^\d{6}$/, message: "Valid postal code should have 6 digits"
                }
              })}
              onBlur={(e) => trigger("postalCode")}
             /><Error>{errors.postalCode?.message}</Error>

      </Grid2>

    </Grid2>

            <br/>
            <Grid2 display={'flex'}   justifyContent={'space-evenly'}>         
              <Button variant='contained' type="reset" onClick={() => reset()}>Reset</Button>
              <Button variant='contained' type="submit">Submit</Button>
          </Grid2>

      {/*firsname,lastname, quantity,contactno 
      city, delivery date, 
      postal code, state,id
      address, email, ,
       street ,porduct name*/}
            </form>  
            </Grid2>
     
            </Grid2>

    </div>
  )
}

export default UserForm