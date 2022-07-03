import ProductSeries from "./Product/ProductSeries";
import './css/home.css';
import { useEffect, useState } from "react";
import axios from "axios"

const Homepage = ({data, setData}) => {
    return ( 
        <div className="home-container">
            <ProductSeries title="Populares" series="pop" data={data} setData={setData} />
            <ProductSeries title="Gear Second" series="g2" data={data} setData={setData} />
            <ProductSeries title="Gear Third" series="g3" data={data} setData={setData} />
            <ProductSeries title="Gear Fourth" series="g4" data={data} setData={setData} />
        </div>
    );
}
 
export default Homepage;