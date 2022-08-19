import axios from 'axios';
import React, { useCallback, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import BackButton from '../../../components/BackButton/BackButton';
import { createProduct } from '../../../actions/product';

//components
import NavbarKosong from '../../../components/Navbar/NavbarKosong';

//style
import './FormInfoProduk.css'

const FormInfoProduk = () => {
    // const inputRef = useRef(null)

    const dispatch = useDispatch()

    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState()
    const [category, setCategory] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState("")
    const [selectedImage, setSelectedImage] = useState('')

    const fetchDataCall = async () => {
        const res = await axios.get('https://secondhand-bej3.herokuapp.com/category')
        const data = res.data
        // console.log(data);
        setCategory(data)
    }
    useEffect(() => {
        fetchDataCall()
    }, [])

    const handleProductName = (e) => {
        const resName = e.currentTarget.value
        setProductName(resName)
    }

    const handlePrice = (e) => {
        const resPrice = e.currentTarget.value
        setPrice(resPrice)
    }

    const handleCategory = (e) => {
        const resCat = e.currentTarget.value
        setSelectedCategory(resCat)
    }

    const handleDescription = (e) => {
        const resDesc = e.currentTarget.value
        setDescription(resDesc)
    }


    const handleCreateBase64 = useCallback(async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        // console.log(base64);
        setImage(base64);
        setSelectedImage(file)
        e.target.value = "";
    }, []);

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            if (!file) {
                alert("Please select an image!");
            } else {
                fileReader.readAsDataURL(file);
                fileReader.onload = () => {
                    resolve(fileReader.result);
                }
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }

    const deleteImage = (e) => {
        e.preventDefault();
        setImage(null);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = JSON.parse(localStorage.getItem('userid'))
        console.log("1. Masuk handle submit");
        let formData = new FormData()
        formData.append('produkName', productName)
        formData.append('hargaProduk', price)
        formData.append('categoryId', selectedCategory)
        formData.append('deskripsi', description)
        formData.append('image', selectedImage)
        formData.append('historyId', id)
        formData.append('userId', id)
        for (const value of formData.values()) {
            console.log({ value });
        }
        dispatch(createProduct(formData))
    }

    return (
        <>
            <NavbarKosong />
            <BackButton />
            <div className="title-navbar-produk">
                <p>Lengkapi Info Produk</p>
            </div>
            <div className="info-produk">
                <form className="form" encType='multipart/form' onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label name">Nama Produk</label>
                        <input className="input name" name='produkname' type="text" placeholder="Nama Produk" onChange={handleProductName} />
                    </div>
                    <div className="field">
                        <label className="label price">Harga Produk</label>
                        <input className="input price" name='hargaProduk' type="text" placeholder="Rp 0,00" onChange={handlePrice} />
                    </div>
                    <div className="field">
                        <label className="label category">Kategori</label>
                        <select className="input category" id="category" name='categoryName' value={selectedCategory} onChange={handleCategory}>
                            <option className='option'>Pilih Kategori</option>
                            {category.map((kategori, idx) => (
                                // console.log(kategori);
                                <option
                                    className='option'
                                    key={idx}
                                    value={kategori.categoryId}>
                                    {kategori.categoryName}
                                </option>
                            ))}

                        </select>
                    </div>
                    <div className="field">
                        <label className="label description">Deskripsi</label>
                        <textarea className="input description" name="description" id="deskripsi" cols="30" rows="3" placeholder="Contoh: Jalan Ikan Hiu 33" onChange={handleDescription}></textarea>
                    </div>
                    <div className="field">
                        <label className="label image">Foto Produk</label>
                        <div className='image-picker'>
                            <label className="input-image" htmlFor="contained-button-file">
                                <div className="button upload">
                                    <p className="btn-text">+</p>
                                </div>
                                {image ? (
                                    <span>
                                        <div className="picture-container">
                                            <img className="picture" src={image} alt="img-produk" />
                                        </div>
                                    </span>
                                ) : null}
                                {image ? (
                                    <button className="button delete">
                                        <p onClick={deleteImage} className="btn-text">Hapus</p>
                                    </button>
                                ) : null}
                            </label>
                        </div>
                        <input type="file" accept="image/*" id="contained-button-file" style={{ display: "none" }} name="image" onChange={handleCreateBase64} />
                    </div>
                    <div className="button">
                        <button className="btn preview">Preview</button>
                        <button className="btn terbit" type='submit'>Terbitkan</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FormInfoProduk