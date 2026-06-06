import { useEffect, useState } from 'react';

const APIs = [
  "https://fakestoreapi.com/products/category/women's%20clothing",
  "https://fakestoreapi.com/products/category/men's%20clothing",
  'https://fakestoreapi.com/products/category/jewelery',
  'https://fakestoreapi.com/products/category/electronics',
  'https://dummyjson.com/products/category/mens-shoes',
];

export default function useSearchProducts(query) {
  const [products, setProducts] = useState([]);

  // fetch once
  useEffect(() => {
    const getData = async () => {
      const responses = await Promise.all(
        APIs.map((url) => fetch(url).then((res) => res.json())),
      );

      const merged = responses.flatMap((item) =>
        item.products ? item.products : item,
      );

      setProducts(merged);
    };

    getData();
  }, []);

  // filter
  const filtered = query
    ? products.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()),
      )
    : [];

  return filtered;
}
