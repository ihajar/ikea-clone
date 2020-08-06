import React from 'react';
import './Products.css';
import Product from './Product';

function Products() {
    return (
        <div className="products">
            <h1 className="products__banner">Whta's new in the IKEA range?</h1> 
            <div className="products__paraph">
                <h3 className="products__paraphTitle">See the new products per category</h3>
                <p className="products__paraphDetail">
                    At IKEA, we're always innovating. That's why we're proud to 
                    present our new furniture, home accessories and more. The new products 
                    are convenient and give your interior a fresh new look. Get 
                    inspired by this season's ideas and looks.</p>
            </div>

            {/* Product id, title, price, rating, image */}
            <div className="products__row">
                <Product 
                    id="1212354"
                    title="SUNNEBY"
                    price={60}
                    rating={5}
                    image="https://www.ikea.com/nl/en/images/products/sunneby-cord-set__0626518_PE692832_S5.JPG?f=xs"
                />
                
                <Product 
                    id="2453554"
                    title="VINDKAST"
                    price={200}
                    rating={5}
                    image="https://www.ikea.com/nl/en/images/products/vindkast-pendant-lamp-white__0805857_PE769703_S5.JPG?f=xs"
                 />
                <Product 
                    id="568235"
                    title="KARLJAN"
                    price={200}
                    rating={3}
                    image="https://www.ikea.com/nl/en/images/products/karljan-chair__0714675_PE730182_S5.JPG?f=xs"
                />
                <Product 
                    id="2578963"
                    title="OMFÅNG"
                    price={70}
                    rating={5}
                    image="https://www.ikea.com/nl/en/images/products/omfang-vase-blue__0891443_PE782283_S5.JPG?f=xs"
                />
                
            </div>
            <div className="products__row">
                <Product 
                    id="124587"
                    title="MISSVEDEN"
                    price={190}
                    rating={3}
                    image="https://www.ikea.com/nl/en/images/products/missveden-mirror__0808671_PE770808_S5.JPG?f=xs"
                />
                
                <Product 
                    id="124589"
                    title="KVISTBRO"
                    price={295}
                    rating={4}
                    image="https://www.ikea.com/nl/en/images/products/kvistbro-storage-table-light-grey-green__0816804_PE773686_S5.JPG?f=xxs"
                 />
                <Product 
                    id="256698"
                    title="BULLIG"
                    price={140}
                    rating={5}
                    image="https://www.ikea.com/nl/en/images/products/bullig-box__0913363_PE783469_S5.JPG?f=xxs"
                />
                <Product 
                    id="245896"
                    title="LÄTTSÅLD"
                    price={90}
                    rating={2}
                    image="https://www.ikea.com/nl/en/images/products/laettsald-vase-carafe-set-of-2-penguin-black-grey__0891429_PE782282_S5.JPG?f=xxs"
                />
                
            </div>
        </div>
    )
}

export default Products;
