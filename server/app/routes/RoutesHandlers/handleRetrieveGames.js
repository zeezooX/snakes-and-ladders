const retrieveGames = (req, res) => {
  let userId = req.body.id;
  // search databse for all the games with Id
  // return games
  res.send("Hi");
};

module.exports = retrieveGames;
