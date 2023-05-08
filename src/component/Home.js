
import { Table, TableBody, TableCell, TableHead, TableRow,  } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'

import axios from'axios';

const Home = () => {
    var[value,setvalue]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            console.log(response.data);
         setvalue(value=response.data)
        })
    },[])
  return (
    <div>
      <Table >
        <TableHead>
            <TableRow>
                <TableCell>
                   NAME
                </TableCell>
                <TableCell>Describition</TableCell>
                <TableCell>author name</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
{value.map((data,ind)=>{
    return <TableRow>
        
        <TableCell>{data.id}</TableCell>
        <TableCell>{data.title}</TableCell>
        <TableCell>{data.body}</TableCell>
    </TableRow>
})}
        </TableBody>
    </Table>
    </div>
  )
}

export default Home
