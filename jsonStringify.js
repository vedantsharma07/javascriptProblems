const obj = {
 name: "John",
 age: 30,
 city: "New York",
 addr: ["chandpol", "avv"],
 myUndefined: undefined,
 myNull: null,
 circularRef: null,
 nested: {
     name: "Nested",
     valid: true,
 },
 fn: () => {}
};

function myStringify(value, seen) {
    if(value === null || value === undefined || typeof value === 'symbol') {
        return null;
    }
    if(typeof value === "string") {
        return `"${value}"`;
    }
    if(typeof value === "number" || typeof value === "boolean") {
        return `${value}`;
    }
    if(typeof value === "function") {
        return undefined;
    }
    
    if(Array.isArray(value)) {
        const arrString = value.map((item) => {
            return myStringify(item, seen) === undefined ? "null":myStringify(item, seen);  
        }).join(",");
        return `[${arrString}]`;
    }
    
    if(typeof value === 'object') {
        if(seen.has(value)) {
            throw new Error("Circluar Reference Detected!");
        }
        seen.set(value);
        const objString = Object.entries(value).filter(([key,val]) => typeof val !== 'function' && val !== undefined).map(([key,val]) => `"${key}":${myStringify(val, seen)}`).join(",");
        return `{${objString}}`
    }
}
const map = new WeakMap();
console.log(myStringify(obj, map));

console.log(JSON.stringify(obj));

