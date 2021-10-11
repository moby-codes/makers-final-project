export const questions = [
  {
    storyTitle: `Prepare for blast off`,
    storySubtitle: `Variable Assignment`,
    storyText: [
      {
        text: `Welcome to the space technology centre! Today you are going to be an astronaut. Your rocket ship has a computer called DIANE-1000. The computer is very powerful, but needs to be told where the ship is going. This can be done like this:`,
      },
      { text: `destination = “Mars”` },
      {
        text: `If we want to go somewhere else, we can change the destination like this:`,
      },
      { text: `destination = “Venus”` },
    ],
    questionText: `Now you know how to use the ship’s computer, can you program it for a voyage to the Moon? Click the correct answer!`,
    answerOptions: [
      { answerText: `destination = Moon `, isCorrect: false },
      { answerText: `destination is “Moon”`, isCorrect: false },
      { answerText: `destination = “Moon”`, isCorrect: true },
      { answerText: `destination > “Moon”`, isCorrect: false },
    ],
  },
  {
    storyTitle: ``,
    storySubtitle: ``,
    storyText: ``,
    questionText: ``,
    answerOptions: [
      { answerText: ``, isCorrect: true },
      { answerText: ``, isCorrect: false },
      { answerText: ``, isCorrect: false },
      { answerText: ``, isCorrect: false },
    ],
  },

  // {
  //   storyTitle: ``,
  //   storySubtitle: ``,
  //   storyText:
  //     ``,
  //   questionText: ``,
  //   answerOptions: [
  //     { answerText: ``, isCorrect: true },
  //     { answerText: ``, isCorrect: false },
  //     { answerText: ``, isCorrect: false },
  //     { answerText: ``, isCorrect: false },
  //   ],
  // },
];
