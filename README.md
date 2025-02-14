

📚 Cypress.io Complete Guide
Welcome to the comprehensive guide for Cypress.io! In this document, we’ll cover all the key topics, from installing Cypress to working with advanced testing concepts.

🔹 Introduction
🔹 Test Automation with JavaScript
Test automation with JavaScript is becoming a must-have in the world of software quality assurance. With the rapid pace of modern software development, traditional QA methods are struggling to keep up, leaving many applications filled with bugs and frustrating users.

But what if you could test your software automatically from the user’s perspective? Imagine having a team of automated testers running checks on every workflow 24/7, instantly notifying you when something goes wrong—all for free!

This is the promise of end-to-end (E2E) testing, and one of the most popular tools revolutionizing E2E testing today is Cypress.io. Cypress is a powerful and easy-to-use tool that addresses many of the challenges associated with automated testing.

My name is Shaun, and I’m a senior JavaScript developer who frequently uses Cypress.io in my own work. In this course, I’ll guide you through the basics of Cypress and show you how it can help you significantly improve the quality of your software.

🔹 What You Should Know
To get the most out of this course, there are two key things you should be familiar with:

A solid understanding of JavaScript, particularly modern ES6 syntax. If you’re not comfortable with it yet, don’t worry—you can pause the course and look things up as needed.
A passion for software quality. Cypress.io and E2E testing are all about delivering higher-quality products. If you have that passion, you’re already off to a great start!
🔹 Software Installation
Before we dive into Cypress, let’s set up the necessary tools.

1️⃣ Node.js Installation
Node.js is essential for running our code. If you haven’t installed it yet, go to Node.js and download the installer. Follow the installation steps for your operating system. If you’re using Windows or a UNIX-based system like Ubuntu, the installation process might differ slightly, but the Node.js website provides detailed instructions.

2️⃣ Check and Update npm
After installing Node.js, it’s a good idea to make sure you have the latest version of npm (Node Package Manager). Open your terminal and run:


npm install -g npm
To verify that you have the latest version of npm, type:


npm -v
While you’re at it, check your Node.js version with:


node -v
Don’t worry if your version is newer than the one I’m using—everything should still work fine.

3️⃣ Handling Permission Errors
If you run into a "permission denied" error while installing npm globally, prepend sudo to your command (on macOS or Linux):


sudo npm install -g npm


1️⃣ Introduction to Cypress.io
🔹 What is Cypress?
Cypress.io is a modern and powerful tool designed to solve many common problems in end-to-end (E2E) testing. Imagine you’re developing a web application. When the app is simple, you can manually test all the features in just a few clicks. However, as the application grows, it becomes nearly impossible to manually test everything, especially with frequent updates.

This is where automated testing comes in. Instead of relying on developers or dedicated QA engineers to test everything manually, automated tests can simulate user interactions like clicking buttons, entering text, and verifying elements on the page. This type of testing, known as end-to-end testing, ensures the application works as expected from the user’s perspective.

Cypress makes E2E testing easier and more reliable compared to other tools like Selenium. It runs directly inside a real browser, providing results that closely match what real users experience. Additionally, it’s open-source and free, making it accessible to all developers. In this course, we’ll explore how to use Cypress to build scalable and reliable tests for your web applications.

🔹 Advantages of Cypress
Cypress offers several advantages that make it stand out from other E2E testing frameworks:

Real Browser Testing
Unlike headless browsers used by many frameworks, Cypress runs tests in a real browser, ensuring the results accurately reflect the user experience.

Network Request Control
Cypress gives you full control over network requests, allowing you to simulate server errors or test how your application behaves in different network conditions.

Element Visibility Checks
Cypress ensures elements are visible before interacting with them. If a button is hidden or off-screen, Cypress will detect it and fail the test—something other tools often overlook.

Screenshots and Video Recording
Cypress can capture screenshots and videos during test runs, making it easier to debug issues by visually reviewing test steps.

Intuitive and Readable Syntax
The Cypress command syntax is easy to read and understand, even for beginners. For example:


cy.get('input[type="text"]').type('Hello World');
cy.get('button').click();
It’s clear what the code is doing without needing extensive documentation.

🔹 Cypress Limitations
While Cypress has many strengths, it’s important to understand its limitations:

