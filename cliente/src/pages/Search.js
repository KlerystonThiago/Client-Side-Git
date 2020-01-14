import React, { Component } from 'react'
import '../assets/css/search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon className="ico-search" icon={faSearch} />

export default class Search extends Component {
    render() {
        return (
            <div>
                <div className="myContainer d-flex align-items-center align-self-center">
                    <div className="Home d-flex align-items-center justify-content-center">
                        <div className="row justify-content-center">
                            <div className="textSearch"><h1 className="Github-Search">GitHub <span className="text-style-1">Search</span></h1></div>
                            <div className="input-group justify-content-center">
                                <input type="text" className="Search-Input" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary button" type="button" id="button-addon2">                                        
                                        {element}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
