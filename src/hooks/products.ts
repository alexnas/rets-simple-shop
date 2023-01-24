import { useEffect, useState } from 'react';
import axios from 'axios'
import { IProduct } from '../models';

export const useProducts = () => {
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

	return {products, loading, error}
}