# Sign Language translator

# Disclaimer/Postmortem

We did manage to get the app to a point where it:

- could login
- translate signs
- save translations to the API
- save session
- context API
- display latest translations (without limit of 10/ also needing to manually update)
- logout (clearing session)

what we didn't get to finish:

- display only 10 of the most recent translations
- propper css
- home/profile button navigation
- delete translations

what went wrong:

- We didn't save smaller features in our git (this is the main reason for us submitting such a poor assignment)
- not following the instructions/examples given by the course material

lessons learned:

- Making sure to follow the design-patterns that already existed
- Creating feauture branches (pushing smaller commits)
- following the already established

in the future we will make sure to learn from our mistakes and try our best to follow best practices.

# Title

Sign language interpreter.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Connect project to Git.

## .env cofiguration

This must be done in the root of your project directory

The same place you find the package.json file

Create a .env in the root of your project.

In .gitignore file under #misc write .env

## Follow the steps to deploy your react app to Heroku.

Install heroku cli and create an heroku account.

This must be done in the root of your project directory(

heroku login
heroku create --buildpack mars/create-react-app
git add .
git commit -m "DEPLOY: Heroku buildpack"
git push heroku master # Could also be main depending on your setup.

)

Create an API from https://github.com/dewald-els/noroff-assignment-api change it's name. Open the api, navigate to setting.
Open upp Reveal Config Vars.
Create variables API_KEY and NODE_ENV.
Set API_KEY, you can find a random api key generator onlie.
Set NODE_ENV to production.

in .env set the values API_KEY and NODE_ENV.

## Install

npm install

## Usage

Appliction for translating modern english with 26 letters to signlanguage.

This will open a new Webpage in your browser at localhost:xxxx. Remember to use your React and Redux browser extentions.

## Contributers

PH (@moshixd)
SA (@salahabdinor)
NP (@nicolaspalaciosdiaz)

## Contributing

No one allowed.

### API

- https://sign-language-translation-asl.herokuapp.com/translations

### FIGMA & DrawIO

- https://www.figma.com/file/TtKCkc4T9vskDgmDZAzscs/Untitled?node-id=0%3A1

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
