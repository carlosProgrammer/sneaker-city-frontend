import React, { useEffect, useState } from "react";
import { Badge, Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import { useParams } from "react-router-dom";
/**
 * TODO
 * Show available sizes
 * 
 */
function SneakerDetail():JSX.Element{
    
    let {_id} = useParams<{ _id: string }>();
    const [sneaker, setSneaker,] = useState<any>({});

    useEffect(() => {
        const fetchSneakers = async (): Promise<void> => {
            const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/sneakers/${_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            setSneaker(json)
          }
          fetchSneakers(); 
      }, [_id]);
    return (
      <section className="sneaker-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-1 col-md-0" />
            <div className="col-lg-10 col-md-12">
              {sneaker && (
                <div className="main-sneaker">
                  <div className="sneaker-top-area">
                    <h5 className="pre-title">{sneaker.model}</h5>
                    <h3 className="title">
                      <span>
                        <b>{sneaker.brand}</b>
                      </span>
                    </h3>
                    <div className="grid-container">
                      <div className="grid-child purple">
                        <img className="sneaker-image" src={sneaker.image} />
                      </div>

                      <div className="grid-child green">
                        <div className="col-lg-10 col-md-6" key={sneaker._id}>
                          <div className="card h-100">
                            <div className="single-item item-style-1">
                              <div className="sneaker-info">
                                <h4 className="title">
                                  <span>
                                    <b>
                                      {sneaker.brand} {sneaker.model}
                                      &nbsp;&nbsp;
                                    </b>
                                  </span>
                                  <Badge pill bg="info">
                                    {sneaker.gender_category}
                                  </Badge>
                                </h4>
                              </div>
                              <div className="price">
                                <a>Price: ${sneaker.price}</a>
                              </div>
                              <div className="sneaker-date">
                                <a>Release Date: {sneaker.release_date}</a>
                              </div>
                            </div>
                            <ul className="item-footer">
                              <li>
                                <h6>Sizes available:</h6>
                              </li><br />
                              <li>
                                <ButtonToolbar aria-label="Toolbar with button groups">
                                  <ButtonGroup
                                    className="me-2"
                                    aria-label="First group">
                                    <Button>7.5</Button>&nbsp;<Button>8</Button>&nbsp;
                                    <Button>9.5</Button>&nbsp;<Button variant="secondary" disabled>11</Button>
                                  </ButtonGroup>
                                </ButtonToolbar>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
}
export default SneakerDetail