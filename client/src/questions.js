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
    storyTitle: `Filling up the rocket`,
    storySubtitle: `Arithmetic Operators`,
    storyText: [
      {
        text: `We are nearly ready to blast off from Earth and visit the Moon, but first we need to calculate how much fuel we will need for our journey. Luckily, computers are basically very powerful calculators, and DIANE-1000 is no exception. You can ask DIANE-1000 to add numbers like this:`,
      },
      { text: `2 + 2` },
      { text: `Or subtract:` },
      { text: `4 - 2` },
      { text: 'Or even multiply and divide:' },
      { text: `4 * 4` },
      { text: `4 / 4` }
    ],
    questionText: ``,
    answerOptions: [
      { answerText: `fuel = 100 * 2`, isCorrect: true },
      { answerText: `fuel = plant_based_fuel`, isCorrect: false },
      { answerText: `fuel = 50 + 50`, isCorrect: false },
      { answerText: `fuel = 100/2`, isCorrect: false },
    ],
  },

  {
    storyTitle: `Blast off!`,
    storySubtitle: `Arithmetic Operators and variables`,
    storyText: [
      {
        text: `We just calculated how much fuel we needed for our journey and added it to a variable called fuel. On the launchpad fuel is set to the value of 200 ( fuel = 100 * 2 ), but of course we burn up fuel during blast off and exiting the earth’s atmosphere. To help us keep track of how much fuel we have left, DIANE-1000 is able to change the value of the value of fuel like this:`,
      },
      { text: `fuel = fuel - 20` },
      {
        text: `This command will set the fuel total to 20 units less than the initial value! You can also add fuel like this:`,
      },
      { text: `fuel = fuel + 20` },
    ],
    questionText: `It takes 50 units of fuel to exit the earth's atmosphere. Which code will calculate how much fuel is in our tanks once we are in space ?`,
    answerOptions: [
      { answerText: `fuel = fuel + 50`, isCorrect: false },
      { answerText: `fuel = fuel - 50`, isCorrect: true },
      { answerText: `fuel = 150`, isCorrect: false },
      { answerText: `fuel - 50`, isCorrect: false },
    ],
  },

  {
    storyTitle: `In space no-one can eat ice cream`,
    storySubtitle: `Data types`,
    storyText: [
      {
        text: `DIANE-1000 doesn’t just fly the rocket ship, but also takes care of the astronauts on board (the commander, the scientist, the flight engineer and you!) , including their meals.`,
      },
      { text: `When you want to give the computer a number, you do it like this:` },
      {
        text: `42`,
      },
      { text: `If you put quotation marks around something - like “42” - the computer does not treat the value as a number, but like a word (or what the computer would call a string, but don’t worry about this yet). The computer can only make calculations with numbers, so make sure you enter them correctly or you might not get your dinner!` },
    ],
    questionText: `How would you tell the computer how many astronauts are on board so that it can prepare the correct number of meals?`,
    answerOptions: [
      { answerText: `“4”`, isCorrect: false },
      { answerText: `“four”`, isCorrect: false },
      { answerText: `4`, isCorrect: true },
      { answerText: `4/4`, isCorrect: false },
    ],
  },
  {
    storyTitle: `Landing on the moon!`,
    storySubtitle: `Assigning correct datatype to variables `,
    storyText: [
      {
        text: `We have arrived in orbit around the moon. Our next task is to find somewhere to land safely.`,
      },
      {
        text: `Landing zones can only be identified with the use of numbers with a decimal point. These kind of numbers are recognised by DIANE-1000 as float numbers. This will help guide the computer to the sector which will provide a safe landing zone. To instruct the computer to land safely we need to assign the correct sector number to the landing_zone variable. `,
      },
    ],
    questionText: `We know our safe landing zone is located at sector 1.5 on the dark side of the moon. Which line of code will identify our safe landing zone ?`,
    answerOptions: [
      { answerText: `landing_zone = 15`, isCorrect: false },
      { answerText: `landing_zone = 1.5 `, isCorrect: true },
      { answerText: `landing_zone = “1.5”`, isCorrect: false },
      { answerText: `land at 1.5`, isCorrect: false },
    ],
  },
   {
    storyTitle: `Exploring the Moon`,
    storySubtitle: `Comparison operators`,
    storyText: [
      {
        text: `You have probably noticed that DIANE-1000 assigns values to things with an equals sign, like this:`,
      },
      { text: `destination = “Moon”` },
      {
        text: `landing_zone = 1.5`,
      },
      { text: `What if we want to check if something is the same as something else? For example, what if we wanted to check that the landing zone was set to the correct sector? The following code will give you the answer:` },
      { text: `landing_zone == 1.5` },
      { text: `As we set the landing zone to 1.5, the computer will say ‘true’. If we entered landing_zone == 2.5 (or anything that isn’t 1.5) the computer will say ‘false’.` },
    ],
    questionText: `This is our astronauts' first time on the moon. To understand what it is made of we need to collect samples and give them to our computer to process. Which instruction would the computer display true if the sample was cheese ?`,
    answerOptions: [
      { answerText: `sample == “cheese”`, isCorrect: true },
      { answerText: `sample = “cheese”`, isCorrect: false },
      { answerText: `sample == sample`, isCorrect: false },
      { answerText: `sample + “cheese”`, isCorrect: false },
    ],
  },

  //  {
  //   storyTitle: ``,
  //   storySubtitle: ``,
  //   storyText: [
  //     {
  //       text: ``,
  //     },
  //     { text: `` },
  //     {
  //       text: ``,
  //     },
  //     { text: `` },
  //   ],
  //   questionText: ``,
  //   answerOptions: [
  //     { answerText: ``, isCorrect: true },
  //     { answerText: ``, isCorrect: false },
  //     { answerText: ``, isCorrect: false },
  //     { answerText: ``, isCorrect: false },
  //   ],
  // },
];
