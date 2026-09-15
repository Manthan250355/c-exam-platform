// Central question bank. sampleTests are shown to the student (Run Sample Test
// Cases / Test Cases tab). hiddenTests are used only when Submit is pressed,
// to compute a score, and are never sent to the frontend.
//
// Generated set (ids 6+) built programmatically: expected outputs were computed
// once in JS and cross-checked against real gcc output for the trickiest cases
// (floating-point formatting, Heron's formula, bitwise power-of-two, Armstrong/
// strong numbers, anagrams, multi-line array input) before being committed here.

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
  }
];

function getPublicQuestions() {
  return questions.map(({ hiddenTests, ...rest }) => rest);
}

function getQuestionById(id) {
  return questions.find((q) => q.id === Number(id));
}

module.exports = { questions, getPublicQuestions, getQuestionById };
