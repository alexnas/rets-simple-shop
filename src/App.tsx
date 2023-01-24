import React, { useContext, useState } from 'react';
import CreateProduct from './components/CreateProduct';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';
import { Modal } from './components/Modal';
import Product from './components/Product'
import { ModalContext } from './context/ModalContext';
import { useProducts } from './hooks/products'; 
import { IProduct } from './models';


function App() {
	const {products, loading, error, addProduct} = useProducts()
	const {modal, open: openModal, close: closeModal} = useContext(ModalContext)


	const createHandler = (product:IProduct) => {
		closeModal()
		addProduct(product)
	}

  return (
		<>
			<div className='container mx-auto max-w-2xl pt-5'>
			{ loading && <Loader/> }
			{ error && <ErrorMessage error={error}/> }
			{ products.map(product => <Product product={product} key={product.id}/>) }
			</div>

			{modal && <Modal title='Create new product' onClose={closeModal}>
				<CreateProduct onCreate={createHandler}/>
			</Modal>}

			<button 
				onClick={openModal}
				className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
			>+</button>
		</>
  );
}

export default App;
