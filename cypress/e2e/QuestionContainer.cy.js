//.__   __.   ______   .___________.    _______  __  .__   __.      _______. __    __   _______  _______     .___________. _______     _______.___________. __  .__   __.   _______ 
//|  \ |  |  /  __  \  |           |   |   ____||  | |  \ |  |     /       ||  |  |  | |   ____||       \    |           ||   ____|   /       |           ||  | |  \ |  |  /  _____|
//|   \|  | |  |  |  | `---|  |----`   |  |__   |  | |   \|  |    |   (----`|  |__|  | |  |__   |  .--.  |   `---|  |----`|  |__     |   (----`---|  |----`|  | |   \|  | |  |  __  
//|  . `  | |  |  |  |     |  |        |   __|  |  | |  . `  |     \   \    |   __   | |   __|  |  |  |  |       |  |     |   __|     \   \       |  |     |  | |  . `  | |  | |_ | 
//|  |\   | |  `--'  |     |  |        |  |     |  | |  |\   | .----)   |   |  |  |  | |  |____ |  '--'  |       |  |     |  |____.----)   |      |  |     |  | |  |\   | |  |__| | 
//|__| \__|  \______/      |__|        |__|     |__| |__| \__| |_______/    |__|  |__| |_______||_______/        |__|     |_______|_______/       |__|     |__| |__| \__|  \______| 
                                                                                                                                                                                  


describe('QuestionContainer Component Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/community');


    const data = [
      {
        DID: 'DID-9DRYHPI903D',
        id: 1,
        date: "2024-07-25T00:00:00Z",
        title: "How to implement lazy loading in React?",
        questionText: "What is lazy loading in React, and how can it be implemented?",
        flags: ["React", "Lazy Loading"],
        votes: 20,
        answers: 0,
        views: 90
      },
      {
        DID: 'DID-1GJ5KZLQ8MD9',
        id: 2,
        date: "2024-07-26T00:00:00Z",
        title: "How to use React Router for navigation?",
        questionText: "Can someone explain how to use React Router for handling navigation in a React app?",
        flags: ["React", "React Router"],
        votes: 26,
        answers: 0,
        views: 0
      },
      {
        DID: 'DID-KL2N4PQ8X8E0',
        id: 3,
        date: "2024-08-01T00:00:00Z",
        title: "What is the purpose of useMemo in React?",
        questionText: "Can someone explain the purpose of the useMemo hook and provide an example of how it can be used?",
        flags: ["React", "useMemo"],
        votes: 15,
        answers: 1,
        views: 45
      },
      {
        DID: 'DID-Y6W8C3L9HJ0F',
        id: 4,
        date: "2024-08-03T00:00:00Z",
        title: "How can you manage state in a React app?",
        questionText: "What are the different ways to manage state in a React application, and when should you use each method?",
        flags: ["React", "State Management"],
        votes: 12,
        answers: 2,
        views: 60
      }
    ];

  
    localStorage.setItem('questions', JSON.stringify(data));
  });

  it('should render the QuestionContainer with data and handle click correctly', () => {

    cy.get('.question-box').first().within(() => {
      cy.get('.title').should('exist');
      cy.get('.question-text').should('exist');
    });

  
    cy.get('.question-box').first().within(() => {
      cy.get('.stats-item').should('have.length.greaterThan', 0);
      cy.get('.flags .flag-item').should('have.length.greaterThan', 0);
    });

 
    cy.get('.question-box').first().click();

  
    cy.url().should('include', '/question/');

  
    cy.window().then((win) => {
      const questions = JSON.parse(win.localStorage.getItem('questions'));
      const updatedQuestion = questions.find(q => q.DID === 'DID-9DRYHPI903D');
      //expect(updatedQuestion.views).to.equal(91);
    });
  });
});

