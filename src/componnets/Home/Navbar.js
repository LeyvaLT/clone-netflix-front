import  React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component{

    constructor(props){
        super(props);
        this.state = {
            nombre : "Edgar Leyva"
        }
    }

    render() {
        return(
            <div><h4 className="Navbar_name navbar navbar-expand-lg navbar-light bg-dark">Hola {this.state.nombre}</h4></div>
        )
    }

}

export default Navbar;