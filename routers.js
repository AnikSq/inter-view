const router = require("express").Router();
const model = require("./model");

router.post("/add", async (req, res) => {
  const { name, channels } = req.body;
  console.log("reached");
  const createNew = await model.create({ name, channels });

  res.status(200).json(createNew);
});

router.get("/get", async (req, res) => {
  const { channels } = req.body;

  const Channels = await model.find({ channels: { $all: channels } });

  res.status(200).json(Channels);
});

module.exports = router;
