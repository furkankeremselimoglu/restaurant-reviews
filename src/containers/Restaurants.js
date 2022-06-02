import React, { Component } from 'react';
import axios from 'axios';
import '../containers/css/style.css'
import {Card, CardBody, CardSubtitle, CardText, CardTitle, Input} from "reactstrap";
import {Button} from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const api = 'http://localhost:3001';
class Restaurants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: [],
            reviews: [],
            commentSection: [],
            commentCount : 0
        }
    }

    getRestaurants = () => {
        axios.get(`${api}/restaurants`).then(res => {
            const list = res.data;
            this.setState({ restaurants: list, commentSection: Array(list.length).fill('') });
            console.log(list);
        })

        axios.get(`${api}/reviews`).then(res => {
            const list = res.data;
            this.setState({ commentCount:list.length });

        })
    }

    getReviews = () => {
        axios.get(`${api}/reviews`).then(res => {
            const list = res.data;
            this.setState({ reviews: list });
            console.log(list);
        })
    }
    componentDidMount() {
        this.getRestaurants();
    }

    tryAddComment(param) {
        axios.post(`${api}/reviews`, param)
            .then((response) => {
                this.setState({ commentCount: this.state.commentCount + 1});
            });
    }

    addComment( restaurant_id , index  ) {
        let requestObj = {
            id: this.state.commentCount + 1,
            restaurant_id: restaurant_id,
            content: this.state.commentSection[index]
        }
        this.tryAddComment(requestObj);
    }

    setCommentValue (text, index) {
        let tempArr = this.state.commentSection;
        tempArr[index] = text;
        this.setState({commentSection: tempArr});
        console.log(this.state.commentSection);
    }

    render() {
        return (
            <div style={{ padding: "1rem 0" }} className={'restaurantList'}>
                {
                    this.state.restaurants.map((item, i) => (
                        <div key={i}>
                            <div className="card" style={{width: '18rem'}}>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{item.location}</h6>
                                    <p className="card-text">{item.slogan}</p>
                                    <p className="card-text">{item.openTime} - {item.closeTime}</p>
                                    <div>
                                        <input onChange={(e) => this.setCommentValue(e.target.value, i)}/>
                                        <button className={'btn btn-primary'} onClick={() => this.addComment(item.id, i)}>Add Comment</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ) )
                }
            </div>
        );
    }
}

export default Restaurants;
