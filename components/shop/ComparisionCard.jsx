'use client'

import { useEffect, useState } from "react"

export default function ComparisionCard() {

    const [products, setProducts] = useState([]);
    const selectedIds = [1, 3];

    useEffect(() => {
        const fetchProducts = async () => {
            const responses = await Promise.all(
                selectedIds.map(id =>
                    fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json())
                )
            );
            setProducts(responses);
        }
        fetchProducts();
    }, [])

    return (
        <div className="bg-base-100 rounded-md">
            {products ? products.map(p => (
                <div key={p.id}>
                    <img src={p.image} alt={p.title} />
                    <h3>{p.title}</h3>
                    <p>{p.price}</p>
                </div>
            )) : <div>loading..</div>}

        </div>
    )
}
