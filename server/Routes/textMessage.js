const TextMessage = require("../models/TextMessage");
const router = require("express").Router();

router.post("/", async (req, res) => {
  const newTextMessage = new TextMessage(req.body);
  try {
    const dbMessage = await newTextMessage.save();
    res.status(200).json(dbMessage);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:conversationId", async (req, res) => {
  try {
    const textMessages = await TextMessage.find({
        conversationId: req.params.conversationId,
    });
    res.status(200).json(textMessages);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
