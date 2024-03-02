import { Challenge } from "../../components/ChallengeCard";

export const challengesInitialState: Challenge[] = [
  {
    title: "Age Calculator",
    description:
      "This challenge is designed to sharpen your JavaScript and form validation skills. Working with dates in JavaScript can be tricky, so this will be a nice test!",
    tags: ["HTML", "CSS", "JS"],
    level: "junior",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/jmzygkuazktqtg2akkkx.jpg",
    route: "/age-calculator",
  },
  {
    title: "Interactive Comments Section",
    description:
      "This is project will put your JavaScript skills to the test. We provide a JSON file to pull the data, but it's also a perfect project to build as a full-stack CRUD app!",
    tags: ["HTML", "CSS", "JS"],
    level: "intermediate",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/v9wskl4mnbt5gbxm4o2r.jpg",
    route: "/interactive-comments",
  },
];
