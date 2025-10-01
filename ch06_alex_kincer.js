// Alex Kincer

// Groups

/*
The standard JavaScript environment provides another data 
structure called Set. Like an instance of Map, a set holds a collection 
of values. Unlike Map, it does not associate other values with those—it 
just tracks which values are part of the set. A value can be part of a 
set only once—adding it again doesn’t have any effect.

Write a class called Group (since Set is already taken). 
Like Set, it has add, delete, and has methods. Its constructor 
creates an empty group, add adds a value to the group (but only 
if it isn’t already a member), delete removes its argument from 
the group (if it was a member), and has returns a Boolean value 
indicating whether its argument is a member of the group.

Use the === operator, or something equivalent such as indexOf, to 
determine whether two values are the same.

Give the class a static from method that takes an iterable 
object as its argument and creates a group that contains 
all the values produced by iterating over it.
*/

/* hints:
The easiest way to do this is to store an array of group 
members in an instance property. The includes or indexOf 
methods can be used to check whether a given value is in
the array.

Your class’s constructor can set the member collection to 
an empty array. When add is called, it must check whether 
the given value is in the array or add it otherwise, 
possibly using push.

Deleting an element from an array, in delete, is less 
straightforward, but you can use filter to create a new 
array without the value. Don’t forget to overwrite the 
property holding the members with the newly filtered 
version of the array.

The from method can use a for/of loop to get the values
out of the iterable object and call add to put them into 
a newly created group.
*/

class Group {
    members = [];
    constructor() {
        this.members = [];
    }
    add(x) {
        if (!this.members.includes(x)) {
            this.members.push(x)
        }
    }
    has(x) {
        return this.members.includes(x);
    }
    delete(x) {
        this.members = this.members.filter(v => v !== x);
    }
    static from(collection) {
        let group = new Group();
        for (let value of collection) {
            group.add(value);
        }
        return group;
    }
}

/*using the book examples*/
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

/*
I recieved the first half of this code from in class with Dr. White. I cannot remember the exact
date because I did not write it down for some reason, but it was last week. Adding onto the code
I was shown in class, I used "has" because the text explained that it could be used as a way to 
test whether a value is a member of the group, which was necessary for this problem. The "has" 
command returns true or false depending on whether the value is in the group or not. Without "has",
we wouldn't know if the number/x given was in there. I used "delete" because the question said the
code needed to be able to remove a value from the room, according to the text, "delete" does that
to prevent the group from continuing to grow and nothing ever being removed. Finally, I used "static"
because the question asked for a static method called "from." Static method is used to call on a
class itself rather than only a specific group. The want for "from" is so a new group can be easily
created from an array or iterable. All of these were necessary for this exercsise and seemed to have
worked well. The only bit of confusion I ran into was the use of static/from so, I had a ChatGPT 
conversation to understand it a little bit better. This conversation aided in making my code and
utilizing the ideas of the other things such as "has" and "delete". Here is this conversation:
https://chatgpt.com/share/68dc9140-5684-8002-9758-2c2d63f0b308
*/