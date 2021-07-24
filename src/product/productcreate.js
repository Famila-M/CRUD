import { useContext, useState } from "react"
import ProductContext from "../productContext";

export default function ProductCreate(){

    let productData = useContext(ProductContext)

    let[productName,setproductName] = useState("");
    let[brand,setbrand] = useState("");
    let[color,setcolor] = useState("");
    let[price,setprice] = useState("");

    let productSubmit = (e) => {
        e.preventDefault()

        productData.setProductList([...productData.productList,{
            productName,
            brand,
            color,
            price
        }])
    }

    return <>
    
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h3>Create Product</h3>
            </div>
        </div>
    <form onSubmit={productSubmit}>
        <div className="row">
        <div className="col-lg-6">
            <label>ProductName</label>
            <input className="form-control" value={productName} onChange={(e) => setproductName(e.target.value)}/>
        </div>
        <div className="col-lg-6">
            <label>Brand</label>
            <input className="form-control" value={brand} onChange={(e) => setbrand(e.target.value)}/> 
        </div>
        </div>


        <div className="row">
        <div className="col-lg-6">
           <label>Color</label>
           <input className="form-control" value={color} onChange={(e) => setcolor(e.target.value)}/>
        </div>
        <div className="col-lg-6">
            <label>Price</label>
            <input className="form-control" value={price} onChange={(e) => setprice(e.target.value)}/>
        </div>
        </div>

        <div className="row mt-3">
        <div className="col-lg-6">
            <input className="btn btn-primary" type="submit" value="Submit"/>
        </div>
        </div>

    </form>
    </div>

    </>
}