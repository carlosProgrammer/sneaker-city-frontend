import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from 'react-bootstrap';

function Home():JSX.Element {
    const [sneaker, setSneaker] = useState<any[]>([]) ;

    useEffect(() => {
        const fetchSneakers = async (): Promise<any> => {
          const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/sneakers`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json'
              }
          });
          const json = await response.json();
          setSneaker(json)
          console.log(json)
        }
        fetchSneakers();
      }, [])
    return (
        <section className="sneaker-area section">
        <div className="container">
          <div className="row">
          {sneaker && sneaker.map((
              sneaker: { 
                  _id: any
                   model: any; 
                   brand: any; 
                   image: any;
                   brandLogo: any;
                   price: any;
                   gender_category: any;
                   release_date: any;
                   size: any;
                 }) => (
              <div className="col-lg-4 col-md-6" key={sneaker.release_date}>
              <div className="card h-100">
                <div className="single-item item-style-1">
                  <div className="sneaker-image">
                    <img src={sneaker.image} alt="sneaker" />
                  </div>
                  <span className="avatar">
                    <img src={sneaker.brandLogo} alt="brandLogo" />
                  </span>
                  <div className="sneaker-info">
                    <h4 className="title">
                      <span>
                        <b>{sneaker.brand} {sneaker.model}&nbsp;&nbsp;</b>
                      </span>
                      <Badge pill bg="info">{sneaker.gender_category}</Badge>
                    </h4>
                  </div>
                  <div className="price">
                      <a>Price: ${sneaker.price}</a>
                  </div>
                  
                   <div className="sneaker-date" >
                      <a>Release Date: {sneaker.release_date}</a>
                    </div>
                </div>
                <ul className="item-footer">
                    
                  <li>
                    <Link to={`#`} className="btn btn-sm btn-outline-secondary">Details </Link>
                  </li>
                </ul>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
    );
}
export default Home;