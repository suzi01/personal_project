const mongoose = require("mongoose");
const User = mongoose.model('users')
var bodyParser = require('body-parser');

const UsersRoutes = (app) => {

  app.post(`/api/login`, async (req, res) => {
    const { email, password } = req.body
    try {
      const user = await User.findOne({ "email": email })
      console.log(user.password)
      if (password === user.password) {
        return res.status(200).send(user);
      } else {
        return res.status(404).send("password does not match")
      }
    } catch(err) {
      return res.status(404).send('Details not found, please try again');
    }
  })

  app.post(`/api/register`, async (req, res) => {
    console.log(req.body)

    const user = await User.create(req.body);
    return res.status(201).send({
      error: false,
      user,
    });
  })

  app.get(`/api/logout`, async (req, res) => {
      return res.status(200).send(false);
    }
  )

  app.get(`/api/users`, async (req, res) => {
    const users = await User.find();
    return res.status(200).send(users);
  });

  app.get(`/api/:id`, async (req, res) => {
    const user_id = req.params.id
    const user = await User.findById(user_id)
    return res.status(200).send(user);
  });

  app.post(`/api/users`, (req, res) => {
    let body = req.body.username
    return res.status(200).send(body);
  });


  app.get("/api/:name/watchlist", async (req, res) => {
    let user_name = req.params.name
    try {
      const movie_list = await User.findById(user_name)
      return res.status(200).send(movie_list.watched)
    }
    catch (error) {
      res.send("ERROR")
    }
  })

  app.get("/api/:name/addedmovies", async (req, res) => {
    let user_name = req.params.name
    try {
      const liked_list = await User.findById(user_name)
      return res.status(200).send(liked_list.addedMovies)
    }
    catch (error) {
      res.send("ERROR")
    }
  })

  app.post("/api/:name/addedmovies", async (req, res) => {
    let user_name = req.params.name
    try {
      const add_movie = req.body
      console.log(req.body)
      await User.findOneAndUpdate({_id: user_name},{$push: {addedMovies: add_movie}})
      return res.status(200).send("Movie successfully added")
    }
    catch (error) {
      res.send(error)
    }
  })


  app.delete("/api/:name/:movieId/:mediaType/removemovie", async (req, res) => {
    let user_name = req.params.name
    let movie = req.params.movieId
    let type = req.params.mediaType
    try {
      await User.findOneAndUpdate({_id: user_name},{$pull: {addedMovies: {id: movie, media_type:type}}})
      return res.status(200).send("Movie successfully deleted")
    }
    catch (error) {
      res.send(error)
    }
  })

};

module.exports = UsersRoutes;
