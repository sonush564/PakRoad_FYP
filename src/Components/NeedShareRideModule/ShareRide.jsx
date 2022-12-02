import * as React from 'react'; 
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import {MenuItem} from '@mui/material'; 
import {FormControl} from '@mui/material';
import {Select} from '@mui/material';
import Button from '@mui/material/Button';
import { MuiTelInput } from 'mui-tel-input'
import db from '../../Firebase';
import { collection, getDocs, addDoc, } from "firebase/firestore"; 
import { BouncingBalls } from "react-cssfx-loading";
import Header from '../Header/Header';
import areas from './Area'


export default function ShareRide({changeLanguage, toggleDark, settoggleDark}) {
    const userCollectionRef=collection(db,"user");
    const [date, setDate] = useState("");
    const [phone, setPhone] = useState('');
    const [time, setTime] =useState("");
    const [errorText, setErrorText] = React.useState();
    const [user, setUser] = useState({
        name:"",
        city:"",
        area:"",
        center: "",
        vehcile: "",
        gender: ""
        });
    const [btnShown, setBtnShown] = useState(true);
    const [loadShown, setLoadShown] = useState(false);
const handleChange = (newValue) => {
    setDate(newValue);
  };
  const handleChange1 = (newValue) => {
      setTime(newValue);
    };
  const handleChange3 = (newValue) => {
      setPhone(newValue);
      if (phone.length===14) {
        setErrorText("");
      } else {
        setErrorText("Kindly enter 11 digit phone no");
      }
    }
  

      let name,val
  const getUser=(event)=>{
 name= event.target.name;
 val= event.target.value;
 setUser({ ...user, [name]: val})
  }
  
  const postData= async(e)=>{

    
      e.preventDefault();
      const {name, city, area, center, gender,vehcile}=user ;
      if (( name, city, area, center, gender,vehcile && date, time, phone && phone.length==15)){
        setBtnShown(false)
        setLoadShown(true)
       const res= await addDoc(userCollectionRef,{name: user.name, phone: phone, date: date, time: time, area: user.area, city: user.city, gender: user.gender, center:user.center, vehcile:user.vehcile})
        if (res){
            setDate("");
            setTime("");
            setPhone("");
            setUser({
                name:"",
                city:"",
                area:"",
                center: "",
                gender: ""
                });
                setLoadShown(false)
                setBtnShown(true)
                
               
        }
      }else{
 alert("kindly fill complete form")
      }  }

     
  return (
    
    <> 
  <Header changeLanguage={changeLanguage} toggleDark={toggleDark} settoggleDark={settoggleDark}/>
    <div className='shareRideBg'>
       
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
   
      <div className='shareRide'>
      <div className='shareRide1'>
          <div className='area1'>
          <TextField
  helperText="Please enter your name"
  id="demo-helper-text-misaligned"
  label="Name"
  name='name'
  value={user.name}
  onChange={getUser}

  
/>
          </div>
          <div className='area1'>
          <MuiTelInput
           label="Phone no"
          error={errorText}
          helperText={errorText}
         defaultCountry="PK"
         value={phone}
         onChange={handleChange3} 
         inputProps={{ maxLength: 15 }}
       />
          </div>  
      <div className='area1'>
        <DatePicker
          disablePast

          label="Select Date"
          openTo="year"
          views={['year', 'month', 'day']}   
          value={date}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
         </div>
         <div className='area1'>
         <TimePicker
          label="Time"
          value={time}
          onChange={handleChange1}
          renderInput={(params) => <TextField {...params} />}
        />
         </div>
        
         </div>
         <div className='shareRide2'>
         <div className='area'>
         <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">City</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    name='city'
    value={user.city}
    label="City"
    onChange={getUser}
    
  >
    <MenuItem value={'Lahore'}>Lahore</MenuItem>
 
  </Select>
 
</FormControl>
         </div>
         <div className='area'>
         <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Area</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    name='area'
    value={user.area}
    label="Area"
    onChange={getUser}
  >

{areas.map((area) => (
            <MenuItem
              key={area}
              value={area}
            >
              {area}
            </MenuItem>
          ))}

  </Select>
 
</FormControl>
         </div>
         <div className='area'>
         <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Center</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    name='center'
    value={user.center}
    label="Center"
    onChange={getUser}
  >
    <MenuItem value={'Manawa'}>Manawa</MenuItem>
    <MenuItem value={'DHA'}>DHA</MenuItem>
    <MenuItem value={'Bahria Town'}>Bahria Town</MenuItem>
    <MenuItem value={'Arfa Careem Tower'}>Arfa Careem Arfa</MenuItem>
  </Select>
  
</FormControl>
         </div>
         <div className='area'>
         <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Vehcile</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    name='vehcile'
    value={user.vehcile}
    label="Center"
    onChange={getUser}
  >
    <MenuItem value={'Bike'}>Bike</MenuItem>
    <MenuItem value={'Car'}>Car</MenuItem>
    
  </Select>

</FormControl>
         </div>
         <div className='area'>
         <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    name='gender'
    value={user.gender}
    label="Gender"
    onChange={getUser}
  >
    <MenuItem value={'Male'}>Male</MenuItem>
    <MenuItem value={'Female'}>Female</MenuItem>
  </Select>
  
</FormControl>

{btnShown && ( 
<div className='submit'>
         <Button color="primary" variant="contained" className='submitB' onClick={postData} >Submit
         </Button>
         </div>
    
						
					
)}
{loadShown && (
         <BouncingBalls className='submitLoad' />
)}
         </div>
         </div>
         </div>
      </Stack>
    </LocalizationProvider>
    </div>
    </>
  );
}
