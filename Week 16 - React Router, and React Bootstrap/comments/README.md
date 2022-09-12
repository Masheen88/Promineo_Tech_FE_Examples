# Looking for tips on React 18 or Perhaps React 17?

Here are two options:

- React 18 (I recommend this one):
  https://www.techiediaries.com/react/upgrade-react-router-6/

- React 17: You have to specifically download a version. Here are some steps I took to accomplish this, this version uses Switch

  1. Run these commands after npx create-react-app your-app and be sure you are cd'ed into the directory.
     npm i react@17.0.2 react-dom@17.0.2 react-router-dom

  2. Use this as a base in your index.js
     ReactDom.render(<h1>Your App</h1>, document.getElementById('root'))
