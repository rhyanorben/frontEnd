import { useState } from 'react'
import './TableComponent.css'

export default function TableComponent({products, onEdit, onDelete}) {

    return(
        <div>
            <h2>Tabela de Produtos</h2>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Estoque (kg)</th>
                    <th>Ações</th>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.preco}</td>
                            <td>{product.estoque}</td>
                            <td class="actions">
                            <button onClick={() => onEdit(product.id)}>Editar</button>
                            <button onClick={() => onDelete(product.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}
