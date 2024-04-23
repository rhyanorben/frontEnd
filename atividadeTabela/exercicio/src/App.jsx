import { useState } from 'react'
import './App.css'
import TableComponent from './TableComponent/TableComponent'

function App() {

  const products = [{
    id: 1, nome: 'Maçã', preco: 'R$ 10,00', estoque: '20,50' 
  },
  {
    id: 2, nome: 'Banana', preco: 'R$ 8,00', estoque: '40,70'
  },
  {
    id: 3, nome: 'Melancia', preco: 'R$ 7,00', estoque: '100,00'
  },
  {
    id: 4, nome: 'Melão', preco: 'R$ 9,00', estoque: '30,00'
  },
  {
    id: 5, nome: 'Uva', preco: 'R$ 11,00', estoque: '50,00'
  }]
  return (
    <>
      <h2>Tabela de Produtos</h2>
      <TableComponent products={products}/>
    </>
  )
}

export default App
