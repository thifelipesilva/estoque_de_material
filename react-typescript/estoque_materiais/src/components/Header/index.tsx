import  React from 'react';
import './index.css';
import { Typography } from '@mui/material'
import '@fontsource/roboto';
import NavLista from './NavLista';
import NavUser from './NavUser';


const Header = () => {
    return (
        <div className='header'>
            <Typography variant="h3" component="h1">Gerenciador de Estoque</Typography>            
            <NavLista/>
            <NavUser/>              
            
        </div>
    )
}

export default Header;
