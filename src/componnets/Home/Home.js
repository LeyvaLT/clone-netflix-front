import React, {Component} from 'react';
import Navbar from './Navbar';
import Movie from './Movie/Movie';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import './Home.css';


const QUERY_ME = gql`
    query me {
        me{
            name
        }
    }
`;
const QUERY_MOVIES = gql`
    query movies {
        movies{
            id
            title
            poster
        }
    }
`;


class Home extends Component {


    constructor(props) {
        super(props);

        this.state = {
            nombre: "Edgar Leyva"
        }

    }

    getMe = () => (
        <Query query={QUERY_ME}>
            {({loading, err, data}) => {
                if (loading) return 'Loading...';
                if (err) return 'Error del Servicio';
                console.log(data);
                return <Navbar name= {data.me.name} />
            }}
        </Query>
    );

    renderMovies = () => (
      <Query query={QUERY_MOVIES}>
          {
              ({loading, err, data}) => {
                  if (loading) return 'Cargando tus peliculas...';
                  if (err) return 'Error del Servicio';
                  return data.movies.map(movie => <Movie
                      title={movie.title}
                      poster={movie.poster}
                      id={movie.id}/>);
              }
          }
      </Query>
    );


    render() {
        return (
            <div className="cover">
                {this.getMe()}
                <div className="row container-fluid">
                    {this.renderMovies()}
                </div>

            </div>
        )
    }

}

export default Home;
