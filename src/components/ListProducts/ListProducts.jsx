import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

//actions
import { getAllProduct } from '../../actions/product'
import { getCategory } from '../../actions/category'
import { getAllProductByCategory } from '../../actions/product'

//components
// import Loading from '../Loading/Loading'

//style
import './ListProducts.css'

//assets
import { FiSearch } from 'react-icons/fi'
import { FiPlus } from 'react-icons/fi'

const ListProducts = () => {
    const { getAllDataProductResult, getAllDataProductLoading, getAllDataProductError } = useSelector((state) => state.productReducer);
    const { getCategoryResult, getCategoryError } = useSelector((state) => state.categoryReducer);

    // const [produk, setProduk] = useState(getAllDataProductResult);

    const filterProduk = (id) => {
        dispatch(getAllProductByCategory(id))
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProduct());
    }, [dispatch])

    useEffect(() => {
        dispatch(getCategory());
    }, [dispatch])


    return (
        <div className='content-wrapper'>
            <section className="category-section">
                <h1 className='category-title'>Telusuri Kategori</h1>
                <div className="list-category">
                    <button onClick={() => dispatch(getAllProduct())} className="category-filter">
                        <FiSearch className='search-icon-category' />
                        <p>Semua</p>
                    </button>
                    {getCategoryResult ? (
                        getCategoryResult.map((category) => {
                            return (
                                <button key={category.categoryId} onClick={() => filterProduk(category.categoryId)} className="category-filter">
                                    <FiSearch className='search-icon-category' />
                                    <p>{category.categoryName}</p>
                                </button>
                            )
                        })
                    ) : (
                        <p>{getCategoryError}</p>
                    )}
                </div>
            </section>

            <section className="list-product">
                <div className="grid">
                    {getAllDataProductResult ? (
                        getAllDataProductResult.map((product) => {
                            return (
                                <div key={product.produkId} className="card">
                                    <Link to={`/detail-produk/${product.produkId}`} className="img-product">
                                        <img src={product.image?.[0]?.imagelink} alt="product" />
                                    </Link>
                                    <div className="nproduct">
                                        <h1 className='product-name'>{product.produkname}</h1>
                                    </div>
                                    <p className='category-name'>{product.categoryName}</p>
                                    <p className='product-price'>{product.hargaProduk}</p>
                                </div>
                            )
                        })
                    ) : getAllDataProductLoading ? (
                        <p> Loading. . .</p>
                    ) : (
                        <p>{getAllDataProductError ? getAllDataProductError : "Data Kosong"}</p>
                    )}
                </div>
            </section>

            <div className="jual">
                <Link className='btn-jual' to="/seller/form-info-produk">
                    <FiPlus className='plus-icon' />Jual
                </Link>
            </div>
        </div>
    )
}

export default ListProducts