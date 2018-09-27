import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component{

    render(){
        return(
            <div className="col-md">
            <div className="card card_movie">
                <img className="card-img-top img_movie" src="https://vignette.wikia.nocookie.net/doblaje/images/d/df/Suits-USA-season-2-2012-poster.jpg/revision/latest?cb=20120703033409&path-prefix=es" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title"><strong>SUITS</strong></h5>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-primary">Ver</a>
                    </div>
            </div>
            </div>
                )
    }

}

export default Movie;