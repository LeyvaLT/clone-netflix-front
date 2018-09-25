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
        console.log("Me ejecute");
        console.log(event.target.value);
    };

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="">Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                            onChange={this.onImputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }

}

export default Signup;
