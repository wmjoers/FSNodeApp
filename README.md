# From Scratch - Node.js application

## CLI tools
* Node Version Manager (nvm)
* Node.js (node, npm, npx)

## Node.js libraries
* Typescript (typescript, @types/node)
* TS Node (ts-node)
* Nodemon (nodemon)
* ESLint (eslint)
* Jest (jest, ts-jest)
* Dotenv (dotenv, @types/dotenv)

## Node Version Manager (nvm)
https://github.com/nvm-sh/nvm

Check current version and installation documentation.
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```
You may have to restart the terminal for nvm command to be available. You can check installed version by typing:
```
nvm --version
```
## Install Node.js LTS version using nvm:
```
nvm install --lts
```
Check installed Node.js versions:
```
nvm ls
```
Switch current version to a specifik installed version (v 18.x.x in the example):
```
nvm use 18
```
Check which Node.js version is currently beeing used:
```
node --version
```
---
## Create new Node.js application
```
npm init -y
```
This will create the package.json file. Edit this file to update name, version and description.
### Install typescript
```
npm install typescript --save-dev
```
### Install default node types
```
npm install @types/node --save-dev
```
### Initiate typsecript
```
npx tsc --init --rootDir src --outDir dist
```
This will creat the tsconfig.json file sith some initial settings. You can change this at anytime.
### Create first program
```
mkdir src
touch src/index.ts
```
Edit index.ts and add a simple program:
```
export function getHelloMessage(): string {
    return 'Hello World';
}
console.log(getHelloMessage());
```
Update pacakge.json with the build script:
```
"scripts": {
    "build": "tsc"
},
```
Compile and run program:
```
npx tsc
node build/index.js
```
### Install usefull development tools - ts-node & nodemon
```
npm install ts-node --save-dev
npm install nodemon --save-dev
```
The tool ts-node lets you run a typescript file directly with on the fly compilation. Nodemon also runs your program but continuously checks for changes and restarts the app i needed.
### Update package.json
```
"scripts": {
    "build": "tsc",
    "dev": "nodemon ./src/index.ts",
    "start": "ts-node ./src/index.ts"
},
```
Test the tools with:
```
npm run start
npm run dev
```
### Install code analysis tool - ESLint 
```
npm install eslint --save-dev
```
Configure ESLint by answering some questions (creates the file .eslintrc.json):
```
npm init @eslint/config
```
Add lint to package.json (only check .ts-files and start from the current folder):
```
 "scripts": {
    ...
    "lint": "eslint --ext .ts ."
  },
```
### Install test framework - Jest
```
npm install jest --save-dev
npm install ts-jest --save-dev
npm install @types/jest --save-dev
```
Add test to package.json:
```
 "scripts": {
    ...
    "test": "jest"
  },
```
Create the file jest.config.js, then add the folowing to configure jest to work with typescript:
```
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [ '*/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)' ]
};
```
Create the file ./src/tests/first.test.ts and add first test:
```
import { getHelloMessage } from '..';

test('gets correct hello mesage', () => {
    expect(getHelloMessage()).toBe('Hello World');
});
```
