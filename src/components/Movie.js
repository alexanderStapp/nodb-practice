import { Component } from "react";


class Movie extends Component {
    constructor() {
        super()
        this.state = {
            editMode: false,
            title: ''
        }
    }

    handleTitle = (value) => {
        this.setState({title: value})
    }

    toggleEdit = () => {
        this.setState({editMode: !this.state.editMode})
    }

    handleSave = () => {
        this.props.editMovieFn(this.props.movie.id, this.state.title)
        this.toggleEdit()
    }

    render() {
        return this.state.editMode ? (
            <div>
                <input value={this.state.title} onChange={e => this.handleTitle(e.target.value)}></input>
                <button onClick={this.handleSave}>save</button>
            </div>
        ) : (
            <div>
                <p>{this.props.movie.title}</p>
                <button onClick={() => this.props.deleteMovieFn(this.props.movie.id)}>delete</button>
                <button onClick={this.toggleEdit}>edit</button>
            </div>
        )
    }
}

export default Movie