import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import roomData from './roomData';

import './Products.css';
import Product from './Product';

function Rooms() {
    return (
        <div className="products">
            <h1 className="products__banner">New fresh colours for your rooms</h1> 
            <div className="products__paraph">
                <h3 className="products__paraphTitle">Make your Living, bed or dining room complete with these popular series</h3>
                <p className="products__paraphDetail">
                    The house is the space we use to recharge after a long day, 
                    the centre of the house, the space to spend time with your friends and family, 
                    and where we lie on the couch to binge watch a series or to read a good book. 
                    Take the time to enjoy together with friends and family. Conversations and good food.
                    The bedroom is a place where you can unwind and feel relaxed. 
                    IKEA helps you to recharge and start a new day.
                     Do you need some inspiration for 
                    your rooms or do you want to change it up with some adjustments? 
                    Get inspired here and find your style.
                </p>
            </div>

          
            <div className="products__recommd">
                <h3 className="products__paraphTitle">Recommended products</h3>
                <button>See all new products</button>
            </div>
            <div className="products__row">
                <Product 
                    id="1212334"
                    title="BINGSTA"
                    price={1290}
                    rating={5}
                    image="https://www.ikea.com/nl/en/images/products/bingsta-armchair__0761760_PE751428_S5.JPG?f=xxs"
                />
                
                <Product 
                    id="2423554"
                    title="SÖDERHAMN"
                    price={4790}
                    rating={5}
                    image="https://www.ikea.com/nl/en/images/products/soederhamn-4-seat-sofa-with-chaise-longue-and-open-end-samsta-orange__0802720_PE768564_S5.JPG?f=xxs"
                 />
                <Product 
                    id="567235"
                    title="GLADOM"
                    price={170}
                    rating={5}
                    image="https://www.ikea.com/nl/en/images/products/gladom-tray-table__0794705_PE765688_S5.JPG?f=xxs"
                />
                <Product 
                    id="2578913"
                    title="BESTÅ"
                    price={50400}
                    rating={5}
                    image="https://www.ikea.com/nl/en/images/products/besta-tv-storage-combination-glass-doors__0741138_PE742206_S5.JPG?f=xs"
                />
                
            </div>
            <div className="products__row">
                <Product 
                    id="124387"
                    title="MARIEDAMM"
                    price={19900}
                    rating={4}
                    image="https://www.ikea.com/nl/en/images/products/mariedamm-table__0799242_PE767513_S5.JPG?f=xxs"
                />
                
                <Product 
                    id="124489"
                    title="LANDSKRONA"
                    price={5490}
                    rating={3}
                    image="https://www.ikea.com/nl/en/images/products/landskrona-3-seat-sofa-gunnared-dark-grey-wood__0602117_PE680186_S5.JPG?f=xxs"
                 />
                <Product 
                    id="256618"
                    title="YPPERLIG"
                    price={34000}
                    rating={5}
                    image="https://www.ikea.com/nl/en/images/products/ypperlig-children-s-bench__0579395_PE669815_S5.JPG?f=xs"
                />
                <Product 
                    id="245806"
                    title="VEBERÖD"
                    price={84000}
                    rating={5}
                    image="https://www.ikea.com/nl/en/images/products/veberoed-bench__0492544_PE625698_S5.JPG?f=xxs"
                />
                
            </div>
            <div className="products__row">
                <Product 
                    id="124569"
                    title="BRIMNES"
                    price={24900}
                    rating={5}
                    image="https://www.ikea.com/nl/en/images/products/brimnes-bed-frame-w-storage-and-headboard-white-luroey__0638600_PE699029_S5.JPG?f=xxs"
                />
                
                <Product 
                    id="123554"
                    title="PLATSA"
                    price={58200}
                    rating={5}
                    image="https://www.ikea.com/nl/en/images/products/platsa-wardrobe-with-7-doors-3-drawers-white-sannidal-ridabu__0756223_PE748833_S5.JPG?f=xxs"
                 />
                <Product 
                    id="560235"
                    title="KALLAX"
                    price={59000}
                    rating={5}
                    image="https://www.ikea.com/nl/en/images/products/kallax-shelving-unit-white-green__0807012_PE770204_S5.JPG?f=xxs"
                />
                <Product 
                    id="2578013"
                    title="TRYSIL"
                    price={15900}
                    rating={5}
                    image="https://www.ikea.com/nl/en/images/products/trysil-wardrobe-white-mirror-glass__0626571_PE692875_S5.JPG?f=xxs"
                />
                
            </div>

           

            <div className="products__nowRow">
                <div className="products__new">
                    <h3 className="products__paraphTitle">More ideas and inspiration for your rooms</h3>
                    <br></br>
                    {/* <p>Shoo away the stale with new products in fresh tones.</p> */}
                </div>
                
                <div className="products__gridRoot">
                    <GridList cellHeight={460} cols={3} >
                        {roomData.map((tile) => (
                            <GridListTile key={tile.img} cols={tile.cols || 1} className="products__gridTile">
                                <img src={tile.img} alt={tile.title} className="MuiGridListTile-root products__gridImg" />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>
        </div>
    )
}

export default Rooms;
