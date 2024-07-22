import { Table } from "react-bootstrap";
import Product from "./product";

const getProductList = async () => {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    return data.products;
}

export default async function ProductList() {

    let productsList = await getProductList();
    // console.log(productsList);

    return (
        <div>
            <h1> Products List</h1>

            <Product propsData={"From Server Component"} />
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
                        productsList.map((item, i) => (
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


