function foo() {
    throw new Error("Goodbye, cruel world!");
}

try {
    foo();
} catch (e) {
        console.log("We had a problem, but we're fine now.", e);
}

console.log("great success()");
