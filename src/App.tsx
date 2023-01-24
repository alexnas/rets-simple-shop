import React, { useEffect, useState } from 'react';
import Product from './components/Product'
import axios from 'axios'
import { IProduct } from './models';

function App() {
	const [products, setProducts] = useState<IProduct[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	async function fetchProducts() {
		try {
			setError('')
			setLoading(true)
			const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
			setProducts(response.data)
			setLoading(false)
		} catch (err) {
			setLoading(false)
			if (axios.isAxiosError(err) && err.message) {
				setError(err.message)
			} else {
				setError('Network Error')
			}
		}
	} 

	useEffect(() => {
		fetchProducts()
	},[])

  return (
		<>
			<div className='container mx-auto max-w-2xl pt-5'>
			{loading && <div className='text-center'>Loading in progress...</div>}
			{error && <div className='text-center text-red-600'>{error}</div>}
				{products.map(product => <Product product={product} key={product.id}/>)}
			</div>
		</>
  );
}

export default App;
