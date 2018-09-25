import React, {Component} from 'react';

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
            [id]:value
        });


    };

    render() {
        console.log("------>", this.state);
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="">Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                                id="email"
                               onChange={this.onImputChange}
                               value={this.state.email}
                        />
                    </div>
                </form>
            </div>
        )
    }

}

export default Signup;
