let movies = [
    {
        id: 0,
        title: 'real movie',
        director: 'real guy',
        image: 'moving picture'
    }
]
let id = 1

module.exports = {
    getMovies: (_req, res) => {
        res.status(200).send(movies)
    },
    addMovie: (req, res) => {
        const {title, director, img} = req.body
        const movie = {
            id: id++,
            title,
            director,
            img,
        }
        // id++
        movies.push(movie)
        res.status(200).send(movies)
    },
    deleteMovie: (req, res) => {
        const {id} = req.params
        const index = movies.findIndex(e => e.id === +id)
        movies.splice(index, 1)
        res.status(200).send(movies)
    },
    editMovie: (req, res) => {
        const {id} = req.params
        const {title} = req.body
        const index = movies.findIndex(e => e.id === +id)
        movies[index] = {
            ...movies[index],
            title: title
        }
        // movies[index].title = title
        res.status(200).send(movies)
    },
}