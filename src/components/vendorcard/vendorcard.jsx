import React from 'react';
import styles from './card.module.css';
import {Link} from 'react-router-dom';

export default class VendorCard extends React.Component{
  render(){
    return(
  <div className={`card ${styles.cardswidth}`} style={{marginTop:'15px'}}>
  <img className={`card-img-top ${styles.imgheight}`} src="https://picsum.photos/200/100" alt="Card image cap" />
  <div class="card-body">
    <h6>ELU Jeans&Co</h6>
    <hr/>
    <h6 className={`${styles.mobileh6}`}>Mobile/WhatsApp No:</h6><a className={`${styles.spantext}`} target="_blank" href="https://api.whatsapp.com/send?phone=+91 9910299769&text=Hello,Sir I want to buy this https://picsum.photos/id/237/200/300">9910299769
    </a><br/>
    <h6 className={`${styles.mobileh6}`}>Address:</h6><span className={`${styles.spantext}`}>S-221/282 Vishnu Garden,New Delhi-110028</span>
    <hr/>
    
  <Link to="/products" className={`btn btn-primary ${styles.link}`}>Products</Link>  
  </div>
</div>
    )
  }
}