import { getHelloMessage, getHelloMessageFromEnv } from '..';

test('gets correct hello mesage from function', () => {
    expect(getHelloMessage()).toBe('Hello World from function!');
});

test('gets correct hello mesage from .env', () => {
    expect(getHelloMessageFromEnv()).toBe('Hello World from environment file!');
});
