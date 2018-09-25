import React, {Component} from 'react';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';

const CREATE_USER = gql`
    mutation signup ($name:Strign!, $email:String!, $lastname:String!, $password:String!, $birth_date:Strign!){
        signup(
        name: $name
        email: $email
        lastname: $lastname
        password: $password
        birth_date: $birth_date
        )
    {
    user{
        id
        email
    }
    token
    }
    }
`;

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            lastname: '',
            password: '',
            birth_date: ''
        }
    }

    onImputChange = (event) => {

        //Destructuracion
        let {id, value} = event.target;
        this.setState({
            [id]: value
        });


    };

    onFormSubmit = (event, signup) => {
        event.preventDefault();
        console.log('Ya le puche al boton');
        console.log(this.state);
        signup({
            variables: {
                name: this.state.name,
                email: this.state.email,
                lastname: this.state.lastname,
                password: this.state.password,
                birth_date: this.state.birth_date
            }
        });
        alert("Todo chido carnal");
    };

    render() {
        //console.log("------>", this.state);
        return (

            <Mutation mutation={CREATE_USER}>
                {(signup, {data}) => (

                    <div>
                        <form onSubmit={(e) => this.onFormSubmit(e, signup)}>
                            <div className="form-group">
                                <label htmlFor="">Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email"
                                       id="email"
                                       onChange={this.onImputChange}
                                       value={this.state.email}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Name</label>
                                <input type="text" className="form-control" placeholder="Enter name"
                                       id="name"
                                       onChange={this.onImputChange}
                                       value={this.state.name}
                                />
                            </div>
                            <div className="form-group">
                            <label htmlFor="">Lastname</label>
                                <input type="text" className="form-control" placeholder="Enter lastname"
                                       id="lastname"
                                       onChange={this.onImputChange}
                                       value={this.state.lastname}
                                />
                            </div>
                            <div className="form-group">
                            <label htmlFor="">Password</label>
                                <input type="password" className="form-control" placeholder="Enter Password"
                                       id="password"
                                       onChange={this.onImputChange}
                                       value={this.state.password}
                                />
                            </div>
                            <div className="form-group">
                            <label htmlFor="">birth date</label>
                                <input type="date" className="form-control" placeholder="Enter birth date"
                                       id="birth_date"
                                       onChange={this.onImputChange}
                                       value={this.state.birth_date}
                                />
                            </div>
                            <button type="submit" className="btn btn-success">Registrarme</button>
                        </form>
                    </div>
                )}
            </Mutation>

        )
    }

}

export default Signup;
