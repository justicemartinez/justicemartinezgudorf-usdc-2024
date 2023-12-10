/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 

//Define function to find search terms within books
function findSearchTermInBooks(searchTerm, books) {
  //Create empty array
  let results = [];

  //Iterate through each book from input
  for(const book of books) {
      //Iterate through text in each book
      for(const content of book.Content) {
          //Split content into invididual words
          const words = content.Text.split(/\s+/); 

          //Iterate through each word from words
          for (let i = 0; i < words.length; i++) {
              //Check words vs search term (not case sensitive)
              if (words[i] === searchTerm) {
                  //Push to results if there is a match
                  results.push({
                      ISBN: book.ISBN,
                      Page: content.Page,
                      Line: content.Line
                  });
              }
          }
      }
  }

  //Create output object
  const output = {
      SearchTerm: searchTerm,
      Results: results
  };

  return output;
}
/** Example input object. */
const twentyLeaguesIn = [
  {
      "Title": "Twenty Thousand Leagues Under the Sea",
      "ISBN": "9780000528531",
      "Content": [
          {
              "Page": 31,
              "Line": 8,
              "Text": "now simply went on by her own momentum.  The dark-"
          },
          {
              "Page": 31,
              "Line": 9,
              "Text": "ness was then profound; and however good the Canadian\'s"
          },
          {
              "Page": 31,
              "Line": 10,
              "Text": "eyes were, I asked myself how he had managed to see, and"
          } 
      ] 
  }
]
  
/** Example output object */
const twentyLeaguesOut = {
  "SearchTerm": "the",
  "Results": [
      {
          "ISBN": "9780000528531",
          "Page": 31,
          "Line": 9
      }
  ]
}

/*
_   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
\___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                    
*/

/* We have provided two unit tests. They're really just `if` statements that 
* output to the console. We've provided two tests as examples, and 
* they should pass with a correct implementation of `findSearchTermInBooks`. 
* 
* Please add your unit tests below.
* */


// Positive test: Matching search term "good"
const positiveTestInput = [
    {
      Title: "English for 'Bueno'",
      ISBN: "123456789",
      Content: [
        { Page: 1, Line: 1, Text: "This is a good book." },
        { Page: 1, Line: 2, Text: "Good books are hard to find." }
      ]
    },
    {
      Title: "The Opposite of 'Mal'",
      ISBN: "987654321",
      Content: [
        { Page: 1, Line: 1, Text: "Another example of a good book." }
      ]
    }
  ];
  
  const positiveTestResult = findSearchTermInBooks("good", positiveTestInput);
  console.log(positiveTestResult);
  
  // Negative test: No matching search term "good"
  const negativeTestInput = [
    {
      Title: "Las cositas malas",
      ISBN: "123456789",
      Content: [
        { Page: 1, Line: 1, Text: "A mi no me gustan las malas cosas." },
        { Page: 1, Line: 2, Text: "Esto es por que me encantan ser feliz. Quiero encontrar buenas cosas." }
      ]
    }
  ];
  
  const negativeTestResult = findSearchTermInBooks("good", negativeTestInput);
  console.log(negativeTestResult);
  
  // Case-sensitive test: Matching search term "The" but not "the"
  const caseSensitiveTestInput = [
    {
      Title: "Am I Case Sensitive?",
      ISBN: "111111111",
      Content: [
        { Page: 1, Line: 1, Text: "The quick brown fox." },
        { Page: 1, Line: 2, Text: "the lazy dog." }
      ]
    }
  ];
  
  const caseSensitiveTestResult = findSearchTermInBooks("The", caseSensitiveTestInput);
  console.log(caseSensitiveTestResult);
  