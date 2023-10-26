import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@spolem.com",
    password: bcrypt.hashSync("1234", 10),
    isAdmin: true,
    isModerator: false,
  },
  {
    name: "Moderator",
    email: "moderator@spolem.com",
    password: bcrypt.hashSync("5678", 10),
    isAdmin: false,
    isModerator: true,
  },
  {
    name: "Valeriia Kakaoeva",
    email: "lalakakao@gmail.com",
    password: bcrypt.hashSync("budietmama", 10),
    isAdmin: false,
    isModerator: false,
  },
];

export default users;