JavaScript-Only Testing
Cypress only supports JavaScript for writing tests, which may not be ideal for teams working primarily in other languages.

No Multi-Tab or Multi-Browser Testing
Cypress does not support testing multiple tabs or browsers in the same test. However, most scenarios can be handled by stubbing or simulating interactions.

Single Superdomain Restriction
You cannot visit multiple superdomains (e.g., google.com and github.com) in a single test. While this might seem limiting, it rarely affects typical test scenarios.

Despite these trade-offs, Cypress remains an excellent tool for E2E testing. The Cypress team continues to improve its features, and many limitations have workarounds.

2️⃣ The Basics
🔹 Installing and Opening Cypress
Now that you’re familiar with the basics of Cypress and its pros and cons, let’s take a look at how to set it up and start using it.

Step 1: Initialize an npm Package
First, create an empty directory for your Cypress project. For example:


mkdir e2e-cypress
cd e2e-cypress
Once inside the directory, open the terminal and run:


npm init -y
This will generate a package.json file, which is essential for managing your project’s dependencies.

Step 2: Install Cypress
To install Cypress as a development dependency, run:


npm install --save-dev cypress
Step 3: Open Cypress
After the installation is complete, you can open the Cypress interface with the following command:


npx cypress open
Cypress will launch a window with several example test files. These examples are a great reference when writing your own tests. You can explore these examples to get a feel for how Cypress runs tests and displays results.

🔹 Writing Your First Test
Now let’s write our first test in Cypress.

Step 1: Create a Test File
In your project folder, you’ll find a cypress/integration directory. This is where Cypress stores all test files. Create a new test file called first_test.spec.js:


touch cypress/integration/first_test.spec.js
Step 2: Write a Simple Test
Let’s write a basic test to check if a heading on our site contains the correct text. Here’s the code:


describe('Heading text', () => {
  it('contains the correct title', () => {
    cy.visit('http://localhost:3000/example-1');
    cy.get('h1').invoke('text').should('equal', 'My Awesome Web Application');
  });
});
This test does the following:

