import React, { useState } from 'react';
import { Product } from './products'

export default function Gallery() {

    const [products, setProducts] = useState(Product)

    const filterProduct = (category) => {
        const filterItems = Product.filter((elem) => {
            return elem.category == category
        })
        setProducts(filterItems)
    }

    return (
        <>
            <div className="my-3">
                <div className="container-fluid">
                    <div className="row text-center">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <h2 className='fw-bold'>Favourite Products</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <hr className='mb-4' />

                <div className="container my-4">
                    <div className="row text-center">
                        <div className='col-1'></div>
                        <div className="col-md-2 mt-2 mt-md-0">
                            <button className='btn btn-warning btn-sm' style={{ width: 100 }} onClick={() => { filterProduct('sofa') }}>Sofa</button>
                        </div>
                        <div className="col-md-2 mt-2 mt-md-0">
                            <button className='btn btn-warning btn-sm' style={{ width: 100 }} onClick={() => { filterProduct('table') }}>Table</button>
                        </div>
                        <div className="col-md-2 mt-2 mt-md-0">
                            <button className='btn btn-warning btn-sm' style={{ width: 100 }} onClick={() => { filterProduct('chair') }}>Chair</button>
                        </div>
                        <div className="col-md-2 mt-2 mt-md-0">
                            <button className='btn btn-warning btn-sm' style={{ width: 100 }} onClick={() => { filterProduct('bed') }}>Bed</button>
                        </div>
                        <div className="col-md-2 mt-2 mt-md-0">
                            <button className='btn btn-warning btn-sm' style={{ width: 100 }} onClick={() => { setProducts(Product) }}>All</button>
                        </div>
                        <div className='col-1'></div>
                    </div>
                </div>
            </div>

            <div className="my-3">
                <div className="container">
                    <div className="row">
                        {
                            products.map((elem, i) => {
                                return (
                                    <div className="col-12 col-sm-4 col-lg-3 mt-3 d-flex justify-content-center" key={i}>
                                        <div className="card shadow-lg" style={{ width: '17rem' }}>
                                            <img className="card-img-top" style={{ height: '8rem' }} src={elem.image} alt={elem.name} />
                                            <div className="card-body">
                                                <p className="card-text">{elem.description}</p>
                                                <h5 className="card-title">{elem.price}</h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
