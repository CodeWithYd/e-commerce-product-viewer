import React,{ useState } from 'react';
import style from './product-viewer.module.scss';

//icons
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { ImCancelCircle } from 'react-icons/im';

const productData = { 
    id: 3, 
    title: "Mens Cotton Jacket", 
    price: 55.99, 
    description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.", 
    images: [
    "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", 
    "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    ], 
    rating: 3.5,
};

const ProductViewer = () => {
    const [data, setData] = useState({image: productData.images[0], index: 0});
    const [modal, setModal] = useState(false);
    
    const imgAction = (action)=>{
        let i = data.index;
        if(action === 'next-img'){
            setData({image: productData.images[i + 1], index: i + 1});
        }
        if(action === 'previos-img'){
            setData({image: productData.images[i - 1], index: i - 1});
        }
    }

    return (
        <>
            {modal && 
                <div className={style.modal}>
                    <ImCancelCircle size="2rem" color="white" onClick={()=> setModal(false)} className={style.closeModalBtn}/>
                    {data.index !== 0 &&
                        <IoIosArrowBack size="3rem" color="white" onClick={()=> imgAction('previos-img')} className={style.previousBtn}/>
                    }
        
                    <img src={data.image} alt=""/>
                    {data.index !== productData.images.length -1 && 
                        <IoIosArrowForward size="3rem" color="white" onClick={()=> imgAction('next-img')} className={style.nextBtn} />
                    }            
                </div>
            }
            <div className={style.productViewerSection}>
                <div className={style.row}>
                        <div className={style.columOne}>
                        {productData.images.map((image, index)=>{
                                return (index < 4) ?
                                <div key={index} onClick={()=> setData({image, index})} className={style.productRow} style={{ border: data.image === image ? '1px solid blue' : ''}}>
                                    <img src={image} alt=""/>
                                </div> : null
                        })}
                        </div>
                        <div className={style.columTwo}>
                            <div className={style.displayProduct} onClick={()=> setModal(true)}>
                                <div>
                                    <img src={data ? data.image : productData.images[0]} alt=""/>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
};

export default ProductViewer;