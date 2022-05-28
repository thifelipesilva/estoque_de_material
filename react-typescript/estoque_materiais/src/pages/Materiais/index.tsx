import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import Tabela from '../../components/Tabela';

interface Idados {
    nome: string,
    preco: string,
    marca: string,
    descricao: string
}



const Materiais: React.FC = () => {

    
    const [dados, setDados] = useState<Idados[]>();  
    
    function addMaterial(event: React.FormEvent<HTMLElement>){
        
        
    }
    
    return(

        <Box>
            <Typography
             mt={4}
             variant="h4" 
             component="h2" 
             align='center'
            >
             Cadastro de Materiais
            </Typography>
           
            <Container maxWidth="sm">         
                                    
                    <Container>
                        <TextField
                         id="nome"
                         value={nome}
                         label="Nome" 
                         variant="outlined" 
                         margin='normal' 
                         fullWidth
                        />
                        <TextField 
                         id="preco" 
                         value={preco}
                         label="Preço" 
                         variant="outlined" 
                         margin='normal' 
                         fullWidth
                        />                        
                        
                        <TextField
                         id="marca" 
                         value={marca}
                         label="Marca" 
                         variant="outlined" 
                         margin='normal'  
                         fullWidth
                        />

                        <TextField
                         id="descricao" 
                         value={descricao}
                         label="Descrição" 
                         variant="outlined" 
                         margin='normal' 
                         fullWidth
                        />

                    <Button
                     variant="contained"
                     fullWidth
                    >
                        Cadastrar Material
                    </Button>
                </Container> 
            </Container> 
            
            <Tabela/>
            
        </Box>
        
   
    )
    
    
}


export default Materiais;