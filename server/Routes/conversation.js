const Conversation = require("../models/Conversation");
const router = require("express").Router();

router.post("/", async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });
  try {
    const dbConversation = await newConversation.save();
    res.status(200).json(dbConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

router.get("/:userId", async (req, res) => {
  try {
    const currentConversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(currentConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});