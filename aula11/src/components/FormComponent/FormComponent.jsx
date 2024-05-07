import { useEffect, useState } from 'react'
import TableComponent from '../TableComponent/TableComponent'
import './FormComponent.css'

export default async function FormComponent(){

    const [products, setProducts] = useState([])
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [preco, setPreco] = useState(null)
    const [estoque, setEstoque] = useState(null)
    const [edit, setEdit] = useState(false) 

    const url = "http://localhost:3000/products";

    const clearForm = () => {
        setName = ("");
        setPreco = ("");
        setEstoque = ("");
    }

    useEffect(() => { const getProductsList = async() => {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
    }

        getProductsList();
    }, []);
      
    
    const getProductById = async(id) => {
        const res = await fetch(url + `?id${id}`);
        const data = await res.json();
        
        setName(data[0].name)
        setPreco(data[0].preco)
        setEstoque(data[0].estoque)
        setId(data[0].id)
        
        setEdit(true)
    }

    const saveForm = async (e) => {
    e.preventDefault();
    const saveRequestParams = {
        method: edit ? "PUT" : "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ name, price, estoque })
    }

    const save_url = edit ? url + `./${id}` : url;

    const res = await fetch(save_url, saveRequestParams); 

    
    if (!edit) {
        const newProduct = await res.json();
        setProducts((prevProducts) => [...prevProducts, newProduct]);
    }
    
    if (edit) {
        const editedProduct = await res.json();
        const editedProductIndex = products.findIndex(prod => prod.id === id);
        products[editedProductIndex] = editedProduct;
        setProducts(products)
    }
    clearForm();
    setEdit(false);
    }

    const deleteProduct = async(id) => {
        const res = await fetch(url + `url + ${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
        })
        
        const deletedProduct = await res.json();
        setProducts(products.filter(prod => prod.id !== deletedProduct.id))
    }

    const handleName = (e) => {setName(e.target.value)};
    const handlePrice = (e) => {setPrice(e.target.value)};
    const handleStock = (e) => {setStock(e.target.value)};
    
    
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