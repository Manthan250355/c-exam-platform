// Central question bank, split into independent sections (see `section` on
// each question). Sec-A and Sec-B are entirely separate exams in the frontend
// — the section picker screen loads only one section's questions at a time,
// so their timers, attempt tracking, and question numbering never mix.
//
// sampleTests are shown to the student (Run Sample Test Cases / Test Cases
// tab). hiddenTests are used only when Submit is pressed, to compute a score,
// and are never sent to the frontend.
//
// Sec-A (ids 1-105): generated programmatically; the trickiest categories
// (float formatting, Heron's formula, bitwise power-of-two, Armstrong/strong
// numbers, anagrams, multi-line array input) were cross-checked against real
// gcc output before being committed.
//
// Sec-B (ids 106-205): sourced from the user's "100 C Programming Practice
// Questions" PDF. Every sample input/output pair given in that PDF was
// reproduced exactly (pi=3.14 for circle problems, matching the PDF's own
// sample outputs); problems the PDF left underspecified (electricity bill
// slabs, grade thresholds, pass mark, temperature ranges, "number between
// range" bounds) use explicit rules stated in the question's own description
// so there's no ambiguity for the student. Trickiest logic (compound interest,
// triangle validity/type, calculator, patterns, Fibonacci, Armstrong) was also
// cross-checked against real gcc.

