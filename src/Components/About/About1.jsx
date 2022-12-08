import React from 'react';
import {Container, Navbar} from 'react-bootstrap';
import NewLogo from '../Images/NewLogo.png';
import { MDBCol, MDBInput } from "mdbreact";
import Menubar from '../Header/Menubar';
import Header from '../Header/Header';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Bike', '100 Rupees',2022),
  createData('LTV+Bike', '150 Rupees',2022),
  createData('Bike+Car', '150 Rupees',2022),
  createData('HTV+PSV', '200 Rupees', 2022),
];
const About1 = () => {
    return ( 
     <> 
     <Header/>
     
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Vehcile Type</TableCell>
            <TableCell align="center">Ticket Price</TableCell>
            <TableCell align="right">Validity year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      </>
  
  
     );
     
}
 
export default About1;