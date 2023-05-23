# From Scratch - Node.js application

## CLI tools
* Node Version Manager (nvm)
* Node.js (node, npm, npx)

## Node.js packages
* Typescript (typescript, @types/node)
* TS Node (ts-node)
* Nodemon (nodemon)
* ESLint (eslint)
* Jest (jest, ts-jest, @types/jest)
* Dotenv (dotenv)

---
## Install Node Version Manager (nvm)
Read more about how to install nvm here: https://github.com/nvm-sh/nvm

This is an example of haow to install nvm on MacOS:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```
```
nvm --version
```
---
## Install Node.js (node, npm, npx)
```
nvm install --lts
nvm ls
nvm use 18
```
```
node --version
npm --version
```
---
## Configure new Node.js application
```
mkdir FSNodeApp
cd FSNodeAPP
npm init -y
```
This creates the file package.json. Edit this file to change name, version and description.

Read more aboute package.json here: https://docs.npmjs.com/cli/v9/configuring-npm/package-json

---
## Install Node.js packages
```
npm install typescript --save-dev
npm install @types/node --save-dev
npm install ts-node --save-dev
npm install nodemon --save-dev
npm install eslint --save-dev
npm install jest --save-dev
npm install ts-jest --save-dev
npm install @types/jest --save-dev
npm install dotenv
```
---
## Configure Typescript
```
npx tsc --init --rootDir src --outDir dist
```
This creates the file tsconfig.json. 

Read more about tsconfig.json here: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

---
## Configure ESLint
```
npm init @eslint/config
```
Answer the questions about your coding style. This creates the file .eslintrc.json. 

Read more about .eslintrc.json here: https://eslint.org/docs/latest/use/configure/

---
## Update package.json
```
...
"scripts": {
    "build": "tsc",
    "dev": "nodemon ./src/index.ts",
    "start": "ts-node ./src/index.ts",
    "lint": "eslint --ext .ts .",
    "test": "jest"
}
...
```
---
## Create app source code
```
mkdir src
touch src/index.ts:
```
Edit src/index.ts:
```
dotenv.config();

export function getHelloMessageFromEnv(): string {
    return process.env.HELLO_MESSAGE as string;
}

export function getHelloMessage(): string {
    return 'Hello World from function!';
}
console.log('Hello World!');
```
---
## Create app environment file
```
tounch .env
```
Edit .env:
```
HELLO_MESSAGE=Hello World from environment file!
```
---
## Create tests
```
mkdir src/tests
touch src/tests/first.test.ts
```
Edit src/tests/first.test.ts:
```
import { getHelloMessage, getHelloMessageFromEnv } from '..';

test('gets correct hello mesage from function', () => {
    expect(getHelloMessage()).toBe('Hello World from function!');
});

test('gets correct hello mesage from .env', () => {
    expect(getHelloMessageFromEnv()).toBe('Hello World from environment file!');
});
```
---
## Build, run, analyse and test
Build app:
```
npm run build
```
Run app once:
```
npm run start
```
Run app and continuously check for changes:
```
npm run dev
```
Run code analysis:
```
npm run lint
```
Run tests:
```
npm run lint
```


