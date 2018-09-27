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
                return <Navbar name={data.me.name}/>
            }}
        </Query>
    );

    render() {
        return (
            <div>
                {this.getMe()}
                <h1>Este es el home</h1>
                <Movie/>
            </div>
        )
    }

}

export default Home;
