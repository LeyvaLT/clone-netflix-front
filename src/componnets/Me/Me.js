import React, {Component} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import FormME from './FormMe';

const GET_ME = gql`
    query{
        me{
            name,
            lastname,
            email,
            birth_date,
            password,
            gender,
            avatar,
            suscription{
                suscription_type
            }
        }

    }
`;


class Me extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            lastname: "",
            email: "",
            password: "",
            gender: "",
            birth_date: "",
            avatar: ""
        }
    }



    render() {
        return (
            <Query query={GET_ME}>
                {
                    ({loading, error, data}) => {
                        if (loading) return ("Loading...");
                        if (error) return ({error});
                        return (
                            <FormME data={data.me}/>
                        )
                    }
                }
            </Query>
        )

    }
}

export default Me;
