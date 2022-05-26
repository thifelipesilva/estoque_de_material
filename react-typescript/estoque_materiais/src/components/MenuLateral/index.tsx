import  React from 'react';
import './index.css';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import ManRoundedIcon from '@mui/icons-material/ManRounded';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';

const MenuLateral = () => {
    return (
        <div className='menu-lateral'>
            <h2 className='menu-lateral__titulo'>Gerenciador</h2>
            <div className='menu-lateral__nav'>
                <div className='menu-lateral__nav-user'>
                    <AccountBoxIcon/>
                    <span>Vendedor</span>
                </div>
                <ul className='menu-lateral__nav-lista'>
                    <div className='menu-lateral__nav-lista-item'>
                        <PhoneAndroidRoundedIcon/>
                        <li>Materiais</li>
                    </div>
                    <div className='menu-lateral__nav-lista-item'>
                        <ManRoundedIcon/>
                        <li>Vendedores</li>
                    </div>
                    <div className='menu-lateral__nav-lista-item'>
                        <InventoryRoundedIcon/>
                        <li>Estoque</li>
                    </div>
                </ul>

                <div className='menu-lateral__nav-exit'>
                    <ExitToAppIcon/>
                    <span>Sair</span>                    
                </div>
            </div>
            
        </div>
    )
}

export default MenuLateral;
