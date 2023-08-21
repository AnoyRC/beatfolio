const axios = require("axios");
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

router.post(
  "/mint/user",
  [
    check("name", "Name is required").not().isEmpty(),
    check("description", "Description is required").not().isEmpty(),
    check("image", "Image is required").not().isEmpty(),
    check("address", "Public Key is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { name, description, image, address } = req.body;

    const config = {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "x-client-secret": "sk_test.2d726b3c.e2b6f527018e88ad299fbfc7c39a1821",
        "x-project-id": "7f12ef92-e40f-43c9-af10-d4d585656d65",
      },
    };

    const body = JSON.stringify({
      recipient: `solana:${address}`,
      metadata: {
        name: name,
        description: description,
        image: image,
      },
    });

    const response = await axios
      .put(
        `https://staging.crossmint.com/api/2022-06-09/collections/0e249985-9d8e-443a-8f17-32b4f9e12592/nfts/${address}`,
        body,
        config
      )
      .catch((err) => {
        return res.status(500).send(err);
      });

    if (response) {
      return res.json(response.data);
    } else {
      return res.status(500).send("Server error");
    }
  }
);

router.post(
  "/mint/song",
  [
    check("name", "Name is required").not().isEmpty(),
    check("description", "Description is required").not().isEmpty(),
    check("image", "Image is required").not().isEmpty(),
    check("songLink", "Song Link is required").not().isEmpty(),
    check("genre", "Genre is required").not().isEmpty(),
    check("mood", "Mood is required").not().isEmpty(),
    check("address", "Public Key is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { name, description, image, songLink, genre, mood, address } =
      req.body;

    const config = {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "x-client-secret": "sk_test.2d726b3c.e2b6f527018e88ad299fbfc7c39a1821",
        "x-project-id": "7f12ef92-e40f-43c9-af10-d4d585656d65",
      },
    };

    const body = JSON.stringify({
      recipient: `solana:${address}`,
      metadata: {
        name: name,
        description: description,
        image: image,
        attributes: [
          {
            trait_type: "Song Link",
            value: songLink,
          },
          { trait_type: "Genre", value: genre },
          { trait_type: "Mood", value: mood },
        ],
      },
    });

    const response = await axios
      .put(
        `https://staging.crossmint.com/api/2022-06-09/collections/c3d92820-7264-443c-a859-4857d6832c28/nfts/${name}`,
        body,
        config
      )
      .catch((err) => {
        return res.status(500).send(err);
      });

    if (response) {
      return res.json(response.data);
    } else {
      return res.status(500).send("Server error");
    }
  }
);

router.get("/fetch/user/:address", async (req, res) => {
  const config = {
    headers: {
      "x-client-secret": "sk_test.2d726b3c.e2b6f527018e88ad299fbfc7c39a1821",
      "x-project-id": "7f12ef92-e40f-43c9-af10-d4d585656d65",
    },
  };

  await axios;
  await axios
    .get(
      `https://staging.crossmint.com/api/2022-06-09/collections/0e249985-9d8e-443a-8f17-32b4f9e12592/nfts?page=1&perPage=50`,
      config
    )
    .then((response) => {
      response.data.forEach((user) => {
        if (user.id === req.params.address) {
          return res.json(user);
          return res.json(user);
        }
      });
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
});

router.get("/fetch/song/:id", async (req, res) => {
  const config = {
    headers: {
      "x-client-secret": "sk_test.2d726b3c.e2b6f527018e88ad299fbfc7c39a1821",
      "x-project-id": "7f12ef92-e40f-43c9-af10-d4d585656d65",
    },
  };

  await axios
    .get(
      `https://staging.crossmint.com/api/2022-06-09/collections/c3d92820-7264-443c-a859-4857d6832c28/nfts?page=1&perPage=50`,
      config
    )
    .then((response) => {
      response.data.forEach((song) => {
        if (song.id === req.params.id) {
          return res.json(song);
          return res.json(song);
        }
      });
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
});

router.get("/user/all", async (req, res) => {
  const config = {
    headers: {
      "x-client-secret": "sk_test.2d726b3c.e2b6f527018e88ad299fbfc7c39a1821",
      "x-project-id": "7f12ef92-e40f-43c9-af10-d4d585656d65",
    },
  };

  await axios
    .get(
      `https://staging.crossmint.com/api/2022-06-09/collections/0e249985-9d8e-443a-8f17-32b4f9e12592/nfts?page=1&perPage=50`,
      config
    )
    .then((response) => {
      return res.json(response.data);
      return res.json(response.data);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
});

router.get("/song/all", async (req, res) => {
  const config = {
    headers: {
      "x-client-secret": "sk_test.2d726b3c.e2b6f527018e88ad299fbfc7c39a1821",
      "x-project-id": "7f12ef92-e40f-43c9-af10-d4d585656d65",
    },
  };

  await axios
    .get(
      `https://staging.crossmint.com/api/2022-06-09/collections/c3d92820-7264-443c-a859-4857d6832c28/nfts?page=1&perPage=50`,
      config
    )
    .then((response) => {
      return res.json(response.data);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
});

router.get("/song/user/:address", async (req, res) => {
  const config = {
    headers: {
      "x-client-secret": "sk_test.2d726b3c.e2b6f527018e88ad299fbfc7c39a1821",
      "x-project-id": "7f12ef92-e40f-43c9-af10-d4d585656d65",
    },
  };

  await axios
    .get(
      `https://staging.crossmint.com/api/2022-06-09/collections/c3d92820-7264-443c-a859-4857d6832c28/nfts?page=1&perPage=50`,
      config
    )
    .then((response) => {
      const filter = response.data.filter((song) => {
        return song.onChain.owner === req.params.address;
      });
      return res.json(filter);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
});

module.exports = router;
