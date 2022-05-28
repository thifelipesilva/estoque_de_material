import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';

interface Itypes {
  nome: string,
  preco: string,
  marca: string,
  descricao: string
}

function createData(
  Id: string,
  Nome: string,
  Marca: string,
  Preco: number,
  Descricao: string,
) {
  return { Id, Nome, Marca, Preco, Descricao };
}


const rows = [
  createData('12', 'Galaxy', 'Samsung', 1400, 'Celular Samsung Galaxy'),
  createData('12', 'Galaxy', 'Samsung', 1400, 'Celular Samsung Galaxy')
];

const Tabela = () => {
  return (

    <Box m={2}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Nome</TableCell>
              <TableCell align="right">Marca</TableCell>
              <TableCell align="right">Preço</TableCell>
              <TableCell align="right">Descricao</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.Id}

              >
                <TableCell align="right">{row.Id}</TableCell>
                <TableCell align="right">{row.Nome}</TableCell>
                <TableCell align="right">{row.Marca}</TableCell>
                <TableCell align="right">{row.Preco}</TableCell>
                <TableCell align="right">{row.Descricao}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    
  );
}

export default Tabela;