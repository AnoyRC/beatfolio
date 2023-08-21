import { MusicPlayer } from '@/components/MusicPlayer';
import PageHeader from '@/components/PageHeader';
import Singers from '@/components/layout/singers/Singers';
import Songs from '@/components/layout/songs/Songs';
import AddPlaylistModal from '@/components/modal/AddPlaylistModal';
import Nav from '@/components/navigation/Nav';

export const metadata = {
  title: 'Beatfolio | Users',
  description:
    'A decentralized social media platform tailored exclusively for artists, musicians, and creators.',
};

export default function UsersLayout({ children }) {
  const singers = [
    {
      album_count: 0,
      artist_pick_track_id: null,
      bio: 'Pop Singer-Songwriter',
      cover_photo: {
        '640x':
          'https://audius-content-2.figment.io/content/QmcnZiTCbxfumSw3BVF7ykguWJ5wP5m4dVGsAYXn1bjpS9/640x.jpg',
      },
      followee_count: 1544,
      follower_count: 17800,
      handle: 'angelina_alexon',
      id: 'aNyzA',
      name: 'Angelina Alexon ',
      profile_picture: {
        '150x150':
          'https://cn1.mainnet.audiusindex.org/content/QmfWim6wpGrRKNqwTUt79KyiZCTaPWj6xbbJ2GoMSuqxRQ/150x150.jpg',
        '480x480':
          'https://audius-content-10.figment.io/content/QmfWim6wpGrRKNqwTUt79KyiZCTaPWj6xbbJ2GoMSuqxRQ/480x480.jpg',
      },
      track_count: 10,
      erc_wallet: '0x71e48c879195fdd06e8578164c84820395719383',
      spl_wallet: 'G3ujgayStEXzooAos4kZA9WZP377BjGUXoTc2RonHqMz',
      supporter_count: 6,
      supporting_count: 14,
      total_audio_balance: 387,
    },
    {
      album_count: 0,
      artist_pick_track_id: 'K7dOV1l',
      bio: 'i do metastar shxt 😈🐰🌐',
      cover_photo: {
        '640x':
          'https://blockchange-audius-content-03.bdnodes.net/content/QmWLXn2CUvcMx98UApWYhNzMQ9X8gSD6ap22VgSRE91MDW/640x.jpg',
        '2000x':
          'https://audius-content-6.figment.io/content/QmWLXn2CUvcMx98UApWYhNzMQ9X8gSD6ap22VgSRE91MDW/2000x.jpg',
      },
      followee_count: 5,
      follower_count: 11901,
      does_follow_current_user: false,
      handle: 'angelbaby',
      id: '2p2jp',
      is_verified: false,
      location: null,
      name: 'angelbaby',
      playlist_count: 1,
      profile_picture: {
        '150x150':
          'https://audius-content-5.figment.io/content/QmWceiAWb9TvreoZTWg2yYvXdUPHZTFGXukf5KM6hVDVtG/150x150.jpg',
        '480x480':
          'https://audius-content-6.figment.io/content/QmWceiAWb9TvreoZTWg2yYvXdUPHZTFGXukf5KM6hVDVtG/480x480.jpg',
        '1000x1000':
          'https://audius-creator-1.theblueprint.xyz/content/QmWceiAWb9TvreoZTWg2yYvXdUPHZTFGXukf5KM6hVDVtG/1000x1000.jpg',
      },
      repost_count: 2,
      track_count: 8,
      is_deactivated: false,
      is_available: true,
      erc_wallet: '0xfeac840faea3d85d9ffbb48ebf202cd59d1aab8f',
      spl_wallet: '4tp9NTjdqPtX2m7isp9eF1mngHJfQ42hhjpriUgSvqsa',
      supporter_count: 14,
      supporting_count: 0,
      total_audio_balance: 662,
    },
    {
      album_count: 9,
      artist_pick_track_id: 'qRvj1B2',
      bio: 'French Artist, Mystic Rapper, True Rhilliss, Member of the Collabhaven Collective, Audius Rider, Playlister Cow-Boy and Bot Spammer.\n\n❤️ Married with https://audius.co/Co_rigami ❤️\n\nAcapella availble for remix -> DM',
      cover_photo: {
        '640x':
          'https://audius-content-1.figment.io/content/QmU9m8zaVFcrZ6i195Qi88B8HMHhx7Hvf1LmxmwnWY5s31/640x.jpg',
      },
      followee_count: 651,
      follower_count: 4192,
      handle: 'MaekiMaii',
      id: 'v7O9O',
      name: 'Maeki Maii',
      playlist_count: 81,
      profile_picture: {
        '150x150':
          'https://cn0.mainnet.audiusindex.org/content/QmQ9eLRnMRtobBGrza6kyZ69qMc2133xHc3ThuYv1GxqkP/150x150.jpg',
        '480x480':
          'https://audius-content-4.cultur3stake.com/content/QmQ9eLRnMRtobBGrza6kyZ69qMc2133xHc3ThuYv1GxqkP/480x480.jpg',
      },
      track_count: 134,
      erc_wallet: '0x669c207e15a757a751fd8f623dff054c6d3d0b05',
      spl_wallet: 'J2rWgKvkEN6aScbZ2gGgCxtWVw6JcEqt3NuvRw2ubzBE',
      supporter_count: 80,
      supporting_count: 33,
      total_audio_balance: 6209,
    },
  ];

  const topReleases = [
    {
      artwork: {
        '150x150':
          'https://audius-content-2.cultur3stake.com/content/baeaaaiqseb4ucjc7p2gk7trvvsb6ov3fxwscpgsfp6czxbluzecrgs7dvbuzc',
        '480x480':
          'https://audius-content-13.cultur3stake.com/content/baeaaaiqseanjqwsyrao4i4vk6hiwxfge7cmi3bovfr2pl3p5zzixs6vs4cehi',
        '1000x1000':
          'https://audius.prod.capturealpha.io/content/baeaaaiqsebz2cf7cgt65hsg2udqwi7bpzene7dtzm3fcndw3yqadwual5xyx2',
      },
      description: 'glittertape.\nto dance and cry to.',
      genre: 'Electronic',
      id: 'V6b5r29',
      mood: 'Excited',
      title: 'glittertape #8',
      user: {
        album_count: 0,
        artist_pick_track_id: null,
        bio: 'kawaii bounce 🌟\n\nmy sample pack: gum.co/camocandybox1\n\nheader by paprikaworm',
        cover_photo: {
          '640x':
            'https://usermetadata.audius.co/content/QmRf3uh9tS8EbV59ArZwJN8UnpsjMyRyp2LVrpU7K1DYm2/640x.jpg',
          '2000x':
            'https://blockdaemon-audius-content-06.bdnodes.net/content/QmRf3uh9tS8EbV59ArZwJN8UnpsjMyRyp2LVrpU7K1DYm2/2000x.jpg',
        },
        followee_count: 208,
        follower_count: 17691,
        does_follow_current_user: false,
        handle: 'camouflybeats',
        id: 'nd6JD',
        is_verified: true,
        location: '',
        name: 'camoufly',
        playlist_count: 5,
        profile_picture: {
          '150x150':
            'https://audius-content-13.figment.io/content/QmP7RZkooL73JNMDSQ34TYYARzmYD8Xd9onA7kh7U5h3PR/150x150.jpg',
          '480x480':
            'https://audius-content-7.figment.io/content/QmP7RZkooL73JNMDSQ34TYYARzmYD8Xd9onA7kh7U5h3PR/480x480.jpg',
          '1000x1000':
            'https://audius-content-7.figment.io/content/QmP7RZkooL73JNMDSQ34TYYARzmYD8Xd9onA7kh7U5h3PR/1000x1000.jpg',
        },
        repost_count: 163,
        track_count: 84,
        is_deactivated: false,
        is_available: true,
        erc_wallet: '0xa65a69a3c38b55b9a3f83266bcc36fe6950cd85f',
        spl_wallet: '2bnJKYk6WnseedNWkDEACmS5563uxLCrSRAsQqora947',
        supporter_count: 37,
        supporting_count: 0,
        total_audio_balance: 3710,
      },
      duration: 1782,
      downloadable: false,
      play_count: 7396,
      permalink: '/camouflybeats/glittertape-8',
      is_streamable: true,
    },
    {
      artwork: {
        '150x150':
          'https://audius-content-1.figment.io/content/baeaaaiqsedtxpeu4ase5xgsr4irfkirvifjggnz3cc4y6ba7wfzvafqpmetem',
        '480x480':
          'https://audius.prod.capturealpha.io/content/baeaaaiqsect6dnl72ki7tkjzvjuysmhhoqfr5nb4xq6sczdxslf7xwz4kmsqo',
        '1000x1000':
          'https://audius-creator-4.theblueprint.xyz/content/baeaaaiqsedbr7lobwwv5dxjnrwolxf4cuqziqgimib7zqnsg7n7uehl3quohu',
      },
      description:
        'MP3 Download: https://hypeddit.com/jamiebrown/covered\nWav Download: https://jamiebrown.bandcamp.com/track/covered',
      genre: 'Electronic',
      id: 'KPV9Kr',
      track_cid:
        'baeaaaiqsedfapyn46x2rv66fy6rujs6p527trvivwuzgppwoca3espftxlh5e',
      preview_cid: null,
      mood: 'Energizing',
      release_date: 'Tue Aug 15 2023 11:05:53 GMT-0500',
      remix_of: {
        tracks: null,
      },
      repost_count: 21,
      favorite_count: 31,
      tags: 'reimagined,ukg,garage,edm,rap,bass',
      title: 'covered',
      user: {
        album_count: 0,
        artist_pick_track_id: null,
        bio: 'Let The Kid Play\n\nContact: jamiebrownmgmt@gmail.com',
        cover_photo: {
          '640x':
            'https://audius-content-2.cultur3stake.com/content/baeaaaiqseanu7gkijgak3n6czvy4jsg7whyhi3i4qrzpdbgwnco33t6vd4mzu',
          '2000x':
            'https://audius-content-4.figment.io/content/baeaaaiqsedvufvukowyja7tmnkjhigm6wx7ic2ceep5zq7kjl2auqdj6jnc6q',
        },
        followee_count: 0,
        follower_count: 6,
        does_follow_current_user: false,
        handle: 'jamiebrown',
        id: 'vR7OpNV',
        is_verified: true,
        location: '',
        name: 'JAMIE BROWN',
        playlist_count: 0,
        profile_picture: {
          '150x150':
            'https://audius-creator-3.theblueprint.xyz/content/baeaaaiqsec25crcxmvwiak5eolofui7sfoaqtej43bledht4cwb3ospbulj7s',
          '480x480':
            'https://audius-content-7.figment.io/content/baeaaaiqsedapdds4izbxud7vtm4wq2olnvy4cav5ijjsryc6fb6vzt2vbdvbo',
          '1000x1000':
            'https://audius-creator-3.theblueprint.xyz/content/baeaaaiqseanupwinose2xqd6xvwpwtzxjswhymbkegkexzqyocc6xquv22go6',
        },
        repost_count: 0,
        track_count: 1,
        is_deactivated: false,
        is_available: true,
        erc_wallet: '0x8fba4efad1490085d2de576e7e922e26d3e7023d',
        spl_wallet: 'HrCFnMjnRiXMFWLdpCGjXdDY1Epc2M3reFdPGrVvrKG5',
        supporter_count: 1,
        supporting_count: 0,
        total_audio_balance: 0,
      },
      duration: 124,
      downloadable: false,
      play_count: 4241,
      permalink: '/jamiebrown/covered',
      is_streamable: true,
    },
    {
      artwork: {
        '150x150':
          'https://blockdaemon-audius-content-03.bdnodes.net/content/baeaaaiqsebju6ylnhx4axtsibte746jbclxckdrn7ootgvspgund7yxmce54a',
        '480x480':
          'https://content-node.audius.co/content/baeaaaiqsednzwxv4hcbmtjlz44yqaktbicnc7owvxeaptm5wsrcje55vzxu74',
        '1000x1000':
          'https://blockdaemon-audius-content-03.bdnodes.net/content/baeaaaiqsedyx4ppod2r7xjyl6uxqdvktvvvcnh2cvgzi326wfiuoz7et6c2qs',
      },
      description: null,
      genre: 'Alternative',
      id: 'JE0GNWY',
      track_cid:
        'baeaaaiqseblmwayw62flhfnu3gghxu2562pcyfmrsmiyiljg2wmyp5jeqhcic',
      preview_cid: null,
      mood: null,
      release_date: 'Tue Aug 15 2023 12:45:22 GMT-0700',
      remix_of: {
        tracks: null,
      },
      repost_count: 19,
      favorite_count: 27,
      tags: 'alternative,rnb,pinkbyfloyd,floydzion',
      title: 'Algorithms',
      user: {
        album_count: 0,
        artist_pick_track_id: null,
        bio: 'Pretty Girls Like My Music',
        cover_photo: {
          '640x':
            'https://blockdaemon-audius-content-05.bdnodes.net/content/QmXcmeBJUPXMT8iyAuns799gJwCjaHURC3Savs8995L4qS/640x.jpg',
          '2000x':
            'https://audius-content-1.cultur3stake.com/content/QmXcmeBJUPXMT8iyAuns799gJwCjaHURC3Savs8995L4qS/2000x.jpg',
        },
        followee_count: 6,
        follower_count: 479,
        does_follow_current_user: false,
        handle: 'floydzion',
        id: 'Z4vb2YQ',
        is_verified: false,
        location: 'Los Angeles, CA',
        name: 'Floyd Zion',
        playlist_count: 0,
        profile_picture: {
          '150x150':
            'https://audius-content-11.figment.io/content/QmWmN25dbJ76S6L3wNfoTgFQVm4HkhWYM2sDxdJXN34489/150x150.jpg',
          '480x480':
            'https://audius-content-18.cultur3stake.com/content/QmWmN25dbJ76S6L3wNfoTgFQVm4HkhWYM2sDxdJXN34489/480x480.jpg',
          '1000x1000':
            'https://audius-content-1.jollyworld.xyz/content/QmWmN25dbJ76S6L3wNfoTgFQVm4HkhWYM2sDxdJXN34489/1000x1000.jpg',
        },
        repost_count: 0,
        track_count: 10,
        is_deactivated: false,
        is_available: true,
        erc_wallet: '0xb31f697ce25d44c8135942c37f3c3c22db70e02b',
        spl_wallet: '3gUf1JLoc9563qQbWhWRnGPzi7xcNtQqbCbS3Q4hk6DG',
        supporter_count: 8,
        supporting_count: 0,
        total_audio_balance: 564,
      },
      duration: 214,
      downloadable: false,
      play_count: 3581,
      permalink: '/floydzion/algorithms-1',
      is_streamable: true,
    },
  ];

  const newReleases = [
    {
      artwork: {
        '150x150':
          'https://audius-content-1.figment.io/content/baeaaaiqsedtxpeu4ase5xgsr4irfkirvifjggnz3cc4y6ba7wfzvafqpmetem',
        '480x480':
          'https://audius.prod.capturealpha.io/content/baeaaaiqsect6dnl72ki7tkjzvjuysmhhoqfr5nb4xq6sczdxslf7xwz4kmsqo',
        '1000x1000':
          'https://audius-creator-4.theblueprint.xyz/content/baeaaaiqsedbr7lobwwv5dxjnrwolxf4cuqziqgimib7zqnsg7n7uehl3quohu',
      },
      description:
        'MP3 Download: https://hypeddit.com/jamiebrown/covered\nWav Download: https://jamiebrown.bandcamp.com/track/covered',
      genre: 'Electronic',
      id: 'KPV9Kr',
      track_cid:
        'baeaaaiqsedfapyn46x2rv66fy6rujs6p527trvivwuzgppwoca3espftxlh5e',
      preview_cid: null,
      mood: 'Energizing',
      release_date: 'Tue Aug 15 2023 11:05:53 GMT-0500',
      remix_of: {
        tracks: null,
      },
      repost_count: 21,
      favorite_count: 31,
      tags: 'reimagined,ukg,garage,edm,rap,bass',
      title: 'covered',
      user: {
        album_count: 0,
        artist_pick_track_id: null,
        bio: 'Let The Kid Play\n\nContact: jamiebrownmgmt@gmail.com',
        cover_photo: {
          '640x':
            'https://audius-content-2.cultur3stake.com/content/baeaaaiqseanu7gkijgak3n6czvy4jsg7whyhi3i4qrzpdbgwnco33t6vd4mzu',
          '2000x':
            'https://audius-content-4.figment.io/content/baeaaaiqsedvufvukowyja7tmnkjhigm6wx7ic2ceep5zq7kjl2auqdj6jnc6q',
        },
        followee_count: 0,
        follower_count: 6,
        does_follow_current_user: false,
        handle: 'jamiebrown',
        id: 'vR7OpNV',
        is_verified: true,
        location: '',
        name: 'JAMIE BROWN',
        playlist_count: 0,
        profile_picture: {
          '150x150':
            'https://audius-creator-3.theblueprint.xyz/content/baeaaaiqsec25crcxmvwiak5eolofui7sfoaqtej43bledht4cwb3ospbulj7s',
          '480x480':
            'https://audius-content-7.figment.io/content/baeaaaiqsedapdds4izbxud7vtm4wq2olnvy4cav5ijjsryc6fb6vzt2vbdvbo',
          '1000x1000':
            'https://audius-creator-3.theblueprint.xyz/content/baeaaaiqseanupwinose2xqd6xvwpwtzxjswhymbkegkexzqyocc6xquv22go6',
        },
        repost_count: 0,
        track_count: 1,
        is_deactivated: false,
        is_available: true,
        erc_wallet: '0x8fba4efad1490085d2de576e7e922e26d3e7023d',
        spl_wallet: 'HrCFnMjnRiXMFWLdpCGjXdDY1Epc2M3reFdPGrVvrKG5',
        supporter_count: 1,
        supporting_count: 0,
        total_audio_balance: 0,
      },
      duration: 124,
      downloadable: false,
      play_count: 4296,
      permalink: '/jamiebrown/covered',
      is_streamable: true,
    },
    {
      artwork: {
        '150x150':
          'https://audius-content-13.cultur3stake.com/content/baeaaaiqsebxfvk2kztsbbi5ptgwfevehpurtzqkjdlofgwf5rxkzh2vpwxdto',
        '480x480':
          'https://blockdaemon-audius-content-03.bdnodes.net/content/baeaaaiqsecg53d3swyunmajkvf3dl6ev6g3nwmszyhhgs6rsdlpxqnihnh6hc',
        '1000x1000':
          'https://audius-content-9.cultur3stake.com/content/baeaaaiqseabqxoabobm2pucjxnay3vt3nzzfrgrozl2au2gsco36vw5wt452i',
      },
      description:
        'Collect on Sound - https://www.sound.xyz/rohki/lac-da\n\nLạc Đà - a song dedicated to the Camel collectors.\n\nWe are thankful and honored for your support.\n\nStay tuned for a special contest announced after sell out.\n\nJoin the collector chat for more details... https://guild.xyz/rohki',
      genre: 'Electronic',
      id: 'MpWG0Q9',
      track_cid:
        'baeaaaiqsedlz7hskibswncf3xctwt5owbh3se4pd77qomnosjjuyg7xokkt76',
      preview_cid: null,
      mood: 'Empowering',
      release_date: 'Thu Aug 17 2023 01:51:27 GMT-0700',
      remix_of: {
        tracks: null,
      },
      repost_count: 25,
      favorite_count: 31,
      tags: null,
      title: 'Lạc Đà',
      user: {
        album_count: 0,
        artist_pick_track_id: null,
        bio: 'Season 1.',
        cover_photo: {
          '640x':
            'https://audius-content-12.cultur3stake.com/content/baeaaaiqsebji6i4234pbhu3ye5skql6th6246lf4jqv7dtxhfxze3abx2zddu',
          '2000x':
            'https://audius-content-1.jollyworld.xyz/content/baeaaaiqsecnzt6kurc4skuulj6wg7zqfhrm4zl2ithqvkztxahjzlbvhy34fq',
        },
        followee_count: 0,
        follower_count: 156,
        does_follow_current_user: false,
        handle: 'rohki',
        id: 'EOAKo',
        is_verified: false,
        location: 'https://linktr.ee/rohki',
        name: 'RŌHKI',
        playlist_count: 0,
        profile_picture: {
          '150x150':
            'https://content-node.audius.co/content/QmcmPTfZrMuoFDgCJC2uzMPZMxgZt5XSnfhvgmLo2k2yr2/150x150.jpg',
          '480x480':
            'https://audius-creator-5.theblueprint.xyz/content/QmcmPTfZrMuoFDgCJC2uzMPZMxgZt5XSnfhvgmLo2k2yr2/480x480.jpg',
          '1000x1000':
            'https://audius-creator-5.theblueprint.xyz/content/QmcmPTfZrMuoFDgCJC2uzMPZMxgZt5XSnfhvgmLo2k2yr2/1000x1000.jpg',
        },
        repost_count: 0,
        track_count: 10,
        is_deactivated: false,
        is_available: true,
        erc_wallet: '0x2c28a59277d61afe63d2c44ffcb57d3c583bba45',
        spl_wallet: 'EsHtr1yRMP3mEoacDM5E1XJC6BPdb5qEN8wNXMdoJ9X6',
        supporter_count: 10,
        supporting_count: 0,
        total_audio_balance: 541,
      },
      duration: 340,
      downloadable: true,
      play_count: 1857,
      permalink: '/rohki/lạc-đà',
      is_streamable: true,
    },
    {
      artwork: {
        '150x150':
          'https://audius-creator-6.theblueprint.xyz/content/baeaaaiqsea4xp567og2mnmlq4ikjghnu76mbgfvls4bmaiqhjmzyfzxonjnpa',
        '480x480':
          'https://audius-creator-5.theblueprint.xyz/content/baeaaaiqsedm2t4ryjp6njlkoobihpqxw56zpsat7ivhgyvin3v4ngncbno3bk',
        '1000x1000':
          'https://blockdaemon-audius-content-03.bdnodes.net/content/baeaaaiqsedwma6lq4w4qnpttzp4q72qhf5y55vcxrbworcqle35yjasp2mdbw',
      },
      description: '',
      genre: 'Electronic',
      id: 'BZamXv1',
      track_cid:
        'baeaaaiqsec2ehyo3i6odjibz2oduochn5e4h43uqehyr2vzyvf4wdc27odmc6',
      preview_cid: null,
      mood: 'Cool',
      release_date: 'Wed Aug 16 2023 13:09:43 GMT-0700',
      remix_of: {
        tracks: null,
      },
      repost_count: 12,
      favorite_count: 21,
      tags: null,
      title: "Summer Is Ours (G's Dust Up)",
      user: {
        album_count: 0,
        artist_pick_track_id: null,
        bio: null,
        cover_photo: {
          '640x':
            'https://audius-content-8.cultur3stake.com/content/baeaaaiqsecyjffnj7d44t435foub53bwdlsdueuzbqmrzolpv5bltikgakpqm',
          '2000x':
            'https://audius-creator-3.theblueprint.xyz/content/baeaaaiqsec3j6ll364cd425374jz3qaipwhtpipfkxqs7y3wyw64qiaqlfjla',
        },
        followee_count: 4,
        follower_count: 4,
        does_follow_current_user: false,
        handle: 'robgarzamusic',
        id: 'aoENba',
        is_verified: true,
        location: 'San Francisco, CA',
        name: 'GARZA',
        playlist_count: 0,
        profile_picture: {
          '150x150':
            'https://audius-content-13.cultur3stake.com/content/baeaaaiqsecrpy73p23pkn5t746km45jojlu5xx4f5eiyjw65y2hqar3shfoeg',
          '480x480':
            'https://audius-content-12.figment.io/content/baeaaaiqsecg2s454h737e73slss2z7vhys5xyt6biuceef3yr4b4ahdjx5ehq',
          '1000x1000':
            'https://audius-content-7.figment.io/content/baeaaaiqsedf6ha6yqy56vbksprg5jvqmenazzkle5mcovzpvy2wmwhlrgr47a',
        },
        repost_count: 0,
        track_count: 1,
        is_deactivated: false,
        is_available: true,
        erc_wallet: '0x6e4984ee406f7a6756f0e4adae460feda5729fdf',
        spl_wallet: null,
        supporter_count: 0,
        supporting_count: 0,
        total_audio_balance: 0,
      },
      duration: 232,
      downloadable: false,
      play_count: 1555,
      permalink: '/robgarzamusic/summer-is-ours-gs-dust-up',
      is_streamable: true,
    },
  ];

  return (
    <>
      <AddPlaylistModal />

      <main className="h-screen flex relative">
        <Nav />

        <section className="w-full relative grid grid-cols-9">
          <PageHeader isGrid={true} />

          <section className="col-span-6 overflow-y-auto no-scrollbar no-scrollbar::-webkit-scrollbar">
            {children}
          </section>

          <aside className="col-span-3 px-2 overflow-y-auto no-scrollbar no-scrollbar::-webkit-scrollbar">
            {newReleases && (
              <Songs heading="New Releases" url={null} songs={newReleases} />
            )}
            {topReleases && (
              <Songs heading="Top Releases" url="/feeds" songs={topReleases} />
            )}
            {singers && <Singers url="/artists" singers={singers} />}
          </aside>
        </section>
      </main>

      {/* <MusicPlayer /> */}
    </>
  );
}
