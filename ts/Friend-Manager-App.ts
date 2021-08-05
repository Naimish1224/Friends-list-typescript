import { Friend } from './Friend';

let friend1: Friend = new Friend ("Dave Grohl", "dave@ff.com",52, false);
let friend2: Friend = new Friend ("Nick Patel", "nick@ff.com",32, true);
let friend3: Friend = new Friend ("Mike Patel", "mm@ff.com",34, true);

let friends:Friend[] = [friend1, friend2, friend3];

console.log("List of friends");
console.log("Name", "Email", "Age", "BFF?");

friends.forEach(f => {
    console.log(f.name, f.email, f.age, f.bff);
});
