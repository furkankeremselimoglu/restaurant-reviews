import React from 'react';
import axios from "axios";

const api = 'http://localhost:3001';

export default class RestaurantForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: [],
            name: '',
            slogan: '',
            location: '',
            openTime: '',
            closeTime: ''
        };
        this.handleAdd = this.handleAdd.bind(this);
    }

    componentDidMount() {
        this.getRestaurants();
    }

    getRestaurants = () => {
        axios.get(`${api}/restaurants`).then(res => {
            const list = res.data;
            this.setState({ restaurants: list });
        })
    }
    handleAdd() {
        const { restaurants, name, slogan, location, openTime, closeTime } = this.state;
        const newProduct = { id:restaurants[restaurants.length - 1].id + 1, name, slogan, location, openTime, closeTime }

        axios.post(`${api}/restaurants`, newProduct)
            .then(res => {
                let { restaurants } = this.state;
                restaurants.push(res.data);
                this.setState({ restaurants });
            })

        this.setState({
            formOpen: false,
            name: '',
            slogan: '',
            location: '',
            openTime: '',
            closeTime: ''
        });


    }

    render() {

        const button = <button onClick={() => { this.setState({ formOpen: !this.state.formOpen }) }}>
            <i>Add</i>
        </button>;
        const form = (
            <div>
                <table>
                    <tr><td><label>Name</label></td>
                        <td><input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} /></td>
                    </tr>
                    <tr><td><label>Slogan</label></td>
                        <td><input type="text" value={this.state.slogan} onChange={e => this.setState({ slogan: e.target.value })} /></td>
                    </tr>
                    <tr><td><label>Location</label></td>
                        <td><textarea width="100" height="300" value={this.state.location} onChange={e => this.setState({ location: e.target.value })} /></td>
                    </tr>
                    <tr><td><label>Open Time</label></td>
                        <td><input type="text" value={this.state.openTime} onChange={e => this.setState({ openTime: e.target.value })} /></td>
                    </tr>
                    <tr><td><label>Close Time</label></td>
                        <td><input type="text" value={this.state.closeTime} onChange={e => this.setState({ closeTime: e.target.value })} /></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><button onClick={this.handleAdd}>Add</button></td>
                    </tr>
                </table>

            </div>
        );
        return this.state.formOpen ? form : button;
    }
}