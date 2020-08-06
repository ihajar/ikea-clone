import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './titleData';



function Home() {
   
    return (
        <div className="home">
            <h1 className="home__banner">Hi! Welcome to IKEA</h1>
            <Link to="/products">
                <img
                    className="home__image"
                    src="https://www.ikea.com/images/f6/0f/f60fb5fbe2d62e180b27b5133058472d.png?f=xxxl"
                    alt=""
                />
            </Link>


            <div className="home__row">
                <h3 className="home__titleOne">More ideas and inspiration</h3>
                <div className="home__gridRoot">
                    <GridList cellHeight={360} cols={3} >
                        {tileData.map((tile) => (
                            <GridListTile key={tile.img} cols={tile.cols || 1} className="home__gridTile">
                                <img src={tile.img} alt={tile.title} className="MuiGridListTile-root home__gridImg" />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>
        </div>
    )
}

export default Home
