---
title: TypeScript Generic Functions
description: 
published: 2021-11-15T00:21:00.000Z
status: live
---

If you create a function that needs to be flexible enough to be used for a variety data generic functions come in handy.

## Generic Function Example

Let's say you have a function that needs to combine two objects together, but you want the data to be flexible.

```js
function combine(a, b) {
    return {...a, ...b};
}
```

 Typescript won't like this, you need to assign types to the parameters.

 ```js
function combine(a: object, b: object) {
    return {...a, ...b};
}

const combinedObjects = combine({name: 'Dustin'}, {age: 30});
console.log(combinedObjects.age); // Typescript will error out age here
```

Why would it error on age? Because it doesn't know the type. So what do we want it to do? We want the type to be defined when the function is executed. That is where generic functions come in.

 ```js
function combine<T, U>(a: T, b: U) {
    return {...a, ...b};
}

const combinedObjects = combine({name: 'Dustin'}, {age: 30});
console.log(combinedObjects.age); // Typescript is happy!
```

All it's doing is telling Typescript that the types for each parameter are unique.

So we can now do this:

 ```js
function combine<T, U>(a: T, b: U) {
    return {...a, ...b};
}

const combinedObjects = combine({name: 'Dustin'}, {age: 30});
console.log(combinedObjects.age);

const combinedObjectsAnother = combine({name: 'Dustin'}, {age: 30, job: 'Software Engineer'});
console.log(combinedObjectsAnother.job);
```

Generic functions are a simple way to help Typescript understand you need flexibility in your function.
