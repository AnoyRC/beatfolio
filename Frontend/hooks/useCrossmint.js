import axios from 'axios';

export default function useCrossmint() {
  const mintUser = async (user, publicKey) => {
    const config = {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'x-client-secret': 'sk_test.2d726b3c.e2b6f527018e88ad299fbfc7c39a1821',
        'x-project-id': '7f12ef92-e40f-43c9-af10-d4d585656d65',
      },
    };

    const body = JSON.stringify({
      recipient: `solana:${publicKey}`,
      metadata: {
        name: user.name,
        description: user.description,
        image: `https://${user.image}.ipfs.w3s.link`,
      },
    });

    const res = await axios
      .put(
        `https://staging.crossmint.com/api/2022-06-09/collections/0e249985-9d8e-443a-8f17-32b4f9e12592/nfts/${publicKey}`,
        body,
        config
      )
      .catch((err) => {
        console.log(err);
        return null;
      });

    return res;
  };

  const mintSong = async (song, publicKey) => {
    const config = {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'x-client-secret': 'sk_test.2d726b3c.e2b6f527018e88ad299fbfc7c39a1821',
        'x-project-id': '7f12ef92-e40f-43c9-af10-d4d585656d65',
      },
    };

    const body = JSON.stringify({
      recipient: publicKey,
      metadata: {
        name: song.name,
        description: song.description,
        image: song.image,
        attributes: [
          { trait_type: 'Song Link', value: song.songLink },
          { trait_type: 'Genre', value: song.genre },
          { trait_type: 'Mood', value: song.mood },
        ],
      },
    });

    const res = await axios
      .put(
        `https://staging.crossmint.com/api/2022-06-09/collections/c3d92820-7264-443c-a859-4857d6832c28/nfts/${song.name}`,
        body,
        config
      )
      .catch((err) => {
        console.log(err);
        return null;
      });

    return res;
  };

  const fetchUser = async (publicKey) => {
    const config = {
      headers: {
        'x-client-secret': 'sk_test.2d726b3c.e2b6f527018e88ad299fbfc7c39a1821',
        'x-project-id': '7f12ef92-e40f-43c9-af10-d4d585656d65',
      },
    };

    axios
      .get(
        `https://staging.crossmint.com/api/2022-06-09/collections/0e249985-9d8e-443a-8f17-32b4f9e12592/nfts?page=1&perPage=50`,
        config
      )
      .then((res) => {
        res.data.forEach((user) => {
          if (user.id === publicKey) {
            return user;
          }
        });
      })
      .catch((err) => {
        return null;
      });
  };

  return { mintUser, mintSong, fetchUser };
}
