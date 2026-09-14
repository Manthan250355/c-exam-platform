// Central question bank. sampleTests are shown to the student (Run Sample Test
// Cases / Test Cases tab). hiddenTests are used only when Submit is pressed,
// to compute a score, and are never sent to the frontend.

const STARTER = '#include <stdio.h>\n\nint main() {\n\n}\n';

const questions = [
  {
    id: 1,
    section: 'Sec-A',
    title: 'Add Two Integers',
    description:
      'Read two integers into two int variables and print their sum, showing how a variable is declared, assigned, and used in an expression.',
    inputFormat: 'The first line contains two integers a and b.',
    outputFormat: 'One integer — the sum of a and b.',
    constraints: '-10^6 <= a, b <= 10^6',
    starterCode: STARTER,
    sampleTests: [
      { input: '3 5', expectedOutput: '8' },
      { input: '10 20', expectedOutput: '30' },
      { input: '-5 10', expectedOutput: '5' },
    ],
    hiddenTests: [
      { input: '0 0', expectedOutput: '0' },
      { input: '1000000 -1000000', expectedOutput: '0' },
      { input: '-1000000 -1000000', expectedOutput: '-2000000' },
      { input: '999999 1', expectedOutput: '1000000' },
      { input: '-7 -8', expectedOutput: '-15' },
    ],
  },
  {
    id: 2,
    section: 'Sec-A',
    title: 'Calculate Rectangle Area',
    description:
      'Read the length and width of a rectangle as two integers and print its area.',
    inputFormat: 'The first line contains two integers: length and width.',
    outputFormat: 'One integer — the area (length * width).',
    constraints: '1 <= length, width <= 10^4',
    starterCode: STARTER,
    sampleTests: [
      { input: '5 4', expectedOutput: '20' },
      { input: '7 3', expectedOutput: '21' },
      { input: '1 1', expectedOutput: '1' },
    ],
    hiddenTests: [
      { input: '12 8', expectedOutput: '96' },
      { input: '100 100', expectedOutput: '10000' },
      { input: '6 7', expectedOutput: '42' },
      { input: '9 9', expectedOutput: '81' },
      { input: '2 500', expectedOutput: '1000' },
    ],
  },
  {
    id: 3,
    section: 'Sec-A',
    title: 'Check Even or Odd',
    description:
      'Read one integer n and print "Even" if it is divisible by 2, otherwise print "Odd".',
    inputFormat: 'The first line contains one integer n.',
    outputFormat: 'A single word: Even or Odd.',
    constraints: '-10^6 <= n <= 10^6',
    starterCode: STARTER,
    sampleTests: [
      { input: '4', expectedOutput: 'Even' },
      { input: '7', expectedOutput: 'Odd' },
      { input: '0', expectedOutput: 'Even' },
    ],
    hiddenTests: [
      { input: '-3', expectedOutput: 'Odd' },
      { input: '100', expectedOutput: 'Even' },
      { input: '-8', expectedOutput: 'Even' },
      { input: '1', expectedOutput: 'Odd' },
      { input: '999999', expectedOutput: 'Odd' },
    ],
  },
  {
    id: 4,
    section: 'Sec-A',
    title: 'Find Largest of Two Numbers',
    description:
      'Read two integers a and b and print the larger of the two. If they are equal, print that value.',
    inputFormat: 'The first line contains two integers a and b.',
    outputFormat: 'One integer — the larger of a and b.',
    constraints: '-10^6 <= a, b <= 10^6',
    starterCode: STARTER,
    sampleTests: [
      { input: '5 9', expectedOutput: '9' },
      { input: '10 3', expectedOutput: '10' },
      { input: '7 7', expectedOutput: '7' },
    ],
    hiddenTests: [
      { input: '-5 -9', expectedOutput: '-5' },
      { input: '0 5', expectedOutput: '5' },
      { input: '1000000 -1000000', expectedOutput: '1000000' },
      { input: '-1 -1', expectedOutput: '-1' },
      { input: '3 3', expectedOutput: '3' },
    ],
  },
  {
    id: 5,
    section: 'Sec-A',
    title: 'Calculate Simple Interest',
    description:
      'Read the principal P, rate of interest R, and time T (all as decimal numbers) and print the simple interest, computed as (P * R * T) / 100, formatted to exactly two decimal places.',
    inputFormat: 'The first line contains three numbers: P, R and T.',
    outputFormat: 'One number — the simple interest, printed with 2 decimal places.',
    constraints: '0 <= P, R, T <= 10^5',
    starterCode: STARTER,
    sampleTests: [
      { input: '1000 5 2', expectedOutput: '100.00' },
      { input: '5000 10 3', expectedOutput: '1500.00' },
      { input: '2000 7.5 4', expectedOutput: '600.00' },
    ],
    hiddenTests: [
      { input: '100 100 1', expectedOutput: '100.00' },
      { input: '12345 4 2', expectedOutput: '987.60' },
      { input: '0 5 10', expectedOutput: '0.00' },
      { input: '10000 2.5 5', expectedOutput: '1250.00' },
      { input: '1500 3 1', expectedOutput: '45.00' },
    ],
  },
];

function getPublicQuestions() {
  return questions.map(({ hiddenTests, ...rest }) => rest);
}

function getQuestionById(id) {
  return questions.find((q) => q.id === Number(id));
}

module.exports = { questions, getPublicQuestions, getQuestionById };
