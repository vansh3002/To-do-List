import React from 'react';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    {/* used to add condition in syntax */}
                    {props.SearchBar? < form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> : "no search page"}
            </div>
        </div>
        </nav >
    );
}

//Default Props
Header.defaultProps={
    //If you give any title in input than this defalut title take it's place
    title:"Vansh Singh",
    SearchBar: true
}
Header.propTypes={
    title:PropTypes.string,
    // assign boolean data type to search bar
    // SearchBar:PropTypes.bool

    // now to make searchbar required in input if default value not given it will throw an error in console
    SearchBar:PropTypes.bool.isRequired

    // make the title datatype to string so if we put any numerical value in place of title in console it will through an error

}
