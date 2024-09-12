import React from 'react'
import { useForm } from "react-hook-form";
import { Button,  Grid2, TextField, Typography } from '@mui/material'
import axios from 'axios';
import styled from '@emotion/styled/macro';
import { useNavigate } from 'react-router-dom';

const Error = styled.p`
  color: red;
  font-size: 0.8rem;
  margin:0;
`;
const UserForm = ({product}) => {
  const navigate=useNavigate();
  async function saveForm(data) {
    try {
      const response = await axios.post("http://localhost:3000/orders", data);
      console.log(response.data);

      alert("SUBMITTED")
      // navigate("/");
    } catch (error) {
      console.log(error)
    }
  };
  const{productName,id,price}=product;

        const onSubmit=(data)=>{
          console.log("button clicked")
           data={...data,productName,id}
          saveForm(data);
          reset();
        };
    const{register,handleSubmit,formState:{errors},trigger,reset}=useForm();
  return (
    <div>
            <Grid2 container   spacing={5} p={5} alignContent={'center'}>
            
            <Grid2 display={'flex'}p={2}  xs={12} sm={6} >
            
            <form style={{  flexDirection: 'column' ,overflow:'hidden'}}
          onSubmit={handleSubmit(onSubmit)}   >
             <Typography variant='h4' color='blue'>{productName}</Typography>
              <Typography variant='subtitle' p='2px' bgcolor={"gray"} color='white'>&#8377; {price}</Typography>
             
  <Grid2  container spacing={5}>
    <Grid2 item xs={12} md={6}> 
            <TextField width={'100%'} name='firstName' variant="standard"  label="First Name *"
            {...register('firstName',{
                required:"Name is required",
            })} fullWidth
            onBlur={(e)=>trigger('firstName')}/> 
           <Error>{errors.firstName?.message}</Error>
    </Grid2> 
    <Grid2 item xs={12} md={6}>
      <TextField name='lastName' variant="standard" label="Last Name *"
      {...register('lastName',{
          required:"Last Name is required"
      })}fullWidth
      onBlur={(e)=>trigger('lastName')}/>
      <Error>{errors.firstName?.message}</Error>
    </Grid2>
</Grid2>
<Grid2 spacing={5} container>
    <Grid2 item xs={12} md={6}>
      <TextField name='email' variant="standard" label="Email *"
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
        })}fullWidth
        onBlur={(e)=>trigger('contactNo')}/> <Error>{errors.contactNo?.message}</Error>

          </Grid2>
</Grid2>
<Grid2 container spacing={5}>
  <Grid2 item xs={12}  md={6} lg={4}><TextField  name='quantity'label='Quantity *' variant='standard'
            {...register('quantity',{
              required:'Quantity is required',
              validate:(value)=>{if(value<=0)return "Number can't be Negative/Zero"}
            })} type='number' fullWidth
            onBlur={(e)=>trigger('quantity')}/> <Error>{errors.quantity?.message}</Error>
            </Grid2>
  <Grid2 item xs={12} md={6}><TextField  name='orderDate' label='Order Date' variant='standard'
            {...register('orderDate')}slotProps={{
              input: {
                readOnly: true,
              },
            }}
                       defaultValue={new Date().toISOString().slice(0, 10)}
                      fullWidth  />
            </Grid2>

</Grid2>
             <TextField name="address" variant='standard'label='Address *'
            {...register("address", {
              required: "address is required",

            })} onBlur={(e) => trigger("address")}fullWidth
          />
          <Error>{errors.address?.message}</Error>
    <Grid2 container spacing={5} >
      <Grid2 item xs={12} md={6}>
      <TextField name="city" variant='standard' label='City'
              {...register("city", {
                required: "City is required",
              })}fullWidth
              onBlur={(e) => trigger("city")}
              placeholder='city'
            /><Error item >{errors.city?.message}</Error>

      </Grid2>
      <Grid2 item xs={12} md={6}>
      <TextField name='state' variant='standard' label='State'
              {...register("state", {
                required: "State is required",
              })}fullWidth 
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
              })}fullWidth
              onBlur={(e) => trigger("postalCode")}
             /><Error>{errors.postalCode?.message}</Error>

      </Grid2>

    </Grid2>

            <br/>
            <Grid2 display={'flex'}   spacing={2}>         
              <Button  variant='contained' type="reset" onClick={() => reset()}>Reset</Button>
              <Button variant='contained' type="submit">Place Order</Button>
          </Grid2>

            </form>  
            </Grid2>
     
            </Grid2>

    </div>
  )
}

export default UserForm