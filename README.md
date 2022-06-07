# Table of Contents

- [Table of Contents](#table-of-contents)
- [Requirements](#requirements)
- [Onboarding](#onboarding)
  - [Clone this repo](#clone-this-repo)
  - [Create the config file](#create-the-config-file)
  - [Install node dependencies](#install-node-dependencies)
- [Launch the Application for development](#launch-the-application-for-development)
- [Testing the backend](#testing-the-backend)

# Requirements
- [Node 16+](https://nodejs.org/en/)
- npm 8+, comes with [Node](https://nodejs.org/en/) installation
- Nice to have: Docker 20+, Docker Compose 2+
  - For macOS and Windows: go Install [Docker Desktop](https://www.docker.com/products/docker-desktop "docker desktop"). This contains both Docker and Docker Compose
  - For Linux Master Race:
    - Install [Docker Engine](https://docs.docker.com/engine/install/#server "docker engine")
    - [Linux post-installation steps](https://docs.docker.com/engine/install/linux-postinstall/ "Linux post-installation steps")
    - Install [Docker Compose](https://docs.docker.com/compose/install/ "docker compose")

# Onboarding
Follow belows to install and launch the application in the localhost 
## Clone this repo
```shell
git clone git@github.com:NNCT2904/MoneyLink.git
```
## Create the config file
Download the zip file from `https://deakin365-my.sharepoint.com/:u:/g/personal/ncng_deakin_edu_au/EUZhXyhNBVNAmVReD-dW-swBDCVBxpTCuAyZvhJPoWHMZQ?e=uOPUFJ`
Then copy the `.env` file from backend folder in zip file to the backend folder in the project.
And copy the `.env` file from frontend folder in zip file to the frontend folder in the project.
## Install node dependencies
This project involves a frontend and a backend running separately. 
As a result, we need to install the dependencies for the two sub-projects.

```shell
# Inside backend folder:
# If you have nvm and multiple Node versions
nvm use #

# Then install dependencies
yarn install 

# Inside the frontend folder:
npm install
```
# Launch the Application for development
After installing dependencies, launch the application locally with:
```shell
# In the backend folder
yarn start

# In the frontend folder
npm run serve
```

Or launch the application with docker compose by navigate to the root folder
```shell
# Launch the whole application
docker-compose up

# Launch the backend only
docker-compose up moneylink-backend

# Launch the frontend only
docker-compose up moneylink-frontend
```

The application backend will be launched in [localhost:3001](http://localhost:3001/ "[docker compose](http://localhost:3001/)"). 
The frontend will be hosted in [localhost:8080](http://localhost:8080/ "[docker compose](http://localhost:8080/)").

Saving any changes will trigger `nodemon` to hot reload the backend, or `vue cli` to hot reload the frontend, no need to stop.
# Testing the backend
First [launch the application](#launch-application-for-development). Then run the test command
```shell
# In the backend folder
yarn test
```
This command will search for any `test.js` file in the `src` folder and pass to `mocha` for testing.
