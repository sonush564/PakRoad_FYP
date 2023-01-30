import React from 'react';
import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore"; 
import db from '../../Firebase';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Table from 'react-bootstrap/Table';
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem'; 
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Header from '../Header/Header';
import areas from './Area'
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { useTranslation, initReactI18next } from "react-i18next";
const NeedRide = ({changeLanguage, toggleDark, settoggleDark}) => {
  const [input, setInput]= useState([]);
  const {t, il8n}= useTranslation();
  const [date, setDate] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [Shown, setShown] = useState(true);
  const [tabel, setTable] = useState('light');
  const[search, setSearch]= useState([]);
  const userCollectionRef=collection(db,"user")
  const handleChange = (newValue) => {
    setDate(newValue);
  };
  const [user, setUser] = useState({
    city:"",
    area:"",
    center: "",
    vehcile: "",
    gender: ""
    });
    let name,val
    const getUser=(event)=>{
      name= event.target.name;
      val= event.target.value;
      setUser({ ...user, [name]: val})
     
       }
       useEffect(()=>{
        if(toggleDark==true){
          setTable('dark')
        }
        if(toggleDark==false){
          setTable('light')
        }
       
       })
  useEffect(()=>{
    const getUser=async()=>{
      const data=await getDocs(userCollectionRef);
      setInput(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
      setSearch(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
  }
  getUser();
}, [])
  const handleFilter=(center, area, gender, vehcile, date)=>{
    
    if (( area && center&& gender&&vehcile&&date)){
      const filterResult=search.filter(item=>{   
        return item.center===center&&item.area===area&&item.gender===gender&&item.vehcile===vehcile&&new Date(item.date.seconds*1000).toDateString()===date. toDateString()   
      })
    
      setIsShown(true);
      setShown(false);
      setInput(filterResult) 
      
    }
    else{
      toast.error('Fill the form completely')
    }
  } 
    return ( 
      <>
      <div className='needRideHeader'>
       <Header changeLanguage={changeLanguage} toggleDark={toggleDark} settoggleDark={settoggleDark}/>
       </div>
      <div id='needridee'>
           <center>   <h1 id='LP' >{t('Need')}</h1> </center>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <div>
            <div className='search'>
      <div className='needFeild'>
      <DatePicker
          disablePast
          label={t('share3')}
          openTo="year"
          views={['year', 'month', 'day']}   
          value={date}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        </div>
          <div className='needFeild'>
         <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">{t('share6')}</InputLabel>
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
         <div className='needFeild'>
         <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">{t('share7')}</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    name='center'
    value={user.center}
    label="Center"
    onChange={getUser}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
  >
    <MenuItem value={'Manawa'}>Manawa</MenuItem>
    <MenuItem value={'DHA'}>DHA</MenuItem>
    <MenuItem value={'Bahria Town'}>Bahria Town</MenuItem>
    <MenuItem value={'Arfa Careem Tower'}>Arfa Careem Arfa</MenuItem>
  </Select>
</FormControl>
         </div>
         <div className='needFeild'>
         <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">{t('share9')}</InputLabel>
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
</div>
<div className='needFeild'>
         <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">{t('share8')}</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    name='vehcile'
    value={user.vehcile}
    label="Gender"
    onChange={getUser}
  >
    <MenuItem value={'Bike'}>Bike</MenuItem>
    <MenuItem value={'Car'}>Car</MenuItem>
  </Select>
</FormControl>
</div>
<div className='submitN'>
         <Button color="primary" variant='contained' className='searchButton'  onClick={()=>{handleFilter(user.center, user.area, user.gender,user.vehcile, date) }}> {t('need2')}
         </Button>
         <ToastContainer />
         </div>
         
</div>
</div>
      </Stack>
    </LocalizationProvider>
    {Shown && ( 
   <div className='needRide'>
   {t('need1')}
   </div>
    )}
    {isShown && ( 
        <div className='ResultRide'>
            <Table striped bordered hover variant={tabel} className='table'>
             <thead className='thead'>
               <tr> 
                 <th>Name</th>
                 <th>Contact Number</th>
                 <th>City</th>
                 <th>Area</th>
                 <th>Test Center</th>
                 <th>Vehcile</th>
                 <th>Gender</th>
                 <th>Time slot</th>
               </tr>
             </thead>
             <tbody className='tbody'>
             {input.map((user)=>{
                 return(
               <tr>
                 <td>{user.name}</td>
                 <td>{user.phone}</td>
                 <td>{user.city}</td>
                 <td>{user.area}</td>
                 <td>{user.center}</td>
                 <td>{user.vehcile}</td>
                 <td>{user.gender}</td>
                 <td> <SimpleDateTime  timeSeparator=":" meridians="1"  showDate="0" >{user.time}</SimpleDateTime></td>
               </tr>
                 )
                })}
             </tbody>
           </Table>    
        </div>
         )}
        </div>
        </>
     );
}
export default NeedRide;