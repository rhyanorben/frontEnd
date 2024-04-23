import './TableComponent.css'

export default function TableComponent({products}) {
    return(
        <div>
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
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.nome}</td>
                            <td>{product.preco}</td>
                            <td>{product.estoque}</td>
                            <td class="actions">
                            <button>Editar</button>
                            <button>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}
