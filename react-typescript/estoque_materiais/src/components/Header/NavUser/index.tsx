import React from 'react';
import './index.css';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const NavUser = () => {
    return(
        <div className='nav_user'>
                <div className='nav_user__item'>
                    <AccountBoxIcon/>
                    <span>Vendedor</span>
                </div>

                <div className='nav_user__item'>
                    <ExitToAppIcon/>
                    <span>Sair</span>                    
                </div>

            </div>        
    );
}

export default NavUser;