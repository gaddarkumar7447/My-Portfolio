# My Portfolio

This is my personal portfolio website built with React.js. It showcases my projects, skills, and resume.

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/gaddarkumar7447/My-Portfolio.git
    cd My-Portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## 🛠️ Local Development

To run the application locally:

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

## 📦 Deployment

This project is deployed to GitHub Pages.

### Branch Structure
- **`updated_code`**: This is the main source code branch. All development happens here.
- **`deploy_changes`**: This branch contains the built artifacts served by GitHub Pages.

### How to Deploy

1.  Make sure you are on the `updated_code` branch and have committed your changes.
    ```bash
    git checkout updated_code
    git add .
    git commit -m "Your commit message"
    ```

2.  Run the deploy script:
    ```bash
    npm run deploy
    ```

This script will automatically:
- Build the project.
- Push the build artifacts to the `deploy_changes` branch.
- Publish the changes to `https://gaddarkumar7447.github.io/My-Portfolio`.

## 📂 Project Structure

```
src/
├── Assets/         # Images and icons
├── components/     # React components (Navbar, Home, About, etc.)
├── App.js          # Main application component with routing
├── index.js        # Entry point
└── style.css       # Global styles
```
