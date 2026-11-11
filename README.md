![Boolean Tech Academy](https://img.shields.io/badge/Boolean_Tech_Academy-001632?style=for-the-badge)

# 🎓 Exercise 40/50 - React Context API

Extend the mini e-commerce application by introducing React Context API to manage a shared budget mode, allowing users to filter products based on their price.

## 📌 Project Overview

| Property | Details |
|:--|:--|
| Repository | `react-context-api` |
| Category | Boolean Tech Academy |
| Type | Exercise |
| Exercise | 40/50 |

## 🎯 Assignment

Implement a shared context to manage the application's budget mode and control which products are displayed in the store.

### Milestone 1 - Create the Budget Context

Create a new context called `BudgetContext`.

- Add a boolean state called `budgetMode` (`true` / `false`).
- Provide the `setBudgetMode` function to update its value.
- Wrap the entire application with the `BudgetProvider`.

### Milestone 2 - Update the Navbar

Create a `Navbar.jsx` component if one does not already exist.

- Add the Navbar to `App.jsx` or to the existing layout component.
- Include a **Budget Mode** button that toggles `budgetMode` when clicked.
- Dynamically update the button label depending on the current state:
  - `Activate Budget Mode`
  - `Deactivate Budget Mode`

### Milestone 3 - Filter Products

Modify the Products page to use the shared context.

- Retrieve the `budgetMode` value from `BudgetContext`.
- When `budgetMode` is `true`, display only products with `price <= 30`.
- Otherwise, display all products normally.

### Bonus - Dynamic Price Filter

Turn budget mode into a configurable price filter.

- Add a numeric `maxPrice` value to the context, with an initial value of `null`.
- Add a number input field to the Navbar, connected to the `maxPrice` value in the context.
- In the Products page, display only products with `price <= maxPrice`.

**Important:** If `maxPrice` is `null` or `budgetMode` is inactive, display all products, without applying the price filter.

## 🛠️ Technologies

![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

## 💡 What I Learned

- Creating and managing React Context.
- Sharing state across multiple components.
- Implementing a Context Provider.
- Accessing shared state with `useContext`.
- Managing boolean states and toggle functionality.
- Building dynamic filters based on product prices.
- Connecting form inputs to shared context values.
- Combining application state with conditional rendering.

## ©️ Credits

Exercise assigned by **Boolean Tech Academy** as part of the Web Development course - Class 152 - Year 2025-2026
