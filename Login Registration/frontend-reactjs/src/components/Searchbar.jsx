import React from "react";
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Searchbar() {
    return ( <> 
    <div class="wrapper">
      <header class="site-header" id="header">
        <div className="header-search-wrapper">
            <div className="container">
                <div className="header-search-outer">
                    <div className="header-search-inner">
                        <div className="text-wrapper">
                            <div className="form-group-wrapper">
                                <div className="form-group">
                                    <label style={{display: "none"}} htmlFor="search-text">Search</label>
                                    <input
                                        id="search-text"
                                        name="text"
                                        placeholder="What are you looking for..."
                                        type="text"
                                        className="form-control"
                                        value=""/>
                                </div>
                            </div>
                            <div className="product-listing">
                                <p className="no-product">No product found</p>
                                <p className="loading">Loading....</p>
                                <ul className="related-product-list">
                                <li>
                                    <div className="inner-block">
                                        <div className="left-col">
                                            <span className="title">Title 1</span>
                                            <span className="category">Category</span>
                                            <p>Description</p>
                                        </div>
                                        <div className="right-col">
                                            <span className="price">1000</span>
                                            <a href="#/">Add to cart</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                <div className="inner-block">
                                    <div className="left-col">
                                        <span className="title">Title 1</span>
                                        <span className="category">Category</span>
                                        <p>Description</p>
                                    </div>
                                    <div className="right-col">
                                        <span className="price">1000</span>
                                        <a href="#/">Add to cart</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="inner-block">
                                    <div className="left-col">
                                        <span className="title">Title 1</span>
                                        <span className="category">Category</span>
                                        <p>Description</p>
                                    </div>
                                    <div className="right-col">
                                        <span className="price">1000</span>
                                        <a href="#/">Add to cart</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="inner-block">
                                    <div className="left-col">
                                        <span className="title">Title 1</span>
                                        <span className="category">Category</span>
                                        <p>Description</p>
                                    </div>
                                    <div className="right-col">
                                        <span className="price">1000</span>
                                        <a href="#/">Add to cart</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <button className="btn green-btn" type="submit">
                    <em><img src="images/search.svg" alt="search" /></em>Search
                </button>
                <button className="btn blue-btn" type="submit">Cancel</button>
            </div>
        </div>
        </div>
        </div>
        </header>
        </div>
    </>
    )
};
export default Searchbar;
