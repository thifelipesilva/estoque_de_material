import React from 'react';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import ManRoundedIcon from '@mui/icons-material/ManRounded';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import './index.css'


const NavLista = () => {
    return (
        <ul className='nav__lista'>
                    <div className='nav__lista-item'>
                        <PhoneAndroidRoundedIcon/>
                        <li>Materiais</li>
                    </div>
                    <div className='nav__lista-item'>
                        <ManRoundedIcon/>
                        <li>Vendedores</li>
                    </div>
                    <div className='nav__lista-item'>
                        <InventoryRoundedIcon/>
                        <li>Estoque</li>
                    </div>
                </ul>
    )
}

export default NavLista;