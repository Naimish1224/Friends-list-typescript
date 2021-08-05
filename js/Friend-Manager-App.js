"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Friend_1 = require("./Friend");
var friend1 = new Friend_1.Friend("Dave Grohl", "dave@ff.com", 52, false);
var friend2 = new Friend_1.Friend("Nick Patel", "nick@ff.com", 32, true);
var friend3 = new Friend_1.Friend("Mike Patel", "mm@ff.com", 34, true);
var friends = [friend1, friend2, friend3];
console.log("List of friends");
console.log("Name", "Email", "Age", "BFF?");
friends.forEach(function (f) {
    console.log(f.name, f.email, f.age, f.bff);
});
