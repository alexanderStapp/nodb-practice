import e from "express";
import { Component } from "react";


class AddMovie extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            director: '',
            img: ''
        }
    }

    handleTitle = (value) => {
        this.setState({title: value})
    }

    handleDirector = (value) => {
        this.setState({title: value})
    }

    handleImg = (value) => {
        this.setState({title: value})
    }

    render() {
        return (
            <div>
                <h2>Add Movie</h2>
                <input value={this.state.title}
                onChange={e => this.handleTitle(e.target.value)}/>
                <input value={this.state.director}
                onChange={e => this.handleDirector(e.target.value)}/>
                <input value={this.state.img}
                onChange={e => this.handleImg(e.target.value)}/>
                <button onClick={() => {
                    this.props.AddMovieFn(
                        this.state.title,
                        this.state.director,
                        this.state.img
                    )}
                    this.setState({
                        title: '',
                        director: '',
                        img: ''
                    })
                }>submit</button>
            </div>
        )
    }
}

export default AddMovie;