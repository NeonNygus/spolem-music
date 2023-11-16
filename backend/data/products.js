import { formats } from "../models/productModel.js";
import { genres } from "../models/productModel.js";

const products = [
  {
    title: "Electronic Music",
    format: formats[3],
    genre: [genres[2], genres[10]],
    year: 1981,
    country: "UK",
    description: "Bright electronic themes / Abstract atmosphere",
    tracklist: [
      {
        trackName: "Whirlwind",
        trackLength: 194,
        trackArtist: "Arik Rodich",
      },
      {
        trackName: "Urban Clearway",
        trackLength: 261,
        trackArtist: "Geoff Downes",
      },
      {
        trackName: "Electronique",
        trackLength: 131,
        trackArtist: "Kaleth / Lawrence / Thomas",
      },
      {
        trackName: "Denburn",
        trackLength: 135,
        trackArtist: "Steve Everitt",
      },
      {
        trackName: "Diamond",
        trackLength: 118,
        trackArtist: "Painter / Jenkins",
      },
      {
        trackName: "Proton",
        trackLength: 89,
        trackArtist: "Geoff Leach",
      },
      {
        trackName: "Solo Flight",
        trackLength: 53,
        trackArtist: "Tony Sadler",
      },
      {
        trackName: "High Energy",
        trackLength: 60,
        trackArtist: "Downes / Jardim / Jardim / Blades",
      },
      {
        trackName: "Meteorite",
        trackLength: 32,
        trackArtist: "K. Kovach",
      },
      {
        trackName: "Switch On",
        trackLength: 30,
        trackArtist: "K. Kovach",
      },
      {
        trackName: "Night Owl",
        trackLength: 30,
        trackArtist: "K. Kovach",
      },
      {
        trackName: "Starburst",
        trackLength: 30,
        trackArtist: "Robin Lumley",
      },
      {
        trackName: "Airstream",
        trackLength: 30,
        trackArtist: "Ken Elliot",
      },
      {
        trackName: "Open Beat",
        trackLength: 30,
        trackArtist: "Ken Elliot",
      },
      {
        trackName: "Teleprint",
        trackLength: 16,
        trackArtist: "Adrian Lee",
      },
      {
        trackName: "Hi-Tech",
        trackLength: 30,
        trackArtist: "Painter / Jenkins",
      },
      {
        trackName: "Abstract Atmospheric",
        trackLength: 99,
        trackArtist: "Anthony Phillips",
      },
      {
        trackName: "Air",
        trackLength: 123,
        trackArtist: "Geoff Leach",
      },
      {
        trackName: "Alpha Waves",
        trackLength: 152,
        trackArtist: "Painter / Jenkins",
      },
      {
        trackName: "Ice",
        trackLength: 112,
        trackArtist: "Anthony Phillips",
      },
      {
        trackName: "Deep Water",
        trackLength: 129,
        trackArtist: "Geoff Leach",
      },
      {
        trackName: "Fire",
        trackLength: 184,
        trackArtist: "Joji Hirota",
      },
      {
        trackName: "Ebb Tide",
        trackLength: 94,
        trackArtist: "Steve Everitt",
      },
      {
        trackName: "Arctic Waste",
        trackLength: 34,
        trackArtist: "Anthony Phillips",
      },
      {
        trackName: "Arctic Waste (B)",
        trackLength: 34,
        trackArtist: "Anthony Phillips",
      },
      {
        trackName: "Orbit",
        trackLength: 45,
        trackArtist: "Adrian Lee",
      },
      {
        trackName: "Spider's Web",
        trackLength: 45,
        trackArtist: "Geoff Downes",
      },
      {
        trackName: "Gliding",
        trackLength: 67,
        trackArtist: "Anthony Phillips",
      },
    ],
    label: "Atmosphere Music Library",
    catalogueNum: "ATMOS001",
    coverImage: "/images/1-electronic_music.jpg",
    previewMusic: "/tracks/1-electronic_music.mp3",
    countInStock: 3,
    price: 89,
  },
  {
    title: "Industry; Tension",
    format: formats[3],
    genre: [genres[2], genres[10]],
    year: 1981,
    country: "UK",
    description: "Machinery, technology, computers / Tension, mystery",
    tracklist: [
      {
        trackName: "Satanic Mills",
        trackLength: 141,
        trackArtist: "",
      },
      {
        trackName: "Machine",
        trackLength: 190,
        trackArtist: "",
      },
      {
        trackName: "Mechanoid",
        trackLength: 136,
        trackArtist: "",
      },
      {
        trackName: "Moleculum",
        trackLength: 129,
        trackArtist: "",
      },
      {
        trackName: "Fantastic Voyage",
        trackLength: 153,
        trackArtist: "",
      },
      {
        trackName: "Fantastic Voyage",
        trackLength: 57,
        trackArtist: "",
      },
      {
        trackName: "Fortran",
        trackLength: 95,
        trackArtist: "",
      },
      {
        trackName: "Read Out",
        trackLength: 82,
        trackArtist: "",
      },
      {
        trackName: "Dramatic Break 1",
        trackLength: 49,
        trackArtist: "",
      },
      {
        trackName: "Dramatic Break 3",
        trackLength: 28,
        trackArtist: "",
      },
      {
        trackName: "Dramatic Opening",
        trackLength: 30,
        trackArtist: "",
      },
      {
        trackName: "Start",
        trackLength: 30,
        trackArtist: "",
      },
      {
        trackName: "Hi-Tech",
        trackLength: 30,
        trackArtist: "",
      },
      {
        trackName: "Light Beam",
        trackLength: 28,
        trackArtist: "",
      },
      {
        trackName: "Power",
        trackLength: 30,
        trackArtist: "",
      },
      {
        trackName: "Electron",
        trackLength: 167,
        trackArtist: "",
      },
      {
        trackName: "Mysterion",
        trackLength: 178,
        trackArtist: "",
      },
      {
        trackName: "Sunken Cathedral's Hymn (A)",
        trackLength: 137,
        trackArtist: "",
      },
      {
        trackName: "Sunken Cathedral's Hymn (B)",
        trackLength: 37,
        trackArtist: "",
      },
      {
        trackName: "Dark Nights",
        trackLength: 115,
        trackArtist: "",
      },
      {
        trackName: "Horrorscope",
        trackLength: 74,
        trackArtist: "",
      },
      {
        trackName: "Twa Brigs",
        trackLength: 111,
        trackArtist: "",
      },
      {
        trackName: "Other Worlds",
        trackLength: 100,
        trackArtist: "",
      },
      {
        trackName: "Macabre",
        trackLength: 45,
        trackArtist: "",
      },
      {
        trackName: "Funeral",
        trackLength: 45,
        trackArtist: "",
      },
      {
        trackName: "Aftermath",
        trackLength: 45,
        trackArtist: "",
      },
      {
        trackName: "Re-Emerge",
        trackLength: 36,
        trackArtist: "",
      },
      {
        trackName: "Tension Beat",
        trackLength: 43,
        trackArtist: "",
      },
      {
        trackName: "Metamorphosis",
        trackLength: 60,
        trackArtist: "",
      },
    ],
    label: "Atmosphere Music Library",
    catalogueNum: "ATMOS003",
    coverImage: "/images/2-industry_tension.jpg",
    previewMusic: "/tracks/2-industry_tension.mp3",
    countInStock: 2,
    price: 109,
  },
  {
    title: "Deeper Mysteries",
    artist: ["Anthony Phillips", "Geoff Leach"],
    format: formats[3],
    genre: [genres[2], genres[10]],
    country: "UK",
    description: "Atmospheric themes & Abstract effect music",
    tracklist: [
      {
        trackName: "Light Reflection",
        trackLength: 174,
        trackArtist: "Anthony Phillips",
      },
      {
        trackName: "Time-Lapse",
        trackLength: 168,
        trackArtist: "Anthony Phillips",
      },
      {
        trackName: "Mirage",
        trackLength: 135,
        trackArtist: "Anthony Phillips",
      },
      {
        trackName: "Icicles",
        trackLength: 116,
        trackArtist: "Anthony Phillips",
      },
      {
        trackName: "Caves",
        trackLength: 167,
        trackArtist: "Anthony Phillips",
      },
      {
        trackName: "Rapids",
        trackLength: 196,
        trackArtist: "Anthony Phillips",
      },
      {
        trackName: "New Dawn",
        trackLength: 204,
        trackArtist: "Anthony Phillips",
      },
      {
        trackName: "Majestic",
        trackLength: 162,
        trackArtist: "Anthony Phillips",
      },
      {
        trackName: "Dramatic Theme",
        trackLength: 114,
        trackArtist: "Geoff Leach",
      },
      {
        trackName: "Space Theme",
        trackLength: 116,
        trackArtist: "Geoff Leach",
      },
      {
        trackName: "Red",
        trackLength: 276,
        trackArtist: "Geoff Leach",
      },
      {
        trackName: "Unknown Soldier",
        trackLength: 160,
        trackArtist: "Geoff Leach",
      },
      {
        trackName: "Antarctica",
        trackLength: 114,
        trackArtist: "Geoff Leach",
      },
      {
        trackName: "Countdown",
        trackLength: 150,
        trackArtist: "Geoff Leach",
      },
      {
        trackName: "Glade",
        trackLength: 125,
        trackArtist: "Geoff Leach",
      },
      {
        trackName: "Critical Mass",
        trackLength: 85,
        trackArtist: "Geoff Leach",
      },
    ],
    label: "Atmosphere Music Library",
    catalogueNum: "ATMOS011",
    coverImage: "/images/3-deeper_mysteries.jpg",
    previewMusic: "/tracks/3-deeper_mysteries.mp3",
    countInStock: 3,
    price: 113,
  },
  {
    title: "Jingles 2 Dance And Disorder",
    format: formats[3],
    genre: [genres[2], genres[10]],
    country: "UK",
    description: "Dance and disorder",
    tracklist: [
      {
        trackName: "Sentinel ('30)",
        trackLength: 30,
      },
      {
        trackName: "Sentinel ('60)",
        trackLength: 60,
      },
      {
        trackName: "Sound (Full)",
        trackLength: 60,
      },
      {
        trackName: "Sound (Simpler Mix)",
        trackLength: 60,
      },
      {
        trackName: "Sound",
        trackLength: 30,
      },
      {
        trackName: "Look Sharp! ('60)",
        trackLength: 60,
      },
      {
        trackName: "Look Sharp! ('30)",
        trackLength: 29,
      },
      {
        trackName: "Hip Hop",
        trackLength: 29,
      },
      {
        trackName: "Scratch",
        trackLength: 29,
      },
      {
        trackName: "Zoom",
        trackLength: 29,
      },
      {
        trackName: "Jetstream",
        trackLength: 29,
      },
      {
        trackName: "High Life",
        trackLength: 28,
      },
      {
        trackName: "Back Up",
        trackLength: 30,
      },
      {
        trackName: "March Of The Ants",
        trackLength: 30,
      },
      {
        trackName: "Whipcracker",
        trackLength: 30,
      },
      {
        trackName: "Transmission",
        trackLength: 30,
      },
      {
        trackName: "Zaptrack",
        trackLength: 30,
      },
      {
        trackName: "Car ('60 Without Intro)",
        trackLength: 78,
      },
      {
        trackName: "Car (No FX)",
        trackLength: 60,
      },
      {
        trackName: "Car",
        trackLength: 30,
      },
      {
        trackName: "Metal (Full)",
        trackLength: 60,
      },
      {
        trackName: "Metal (Simpler Mix)",
        trackLength: 60,
      },
      {
        trackName: "Metal",
        trackLength: 30,
      },
      {
        trackName: "War Cry",
        trackLength: 28,
      },
      {
        trackName: "Spectacular 2",
        trackLength: 30,
      },
      {
        trackName: "Atomiser",
        trackLength: 30,
      },
      {
        trackName: "Reggae",
        trackLength: 30,
      },
      {
        trackName: "Rap",
        trackLength: 30,
      },
      {
        trackName: "Breakdance (Dance)",
        trackLength: 194,
      },
      {
        trackName: "Breakdance ('60)",
        trackLength: 60,
      },
      {
        trackName: "Breakdance ('30)",
        trackLength: 30,
      },
      {
        trackName: "Sentinel",
        trackLength: 163,
      },
      {
        trackName: "Soul Train",
        trackLength: 137,
      },
      {
        trackName: "To The Limit",
        trackLength: 137,
      },
      {
        trackName: "Damaged",
        trackLength: 221,
      },
      {
        trackName: "Damaged ('30)",
        trackLength: 30,
      },
      {
        trackName: "Sleep / Dream",
        trackLength: 160,
      },
      {
        trackName: "Nightwalk",
        trackLength: 152,
      },
    ],
    label: "Atmosphere Music Library",
    catalogueNum: "ATMOS014",
    coverImage: "/images/4-jingles_2_dance_and_disorder.jpg",
    previewMusic: "/tracks/4-jingles_2_dance_and_disorder.mp3",
    countInStock: 4,
    price: 95,
  },
  {
    title: "Ethereal (Powerful Atmospheric Themes)",
    artist: ["T. Sadler / G. Sadler", "Jan Pulsford"],
    format: formats[3],
    genre: [genres[2], genres[10]],
    country: "UK",
    description: "Powerful atmospheric themes",
    tracklist: [
      {
        trackName: "Ascension 1",
        trackLength: 163,
        trackArtist: "T. Sadler / G. Sadler",
      },
      {
        trackName: "Ascension 2",
        trackLength: 163,
        trackArtist: "T. Sadler / G. Sadler",
      },
      {
        trackName: "Ascension 3",
        trackLength: 30,
        trackArtist: "T. Sadler / G. Sadler",
      },
      {
        trackName: "Awakening 1",
        trackLength: 120,
        trackArtist: "T. Sadler / G. Sadler",
      },
      {
        trackName: "Awakening 2",
        trackLength: 120,
        trackArtist: "T. Sadler / G. Sadler",
      },
      {
        trackName: "Awakening 3",
        trackLength: 120,
        trackArtist: "T. Sadler / G. Sadler",
      },
      {
        trackName: "Awakening 4",
        trackLength: 120,
        trackArtist: "T. Sadler / G. Sadler",
      },
      {
        trackName: "Time Zone 1",
        trackLength: 145,
        trackArtist: "T. Sadler / G. Sadler",
      },
      {
        trackName: "Time Zone 2",
        trackLength: 145,
        trackArtist: "T. Sadler / G. Sadler",
      },
      {
        trackName: "Time Zone 3",
        trackLength: 80,
        trackArtist: "T. Sadler / G. Sadler",
      },
      {
        trackName: "Time Zone 4",
        trackLength: 145,
        trackArtist: "T. Sadler / G. Sadler",
      },
      {
        trackName: "Time Zone 5",
        trackLength: 30,
        trackArtist: "T. Sadler / G. Sadler",
      },
      {
        trackName: "Reflections I",
        trackLength: 70,
        trackArtist: "Jan Pulsford",
      },
      {
        trackName: "Reflections II",
        trackLength: 70,
        trackArtist: "Jan Pulsford",
      },
      {
        trackName: "Reflections III",
        trackLength: 70,
        trackArtist: "Jan Pulsford",
      },
      {
        trackName: "Etheral",
        trackLength: 96,
        trackArtist: "Jan Pulsford",
      },
      {
        trackName: "Light Is Knowledge",
        trackLength: 195,
        trackArtist: "Jan Pulsford",
      },
      {
        trackName: "Gives You (No Drums)",
        trackLength: 140,
        trackArtist: "Jan Pulsford",
      },
      {
        trackName: "Gives You (With Drums)",
        trackLength: 140,
        trackArtist: "Jan Pulsford",
      },
      {
        trackName: "Gives You",
        trackLength: 12,
        trackArtist: "Jan Pulsford",
      },
      {
        trackName: "Voices I",
        trackLength: 30,
        trackArtist: "Jan Pulsford",
      },
      {
        trackName: "Voices II",
        trackLength: 46,
        trackArtist: "Jan Pulsford",
      },
      {
        trackName: "Voices III",
        trackLength: 54,
        trackArtist: "Jan Pulsford",
      },
      {
        trackName: "Gamesmanshift",
        trackLength: 130,
        trackArtist: "Steve Everitt",
      },
    ],
    label: "Atmosphere Music Library",
    catalogueNum: "ATMOS015",
    coverImage: "/images/5-ethereal-powerful-atmospheric-themes.jpg",
    previewMusic: "/tracks/5-ethereal-powerful-atmospheric-themes.mp3",
    countInStock: 1,
    price: 99,
  },
];

export default products;
