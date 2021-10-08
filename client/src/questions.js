export const questions = [
  {
    storyTitle: "Preparing for blast off",
    storySubtitle: "Assigning Variables",
    storyText: `Welcome to the space technology centre! Today you are going to become an astronaut. 
      Your rocket ship’s computer is called DIANE-1000. The computer is very powerful, but needs to be told where the ship is going. This can be done like this:
      destination = “Mars”
      If we want to go somewhere else, we can change the destination like this:
      destination = “Venus”`,
    questionText:
      "Now you know how to use the ship’s computer, can you program it for a voyage to the Moon? Click the correct answer!",
    answerOptions: [
      { answerText: `destination = Moon`, isCorrect: false },
      { answerText: `destination is "Moon"`, isCorrect: false },
      { answerText: `destination = "Moon"`, isCorrect: true },
      { answerText: `destination > "Moon"`, isCorrect: false },
    ],
  },
  {
    storyTitle: "Filling up the rocket",
    storySubtitle: "Arithmetic operators",
    storyText: `We are nearly ready to blast off from Earth and visit the Moon, but first we need to make some calculations to make sure we have all the fuel we will need for our journey. 
    Luckily, computers are basically very powerful calculators, and DIANE-1000 is no exception. You can tell her to add numbers like this:
	
    2 + 2
  
  Or subtract:
  
    4 - 2
  
  Or even multiply and divide:
  
    4 * 4 
    4 / 4`,
    questionText: `We have two fuel tanks which take 100 units of plant based rocket fuel.  Which code will calculate how much fuel we need to fill our tanks ?`,
    answerOptions: [
      { answerText: `fuel = 100 * 2`, isCorrect: true },
      { answerText: `fuel = plant_fuel - plant_fuel`, isCorrect: false },
      { answerText: `fuel = 50 + 50`, isCorrect: false },
      { answerText: `fuel = 100 / 2`, isCorrect: false },
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
];

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