const questions = [
  {
    "id": 1,
    "section": "Sec-A",
    "title": "Add Two Integers",
    "description": "Read two integers into two int variables and print their sum, showing how a variable is declared, assigned, and used in an expression.",
    "inputFormat": "The first line contains two integers a and b.",
    "outputFormat": "One integer — the sum of a and b.",
    "constraints": "-10^6 <= a, b <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "3 5",
        "expectedOutput": "8"
      },
      {
        "input": "10 20",
        "expectedOutput": "30"
      },
      {
        "input": "-5 10",
        "expectedOutput": "5"
      }
    ],
    "hiddenTests": [
      {
        "input": "0 0",
        "expectedOutput": "0"
      },
      {
        "input": "1000000 -1000000",
        "expectedOutput": "0"
      },
      {
        "input": "-1000000 -1000000",
        "expectedOutput": "-2000000"
      },
      {
        "input": "999999 1",
        "expectedOutput": "1000000"
      },
      {
        "input": "-7 -8",
        "expectedOutput": "-15"
      }
    ]
  },
  {
    "id": 2,
    "section": "Sec-A",
    "title": "Calculate Rectangle Area",
    "description": "Read the length and width of a rectangle as two integers and print its area.",
    "inputFormat": "The first line contains two integers: length and width.",
    "outputFormat": "One integer — the area (length * width).",
    "constraints": "1 <= length, width <= 10^4",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5 4",
        "expectedOutput": "20"
      },
      {
        "input": "7 3",
        "expectedOutput": "21"
      },
      {
        "input": "1 1",
        "expectedOutput": "1"
      }
    ],
    "hiddenTests": [
      {
        "input": "12 8",
        "expectedOutput": "96"
      },
      {
        "input": "100 100",
        "expectedOutput": "10000"
      },
      {
        "input": "6 7",
        "expectedOutput": "42"
      },
      {
        "input": "9 9",
        "expectedOutput": "81"
      },
      {
        "input": "2 500",
        "expectedOutput": "1000"
      }
    ]
  },
  {
    "id": 3,
    "section": "Sec-A",
    "title": "Check Even or Odd",
    "description": "Read one integer n and print \"Even\" if it is divisible by 2, otherwise print \"Odd\".",
    "inputFormat": "The first line contains one integer n.",
    "outputFormat": "A single word: Even or Odd.",
    "constraints": "-10^6 <= n <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "4",
        "expectedOutput": "Even"
      },
      {
        "input": "7",
        "expectedOutput": "Odd"
      },
      {
        "input": "0",
        "expectedOutput": "Even"
      }
    ],
    "hiddenTests": [
      {
        "input": "-3",
        "expectedOutput": "Odd"
      },
      {
        "input": "100",
        "expectedOutput": "Even"
      },
      {
        "input": "-8",
        "expectedOutput": "Even"
      },
      {
        "input": "1",
        "expectedOutput": "Odd"
      },
      {
        "input": "999999",
        "expectedOutput": "Odd"
      }
    ]
  },
  {
    "id": 4,
    "section": "Sec-A",
    "title": "Find Largest of Two Numbers",
    "description": "Read two integers a and b and print the larger of the two. If they are equal, print that value.",
    "inputFormat": "The first line contains two integers a and b.",
    "outputFormat": "One integer — the larger of a and b.",
    "constraints": "-10^6 <= a, b <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5 9",
        "expectedOutput": "9"
      },
      {
        "input": "10 3",
        "expectedOutput": "10"
      },
      {
        "input": "7 7",
        "expectedOutput": "7"
      }
    ],
    "hiddenTests": [
      {
        "input": "-5 -9",
        "expectedOutput": "-5"
      },
      {
        "input": "0 5",
        "expectedOutput": "5"
      },
      {
        "input": "1000000 -1000000",
        "expectedOutput": "1000000"
      },
      {
        "input": "-1 -1",
        "expectedOutput": "-1"
      },
      {
        "input": "3 3",
        "expectedOutput": "3"
      }
    ]
  },
  {
    "id": 5,
    "section": "Sec-A",
    "title": "Calculate Simple Interest",
    "description": "Read the principal P, rate of interest R, and time T (all as decimal numbers) and print the simple interest, computed as (P * R * T) / 100, formatted to exactly two decimal places.",
    "inputFormat": "The first line contains three numbers: P, R and T.",
    "outputFormat": "One number — the simple interest, printed with 2 decimal places.",
    "constraints": "0 <= P, R, T <= 10^5",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "1000 5 2",
        "expectedOutput": "100.00"
      },
      {
        "input": "5000 10 3",
        "expectedOutput": "1500.00"
      },
      {
        "input": "2000 7.5 4",
        "expectedOutput": "600.00"
      }
    ],
    "hiddenTests": [
      {
        "input": "100 100 1",
        "expectedOutput": "100.00"
      },
      {
        "input": "12345 4 2",
        "expectedOutput": "987.60"
      },
      {
        "input": "0 5 10",
        "expectedOutput": "0.00"
      },
      {
        "input": "10000 2.5 5",
        "expectedOutput": "1250.00"
      },
      {
        "input": "1500 3 1",
        "expectedOutput": "45.00"
      }
    ]
  },
  {
    "id": 6,
    "section": "Sec-A",
    "title": "Subtract Two Integers",
    "description": "Read two integers a and b and print a - b.",
    "inputFormat": "One line with two integers a and b.",
    "outputFormat": "One integer — a minus b.",
    "constraints": "-10^6 <= a, b <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "10 4",
        "expectedOutput": "6"
      },
      {
        "input": "0 0",
        "expectedOutput": "0"
      },
      {
        "input": "-5 5",
        "expectedOutput": "-10"
      }
    ],
    "hiddenTests": [
      {
        "input": "100 250",
        "expectedOutput": "-150"
      },
      {
        "input": "7 7",
        "expectedOutput": "0"
      },
      {
        "input": "-8 -3",
        "expectedOutput": "-5"
      },
      {
        "input": "1000000 1",
        "expectedOutput": "999999"
      },
      {
        "input": "-1000000 -1000000",
        "expectedOutput": "0"
      }
    ]
  },
  {
    "id": 7,
    "section": "Sec-A",
    "title": "Multiply Two Integers",
    "description": "Read two integers a and b and print their product.",
    "inputFormat": "One line with two integers a and b.",
    "outputFormat": "One integer — a * b.",
    "constraints": "-10^4 <= a, b <= 10^4",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "6 7",
        "expectedOutput": "42"
      },
      {
        "input": "0 500",
        "expectedOutput": "0"
      },
      {
        "input": "-3 9",
        "expectedOutput": "-27"
      }
    ],
    "hiddenTests": [
      {
        "input": "12 12",
        "expectedOutput": "144"
      },
      {
        "input": "-1 -1",
        "expectedOutput": "1"
      },
      {
        "input": "100 100",
        "expectedOutput": "10000"
      },
      {
        "input": "9999 1",
        "expectedOutput": "9999"
      },
      {
        "input": "-50 20",
        "expectedOutput": "-1000"
      }
    ]
  },
  {
    "id": 8,
    "section": "Sec-A",
    "title": "Divide Two Integers",
    "description": "Read two integers a and b (b != 0) and print the quotient a / b using integer (truncating) division.",
    "inputFormat": "One line with two integers a and b.",
    "outputFormat": "One integer — a / b, truncated toward zero.",
    "constraints": "-10^6 <= a, b <= 10^6, b != 0",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "10 2",
        "expectedOutput": "5"
      },
      {
        "input": "7 2",
        "expectedOutput": "3"
      },
      {
        "input": "-7 2",
        "expectedOutput": "-3"
      }
    ],
    "hiddenTests": [
      {
        "input": "7 -2",
        "expectedOutput": "-3"
      },
      {
        "input": "100 3",
        "expectedOutput": "33"
      },
      {
        "input": "-100 -3",
        "expectedOutput": "33"
      },
      {
        "input": "5 5",
        "expectedOutput": "1"
      },
      {
        "input": "0 9",
        "expectedOutput": "0"
      }
    ]
  },
  {
    "id": 9,
    "section": "Sec-A",
    "title": "Modulo of Two Integers",
    "description": "Read two integers a and b (b != 0) and print a % b, following C's sign convention (result takes the sign of a).",
    "inputFormat": "One line with two integers a and b.",
    "outputFormat": "One integer — a % b.",
    "constraints": "-10^4 <= a, b <= 10^4, b != 0",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "10 3",
        "expectedOutput": "1"
      },
      {
        "input": "-10 3",
        "expectedOutput": "-1"
      },
      {
        "input": "10 -3",
        "expectedOutput": "1"
      }
    ],
    "hiddenTests": [
      {
        "input": "7 7",
        "expectedOutput": "0"
      },
      {
        "input": "0 5",
        "expectedOutput": "0"
      },
      {
        "input": "25 4",
        "expectedOutput": "1"
      },
      {
        "input": "-17 5",
        "expectedOutput": "-2"
      },
      {
        "input": "100 9",
        "expectedOutput": "1"
      }
    ]
  },
  {
    "id": 10,
    "section": "Sec-A",
    "title": "Average of Two Integers",
    "description": "Read two integers a and b and print their average using integer (truncating) division.",
    "inputFormat": "One line with two integers a and b.",
    "outputFormat": "One integer — (a + b) / 2, truncated.",
    "constraints": "-10^5 <= a, b <= 10^5",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "4 6",
        "expectedOutput": "5"
      },
      {
        "input": "5 6",
        "expectedOutput": "5"
      },
      {
        "input": "-4 4",
        "expectedOutput": "0"
      }
    ],
    "hiddenTests": [
      {
        "input": "-5 -6",
        "expectedOutput": "-5"
      },
      {
        "input": "100 1",
        "expectedOutput": "50"
      },
      {
        "input": "0 0",
        "expectedOutput": "0"
      },
      {
        "input": "7 3",
        "expectedOutput": "5"
      },
      {
        "input": "-9 8",
        "expectedOutput": "0"
      }
    ]
  },
  {
    "id": 11,
    "section": "Sec-A",
    "title": "Average of Three Integers",
    "description": "Read three integers a, b, c and print their average using integer (truncating) division.",
    "inputFormat": "One line with three integers a, b, c.",
    "outputFormat": "One integer — (a+b+c)/3, truncated.",
    "constraints": "-10^4 <= a, b, c <= 10^4",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "3 6 9",
        "expectedOutput": "6"
      },
      {
        "input": "1 2 2",
        "expectedOutput": "1"
      },
      {
        "input": "-3 3 0",
        "expectedOutput": "0"
      }
    ],
    "hiddenTests": [
      {
        "input": "10 10 10",
        "expectedOutput": "10"
      },
      {
        "input": "-1 -2 -3",
        "expectedOutput": "-2"
      },
      {
        "input": "7 8 9",
        "expectedOutput": "8"
      },
      {
        "input": "0 0 1",
        "expectedOutput": "0"
      },
      {
        "input": "100 200 3",
        "expectedOutput": "101"
      }
    ]
  },
  {
    "id": 12,
    "section": "Sec-A",
    "title": "Power of a Number",
    "description": "Read an integer base and a non-negative integer exp and print base raised to the power exp.",
    "inputFormat": "One line with two integers: base and exp.",
    "outputFormat": "One integer — base^exp.",
    "constraints": "-10 <= base <= 10, 0 <= exp <= 5",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "2 3",
        "expectedOutput": "8"
      },
      {
        "input": "5 0",
        "expectedOutput": "1"
      },
      {
        "input": "-2 3",
        "expectedOutput": "-8"
      }
    ],
    "hiddenTests": [
      {
        "input": "3 4",
        "expectedOutput": "81"
      },
      {
        "input": "10 5",
        "expectedOutput": "100000"
      },
      {
        "input": "1 5",
        "expectedOutput": "1"
      },
      {
        "input": "-3 2",
        "expectedOutput": "9"
      },
      {
        "input": "0 4",
        "expectedOutput": "0"
      }
    ]
  },
  {
    "id": 13,
    "section": "Sec-A",
    "title": "Absolute Difference of Two Integers",
    "description": "Read two integers a and b and print the absolute value of their difference.",
    "inputFormat": "One line with two integers a and b.",
    "outputFormat": "One integer — |a - b|.",
    "constraints": "-10^6 <= a, b <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "10 4",
        "expectedOutput": "6"
      },
      {
        "input": "4 10",
        "expectedOutput": "6"
      },
      {
        "input": "-5 5",
        "expectedOutput": "10"
      }
    ],
    "hiddenTests": [
      {
        "input": "0 0",
        "expectedOutput": "0"
      },
      {
        "input": "-8 -3",
        "expectedOutput": "5"
      },
      {
        "input": "100 250",
        "expectedOutput": "150"
      },
      {
        "input": "7 7",
        "expectedOutput": "0"
      },
      {
        "input": "-1000000 1000000",
        "expectedOutput": "2000000"
      }
    ]
  },
  {
    "id": 14,
    "section": "Sec-A",
    "title": "Swap Two Numbers",
    "description": "Read two integers a and b and print them swapped: b first, then a.",
    "inputFormat": "One line with two integers a and b.",
    "outputFormat": "Two integers, space-separated: b a.",
    "constraints": "-10^6 <= a, b <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "1 2",
        "expectedOutput": "2 1"
      },
      {
        "input": "5 5",
        "expectedOutput": "5 5"
      },
      {
        "input": "-3 8",
        "expectedOutput": "8 -3"
      }
    ],
    "hiddenTests": [
      {
        "input": "0 9",
        "expectedOutput": "9 0"
      },
      {
        "input": "100 -100",
        "expectedOutput": "-100 100"
      },
      {
        "input": "7 3",
        "expectedOutput": "3 7"
      },
      {
        "input": "-1 -2",
        "expectedOutput": "-2 -1"
      },
      {
        "input": "1000 2000",
        "expectedOutput": "2000 1000"
      }
    ]
  },
  {
    "id": 15,
    "section": "Sec-A",
    "title": "Sum of Three Integers",
    "description": "Read three integers a, b, c and print their sum.",
    "inputFormat": "One line with three integers a, b, c.",
    "outputFormat": "One integer — a + b + c.",
    "constraints": "-10^5 <= a, b, c <= 10^5",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "1 2 3",
        "expectedOutput": "6"
      },
      {
        "input": "0 0 0",
        "expectedOutput": "0"
      },
      {
        "input": "-5 5 0",
        "expectedOutput": "0"
      }
    ],
    "hiddenTests": [
      {
        "input": "100 200 300",
        "expectedOutput": "600"
      },
      {
        "input": "-1 -2 -3",
        "expectedOutput": "-6"
      },
      {
        "input": "10 -10 10",
        "expectedOutput": "10"
      },
      {
        "input": "7 8 9",
        "expectedOutput": "24"
      },
      {
        "input": "-100000 100000 1",
        "expectedOutput": "1"
      }
    ]
  },
  {
    "id": 16,
    "section": "Sec-A",
    "title": "Check Positive, Negative or Zero",
    "description": "Read an integer n and print \"Positive\", \"Negative\", or \"Zero\".",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One word: Positive, Negative, or Zero.",
    "constraints": "-10^6 <= n <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5",
        "expectedOutput": "Positive"
      },
      {
        "input": "-5",
        "expectedOutput": "Negative"
      },
      {
        "input": "0",
        "expectedOutput": "Zero"
      }
    ],
    "hiddenTests": [
      {
        "input": "100",
        "expectedOutput": "Positive"
      },
      {
        "input": "-1",
        "expectedOutput": "Negative"
      },
      {
        "input": "1",
        "expectedOutput": "Positive"
      },
      {
        "input": "-999",
        "expectedOutput": "Negative"
      },
      {
        "input": "999999",
        "expectedOutput": "Positive"
      }
    ]
  },
  {
    "id": 17,
    "section": "Sec-A",
    "title": "Check Prime Number",
    "description": "Read an integer n and print \"Prime\" if it is a prime number, otherwise print \"Not Prime\".",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One phrase: Prime or Not Prime.",
    "constraints": "0 <= n <= 10^5",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "7",
        "expectedOutput": "Prime"
      },
      {
        "input": "10",
        "expectedOutput": "Not Prime"
      },
      {
        "input": "2",
        "expectedOutput": "Prime"
      }
    ],
    "hiddenTests": [
      {
        "input": "1",
        "expectedOutput": "Not Prime"
      },
      {
        "input": "0",
        "expectedOutput": "Not Prime"
      },
      {
        "input": "97",
        "expectedOutput": "Prime"
      },
      {
        "input": "100",
        "expectedOutput": "Not Prime"
      },
      {
        "input": "29",
        "expectedOutput": "Prime"
      }
    ]
  },
  {
    "id": 18,
    "section": "Sec-A",
    "title": "Check Perfect Number",
    "description": "Read a positive integer n and print \"Perfect\" if it equals the sum of its proper divisors (excluding itself), otherwise print \"Not Perfect\".",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One phrase: Perfect or Not Perfect.",
    "constraints": "1 <= n <= 10^4",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "6",
        "expectedOutput": "Perfect"
      },
      {
        "input": "28",
        "expectedOutput": "Perfect"
      },
      {
        "input": "10",
        "expectedOutput": "Not Perfect"
      }
    ],
    "hiddenTests": [
      {
        "input": "1",
        "expectedOutput": "Not Perfect"
      },
      {
        "input": "496",
        "expectedOutput": "Perfect"
      },
      {
        "input": "12",
        "expectedOutput": "Not Perfect"
      },
      {
        "input": "8128",
        "expectedOutput": "Perfect"
      },
      {
        "input": "100",
        "expectedOutput": "Not Perfect"
      }
    ]
  },
  {
    "id": 19,
    "section": "Sec-A",
    "title": "Check Armstrong Number",
    "description": "Read a positive integer n and print \"Armstrong\" if it equals the sum of its own digits each raised to the power of the number of digits, otherwise print \"Not Armstrong\".",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One phrase: Armstrong or Not Armstrong.",
    "constraints": "1 <= n <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "153",
        "expectedOutput": "Armstrong"
      },
      {
        "input": "123",
        "expectedOutput": "Not Armstrong"
      },
      {
        "input": "9474",
        "expectedOutput": "Armstrong"
      }
    ],
    "hiddenTests": [
      {
        "input": "1",
        "expectedOutput": "Armstrong"
      },
      {
        "input": "370",
        "expectedOutput": "Armstrong"
      },
      {
        "input": "9475",
        "expectedOutput": "Not Armstrong"
      },
      {
        "input": "371",
        "expectedOutput": "Armstrong"
      },
      {
        "input": "407",
        "expectedOutput": "Armstrong"
      }
    ]
  },
  {
    "id": 20,
    "section": "Sec-A",
    "title": "Check Palindrome Number",
    "description": "Read a non-negative integer n and print \"Palindrome\" if it reads the same forwards and backwards, otherwise print \"Not Palindrome\".",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One phrase: Palindrome or Not Palindrome.",
    "constraints": "0 <= n <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "121",
        "expectedOutput": "Palindrome"
      },
      {
        "input": "123",
        "expectedOutput": "Not Palindrome"
      },
      {
        "input": "0",
        "expectedOutput": "Palindrome"
      }
    ],
    "hiddenTests": [
      {
        "input": "7",
        "expectedOutput": "Palindrome"
      },
      {
        "input": "12321",
        "expectedOutput": "Palindrome"
      },
      {
        "input": "1000",
        "expectedOutput": "Not Palindrome"
      },
      {
        "input": "9",
        "expectedOutput": "Palindrome"
      },
      {
        "input": "10001",
        "expectedOutput": "Palindrome"
      }
    ]
  },
  {
    "id": 21,
    "section": "Sec-A",
    "title": "Count Digits in a Number",
    "description": "Read an integer n and print how many digits it has (ignoring a minus sign).",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — the digit count.",
    "constraints": "-10^6 <= n <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "12345",
        "expectedOutput": "5"
      },
      {
        "input": "0",
        "expectedOutput": "1"
      },
      {
        "input": "-42",
        "expectedOutput": "2"
      }
    ],
    "hiddenTests": [
      {
        "input": "7",
        "expectedOutput": "1"
      },
      {
        "input": "1000000",
        "expectedOutput": "7"
      },
      {
        "input": "-9",
        "expectedOutput": "1"
      },
      {
        "input": "100",
        "expectedOutput": "3"
      },
      {
        "input": "-100000",
        "expectedOutput": "6"
      }
    ]
  },
  {
    "id": 22,
    "section": "Sec-A",
    "title": "Sum of Digits of a Number",
    "description": "Read an integer n and print the sum of its digits (ignoring a minus sign).",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — the digit sum.",
    "constraints": "-10^6 <= n <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "1234",
        "expectedOutput": "10"
      },
      {
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "input": "-99",
        "expectedOutput": "18"
      }
    ],
    "hiddenTests": [
      {
        "input": "9",
        "expectedOutput": "9"
      },
      {
        "input": "100000",
        "expectedOutput": "1"
      },
      {
        "input": "-123",
        "expectedOutput": "6"
      },
      {
        "input": "55555",
        "expectedOutput": "25"
      },
      {
        "input": "10",
        "expectedOutput": "1"
      }
    ]
  },
  {
    "id": 23,
    "section": "Sec-A",
    "title": "Reverse a Number",
    "description": "Read an integer n and print it with its digits reversed. If n is negative, the result keeps the minus sign.",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — n with digits reversed.",
    "constraints": "-10^6 <= n <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "1234",
        "expectedOutput": "4321"
      },
      {
        "input": "-567",
        "expectedOutput": "-765"
      },
      {
        "input": "100",
        "expectedOutput": "1"
      }
    ],
    "hiddenTests": [
      {
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "input": "7",
        "expectedOutput": "7"
      },
      {
        "input": "12321",
        "expectedOutput": "12321"
      },
      {
        "input": "-100",
        "expectedOutput": "-1"
      },
      {
        "input": "900",
        "expectedOutput": "9"
      }
    ]
  },
  {
    "id": 24,
    "section": "Sec-A",
    "title": "Factorial of a Number",
    "description": "Read a non-negative integer n (n <= 12) and print n! (n factorial).",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — n factorial.",
    "constraints": "0 <= n <= 12",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5",
        "expectedOutput": "120"
      },
      {
        "input": "0",
        "expectedOutput": "1"
      },
      {
        "input": "1",
        "expectedOutput": "1"
      }
    ],
    "hiddenTests": [
      {
        "input": "10",
        "expectedOutput": "3628800"
      },
      {
        "input": "12",
        "expectedOutput": "479001600"
      },
      {
        "input": "6",
        "expectedOutput": "720"
      },
      {
        "input": "3",
        "expectedOutput": "6"
      },
      {
        "input": "7",
        "expectedOutput": "5040"
      }
    ]
  },
  {
    "id": 25,
    "section": "Sec-A",
    "title": "Nth Fibonacci Number",
    "description": "Read a positive integer n and print the nth Fibonacci number, where the sequence is defined as F(1)=0, F(2)=1, F(3)=1, F(4)=2, and so on.",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — the nth Fibonacci number.",
    "constraints": "1 <= n <= 40",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "1",
        "expectedOutput": "0"
      },
      {
        "input": "2",
        "expectedOutput": "1"
      },
      {
        "input": "5",
        "expectedOutput": "3"
      }
    ],
    "hiddenTests": [
      {
        "input": "10",
        "expectedOutput": "34"
      },
      {
        "input": "1",
        "expectedOutput": "0"
      },
      {
        "input": "20",
        "expectedOutput": "4181"
      },
      {
        "input": "30",
        "expectedOutput": "514229"
      },
      {
        "input": "40",
        "expectedOutput": "63245986"
      }
    ]
  },
  {
    "id": 26,
    "section": "Sec-A",
    "title": "GCD of Two Numbers",
    "description": "Read two positive integers a and b and print their greatest common divisor.",
    "inputFormat": "One line with two integers a and b.",
    "outputFormat": "One integer — gcd(a, b).",
    "constraints": "1 <= a, b <= 10^5",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "12 18",
        "expectedOutput": "6"
      },
      {
        "input": "7 13",
        "expectedOutput": "1"
      },
      {
        "input": "100 75",
        "expectedOutput": "25"
      }
    ],
    "hiddenTests": [
      {
        "input": "1 1",
        "expectedOutput": "1"
      },
      {
        "input": "17 34",
        "expectedOutput": "17"
      },
      {
        "input": "48 180",
        "expectedOutput": "12"
      },
      {
        "input": "9 27",
        "expectedOutput": "9"
      },
      {
        "input": "1000 1",
        "expectedOutput": "1"
      }
    ]
  },
  {
    "id": 27,
    "section": "Sec-A",
    "title": "LCM of Two Numbers",
    "description": "Read two positive integers a and b and print their least common multiple.",
    "inputFormat": "One line with two integers a and b.",
    "outputFormat": "One integer — lcm(a, b).",
    "constraints": "1 <= a, b <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "4 6",
        "expectedOutput": "12"
      },
      {
        "input": "3 5",
        "expectedOutput": "15"
      },
      {
        "input": "10 15",
        "expectedOutput": "30"
      }
    ],
    "hiddenTests": [
      {
        "input": "7 7",
        "expectedOutput": "7"
      },
      {
        "input": "1 9",
        "expectedOutput": "9"
      },
      {
        "input": "21 6",
        "expectedOutput": "42"
      },
      {
        "input": "8 12",
        "expectedOutput": "24"
      },
      {
        "input": "100 250",
        "expectedOutput": "500"
      }
    ]
  },
  {
    "id": 28,
    "section": "Sec-A",
    "title": "Check Leap Year",
    "description": "Read a year and print \"Leap Year\" if it is a leap year, otherwise print \"Not Leap Year\". (Divisible by 4, except centuries, which must be divisible by 400.)",
    "inputFormat": "One line with one integer year.",
    "outputFormat": "One phrase: Leap Year or Not Leap Year.",
    "constraints": "1 <= year <= 9999",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "2024",
        "expectedOutput": "Leap Year"
      },
      {
        "input": "2023",
        "expectedOutput": "Not Leap Year"
      },
      {
        "input": "1900",
        "expectedOutput": "Not Leap Year"
      }
    ],
    "hiddenTests": [
      {
        "input": "2000",
        "expectedOutput": "Leap Year"
      },
      {
        "input": "2100",
        "expectedOutput": "Not Leap Year"
      },
      {
        "input": "2400",
        "expectedOutput": "Leap Year"
      },
      {
        "input": "2020",
        "expectedOutput": "Leap Year"
      },
      {
        "input": "1999",
        "expectedOutput": "Not Leap Year"
      }
    ]
  },
  {
    "id": 29,
    "section": "Sec-A",
    "title": "Check Divisible by 3 and 5",
    "description": "Read an integer n and print \"Yes\" if it is divisible by both 3 and 5, otherwise print \"No\".",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One word: Yes or No.",
    "constraints": "0 <= n <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "15",
        "expectedOutput": "Yes"
      },
      {
        "input": "30",
        "expectedOutput": "Yes"
      },
      {
        "input": "9",
        "expectedOutput": "No"
      }
    ],
    "hiddenTests": [
      {
        "input": "10",
        "expectedOutput": "No"
      },
      {
        "input": "0",
        "expectedOutput": "Yes"
      },
      {
        "input": "45",
        "expectedOutput": "Yes"
      },
      {
        "input": "7",
        "expectedOutput": "No"
      },
      {
        "input": "100",
        "expectedOutput": "No"
      }
    ]
  },
  {
    "id": 30,
    "section": "Sec-A",
    "title": "Check Divisible by 3 or 5",
    "description": "Read an integer n and print \"Yes\" if it is divisible by 3 or by 5, otherwise print \"No\".",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One word: Yes or No.",
    "constraints": "0 <= n <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "9",
        "expectedOutput": "Yes"
      },
      {
        "input": "10",
        "expectedOutput": "Yes"
      },
      {
        "input": "7",
        "expectedOutput": "No"
      }
    ],
    "hiddenTests": [
      {
        "input": "0",
        "expectedOutput": "Yes"
      },
      {
        "input": "14",
        "expectedOutput": "No"
      },
      {
        "input": "21",
        "expectedOutput": "Yes"
      },
      {
        "input": "25",
        "expectedOutput": "Yes"
      },
      {
        "input": "11",
        "expectedOutput": "No"
      }
    ]
  },
  {
    "id": 31,
    "section": "Sec-A",
    "title": "Largest of Three Numbers",
    "description": "Read three integers a, b, c and print the largest of the three.",
    "inputFormat": "One line with three integers a, b, c.",
    "outputFormat": "One integer — the largest.",
    "constraints": "-10^6 <= a, b, c <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "3 7 5",
        "expectedOutput": "7"
      },
      {
        "input": "10 10 10",
        "expectedOutput": "10"
      },
      {
        "input": "-1 -2 -3",
        "expectedOutput": "-1"
      }
    ],
    "hiddenTests": [
      {
        "input": "0 5 -5",
        "expectedOutput": "5"
      },
      {
        "input": "100 200 300",
        "expectedOutput": "300"
      },
      {
        "input": "7 3 7",
        "expectedOutput": "7"
      },
      {
        "input": "-50 0 50",
        "expectedOutput": "50"
      },
      {
        "input": "9 8 9",
        "expectedOutput": "9"
      }
    ]
  },
  {
    "id": 32,
    "section": "Sec-A",
    "title": "Smallest of Three Numbers",
    "description": "Read three integers a, b, c and print the smallest of the three.",
    "inputFormat": "One line with three integers a, b, c.",
    "outputFormat": "One integer — the smallest.",
    "constraints": "-10^6 <= a, b, c <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "3 7 5",
        "expectedOutput": "3"
      },
      {
        "input": "10 10 10",
        "expectedOutput": "10"
      },
      {
        "input": "-1 -2 -3",
        "expectedOutput": "-3"
      }
    ],
    "hiddenTests": [
      {
        "input": "0 5 -5",
        "expectedOutput": "-5"
      },
      {
        "input": "100 200 300",
        "expectedOutput": "100"
      },
      {
        "input": "7 3 7",
        "expectedOutput": "3"
      },
      {
        "input": "-50 0 50",
        "expectedOutput": "-50"
      },
      {
        "input": "9 8 9",
        "expectedOutput": "8"
      }
    ]
  },
  {
    "id": 33,
    "section": "Sec-A",
    "title": "Largest Element in an Array",
    "description": "Read n followed by n integers and print the largest element.",
    "inputFormat": "First line: integer n. Second line: n space-separated integers.",
    "outputFormat": "One integer — the maximum.",
    "constraints": "1 <= n <= 100",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5\n3 7 1 9 4",
        "expectedOutput": "9"
      },
      {
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "input": "4\n-1 -2 -3 -4",
        "expectedOutput": "-1"
      }
    ],
    "hiddenTests": [
      {
        "input": "6\n10 20 5 20 3 1",
        "expectedOutput": "20"
      },
      {
        "input": "3\n0 0 0",
        "expectedOutput": "0"
      },
      {
        "input": "5\n-5 -1 -3 -2 -4",
        "expectedOutput": "-1"
      },
      {
        "input": "2\n100 -100",
        "expectedOutput": "100"
      },
      {
        "input": "7\n1 2 3 4 5 6 7",
        "expectedOutput": "7"
      }
    ]
  },
  {
    "id": 34,
    "section": "Sec-A",
    "title": "Smallest Element in an Array",
    "description": "Read n followed by n integers and print the smallest element.",
    "inputFormat": "First line: integer n. Second line: n space-separated integers.",
    "outputFormat": "One integer — the minimum.",
    "constraints": "1 <= n <= 100",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5\n3 7 1 9 4",
        "expectedOutput": "1"
      },
      {
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "input": "4\n-1 -2 -3 -4",
        "expectedOutput": "-4"
      }
    ],
    "hiddenTests": [
      {
        "input": "6\n10 20 5 20 3 1",
        "expectedOutput": "1"
      },
      {
        "input": "3\n0 0 0",
        "expectedOutput": "0"
      },
      {
        "input": "5\n-5 -1 -3 -2 -4",
        "expectedOutput": "-5"
      },
      {
        "input": "2\n100 -100",
        "expectedOutput": "-100"
      },
      {
        "input": "7\n1 2 3 4 5 6 7",
        "expectedOutput": "1"
      }
    ]
  },
  {
    "id": 35,
    "section": "Sec-A",
    "title": "Sort Three Numbers Ascending",
    "description": "Read three integers a, b, c and print them sorted in ascending order, space-separated.",
    "inputFormat": "One line with three integers a, b, c.",
    "outputFormat": "Three integers, sorted ascending, space-separated.",
    "constraints": "-10^6 <= a, b, c <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "3 1 2",
        "expectedOutput": "1 2 3"
      },
      {
        "input": "5 5 5",
        "expectedOutput": "5 5 5"
      },
      {
        "input": "-1 -3 -2",
        "expectedOutput": "-3 -2 -1"
      }
    ],
    "hiddenTests": [
      {
        "input": "0 -5 5",
        "expectedOutput": "-5 0 5"
      },
      {
        "input": "100 50 200",
        "expectedOutput": "50 100 200"
      },
      {
        "input": "9 8 7",
        "expectedOutput": "7 8 9"
      },
      {
        "input": "-10 10 0",
        "expectedOutput": "-10 0 10"
      },
      {
        "input": "1 2 3",
        "expectedOutput": "1 2 3"
      }
    ]
  },
  {
    "id": 36,
    "section": "Sec-A",
    "title": "Second Largest in an Array",
    "description": "Read n followed by n distinct integers and print the second largest value.",
    "inputFormat": "First line: integer n (n >= 2). Second line: n distinct space-separated integers.",
    "outputFormat": "One integer — the second largest.",
    "constraints": "2 <= n <= 100, all values distinct",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5\n3 7 1 9 4",
        "expectedOutput": "7"
      },
      {
        "input": "2\n10 20",
        "expectedOutput": "10"
      },
      {
        "input": "4\n-1 -2 -3 -4",
        "expectedOutput": "-2"
      }
    ],
    "hiddenTests": [
      {
        "input": "6\n10 20 5 25 3 1",
        "expectedOutput": "20"
      },
      {
        "input": "3\n0 5 -5",
        "expectedOutput": "0"
      },
      {
        "input": "5\n-5 -1 -3 -2 -4",
        "expectedOutput": "-2"
      },
      {
        "input": "2\n100 -100",
        "expectedOutput": "-100"
      },
      {
        "input": "7\n1 2 3 4 5 6 7",
        "expectedOutput": "6"
      }
    ]
  },
  {
    "id": 37,
    "section": "Sec-A",
    "title": "Count Positive, Negative and Zero in an Array",
    "description": "Read n followed by n integers and print three counts, space-separated: how many are positive, negative, and zero.",
    "inputFormat": "First line: integer n. Second line: n space-separated integers.",
    "outputFormat": "Three integers: posCount negCount zeroCount.",
    "constraints": "1 <= n <= 100",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5\n1 -2 0 3 -4",
        "expectedOutput": "2 2 1"
      },
      {
        "input": "4\n0 0 0 0",
        "expectedOutput": "0 0 4"
      },
      {
        "input": "3\n1 2 3",
        "expectedOutput": "3 0 0"
      }
    ],
    "hiddenTests": [
      {
        "input": "3\n-1 -2 -3",
        "expectedOutput": "0 3 0"
      },
      {
        "input": "6\n5 -5 0 5 -5 0",
        "expectedOutput": "2 2 2"
      },
      {
        "input": "1\n0",
        "expectedOutput": "0 0 1"
      },
      {
        "input": "1\n7",
        "expectedOutput": "1 0 0"
      },
      {
        "input": "1\n-7",
        "expectedOutput": "0 1 0"
      }
    ]
  },
  {
    "id": 38,
    "section": "Sec-A",
    "title": "Sum and Average of an Array",
    "description": "Read n followed by n integers and print their sum and average (integer division), space-separated: sum avg.",
    "inputFormat": "First line: integer n. Second line: n space-separated integers.",
    "outputFormat": "Two integers: sum avg.",
    "constraints": "1 <= n <= 100",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "15 3"
      },
      {
        "input": "4\n10 20 30 40",
        "expectedOutput": "100 25"
      },
      {
        "input": "3\n-3 0 3",
        "expectedOutput": "0 0"
      }
    ],
    "hiddenTests": [
      {
        "input": "1\n7",
        "expectedOutput": "7 7"
      },
      {
        "input": "6\n1 1 1 1 1 1",
        "expectedOutput": "6 1"
      },
      {
        "input": "5\n-1 -2 -3 -4 -5",
        "expectedOutput": "-15 -3"
      },
      {
        "input": "4\n100 200 300 400",
        "expectedOutput": "1000 250"
      },
      {
        "input": "2\n5 6",
        "expectedOutput": "11 5"
      }
    ]
  },
  {
    "id": 39,
    "section": "Sec-A",
    "title": "Sum of First N Natural Numbers",
    "description": "Read a positive integer n and print the sum 1 + 2 + ... + n.",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — the sum.",
    "constraints": "1 <= n <= 10^4",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "input": "10",
        "expectedOutput": "55"
      }
    ],
    "hiddenTests": [
      {
        "input": "100",
        "expectedOutput": "5050"
      },
      {
        "input": "50",
        "expectedOutput": "1275"
      },
      {
        "input": "2",
        "expectedOutput": "3"
      },
      {
        "input": "999",
        "expectedOutput": "499500"
      },
      {
        "input": "10000",
        "expectedOutput": "50005000"
      }
    ]
  },
  {
    "id": 40,
    "section": "Sec-A",
    "title": "Sum of Squares from 1 to N",
    "description": "Read a positive integer n and print 1^2 + 2^2 + ... + n^2.",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — the sum of squares.",
    "constraints": "1 <= n <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "3",
        "expectedOutput": "14"
      },
      {
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "input": "5",
        "expectedOutput": "55"
      }
    ],
    "hiddenTests": [
      {
        "input": "10",
        "expectedOutput": "385"
      },
      {
        "input": "100",
        "expectedOutput": "338350"
      },
      {
        "input": "2",
        "expectedOutput": "5"
      },
      {
        "input": "50",
        "expectedOutput": "42925"
      },
      {
        "input": "1000",
        "expectedOutput": "333833500"
      }
    ]
  },
  {
    "id": 41,
    "section": "Sec-A",
    "title": "Sum of Cubes from 1 to N",
    "description": "Read a positive integer n and print 1^3 + 2^3 + ... + n^3.",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — the sum of cubes.",
    "constraints": "1 <= n <= 100",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "3",
        "expectedOutput": "36"
      },
      {
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "input": "5",
        "expectedOutput": "225"
      }
    ],
    "hiddenTests": [
      {
        "input": "10",
        "expectedOutput": "3025"
      },
      {
        "input": "20",
        "expectedOutput": "44100"
      },
      {
        "input": "2",
        "expectedOutput": "9"
      },
      {
        "input": "50",
        "expectedOutput": "1625625"
      },
      {
        "input": "100",
        "expectedOutput": "25502500"
      }
    ]
  },
  {
    "id": 42,
    "section": "Sec-A",
    "title": "Sum of Even Numbers up to N",
    "description": "Read a positive integer n and print the sum of all even numbers from 2 up to n (inclusive).",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — the sum.",
    "constraints": "1 <= n <= 10^5",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "10",
        "expectedOutput": "30"
      },
      {
        "input": "1",
        "expectedOutput": "0"
      },
      {
        "input": "20",
        "expectedOutput": "110"
      }
    ],
    "hiddenTests": [
      {
        "input": "7",
        "expectedOutput": "12"
      },
      {
        "input": "100",
        "expectedOutput": "2550"
      },
      {
        "input": "2",
        "expectedOutput": "2"
      },
      {
        "input": "999",
        "expectedOutput": "249500"
      },
      {
        "input": "100000",
        "expectedOutput": "2500050000"
      }
    ]
  },
  {
    "id": 43,
    "section": "Sec-A",
    "title": "Sum of Odd Numbers up to N",
    "description": "Read a positive integer n and print the sum of all odd numbers from 1 up to n (inclusive).",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — the sum.",
    "constraints": "1 <= n <= 10^5",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "10",
        "expectedOutput": "25"
      },
      {
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "input": "20",
        "expectedOutput": "100"
      }
    ],
    "hiddenTests": [
      {
        "input": "7",
        "expectedOutput": "16"
      },
      {
        "input": "100",
        "expectedOutput": "2500"
      },
      {
        "input": "2",
        "expectedOutput": "1"
      },
      {
        "input": "999",
        "expectedOutput": "250000"
      },
      {
        "input": "100000",
        "expectedOutput": "2500000000"
      }
    ]
  },
  {
    "id": 44,
    "section": "Sec-A",
    "title": "Sum of First N Fibonacci Numbers",
    "description": "Read a positive integer n and print the sum of the first n Fibonacci numbers, where F(1)=0, F(2)=1, F(3)=1, F(4)=2, and so on.",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — the sum.",
    "constraints": "1 <= n <= 30",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "1",
        "expectedOutput": "0"
      },
      {
        "input": "2",
        "expectedOutput": "1"
      },
      {
        "input": "5",
        "expectedOutput": "7"
      }
    ],
    "hiddenTests": [
      {
        "input": "10",
        "expectedOutput": "88"
      },
      {
        "input": "3",
        "expectedOutput": "2"
      },
      {
        "input": "15",
        "expectedOutput": "986"
      },
      {
        "input": "20",
        "expectedOutput": "10945"
      },
      {
        "input": "30",
        "expectedOutput": "1346268"
      }
    ]
  },
  {
    "id": 45,
    "section": "Sec-A",
    "title": "Nth Triangular Number",
    "description": "Read a positive integer n and print the nth triangular number: 1 + 2 + ... + n.",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — the nth triangular number.",
    "constraints": "1 <= n <= 10^4",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "input": "10",
        "expectedOutput": "55"
      }
    ],
    "hiddenTests": [
      {
        "input": "100",
        "expectedOutput": "5050"
      },
      {
        "input": "50",
        "expectedOutput": "1275"
      },
      {
        "input": "2",
        "expectedOutput": "3"
      },
      {
        "input": "999",
        "expectedOutput": "499500"
      },
      {
        "input": "10000",
        "expectedOutput": "50005000"
      }
    ]
  },
  {
    "id": 46,
    "section": "Sec-A",
    "title": "Sum of an Arithmetic Series",
    "description": "Read the first term a, the common difference d, and the number of terms n, and print the sum of the arithmetic series.",
    "inputFormat": "One line with three integers: a, d, n.",
    "outputFormat": "One integer — the sum of the series.",
    "constraints": "-1000 <= a, d <= 1000, 1 <= n <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "1 1 5",
        "expectedOutput": "15"
      },
      {
        "input": "2 3 4",
        "expectedOutput": "26"
      },
      {
        "input": "10 0 5",
        "expectedOutput": "50"
      }
    ],
    "hiddenTests": [
      {
        "input": "-5 5 6",
        "expectedOutput": "45"
      },
      {
        "input": "0 2 10",
        "expectedOutput": "90"
      },
      {
        "input": "100 -10 5",
        "expectedOutput": "400"
      },
      {
        "input": "1 1 1",
        "expectedOutput": "1"
      },
      {
        "input": "5 5 5",
        "expectedOutput": "75"
      }
    ]
  },
  {
    "id": 47,
    "section": "Sec-A",
    "title": "Power of a Number Using a Loop",
    "description": "Read an integer base and a non-negative integer exp, and compute base^exp using a loop (not a library function), then print the result.",
    "inputFormat": "One line with two integers: base and exp.",
    "outputFormat": "One integer — base^exp.",
    "constraints": "-10 <= base <= 10, 0 <= exp <= 5",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "3 2",
        "expectedOutput": "9"
      },
      {
        "input": "2 5",
        "expectedOutput": "32"
      },
      {
        "input": "-2 4",
        "expectedOutput": "16"
      }
    ],
    "hiddenTests": [
      {
        "input": "7 0",
        "expectedOutput": "1"
      },
      {
        "input": "1 5",
        "expectedOutput": "1"
      },
      {
        "input": "-3 3",
        "expectedOutput": "-27"
      },
      {
        "input": "4 3",
        "expectedOutput": "64"
      },
      {
        "input": "10 4",
        "expectedOutput": "10000"
      }
    ]
  },
  {
    "id": 48,
    "section": "Sec-A",
    "title": "Sum of Multiples of 3 or 5 Below N",
    "description": "Read a positive integer n and print the sum of all multiples of 3 or 5 that are strictly less than n.",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — the sum.",
    "constraints": "1 <= n <= 10^5",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "10",
        "expectedOutput": "23"
      },
      {
        "input": "1",
        "expectedOutput": "0"
      },
      {
        "input": "20",
        "expectedOutput": "78"
      }
    ],
    "hiddenTests": [
      {
        "input": "100",
        "expectedOutput": "2318"
      },
      {
        "input": "3",
        "expectedOutput": "0"
      },
      {
        "input": "1000",
        "expectedOutput": "233168"
      },
      {
        "input": "50",
        "expectedOutput": "543"
      },
      {
        "input": "16",
        "expectedOutput": "60"
      }
    ]
  },
  {
    "id": 49,
    "section": "Sec-A",
    "title": "Length of a String",
    "description": "Read a line of text and print the number of characters in it (excluding the trailing newline).",
    "inputFormat": "One line containing a string.",
    "outputFormat": "One integer — the length of the string.",
    "constraints": "1 <= length <= 200",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "hello",
        "expectedOutput": "5"
      },
      {
        "input": "a",
        "expectedOutput": "1"
      },
      {
        "input": "C programming",
        "expectedOutput": "13"
      }
    ],
    "hiddenTests": [
      {
        "input": "x",
        "expectedOutput": "1"
      },
      {
        "input": "Hello World",
        "expectedOutput": "11"
      },
      {
        "input": "Netlify",
        "expectedOutput": "7"
      },
      {
        "input": "exam platform",
        "expectedOutput": "13"
      },
      {
        "input": "ok",
        "expectedOutput": "2"
      }
    ]
  },
  {
    "id": 50,
    "section": "Sec-A",
    "title": "Reverse a String",
    "description": "Read a line of text and print it reversed.",
    "inputFormat": "One line containing a string.",
    "outputFormat": "The string, reversed.",
    "constraints": "1 <= length <= 200",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "hello",
        "expectedOutput": "olleh"
      },
      {
        "input": "a",
        "expectedOutput": "a"
      },
      {
        "input": "racecar",
        "expectedOutput": "racecar"
      }
    ],
    "hiddenTests": [
      {
        "input": "abcdef",
        "expectedOutput": "fedcba"
      },
      {
        "input": "C programming",
        "expectedOutput": "gnimmargorp C"
      },
      {
        "input": "x",
        "expectedOutput": "x"
      },
      {
        "input": "OpenAI",
        "expectedOutput": "IAnepO"
      },
      {
        "input": "exam",
        "expectedOutput": "maxe"
      }
    ]
  },
  {
    "id": 51,
    "section": "Sec-A",
    "title": "Check Palindrome String",
    "description": "Read a single word (no spaces) and print \"Palindrome\" if it reads the same forwards and backwards (case-sensitive), otherwise print \"Not Palindrome\".",
    "inputFormat": "One line containing a single word.",
    "outputFormat": "One phrase: Palindrome or Not Palindrome.",
    "constraints": "1 <= length <= 100, no spaces",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "racecar",
        "expectedOutput": "Palindrome"
      },
      {
        "input": "hello",
        "expectedOutput": "Not Palindrome"
      },
      {
        "input": "level",
        "expectedOutput": "Palindrome"
      }
    ],
    "hiddenTests": [
      {
        "input": "world",
        "expectedOutput": "Not Palindrome"
      },
      {
        "input": "madam",
        "expectedOutput": "Palindrome"
      },
      {
        "input": "test",
        "expectedOutput": "Not Palindrome"
      },
      {
        "input": "noon",
        "expectedOutput": "Palindrome"
      },
      {
        "input": "coding",
        "expectedOutput": "Not Palindrome"
      }
    ]
  },
  {
    "id": 52,
    "section": "Sec-A",
    "title": "Count Vowels in a String",
    "description": "Read a line of text and print how many vowels (a, e, i, o, u, case-insensitive) it contains.",
    "inputFormat": "One line containing a string.",
    "outputFormat": "One integer — the vowel count.",
    "constraints": "1 <= length <= 200",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "hello world",
        "expectedOutput": "3"
      },
      {
        "input": "C programming",
        "expectedOutput": "3"
      },
      {
        "input": "AEIOU",
        "expectedOutput": "5"
      }
    ],
    "hiddenTests": [
      {
        "input": "xyz",
        "expectedOutput": "0"
      },
      {
        "input": "exam platform",
        "expectedOutput": "4"
      },
      {
        "input": "The quick brown fox",
        "expectedOutput": "5"
      },
      {
        "input": "a",
        "expectedOutput": "1"
      },
      {
        "input": "bcd",
        "expectedOutput": "0"
      }
    ]
  },
  {
    "id": 53,
    "section": "Sec-A",
    "title": "Count Consonants in a String",
    "description": "Read a line of text and print how many consonant letters it contains (letters that are not vowels; ignore digits, spaces, and punctuation).",
    "inputFormat": "One line containing a string.",
    "outputFormat": "One integer — the consonant count.",
    "constraints": "1 <= length <= 200",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "hello world",
        "expectedOutput": "7"
      },
      {
        "input": "C programming",
        "expectedOutput": "9"
      },
      {
        "input": "AEIOU",
        "expectedOutput": "0"
      }
    ],
    "hiddenTests": [
      {
        "input": "xyz",
        "expectedOutput": "3"
      },
      {
        "input": "exam platform",
        "expectedOutput": "8"
      },
      {
        "input": "sky",
        "expectedOutput": "3"
      },
      {
        "input": "a",
        "expectedOutput": "0"
      },
      {
        "input": "bcd",
        "expectedOutput": "3"
      }
    ]
  },
  {
    "id": 54,
    "section": "Sec-A",
    "title": "Convert Lowercase to Uppercase",
    "description": "Read a line of text and print it converted entirely to uppercase.",
    "inputFormat": "One line containing a string.",
    "outputFormat": "The string in uppercase.",
    "constraints": "1 <= length <= 200",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "hello world",
        "expectedOutput": "HELLO WORLD"
      },
      {
        "input": "c programming",
        "expectedOutput": "C PROGRAMMING"
      },
      {
        "input": "exam",
        "expectedOutput": "EXAM"
      }
    ],
    "hiddenTests": [
      {
        "input": "netlify",
        "expectedOutput": "NETLIFY"
      },
      {
        "input": "render backend",
        "expectedOutput": "RENDER BACKEND"
      },
      {
        "input": "monaco editor",
        "expectedOutput": "MONACO EDITOR"
      },
      {
        "input": "gcc compiler",
        "expectedOutput": "GCC COMPILER"
      },
      {
        "input": "test case",
        "expectedOutput": "TEST CASE"
      }
    ]
  },
  {
    "id": 55,
    "section": "Sec-A",
    "title": "Convert Uppercase to Lowercase",
    "description": "Read a line of text and print it converted entirely to lowercase.",
    "inputFormat": "One line containing a string.",
    "outputFormat": "The string in lowercase.",
    "constraints": "1 <= length <= 200",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "HELLO WORLD",
        "expectedOutput": "hello world"
      },
      {
        "input": "C PROGRAMMING",
        "expectedOutput": "c programming"
      },
      {
        "input": "EXAM",
        "expectedOutput": "exam"
      }
    ],
    "hiddenTests": [
      {
        "input": "NETLIFY",
        "expectedOutput": "netlify"
      },
      {
        "input": "RENDER BACKEND",
        "expectedOutput": "render backend"
      },
      {
        "input": "MONACO EDITOR",
        "expectedOutput": "monaco editor"
      },
      {
        "input": "GCC COMPILER",
        "expectedOutput": "gcc compiler"
      },
      {
        "input": "TEST CASE",
        "expectedOutput": "test case"
      }
    ]
  },
  {
    "id": 56,
    "section": "Sec-A",
    "title": "Count Words in a Sentence",
    "description": "Read a line of text and print how many words it contains (words are separated by single spaces).",
    "inputFormat": "One line containing a sentence.",
    "outputFormat": "One integer — the word count.",
    "constraints": "1 <= length <= 200",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "hello world",
        "expectedOutput": "2"
      },
      {
        "input": "this is a test",
        "expectedOutput": "4"
      },
      {
        "input": "C",
        "expectedOutput": "1"
      }
    ],
    "hiddenTests": [
      {
        "input": "the quick brown fox jumps",
        "expectedOutput": "5"
      },
      {
        "input": "one",
        "expectedOutput": "1"
      },
      {
        "input": "a b c d e",
        "expectedOutput": "5"
      },
      {
        "input": "exam platform online",
        "expectedOutput": "3"
      },
      {
        "input": "real gcc compiler backend",
        "expectedOutput": "4"
      }
    ]
  },
  {
    "id": 57,
    "section": "Sec-A",
    "title": "Count Spaces in a Sentence",
    "description": "Read a line of text and print how many space characters it contains.",
    "inputFormat": "One line containing a sentence.",
    "outputFormat": "One integer — the space count.",
    "constraints": "1 <= length <= 200",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "hello world",
        "expectedOutput": "1"
      },
      {
        "input": "this is a test",
        "expectedOutput": "3"
      },
      {
        "input": "C",
        "expectedOutput": "0"
      }
    ],
    "hiddenTests": [
      {
        "input": "a b c d e",
        "expectedOutput": "4"
      },
      {
        "input": "no spaces here",
        "expectedOutput": "2"
      },
      {
        "input": "x",
        "expectedOutput": "0"
      },
      {
        "input": "one two three four",
        "expectedOutput": "3"
      },
      {
        "input": "exam",
        "expectedOutput": "0"
      }
    ]
  },
  {
    "id": 58,
    "section": "Sec-A",
    "title": "Check if a String is Numeric",
    "description": "Read a line of text and print \"Yes\" if every character is a digit (0-9) and the string is non-empty, otherwise print \"No\".",
    "inputFormat": "One line containing a string.",
    "outputFormat": "One word: Yes or No.",
    "constraints": "1 <= length <= 100",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "12345",
        "expectedOutput": "Yes"
      },
      {
        "input": "abc123",
        "expectedOutput": "No"
      },
      {
        "input": "0",
        "expectedOutput": "Yes"
      }
    ],
    "hiddenTests": [
      {
        "input": "007",
        "expectedOutput": "Yes"
      },
      {
        "input": "12.3",
        "expectedOutput": "No"
      },
      {
        "input": "999999",
        "expectedOutput": "Yes"
      },
      {
        "input": "hello",
        "expectedOutput": "No"
      },
      {
        "input": "10",
        "expectedOutput": "Yes"
      }
    ]
  },
  {
    "id": 59,
    "section": "Sec-A",
    "title": "Count Occurrence of a Character",
    "description": "Read a string and a character, space-separated, and print how many times the character occurs in the string.",
    "inputFormat": "One line: a string, a space, then a single character.",
    "outputFormat": "One integer — the occurrence count.",
    "constraints": "1 <= length of string <= 100",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "hello l",
        "expectedOutput": "2"
      },
      {
        "input": "mississippi s",
        "expectedOutput": "4"
      },
      {
        "input": "banana a",
        "expectedOutput": "3"
      }
    ],
    "hiddenTests": [
      {
        "input": "xyz q",
        "expectedOutput": "0"
      },
      {
        "input": "aaaaaa a",
        "expectedOutput": "6"
      },
      {
        "input": "programming g",
        "expectedOutput": "2"
      },
      {
        "input": "test t",
        "expectedOutput": "2"
      },
      {
        "input": "abcabc c",
        "expectedOutput": "2"
      }
    ]
  },
  {
    "id": 60,
    "section": "Sec-A",
    "title": "ASCII Value of a Character",
    "description": "Read a single character and print its ASCII code.",
    "inputFormat": "One line containing a single character.",
    "outputFormat": "One integer — the ASCII value.",
    "constraints": "a printable ASCII character",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "A",
        "expectedOutput": "65"
      },
      {
        "input": "a",
        "expectedOutput": "97"
      },
      {
        "input": "0",
        "expectedOutput": "48"
      }
    ],
    "hiddenTests": [
      {
        "input": "z",
        "expectedOutput": "122"
      },
      {
        "input": "!",
        "expectedOutput": "33"
      },
      {
        "input": " ",
        "expectedOutput": "32"
      },
      {
        "input": "9",
        "expectedOutput": "57"
      },
      {
        "input": "Z",
        "expectedOutput": "90"
      }
    ]
  },
  {
    "id": 61,
    "section": "Sec-A",
    "title": "Character from ASCII Code",
    "description": "Read an integer ASCII code (32-126) and print the corresponding character.",
    "inputFormat": "One line with one integer code.",
    "outputFormat": "One character.",
    "constraints": "32 <= code <= 126",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "65",
        "expectedOutput": "A"
      },
      {
        "input": "97",
        "expectedOutput": "a"
      },
      {
        "input": "48",
        "expectedOutput": "0"
      }
    ],
    "hiddenTests": [
      {
        "input": "122",
        "expectedOutput": "z"
      },
      {
        "input": "33",
        "expectedOutput": "!"
      },
      {
        "input": "32",
        "expectedOutput": " "
      },
      {
        "input": "57",
        "expectedOutput": "9"
      },
      {
        "input": "90",
        "expectedOutput": "Z"
      }
    ]
  },
  {
    "id": 62,
    "section": "Sec-A",
    "title": "Check Anagram of Two Words",
    "description": "Read two words on one line, separated by a space, and print \"Yes\" if they are anagrams of each other (case-sensitive), otherwise print \"No\".",
    "inputFormat": "One line with two words, space-separated.",
    "outputFormat": "One word: Yes or No.",
    "constraints": "1 <= length of each word <= 50, no internal spaces",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "listen silent",
        "expectedOutput": "Yes"
      },
      {
        "input": "hello world",
        "expectedOutput": "No"
      },
      {
        "input": "triangle integral",
        "expectedOutput": "Yes"
      }
    ],
    "hiddenTests": [
      {
        "input": "abc cab",
        "expectedOutput": "Yes"
      },
      {
        "input": "rat car",
        "expectedOutput": "No"
      },
      {
        "input": "state taste",
        "expectedOutput": "Yes"
      },
      {
        "input": "apple pale",
        "expectedOutput": "No"
      },
      {
        "input": "node code",
        "expectedOutput": "No"
      }
    ]
  },
  {
    "id": 63,
    "section": "Sec-A",
    "title": "Count Uppercase Letters in a String",
    "description": "Read a line of text and print how many uppercase letters it contains.",
    "inputFormat": "One line containing a string.",
    "outputFormat": "One integer — the uppercase letter count.",
    "constraints": "1 <= length <= 200",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "Hello World",
        "expectedOutput": "2"
      },
      {
        "input": "ALLCAPS",
        "expectedOutput": "7"
      },
      {
        "input": "nocaps",
        "expectedOutput": "0"
      }
    ],
    "hiddenTests": [
      {
        "input": "CamelCase",
        "expectedOutput": "2"
      },
      {
        "input": "A",
        "expectedOutput": "1"
      },
      {
        "input": "a",
        "expectedOutput": "0"
      },
      {
        "input": "Exam Platform",
        "expectedOutput": "2"
      },
      {
        "input": "GCC Compiler Backend",
        "expectedOutput": "5"
      }
    ]
  },
  {
    "id": 64,
    "section": "Sec-A",
    "title": "Count Digits in a String",
    "description": "Read a line of text and print how many digit characters (0-9) it contains.",
    "inputFormat": "One line containing a string.",
    "outputFormat": "One integer — the digit count.",
    "constraints": "1 <= length <= 200",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "abc123",
        "expectedOutput": "3"
      },
      {
        "input": "Room404",
        "expectedOutput": "3"
      },
      {
        "input": "no digits here",
        "expectedOutput": "0"
      }
    ],
    "hiddenTests": [
      {
        "input": "2024",
        "expectedOutput": "4"
      },
      {
        "input": "a1b2c3",
        "expectedOutput": "3"
      },
      {
        "input": "CAT2026",
        "expectedOutput": "4"
      },
      {
        "input": "xyz",
        "expectedOutput": "0"
      },
      {
        "input": "0",
        "expectedOutput": "1"
      }
    ]
  },
  {
    "id": 65,
    "section": "Sec-A",
    "title": "Sum of Array Elements",
    "description": "Read n followed by n integers and print their sum.",
    "inputFormat": "First line: integer n. Second line: n space-separated integers.",
    "outputFormat": "One integer — the sum.",
    "constraints": "1 <= n <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "15"
      },
      {
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "input": "4\n-1 -2 -3 -4",
        "expectedOutput": "-10"
      }
    ],
    "hiddenTests": [
      {
        "input": "6\n10 20 5 20 3 1",
        "expectedOutput": "59"
      },
      {
        "input": "3\n0 0 0",
        "expectedOutput": "0"
      },
      {
        "input": "5\n-5 -1 -3 -2 -4",
        "expectedOutput": "-15"
      },
      {
        "input": "2\n100 -100",
        "expectedOutput": "0"
      },
      {
        "input": "7\n1 2 3 4 5 6 7",
        "expectedOutput": "28"
      }
    ]
  },
  {
    "id": 66,
    "section": "Sec-A",
    "title": "Average of Array Elements",
    "description": "Read n followed by n integers and print their average using integer (truncating) division.",
    "inputFormat": "First line: integer n. Second line: n space-separated integers.",
    "outputFormat": "One integer — the average.",
    "constraints": "1 <= n <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "3"
      },
      {
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "input": "4\n10 20 30 40",
        "expectedOutput": "25"
      }
    ],
    "hiddenTests": [
      {
        "input": "6\n1 1 1 1 1 1",
        "expectedOutput": "1"
      },
      {
        "input": "3\n-3 0 3",
        "expectedOutput": "0"
      },
      {
        "input": "5\n-5 -1 -3 -2 -4",
        "expectedOutput": "-3"
      },
      {
        "input": "2\n100 -100",
        "expectedOutput": "0"
      },
      {
        "input": "4\n7 8 9 10",
        "expectedOutput": "8"
      }
    ]
  },
  {
    "id": 67,
    "section": "Sec-A",
    "title": "Sum of Even Elements in an Array",
    "description": "Read n followed by n integers and print the sum of the even-valued elements.",
    "inputFormat": "First line: integer n. Second line: n space-separated integers.",
    "outputFormat": "One integer — the sum of even elements.",
    "constraints": "1 <= n <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "6"
      },
      {
        "input": "4\n1 3 5 7",
        "expectedOutput": "0"
      },
      {
        "input": "4\n2 4 6 8",
        "expectedOutput": "20"
      }
    ],
    "hiddenTests": [
      {
        "input": "6\n-2 -4 1 3 5 6",
        "expectedOutput": "0"
      },
      {
        "input": "3\n0 0 0",
        "expectedOutput": "0"
      },
      {
        "input": "1\n7",
        "expectedOutput": "0"
      },
      {
        "input": "5\n10 21 32 43 54",
        "expectedOutput": "96"
      },
      {
        "input": "2\n2 2",
        "expectedOutput": "4"
      }
    ]
  },
  {
    "id": 68,
    "section": "Sec-A",
    "title": "Sum of Odd Elements in an Array",
    "description": "Read n followed by n integers and print the sum of the odd-valued elements.",
    "inputFormat": "First line: integer n. Second line: n space-separated integers.",
    "outputFormat": "One integer — the sum of odd elements.",
    "constraints": "1 <= n <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "9"
      },
      {
        "input": "4\n1 3 5 7",
        "expectedOutput": "16"
      },
      {
        "input": "4\n2 4 6 8",
        "expectedOutput": "0"
      }
    ],
    "hiddenTests": [
      {
        "input": "6\n-2 -4 1 3 5 6",
        "expectedOutput": "9"
      },
      {
        "input": "3\n0 0 0",
        "expectedOutput": "0"
      },
      {
        "input": "1\n7",
        "expectedOutput": "7"
      },
      {
        "input": "5\n10 21 32 43 54",
        "expectedOutput": "64"
      },
      {
        "input": "2\n3 3",
        "expectedOutput": "6"
      }
    ]
  },
  {
    "id": 69,
    "section": "Sec-A",
    "title": "Count Elements Greater Than K",
    "description": "Read n, then n integers, then an integer k on the next line, and print how many of the n elements are strictly greater than k.",
    "inputFormat": "First line: integer n. Second line: n space-separated integers. Third line: integer k.",
    "outputFormat": "One integer — the count.",
    "constraints": "1 <= n <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5\n3 7 1 9 4\n4",
        "expectedOutput": "2"
      },
      {
        "input": "4\n1 2 3 4\n10",
        "expectedOutput": "0"
      },
      {
        "input": "4\n-1 -2 -3 -4\n-3",
        "expectedOutput": "2"
      }
    ],
    "hiddenTests": [
      {
        "input": "6\n10 20 5 20 3 1\n19",
        "expectedOutput": "2"
      },
      {
        "input": "3\n0 0 0\n0",
        "expectedOutput": "0"
      },
      {
        "input": "5\n-5 -1 -3 -2 -4\n-5",
        "expectedOutput": "4"
      },
      {
        "input": "2\n100 -100\n-1",
        "expectedOutput": "1"
      },
      {
        "input": "7\n1 2 3 4 5 6 7\n0",
        "expectedOutput": "7"
      }
    ]
  },
  {
    "id": 70,
    "section": "Sec-A",
    "title": "Linear Search in an Array",
    "description": "Read n, then n integers, then a target value, and print the 0-based index of the first occurrence of the target, or -1 if it is not present.",
    "inputFormat": "First line: integer n. Second line: n space-separated integers. Third line: the target value.",
    "outputFormat": "One integer — the index, or -1.",
    "constraints": "1 <= n <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5\n3 7 1 9 4\n9",
        "expectedOutput": "3"
      },
      {
        "input": "4\n1 2 3 4\n5",
        "expectedOutput": "-1"
      },
      {
        "input": "4\n-1 -2 -3 -4\n-3",
        "expectedOutput": "2"
      }
    ],
    "hiddenTests": [
      {
        "input": "6\n10 20 5 20 3 1\n20",
        "expectedOutput": "1"
      },
      {
        "input": "3\n0 0 0\n0",
        "expectedOutput": "0"
      },
      {
        "input": "5\n-5 -1 -3 -2 -4\n-4",
        "expectedOutput": "4"
      },
      {
        "input": "2\n100 -100\n100",
        "expectedOutput": "0"
      },
      {
        "input": "7\n1 2 3 4 5 6 7\n1",
        "expectedOutput": "0"
      }
    ]
  },
  {
    "id": 71,
    "section": "Sec-A",
    "title": "Reverse an Array",
    "description": "Read n followed by n integers and print them in reverse order, space-separated.",
    "inputFormat": "First line: integer n. Second line: n space-separated integers.",
    "outputFormat": "n integers, space-separated, in reverse order.",
    "constraints": "1 <= n <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "5 4 3 2 1"
      },
      {
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "input": "4\n-1 -2 -3 -4",
        "expectedOutput": "-4 -3 -2 -1"
      }
    ],
    "hiddenTests": [
      {
        "input": "6\n10 20 5 20 3 1",
        "expectedOutput": "1 3 20 5 20 10"
      },
      {
        "input": "3\n0 0 0",
        "expectedOutput": "0 0 0"
      },
      {
        "input": "5\n-5 -1 -3 -2 -4",
        "expectedOutput": "-4 -2 -3 -1 -5"
      },
      {
        "input": "2\n100 -100",
        "expectedOutput": "-100 100"
      },
      {
        "input": "7\n1 2 3 4 5 6 7",
        "expectedOutput": "7 6 5 4 3 2 1"
      }
    ]
  },
  {
    "id": 72,
    "section": "Sec-A",
    "title": "Maximum Element in an Array",
    "description": "Read n followed by n integers and print the maximum value.",
    "inputFormat": "First line: integer n. Second line: n space-separated integers.",
    "outputFormat": "One integer — the maximum.",
    "constraints": "1 <= n <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5\n4 8 1 9 3",
        "expectedOutput": "9"
      },
      {
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "input": "4\n-1 -2 -3 -4",
        "expectedOutput": "-1"
      }
    ],
    "hiddenTests": [
      {
        "input": "6\n10 20 5 20 3 1",
        "expectedOutput": "20"
      },
      {
        "input": "3\n0 0 0",
        "expectedOutput": "0"
      },
      {
        "input": "5\n-5 -1 -3 -2 -4",
        "expectedOutput": "-1"
      },
      {
        "input": "2\n100 -100",
        "expectedOutput": "100"
      },
      {
        "input": "7\n7 6 5 4 3 2 1",
        "expectedOutput": "7"
      }
    ]
  },
  {
    "id": 73,
    "section": "Sec-A",
    "title": "Minimum Element in an Array",
    "description": "Read n followed by n integers and print the minimum value.",
    "inputFormat": "First line: integer n. Second line: n space-separated integers.",
    "outputFormat": "One integer — the minimum.",
    "constraints": "1 <= n <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5\n4 8 1 9 3",
        "expectedOutput": "1"
      },
      {
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "input": "4\n-1 -2 -3 -4",
        "expectedOutput": "-4"
      }
    ],
    "hiddenTests": [
      {
        "input": "6\n10 20 5 20 3 1",
        "expectedOutput": "1"
      },
      {
        "input": "3\n0 0 0",
        "expectedOutput": "0"
      },
      {
        "input": "5\n-5 -1 -3 -2 -4",
        "expectedOutput": "-5"
      },
      {
        "input": "2\n100 -100",
        "expectedOutput": "-100"
      },
      {
        "input": "7\n7 6 5 4 3 2 1",
        "expectedOutput": "1"
      }
    ]
  },
  {
    "id": 74,
    "section": "Sec-A",
    "title": "Frequency of an Element in an Array",
    "description": "Read n, then n integers, then a target value, and print how many times the target appears in the array.",
    "inputFormat": "First line: integer n. Second line: n space-separated integers. Third line: the target value.",
    "outputFormat": "One integer — the frequency.",
    "constraints": "1 <= n <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "6\n1 2 2 3 2 4\n2",
        "expectedOutput": "3"
      },
      {
        "input": "4\n1 2 3 4\n5",
        "expectedOutput": "0"
      },
      {
        "input": "5\n7 7 7 7 7\n7",
        "expectedOutput": "5"
      }
    ],
    "hiddenTests": [
      {
        "input": "6\n10 20 5 20 3 1\n20",
        "expectedOutput": "2"
      },
      {
        "input": "3\n0 0 0\n0",
        "expectedOutput": "3"
      },
      {
        "input": "5\n-5 -1 -3 -2 -4\n-4",
        "expectedOutput": "1"
      },
      {
        "input": "2\n100 -100\n100",
        "expectedOutput": "1"
      },
      {
        "input": "7\n1 1 2 2 3 3 3\n3",
        "expectedOutput": "3"
      }
    ]
  },
  {
    "id": 75,
    "section": "Sec-A",
    "title": "Count Even Numbers in an Array",
    "description": "Read n followed by n integers and print how many of them are even.",
    "inputFormat": "First line: integer n. Second line: n space-separated integers.",
    "outputFormat": "One integer — the count of even numbers.",
    "constraints": "1 <= n <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "2"
      },
      {
        "input": "4\n1 3 5 7",
        "expectedOutput": "0"
      },
      {
        "input": "4\n2 4 6 8",
        "expectedOutput": "4"
      }
    ],
    "hiddenTests": [
      {
        "input": "6\n-2 -4 1 3 5 6",
        "expectedOutput": "3"
      },
      {
        "input": "3\n0 0 0",
        "expectedOutput": "3"
      },
      {
        "input": "1\n7",
        "expectedOutput": "0"
      },
      {
        "input": "5\n10 21 32 43 54",
        "expectedOutput": "3"
      },
      {
        "input": "2\n3 3",
        "expectedOutput": "0"
      }
    ]
  },
  {
    "id": 76,
    "section": "Sec-A",
    "title": "Count Odd Numbers in an Array",
    "description": "Read n followed by n integers and print how many of them are odd.",
    "inputFormat": "First line: integer n. Second line: n space-separated integers.",
    "outputFormat": "One integer — the count of odd numbers.",
    "constraints": "1 <= n <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "3"
      },
      {
        "input": "4\n1 3 5 7",
        "expectedOutput": "4"
      },
      {
        "input": "4\n2 4 6 8",
        "expectedOutput": "0"
      }
    ],
    "hiddenTests": [
      {
        "input": "6\n-2 -4 1 3 5 6",
        "expectedOutput": "3"
      },
      {
        "input": "3\n0 0 0",
        "expectedOutput": "0"
      },
      {
        "input": "1\n7",
        "expectedOutput": "1"
      },
      {
        "input": "5\n10 21 32 43 54",
        "expectedOutput": "2"
      },
      {
        "input": "2\n3 3",
        "expectedOutput": "2"
      }
    ]
  },
  {
    "id": 77,
    "section": "Sec-A",
    "title": "Product of Array Elements",
    "description": "Read n followed by n integers and print the product of all elements.",
    "inputFormat": "First line: integer n. Second line: n space-separated integers.",
    "outputFormat": "One integer — the product.",
    "constraints": "1 <= n <= 8, -10 <= each element <= 10",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "3\n2 3 4",
        "expectedOutput": "24"
      },
      {
        "input": "1\n7",
        "expectedOutput": "7"
      },
      {
        "input": "4\n1 -1 1 -1",
        "expectedOutput": "1"
      }
    ],
    "hiddenTests": [
      {
        "input": "2\n5 5",
        "expectedOutput": "25"
      },
      {
        "input": "3\n0 5 10",
        "expectedOutput": "0"
      },
      {
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "120"
      },
      {
        "input": "2\n-2 -3",
        "expectedOutput": "6"
      },
      {
        "input": "4\n2 2 2 2",
        "expectedOutput": "16"
      }
    ]
  },
  {
    "id": 78,
    "section": "Sec-A",
    "title": "Area of a Circle",
    "description": "Read the radius of a circle (as an integer) and print its area using pi = 3.14159, formatted to 2 decimal places.",
    "inputFormat": "One line with one integer: radius.",
    "outputFormat": "One number — the area, with 2 decimal places.",
    "constraints": "1 <= radius <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5",
        "expectedOutput": "78.54"
      },
      {
        "input": "1",
        "expectedOutput": "3.14"
      },
      {
        "input": "10",
        "expectedOutput": "314.16"
      }
    ],
    "hiddenTests": [
      {
        "input": "7",
        "expectedOutput": "153.94"
      },
      {
        "input": "100",
        "expectedOutput": "31415.90"
      },
      {
        "input": "2",
        "expectedOutput": "12.57"
      },
      {
        "input": "50",
        "expectedOutput": "7853.97"
      },
      {
        "input": "3",
        "expectedOutput": "28.27"
      }
    ]
  },
  {
    "id": 79,
    "section": "Sec-A",
    "title": "Circumference of a Circle",
    "description": "Read the radius of a circle (as an integer) and print its circumference using pi = 3.14159, formatted to 2 decimal places.",
    "inputFormat": "One line with one integer: radius.",
    "outputFormat": "One number — the circumference, with 2 decimal places.",
    "constraints": "1 <= radius <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5",
        "expectedOutput": "31.42"
      },
      {
        "input": "1",
        "expectedOutput": "6.28"
      },
      {
        "input": "10",
        "expectedOutput": "62.83"
      }
    ],
    "hiddenTests": [
      {
        "input": "7",
        "expectedOutput": "43.98"
      },
      {
        "input": "100",
        "expectedOutput": "628.32"
      },
      {
        "input": "2",
        "expectedOutput": "12.57"
      },
      {
        "input": "50",
        "expectedOutput": "314.16"
      },
      {
        "input": "3",
        "expectedOutput": "18.85"
      }
    ]
  },
  {
    "id": 80,
    "section": "Sec-A",
    "title": "Area of a Triangle",
    "description": "Read the base and height of a triangle as integers and print its area (base * height / 2), formatted to 2 decimal places.",
    "inputFormat": "One line with two integers: base and height.",
    "outputFormat": "One number — the area, with 2 decimal places.",
    "constraints": "1 <= base, height <= 10^4",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "4 5",
        "expectedOutput": "10.00"
      },
      {
        "input": "10 10",
        "expectedOutput": "50.00"
      },
      {
        "input": "7 3",
        "expectedOutput": "10.50"
      }
    ],
    "hiddenTests": [
      {
        "input": "1 1",
        "expectedOutput": "0.50"
      },
      {
        "input": "100 50",
        "expectedOutput": "2500.00"
      },
      {
        "input": "9 9",
        "expectedOutput": "40.50"
      },
      {
        "input": "6 8",
        "expectedOutput": "24.00"
      },
      {
        "input": "15 4",
        "expectedOutput": "30.00"
      }
    ]
  },
  {
    "id": 81,
    "section": "Sec-A",
    "title": "Area of a Triangle (Heron's Formula)",
    "description": "Read the three side lengths of a triangle as integers and print its area using Heron's formula, formatted to 2 decimal places.",
    "inputFormat": "One line with three integers: a, b, c (the side lengths).",
    "outputFormat": "One number — the area, with 2 decimal places.",
    "constraints": "1 <= a, b, c <= 1000, forming a valid triangle",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "3 4 5",
        "expectedOutput": "6.00"
      },
      {
        "input": "5 5 6",
        "expectedOutput": "12.00"
      },
      {
        "input": "6 8 10",
        "expectedOutput": "24.00"
      }
    ],
    "hiddenTests": [
      {
        "input": "7 7 7",
        "expectedOutput": "21.22"
      },
      {
        "input": "9 12 15",
        "expectedOutput": "54.00"
      },
      {
        "input": "10 10 12",
        "expectedOutput": "48.00"
      },
      {
        "input": "13 14 15",
        "expectedOutput": "84.00"
      },
      {
        "input": "8 15 17",
        "expectedOutput": "60.00"
      }
    ]
  },
  {
    "id": 82,
    "section": "Sec-A",
    "title": "Perimeter of a Rectangle",
    "description": "Read the length and width of a rectangle as integers and print its perimeter.",
    "inputFormat": "One line with two integers: length and width.",
    "outputFormat": "One integer — the perimeter.",
    "constraints": "1 <= length, width <= 10^4",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5 4",
        "expectedOutput": "18"
      },
      {
        "input": "10 10",
        "expectedOutput": "40"
      },
      {
        "input": "7 3",
        "expectedOutput": "20"
      }
    ],
    "hiddenTests": [
      {
        "input": "1 1",
        "expectedOutput": "4"
      },
      {
        "input": "100 50",
        "expectedOutput": "300"
      },
      {
        "input": "9 9",
        "expectedOutput": "36"
      },
      {
        "input": "6 8",
        "expectedOutput": "28"
      },
      {
        "input": "15 4",
        "expectedOutput": "38"
      }
    ]
  },
  {
    "id": 83,
    "section": "Sec-A",
    "title": "Area of a Square",
    "description": "Read the side length of a square as an integer and print its area.",
    "inputFormat": "One line with one integer: side.",
    "outputFormat": "One integer — the area.",
    "constraints": "1 <= side <= 10^4",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5",
        "expectedOutput": "25"
      },
      {
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "input": "10",
        "expectedOutput": "100"
      }
    ],
    "hiddenTests": [
      {
        "input": "7",
        "expectedOutput": "49"
      },
      {
        "input": "100",
        "expectedOutput": "10000"
      },
      {
        "input": "2",
        "expectedOutput": "4"
      },
      {
        "input": "50",
        "expectedOutput": "2500"
      },
      {
        "input": "12",
        "expectedOutput": "144"
      }
    ]
  },
  {
    "id": 84,
    "section": "Sec-A",
    "title": "Perimeter of a Square",
    "description": "Read the side length of a square as an integer and print its perimeter.",
    "inputFormat": "One line with one integer: side.",
    "outputFormat": "One integer — the perimeter.",
    "constraints": "1 <= side <= 10^4",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5",
        "expectedOutput": "20"
      },
      {
        "input": "1",
        "expectedOutput": "4"
      },
      {
        "input": "10",
        "expectedOutput": "40"
      }
    ],
    "hiddenTests": [
      {
        "input": "7",
        "expectedOutput": "28"
      },
      {
        "input": "100",
        "expectedOutput": "400"
      },
      {
        "input": "2",
        "expectedOutput": "8"
      },
      {
        "input": "50",
        "expectedOutput": "200"
      },
      {
        "input": "12",
        "expectedOutput": "48"
      }
    ]
  },
  {
    "id": 85,
    "section": "Sec-A",
    "title": "Volume of a Cube",
    "description": "Read the side length of a cube as an integer and print its volume.",
    "inputFormat": "One line with one integer: side.",
    "outputFormat": "One integer — the volume.",
    "constraints": "1 <= side <= 500",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "3",
        "expectedOutput": "27"
      },
      {
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "input": "5",
        "expectedOutput": "125"
      }
    ],
    "hiddenTests": [
      {
        "input": "10",
        "expectedOutput": "1000"
      },
      {
        "input": "2",
        "expectedOutput": "8"
      },
      {
        "input": "7",
        "expectedOutput": "343"
      },
      {
        "input": "100",
        "expectedOutput": "1000000"
      },
      {
        "input": "9",
        "expectedOutput": "729"
      }
    ]
  },
  {
    "id": 86,
    "section": "Sec-A",
    "title": "Volume of a Cylinder",
    "description": "Read the radius and height of a cylinder as integers and print its volume using pi = 3.14159, formatted to 2 decimal places.",
    "inputFormat": "One line with two integers: radius and height.",
    "outputFormat": "One number — the volume, with 2 decimal places.",
    "constraints": "1 <= radius, height <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "3 5",
        "expectedOutput": "141.37"
      },
      {
        "input": "1 1",
        "expectedOutput": "3.14"
      },
      {
        "input": "10 2",
        "expectedOutput": "628.32"
      }
    ],
    "hiddenTests": [
      {
        "input": "7 7",
        "expectedOutput": "1077.57"
      },
      {
        "input": "100 1",
        "expectedOutput": "31415.90"
      },
      {
        "input": "2 10",
        "expectedOutput": "125.66"
      },
      {
        "input": "5 5",
        "expectedOutput": "392.70"
      },
      {
        "input": "4 6",
        "expectedOutput": "301.59"
      }
    ]
  },
  {
    "id": 87,
    "section": "Sec-A",
    "title": "Surface Area of a Cube",
    "description": "Read the side length of a cube as an integer and print its total surface area (6 * side^2).",
    "inputFormat": "One line with one integer: side.",
    "outputFormat": "One integer — the surface area.",
    "constraints": "1 <= side <= 10^4",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "3",
        "expectedOutput": "54"
      },
      {
        "input": "1",
        "expectedOutput": "6"
      },
      {
        "input": "5",
        "expectedOutput": "150"
      }
    ],
    "hiddenTests": [
      {
        "input": "10",
        "expectedOutput": "600"
      },
      {
        "input": "2",
        "expectedOutput": "24"
      },
      {
        "input": "7",
        "expectedOutput": "294"
      },
      {
        "input": "100",
        "expectedOutput": "60000"
      },
      {
        "input": "9",
        "expectedOutput": "486"
      }
    ]
  },
  {
    "id": 88,
    "section": "Sec-A",
    "title": "Celsius to Fahrenheit",
    "description": "Read a temperature in Celsius as an integer and print the equivalent in Fahrenheit, formatted to 2 decimal places. (F = C * 9/5 + 32)",
    "inputFormat": "One line with one integer: Celsius temperature.",
    "outputFormat": "One number — Fahrenheit, with 2 decimal places.",
    "constraints": "-273 <= C <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "0",
        "expectedOutput": "32.00"
      },
      {
        "input": "100",
        "expectedOutput": "212.00"
      },
      {
        "input": "37",
        "expectedOutput": "98.60"
      }
    ],
    "hiddenTests": [
      {
        "input": "-40",
        "expectedOutput": "-40.00"
      },
      {
        "input": "25",
        "expectedOutput": "77.00"
      },
      {
        "input": "20",
        "expectedOutput": "68.00"
      },
      {
        "input": "-10",
        "expectedOutput": "14.00"
      },
      {
        "input": "212",
        "expectedOutput": "413.60"
      }
    ]
  },
  {
    "id": 89,
    "section": "Sec-A",
    "title": "Fahrenheit to Celsius",
    "description": "Read a temperature in Fahrenheit as an integer and print the equivalent in Celsius, formatted to 2 decimal places. (C = (F - 32) * 5/9)",
    "inputFormat": "One line with one integer: Fahrenheit temperature.",
    "outputFormat": "One number — Celsius, with 2 decimal places.",
    "constraints": "-459 <= F <= 2000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "32",
        "expectedOutput": "0.00"
      },
      {
        "input": "212",
        "expectedOutput": "100.00"
      },
      {
        "input": "98",
        "expectedOutput": "36.67"
      }
    ],
    "hiddenTests": [
      {
        "input": "-40",
        "expectedOutput": "-40.00"
      },
      {
        "input": "100",
        "expectedOutput": "37.78"
      },
      {
        "input": "68",
        "expectedOutput": "20.00"
      },
      {
        "input": "0",
        "expectedOutput": "-17.78"
      },
      {
        "input": "451",
        "expectedOutput": "232.78"
      }
    ]
  },
  {
    "id": 90,
    "section": "Sec-A",
    "title": "Decimal to Binary",
    "description": "Read a non-negative integer and print its binary representation.",
    "inputFormat": "One line with one non-negative integer n.",
    "outputFormat": "The binary representation of n.",
    "constraints": "0 <= n <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "10",
        "expectedOutput": "1010"
      },
      {
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "input": "1",
        "expectedOutput": "1"
      }
    ],
    "hiddenTests": [
      {
        "input": "255",
        "expectedOutput": "11111111"
      },
      {
        "input": "1024",
        "expectedOutput": "10000000000"
      },
      {
        "input": "7",
        "expectedOutput": "111"
      },
      {
        "input": "100",
        "expectedOutput": "1100100"
      },
      {
        "input": "63",
        "expectedOutput": "111111"
      }
    ]
  },
  {
    "id": 91,
    "section": "Sec-A",
    "title": "Binary to Decimal",
    "description": "Read a string of 0s and 1s (a binary number) and print its decimal value.",
    "inputFormat": "One line containing a binary string.",
    "outputFormat": "One integer — the decimal value.",
    "constraints": "1 <= length <= 20",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "1010",
        "expectedOutput": "10"
      },
      {
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "input": "1",
        "expectedOutput": "1"
      }
    ],
    "hiddenTests": [
      {
        "input": "11111111",
        "expectedOutput": "255"
      },
      {
        "input": "10000000000",
        "expectedOutput": "1024"
      },
      {
        "input": "111",
        "expectedOutput": "7"
      },
      {
        "input": "1100100",
        "expectedOutput": "100"
      },
      {
        "input": "111111",
        "expectedOutput": "63"
      }
    ]
  },
  {
    "id": 92,
    "section": "Sec-A",
    "title": "Decimal to Octal",
    "description": "Read a non-negative integer and print its octal (base-8) representation.",
    "inputFormat": "One line with one non-negative integer n.",
    "outputFormat": "The octal representation of n.",
    "constraints": "0 <= n <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "8",
        "expectedOutput": "10"
      },
      {
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "input": "1",
        "expectedOutput": "1"
      }
    ],
    "hiddenTests": [
      {
        "input": "64",
        "expectedOutput": "100"
      },
      {
        "input": "100",
        "expectedOutput": "144"
      },
      {
        "input": "7",
        "expectedOutput": "7"
      },
      {
        "input": "511",
        "expectedOutput": "777"
      },
      {
        "input": "9",
        "expectedOutput": "11"
      }
    ]
  },
  {
    "id": 93,
    "section": "Sec-A",
    "title": "Decimal to Hexadecimal",
    "description": "Read a non-negative integer and print its hexadecimal (base-16) representation using uppercase letters A-F.",
    "inputFormat": "One line with one non-negative integer n.",
    "outputFormat": "The hexadecimal representation of n.",
    "constraints": "0 <= n <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "255",
        "expectedOutput": "FF"
      },
      {
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "input": "1",
        "expectedOutput": "1"
      }
    ],
    "hiddenTests": [
      {
        "input": "16",
        "expectedOutput": "10"
      },
      {
        "input": "4096",
        "expectedOutput": "1000"
      },
      {
        "input": "10",
        "expectedOutput": "A"
      },
      {
        "input": "4095",
        "expectedOutput": "FFF"
      },
      {
        "input": "31",
        "expectedOutput": "1F"
      }
    ]
  },
  {
    "id": 94,
    "section": "Sec-A",
    "title": "Kilometers to Miles",
    "description": "Read a distance in kilometers as an integer and print the equivalent in miles, formatted to 2 decimal places. (miles = km * 0.621371)",
    "inputFormat": "One line with one integer: distance in km.",
    "outputFormat": "One number — distance in miles, with 2 decimal places.",
    "constraints": "0 <= km <= 10^5",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "10",
        "expectedOutput": "6.21"
      },
      {
        "input": "0",
        "expectedOutput": "0.00"
      },
      {
        "input": "1",
        "expectedOutput": "0.62"
      }
    ],
    "hiddenTests": [
      {
        "input": "100",
        "expectedOutput": "62.14"
      },
      {
        "input": "42",
        "expectedOutput": "26.10"
      },
      {
        "input": "5",
        "expectedOutput": "3.11"
      },
      {
        "input": "1000",
        "expectedOutput": "621.37"
      },
      {
        "input": "26",
        "expectedOutput": "16.16"
      }
    ]
  },
  {
    "id": 95,
    "section": "Sec-A",
    "title": "Kilograms to Pounds",
    "description": "Read a weight in kilograms as an integer and print the equivalent in pounds, formatted to 2 decimal places. (lb = kg * 2.20462)",
    "inputFormat": "One line with one integer: weight in kg.",
    "outputFormat": "One number — weight in pounds, with 2 decimal places.",
    "constraints": "0 <= kg <= 10^5",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "10",
        "expectedOutput": "22.05"
      },
      {
        "input": "0",
        "expectedOutput": "0.00"
      },
      {
        "input": "1",
        "expectedOutput": "2.20"
      }
    ],
    "hiddenTests": [
      {
        "input": "100",
        "expectedOutput": "220.46"
      },
      {
        "input": "70",
        "expectedOutput": "154.32"
      },
      {
        "input": "5",
        "expectedOutput": "11.02"
      },
      {
        "input": "1000",
        "expectedOutput": "2204.62"
      },
      {
        "input": "45",
        "expectedOutput": "99.21"
      }
    ]
  },
  {
    "id": 96,
    "section": "Sec-A",
    "title": "Number of Divisors of N",
    "description": "Read a positive integer n and print how many positive divisors it has (including 1 and itself).",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — the divisor count.",
    "constraints": "1 <= n <= 10^5",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "12",
        "expectedOutput": "6"
      },
      {
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "input": "13",
        "expectedOutput": "2"
      }
    ],
    "hiddenTests": [
      {
        "input": "100",
        "expectedOutput": "9"
      },
      {
        "input": "36",
        "expectedOutput": "9"
      },
      {
        "input": "7",
        "expectedOutput": "2"
      },
      {
        "input": "60",
        "expectedOutput": "12"
      },
      {
        "input": "1000",
        "expectedOutput": "16"
      }
    ]
  },
  {
    "id": 97,
    "section": "Sec-A",
    "title": "Sum of Divisors of N",
    "description": "Read a positive integer n and print the sum of all its positive divisors (including 1 and itself).",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — the sum of divisors.",
    "constraints": "1 <= n <= 10^5",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "12",
        "expectedOutput": "28"
      },
      {
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "input": "13",
        "expectedOutput": "14"
      }
    ],
    "hiddenTests": [
      {
        "input": "28",
        "expectedOutput": "56"
      },
      {
        "input": "36",
        "expectedOutput": "91"
      },
      {
        "input": "7",
        "expectedOutput": "8"
      },
      {
        "input": "60",
        "expectedOutput": "168"
      },
      {
        "input": "100",
        "expectedOutput": "217"
      }
    ]
  },
  {
    "id": 98,
    "section": "Sec-A",
    "title": "Check Perfect Square",
    "description": "Read a non-negative integer n and print \"Yes\" if it is a perfect square, otherwise print \"No\".",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One word: Yes or No.",
    "constraints": "0 <= n <= 10^8",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "16",
        "expectedOutput": "Yes"
      },
      {
        "input": "15",
        "expectedOutput": "No"
      },
      {
        "input": "0",
        "expectedOutput": "Yes"
      }
    ],
    "hiddenTests": [
      {
        "input": "1",
        "expectedOutput": "Yes"
      },
      {
        "input": "10000",
        "expectedOutput": "Yes"
      },
      {
        "input": "99",
        "expectedOutput": "No"
      },
      {
        "input": "144",
        "expectedOutput": "Yes"
      },
      {
        "input": "99980001",
        "expectedOutput": "Yes"
      }
    ]
  },
  {
    "id": 99,
    "section": "Sec-A",
    "title": "Digital Root of a Number",
    "description": "Read a non-negative integer n and repeatedly sum its digits until a single digit remains, then print that digit.",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — the digital root.",
    "constraints": "0 <= n <= 10^9",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "9875",
        "expectedOutput": "2"
      },
      {
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "input": "5",
        "expectedOutput": "5"
      }
    ],
    "hiddenTests": [
      {
        "input": "999",
        "expectedOutput": "9"
      },
      {
        "input": "123456789",
        "expectedOutput": "9"
      },
      {
        "input": "10",
        "expectedOutput": "1"
      },
      {
        "input": "99",
        "expectedOutput": "9"
      },
      {
        "input": "18",
        "expectedOutput": "9"
      }
    ]
  },
  {
    "id": 100,
    "section": "Sec-A",
    "title": "Check Power of Two",
    "description": "Read a positive integer n and print \"Yes\" if it is a power of two, otherwise print \"No\".",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One word: Yes or No.",
    "constraints": "1 <= n <= 10^9",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "16",
        "expectedOutput": "Yes"
      },
      {
        "input": "15",
        "expectedOutput": "No"
      },
      {
        "input": "1",
        "expectedOutput": "Yes"
      }
    ],
    "hiddenTests": [
      {
        "input": "1024",
        "expectedOutput": "Yes"
      },
      {
        "input": "100",
        "expectedOutput": "No"
      },
      {
        "input": "2",
        "expectedOutput": "Yes"
      },
      {
        "input": "1073741824",
        "expectedOutput": "Yes"
      },
      {
        "input": "1000000",
        "expectedOutput": "No"
      }
    ]
  },
  {
    "id": 101,
    "section": "Sec-A",
    "title": "Check Strong Number",
    "description": "Read a positive integer n and print \"Strong\" if the sum of the factorials of its digits equals n (e.g. 145 = 1! + 4! + 5!), otherwise print \"Not Strong\".",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One phrase: Strong or Not Strong.",
    "constraints": "1 <= n <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "145",
        "expectedOutput": "Strong"
      },
      {
        "input": "1",
        "expectedOutput": "Strong"
      },
      {
        "input": "2",
        "expectedOutput": "Strong"
      }
    ],
    "hiddenTests": [
      {
        "input": "123",
        "expectedOutput": "Not Strong"
      },
      {
        "input": "40585",
        "expectedOutput": "Strong"
      },
      {
        "input": "405",
        "expectedOutput": "Not Strong"
      },
      {
        "input": "1",
        "expectedOutput": "Strong"
      },
      {
        "input": "100",
        "expectedOutput": "Not Strong"
      }
    ]
  },
  {
    "id": 102,
    "section": "Sec-A",
    "title": "Sum of First N Prime Numbers",
    "description": "Read a positive integer n and print the sum of the first n prime numbers.",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — the sum.",
    "constraints": "1 <= n <= 20",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "1",
        "expectedOutput": "2"
      },
      {
        "input": "2",
        "expectedOutput": "5"
      },
      {
        "input": "5",
        "expectedOutput": "28"
      }
    ],
    "hiddenTests": [
      {
        "input": "10",
        "expectedOutput": "129"
      },
      {
        "input": "3",
        "expectedOutput": "10"
      },
      {
        "input": "15",
        "expectedOutput": "328"
      },
      {
        "input": "20",
        "expectedOutput": "639"
      },
      {
        "input": "4",
        "expectedOutput": "17"
      }
    ]
  },
  {
    "id": 103,
    "section": "Sec-A",
    "title": "Nth Prime Number",
    "description": "Read a positive integer n and print the nth prime number (the 1st prime is 2).",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — the nth prime.",
    "constraints": "1 <= n <= 30",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "1",
        "expectedOutput": "2"
      },
      {
        "input": "2",
        "expectedOutput": "3"
      },
      {
        "input": "5",
        "expectedOutput": "11"
      }
    ],
    "hiddenTests": [
      {
        "input": "10",
        "expectedOutput": "29"
      },
      {
        "input": "3",
        "expectedOutput": "5"
      },
      {
        "input": "15",
        "expectedOutput": "47"
      },
      {
        "input": "20",
        "expectedOutput": "71"
      },
      {
        "input": "30",
        "expectedOutput": "113"
      }
    ]
  },
  {
    "id": 104,
    "section": "Sec-A",
    "title": "Check Automorphic Number",
    "description": "Read a non-negative integer n and print \"Yes\" if n squared ends with the digits of n itself, otherwise print \"No\".",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One word: Yes or No.",
    "constraints": "0 <= n <= 10^5",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5",
        "expectedOutput": "Yes"
      },
      {
        "input": "6",
        "expectedOutput": "Yes"
      },
      {
        "input": "25",
        "expectedOutput": "Yes"
      }
    ],
    "hiddenTests": [
      {
        "input": "76",
        "expectedOutput": "Yes"
      },
      {
        "input": "100",
        "expectedOutput": "No"
      },
      {
        "input": "7",
        "expectedOutput": "No"
      },
      {
        "input": "625",
        "expectedOutput": "Yes"
      },
      {
        "input": "1",
        "expectedOutput": "Yes"
      }
    ]
  },
  {
    "id": 105,
    "section": "Sec-A",
    "title": "Check if a Number is a Multiple of Another",
    "description": "Read two integers a and b (b != 0) and print \"Yes\" if a is a multiple of b, otherwise print \"No\".",
    "inputFormat": "One line with two integers a and b.",
    "outputFormat": "One word: Yes or No.",
    "constraints": "-10^6 <= a <= 10^6, b != 0",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "10 5",
        "expectedOutput": "Yes"
      },
      {
        "input": "10 3",
        "expectedOutput": "No"
      },
      {
        "input": "0 7",
        "expectedOutput": "Yes"
      }
    ],
    "hiddenTests": [
      {
        "input": "-15 5",
        "expectedOutput": "Yes"
      },
      {
        "input": "17 1",
        "expectedOutput": "Yes"
      },
      {
        "input": "100 25",
        "expectedOutput": "Yes"
      },
      {
        "input": "-8 -4",
        "expectedOutput": "Yes"
      },
      {
        "input": "9 4",
        "expectedOutput": "No"
      }
    ]
  },
  {
    "id": 106,
    "section": "Sec-B",
    "title": "Calculate Simple Interest",
    "description": "Read principal P, rate R and time T, and print the simple interest using SI = (P * R * T) / 100.",
    "inputFormat": "One line with three numbers: P, R, T.",
    "outputFormat": "One number — the simple interest.",
    "constraints": "0 <= P, R, T <= 10^5",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "1000 5 2",
        "expectedOutput": "100"
      },
      {
        "input": "5000 10 3",
        "expectedOutput": "1500"
      },
      {
        "input": "2000 7.5 4",
        "expectedOutput": "600"
      }
    ],
    "hiddenTests": [
      {
        "input": "100 100 1",
        "expectedOutput": "100"
      },
      {
        "input": "12345 4 2",
        "expectedOutput": "987.6"
      },
      {
        "input": "0 5 10",
        "expectedOutput": "0"
      },
      {
        "input": "10000 2.5 5",
        "expectedOutput": "1250"
      },
      {
        "input": "1500 3 1",
        "expectedOutput": "45"
      }
    ]
  },
  {
    "id": 107,
    "section": "Sec-B",
    "title": "Calculate Compound Interest",
    "description": "Read principal P, rate R and time T, and print the final amount using compound interest: A = P * (1 + R/100)^T.",
    "inputFormat": "One line with three numbers: P, R, T.",
    "outputFormat": "One number — the amount after compound interest.",
    "constraints": "0 <= P, R <= 10^5, 0 <= T <= 20",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "1000 5 2",
        "expectedOutput": "1102.5"
      },
      {
        "input": "1000 10 1",
        "expectedOutput": "1100"
      },
      {
        "input": "2000 10 2",
        "expectedOutput": "2420"
      }
    ],
    "hiddenTests": [
      {
        "input": "5000 0 5",
        "expectedOutput": "5000"
      },
      {
        "input": "100 5 3",
        "expectedOutput": "115.76"
      },
      {
        "input": "1000 20 2",
        "expectedOutput": "1440"
      },
      {
        "input": "10000 8 3",
        "expectedOutput": "12597.12"
      },
      {
        "input": "2500 4 2",
        "expectedOutput": "2704"
      }
    ]
  },
  {
    "id": 108,
    "section": "Sec-B",
    "title": "Calculate Area of Circle",
    "description": "Read the radius of a circle and print its area, using pi = 3.14.",
    "inputFormat": "One line with one integer: radius.",
    "outputFormat": "One number — the area.",
    "constraints": "1 <= radius <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "7",
        "expectedOutput": "153.86"
      },
      {
        "input": "10",
        "expectedOutput": "314"
      },
      {
        "input": "1",
        "expectedOutput": "3.14"
      }
    ],
    "hiddenTests": [
      {
        "input": "5",
        "expectedOutput": "78.5"
      },
      {
        "input": "14",
        "expectedOutput": "615.44"
      },
      {
        "input": "2",
        "expectedOutput": "12.56"
      },
      {
        "input": "20",
        "expectedOutput": "1256"
      },
      {
        "input": "100",
        "expectedOutput": "31400"
      }
    ]
  },
  {
    "id": 109,
    "section": "Sec-B",
    "title": "Calculate Circumference of Circle",
    "description": "Read the radius of a circle and print its circumference, using 2 * pi * r with pi = 3.14.",
    "inputFormat": "One line with one integer: radius.",
    "outputFormat": "One number — the circumference.",
    "constraints": "1 <= radius <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "7",
        "expectedOutput": "43.96"
      },
      {
        "input": "10",
        "expectedOutput": "62.8"
      },
      {
        "input": "1",
        "expectedOutput": "6.28"
      }
    ],
    "hiddenTests": [
      {
        "input": "5",
        "expectedOutput": "31.4"
      },
      {
        "input": "14",
        "expectedOutput": "87.92"
      },
      {
        "input": "2",
        "expectedOutput": "12.56"
      },
      {
        "input": "20",
        "expectedOutput": "125.6"
      },
      {
        "input": "100",
        "expectedOutput": "628"
      }
    ]
  },
  {
    "id": 110,
    "section": "Sec-B",
    "title": "Calculate Area of Rectangle",
    "description": "Read the length and breadth of a rectangle and print its area.",
    "inputFormat": "One line with two integers: length, breadth.",
    "outputFormat": "One integer — the area.",
    "constraints": "1 <= length, breadth <= 10^4",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "10 5",
        "expectedOutput": "50"
      },
      {
        "input": "7 3",
        "expectedOutput": "21"
      },
      {
        "input": "1 1",
        "expectedOutput": "1"
      }
    ],
    "hiddenTests": [
      {
        "input": "100 50",
        "expectedOutput": "5000"
      },
      {
        "input": "12 8",
        "expectedOutput": "96"
      },
      {
        "input": "9 9",
        "expectedOutput": "81"
      },
      {
        "input": "6 8",
        "expectedOutput": "48"
      },
      {
        "input": "15 4",
        "expectedOutput": "60"
      }
    ]
  },
  {
    "id": 111,
    "section": "Sec-B",
    "title": "Calculate Perimeter of Rectangle",
    "description": "Read the length and breadth of a rectangle and print its perimeter.",
    "inputFormat": "One line with two integers: length, breadth.",
    "outputFormat": "One integer — the perimeter.",
    "constraints": "1 <= length, breadth <= 10^4",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "10 5",
        "expectedOutput": "30"
      },
      {
        "input": "7 3",
        "expectedOutput": "20"
      },
      {
        "input": "1 1",
        "expectedOutput": "4"
      }
    ],
    "hiddenTests": [
      {
        "input": "100 50",
        "expectedOutput": "300"
      },
      {
        "input": "12 8",
        "expectedOutput": "40"
      },
      {
        "input": "9 9",
        "expectedOutput": "36"
      },
      {
        "input": "6 8",
        "expectedOutput": "28"
      },
      {
        "input": "15 4",
        "expectedOutput": "38"
      }
    ]
  },
  {
    "id": 112,
    "section": "Sec-B",
    "title": "Calculate Area of Triangle",
    "description": "Read the base and height of a triangle and print its area using 1/2 * base * height.",
    "inputFormat": "One line with two integers: base, height.",
    "outputFormat": "One number — the area.",
    "constraints": "1 <= base, height <= 10^4",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "10 6",
        "expectedOutput": "30"
      },
      {
        "input": "4 5",
        "expectedOutput": "10"
      },
      {
        "input": "7 3",
        "expectedOutput": "10.5"
      }
    ],
    "hiddenTests": [
      {
        "input": "1 1",
        "expectedOutput": "0.5"
      },
      {
        "input": "100 50",
        "expectedOutput": "2500"
      },
      {
        "input": "9 9",
        "expectedOutput": "40.5"
      },
      {
        "input": "6 8",
        "expectedOutput": "24"
      },
      {
        "input": "15 4",
        "expectedOutput": "30"
      }
    ]
  },
  {
    "id": 113,
    "section": "Sec-B",
    "title": "Convert Celsius to Fahrenheit",
    "description": "Read a temperature in Celsius and print the equivalent in Fahrenheit, using F = (C * 9/5) + 32.",
    "inputFormat": "One line with one integer: Celsius temperature.",
    "outputFormat": "One number — Fahrenheit.",
    "constraints": "-273 <= C <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "25",
        "expectedOutput": "77"
      },
      {
        "input": "0",
        "expectedOutput": "32"
      },
      {
        "input": "100",
        "expectedOutput": "212"
      }
    ],
    "hiddenTests": [
      {
        "input": "-40",
        "expectedOutput": "-40"
      },
      {
        "input": "37",
        "expectedOutput": "98.6"
      },
      {
        "input": "20",
        "expectedOutput": "68"
      },
      {
        "input": "-10",
        "expectedOutput": "14"
      },
      {
        "input": "212",
        "expectedOutput": "413.6"
      }
    ]
  },
  {
    "id": 114,
    "section": "Sec-B",
    "title": "Convert Fahrenheit to Celsius",
    "description": "Read a temperature in Fahrenheit and print the equivalent in Celsius, using C = (F - 32) * 5/9.",
    "inputFormat": "One line with one number: Fahrenheit temperature.",
    "outputFormat": "One number — Celsius.",
    "constraints": "-459 <= F <= 2000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "98.6",
        "expectedOutput": "37"
      },
      {
        "input": "32",
        "expectedOutput": "0"
      },
      {
        "input": "212",
        "expectedOutput": "100"
      }
    ],
    "hiddenTests": [
      {
        "input": "-40",
        "expectedOutput": "-40"
      },
      {
        "input": "100",
        "expectedOutput": "37.78"
      },
      {
        "input": "68",
        "expectedOutput": "20"
      },
      {
        "input": "77",
        "expectedOutput": "25"
      },
      {
        "input": "451",
        "expectedOutput": "232.78"
      }
    ]
  },
  {
    "id": 115,
    "section": "Sec-B",
    "title": "Calculate Average of Three Numbers",
    "description": "Read three numbers and print their average.",
    "inputFormat": "One line with three integers.",
    "outputFormat": "One number — the average.",
    "constraints": "-10^5 <= each number <= 10^5",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "10 20 30",
        "expectedOutput": "20"
      },
      {
        "input": "5 5 5",
        "expectedOutput": "5"
      },
      {
        "input": "1 2 3",
        "expectedOutput": "2"
      }
    ],
    "hiddenTests": [
      {
        "input": "0 0 0",
        "expectedOutput": "0"
      },
      {
        "input": "100 200 300",
        "expectedOutput": "200"
      },
      {
        "input": "-10 10 0",
        "expectedOutput": "0"
      },
      {
        "input": "7 8 9",
        "expectedOutput": "8"
      },
      {
        "input": "15 25 35",
        "expectedOutput": "25"
      }
    ]
  },
  {
    "id": 116,
    "section": "Sec-B",
    "title": "Calculate Total and Average Marks",
    "description": "Read marks of 5 subjects and print the total and average in the exact format \"Total = X, Average = Y\".",
    "inputFormat": "One line with 5 integers.",
    "outputFormat": "One line: Total = X, Average = Y",
    "constraints": "0 <= each mark <= 100",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "80 70 90 85 75",
        "expectedOutput": "Total = 400, Average = 80"
      },
      {
        "input": "100 100 100 100 100",
        "expectedOutput": "Total = 500, Average = 100"
      },
      {
        "input": "0 0 0 0 0",
        "expectedOutput": "Total = 0, Average = 0"
      }
    ],
    "hiddenTests": [
      {
        "input": "50 60 70 80 90",
        "expectedOutput": "Total = 350, Average = 70"
      },
      {
        "input": "40 40 40 40 40",
        "expectedOutput": "Total = 200, Average = 40"
      },
      {
        "input": "60 70 80 90 100",
        "expectedOutput": "Total = 400, Average = 80"
      },
      {
        "input": "35 45 55 65 75",
        "expectedOutput": "Total = 275, Average = 55"
      },
      {
        "input": "90 85 80 95 100",
        "expectedOutput": "Total = 450, Average = 90"
      }
    ]
  },
  {
    "id": 117,
    "section": "Sec-B",
    "title": "Calculate Percentage",
    "description": "Read total marks obtained and maximum marks and print the percentage.",
    "inputFormat": "One line with two integers: marks obtained, maximum marks.",
    "outputFormat": "One number — the percentage.",
    "constraints": "0 <= marks <= maximum <= 10^4",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "450 500",
        "expectedOutput": "90"
      },
      {
        "input": "90 100",
        "expectedOutput": "90"
      },
      {
        "input": "0 100",
        "expectedOutput": "0"
      }
    ],
    "hiddenTests": [
      {
        "input": "100 100",
        "expectedOutput": "100"
      },
      {
        "input": "250 400",
        "expectedOutput": "62.5"
      },
      {
        "input": "75 150",
        "expectedOutput": "50"
      },
      {
        "input": "333 500",
        "expectedOutput": "66.6"
      },
      {
        "input": "48 60",
        "expectedOutput": "80"
      }
    ]
  },
  {
    "id": 118,
    "section": "Sec-B",
    "title": "Calculate Profit",
    "description": "Read cost price and selling price (selling price is greater) and print the profit.",
    "inputFormat": "One line with two integers: cost price, selling price.",
    "outputFormat": "One integer — the profit.",
    "constraints": "0 <= cost price <= selling price <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "500 650",
        "expectedOutput": "150"
      },
      {
        "input": "100 150",
        "expectedOutput": "50"
      },
      {
        "input": "1000 1000",
        "expectedOutput": "0"
      }
    ],
    "hiddenTests": [
      {
        "input": "200 500",
        "expectedOutput": "300"
      },
      {
        "input": "50 75",
        "expectedOutput": "25"
      },
      {
        "input": "1000 1200",
        "expectedOutput": "200"
      },
      {
        "input": "300 450",
        "expectedOutput": "150"
      },
      {
        "input": "80 100",
        "expectedOutput": "20"
      }
    ]
  },
  {
    "id": 119,
    "section": "Sec-B",
    "title": "Calculate Loss",
    "description": "Read cost price and selling price (cost price is greater) and print the loss.",
    "inputFormat": "One line with two integers: cost price, selling price.",
    "outputFormat": "One integer — the loss.",
    "constraints": "0 <= selling price <= cost price <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "800 650",
        "expectedOutput": "150"
      },
      {
        "input": "150 100",
        "expectedOutput": "50"
      },
      {
        "input": "1000 1000",
        "expectedOutput": "0"
      }
    ],
    "hiddenTests": [
      {
        "input": "500 200",
        "expectedOutput": "300"
      },
      {
        "input": "75 50",
        "expectedOutput": "25"
      },
      {
        "input": "1200 1000",
        "expectedOutput": "200"
      },
      {
        "input": "450 300",
        "expectedOutput": "150"
      },
      {
        "input": "100 80",
        "expectedOutput": "20"
      }
    ]
  },
  {
    "id": 120,
    "section": "Sec-B",
    "title": "Calculate Total Bill",
    "description": "Read a price and a quantity and print the total bill.",
    "inputFormat": "One line with two integers: price, quantity.",
    "outputFormat": "One integer — the total bill.",
    "constraints": "1 <= price, quantity <= 10^4",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "50 4",
        "expectedOutput": "200"
      },
      {
        "input": "100 1",
        "expectedOutput": "100"
      },
      {
        "input": "25 10",
        "expectedOutput": "250"
      }
    ],
    "hiddenTests": [
      {
        "input": "10 10",
        "expectedOutput": "100"
      },
      {
        "input": "999 3",
        "expectedOutput": "2997"
      },
      {
        "input": "5 200",
        "expectedOutput": "1000"
      },
      {
        "input": "15 6",
        "expectedOutput": "90"
      },
      {
        "input": "1000 2",
        "expectedOutput": "2000"
      }
    ]
  },
  {
    "id": 121,
    "section": "Sec-B",
    "title": "Calculate Discount",
    "description": "Read a price and a discount percentage and print the discount amount.",
    "inputFormat": "One line with two integers: price, discount percent.",
    "outputFormat": "One number — the discount amount.",
    "constraints": "0 <= price <= 10^6, 0 <= discount <= 100",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "1000 10",
        "expectedOutput": "100"
      },
      {
        "input": "500 20",
        "expectedOutput": "100"
      },
      {
        "input": "100 5",
        "expectedOutput": "5"
      }
    ],
    "hiddenTests": [
      {
        "input": "2000 50",
        "expectedOutput": "1000"
      },
      {
        "input": "750 0",
        "expectedOutput": "0"
      },
      {
        "input": "1200 25",
        "expectedOutput": "300"
      },
      {
        "input": "999 10",
        "expectedOutput": "99.9"
      },
      {
        "input": "80 15",
        "expectedOutput": "12"
      }
    ]
  },
  {
    "id": 122,
    "section": "Sec-B",
    "title": "Calculate Final Price After Discount",
    "description": "Read a price and a discount percentage and print the final price after applying the discount.",
    "inputFormat": "One line with two integers: price, discount percent.",
    "outputFormat": "One number — the final price.",
    "constraints": "0 <= price <= 10^6, 0 <= discount <= 100",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "1000 10",
        "expectedOutput": "900"
      },
      {
        "input": "500 20",
        "expectedOutput": "400"
      },
      {
        "input": "100 5",
        "expectedOutput": "95"
      }
    ],
    "hiddenTests": [
      {
        "input": "2000 50",
        "expectedOutput": "1000"
      },
      {
        "input": "750 0",
        "expectedOutput": "750"
      },
      {
        "input": "1200 25",
        "expectedOutput": "900"
      },
      {
        "input": "999 10",
        "expectedOutput": "899.1"
      },
      {
        "input": "80 15",
        "expectedOutput": "68"
      }
    ]
  },
  {
    "id": 123,
    "section": "Sec-B",
    "title": "Calculate Salary",
    "description": "Read basic salary, HRA and DA and print the gross salary (sum of all three).",
    "inputFormat": "One line with three integers: basic, HRA, DA.",
    "outputFormat": "One integer — the gross salary.",
    "constraints": "0 <= each value <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "20000 4000 3000",
        "expectedOutput": "27000"
      },
      {
        "input": "15000 3000 2000",
        "expectedOutput": "20000"
      },
      {
        "input": "0 0 0",
        "expectedOutput": "0"
      }
    ],
    "hiddenTests": [
      {
        "input": "50000 10000 8000",
        "expectedOutput": "68000"
      },
      {
        "input": "10000 2000 1000",
        "expectedOutput": "13000"
      },
      {
        "input": "25000 5000 4000",
        "expectedOutput": "34000"
      },
      {
        "input": "30000 6000 5000",
        "expectedOutput": "41000"
      },
      {
        "input": "18000 3600 2700",
        "expectedOutput": "24300"
      }
    ]
  },
  {
    "id": 124,
    "section": "Sec-B",
    "title": "Swap Two Numbers",
    "description": "Read two integers and print them swapped (using a third variable in your implementation), second value first then first value.",
    "inputFormat": "One line with two integers a, b.",
    "outputFormat": "Two integers, space-separated: b a.",
    "constraints": "-10^6 <= a, b <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "10 20",
        "expectedOutput": "20 10"
      },
      {
        "input": "5 5",
        "expectedOutput": "5 5"
      },
      {
        "input": "-3 8",
        "expectedOutput": "8 -3"
      }
    ],
    "hiddenTests": [
      {
        "input": "0 9",
        "expectedOutput": "9 0"
      },
      {
        "input": "100 -100",
        "expectedOutput": "-100 100"
      },
      {
        "input": "7 3",
        "expectedOutput": "3 7"
      },
      {
        "input": "-1 -2",
        "expectedOutput": "-2 -1"
      },
      {
        "input": "1000 2000",
        "expectedOutput": "2000 1000"
      }
    ]
  },
  {
    "id": 125,
    "section": "Sec-B",
    "title": "Swap Two Numbers Without Third Variable",
    "description": "Read two integers and print them swapped using arithmetic (no temporary variable), second value first then first value.",
    "inputFormat": "One line with two integers a, b.",
    "outputFormat": "Two integers, space-separated: b a.",
    "constraints": "-10^6 <= a, b <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "10 20",
        "expectedOutput": "20 10"
      },
      {
        "input": "5 5",
        "expectedOutput": "5 5"
      },
      {
        "input": "-3 8",
        "expectedOutput": "8 -3"
      }
    ],
    "hiddenTests": [
      {
        "input": "0 9",
        "expectedOutput": "9 0"
      },
      {
        "input": "100 -100",
        "expectedOutput": "-100 100"
      },
      {
        "input": "7 3",
        "expectedOutput": "3 7"
      },
      {
        "input": "-1 -2",
        "expectedOutput": "-2 -1"
      },
      {
        "input": "1000 2000",
        "expectedOutput": "2000 1000"
      }
    ]
  },
  {
    "id": 126,
    "section": "Sec-B",
    "title": "Find Remainder",
    "description": "Read two integers and print the remainder when the first is divided by the second.",
    "inputFormat": "One line with two integers a, b (b != 0).",
    "outputFormat": "One integer — a % b.",
    "constraints": "-10^4 <= a, b <= 10^4, b != 0",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "10 3",
        "expectedOutput": "1"
      },
      {
        "input": "17 5",
        "expectedOutput": "2"
      },
      {
        "input": "100 9",
        "expectedOutput": "1"
      }
    ],
    "hiddenTests": [
      {
        "input": "7 7",
        "expectedOutput": "0"
      },
      {
        "input": "25 4",
        "expectedOutput": "1"
      },
      {
        "input": "9 2",
        "expectedOutput": "1"
      },
      {
        "input": "50 6",
        "expectedOutput": "2"
      },
      {
        "input": "81 8",
        "expectedOutput": "1"
      }
    ]
  },
  {
    "id": 127,
    "section": "Sec-B",
    "title": "Find Quotient",
    "description": "Read two integers and print the quotient when the first is divided by the second, using integer division.",
    "inputFormat": "One line with two integers a, b (b != 0).",
    "outputFormat": "One integer — a / b, truncated.",
    "constraints": "-10^4 <= a, b <= 10^4, b != 0",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "17 5",
        "expectedOutput": "3"
      },
      {
        "input": "10 3",
        "expectedOutput": "3"
      },
      {
        "input": "100 9",
        "expectedOutput": "11"
      }
    ],
    "hiddenTests": [
      {
        "input": "7 7",
        "expectedOutput": "1"
      },
      {
        "input": "25 4",
        "expectedOutput": "6"
      },
      {
        "input": "9 2",
        "expectedOutput": "4"
      },
      {
        "input": "50 6",
        "expectedOutput": "8"
      },
      {
        "input": "81 8",
        "expectedOutput": "10"
      }
    ]
  },
  {
    "id": 128,
    "section": "Sec-B",
    "title": "Find First Digit of a 4-Digit Number",
    "description": "Read a 4-digit number and print its first (leftmost) digit.",
    "inputFormat": "One line with one 4-digit integer n.",
    "outputFormat": "One integer — the first digit.",
    "constraints": "1000 <= n <= 9999",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5832",
        "expectedOutput": "5"
      },
      {
        "input": "1234",
        "expectedOutput": "1"
      },
      {
        "input": "9999",
        "expectedOutput": "9"
      }
    ],
    "hiddenTests": [
      {
        "input": "1000",
        "expectedOutput": "1"
      },
      {
        "input": "4567",
        "expectedOutput": "4"
      },
      {
        "input": "8100",
        "expectedOutput": "8"
      },
      {
        "input": "2020",
        "expectedOutput": "2"
      },
      {
        "input": "6789",
        "expectedOutput": "6"
      }
    ]
  },
  {
    "id": 129,
    "section": "Sec-B",
    "title": "Find Last Digit",
    "description": "Read a number and print its last digit.",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — the last digit.",
    "constraints": "0 <= n <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5832",
        "expectedOutput": "2"
      },
      {
        "input": "1234",
        "expectedOutput": "4"
      },
      {
        "input": "9999",
        "expectedOutput": "9"
      }
    ],
    "hiddenTests": [
      {
        "input": "1000",
        "expectedOutput": "0"
      },
      {
        "input": "7",
        "expectedOutput": "7"
      },
      {
        "input": "8100",
        "expectedOutput": "0"
      },
      {
        "input": "2020",
        "expectedOutput": "0"
      },
      {
        "input": "6789",
        "expectedOutput": "9"
      }
    ]
  },
  {
    "id": 130,
    "section": "Sec-B",
    "title": "Sum of First and Last Digit",
    "description": "Read a 4-digit number and print the sum of its first and last digit.",
    "inputFormat": "One line with one 4-digit integer n.",
    "outputFormat": "One integer — the sum.",
    "constraints": "1000 <= n <= 9999",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "1234",
        "expectedOutput": "5"
      },
      {
        "input": "5832",
        "expectedOutput": "7"
      },
      {
        "input": "9999",
        "expectedOutput": "18"
      }
    ],
    "hiddenTests": [
      {
        "input": "1000",
        "expectedOutput": "1"
      },
      {
        "input": "4567",
        "expectedOutput": "11"
      },
      {
        "input": "8100",
        "expectedOutput": "8"
      },
      {
        "input": "2020",
        "expectedOutput": "2"
      },
      {
        "input": "6789",
        "expectedOutput": "15"
      }
    ]
  },
  {
    "id": 131,
    "section": "Sec-B",
    "title": "Sum of Digits (4-Digit Number)",
    "description": "Read a 4-digit number and print the sum of all its digits.",
    "inputFormat": "One line with one 4-digit integer n.",
    "outputFormat": "One integer — the digit sum.",
    "constraints": "1000 <= n <= 9999",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "1234",
        "expectedOutput": "10"
      },
      {
        "input": "5832",
        "expectedOutput": "18"
      },
      {
        "input": "9999",
        "expectedOutput": "36"
      }
    ],
    "hiddenTests": [
      {
        "input": "1000",
        "expectedOutput": "1"
      },
      {
        "input": "4567",
        "expectedOutput": "22"
      },
      {
        "input": "8100",
        "expectedOutput": "9"
      },
      {
        "input": "2020",
        "expectedOutput": "4"
      },
      {
        "input": "6789",
        "expectedOutput": "30"
      }
    ]
  },
  {
    "id": 132,
    "section": "Sec-B",
    "title": "Product of Digits",
    "description": "Read a 4-digit number and print the product of all its digits.",
    "inputFormat": "One line with one 4-digit integer n.",
    "outputFormat": "One integer — the digit product.",
    "constraints": "1000 <= n <= 9999",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "1234",
        "expectedOutput": "24"
      },
      {
        "input": "5832",
        "expectedOutput": "240"
      },
      {
        "input": "9999",
        "expectedOutput": "6561"
      }
    ],
    "hiddenTests": [
      {
        "input": "1111",
        "expectedOutput": "1"
      },
      {
        "input": "4567",
        "expectedOutput": "840"
      },
      {
        "input": "8211",
        "expectedOutput": "16"
      },
      {
        "input": "2222",
        "expectedOutput": "16"
      },
      {
        "input": "6789",
        "expectedOutput": "3024"
      }
    ]
  },
  {
    "id": 133,
    "section": "Sec-B",
    "title": "Reverse a 4-Digit Number",
    "description": "Read a 4-digit number and print it with its digits reversed.",
    "inputFormat": "One line with one 4-digit integer n.",
    "outputFormat": "One integer — n with digits reversed.",
    "constraints": "1000 <= n <= 9999",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "1234",
        "expectedOutput": "4321"
      },
      {
        "input": "5832",
        "expectedOutput": "2385"
      },
      {
        "input": "9999",
        "expectedOutput": "9999"
      }
    ],
    "hiddenTests": [
      {
        "input": "1000",
        "expectedOutput": "1"
      },
      {
        "input": "4567",
        "expectedOutput": "7654"
      },
      {
        "input": "8100",
        "expectedOutput": "18"
      },
      {
        "input": "2020",
        "expectedOutput": "202"
      },
      {
        "input": "6789",
        "expectedOutput": "9876"
      }
    ]
  },
  {
    "id": 134,
    "section": "Sec-B",
    "title": "Reverse a 3-Digit Number",
    "description": "Read a 3-digit number and print it with its digits reversed.",
    "inputFormat": "One line with one 3-digit integer n.",
    "outputFormat": "One integer — n with digits reversed.",
    "constraints": "100 <= n <= 999",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "583",
        "expectedOutput": "385"
      },
      {
        "input": "123",
        "expectedOutput": "321"
      },
      {
        "input": "999",
        "expectedOutput": "999"
      }
    ],
    "hiddenTests": [
      {
        "input": "100",
        "expectedOutput": "1"
      },
      {
        "input": "456",
        "expectedOutput": "654"
      },
      {
        "input": "810",
        "expectedOutput": "18"
      },
      {
        "input": "202",
        "expectedOutput": "202"
      },
      {
        "input": "678",
        "expectedOutput": "876"
      }
    ]
  },
  {
    "id": 135,
    "section": "Sec-B",
    "title": "Form a 4-Digit Number",
    "description": "Read four single digits and print the 4-digit number formed by combining them in order.",
    "inputFormat": "One line with four single-digit integers.",
    "outputFormat": "One integer — the combined 4-digit number.",
    "constraints": "0 <= each digit <= 9",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "2 7 5 9",
        "expectedOutput": "2759"
      },
      {
        "input": "1 2 3 4",
        "expectedOutput": "1234"
      },
      {
        "input": "9 9 9 9",
        "expectedOutput": "9999"
      }
    ],
    "hiddenTests": [
      {
        "input": "0 0 0 1",
        "expectedOutput": "1"
      },
      {
        "input": "5 0 0 0",
        "expectedOutput": "5000"
      },
      {
        "input": "8 1 0 2",
        "expectedOutput": "8102"
      },
      {
        "input": "3 3 3 3",
        "expectedOutput": "3333"
      },
      {
        "input": "7 6 5 4",
        "expectedOutput": "7654"
      }
    ]
  },
  {
    "id": 136,
    "section": "Sec-B",
    "title": "Extract Hundreds Digit",
    "description": "Read a 4-digit number and print its hundreds digit.",
    "inputFormat": "One line with one 4-digit integer n.",
    "outputFormat": "One integer — the hundreds digit.",
    "constraints": "1000 <= n <= 9999",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5832",
        "expectedOutput": "8"
      },
      {
        "input": "1234",
        "expectedOutput": "2"
      },
      {
        "input": "9999",
        "expectedOutput": "9"
      }
    ],
    "hiddenTests": [
      {
        "input": "1000",
        "expectedOutput": "0"
      },
      {
        "input": "4567",
        "expectedOutput": "5"
      },
      {
        "input": "8100",
        "expectedOutput": "1"
      },
      {
        "input": "2020",
        "expectedOutput": "0"
      },
      {
        "input": "6789",
        "expectedOutput": "7"
      }
    ]
  },
  {
    "id": 137,
    "section": "Sec-B",
    "title": "Extract Tens Digit",
    "description": "Read a 4-digit number and print its tens digit.",
    "inputFormat": "One line with one 4-digit integer n.",
    "outputFormat": "One integer — the tens digit.",
    "constraints": "1000 <= n <= 9999",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5832",
        "expectedOutput": "3"
      },
      {
        "input": "1234",
        "expectedOutput": "3"
      },
      {
        "input": "9999",
        "expectedOutput": "9"
      }
    ],
    "hiddenTests": [
      {
        "input": "1000",
        "expectedOutput": "0"
      },
      {
        "input": "4567",
        "expectedOutput": "6"
      },
      {
        "input": "8100",
        "expectedOutput": "0"
      },
      {
        "input": "2020",
        "expectedOutput": "2"
      },
      {
        "input": "6789",
        "expectedOutput": "8"
      }
    ]
  },
  {
    "id": 138,
    "section": "Sec-B",
    "title": "Sum of Even Digits",
    "description": "Read a number and print the sum of its even-valued digits.",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — the sum of even digits.",
    "constraints": "0 <= n <= 10^7",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "123456",
        "expectedOutput": "12"
      },
      {
        "input": "2468",
        "expectedOutput": "20"
      },
      {
        "input": "13579",
        "expectedOutput": "0"
      }
    ],
    "hiddenTests": [
      {
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "input": "112233",
        "expectedOutput": "4"
      },
      {
        "input": "9080706",
        "expectedOutput": "14"
      },
      {
        "input": "55555",
        "expectedOutput": "0"
      },
      {
        "input": "42042",
        "expectedOutput": "12"
      }
    ]
  },
  {
    "id": 139,
    "section": "Sec-B",
    "title": "Sum of Odd Digits",
    "description": "Read a number and print the sum of its odd-valued digits.",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — the sum of odd digits.",
    "constraints": "0 <= n <= 10^7",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "123456",
        "expectedOutput": "9"
      },
      {
        "input": "2468",
        "expectedOutput": "0"
      },
      {
        "input": "13579",
        "expectedOutput": "25"
      }
    ],
    "hiddenTests": [
      {
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "input": "112233",
        "expectedOutput": "8"
      },
      {
        "input": "9080706",
        "expectedOutput": "16"
      },
      {
        "input": "55555",
        "expectedOutput": "25"
      },
      {
        "input": "42042",
        "expectedOutput": "0"
      }
    ]
  },
  {
    "id": 140,
    "section": "Sec-B",
    "title": "Count Digits",
    "description": "Read an integer and print how many digits it has.",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — the digit count.",
    "constraints": "0 <= n <= 10^9",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "58321",
        "expectedOutput": "5"
      },
      {
        "input": "5",
        "expectedOutput": "1"
      },
      {
        "input": "1000000",
        "expectedOutput": "7"
      }
    ],
    "hiddenTests": [
      {
        "input": "0",
        "expectedOutput": "1"
      },
      {
        "input": "42",
        "expectedOutput": "2"
      },
      {
        "input": "999999999",
        "expectedOutput": "9"
      },
      {
        "input": "100",
        "expectedOutput": "3"
      },
      {
        "input": "7654321",
        "expectedOutput": "7"
      }
    ]
  },
  {
    "id": 141,
    "section": "Sec-B",
    "title": "First and Last Digit Difference",
    "description": "Read a 4-digit number and print the absolute difference between its first and last digit.",
    "inputFormat": "One line with one 4-digit integer n.",
    "outputFormat": "One integer — the difference.",
    "constraints": "1000 <= n <= 9999",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5832",
        "expectedOutput": "3"
      },
      {
        "input": "1234",
        "expectedOutput": "3"
      },
      {
        "input": "9999",
        "expectedOutput": "0"
      }
    ],
    "hiddenTests": [
      {
        "input": "1000",
        "expectedOutput": "1"
      },
      {
        "input": "4567",
        "expectedOutput": "3"
      },
      {
        "input": "8100",
        "expectedOutput": "8"
      },
      {
        "input": "2029",
        "expectedOutput": "7"
      },
      {
        "input": "6789",
        "expectedOutput": "3"
      }
    ]
  },
  {
    "id": 142,
    "section": "Sec-B",
    "title": "First and Last Digit Product",
    "description": "Read a 4-digit number and print the product of its first and last digit.",
    "inputFormat": "One line with one 4-digit integer n.",
    "outputFormat": "One integer — the product.",
    "constraints": "1000 <= n <= 9999",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5832",
        "expectedOutput": "10"
      },
      {
        "input": "1234",
        "expectedOutput": "4"
      },
      {
        "input": "9999",
        "expectedOutput": "81"
      }
    ],
    "hiddenTests": [
      {
        "input": "1000",
        "expectedOutput": "0"
      },
      {
        "input": "4567",
        "expectedOutput": "28"
      },
      {
        "input": "8100",
        "expectedOutput": "0"
      },
      {
        "input": "2029",
        "expectedOutput": "18"
      },
      {
        "input": "6789",
        "expectedOutput": "54"
      }
    ]
  },
  {
    "id": 143,
    "section": "Sec-B",
    "title": "Check Divisibility by 5",
    "description": "Read an integer and print \"Divisible\" if it is divisible by 5, otherwise print \"Not Divisible\".",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One phrase: Divisible or Not Divisible.",
    "constraints": "0 <= n <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "25",
        "expectedOutput": "Divisible"
      },
      {
        "input": "10",
        "expectedOutput": "Divisible"
      },
      {
        "input": "7",
        "expectedOutput": "Not Divisible"
      }
    ],
    "hiddenTests": [
      {
        "input": "0",
        "expectedOutput": "Divisible"
      },
      {
        "input": "100",
        "expectedOutput": "Divisible"
      },
      {
        "input": "99",
        "expectedOutput": "Not Divisible"
      },
      {
        "input": "55",
        "expectedOutput": "Divisible"
      },
      {
        "input": "13",
        "expectedOutput": "Not Divisible"
      }
    ]
  },
  {
    "id": 144,
    "section": "Sec-B",
    "title": "Find Square of a Number",
    "description": "Read an integer and print its square.",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — n squared.",
    "constraints": "-10^4 <= n <= 10^4",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "12",
        "expectedOutput": "144"
      },
      {
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "input": "-5",
        "expectedOutput": "25"
      }
    ],
    "hiddenTests": [
      {
        "input": "100",
        "expectedOutput": "10000"
      },
      {
        "input": "7",
        "expectedOutput": "49"
      },
      {
        "input": "20",
        "expectedOutput": "400"
      },
      {
        "input": "-15",
        "expectedOutput": "225"
      },
      {
        "input": "50",
        "expectedOutput": "2500"
      }
    ]
  },
  {
    "id": 145,
    "section": "Sec-B",
    "title": "Find Cube of a Number",
    "description": "Read an integer and print its cube.",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — n cubed.",
    "constraints": "-1000 <= n <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5",
        "expectedOutput": "125"
      },
      {
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "input": "-3",
        "expectedOutput": "-27"
      }
    ],
    "hiddenTests": [
      {
        "input": "10",
        "expectedOutput": "1000"
      },
      {
        "input": "2",
        "expectedOutput": "8"
      },
      {
        "input": "7",
        "expectedOutput": "343"
      },
      {
        "input": "-4",
        "expectedOutput": "-64"
      },
      {
        "input": "9",
        "expectedOutput": "729"
      }
    ]
  },
  {
    "id": 146,
    "section": "Sec-B",
    "title": "Check Even or Odd (Sec B)",
    "description": "Read an integer and print \"Even\" or \"Odd\".",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One word: Even or Odd.",
    "constraints": "-10^6 <= n <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "17",
        "expectedOutput": "Odd"
      },
      {
        "input": "4",
        "expectedOutput": "Even"
      },
      {
        "input": "0",
        "expectedOutput": "Even"
      }
    ],
    "hiddenTests": [
      {
        "input": "-7",
        "expectedOutput": "Odd"
      },
      {
        "input": "100",
        "expectedOutput": "Even"
      },
      {
        "input": "-2",
        "expectedOutput": "Even"
      },
      {
        "input": "999",
        "expectedOutput": "Odd"
      },
      {
        "input": "8",
        "expectedOutput": "Even"
      }
    ]
  },
  {
    "id": 147,
    "section": "Sec-B",
    "title": "Check Positive, Negative or Zero (Sec B)",
    "description": "Read an integer and print \"Positive\", \"Negative\", or \"Zero\".",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One word: Positive, Negative, or Zero.",
    "constraints": "-10^6 <= n <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "-5",
        "expectedOutput": "Negative"
      },
      {
        "input": "5",
        "expectedOutput": "Positive"
      },
      {
        "input": "0",
        "expectedOutput": "Zero"
      }
    ],
    "hiddenTests": [
      {
        "input": "100",
        "expectedOutput": "Positive"
      },
      {
        "input": "-100",
        "expectedOutput": "Negative"
      },
      {
        "input": "1",
        "expectedOutput": "Positive"
      },
      {
        "input": "-1",
        "expectedOutput": "Negative"
      },
      {
        "input": "999999",
        "expectedOutput": "Positive"
      }
    ]
  },
  {
    "id": 148,
    "section": "Sec-B",
    "title": "Find Greater of Two Numbers",
    "description": "Read two integers and print the larger of the two.",
    "inputFormat": "One line with two integers.",
    "outputFormat": "One integer — the larger value.",
    "constraints": "-10^6 <= a, b <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "15 25",
        "expectedOutput": "25"
      },
      {
        "input": "25 15",
        "expectedOutput": "25"
      },
      {
        "input": "5 5",
        "expectedOutput": "5"
      }
    ],
    "hiddenTests": [
      {
        "input": "-10 10",
        "expectedOutput": "10"
      },
      {
        "input": "0 -5",
        "expectedOutput": "0"
      },
      {
        "input": "100 200",
        "expectedOutput": "200"
      },
      {
        "input": "-3 -7",
        "expectedOutput": "-3"
      },
      {
        "input": "999 1000",
        "expectedOutput": "1000"
      }
    ]
  },
  {
    "id": 149,
    "section": "Sec-B",
    "title": "Find Smaller of Two Numbers",
    "description": "Read two integers and print the smaller of the two.",
    "inputFormat": "One line with two integers.",
    "outputFormat": "One integer — the smaller value.",
    "constraints": "-10^6 <= a, b <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "15 25",
        "expectedOutput": "15"
      },
      {
        "input": "25 15",
        "expectedOutput": "15"
      },
      {
        "input": "5 5",
        "expectedOutput": "5"
      }
    ],
    "hiddenTests": [
      {
        "input": "-10 10",
        "expectedOutput": "-10"
      },
      {
        "input": "0 -5",
        "expectedOutput": "-5"
      },
      {
        "input": "100 200",
        "expectedOutput": "100"
      },
      {
        "input": "-3 -7",
        "expectedOutput": "-7"
      },
      {
        "input": "999 1000",
        "expectedOutput": "999"
      }
    ]
  },
  {
    "id": 150,
    "section": "Sec-B",
    "title": "Find Greatest of Three Numbers",
    "description": "Read three integers and print the greatest.",
    "inputFormat": "One line with three integers.",
    "outputFormat": "One integer — the greatest.",
    "constraints": "-10^6 <= a, b, c <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "10 25 15",
        "expectedOutput": "25"
      },
      {
        "input": "25 10 15",
        "expectedOutput": "25"
      },
      {
        "input": "5 5 5",
        "expectedOutput": "5"
      }
    ],
    "hiddenTests": [
      {
        "input": "-1 -2 -3",
        "expectedOutput": "-1"
      },
      {
        "input": "0 5 -5",
        "expectedOutput": "5"
      },
      {
        "input": "100 200 300",
        "expectedOutput": "300"
      },
      {
        "input": "7 3 7",
        "expectedOutput": "7"
      },
      {
        "input": "-50 0 50",
        "expectedOutput": "50"
      }
    ]
  },
  {
    "id": 151,
    "section": "Sec-B",
    "title": "Find Smallest of Three Numbers",
    "description": "Read three integers and print the smallest.",
    "inputFormat": "One line with three integers.",
    "outputFormat": "One integer — the smallest.",
    "constraints": "-10^6 <= a, b, c <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "10 25 5",
        "expectedOutput": "5"
      },
      {
        "input": "25 10 15",
        "expectedOutput": "10"
      },
      {
        "input": "5 5 5",
        "expectedOutput": "5"
      }
    ],
    "hiddenTests": [
      {
        "input": "-1 -2 -3",
        "expectedOutput": "-3"
      },
      {
        "input": "0 5 -5",
        "expectedOutput": "-5"
      },
      {
        "input": "100 200 300",
        "expectedOutput": "100"
      },
      {
        "input": "7 3 7",
        "expectedOutput": "3"
      },
      {
        "input": "-50 0 50",
        "expectedOutput": "-50"
      }
    ]
  },
  {
    "id": 152,
    "section": "Sec-B",
    "title": "Check Divisibility by 3",
    "description": "Read an integer and print \"Divisible\" if divisible by 3, otherwise print \"Not Divisible\".",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One phrase: Divisible or Not Divisible.",
    "constraints": "0 <= n <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "21",
        "expectedOutput": "Divisible"
      },
      {
        "input": "10",
        "expectedOutput": "Not Divisible"
      },
      {
        "input": "9",
        "expectedOutput": "Divisible"
      }
    ],
    "hiddenTests": [
      {
        "input": "0",
        "expectedOutput": "Divisible"
      },
      {
        "input": "100",
        "expectedOutput": "Not Divisible"
      },
      {
        "input": "99",
        "expectedOutput": "Divisible"
      },
      {
        "input": "7",
        "expectedOutput": "Not Divisible"
      },
      {
        "input": "30",
        "expectedOutput": "Divisible"
      }
    ]
  },
  {
    "id": 153,
    "section": "Sec-B",
    "title": "Check Divisibility by 3 and 5 (Sec B)",
    "description": "Read an integer and print \"Divisible\" if it is divisible by both 3 and 5, otherwise print \"Not Divisible\".",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One phrase: Divisible or Not Divisible.",
    "constraints": "0 <= n <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "30",
        "expectedOutput": "Divisible"
      },
      {
        "input": "15",
        "expectedOutput": "Divisible"
      },
      {
        "input": "9",
        "expectedOutput": "Not Divisible"
      }
    ],
    "hiddenTests": [
      {
        "input": "0",
        "expectedOutput": "Divisible"
      },
      {
        "input": "45",
        "expectedOutput": "Divisible"
      },
      {
        "input": "10",
        "expectedOutput": "Not Divisible"
      },
      {
        "input": "7",
        "expectedOutput": "Not Divisible"
      },
      {
        "input": "100",
        "expectedOutput": "Not Divisible"
      }
    ]
  },
  {
    "id": 154,
    "section": "Sec-B",
    "title": "Check Leap Year (Sec B)",
    "description": "Read a year and print \"Leap Year\" if it is a leap year, otherwise print \"Not Leap Year\".",
    "inputFormat": "One line with one integer year.",
    "outputFormat": "One phrase: Leap Year or Not Leap Year.",
    "constraints": "1 <= year <= 9999",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "2024",
        "expectedOutput": "Leap Year"
      },
      {
        "input": "2023",
        "expectedOutput": "Not Leap Year"
      },
      {
        "input": "1900",
        "expectedOutput": "Not Leap Year"
      }
    ],
    "hiddenTests": [
      {
        "input": "2000",
        "expectedOutput": "Leap Year"
      },
      {
        "input": "2100",
        "expectedOutput": "Not Leap Year"
      },
      {
        "input": "2400",
        "expectedOutput": "Leap Year"
      },
      {
        "input": "2020",
        "expectedOutput": "Leap Year"
      },
      {
        "input": "1999",
        "expectedOutput": "Not Leap Year"
      }
    ]
  },
  {
    "id": 155,
    "section": "Sec-B",
    "title": "Check Voting Eligibility",
    "description": "Read an age and print \"Eligible\" if it is 18 or above, otherwise print \"Not Eligible\".",
    "inputFormat": "One line with one integer age.",
    "outputFormat": "One phrase: Eligible or Not Eligible.",
    "constraints": "0 <= age <= 120",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "18",
        "expectedOutput": "Eligible"
      },
      {
        "input": "17",
        "expectedOutput": "Not Eligible"
      },
      {
        "input": "0",
        "expectedOutput": "Not Eligible"
      }
    ],
    "hiddenTests": [
      {
        "input": "100",
        "expectedOutput": "Eligible"
      },
      {
        "input": "19",
        "expectedOutput": "Eligible"
      },
      {
        "input": "15",
        "expectedOutput": "Not Eligible"
      },
      {
        "input": "65",
        "expectedOutput": "Eligible"
      },
      {
        "input": "21",
        "expectedOutput": "Eligible"
      }
    ]
  },
  {
    "id": 156,
    "section": "Sec-B",
    "title": "Check Pass or Fail",
    "description": "Read a mark out of 100 and print \"Pass\" if it is 40 or above, otherwise print \"Fail\".",
    "inputFormat": "One line with one integer mark.",
    "outputFormat": "One word: Pass or Fail.",
    "constraints": "0 <= mark <= 100",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "65",
        "expectedOutput": "Pass"
      },
      {
        "input": "39",
        "expectedOutput": "Fail"
      },
      {
        "input": "40",
        "expectedOutput": "Pass"
      }
    ],
    "hiddenTests": [
      {
        "input": "100",
        "expectedOutput": "Pass"
      },
      {
        "input": "0",
        "expectedOutput": "Fail"
      },
      {
        "input": "50",
        "expectedOutput": "Pass"
      },
      {
        "input": "99",
        "expectedOutput": "Pass"
      },
      {
        "input": "35",
        "expectedOutput": "Fail"
      }
    ]
  },
  {
    "id": 157,
    "section": "Sec-B",
    "title": "Check Uppercase or Lowercase",
    "description": "Read a single alphabetic character and print \"Uppercase\" or \"Lowercase\".",
    "inputFormat": "One line with one letter.",
    "outputFormat": "One word: Uppercase or Lowercase.",
    "constraints": "input is a single letter A-Z or a-z",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "A",
        "expectedOutput": "Uppercase"
      },
      {
        "input": "a",
        "expectedOutput": "Lowercase"
      },
      {
        "input": "Z",
        "expectedOutput": "Uppercase"
      }
    ],
    "hiddenTests": [
      {
        "input": "z",
        "expectedOutput": "Lowercase"
      },
      {
        "input": "M",
        "expectedOutput": "Uppercase"
      },
      {
        "input": "m",
        "expectedOutput": "Lowercase"
      },
      {
        "input": "Q",
        "expectedOutput": "Uppercase"
      },
      {
        "input": "q",
        "expectedOutput": "Lowercase"
      }
    ]
  },
  {
    "id": 158,
    "section": "Sec-B",
    "title": "Check Vowel or Consonant",
    "description": "Read a single alphabetic character and print \"Vowel\" or \"Consonant\" (case-insensitive).",
    "inputFormat": "One line with one letter.",
    "outputFormat": "One word: Vowel or Consonant.",
    "constraints": "input is a single letter A-Z or a-z",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "e",
        "expectedOutput": "Vowel"
      },
      {
        "input": "b",
        "expectedOutput": "Consonant"
      },
      {
        "input": "A",
        "expectedOutput": "Vowel"
      }
    ],
    "hiddenTests": [
      {
        "input": "z",
        "expectedOutput": "Consonant"
      },
      {
        "input": "I",
        "expectedOutput": "Vowel"
      },
      {
        "input": "x",
        "expectedOutput": "Consonant"
      },
      {
        "input": "o",
        "expectedOutput": "Vowel"
      },
      {
        "input": "k",
        "expectedOutput": "Consonant"
      }
    ]
  },
  {
    "id": 159,
    "section": "Sec-B",
    "title": "Check Alphabet, Digit or Special Character",
    "description": "Read a single character and print \"Alphabet\", \"Digit\", or \"Special Character\" depending on its type.",
    "inputFormat": "One line with one character.",
    "outputFormat": "One phrase describing the character type.",
    "constraints": "input is a single printable ASCII character",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "7",
        "expectedOutput": "Digit"
      },
      {
        "input": "A",
        "expectedOutput": "Alphabet"
      },
      {
        "input": "@",
        "expectedOutput": "Special Character"
      }
    ],
    "hiddenTests": [
      {
        "input": "9",
        "expectedOutput": "Digit"
      },
      {
        "input": "z",
        "expectedOutput": "Alphabet"
      },
      {
        "input": "#",
        "expectedOutput": "Special Character"
      },
      {
        "input": "0",
        "expectedOutput": "Digit"
      },
      {
        "input": "k",
        "expectedOutput": "Alphabet"
      }
    ]
  },
  {
    "id": 160,
    "section": "Sec-B",
    "title": "Check Multiple of 7",
    "description": "Read an integer and print \"Multiple\" if it is a multiple of 7, otherwise print \"Not Multiple\".",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One word: Multiple or Not Multiple.",
    "constraints": "0 <= n <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "49",
        "expectedOutput": "Multiple"
      },
      {
        "input": "10",
        "expectedOutput": "Not Multiple"
      },
      {
        "input": "0",
        "expectedOutput": "Multiple"
      }
    ],
    "hiddenTests": [
      {
        "input": "77",
        "expectedOutput": "Multiple"
      },
      {
        "input": "100",
        "expectedOutput": "Not Multiple"
      },
      {
        "input": "14",
        "expectedOutput": "Multiple"
      },
      {
        "input": "21",
        "expectedOutput": "Multiple"
      },
      {
        "input": "15",
        "expectedOutput": "Not Multiple"
      }
    ]
  },
  {
    "id": 161,
    "section": "Sec-B",
    "title": "Grade Calculator",
    "description": "Read marks out of 100 and print a letter grade: \"A\" for 85 and above, \"B\" for 70-84, \"C\" for 50-69, \"D\" for 35-49, otherwise \"F\".",
    "inputFormat": "One line with one integer mark.",
    "outputFormat": "One letter grade.",
    "constraints": "0 <= mark <= 100",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "85",
        "expectedOutput": "A"
      },
      {
        "input": "100",
        "expectedOutput": "A"
      },
      {
        "input": "70",
        "expectedOutput": "B"
      }
    ],
    "hiddenTests": [
      {
        "input": "50",
        "expectedOutput": "C"
      },
      {
        "input": "35",
        "expectedOutput": "D"
      },
      {
        "input": "0",
        "expectedOutput": "F"
      },
      {
        "input": "90",
        "expectedOutput": "A"
      },
      {
        "input": "84",
        "expectedOutput": "B"
      }
    ]
  },
  {
    "id": 162,
    "section": "Sec-B",
    "title": "Electricity Bill",
    "description": "Read units consumed and print the electricity bill using these slabs: first 100 units at 5 per unit, next 100 units (101-200) at 7 per unit, and any units above 200 at 10 per unit.",
    "inputFormat": "One line with one integer: units consumed.",
    "outputFormat": "One integer — the total bill.",
    "constraints": "0 <= units <= 10^4",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "150",
        "expectedOutput": "850"
      },
      {
        "input": "50",
        "expectedOutput": "250"
      },
      {
        "input": "100",
        "expectedOutput": "500"
      }
    ],
    "hiddenTests": [
      {
        "input": "200",
        "expectedOutput": "1200"
      },
      {
        "input": "250",
        "expectedOutput": "1700"
      },
      {
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "input": "300",
        "expectedOutput": "2200"
      },
      {
        "input": "175",
        "expectedOutput": "1025"
      }
    ]
  },
  {
    "id": 163,
    "section": "Sec-B",
    "title": "Largest of Three Using Nested If",
    "description": "Read three integers and print the largest, using nested if statements in your implementation.",
    "inputFormat": "One line with three integers.",
    "outputFormat": "One integer — the largest.",
    "constraints": "-10^6 <= a, b, c <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "20 45 30",
        "expectedOutput": "45"
      },
      {
        "input": "45 20 30",
        "expectedOutput": "45"
      },
      {
        "input": "5 5 5",
        "expectedOutput": "5"
      }
    ],
    "hiddenTests": [
      {
        "input": "-1 -2 -3",
        "expectedOutput": "-1"
      },
      {
        "input": "0 5 -5",
        "expectedOutput": "5"
      },
      {
        "input": "100 200 300",
        "expectedOutput": "300"
      },
      {
        "input": "7 3 7",
        "expectedOutput": "7"
      },
      {
        "input": "-50 0 50",
        "expectedOutput": "50"
      }
    ]
  },
  {
    "id": 164,
    "section": "Sec-B",
    "title": "Smallest of Three Using Nested If",
    "description": "Read three integers and print the smallest, using nested if statements in your implementation.",
    "inputFormat": "One line with three integers.",
    "outputFormat": "One integer — the smallest.",
    "constraints": "-10^6 <= a, b, c <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "20 45 10",
        "expectedOutput": "10"
      },
      {
        "input": "45 20 10",
        "expectedOutput": "10"
      },
      {
        "input": "5 5 5",
        "expectedOutput": "5"
      }
    ],
    "hiddenTests": [
      {
        "input": "-1 -2 -3",
        "expectedOutput": "-3"
      },
      {
        "input": "0 5 -5",
        "expectedOutput": "-5"
      },
      {
        "input": "100 200 300",
        "expectedOutput": "100"
      },
      {
        "input": "7 3 7",
        "expectedOutput": "3"
      },
      {
        "input": "-50 0 50",
        "expectedOutput": "-50"
      }
    ]
  },
  {
    "id": 165,
    "section": "Sec-B",
    "title": "Simple Calculator",
    "description": "Read two numbers and an operator (one of + - * /) separated by spaces, and print the result of applying the operator. For division, print the integer quotient.",
    "inputFormat": "One line: number, number, operator (space-separated).",
    "outputFormat": "One number — the result.",
    "constraints": "-10^4 <= a, b <= 10^4, operator is one of + - * /",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "10 5 +",
        "expectedOutput": "15"
      },
      {
        "input": "10 5 -",
        "expectedOutput": "5"
      },
      {
        "input": "10 5 *",
        "expectedOutput": "50"
      }
    ],
    "hiddenTests": [
      {
        "input": "10 5 /",
        "expectedOutput": "2"
      },
      {
        "input": "20 4 /",
        "expectedOutput": "5"
      },
      {
        "input": "7 3 +",
        "expectedOutput": "10"
      },
      {
        "input": "9 9 -",
        "expectedOutput": "0"
      },
      {
        "input": "6 7 *",
        "expectedOutput": "42"
      }
    ]
  },
  {
    "id": 166,
    "section": "Sec-B",
    "title": "Check Triangle Validity",
    "description": "Read three angles of a triangle and print \"Valid Triangle\" if they are all positive and sum to exactly 180, otherwise print \"Invalid Triangle\".",
    "inputFormat": "One line with three integers: the three angles.",
    "outputFormat": "One phrase: Valid Triangle or Invalid Triangle.",
    "constraints": "0 <= each angle <= 180",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "60 60 60",
        "expectedOutput": "Valid Triangle"
      },
      {
        "input": "90 45 45",
        "expectedOutput": "Valid Triangle"
      },
      {
        "input": "100 50 40",
        "expectedOutput": "Invalid Triangle"
      }
    ],
    "hiddenTests": [
      {
        "input": "60 60 61",
        "expectedOutput": "Invalid Triangle"
      },
      {
        "input": "30 60 90",
        "expectedOutput": "Valid Triangle"
      },
      {
        "input": "0 90 90",
        "expectedOutput": "Invalid Triangle"
      },
      {
        "input": "70 70 40",
        "expectedOutput": "Valid Triangle"
      },
      {
        "input": "120 30 30",
        "expectedOutput": "Valid Triangle"
      }
    ]
  },
  {
    "id": 167,
    "section": "Sec-B",
    "title": "Triangle Type by Angles",
    "description": "Read three angles of a valid triangle (summing to 180) and print \"Acute Triangle\" if all angles are less than 90, \"Right Triangle\" if one angle is exactly 90, or \"Obtuse Triangle\" if one angle is greater than 90.",
    "inputFormat": "One line with three integers: the three angles.",
    "outputFormat": "One phrase describing the triangle type.",
    "constraints": "angles sum to 180, each > 0",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "60 60 60",
        "expectedOutput": "Acute Triangle"
      },
      {
        "input": "90 45 45",
        "expectedOutput": "Right Triangle"
      },
      {
        "input": "100 50 30",
        "expectedOutput": "Obtuse Triangle"
      }
    ],
    "hiddenTests": [
      {
        "input": "30 60 90",
        "expectedOutput": "Right Triangle"
      },
      {
        "input": "80 60 40",
        "expectedOutput": "Acute Triangle"
      },
      {
        "input": "20 20 140",
        "expectedOutput": "Obtuse Triangle"
      },
      {
        "input": "70 70 40",
        "expectedOutput": "Acute Triangle"
      },
      {
        "input": "45 45 90",
        "expectedOutput": "Right Triangle"
      }
    ]
  },
  {
    "id": 168,
    "section": "Sec-B",
    "title": "Triangle Type by Sides",
    "description": "Read the three side lengths of a triangle and print \"Equilateral\" if all sides are equal, \"Isosceles\" if exactly two sides are equal, or \"Scalene\" if all sides are different.",
    "inputFormat": "One line with three integers: the three side lengths.",
    "outputFormat": "One word describing the triangle type.",
    "constraints": "1 <= each side <= 10^4",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5 5 5",
        "expectedOutput": "Equilateral"
      },
      {
        "input": "5 5 8",
        "expectedOutput": "Isosceles"
      },
      {
        "input": "3 4 5",
        "expectedOutput": "Scalene"
      }
    ],
    "hiddenTests": [
      {
        "input": "10 10 10",
        "expectedOutput": "Equilateral"
      },
      {
        "input": "7 7 3",
        "expectedOutput": "Isosceles"
      },
      {
        "input": "6 8 10",
        "expectedOutput": "Scalene"
      },
      {
        "input": "2 2 2",
        "expectedOutput": "Equilateral"
      },
      {
        "input": "9 5 5",
        "expectedOutput": "Isosceles"
      }
    ]
  },
  {
    "id": 169,
    "section": "Sec-B",
    "title": "Temperature Category",
    "description": "Read a temperature and print \"Cold\" if below 15, \"Moderate\" if from 15 to 30 (inclusive), or \"Hot\" if above 30.",
    "inputFormat": "One line with one integer: temperature.",
    "outputFormat": "One word: Cold, Moderate, or Hot.",
    "constraints": "-50 <= temperature <= 60",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "35",
        "expectedOutput": "Hot"
      },
      {
        "input": "10",
        "expectedOutput": "Cold"
      },
      {
        "input": "20",
        "expectedOutput": "Moderate"
      }
    ],
    "hiddenTests": [
      {
        "input": "15",
        "expectedOutput": "Moderate"
      },
      {
        "input": "30",
        "expectedOutput": "Moderate"
      },
      {
        "input": "31",
        "expectedOutput": "Hot"
      },
      {
        "input": "14",
        "expectedOutput": "Cold"
      },
      {
        "input": "0",
        "expectedOutput": "Cold"
      }
    ]
  },
  {
    "id": 170,
    "section": "Sec-B",
    "title": "Number Between Range",
    "description": "Read an integer and print \"Yes\" if it lies between 10 and 100 (inclusive), otherwise print \"No\".",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One word: Yes or No.",
    "constraints": "-10^4 <= n <= 10^4",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "55",
        "expectedOutput": "Yes"
      },
      {
        "input": "5",
        "expectedOutput": "No"
      },
      {
        "input": "100",
        "expectedOutput": "Yes"
      }
    ],
    "hiddenTests": [
      {
        "input": "10",
        "expectedOutput": "Yes"
      },
      {
        "input": "101",
        "expectedOutput": "No"
      },
      {
        "input": "9",
        "expectedOutput": "No"
      },
      {
        "input": "50",
        "expectedOutput": "Yes"
      },
      {
        "input": "0",
        "expectedOutput": "No"
      }
    ]
  },
  {
    "id": 171,
    "section": "Sec-B",
    "title": "Print Numbers 1 to 10",
    "description": "Print the numbers from 1 to 10, space-separated, on one line. This program takes no input.",
    "inputFormat": "(no input)",
    "outputFormat": "The numbers 1 through 10, space-separated.",
    "constraints": "none",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "",
        "expectedOutput": "1 2 3 4 5 6 7 8 9 10"
      },
      {
        "input": "",
        "expectedOutput": "1 2 3 4 5 6 7 8 9 10"
      },
      {
        "input": "",
        "expectedOutput": "1 2 3 4 5 6 7 8 9 10"
      }
    ],
    "hiddenTests": [
      {
        "input": "",
        "expectedOutput": "1 2 3 4 5 6 7 8 9 10"
      },
      {
        "input": "",
        "expectedOutput": "1 2 3 4 5 6 7 8 9 10"
      },
      {
        "input": "",
        "expectedOutput": "1 2 3 4 5 6 7 8 9 10"
      },
      {
        "input": "",
        "expectedOutput": "1 2 3 4 5 6 7 8 9 10"
      },
      {
        "input": "",
        "expectedOutput": "1 2 3 4 5 6 7 8 9 10"
      }
    ]
  },
  {
    "id": 172,
    "section": "Sec-B",
    "title": "Print Numbers 10 to 1",
    "description": "Print the numbers from 10 down to 1, space-separated, on one line. This program takes no input.",
    "inputFormat": "(no input)",
    "outputFormat": "The numbers 10 down to 1, space-separated.",
    "constraints": "none",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "",
        "expectedOutput": "10 9 8 7 6 5 4 3 2 1"
      },
      {
        "input": "",
        "expectedOutput": "10 9 8 7 6 5 4 3 2 1"
      },
      {
        "input": "",
        "expectedOutput": "10 9 8 7 6 5 4 3 2 1"
      }
    ],
    "hiddenTests": [
      {
        "input": "",
        "expectedOutput": "10 9 8 7 6 5 4 3 2 1"
      },
      {
        "input": "",
        "expectedOutput": "10 9 8 7 6 5 4 3 2 1"
      },
      {
        "input": "",
        "expectedOutput": "10 9 8 7 6 5 4 3 2 1"
      },
      {
        "input": "",
        "expectedOutput": "10 9 8 7 6 5 4 3 2 1"
      },
      {
        "input": "",
        "expectedOutput": "10 9 8 7 6 5 4 3 2 1"
      }
    ]
  },
  {
    "id": 173,
    "section": "Sec-B",
    "title": "Print Even Numbers 1 to 100",
    "description": "Print all even numbers from 1 to 100, space-separated, on one line. This program takes no input.",
    "inputFormat": "(no input)",
    "outputFormat": "All even numbers from 2 to 100, space-separated.",
    "constraints": "none",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "",
        "expectedOutput": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50 52 54 56 58 60 62 64 66 68 70 72 74 76 78 80 82 84 86 88 90 92 94 96 98 100"
      },
      {
        "input": "",
        "expectedOutput": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50 52 54 56 58 60 62 64 66 68 70 72 74 76 78 80 82 84 86 88 90 92 94 96 98 100"
      },
      {
        "input": "",
        "expectedOutput": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50 52 54 56 58 60 62 64 66 68 70 72 74 76 78 80 82 84 86 88 90 92 94 96 98 100"
      }
    ],
    "hiddenTests": [
      {
        "input": "",
        "expectedOutput": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50 52 54 56 58 60 62 64 66 68 70 72 74 76 78 80 82 84 86 88 90 92 94 96 98 100"
      },
      {
        "input": "",
        "expectedOutput": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50 52 54 56 58 60 62 64 66 68 70 72 74 76 78 80 82 84 86 88 90 92 94 96 98 100"
      },
      {
        "input": "",
        "expectedOutput": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50 52 54 56 58 60 62 64 66 68 70 72 74 76 78 80 82 84 86 88 90 92 94 96 98 100"
      },
      {
        "input": "",
        "expectedOutput": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50 52 54 56 58 60 62 64 66 68 70 72 74 76 78 80 82 84 86 88 90 92 94 96 98 100"
      },
      {
        "input": "",
        "expectedOutput": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50 52 54 56 58 60 62 64 66 68 70 72 74 76 78 80 82 84 86 88 90 92 94 96 98 100"
      }
    ]
  },
  {
    "id": 174,
    "section": "Sec-B",
    "title": "Print Odd Numbers 1 to 100",
    "description": "Print all odd numbers from 1 to 100, space-separated, on one line. This program takes no input.",
    "inputFormat": "(no input)",
    "outputFormat": "All odd numbers from 1 to 99, space-separated.",
    "constraints": "none",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "",
        "expectedOutput": "1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49 51 53 55 57 59 61 63 65 67 69 71 73 75 77 79 81 83 85 87 89 91 93 95 97 99"
      },
      {
        "input": "",
        "expectedOutput": "1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49 51 53 55 57 59 61 63 65 67 69 71 73 75 77 79 81 83 85 87 89 91 93 95 97 99"
      },
      {
        "input": "",
        "expectedOutput": "1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49 51 53 55 57 59 61 63 65 67 69 71 73 75 77 79 81 83 85 87 89 91 93 95 97 99"
      }
    ],
    "hiddenTests": [
      {
        "input": "",
        "expectedOutput": "1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49 51 53 55 57 59 61 63 65 67 69 71 73 75 77 79 81 83 85 87 89 91 93 95 97 99"
      },
      {
        "input": "",
        "expectedOutput": "1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49 51 53 55 57 59 61 63 65 67 69 71 73 75 77 79 81 83 85 87 89 91 93 95 97 99"
      },
      {
        "input": "",
        "expectedOutput": "1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49 51 53 55 57 59 61 63 65 67 69 71 73 75 77 79 81 83 85 87 89 91 93 95 97 99"
      },
      {
        "input": "",
        "expectedOutput": "1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49 51 53 55 57 59 61 63 65 67 69 71 73 75 77 79 81 83 85 87 89 91 93 95 97 99"
      },
      {
        "input": "",
        "expectedOutput": "1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49 51 53 55 57 59 61 63 65 67 69 71 73 75 77 79 81 83 85 87 89 91 93 95 97 99"
      }
    ]
  },
  {
    "id": 175,
    "section": "Sec-B",
    "title": "Sum of First N Natural Numbers (Sec B)",
    "description": "Read a positive integer N and print the sum 1 + 2 + ... + N.",
    "inputFormat": "One line with one integer N.",
    "outputFormat": "One integer — the sum.",
    "constraints": "1 <= N <= 10^4",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "10",
        "expectedOutput": "55"
      },
      {
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "input": "100",
        "expectedOutput": "5050"
      }
    ],
    "hiddenTests": [
      {
        "input": "50",
        "expectedOutput": "1275"
      },
      {
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "input": "999",
        "expectedOutput": "499500"
      },
      {
        "input": "20",
        "expectedOutput": "210"
      },
      {
        "input": "2",
        "expectedOutput": "3"
      }
    ]
  },
  {
    "id": 176,
    "section": "Sec-B",
    "title": "Sum of Even Numbers (1 to N)",
    "description": "Read a positive integer N and print the sum of all even numbers from 1 to N.",
    "inputFormat": "One line with one integer N.",
    "outputFormat": "One integer — the sum.",
    "constraints": "1 <= N <= 10^5",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "10",
        "expectedOutput": "30"
      },
      {
        "input": "1",
        "expectedOutput": "0"
      },
      {
        "input": "100",
        "expectedOutput": "2550"
      }
    ],
    "hiddenTests": [
      {
        "input": "50",
        "expectedOutput": "650"
      },
      {
        "input": "20",
        "expectedOutput": "110"
      },
      {
        "input": "999",
        "expectedOutput": "249500"
      },
      {
        "input": "7",
        "expectedOutput": "12"
      },
      {
        "input": "2",
        "expectedOutput": "2"
      }
    ]
  },
  {
    "id": 177,
    "section": "Sec-B",
    "title": "Sum of Odd Numbers (1 to N)",
    "description": "Read a positive integer N and print the sum of all odd numbers from 1 to N.",
    "inputFormat": "One line with one integer N.",
    "outputFormat": "One integer — the sum.",
    "constraints": "1 <= N <= 10^5",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "10",
        "expectedOutput": "25"
      },
      {
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "input": "100",
        "expectedOutput": "2500"
      }
    ],
    "hiddenTests": [
      {
        "input": "50",
        "expectedOutput": "625"
      },
      {
        "input": "20",
        "expectedOutput": "100"
      },
      {
        "input": "999",
        "expectedOutput": "250000"
      },
      {
        "input": "7",
        "expectedOutput": "16"
      },
      {
        "input": "2",
        "expectedOutput": "1"
      }
    ]
  },
  {
    "id": 178,
    "section": "Sec-B",
    "title": "Multiplication Table",
    "description": "Read an integer N and print its multiplication table from 1 to 10, comma-separated (e.g. \"5, 10, 15, ...\").",
    "inputFormat": "One line with one integer N.",
    "outputFormat": "Ten multiples of N, comma-separated.",
    "constraints": "1 <= N <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5",
        "expectedOutput": "5, 10, 15, 20, 25, 30, 35, 40, 45, 50"
      },
      {
        "input": "1",
        "expectedOutput": "1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
      },
      {
        "input": "10",
        "expectedOutput": "10, 20, 30, 40, 50, 60, 70, 80, 90, 100"
      }
    ],
    "hiddenTests": [
      {
        "input": "7",
        "expectedOutput": "7, 14, 21, 28, 35, 42, 49, 56, 63, 70"
      },
      {
        "input": "12",
        "expectedOutput": "12, 24, 36, 48, 60, 72, 84, 96, 108, 120"
      },
      {
        "input": "2",
        "expectedOutput": "2, 4, 6, 8, 10, 12, 14, 16, 18, 20"
      },
      {
        "input": "9",
        "expectedOutput": "9, 18, 27, 36, 45, 54, 63, 72, 81, 90"
      },
      {
        "input": "100",
        "expectedOutput": "100, 200, 300, 400, 500, 600, 700, 800, 900, 1000"
      }
    ]
  },
  {
    "id": 179,
    "section": "Sec-B",
    "title": "Factorial of a Number (Sec B)",
    "description": "Read a non-negative integer N (N <= 12) and print N! using a loop.",
    "inputFormat": "One line with one integer N.",
    "outputFormat": "One integer — N factorial.",
    "constraints": "0 <= N <= 12",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5",
        "expectedOutput": "120"
      },
      {
        "input": "0",
        "expectedOutput": "1"
      },
      {
        "input": "1",
        "expectedOutput": "1"
      }
    ],
    "hiddenTests": [
      {
        "input": "10",
        "expectedOutput": "3628800"
      },
      {
        "input": "12",
        "expectedOutput": "479001600"
      },
      {
        "input": "6",
        "expectedOutput": "720"
      },
      {
        "input": "3",
        "expectedOutput": "6"
      },
      {
        "input": "7",
        "expectedOutput": "5040"
      }
    ]
  },
  {
    "id": 180,
    "section": "Sec-B",
    "title": "Power of a Number (Sec B)",
    "description": "Read a base and a non-negative exponent and print base^exponent, computed using a loop.",
    "inputFormat": "One line with two integers: base, exponent.",
    "outputFormat": "One integer — base^exponent.",
    "constraints": "-10 <= base <= 10, 0 <= exponent <= 6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "2 5",
        "expectedOutput": "32"
      },
      {
        "input": "3 0",
        "expectedOutput": "1"
      },
      {
        "input": "5 2",
        "expectedOutput": "25"
      }
    ],
    "hiddenTests": [
      {
        "input": "1 6",
        "expectedOutput": "1"
      },
      {
        "input": "-2 3",
        "expectedOutput": "-8"
      },
      {
        "input": "10 3",
        "expectedOutput": "1000"
      },
      {
        "input": "4 3",
        "expectedOutput": "64"
      },
      {
        "input": "2 6",
        "expectedOutput": "64"
      }
    ]
  },
  {
    "id": 181,
    "section": "Sec-B",
    "title": "Count Digits Using Loop",
    "description": "Read an integer and print how many digits it has, using a loop.",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — the digit count.",
    "constraints": "0 <= n <= 10^9",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "123456",
        "expectedOutput": "6"
      },
      {
        "input": "5",
        "expectedOutput": "1"
      },
      {
        "input": "1000000",
        "expectedOutput": "7"
      }
    ],
    "hiddenTests": [
      {
        "input": "0",
        "expectedOutput": "1"
      },
      {
        "input": "42",
        "expectedOutput": "2"
      },
      {
        "input": "999999999",
        "expectedOutput": "9"
      },
      {
        "input": "100",
        "expectedOutput": "3"
      },
      {
        "input": "7654321",
        "expectedOutput": "7"
      }
    ]
  },
  {
    "id": 182,
    "section": "Sec-B",
    "title": "Sum of Digits Using Loop",
    "description": "Read an integer and print the sum of its digits, using a loop.",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — the digit sum.",
    "constraints": "0 <= n <= 10^7",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "12345",
        "expectedOutput": "15"
      },
      {
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "input": "999999",
        "expectedOutput": "54"
      }
    ],
    "hiddenTests": [
      {
        "input": "7",
        "expectedOutput": "7"
      },
      {
        "input": "1000000",
        "expectedOutput": "1"
      },
      {
        "input": "54321",
        "expectedOutput": "15"
      },
      {
        "input": "123",
        "expectedOutput": "6"
      },
      {
        "input": "80808",
        "expectedOutput": "24"
      }
    ]
  },
  {
    "id": 183,
    "section": "Sec-B",
    "title": "Reverse Number Using Loop",
    "description": "Read a positive integer and print it with its digits reversed, using a loop.",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — n with digits reversed.",
    "constraints": "0 <= n <= 10^7",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "12345",
        "expectedOutput": "54321"
      },
      {
        "input": "100",
        "expectedOutput": "1"
      },
      {
        "input": "7",
        "expectedOutput": "7"
      }
    ],
    "hiddenTests": [
      {
        "input": "1000",
        "expectedOutput": "1"
      },
      {
        "input": "54321",
        "expectedOutput": "12345"
      },
      {
        "input": "900",
        "expectedOutput": "9"
      },
      {
        "input": "123",
        "expectedOutput": "321"
      },
      {
        "input": "80808",
        "expectedOutput": "80808"
      }
    ]
  },
  {
    "id": 184,
    "section": "Sec-B",
    "title": "Product of Digits Using Loop",
    "description": "Read an integer and print the product of all its digits, using a loop.",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One integer — the digit product.",
    "constraints": "0 <= n <= 10^6",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "1234",
        "expectedOutput": "24"
      },
      {
        "input": "5832",
        "expectedOutput": "240"
      },
      {
        "input": "9999",
        "expectedOutput": "6561"
      }
    ],
    "hiddenTests": [
      {
        "input": "1111",
        "expectedOutput": "1"
      },
      {
        "input": "4567",
        "expectedOutput": "840"
      },
      {
        "input": "8211",
        "expectedOutput": "16"
      },
      {
        "input": "2222",
        "expectedOutput": "16"
      },
      {
        "input": "6789",
        "expectedOutput": "3024"
      }
    ]
  },
  {
    "id": 185,
    "section": "Sec-B",
    "title": "Check Palindrome Number",
    "description": "Read an integer and print \"Palindrome\" if it reads the same forwards and backwards, otherwise print \"Not Palindrome\".",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One phrase: Palindrome or Not Palindrome.",
    "constraints": "0 <= n <= 10^7",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "121",
        "expectedOutput": "Palindrome"
      },
      {
        "input": "123",
        "expectedOutput": "Not Palindrome"
      },
      {
        "input": "0",
        "expectedOutput": "Palindrome"
      }
    ],
    "hiddenTests": [
      {
        "input": "7",
        "expectedOutput": "Palindrome"
      },
      {
        "input": "12321",
        "expectedOutput": "Palindrome"
      },
      {
        "input": "1000",
        "expectedOutput": "Not Palindrome"
      },
      {
        "input": "9",
        "expectedOutput": "Palindrome"
      },
      {
        "input": "10001",
        "expectedOutput": "Palindrome"
      }
    ]
  },
  {
    "id": 186,
    "section": "Sec-B",
    "title": "Check Prime Number (Sec B)",
    "description": "Read an integer and print \"Prime\" if it is prime, otherwise print \"Not Prime\".",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One phrase: Prime or Not Prime.",
    "constraints": "0 <= n <= 10^5",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "17",
        "expectedOutput": "Prime"
      },
      {
        "input": "10",
        "expectedOutput": "Not Prime"
      },
      {
        "input": "2",
        "expectedOutput": "Prime"
      }
    ],
    "hiddenTests": [
      {
        "input": "1",
        "expectedOutput": "Not Prime"
      },
      {
        "input": "0",
        "expectedOutput": "Not Prime"
      },
      {
        "input": "97",
        "expectedOutput": "Prime"
      },
      {
        "input": "100",
        "expectedOutput": "Not Prime"
      },
      {
        "input": "29",
        "expectedOutput": "Prime"
      }
    ]
  },
  {
    "id": 187,
    "section": "Sec-B",
    "title": "Print Prime Numbers",
    "description": "Read a positive integer N and print all prime numbers from 1 to N, space-separated, on one line.",
    "inputFormat": "One line with one integer N.",
    "outputFormat": "All primes up to N, space-separated.",
    "constraints": "1 <= N <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "20",
        "expectedOutput": "2 3 5 7 11 13 17 19"
      },
      {
        "input": "10",
        "expectedOutput": "2 3 5 7"
      },
      {
        "input": "2",
        "expectedOutput": "2"
      }
    ],
    "hiddenTests": [
      {
        "input": "1",
        "expectedOutput": ""
      },
      {
        "input": "50",
        "expectedOutput": "2 3 5 7 11 13 17 19 23 29 31 37 41 43 47"
      },
      {
        "input": "30",
        "expectedOutput": "2 3 5 7 11 13 17 19 23 29"
      },
      {
        "input": "100",
        "expectedOutput": "2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97"
      },
      {
        "input": "7",
        "expectedOutput": "2 3 5 7"
      }
    ]
  },
  {
    "id": 188,
    "section": "Sec-B",
    "title": "Count Prime Numbers",
    "description": "Read a positive integer N and print how many prime numbers exist between 1 and N.",
    "inputFormat": "One line with one integer N.",
    "outputFormat": "One integer — the count of primes.",
    "constraints": "1 <= N <= 10^4",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "10",
        "expectedOutput": "4"
      },
      {
        "input": "20",
        "expectedOutput": "8"
      },
      {
        "input": "1",
        "expectedOutput": "0"
      }
    ],
    "hiddenTests": [
      {
        "input": "50",
        "expectedOutput": "15"
      },
      {
        "input": "100",
        "expectedOutput": "25"
      },
      {
        "input": "2",
        "expectedOutput": "1"
      },
      {
        "input": "30",
        "expectedOutput": "10"
      },
      {
        "input": "1000",
        "expectedOutput": "168"
      }
    ]
  },
  {
    "id": 189,
    "section": "Sec-B",
    "title": "Find Factors",
    "description": "Read a positive integer N and print all of its factors in ascending order, space-separated, on one line.",
    "inputFormat": "One line with one integer N.",
    "outputFormat": "All factors of N, space-separated.",
    "constraints": "1 <= N <= 10^4",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "12",
        "expectedOutput": "1 2 3 4 6 12"
      },
      {
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "input": "17",
        "expectedOutput": "1 17"
      }
    ],
    "hiddenTests": [
      {
        "input": "100",
        "expectedOutput": "1 2 4 5 10 20 25 50 100"
      },
      {
        "input": "36",
        "expectedOutput": "1 2 3 4 6 9 12 18 36"
      },
      {
        "input": "7",
        "expectedOutput": "1 7"
      },
      {
        "input": "60",
        "expectedOutput": "1 2 3 4 5 6 10 12 15 20 30 60"
      },
      {
        "input": "24",
        "expectedOutput": "1 2 3 4 6 8 12 24"
      }
    ]
  },
  {
    "id": 190,
    "section": "Sec-B",
    "title": "Count Factors",
    "description": "Read a positive integer N and print how many factors it has.",
    "inputFormat": "One line with one integer N.",
    "outputFormat": "One integer — the factor count.",
    "constraints": "1 <= N <= 10^5",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "12",
        "expectedOutput": "6"
      },
      {
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "input": "17",
        "expectedOutput": "2"
      }
    ],
    "hiddenTests": [
      {
        "input": "100",
        "expectedOutput": "9"
      },
      {
        "input": "36",
        "expectedOutput": "9"
      },
      {
        "input": "7",
        "expectedOutput": "2"
      },
      {
        "input": "60",
        "expectedOutput": "12"
      },
      {
        "input": "24",
        "expectedOutput": "8"
      }
    ]
  },
  {
    "id": 191,
    "section": "Sec-B",
    "title": "Perfect Number",
    "description": "Read a positive integer and print \"Perfect Number\" if it equals the sum of its proper divisors, otherwise print \"Not a Perfect Number\".",
    "inputFormat": "One line with one integer n.",
    "outputFormat": "One phrase: Perfect Number or Not a Perfect Number.",
    "constraints": "1 <= n <= 10^4",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "28",
        "expectedOutput": "Perfect Number"
      },
      {
        "input": "6",
        "expectedOutput": "Perfect Number"
      },
      {
        "input": "10",
        "expectedOutput": "Not a Perfect Number"
      }
    ],
    "hiddenTests": [
      {
        "input": "1",
        "expectedOutput": "Not a Perfect Number"
      },
      {
        "input": "496",
        "expectedOutput": "Perfect Number"
      },
      {
        "input": "12",
        "expectedOutput": "Not a Perfect Number"
      },
      {
        "input": "8128",
        "expectedOutput": "Perfect Number"
      },
      {
        "input": "100",
        "expectedOutput": "Not a Perfect Number"
      }
    ]
  },
  {
    "id": 192,
    "section": "Sec-B",
    "title": "Armstrong Number",
    "description": "Read a 3-digit number and print \"Armstrong Number\" if it equals the sum of the cubes of its digits, otherwise print \"Not an Armstrong Number\".",
    "inputFormat": "One line with one 3-digit integer n.",
    "outputFormat": "One phrase: Armstrong Number or Not an Armstrong Number.",
    "constraints": "100 <= n <= 999",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "153",
        "expectedOutput": "Armstrong Number"
      },
      {
        "input": "123",
        "expectedOutput": "Not an Armstrong Number"
      },
      {
        "input": "370",
        "expectedOutput": "Armstrong Number"
      }
    ],
    "hiddenTests": [
      {
        "input": "100",
        "expectedOutput": "Not an Armstrong Number"
      },
      {
        "input": "371",
        "expectedOutput": "Armstrong Number"
      },
      {
        "input": "407",
        "expectedOutput": "Armstrong Number"
      },
      {
        "input": "999",
        "expectedOutput": "Not an Armstrong Number"
      },
      {
        "input": "250",
        "expectedOutput": "Not an Armstrong Number"
      }
    ]
  },
  {
    "id": 193,
    "section": "Sec-B",
    "title": "Fibonacci Series",
    "description": "Read a positive integer N and print the first N terms of the Fibonacci series (starting 0, 1, 1, 2, ...), space-separated.",
    "inputFormat": "One line with one integer N.",
    "outputFormat": "The first N Fibonacci numbers, space-separated.",
    "constraints": "1 <= N <= 30",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "7",
        "expectedOutput": "0 1 1 2 3 5 8"
      },
      {
        "input": "1",
        "expectedOutput": "0"
      },
      {
        "input": "2",
        "expectedOutput": "0 1"
      }
    ],
    "hiddenTests": [
      {
        "input": "10",
        "expectedOutput": "0 1 1 2 3 5 8 13 21 34"
      },
      {
        "input": "5",
        "expectedOutput": "0 1 1 2 3"
      },
      {
        "input": "15",
        "expectedOutput": "0 1 1 2 3 5 8 13 21 34 55 89 144 233 377"
      },
      {
        "input": "20",
        "expectedOutput": "0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181"
      },
      {
        "input": "3",
        "expectedOutput": "0 1 1"
      }
    ]
  },
  {
    "id": 194,
    "section": "Sec-B",
    "title": "GCD of Two Numbers (Sec B)",
    "description": "Read two positive integers and print their greatest common divisor.",
    "inputFormat": "One line with two integers.",
    "outputFormat": "One integer — the GCD.",
    "constraints": "1 <= a, b <= 10^5",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "12 18",
        "expectedOutput": "6"
      },
      {
        "input": "7 13",
        "expectedOutput": "1"
      },
      {
        "input": "100 75",
        "expectedOutput": "25"
      }
    ],
    "hiddenTests": [
      {
        "input": "1 1",
        "expectedOutput": "1"
      },
      {
        "input": "17 34",
        "expectedOutput": "17"
      },
      {
        "input": "48 180",
        "expectedOutput": "12"
      },
      {
        "input": "9 27",
        "expectedOutput": "9"
      },
      {
        "input": "1000 1",
        "expectedOutput": "1"
      }
    ]
  },
  {
    "id": 195,
    "section": "Sec-B",
    "title": "LCM of Two Numbers (Sec B)",
    "description": "Read two positive integers and print their least common multiple.",
    "inputFormat": "One line with two integers.",
    "outputFormat": "One integer — the LCM.",
    "constraints": "1 <= a, b <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "12 18",
        "expectedOutput": "36"
      },
      {
        "input": "4 6",
        "expectedOutput": "12"
      },
      {
        "input": "3 5",
        "expectedOutput": "15"
      }
    ],
    "hiddenTests": [
      {
        "input": "10 15",
        "expectedOutput": "30"
      },
      {
        "input": "7 7",
        "expectedOutput": "7"
      },
      {
        "input": "1 9",
        "expectedOutput": "9"
      },
      {
        "input": "21 6",
        "expectedOutput": "42"
      },
      {
        "input": "8 12",
        "expectedOutput": "24"
      }
    ]
  },
  {
    "id": 196,
    "section": "Sec-B",
    "title": "Print Star Pattern",
    "description": "Read an integer N and print a left-aligned triangle of stars: row i (1-indexed) has i stars, one row per line.",
    "inputFormat": "One line with one integer N.",
    "outputFormat": "N lines: row i has i stars.",
    "constraints": "1 <= N <= 20",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5",
        "expectedOutput": "*\n**\n***\n****\n*****"
      },
      {
        "input": "1",
        "expectedOutput": "*"
      },
      {
        "input": "3",
        "expectedOutput": "*\n**\n***"
      }
    ],
    "hiddenTests": [
      {
        "input": "4",
        "expectedOutput": "*\n**\n***\n****"
      },
      {
        "input": "6",
        "expectedOutput": "*\n**\n***\n****\n*****\n******"
      },
      {
        "input": "2",
        "expectedOutput": "*\n**"
      },
      {
        "input": "7",
        "expectedOutput": "*\n**\n***\n****\n*****\n******\n*******"
      },
      {
        "input": "8",
        "expectedOutput": "*\n**\n***\n****\n*****\n******\n*******\n********"
      }
    ]
  },
  {
    "id": 197,
    "section": "Sec-B",
    "title": "Reverse Star Pattern",
    "description": "Read an integer N and print a right-shrinking triangle of stars: the first row has N stars, decreasing by one each row down to 1 star.",
    "inputFormat": "One line with one integer N.",
    "outputFormat": "N lines, star counts decreasing from N to 1.",
    "constraints": "1 <= N <= 20",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5",
        "expectedOutput": "*****\n****\n***\n**\n*"
      },
      {
        "input": "1",
        "expectedOutput": "*"
      },
      {
        "input": "3",
        "expectedOutput": "***\n**\n*"
      }
    ],
    "hiddenTests": [
      {
        "input": "4",
        "expectedOutput": "****\n***\n**\n*"
      },
      {
        "input": "6",
        "expectedOutput": "******\n*****\n****\n***\n**\n*"
      },
      {
        "input": "2",
        "expectedOutput": "**\n*"
      },
      {
        "input": "7",
        "expectedOutput": "*******\n******\n*****\n****\n***\n**\n*"
      },
      {
        "input": "8",
        "expectedOutput": "********\n*******\n******\n*****\n****\n***\n**\n*"
      }
    ]
  },
  {
    "id": 198,
    "section": "Sec-B",
    "title": "Number Pattern",
    "description": "Read an integer N and print N lines, where line i contains the digits 1 through i concatenated (e.g. for N=5: 1 / 12 / 123 / 1234 / 12345).",
    "inputFormat": "One line with one integer N.",
    "outputFormat": "N lines as described.",
    "constraints": "1 <= N <= 9",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5",
        "expectedOutput": "1\n12\n123\n1234\n12345"
      },
      {
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "input": "3",
        "expectedOutput": "1\n12\n123"
      }
    ],
    "hiddenTests": [
      {
        "input": "4",
        "expectedOutput": "1\n12\n123\n1234"
      },
      {
        "input": "6",
        "expectedOutput": "1\n12\n123\n1234\n12345\n123456"
      },
      {
        "input": "2",
        "expectedOutput": "1\n12"
      },
      {
        "input": "7",
        "expectedOutput": "1\n12\n123\n1234\n12345\n123456\n1234567"
      },
      {
        "input": "9",
        "expectedOutput": "1\n12\n123\n1234\n12345\n123456\n1234567\n12345678\n123456789"
      }
    ]
  },
  {
    "id": 199,
    "section": "Sec-B",
    "title": "Repeated Number Pattern",
    "description": "Read an integer N and print N lines, where line i contains the digit i repeated i times (e.g. for N=5: 1 / 22 / 333 / 4444 / 55555).",
    "inputFormat": "One line with one integer N.",
    "outputFormat": "N lines as described.",
    "constraints": "1 <= N <= 9",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5",
        "expectedOutput": "1\n22\n333\n4444\n55555"
      },
      {
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "input": "3",
        "expectedOutput": "1\n22\n333"
      }
    ],
    "hiddenTests": [
      {
        "input": "4",
        "expectedOutput": "1\n22\n333\n4444"
      },
      {
        "input": "6",
        "expectedOutput": "1\n22\n333\n4444\n55555\n666666"
      },
      {
        "input": "2",
        "expectedOutput": "1\n22"
      },
      {
        "input": "7",
        "expectedOutput": "1\n22\n333\n4444\n55555\n666666\n7777777"
      },
      {
        "input": "9",
        "expectedOutput": "1\n22\n333\n4444\n55555\n666666\n7777777\n88888888\n999999999"
      }
    ]
  },
  {
    "id": 200,
    "section": "Sec-B",
    "title": "Square Star Pattern",
    "description": "Read an integer N and print an N by N square made entirely of stars, one row per line.",
    "inputFormat": "One line with one integer N.",
    "outputFormat": "N lines, each containing N stars.",
    "constraints": "1 <= N <= 20",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5",
        "expectedOutput": "*****\n*****\n*****\n*****\n*****"
      },
      {
        "input": "1",
        "expectedOutput": "*"
      },
      {
        "input": "3",
        "expectedOutput": "***\n***\n***"
      }
    ],
    "hiddenTests": [
      {
        "input": "4",
        "expectedOutput": "****\n****\n****\n****"
      },
      {
        "input": "6",
        "expectedOutput": "******\n******\n******\n******\n******\n******"
      },
      {
        "input": "2",
        "expectedOutput": "**\n**"
      },
      {
        "input": "7",
        "expectedOutput": "*******\n*******\n*******\n*******\n*******\n*******\n*******"
      },
      {
        "input": "8",
        "expectedOutput": "********\n********\n********\n********\n********\n********\n********\n********"
      }
    ]
  },
  {
    "id": 201,
    "section": "Sec-B",
    "title": "Sum of Array Elements (Sec B)",
    "description": "Read N followed by N numbers and print their sum.",
    "inputFormat": "First line: integer N. Second line: N space-separated integers.",
    "outputFormat": "One integer — the sum.",
    "constraints": "1 <= N <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5\n10 20 30 40 50",
        "expectedOutput": "150"
      },
      {
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "input": "4\n-1 -2 -3 -4",
        "expectedOutput": "-10"
      }
    ],
    "hiddenTests": [
      {
        "input": "6\n10 20 5 20 3 1",
        "expectedOutput": "59"
      },
      {
        "input": "3\n0 0 0",
        "expectedOutput": "0"
      },
      {
        "input": "5\n-5 -1 -3 -2 -4",
        "expectedOutput": "-15"
      },
      {
        "input": "2\n100 -100",
        "expectedOutput": "0"
      },
      {
        "input": "7\n1 2 3 4 5 6 7",
        "expectedOutput": "28"
      }
    ]
  },
  {
    "id": 202,
    "section": "Sec-B",
    "title": "Find Largest Array Element",
    "description": "Read N followed by N numbers and print the largest.",
    "inputFormat": "First line: integer N. Second line: N space-separated integers.",
    "outputFormat": "One integer — the largest element.",
    "constraints": "1 <= N <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5\n10 45 20 67 30",
        "expectedOutput": "67"
      },
      {
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "input": "4\n-1 -2 -3 -4",
        "expectedOutput": "-1"
      }
    ],
    "hiddenTests": [
      {
        "input": "6\n10 20 5 20 3 1",
        "expectedOutput": "20"
      },
      {
        "input": "3\n0 0 0",
        "expectedOutput": "0"
      },
      {
        "input": "5\n-5 -1 -3 -2 -4",
        "expectedOutput": "-1"
      },
      {
        "input": "2\n100 -100",
        "expectedOutput": "100"
      },
      {
        "input": "7\n1 2 3 4 5 6 7",
        "expectedOutput": "7"
      }
    ]
  },
  {
    "id": 203,
    "section": "Sec-B",
    "title": "Find Smallest Array Element",
    "description": "Read N followed by N numbers and print the smallest.",
    "inputFormat": "First line: integer N. Second line: N space-separated integers.",
    "outputFormat": "One integer — the smallest element.",
    "constraints": "1 <= N <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5\n10 45 2 67 30",
        "expectedOutput": "2"
      },
      {
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "input": "4\n-1 -2 -3 -4",
        "expectedOutput": "-4"
      }
    ],
    "hiddenTests": [
      {
        "input": "6\n10 20 5 20 3 1",
        "expectedOutput": "1"
      },
      {
        "input": "3\n0 0 0",
        "expectedOutput": "0"
      },
      {
        "input": "5\n-5 -1 -3 -2 -4",
        "expectedOutput": "-5"
      },
      {
        "input": "2\n100 -100",
        "expectedOutput": "-100"
      },
      {
        "input": "7\n1 2 3 4 5 6 7",
        "expectedOutput": "1"
      }
    ]
  },
  {
    "id": 204,
    "section": "Sec-B",
    "title": "Reverse an Array (Sec B)",
    "description": "Read N followed by N numbers and print them in reverse order, space-separated.",
    "inputFormat": "First line: integer N. Second line: N space-separated integers.",
    "outputFormat": "N integers, reversed, space-separated.",
    "constraints": "1 <= N <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "5\n10 20 30 40 50",
        "expectedOutput": "50 40 30 20 10"
      },
      {
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "input": "4\n-1 -2 -3 -4",
        "expectedOutput": "-4 -3 -2 -1"
      }
    ],
    "hiddenTests": [
      {
        "input": "6\n10 20 5 20 3 1",
        "expectedOutput": "1 3 20 5 20 10"
      },
      {
        "input": "3\n0 0 0",
        "expectedOutput": "0 0 0"
      },
      {
        "input": "5\n-5 -1 -3 -2 -4",
        "expectedOutput": "-4 -2 -3 -1 -5"
      },
      {
        "input": "2\n100 -100",
        "expectedOutput": "-100 100"
      },
      {
        "input": "7\n1 2 3 4 5 6 7",
        "expectedOutput": "7 6 5 4 3 2 1"
      }
    ]
  },
  {
    "id": 205,
    "section": "Sec-B",
    "title": "Count Even and Odd Elements",
    "description": "Read N followed by N numbers and print the counts in the exact format \"Even = X, Odd = Y\".",
    "inputFormat": "First line: integer N. Second line: N space-separated integers.",
    "outputFormat": "One line: Even = X, Odd = Y",
    "constraints": "1 <= N <= 1000",
    "starterCode": "#include <stdio.h>\n\nint main() {\n\n}\n",
    "sampleTests": [
      {
        "input": "6\n10 15 22 31 40 55",
        "expectedOutput": "Even = 3, Odd = 3"
      },
      {
        "input": "4\n2 4 6 8",
        "expectedOutput": "Even = 4, Odd = 0"
      },
      {
        "input": "4\n1 3 5 7",
        "expectedOutput": "Even = 0, Odd = 4"
      }
    ],
    "hiddenTests": [
      {
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "Even = 2, Odd = 3"
      },
      {
        "input": "3\n0 0 0",
        "expectedOutput": "Even = 3, Odd = 0"
      },
      {
        "input": "1\n7",
        "expectedOutput": "Even = 0, Odd = 1"
      },
      {
        "input": "1\n8",
        "expectedOutput": "Even = 1, Odd = 0"
      },
      {
        "input": "8\n1 2 3 4 5 6 7 8",
        "expectedOutput": "Even = 4, Odd = 4"
      }
    ]
  }
];

function getPublicQuestions() {
  return questions.map(({ hiddenTests, ...rest }) => rest);
}

function getQuestionById(id) {
  return questions.find((q) => q.id === Number(id));
}

module.exports = { questions, getPublicQuestions, getQuestionById };
