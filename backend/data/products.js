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
        trackLength: 314,
        trackArtist: "Arik Rodich",
      },
      {
        trackName: "Urban Clearway",
        trackLength: 421,
        trackArtist: "Geoff Downes",
      },
      {
        trackName: "Electronique",
        trackLength: 211,
        trackArtist: "Kaleth / Lawrence / Thomas",
      },
      {
        trackName: "Denburn",
        trackLength: 215,
        trackArtist: "Steve Everitt",
      },
      {
        trackName: "Diamond",
        trackLength: 158,
        trackArtist: "Painter / Jenkins",
      },
      {
        trackName: "Proton",
        trackLength: 129,
        trackArtist: "Geoff Leach",
      },
      {
        trackName: "Solo Flight",
        trackLength: 53,
        trackArtist: "Tony Sadler",
      },
      {
        trackName: "High Energy",
        trackLength: 100,
        trackArtist: "Downes / Jardim / Jardim / Blades",
      },
      {
        trackName: "Meterorite",
        trackLength: 32,
        trackArtist: "Kornelije Kovač",
      },
      {
        trackName: "Switch On",
        trackLength: 30,
        trackArtist: "Kornelije Kovač",
      },
      {
        trackName: "Night Owl",
        trackLength: 30,
        trackArtist: "Kornelije Kovač",
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
        trackLength: 139,
        trackArtist: "Anthony Phillips",
      },
      {
        trackName: "Air",
        trackLength: 203,
        trackArtist: "Geoff Leach",
      },
      {
        trackName: "Alpha Waves",
        trackLength: 232,
        trackArtist: "Painter / Jenkins",
      },
      {
        trackName: "Ice",
        trackLength: 152,
        trackArtist: "Anthony Phillips",
      },
      {
        trackName: "Deep Water",
        trackLength: 209,
        trackArtist: "Geoff Leach",
      },
      {
        trackName: "Fire",
        trackLength: 304,
        trackArtist: "Joji Hirota",
      },
      {
        trackName: "Ebb Tide",
        trackLength: 134,
        trackArtist: "Steve Everitt",
      },
      {
        trackName: "Arctic Waste (A)",
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
        trackLength: 107,
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
        trackLength: 221,
      },
      {
        trackName: "Machine",
        trackLength: 310,
      },
      {
        trackName: "Mechanoid",
        trackLength: 216,
      },
      {
        trackName: "Moleculum",
        trackLength: 209,
      },
      {
        trackName: "Fantastic Voyage (A)",
        trackLength: 233,
      },
      {
        trackName: "Fantastic Voyage (B)",
        trackLength: 57,
      },
      {
        trackName: "Fortran",
        trackLength: 135,
      },
      {
        trackName: "Read Out",
        trackLength: 122,
      },
      {
        trackName: "Dramatic Break 1",
        trackLength: 49,
      },
      {
        trackName: "Dramatic Break 3",
        trackLength: 28,
      },
      {
        trackName: "Dramatic Opening",
        trackLength: 30,
      },
      {
        trackName: "Start",
        trackLength: 30,
      },
      {
        trackName: "Hi-Tech",
        trackLength: 30,
      },
      {
        trackName: "Light Beam",
        trackLength: 28,
      },
      {
        trackName: "Power",
        trackLength: 30,
      },
      {
        trackName: "Electron",
        trackLength: 247,
      },
      {
        trackName: "Mysterion",
        trackLength: 258,
      },
      {
        trackName: "Sunken Cathedral's Hymn (A)",
        trackLength: 217,
      },
      {
        trackName: "Sunken Cathedral's Hymn (B)",
        trackLength: 37,
      },
      {
        trackName: "Dark Nights",
        trackLength: 155,
      },
      {
        trackName: "Horrorscope",
        trackLength: 114,
      },
      {
        trackName: "Twa Brigs",
        trackLength: 151,
      },
      {
        trackName: "Other Worlds",
        trackLength: 140,
      },
      {
        trackName: "Macabre",
        trackLength: 45,
      },
      {
        trackName: "Funeral",
        trackLength: 45,
      },
      {
        trackName: "Aftermath",
        trackLength: 45,
      },
      {
        trackName: "Re-Emerge",
        trackLength: 36,
      },
      {
        trackName: "Tension Beat",
        trackLength: 43,
      },
      {
        trackName: "Metamorphosis",
        trackLength: 100,
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
        trackLength: 254,
        trackArtist: "Anthony Phillips",
      },
      {
        trackName: "Time-Lapse",
        trackLength: 248,
        trackArtist: "Anthony Phillips",
      },
      {
        trackName: "Mirage",
        trackLength: 215,
        trackArtist: "Anthony Phillips",
      },
      {
        trackName: "Icicles",
        trackLength: 156,
        trackArtist: "Anthony Phillips",
      },
      {
        trackName: "Caves",
        trackLength: 247,
        trackArtist: "Anthony Phillips",
      },
      {
        trackName: "Rapids",
        trackLength: 316,
        trackArtist: "Anthony Phillips",
      },
      {
        trackName: "New Dawn",
        trackLength: 324,
        trackArtist: "Anthony Phillips",
      },
      {
        trackName: "Majestic",
        trackLength: 242,
        trackArtist: "Anthony Phillips",
      },
      {
        trackName: "Dramatic Theme",
        trackLength: 154,
        trackArtist: "Geoff Leach",
      },
      {
        trackName: "Space Theme",
        trackLength: 156,
        trackArtist: "Geoff Leach",
      },
      {
        trackName: "Red",
        trackLength: 436,
        trackArtist: "Geoff Leach",
      },
      {
        trackName: "Unknown Soldier",
        trackLength: 240,
        trackArtist: "Geoff Leach",
      },
      {
        trackName: "Antarctica",
        trackLength: 154,
        trackArtist: "Geoff Leach",
      },
      {
        trackName: "Countdown",
        trackLength: 230,
        trackArtist: "Geoff Leach",
      },
      {
        trackName: "Glade",
        trackLength: 205,
        trackArtist: "Geoff Leach",
      },
      {
        trackName: "Critical Mass",
        trackLength: 125,
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
        trackLength: 100,
      },
      {
        trackName: "Sound (Full)",
        trackLength: 100,
      },
      {
        trackName: "Sound (Simpler Mix)",
        trackLength: 100,
      },
      {
        trackName: "Sound",
        trackLength: 30,
      },
      {
        trackName: "Look Sharp! ('60)",
        trackLength: 100,
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
        trackLength: 118,
      },
      {
        trackName: "Car (No FX)",
        trackLength: 100,
      },
      {
        trackName: "Car",
        trackLength: 30,
      },
      {
        trackName: "Metal (Full)",
        trackLength: 100,
      },
      {
        trackName: "Metal (Simpler Mix)",
        trackLength: 100,
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
        trackLength: 314,
      },
      {
        trackName: "Breakdance ('60)",
        trackLength: 100,
      },
      {
        trackName: "Breakdance ('30)",
        trackLength: 30,
      },
      {
        trackName: "Sentinel",
        trackLength: 243,
      },
      {
        trackName: "Soul Train",
        trackLength: 217,
      },
      {
        trackName: "To The Limit",
        trackLength: 217,
      },
      {
        trackName: "Damaged",
        trackLength: 341,
      },
      {
        trackName: "Damaged	('30)",
        trackLength: 30,
      },
      {
        trackName: "Sleep / Dream",
        trackLength: 240,
      },
      {
        trackName: "Nightwalk",
        trackLength: 232,
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
        trackLength: 243,
        trackArtist: "T. Sadler / G. Sadler",
      },
      {
        trackName: "Ascension 2",
        trackLength: 243,
        trackArtist: "T. Sadler / G. Sadler",
      },
      {
        trackName: "Ascension 3",
        trackLength: 30,
        trackArtist: "T. Sadler / G. Sadler",
      },
      {
        trackName: "Awakening 1",
        trackLength: 200,
        trackArtist: "T. Sadler / G. Sadler",
      },
      {
        trackName: "Awakening 2",
        trackLength: 200,
        trackArtist: "T. Sadler / G. Sadler",
      },
      {
        trackName: "Awakening 3",
        trackLength: 200,
        trackArtist: "T. Sadler / G. Sadler",
      },
      {
        trackName: "Awakening 4",
        trackLength: 200,
        trackArtist: "T. Sadler / G. Sadler",
      },
      {
        trackName: "Time Zone 1",
        trackLength: 225,
        trackArtist: "T. Sadler / G. Sadler",
      },
      {
        trackName: "Time Zone 2",
        trackLength: 225,
        trackArtist: "T. Sadler / G. Sadler",
      },
      {
        trackName: "Time Zone 3",
        trackLength: 120,
        trackArtist: "T. Sadler / G. Sadler",
      },
      {
        trackName: "Time Zone 4",
        trackLength: 225,
        trackArtist: "T. Sadler / G. Sadler",
      },
      {
        trackName: "Time Zone 5",
        trackLength: 30,
        trackArtist: "T. Sadler / G. Sadler",
      },
      {
        trackName: "Reflections I",
        trackLength: 110,
        trackArtist: "Jan Pulsford",
      },
      {
        trackName: "Reflections II",
        trackLength: 110,
        trackArtist: "Jan Pulsford",
      },
      {
        trackName: "Reflections III",
        trackLength: 110,
        trackArtist: "Jan Pulsford",
      },
      {
        trackName: "Etheral",
        trackLength: 136,
        trackArtist: "Jan Pulsford",
      },
      {
        trackName: "Light Is Knowledge",
        trackLength: 315,
        trackArtist: "Jan Pulsford",
      },
      {
        trackName: "Gives You (No Drums)",
        trackLength: 220,
        trackArtist: "Jan Pulsford",
      },
      {
        trackName: "Gives You (With Drums)",
        trackLength: 220,
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
        trackLength: 210,
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
