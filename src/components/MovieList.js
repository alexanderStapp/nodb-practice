import { Component } from "react";
import axios from 'axios';
import AddMovie from './AddMovie'
import Movie from './Movie';


class MovieList extends Component {
    constructor() {
        super()
        this.state = {
            movieArr: []
        }
    }

    componentDidMount() {
        axios.get('/api/movies')
        .then(res => this.setState({movieArr: res.data}))
        .catch(err => console.log(err))
    }
    
    deleteMovie = (id) => {
        axios.delete(`/api/movies/${id}`)
        .then(res => this.setState({movieArr: res.data}))
        .catch(err => console.log(err))
    }
    
    addMovie = (title, director, img) => {
        axios.post('/api/movies', {title, director, img})
        .then(res => this.setState({movieArr: res.data}))
        .catch(err => console.log(err))
    }

    editMovie = (id, title) => {
        axios.put(`/api/movies/${id}`, {title})
        .then(res => this.setState({movieArr: res.data}))
        .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.movieArr)
        return (
            <div>
                <AddMovie addMovieFn={this.addMovie}/>
                {this.state.movieArr.map(e => {
                    return (
                        <Movie
                            movie={e}
                            deleteMovieFn={this.deleteMovie}
                            editMovieFn={this.editMovie}
                        />
                        // <div>
                        //     {e.title}
                        //     <button onclick={() => this.deleteMovie(e.id)}></button>
                        // </div>
                    )
                })}
            </div>
        )
    }
}

export default MovieList;