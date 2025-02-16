

<p align="center">
    <img src="./public/logo.png" width="200" style="border-radius: 20px;" />
</p>
            

<p align="center">
    <h1 align="center">ParseGen</h1>
</p>


<p align="center">
  <img src="https://img.shields.io/github/license/Eemayas/ParseGen_Frontend?style=flat&color=0080ff" alt="license">
  <img src="https://img.shields.io/github/last-commit/Eemayas/ParseGen_Frontend?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
  <img src="https://img.shields.io/github/languages/top/Eemayas/ParseGen_Frontend?style=flat&color=0080ff" alt="repo-top-language">
  <img src="https://img.shields.io/github/languages/count/Eemayas/ParseGen_Frontend?style=flat&color=0080ff" alt="repo-language-count">
  <img src="https://img.shields.io/github/actions/workflow/status/Eemayas/ParseGen_Frontend/build.yml?branch=main&style=flat&color=0080ff" alt="build-status">
  <img src="https://img.shields.io/github/issues/Eemayas/ParseGen_Frontend?style=flat&color=0080ff" alt="open-issues">
  <img src="https://img.shields.io/github/forks/Eemayas/ParseGen_Frontend?style=flat&color=0080ff" alt="forks">
  <img src="https://img.shields.io/github/stars/Eemayas/ParseGen_Frontend?style=flat&color=0080ff" alt="stars">
  <img src="https://img.shields.io/github/issues-pr/Eemayas/ParseGen_Frontend?style=flat&color=0080ff" alt="pull-requests">
  <img src="https://img.shields.io/github/contributors/Eemayas/ParseGen_Frontend?style=flat&color=0080ff" alt="contributors">
  <img src="https://img.shields.io/github/commit-activity/m/Eemayas/ParseGen_Frontend?style=flat&color=0080ff" alt="commit-activity">
  <img src="https://img.shields.io/github/languages/code-size/Eemayas/ParseGen_Frontend?style=flat&color=0080ff" alt="code-size">
  <img src="https://img.shields.io/github/repo-size/Eemayas/ParseGen_Frontend?style=flat&color=0080ff" alt="repo-size">
  <img src="https://img.shields.io/github/downloads/Eemayas/ParseGen_Frontend/total?style=flat&color=0080ff" alt="downloads">
  <img src="https://img.shields.io/github/sponsors/Eemayas/ParseGen_Frontend?style=flat&color=0080ff" alt="sponsors">
  <img src="https://img.shields.io/github/v/release/Eemayas/ParseGen_Frontend?style=flat&color=0080ff" alt="release-version">
  <img src="https://img.shields.io/codecov/c/github/Eemayas/ParseGen_Frontend?style=flat&color=0080ff" alt="coverage">
  <img src="https://img.shields.io/codeclimate/quality/a/Eemayas/ParseGen_Frontend?style=flat&color=0080ff" alt="code-quality">
  <img src="https://img.shields.io/david/Eemayas/ParseGen_Frontend?style=flat&color=0080ff" alt="dependencies">
  <img src="https://img.shields.io/david/dev/Eemayas/ParseGen_Frontend?style=flat&color=0080ff" alt="dev-dependencies">
  <img src="https://img.shields.io/snyk/vulnerabilities/github/Eemayas/ParseGen_Frontend?style=flat&color=0080ff" alt="security">
  <img src="https://img.shields.io/website?style=flat&color=0080ff&url=https%3A%2F%2Fexample.com" alt="performance">
  <img src="https://img.shields.io/github/commit-activity/y/Eemayas/ParseGen_Frontend?style=flat&color=0080ff" alt="activity">
  <img src="https://img.shields.io/docsify/docs?style=flat&color=0080ff" alt="documentation">
  <img src="https://img.shields.io/github/v/tag/Eemayas/ParseGen_Frontend?style=flat&color=0080ff" alt="version">
</p>
    

<p align="center">
    <em>Constructed using the following tools and technologies:</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white" alt="CSS">
  <img src="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/Flask-44aec1.svg?style=for-the-badge&logo=Flask&logoColor=white" alt="Flask">
  <img src="https://img.shields.io/badge/Python-3776AB.svg?style=for-the-badge&logo=Python&logoColor=white" alt="Python">

</p>
    

      

# Project Overview

