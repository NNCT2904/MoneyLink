# Getting Started

- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Onboarding](#onboarding)
    - [Clone this repo](#clone-this-repo)
    - [Create the config file](#create-the-config-file)
    - [Install node dependencies](#install-node-dependencies)
    - [Launch Application for development](#launch-application-for-development)
  - [Testing the backend](#testing-the-backend)
  - [Available Scripts](#available-scripts)
    - [`yarn start`](#yarn-start)
    - [`yarn test`](#yarn-test)
    - [`yarn build`](#yarn-build)
    - [`yarn eject`](#yarn-eject)
  - [Learn More](#learn-more)

## Requirements
- [Node 16+](https://nodejs.org/en/)
- npm 8+, comes with [Node](https://nodejs.org/en/) installation
- Nice to have: Docker 20+, Docker Compose 2+
  - For macOS and Windows: go Install [Docker Desktop](https://www.docker.com/products/docker-desktop "docker desktop"). This contains both Docker and Docker Compose
  - For Linux Master Race:
    - Install [Docker Engine](https://docs.docker.com/engine/install/#server "docker engine")
    - [Linux post-installation steps](https://docs.docker.com/engine/install/linux-postinstall/ "Linux post-installation steps")
    - Install [Docker Compose](https://docs.docker.com/compose/install/ "docker compose")

## Onboarding
Follow belows to install and launch the application in the localhost 
### Clone this repo
```shell
git clone git@github.com:NNCT2904/MoneyLink.git
```
### Create the config file
After cloning the repository, create an `.env` config file and filling the values:
- `MONGODB_URI`: the connection string to MongoDB

For example:
```shell
MONGODB_URI=YourConnectionStringHere
```
### Install node dependencies
```shell
# Navigate to backend folder
cd MoneyLink/backend/

# If you have nvm and multiple Node versions
nvm use #

# Then install dependencies
yarn install 
```
### Launch Application for development
After installing dependencies, launch the application locally with:
```shell
# In the backend folder
yarn start
```
Or launch the application with docker compose
```shell
# In the Root folder
docker-compose up moneylink-backend
```

The Application will be launched in [localhost:3001](http://localhost:3001/ "[docker compose](http://localhost:3001/)"). Saving any changes will trigger `nodemon` to hot reload the application, no need to stop.
## Testing the backend
First [launch the application](#launch-application-for-development). Then run the test command
```shell
# In the backend folder
yarn test
```
This command will search for any `test.js` file in the `src` folder and pass to `mocha` for testing.
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
