import express from "express";
const router = express.Router();

/**
 * Category Data can be added here.
 * You can add category of your wish with different attributes
 * */

const categories = [
  {
    _id: "9fde9f72-ef52-4560-bb15-68d826c96f40",
    categoryName: "birdsound",
    categoryImage:
      "https://res.cloudinary.com/irohitgaur/image/upload/v1648280506/birdsound_nr8yet.png",
  },
  {
    _id: "1a3f8069-b15a-4c4d-976f-f092215483c6",
    categoryName: "documentary",
    categoryImage:
      "https://res.cloudinary.com/irohitgaur/image/upload/v1648280506/documentary_qeb5t7.png",
  },
  {
    _id: "978f8de0-845e-4fb3-bb0b-a49caa177171",
    categoryName: "birdfact",
    categoryImage:
      "https://res.cloudinary.com/irohitgaur/image/upload/v1648280506/birdfact_k40rfd.png",
  },
];

/**
 * Videos Data can be added here.
 * You can add videos of your wish with different attributes
 * */

const videos = [
  {
    _id: "XdlIbNrki5o",
    title: "Singing nightingale. The best bird song.",
    youtubeID: "XdlIbNrki5o",
    videoLength: "2:28",
    videoThumbnail: "https://i.ytimg.com/vi/XdlIbNrki5o/hqdefault.jpg",
    likes: "168K",
    views: "17M",
    date: "Oct 26, 2015",
    category: "birdsound",
    bird: "nightingale",
    featured: true,
    channelName: "Wildlife World",
    channelThumbnail:
      "https://yt3.ggpht.com/45VIs0-IhYFq1kKstIQF3SzvgJdUJqSz42Zn50ljUWdwwZ4MeUtwUDwnJwM7lx8kxumV12OK=s176-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UCqrg-CrSVAjTYCy4f6LBD4g",
    subscribers: "292K",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "rkSOPq18TL8",
    title: "Bird sounds. Singing Tawny Owl in the spring forest in sunlight.",
    youtubeID: "rkSOPq18TL8",
    videoLength: "5:37",
    videoThumbnail: "https://i.ytimg.com/vi/rkSOPq18TL8/hqdefault.jpg",
    likes: "277",
    views: "2896",
    date: "Mar 19, 2022",
    category: "birdsound",
    bird: "owl",
    featured: false,
    channelName: "Wildlife World",
    channelThumbnail:
      "https://yt3.ggpht.com/45VIs0-IhYFq1kKstIQF3SzvgJdUJqSz42Zn50ljUWdwwZ4MeUtwUDwnJwM7lx8kxumV12OK=s176-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UCqrg-CrSVAjTYCy4f6LBD4g",
    subscribers: "292K",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "o4HBQuVWuQk",
    title: "Song thrush. Birds during breeding season. Bird sounds and nest.",
    youtubeID: "o4HBQuVWuQk",
    videoLength: "4:54",
    videoThumbnail: "https://i.ytimg.com/vi/o4HBQuVWuQk/hqdefault.jpg",
    likes: "380",
    views: "5979",
    date: "Mar 5, 2022",
    category: "birdsound",
    bird: "thrush",
    featured: false,
    channelName: "Wildlife World",
    channelThumbnail:
      "https://yt3.ggpht.com/45VIs0-IhYFq1kKstIQF3SzvgJdUJqSz42Zn50ljUWdwwZ4MeUtwUDwnJwM7lx8kxumV12OK=s176-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UCqrg-CrSVAjTYCy4f6LBD4g",
    subscribers: "292K",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "RrN1PA2JDoM",
    title:
      "Bird sounds. Melodious chirping of birds in the spring forest. European robin - beautiful bird song.",
    youtubeID: "RrN1PA2JDoM",
    videoLength: "5:52",
    videoThumbnail: "https://i.ytimg.com/vi/RrN1PA2JDoM/hqdefault.jpg",
    likes: "385",
    views: "6483",
    date: "Feb 18, 2022",
    category: "birdsound",
    bird: "robin",
    featured: false,
    channelName: "Wildlife World",
    channelThumbnail:
      "https://yt3.ggpht.com/45VIs0-IhYFq1kKstIQF3SzvgJdUJqSz42Zn50ljUWdwwZ4MeUtwUDwnJwM7lx8kxumV12OK=s176-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UCqrg-CrSVAjTYCy4f6LBD4g",
    subscribers: "292K",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "y0xZ_3gEoEM",
    title: "Lovebirds Meal Time: WheatGrass !!!",
    youtubeID: "y0xZ_3gEoEM",
    videoLength: "5:43:59",
    videoThumbnail: "https://i.ytimg.com/vi/y0xZ_3gEoEM/hqdefault.jpg",
    likes: "5K",
    views: "809K",
    date: "Aug 1, 2021",
    category: "birdsound",
    bird: "lovebird",
    featured: false,
    channelName: "Video Kameraku",
    channelThumbnail:
      "https://yt3.ggpht.com/ytc/AKedOLQlM-fY9gda1DjRvQjwyU219Y9eMbQsMohxT3M=s176-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UC6bNB5RdBO2tUTHBlq7a0vw",
    subscribers: "42.2K",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "YLn9SD3sXFU",
    title: "Budgie Sounds Bathing Singing Chirping Funny Bird",
    youtubeID: "YLn9SD3sXFU",
    videoLength: "1:02:24",
    videoThumbnail: "https://i.ytimg.com/vi/YLn9SD3sXFU/hqdefault.jpg",
    likes: "74",
    views: "4127",
    date: "Jan 30, 2022",
    category: "birdsound",
    bird: "budgie",
    featured: false,
    channelName: "Budgie Nation",
    channelThumbnail:
      "https://yt3.ggpht.com/btoXFstbAvUqugZcxe-nXEFPiSl2nQ6IQWAEC2ewS8Eed8oyjDLpWWU7aB-WlO7SGxk9qYUKSQ=s176-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UC5-JvmBeujLWY4s3ejCaK3w",
    subscribers: "23.4K",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "VwCcAh7FinU",
    title: "The Golden Eagle - Master of the Sky | Free Documentary Nature",
    youtubeID: "VwCcAh7FinU",
    videoLength: "50:07",
    videoThumbnail: "https://i.ytimg.com/vi/VwCcAh7FinU/hqdefault.jpg",
    likes: "22K",
    views: "4.6M",
    date: "Mar 12, 2021",
    category: "documentary",
    bird: "eagle",
    featured: true,
    channelName: "Free Documentary - Nature",
    channelThumbnail:
      "https://yt3.ggpht.com/x0upGkXC1ecRLxFsT-Y__EcP5A3AzUHO_gwP_hWV2yppb6G8CNE6MWvWXmqnLOKhEkit7GbhNQ=s176-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UCQtW2oz8ec8pHjjxawujNjg",
    subscribers: "982K",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "1_8hz4bHfYY",
    title:
      "PEREGRINE FALCON - a dive fighter! The FASTEST animal on the planet!",
    youtubeID: "1_8hz4bHfYY",
    videoLength: "8:02",
    videoThumbnail: "https://i.ytimg.com/vi/1_8hz4bHfYY/hqdefault.jpg",
    likes: "14K",
    views: "1.1M",
    date: "Aug 22, 2020",
    category: "documentary",
    bird: "falcon",
    featured: false,
    channelName: "Wonders of the World",
    channelThumbnail:
      "https://yt3.ggpht.com/ytc/AKedOLQgr4Prlcp9-qDVudkkpalvTrAEpy7gV7GNA_dpVA=s176-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UC1dWsFevTpXh1fLMpLTtoAg",
    subscribers: "919K",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "3ieppWouPxk",
    title: "The Macaw Kingdom | Documentary [Expedition Edition] HD",
    youtubeID: "3ieppWouPxk",
    videoLength: "8:02",
    videoThumbnail: "https://i.ytimg.com/vi/3ieppWouPxk/hqdefault.jpg",
    likes: "3.5K",
    views: "307K",
    date: "Sep 29, 2021",
    category: "documentary",
    bird: "macaw",
    featured: true,
    channelName: "Wildlife Messengers",
    channelThumbnail:
      "https://yt3.ggpht.com/ytc/AKedOLT3M35jkS0fNG3VbZCsjqpFZ2VgExURPQJcd99Q=s176-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UCqnxsc8aB1Sjfc8rfAPY8Dg",
    subscribers: "4.86K",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "RKpD80VlZao",
    title: "An endangered bird is forgetting its song as the species dies out",
    youtubeID: "RKpD80VlZao",
    videoLength: "4:43",
    videoThumbnail: "https://i.ytimg.com/vi/RKpD80VlZao/hqdefault.jpg",
    likes: "135",
    views: "21K",
    date: "Mar 17, 2021",
    category: "documentary",
    bird: "honeyeater",
    featured: false,
    channelName: "Wildlife Messengers",
    channelThumbnail:
      "https://yt3.ggpht.com/ytc/AKedOLT3M35jkS0fNG3VbZCsjqpFZ2VgExURPQJcd99Q=s176-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UCqnxsc8aB1Sjfc8rfAPY8Dg",
    subscribers: "4.86K",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "uJ7AfPrfqB0",
    title:
      "South Georgia - Penguin Paradise of the South Atlantic | Free Documentary Nature",
    youtubeID: "uJ7AfPrfqB0",
    videoLength: "48:51",
    videoThumbnail: "https://i.ytimg.com/vi/uJ7AfPrfqB0/hqdefault.jpg",
    likes: "17K",
    views: "2.8M",
    date: "May 29, 2020",
    category: "documentary",
    bird: "penguin",
    featured: false,
    channelName: "Free Documentary - Nature",
    channelThumbnail:
      "https://yt3.ggpht.com/x0upGkXC1ecRLxFsT-Y__EcP5A3AzUHO_gwP_hWV2yppb6G8CNE6MWvWXmqnLOKhEkit7GbhNQ=s176-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UCQtW2oz8ec8pHjjxawujNjg",
    subscribers: "982K",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "0e2TpkZ1FEY",
    title:
      "A Winter's Tale - The Journey of the Snowy Owls | Free Documentary Nature",
    youtubeID: "0e2TpkZ1FEY",
    videoLength: "44:30",
    videoThumbnail: "https://i.ytimg.com/vi/0e2TpkZ1FEY/hqdefault.jpg",
    likes: "5.1K",
    views: "556K",
    date: "Oct 10, 2021",
    category: "documentary",
    bird: "owl",
    featured: false,
    channelName: "Free Documentary - Nature",
    channelThumbnail:
      "https://yt3.ggpht.com/x0upGkXC1ecRLxFsT-Y__EcP5A3AzUHO_gwP_hWV2yppb6G8CNE6MWvWXmqnLOKhEkit7GbhNQ=s176-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UCQtW2oz8ec8pHjjxawujNjg",
    subscribers: "982K",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "W_4H8Ynpv3I",
    title: "Things you need to know about STARLINGS!",
    youtubeID: "W_4H8Ynpv3I",
    videoLength: "4:05",
    videoThumbnail: "https://i.ytimg.com/vi/W_4H8Ynpv3I/hqdefault.jpg",
    likes: "516",
    views: "16.9K",
    date: "Jun 9, 2021",
    category: "birdfact",
    bird: "starling",
    featured: true,
    channelName: "A Shot Of Wildlife",
    channelThumbnail:
      "https://yt3.ggpht.com/ytc/AKedOLQ2Ep34nxfT1syRc7euHG--7NTtZBRFSkBPrVdP=s176-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UCZ4FD_GqvrpAWVlyjLFaMyQ",
    subscribers: "7.16K",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "Dbwp2MFbvOE",
    title: "Things you need to know about GREEN WOODPECKERS!",
    youtubeID: "Dbwp2MFbvOE",
    videoLength: "3:53",
    videoThumbnail: "https://i.ytimg.com/vi/Dbwp2MFbvOE/hqdefault.jpg",
    likes: "69",
    views: "328",
    date: "Mar 22, 2022",
    category: "birdfact",
    bird: "woodpecker",
    featured: false,
    channelName: "A Shot Of Wildlife",
    channelThumbnail:
      "https://yt3.ggpht.com/ytc/AKedOLQ2Ep34nxfT1syRc7euHG--7NTtZBRFSkBPrVdP=s176-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UCZ4FD_GqvrpAWVlyjLFaMyQ",
    subscribers: "7.16K",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "cw-IGYyae6c",
    title: "Things you need to know about BUZZARDS!",
    youtubeID: "cw-IGYyae6c",
    videoLength: "4:24",
    videoThumbnail: "https://i.ytimg.com/vi/cw-IGYyae6c/hqdefault.jpg",
    likes: "267",
    views: "7487",
    date: "Dec 13, 2021",
    category: "birdfact",
    bird: "buzzard",
    featured: true,
    channelName: "A Shot Of Wildlife",
    channelThumbnail:
      "https://yt3.ggpht.com/ytc/AKedOLQ2Ep34nxfT1syRc7euHG--7NTtZBRFSkBPrVdP=s176-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UCZ4FD_GqvrpAWVlyjLFaMyQ",
    subscribers: "7.16K",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "42dM5PJRdeE",
    title: "Things you need to know about ROBINS!",
    youtubeID: "42dM5PJRdeE",
    videoLength: "3:59",
    videoThumbnail: "https://i.ytimg.com/vi/42dM5PJRdeE/hqdefault.jpg",
    likes: "638",
    views: "24.2K",
    date: "Mar 25, 2021",
    category: "birdfact",
    bird: "robin",
    featured: false,
    channelName: "A Shot Of Wildlife",
    channelThumbnail:
      "https://yt3.ggpht.com/ytc/AKedOLQ2Ep34nxfT1syRc7euHG--7NTtZBRFSkBPrVdP=s176-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UCZ4FD_GqvrpAWVlyjLFaMyQ",
    subscribers: "7.16K",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "62P470JcDN4",
    title: "Things you need to know about CORMORANTS!",
    youtubeID: "62P470JcDN4",
    videoLength: "6:14",
    videoThumbnail: "https://i.ytimg.com/vi/62P470JcDN4/hqdefault.jpg",
    likes: "200",
    views: "5964",
    date: "Oct 30, 2021",
    category: "birdfact",
    bird: "cormorant",
    featured: false,
    channelName: "A Shot Of Wildlife",
    channelThumbnail:
      "https://yt3.ggpht.com/ytc/AKedOLQ2Ep34nxfT1syRc7euHG--7NTtZBRFSkBPrVdP=s176-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UCZ4FD_GqvrpAWVlyjLFaMyQ",
    subscribers: "7.16K",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "9B5l8l_IZCg",
    title: "Things you need to know about MAGPIES!",
    youtubeID: "9B5l8l_IZCg",
    videoLength: "4:40",
    videoThumbnail: "https://i.ytimg.com/vi/9B5l8l_IZCg/hqdefault.jpg",
    likes: "1.4K",
    views: "54.2K",
    date: "May 27, 2021",
    category: "birdfact",
    bird: "magpie",
    featured: false,
    channelName: "A Shot Of Wildlife",
    channelThumbnail:
      "https://yt3.ggpht.com/ytc/AKedOLQ2Ep34nxfT1syRc7euHG--7NTtZBRFSkBPrVdP=s176-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UCZ4FD_GqvrpAWVlyjLFaMyQ",
    subscribers: "7.16K",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

/**
 * This handler returns the videos.
 * send GET Request at /videos
 * */
router.get("/videos", (req, res) => {
  const shuffledVideos = videos.sort(() => Math.random() - 0.5);
  return res.status(200).json(shuffledVideos);
});

/**
 * This handler returns the categories.
 * send GET Request at /categories
 * */
router.get("/categories", (req, res) => res.status(200).json(categories));

export { router as videoRoutes };