The parser generator tool uses context-free grammar to generate parsing tables for string parsing, supporting LR(1) tables. Built with TypeScript and Next.js, it computes first and follow sets, generates canonical collections, and interacts with a Flask backend (https://clr-parser-flask.vercel.app). It supports multi-token strings, Unicode, and provides a client-side API for seamless frontend integration.

# Table of Content

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup Instructions](#setup-instructions)
  - [Running the Project](#running-the-project)
  - [Backend Server](#backend-server)
- [Contributing](#contributing)
  - [Contributing Guidelines](#contributing-guidelines)
- [Contributors](#contributors)
- [License](#license)


# Key Features
- **Context-Free Grammar Parsing**: The project provides types and interfaces for working with context-free grammar rules and parsing tables, enabling the construction of a parser generator or compiler.
- **Types and Interfaces Definition**: The code defines various types, such as `TFirstAndFollow`, `GrammarRule`, `GrammarStructure`, and `TableData`, to represent different aspects of parsing and grammar structures.
- **API Client Module**: The project includes an API client module that interacts with a backend service, providing methods for retrieving home page data, API messages, and initializing parsers.
- **Parser Initialization and Configuration**: The code allows for the initialization of parsers with grammar structures, including computation of first and follow sets, canonical collection generation, and parsing table generation.
- **String Parsing Result Retrieval**: The project enables the retrieval of parsing results for strings, which is crucial for building a parser generator or compiler.
- **Backend Service Integration**: The code integrates with a backend service hosted at `https://clr-parser-flask.vercel.app` (or a local development server on port 5000), facilitating data exchange and API interactions.

# Folder Structure
```sh
ParseGen_Frontend/ 
├── tsconfig.json
├── tailwind.config.ts
├── components.json
├── types/ 
│   └── index.ts
├── README.md
├── next.config.js
├── .gitignore
├── postcss.config.js
├── lib/ 
│   ├── utils.ts
│   └── grammarInputParse.tsx
├── utils/ 
│   └── api.ts
├── components/ 
│   ├── InputField.tsx
│   ├── ActionButton.tsx
│   ├── ui/ 
│   │   ├── hero-highlight.tsx
│   │   └── table.tsx
│   ├── ParsingTable.tsx
│   ├── CLRParsingTable.tsx
│   ├── FirstAndFollowTable.tsx
│   ├── GrammarRuleModal.tsx
│   ├── MoveUpFadeAnimation.tsx
│   ├── StateGraph.tsx
│   └── ParseStringTable.tsx
├── package-lock.json
├── package.json
├── public/ 
│   ├── next.svg
│   └── vercel.svg
└── app/ 
    ├── constant.ts
    ├── style.js
    ├── page.tsx
    ├── favicon.ico
    ├── layout.tsx
    └── globals.css

7 directories, 32 files
```

# Getting Started

## Prerequisites

Before installing the project, make sure you have the following software and tools installed:

* Node.js (LTS version) - [Download](https://nodejs.org/en/download/)
* yarn (package manager) - [Install with npm](https://yarnpkg.com/en/docs/install)
* Docker (for testing purposes) - [Download](https://www.docker.com/get-started)
* MongoDB (database) - [Download](https://www.mongodb.com/try/download/community)

## Setup Instructions

**Step 1: Clone the Repository**

Clone the ParseGen_FrontEnd repository from GitHub using the following command:
```bash
git clone https://github.com/Eemayas/ParseGen_FrontEnd.git
```
**Step 2: Install Dependencies**

Navigate to the project directory and install dependencies using yarn:
```bash
cd ParseGen_FrontEnd
yarn install
```
This will take a few minutes to complete.

**Step 3: Build and Start the Project**

Run the following command to build and start the project:
```bash
yarn dev
```
This will start the development server, which you can access at [http://localhost:3000](http://localhost:3000).

## Running the Project
To run the project in production mode, use the following command:
```bash
yarn build
yarn start
```
This will create a static HTML file and serve it using `next.js`.

## Backend Server

This frontend interacts with a Flask backend server for processing grammar inputs and generating CLR parsing tables.  
The backend is hosted at: [CLR Parser Backend](https://clr-parser-flask.vercel.app)

To run the backend locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Eemayas/ParseGen_Flask_Server.git
   cd ParseGen_Flask_Server
   ```

2. **Set up a virtual environment (optional but recommended):**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use: venv\Scripts\activate
   ```

3. **Install dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask server:**

   ```bash
   python app.py
   ```

   The backend will be available at `http://127.0.0.1:5000/`, and the frontend can be configured to communicate with this backend.



# Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/Eemayas/ParseGen_Frontend/pulls)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/Eemayas/ParseGen_Frontend/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/Eemayas/ParseGen_Frontend/issues)**: Submit bugs found or log feature requests for ParseGen_Frontend.

### Contributing Guidelines

1. **Fork the Repository**:
    - Start by forking the project repository to your GitHub account.
2. **Clone the Repository**:
    - Clone your forked repository to your local machine using the command:
    ```sh
    git clone https://github.com/your-username/ParseGen_Frontend.git
    ```
    - Replace ``your-username`` with your GitHub username.
3. **Create a New Branch**:
    - Create a new branch for your changes using the command:
    ```sh
    git checkout -b your-branch-name
    ```
4. **Make Your Changes**:
    - Edit, add, or delete files as needed. Ensure your changes align with the project's contribution guidelines.
5. **Commit Your Changes**:
    - Stage your changes and commit them with a descriptive message:
      ```bash
      git add .
      git commit -m "Your descriptive message"
      ```
6. **Push Your Changes:**
    - Push your branch to your forked repository:
      ```bash
      git push origin your-branch-name
      ```
7. **Create a Pull Request (PR):**
    - Go to the original repository on GitHub and click “Compare & pull request.” Provide a clear description of the changes and submit the PR.

Once your PR is reviewed and approved, it will be merged into the main branch.
    


# Contributors

| Avatar | Contributor | GitHub Profile | No of Contributions |
|:--------:|:--------------:|:----------------:|:-------------------:|
| <img src='https://avatars.githubusercontent.com/u/100434825?v=4' width='40' height='40' style='border-radius:50%;'/> | Eemayas | [@Eemayas](https://github.com/Eemayas) | 14 |

        


# License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

