import React, { useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
const UpdateProduct =()=>{
    const [name,setName]= React.useState('');
    const [price,setPrice]= React.useState('');
    const [catagory,setCatagory]= React.useState('');
    const [company,setCompany]= React.useState('');

    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getProductDetails();
    },[])
    const getProductDetails = async ()=>{
        console.warn(params)
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        setName(result.name)
        setPrice(result.price)
        setCatagory(result.catagory)
        setCompany(result.company)
    }

    const updateProduct= async()=>{
        console.warn(name,price,catagory,company)
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method: 'put',
            body: JSON.stringify({name, price, catagory, company}),
            headers: {
                'Content-Type': "application/json"
            }
        });
        result = await result.json()
        console.warn(result)
        navigate('/')
    }
    return(
        <div className="product">
            <h1>Update Product</h1>
            <input type="text" placeholder="Enter Product Name" 
            className="inputBox" value={name} onChange={(e)=>{setName(e.target.value)}} />
            <input type="text" placeholder="Enter Product Price" 
            className="inputBox" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
            <input type="text" placeholder="Enter Product Catagory" 
            className="inputBox" value={catagory} onChange={(e)=>{setCatagory(e.target.value)}} />
            <input type="text" placeholder="Enter Product Company" 
            className="inputBox" value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
            <button onClick={updateProduct} className="appButton">Update Product</button>

        </div>
    )
}
export default UpdateProduct;