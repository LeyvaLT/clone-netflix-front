import React, {Component} from 'react';
import FileUploader from 'react-firebase-file-uploader';
import Firebase from '../../Firebase/Firebase';
import {Mutation} from 'react-apollo';
import gql from "graphql-tag";


const UPDATE_ME = gql`

    mutation UpdateUser(
    $name: String!,
    $lastname: String!,
    $password: String!,
    $birth_date: String!,
    $gender: Genders,
    $avatar: String!
    ){
        updateUser(
            name: $name,
            lastname: $lastname,
            password: $password,
            birth_date: $birth_date,
            gender: $gender,
            avatar: $avatar
        ){
            id,
            name,
            avatar,
            gender
        }
    }
`;


class FormMe extends Component {

    constructor(props) {
        super(props);
        this.state = {...props.data};
    }

    handleImput = (event) => {
        //event.preventDefault();
        let {name, value} = event.target;
        this.setState({[name]: value})
    };

    formSubmit = (e, updateUser) => {
        e.preventDefault();
        console.log(this.state);
        updateUser(
            {variables: {...this.state}}
        );
    };

    uploadFile = async (filename) => {
        let url = await Firebase.storage().ref('avatars').child(filename).getDownloadURL();
        this.setState({avatar:url});
    };

    render() {

        return (

            <Mutation mutation={UPDATE_ME}>
                {
                    (updateUser, {data}) => (
                        <div className="row justify-content-center">
                            <div className="col-md-9">
                                <img src={this.state.avatar} className="img-fluid img-rounded" width="150" height="150"/>
                                <form onSubmit={(e) => this.formSubmit(e, updateUser)}>
                                    <div className="form-group">
                                        <label htmlFor="">Nombre:</label>
                                        <input type="text" className="form-control" name="name" value={this.state.name}
                                               onChange={this.handleImput}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Apellidos:</label>
                                        <input type="text" className="form-control" name="lastname"
                                               value={this.state.lastname} onChange={this.handleImput}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Fecha de Nacimiento:</label>
                                        <input type="text" className="form-control" name="birth_date"
                                               value={this.state.birth_date} onChange={this.handleImput}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Genero:</label>
                                        <select name="gender" className="form-control" id="gender"
                                                value={this.state.gender} onChange={this.handleImput}>
                                            <option value="H">Hombre</option>
                                            <option value="M">Mujer</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Email:</label>
                                        <input type="email" className="form-control" name="email"
                                               value={this.state.email} disabled/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Avatar: </label>
                                            <FileUploader
                                                className="btn btn-danger"
                                                name="avatar"
                                                accept="image/*"
                                                randomizeFilename
                                                storageRef={
                                                    Firebase.storage().ref('avatars')
                                                }
                                                onUploadError={(err) => console.log(err)}
                                                onUploadSuccess={this.uploadFile}

                                            />
                                    </div>
                                    <button type="submit" className="btn btn-info">Guardar</button>
                                </form>
                            </div>
                        </div>
                    )

                }

            </Mutation>
        )
    }

}

export default FormMe;
