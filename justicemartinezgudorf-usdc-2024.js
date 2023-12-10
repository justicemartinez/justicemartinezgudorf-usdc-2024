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
                if (words[i].toLowerCase() === searchTerm.toLowerCase()) {
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
  
  // Negative test: No matching search term "apple"
  const negativeTestInput = [
    {
      Title: "What sort of fruits do I like?",
      ISBN: "123456789",
      Content: [
        { Page: 1, Line: 1, Text: "I like oranges." },
        { Page: 1, Line: 2, Text: "Bananas are my favorite fruit." }
      ]
    }
  ];
  
  const negativeTestResult = findSearchTermInBooks("apple", negativeTestInput);
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
  