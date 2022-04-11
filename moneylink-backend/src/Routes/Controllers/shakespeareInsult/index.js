const { randomInsultGenerator } = require("./insultGenerator");

const shakespeareInsult = (req, res) => {
  const insult = randomInsultGenerator();
  res.send(insult);
};

module.exports = shakespeareInsult;