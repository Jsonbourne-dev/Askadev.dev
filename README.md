# ![Askadev.dev](src/assets/logo-green.svg)

## Welcome to Askadev.dev

Welcome to Askadev.dev, a platform designed to connect developers, collaborate on solving problems! Join Askadev to share knowledge, tackle challenges, and build solutions together!

## Visit askadev!
[Visit Askadev.dev](https://www.askadev.dev)

<br></br>
## Table of Contents
- [Welcome](#welcome-to-askadevdev)
- [Collaborators](#collaborators)
- [Project Roadmap](#project-roadmap)
- [Development Policy](#development-policy)
- [Getting Started](#getting-started-on-developing-askadev)
<br></br>


## Collaborators

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/duncannevin">
        <img src="https://github.com/duncannevin.png" width="100px;" alt="Duncan Nevin"/>
        <br />
        <sub><b>Duncan Nevin</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/jsonbourne-dev">
        <img src="https://github.com/jsonbourne-dev.png" width="100px;" alt="jsonbourne-dev"/>
        <br />
        <sub><b>jsonbourne-dev</b></sub>
      </a>
    </td>
  </tr>
</table>

<br><br>

# 🚀 Project Roadmap

Here's a roadmap outlining the journey of this project, highlighting key milestones and features. Each stage brings us closer to our goal!

---

## 📅 Roadmap Overview

| Phase | Description                                      | Status     |
|-------|--------------------------------------------------|------------|
| 🏁 **Phase 1**  | Project Initialization & Core Setup            | ✅ Completed |
| 🛠️ **Phase 2**  | Feature Development                           | 🔄 In Progress |
| 🔍 **Phase 3**  | Testing & Quality Assurance                   | ⏳ Upcoming   |
| 🚀 **Phase 4**  | Final Launch & Deployment                    | ⏳ Upcoming   |
| 📈 **Phase 5**  | Post-launch Improvements & Optimization       | ⏳ Upcoming   |

---

## 📌 Detailed Milestones

### 🏁 Phase 1: Project Initialization & Core Setup
- **Define objectives**: Establish project goals and user requirements.
- **Core environment setup**: Set up tools, repos, and baseline configurations.
- **Foundation codebase**: Start with core logic and foundational modules.
  
### 🛠️ Phase 2: Feature Development
- **User Interface (UI)**: Design and implement core user interface components.
- **Backend Development**: Set up databases, APIs, and backend logic.
- **Authentication**: Implement user login, registration, and permissions.

### 🔍 Phase 3: Testing & Quality Assurance
- **Unit Testing**: Ensure all modules pass unit tests.
- **Integration Testing**: Verify seamless interaction between components.
- **User Feedback Round**: Gather early feedback for improvements.

### 🚀 Phase 4: Final Launch & Deployment
- **Deploy to production**: Publish a stable, full-feature version.
- **Performance Optimization**: Ensure smooth, efficient operation.
- **Documentation**: Finalize all documentation for end-users and developers.

### 📈 Phase 5: Post-launch Improvements & Optimization
- **User Feedback Integration**: Implement valuable feedback for improvements.
- **New Features**: Plan and develop additional features based on user needs.
- **Scaling & Optimization**: Prepare for high scalability and optimize performance.
Stay tuned as we make progress through each phase of our roadmap, bringing this project to life! 🌟
---


<br><br>


# 🛠️ Development Policy

Welcome to our project's development policy! This document outlines our expectations and guidelines for contributing, coding standards, and project management to ensure a smooth and collaborative environment.

---

## 📋 Contribution Guidelines

1. **Fork the Repository**
   - Create a personal copy of the repository on your GitHub account.
   - Work on your changes in this forked repository.

2. **Create a Branch**
   - Always create a new branch for your feature or bug fix. Use descriptive names for your branches.
     ```
     git checkout -b feature/your-feature-name
     ```

3. **Write Clear Commit Messages**
   - Commit messages should be concise yet descriptive.
   - Follow the format: `TYPE: Short description (e.g., Fix: correct spelling error)`

4. **Open a Pull Request**
   - Once your changes are ready, submit a pull request (PR) to the main repository.
   - Include a description of the changes, the issue being addressed, and any relevant context.

5. **Review Process**
   - Each PR will be reviewed by at least one collaborator.
   - Be open to feedback and willing to make changes based on suggestions.

---

## 🧑‍💻 Coding Standards

1. **Language Conventions**
   - Follow the coding conventions for the specific programming language used in the project.
   - Maintain consistency with existing code.

2. **Commenting and Documentation**
   - Write comments where necessary to explain complex logic.
   - Document your code using clear, meaningful comments and ensure functions and methods are well-documented.

3. **Code Formatting**
   - Use consistent formatting (indentation, line spacing, etc.).
   - Consider using a linter and formatter to automate this process.

4. **Testing**
   - Write tests for new features and bug fixes.
   - Ensure all tests pass before submitting a PR.

---

## 📅 Project Management

1. **Issue Tracking**
   - Use GitHub Issues to report bugs or propose new features.
   - Tag issues appropriately (e.g., `bug`, `enhancement`, `discussion`).

2. **Milestones and Roadmap**
   - Familiarize yourself with the project roadmap and milestones.
   - Contribute to ongoing discussions regarding future features and improvements.

3. **Meetings and Communication**
   - Join regular meetings (if applicable) to discuss progress and roadblocks.
   - Utilize our communication channels (e.g., Slack, Discord, etc.) for questions and collaboration.

---

## 🎉 Code of Conduct

We promote a welcoming and inclusive environment for all contributors. Please adhere to our [Code of Conduct](link-to-code-of-conduct) to ensure a positive experience for everyone involved.

---

Thank you for contributing to our project! Your efforts are what make this community great! 🙌


<br><br>


## Getting Started ON Developing AskaDEV!
1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Jsonbourne-dev/Askadev.dev.git
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```
# befor we do anything else you need to get your firebase auth keys
## 🔑 Firebase Authentication Setup

We use **Firebase Authentication** for user management in our application. To get started with development, you'll need to set up your Firebase project and obtain your API keys. Follow these steps:

### Step 1: Create a Firebase Project

1. Go to the [Firebase Console](https://firebase.google.com/).
2. Click on **Get Started** and sign in with your Google account if prompted.
3. Click on **Add project** to create a new Firebase project.
4. Enter a name for your project and follow the prompts to set up your project.

### Step 2: Enable Authentication

1. Once your project is created, navigate to the **Authentication** section in the left-hand menu.
2. Click on **Get Started** to enable the authentication module.
3. Under the **Sign-in method** tab, choose the authentication methods you want to enable (e.g., Email/Password, Google Sign-In, etc.).
4. Click **Save** after enabling the methods you want.

### Step 3: Get Your API Keys

1. Navigate to the **Project settings** (gear icon) in the left-hand menu.
2. Under the **General** tab, scroll down to the **Your apps** section.
3. Click on **Add app** to create a web app if you haven't done so.
4. Follow the prompts to register your app.
5. After registration, you'll see your Firebase SDK snippet, which includes your API keys. Copy the configuration object, which looks something like this:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

1. Initialize Firebase in your application. In your in the firebase directory create a .env file with the generated keys:
  ```.env
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
```
---

3. **Start the Application:**

   ```bash
   npm start
   ```

4. **To open the Cypress test runner, use the following command:**

   ```bash
   yarn cypress open
   ```
