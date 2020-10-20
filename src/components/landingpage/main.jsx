import React from 'react';
import VendorCard from './../vendorcard/vendorcard.jsx';
import styles from './main.module.css';
import {Link} from 'react-router-dom';
import Carousel from './../carosel/carousel.jsx';

export default class Main extends React.Component{
   handlerSearch(event){
      console.log(event.target.value)
    }
  render(){
    return(
         <>
         <div className={`${styles.nav}`}>
         <h6 className={`${styles.h6}`}>Jeans Market Association.com</h6>
        <Link to="/adminlogin" className={`btn btn-primary ${styles.logout}`}>Admin Login</Link>
         </div>
         <Carousel />
         <div className={`${styles.search} ${styles.searchpadding}`}> 
         <label className={` ${styles.searchbar}`}>Vendor Search:</label>
         <input className={`form-control ${styles.searchwidth}`} type="search" placeholder="Vendor Search" onChange={this.handlerSearch.bind(this)} aria-label="Search" />
         </div>
         <div className={`${styles.gridcontainer}`}>
         <VendorCard />
         <VendorCard />
         <VendorCard />
         <VendorCard />
         <VendorCard />
         </div>
         </>
    )
  }
}