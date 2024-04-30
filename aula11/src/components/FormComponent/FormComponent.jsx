import { useState } from 'react'
import TableComponent from '../TableComponent/TableComponent'
import './FormComponent.css'

export default function FormComponent(){

    const [products, setProducts] = useState([])
    const [id, setId] = useState(1)
    const [name, setName] = useState("")
    const [preco, setPreco] = useState(null)
    const [estoque, setEstoque] = useState(null)
    const [edit, setEdit] = useState(false) 
      
    const saveForm = (e) => {
    e.preventDefault()

    if (!edit) {
        setId(id => id+1)
        setProducts([...products, {id, name, preco, estoque}])
        const newProduct = {
            id: id,
            name: name,
            preco: preco,
            estoque: estoque 
        };
        setProducts([...products, newProduct]);
    }

    if (edit) {
        const product = products.findIndex(prod => prod.id===id)
        products[product] = {
            id,
            name,
            preco,
            estoque
        }  
        setProducts(products)
        setEdit(false)
    }
    setName("");
    setPreco("");
    setEstoque("");
    }

    

    const handleEdit = (id) => {
        const product = products.find(prod => prod.id===id)
        setId(product.id)
        setName(product.name)
        setPreco(product.preco)
        setEstoque(product.estoque)
        setEdit(true)
    }

    const handleDelete = (id) => {
        setProducts(currentProducts => currentProducts.filter(prod => prod.id !== id))
    }



    return(
        <>
        {products.length > 0 ? <TableComponent onEdit={handleEdit} onDelete={handleDelete} products={products} /> : <h2>Sem produtos cadastrados...</h2>}
            
            <div className='Container'>
                <h2>Cadastro de Produtos</h2>
                <form action="#" method='post' onSubmit={saveForm}>
                    <label htmlFor="name" name='name'>Nome:</label>
                    <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} required/>
                    <label htmlFor="preco">Preço:</label>
                    <input type="number" name='preco' value={preco} onChange={(e) => setPreco(e.target.value)} required/>
                    <label htmlFor="estoque">Estoque:</label>
                    <input type="number" name='estoque' value={estoque} onChange={(e) => setEstoque(e.target.value)} required/>
                    <input type="submit" value="Cadastrar"/>
                </form>
            </div>
        </>
    )
}