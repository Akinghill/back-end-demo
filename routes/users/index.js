const router = require('express').Router();
const User = require('../../models/Users')

/*
POST
*/
router.post('/', async (req, res) => {
  const NewUser = new User({
    name: req.body.name,
    age: req.body.age,
  });

  try {
    const createdUser = await NewUser.save();
    res.status(201).json(createdUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
})

// Get all Users
router.get('/', (req, res) => {
  console.log('hit me')
  // try {
  //   User.find({}, (err, users) => {
  //     res.status(201).json(users)
  //   })
  // } catch (err) {
  //   res.status(500).json({ message: err.message })
  // }
  // let id = req.params.id;
  // User.findById({ _id: id }, (err, data) => {
  //     if (err) {
  //         console.log(err);
  //     } else {
  //         let name = data.name;
  //         let age = data.age;
  //         let id = data._id;
  //         let fci = data.favoriteCatImg;
  //         let user_id = data.user_id;
  //         GamePlayer.findOne({ cat_id : id }, (err, data) => {
  //             if (err) {
  //                 console.log(err);
  //             } else {
  //                 if (data) {
  //                     let player_id = data._id;
  //                     let score = data.score;
  //                     let times_played = data.times_played;
  //                     let games_played = data.games_played;
  //                     res.render('layouts/site/rest-of-site.ejs', { name, id, age, fci, user_id, player_id, score, times_played, games_played });
  //                 } else if (!data) {
  //                     let gamePlayer = new GamePlayer({
  //                         cat_id : id,
  //                         user_id : user_id
  //                     });
  //                     gamePlayer.save((err, data) => {
  //                         if (err) {
  //                             console.log(err);
  //                         } else {
  //                             let player_id = data._id;
  //                             let score = data.score;
  //                             let times_played = data.times_played;
  //                             let games_played = data.games_played;
  //                             res.render('layouts/site/rest-of-site.ejs', { name, id, age, fci, user_id, player_id, score, times_played, games_played });
  //                         }
  //                     });
  //                 }
  //             }
  //         });
  //     }
  // });
});

// Get single User
router.post('/users/:id', (req, res) => {
  let id = req.body.id;
  CatFancier.findById({ _id: id }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let name = data.name;
      let age = data.age;
      let id = data._id;
      let fci = data.favoriteCatImg;
      let user_id = data.user_id;
      GamePlayer.findOne({ cat_id: id }, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          if (data) {
            let player_id = data._id;
            let score = data.score;
            let times_played = data.times_played;
            let games_played = data.games_played;
            res.render('layouts/site/rest-of-site.ejs', { name, id, age, fci, user_id, player_id, score, times_played, games_played });
          } else if (!data) {
            let gamePlayer = new GamePlayer({
              cat_id: id,
              user_id: user_id
            });
            gamePlayer.save((err, data) => {
              if (err) {
                console.log(err);
              } else {
                let player_id = data._id;
                let score = data.score;
                let times_played = data.times_played;
                let games_played = data.games_played;
                res.render('layouts/site/rest-of-site.ejs', { name, id, age, fci, user_id, player_id, score, times_played, games_played });
              }
            });
          }
        }
      });
    }
  });
});

module.exports = router;