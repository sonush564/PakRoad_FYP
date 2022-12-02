import React from 'react';
import {Container} from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';
import twitter from '../Images/twitter.png'
import instagram from '../Images/instagram.png'
import facebook from '../Images/facebook.png'

const Footer = () => {

    const navigate = useNavigate();

    return ( 
        <Container fluid className='footer' id='footer'>
            <div style={{ height:"250px", marginTop:"10px", float:"left",width:"50%"}}>


            </div>
            <div style={{ height:"250px", marginTop:"10px", float:"left",width:"25%"}}>
<h2 style={{textAlign:"center",color:"white", marginTop:"3px"}}>About</h2>

            </div>
            <div style={{ height:"250px", marginTop:"10px", float:"left",width:"25%"}}>
<h2 style={{textAlign:"center",color:"white", marginTop:"3px"}}>Downloads</h2>
            </div>
<div fluid style={{backgroundColor:"#00000", float:"left", width:"100%"}}>
       <p id='cp'>Copyright &copy; 2022 All Rights Reserved. PakRoad Traffic Rules, Training & Information Portal </p>
       <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
        <img  id='images' className="img-responsive" src={twitter}  alt="logo" />
        </a>  
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <img  id='images' className="img-responsive" src={instagram}  alt="logo" />
        </a>   
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <img  id='images' className="img-responsive" src={facebook}  alt="logo" />
        </a>  
        </div>

    </Container>
     );
}
 
export default Footer;
