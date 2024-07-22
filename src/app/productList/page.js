"use client"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap";

export default function ProductList() {

    const [productList, setProductList] = useState([]);

    const getProductList = async () => {
        let data = await fetch("https://dummyjson.com/products");
        data = await data.json();
        setProductList(data.products);
    }

    useEffect(() => {
        getProductList();
    }, [])

    return (
        <div>
            <h1> Product List</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Tiltle</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList.map((item, i) => (
                            <tr key={i}>
                                <td>{item.title}</td>
                                <td>{item.brand}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}


