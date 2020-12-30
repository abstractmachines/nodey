// https://nodejs.dev/learn/how-to-log-an-obect-in-nodejs
/**
 *
 * Problem: "After two levels of nesting, Node.js gives up and prints [Object] as a placeholder."
 * ^ now that sounds familiar!
 *
 * Problem: Logging an object to the browser w Node is a lot different than logging an object in NodeJS.
 * In NodeJS we want to avoid "outputting the object to the shell", so we get a string representation of the object.
 *
 * That only works for 2 levels of nesting.
 *
 *
 *
 */
const obj = {
    name: 'joe',
    age: 35,
    person1: {
        name: 'Tony',
        age: 50,
        person2: {
            name: 'Albert',
            age: 21,
            person3: {
                name: 'Peter',
                age: 23
            }
        }
    }
}
console.log('\nNotice how the regular console.log in NodeJS only nests 2 levels then prints Object out:\n',
    obj
)

/* that gives us:
{
    name: 'joe',
        age: 35,
    person1: {
    name: 'Tony',
        age: 50,
        person2: { name: 'Albert', age: 21, person3: [Object] }  --> ugh, there it is.
    }
}
*/

console.log('\nUsing JSON.stringify and specifying 2 spaces for indentation helps us do a pseudo-pretty-print:\n',
    JSON.stringify(obj, null, 2)
)