Visits the specified URL (http://localhost:3000/example-1).
Gets the h1 element on the page.
Asserts that the text inside the h1 element is equal to 'My Awesome Web Application'.
Step 3: Run Your Test
Go back to the Cypress interface and click on your first_test.spec.js file. You’ll see the test running in the browser, with each step displayed on the left. If everything works correctly, the test will pass, and Cypress will highlight it in green.

If you modify the expected text to something different, Cypress will wait for a few seconds before failing the test—giving your application time to load fully. This built-in retry feature is one of Cypress’s greatest strengths.

🔹 Testing Text Input
Now that we’ve written a simple test, let’s create one that verifies the behavior of a text input field.

In your test app (http://localhost:3000/example-2), there’s a text box that only allows a limited number of characters. Below the text box, there’s a counter showing how many characters you have left. Once the limit is reached, the text box won’t accept any more input.

Here’s how we’ll test that:


describe('Text box with max characters', () => {
  it('displays the appropriate remaining characters count', () => {
    cy.visit('http://localhost:3000/example-2');
    cy.get('span').invoke('text').should('equal', '15');
    
    cy.get('input').type('hello');
    cy.get('span').invoke('text').should('equal', '10');

    cy.get('input').type(' my friend');
    cy.get('span').invoke('text').should('equal', '0');
  });

  it('prevents the user from typing more characters once max is exceeded', () => {
    cy.visit('http://localhost:3000/example-2');
    cy.get('input').type('This is a really long string that exceeds the limit');
    cy.get('input').should('have.attr', 'value', 'This is a rea');
  });
});

🔹 Selecting Elements
Now that we’ve written some tests, let’s focus on a crucial part of writing reliable Cypress tests: selecting elements.

In our previous tests, we used basic HTML tags like cy.get('span') or cy.get('input') to select elements. While this works for simple cases, it can lead to fragile tests that break as soon as the app’s structure changes. Let’s look at a better approach.

Why Simple Selectors Are Fragile
Imagine you have two text inputs on your page, and both use the same input tag. If you try to select an element using cy.get('input'), Cypress will select both, which can cause errors.

You might think using an index (cy.get('input').eq(1)) is the solution, but that’s also risky. Changes in the order of elements or additional inputs will break your test. Selecting elements by CSS class (cy.get('.big-green-button')) might seem better, but what happens if the design team changes the color of the button to red?

The Recommended Way: Data Attributes
The best way to select elements in Cypress is by using data attributes (e.g., data-cy). These attributes are specifically added for testing purposes and are not affected by visual or functional changes in the application.

Here’s how to rewrite our tests using data-cy attributes:

cy.get('[data-cy="remaining-chars"]').invoke('text').should('equal', '15');
cy.get('[data-cy="char-input"]').type('hello');
cy.get('[data-cy="remaining-chars"]').invoke('text').should('equal', '10');
By using data-cy attributes, your tests become more reliable and easier to maintain.

🔹 Aliasing Elements
Cypress provides a feature called aliasing, which makes your tests more readable and reduces repetitive code. Aliases allow you to assign a shorter name to a complex selector and reuse it throughout the test.

Example: Creating an Alias

cy.get('[data-cy="remaining-chars"]').as('charCount');
cy.get('@charCount').invoke('text').should('equal', '15');
cy.get('[data-cy="char-input"]').type('hello');
cy.get('@charCount').invoke('text').should('equal', '10');
Here, @charCount becomes a reusable reference for cy.get('[data-cy="remaining-chars"]'). This reduces duplication and makes your tests easier to read.

🔹 Working with Command Results
Sometimes, you’ll want to capture and work with the result of a Cypress command. Cypress provides the .then() method for this purpose.


cy.get('[data-cy="remaining-chars"]').then(($charCount) => {
  const text = $charCount.text();
  expect(text).to.equal('15');
});
This method is especially useful when you need to perform multiple operations on an element or pass its result to another function.

🔹 The beforeEach Hook
If you find yourself repeating the same setup code in multiple tests, it’s time to use the beforeEach hook. This hook runs before each test, ensuring your setup is consistent and reducing redundancy.

Here’s an example:

ь
describe('Text box with max characters', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/example-2');
    cy.get('[data-cy="char-input"]').as('charInput');
    cy.get('[data-cy="remaining-chars"]').as('charCount');
  });

  it('displays the appropriate remaining characters count', () => {
    cy.get('@charCount').invoke('text').should('equal', '15');
  });

  it('prevents the user from typing more characters once max is exceeded', () => {
    cy.get('@charInput').type('This is a long string');
    cy.get('@charInput').should('have.attr', 'value', 'This is a long');
  });
});
🔹 Setting a Base URL
Instead of typing the full URL (http://localhost:3000) in every test, you can set a base URL in cypress.json:


{
  "baseUrl": "http://localhost:3000"
}
Now, your tests can simply specify the path:


cy.visit('/example-2');
This makes your tests cleaner and easier to maintain, especially when switching between environments (e.g., development and production).


3️⃣ Intermediate Concepts
🔹 Interacting with Elements
Now that we’ve covered the basics of Cypress, let’s take a deeper look at how to interact with elements on the page. So far, we’ve mostly used the .type() command to enter text into input fields, but Cypress provides many more commands for interacting with elements. In this section, we’ll explore several ways to trigger different types of actions, including double-clicking, checking checkboxes, and selecting options from dropdown menus.

Example: Double-Clicking
To get started, create a new test file called interactions.spec.js. In this file, let’s set up our test structure and use the .dblclick() command to test a double-click action.


describe('Basic page interactions', () => {
  beforeEach(() => {
    cy.visit('/example-4');
  });

  it('sets the header text to the item name when double-clicked', () => {
    cy.get('[data-cy="list"] > :nth-child(2)').dblclick();
    cy.get('[data-cy="header-text"]').invoke('text').should('equal', 'Option 2');
  });
});
In this test:

We visit /example-4, which contains a list of items.
We use cy.get() to find the second list item and trigger a double-click with .dblclick().
Finally, we check if the header text has been updated to match the item name.
Example: Checking Checkboxes
Cypress provides .check() and .uncheck() commands for interacting with checkboxes and radio buttons. Let’s write a test to ensure the displayed count updates correctly when checkboxes are selected:


it('displays the correct count for selected checkboxes', () => {
  cy.get('[data-cy="checkbox-container"] > :nth-child(1) input').check();
  cy.get('[data-cy="selected-count"]').invoke('text').should('equal', '1');
});
In this test:

We select the first checkbox with .check().
We verify that the count text updates to show that one checkbox is selected.
Example: Selecting from a Dropdown
Dropdown menus are another common element you’ll need to test. Cypress offers a .select() command to make this process easier:


it('displays the name of the currently selected item', () => {
  cy.get('[data-cy="dropdown"]').select('Option 3');
  cy.get('[data-cy="header-text"]').invoke('text').should('equal', 'Option 3');
});
Here, we use .select('Option 3') to choose an item from the dropdown and verify that the header text updates accordingly.

🔹 Triggering Other Actions
In some cases, you’ll need more control over user interactions. For example, what if you want to simulate a mouseover event or trigger a specific action at an exact coordinate? Cypress provides the .trigger() command for these advanced interactions.

Example: Simulating a Mouseover Event
Let’s test a mouseover event that updates the header text with the name of the hovered item:


it('displays the name of the most recently hovered item', () => {
  cy.get('[data-cy="list"] > :nth-child(2)').trigger('mouseover');
  cy.get('[data-cy="header-text"]').invoke('text').should('equal', 'Option 2');
});
In this example:

We simulate a mouseover event on the second list item with .trigger('mouseover').
We check if the header text displays the correct item name.
Passing Coordinates to .trigger()
The .trigger() command also allows you to pass additional arguments, such as X and Y coordinates, for more precise control:


cy.get('[data-cy="draggable"]').trigger('mousedown', { x: 100, y: 200 });
This can be useful for simulating drag-and-drop actions, interacting with custom sliders, or other complex UI elements.



4️⃣ Other Useful Commands
🔹 The wrap Command
In Cypress, you may occasionally want to convert a jQuery element back into a Cypress element to make assertions using Cypress commands like .should() instead of Chai’s expect.

The .wrap() command allows you to "wrap" non-Cypress elements and use Cypress commands on them.

Example: Wrapping a jQuery Element

cy.get('h1').then(($element) => {
  cy.wrap($element).should('have.text', 'Hello World');
});
In this example, cy.wrap() converts the $element from jQuery format to a Cypress element, allowing you to use Cypress assertions like .should() for consistency.

🔹 The and Command
The .and() command is a Cypress command used for chaining multiple assertions on the same element. It doesn’t add new functionality but improves readability.

Example: Chaining Assertions

cy.get('.button')
  .should('be.visible')
  .and('have.class', 'btn-primary')
  .and('not.be.disabled');
You can use .and() to combine multiple assertions into a single, readable statement, making your tests easier to understand.

🔹 The filter and not Commands
These commands allow you to fine-tune element selection by including or excluding elements based on certain criteria.

Example: Using .filter()

cy.get('li').filter('.active').should('have.length', 2);
In this example, .filter() selects only list items with the class .active.

Example: Using .not()

cy.get('li').not('.hidden').should('have.length', 3);
Here, .not() excludes all elements with the class .hidden from the selection.

🔹 Typing Special Characters
Cypress supports typing special keys like Enter, Tab, and Escape using the .type() command with bracket notation.

Example: Typing Special Keys

cy.get('input').type('Hello{enter}');
cy.get('input').type('{tab}');
You can use {enter}, {esc}, {backspace}, and more. Check the Cypress documentation for a full list.

🔹 Activating Code Completion
To make writing Cypress tests easier, you can enable code completion in your editor. This helps you see suggestions for Cypress commands and their descriptions directly in your editor.

Method 1: Using Triple-Slash Directive
Add this to the top of your test file:


/// <reference types="cypress" />
Method 2: Using jsconfig.json (for VS Code)
Create a jsconfig.json file in your project root and add the following configuration:


{
  "include": [
    "./node_modules/cypress",
    "cypress/**/*.js"
  ]
}
This will enable code completion for all test files in your project.

🛑 Conclusion
🔹 Summary
In this course, we’ve covered the core concepts of Cypress, starting with what it is and how to use it for writing basic tests. We’ve explored more advanced commands and techniques, helping you improve your testing skills.

This course was designed to be an introduction, but true mastery comes from practice. The best next step is to use Cypress in your own projects and explore how it fits into your workflow.

If you want to expand your testing skills, you might want to check out other testing frameworks like Selenium or learn more about unit testing with test-driven development in JavaScript.

Thanks for following along, and I hope this guide helps you build more reliable and high-quality web applications!