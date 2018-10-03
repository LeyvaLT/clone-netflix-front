import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Movie.css';


class Movie extends Component{

    render(){
        return(
            <div className="col-md d-flex align-items-stretch">
            <div className="card">
                <img className="card-img-top img_movie" src={this.props.poster} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title"><strong>{this.props.title}</strong></h5>
                        <Link className="btn btn-primary" to={`/movie/${this.props.id}`}>Ver</Link>
                    </div>
            </div>
            </div>
                )
    }

}

export default Movie;