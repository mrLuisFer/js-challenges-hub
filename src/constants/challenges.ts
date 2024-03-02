import { Challenge } from "../components/Dashboard/ChallengeCard";

export enum Levels {
  junior = "junior",
  intermediate = "intermediate",
  newbie = "newbie",
  advanced = "advanced",
}

export const tags = {
  html: "HTML",
  css: "CSS",
  js: "JS",
};

export type Level = `${Levels}`;

export const challengesInitialState: Challenge[] = [
  {
    title: "Age Calculator",
    description:
      "This challenge is designed to sharpen your JavaScript and form validation skills. Working with dates in JavaScript can be tricky, so this will be a nice test!",
    tags: [tags.html, tags.css, tags.js],
    level: Levels.junior,
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/jmzygkuazktqtg2akkkx.jpg",
    route: "/age-calculator",
  },
  {
    title: "Interactive Comments Section",
    description:
      "This is project will put your JavaScript skills to the test. We provide a JSON file to pull the data, but it's also a perfect project to build as a full-stack CRUD app!",
    tags: [tags.html, tags.css, tags.js],
    level: Levels.intermediate,
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/v9wskl4mnbt5gbxm4o2r.jpg",
    route: "/interactive-comments",
  },
  {
    title: "QR code component",
    description:
      "A perfect first challenge if you are new to HTML and CSS. The card layout does not shift, so it is ideal if you have not learned about building responsive layouts yet.",
    tags: [tags.html, tags.css],
    level: Levels.newbie,
    route: "/qr-card",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/cybxdhr4wewlscvco9dd.jpg",
  },
];
