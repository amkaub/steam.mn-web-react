import React, {Component} from 'react';
import { render } from '@testing-library/react';
import { Tournament } from './tournament';
import './style.css';
class Tournaments extends Component{
    state = {
		data:[],
		tags:['tag1','tag2','tag3','tag4']
    };
    componentDidMount() {
        fetch("http://steam.mn/data/get_tournaments")
          .then(response => response.json())
          .then(data => this.setState({ data: data }));
    }
    componentDidUpdate(){

    }
    render(){
        return(
            this.state.data.map(t => 
                <Tournament key={t.id} data={t} />
            )
        )
    }
}
export default Tournaments;