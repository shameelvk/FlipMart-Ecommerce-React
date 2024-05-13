import React, { useContext} from 'react'
import Card from '../../Components/Card/Card'
import { useSearchParams } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


const Products = () => {
    const {productData} = useContext(ShopContext)
    const [searchParams]=useSearchParams();
    var searchValue=searchParams.get("search");
    
    const filteredProducts = productData.filter((p) => p.title.toLowerCase().includes(searchValue?searchValue.toLowerCase():""));

  return (
    <div>
        <div className="container-fluid  " >
            <div className="row my-3">
                <div className="col">
                <img src="https://static.vecteezy.com/system/resources/previews/012/002/507/non_2x/halloween-sale-promotion-poster-or-banner-with-halloween-pumpkin-and-ghost-balloons-scary-air-balloons-with-product-podium-scene-website-spooky-background-or-banner-halloween-template-vector.jpg" alt="Contact" className="contact-image" />
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-3 align-items-center justify-content-center">

            {filteredProducts.length === 0 ? (
                        <div className="col-12 text-center">
                            <div className="row"> <img src="https://static.vecteezy.com/system/resources/previews/009/674/012/non_2x/no-data-found-concept-illustration-for-websites-landing-pages-mobile-application-banner-and-posters-vector.jpg" alt=""  className='image-fluid'/>
                       </div>
                            </div>
                    ) : (
                        filteredProducts.map((pd) => {
                            return <div className="col-12 col-md-3"><Card pdData={pd} key={pd.id} /></div>
                        })
                    )}
            </div>
        </div>
    </div>
  )
}

export default Products