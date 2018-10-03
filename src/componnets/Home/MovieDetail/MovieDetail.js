import React, {Component} from 'react';
import gql from 'graphql-tag';
import {Query} from "react-apollo";
import YouTube from 'react-youtube';




const QUERY_MOVIE = gql`
    query movie($id:ID!){
        movie(id:$id){
            id
            poster
            title
            sinopsis
            length
            video_url
            suscription_type
        }
    }
`;


const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
    }
};

class MovieDetail extends Component {



    constructor(props) {
        super(props);
    }

    getVideoId = (url) => ( url.split("=")[1] );


        renderMovie = () => (
            <Query query={QUERY_MOVIE}  variables={{id:this.props.match.params.id}}>
                {



                    ({loading, err, data}) => {
                        if (loading) return 'Cargando tu pelicula...';
                        if (err) return 'Error del Servicio';
                        return (
                            <div>
                                <h4>{data.movie.title}</h4>
                                <YouTube
                                    videoId= {this.getVideoId(data.movie.video_url)}
                                    opts={opts}
                                    onReady={this._onReady}
                                />
                                <p>{data.movie.sinopsis}</p>
                            </div>
                        )

                    }
                }
            </Query>
        );

        render(){
            return (
                <div>
                    {this.renderMovie()}
                </div>
            )
        };

    }


export default MovieDetail;
