import dotenv from 'dotenv';

dotenv.config();

export function getHelloMessageFromEnv(): string {
    return process.env.HELLO_MESSAGE as string;
}

export function getHelloMessage(): string {
    return 'Hello World from function!';
}

console.log('Hello World!');
console.log(getHelloMessageFromEnv());
