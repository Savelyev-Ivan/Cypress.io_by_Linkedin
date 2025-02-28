

# 📚 **Cypress.io Complete Guide**  

Welcome to the comprehensive guide for **Cypress.io**! This document covers all the key topics—starting from installation to advanced testing concepts, ensuring you get the most out of Cypress.

---

## 📑 **Table of Contents**  

1. [🔹 Introduction](#-introduction)  
   - [Test Automation with JavaScript](#-test-automation-with-javascript)  
   - [What You Should Know](#-what-you-should-know)  
   - [Software Installation](#-software-installation)  
2. [1️⃣ Introduction to Cypress.io](#1️⃣-introduction-to-cypressio)  
   - [What is Cypress?](#-what-is-cypress)  
   - [Advantages of Cypress](#-advantages-of-cypress)  
   - [Cypress Limitations](#-cypress-limitations)  
3. [2️⃣ The Basics](#2️⃣-the-basics)  
   - [Installing and Opening Cypress](#-installing-and-opening-cypress)  
   - [Writing Your First Test](#-writing-your-first-test)  
   - [Testing Text Input](#-testing-text-input)  
   - [Selecting Elements](#-selecting-elements)  
4. [3️⃣ Intermediate Concepts](#3️⃣-intermediate-concepts)  
   - [Interacting with Elements](#-interacting-with-elements)  
   - [Triggering Other Actions](#-triggering-other-actions)  
5. [4️⃣ Other Useful Commands](#4️⃣-other-useful-commands)  
   - [The `wrap` Command](#-the-wrap-command)  
   - [The `and` Command](#-the-and-command)  
   - [The `filter` and `not` Commands](#-the-filter-and-not-commands)  
   - [Typing Special Characters](#-typing-special-characters)  
   - [Activating Code Completion](#-activating-code-completion)  
6. [🛑 Conclusion](#-conclusion)  

---

## 🔹 **Introduction**  

### 🔹 **Test Automation with JavaScript**  
In the fast-paced world of software development, manual testing methods struggle to keep up, leaving applications vulnerable to bugs. Cypress.io offers a powerful solution for **end-to-end (E2E) testing** that helps you test your application from a real user’s perspective.  

Imagine having automated tests running 24/7, instantly notifying you when something breaks—all for free. This is exactly what **Cypress** provides.  

---

### 🔹 **What You Should Know**  
Before diving into Cypress, it’s helpful to have:  

1. **Basic Knowledge of JavaScript** – Familiarity with modern ES6 syntax will help you understand the code examples.  
2. **Passion for Software Quality** – If you care about creating reliable, high-quality products, you’re in the right place.  

---

### 🔹 **Software Installation**  

1️⃣ **Node.js Installation**  
- Download and install Node.js from [Node.js Official Site](https://nodejs.org).  

2️⃣ **Update npm**  
```bash
npm install -g npm
npm -v  # Check npm version
```

3️⃣ **Handle Permission Errors (macOS/Linux)**  
```bash
sudo npm install -g npm
```

---

## 1️⃣ **Introduction to Cypress.io**  

### 🔹 **What is Cypress?**  
Cypress.io is a modern and powerful tool designed for **end-to-end (E2E) testing**. It runs tests directly in a real browser, providing accurate results that closely reflect the real user experience.  

### 🔹 **Advantages of Cypress**  
- **Real Browser Testing** – Tests run inside an actual browser, not a simulated environment.  
- **Network Request Control** – Simulate server errors or test network conditions easily.  
- **Screenshots and Video Recording** – Capture everything during tests for easy debugging.  
- **Readable and Intuitive Syntax** – Commands like `.get()` and `.click()` are easy to understand.  

---

## 2️⃣ **The Basics**  

### 🔹 **Installing and Opening Cypress**  
**Step 1:** Create and initialize a new npm package:  
```bash
mkdir e2e-cypress && cd e2e-cypress
npm init -y
```

**Step 2:** Install Cypress:  
```bash
npm install --save-dev cypress
```

**Step 3:** Open Cypress:  
```bash
npx cypress open
```

---

### 🔹 **Writing Your First Test**  
Create a test file in `cypress/integration/first_test.spec.js`:  

```javascript
describe('Heading text', () => {
  it('contains the correct title', () => {
    cy.visit('http://localhost:3000/example-1');
    cy.get('h1').invoke('text').should('equal', 'My Awesome Web Application');
  });
});
```

---

## 3️⃣ **Intermediate Concepts**  

### 🔹 **Interacting with Elements**  
Use `.dblclick()`, `.check()`, `.select()`, and more to simulate user actions.  

Example:  
```javascript
cy.get('[data-cy="checkbox"]').check();
cy.get('[data-cy="dropdown"]').select('Option 3');
```

---

## 4️⃣ **Other Useful Commands**  

### 🔹 **The `wrap` Command**  
Convert jQuery elements back into Cypress elements to use `.should()` assertions.  

```javascript
cy.get('h1').then(($el) => {
  cy.wrap($el).should('have.text', 'Hello World');
});
```

---

### 🔹 **Typing Special Characters**  
Simulate keys like `Enter`, `Tab`, or `Escape`:  
```javascript
cy.get('input').type('Hello{enter}');
```

---

## 🛑 **Conclusion**  

In this guide, we explored Cypress.io, from setup to advanced testing techniques. Cypress offers a robust and reliable way to automate your end-to-end tests.  

If you want to continue improving your testing skills, explore other tools like **Selenium** or dive deeper into **unit testing with JavaScript**.  

Happy testing! 🚀  
