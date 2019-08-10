const fetch = require("node-fetch");
const express = require("express");
const router = express.Router();

router.get("/:platform/:gamertag", async (req, res) => {
  const { platform, gamertag } = req.params;
  try {
    const headers = {
      "TRN-Api-Key": process.env.TRACKER_API_KEY
    };

    const response = await fetch(
      `${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}`,
      {
        headers
      }
    );

    const data = await response.json();

    if (data.errors && data.errors.length > 0) {
      return res.status(404).json({
        message : "Profile Not Found"
      });
    };

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message : "Server Error"
    })
  }
});

module.exports = router;
