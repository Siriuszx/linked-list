import LinkedList from "./LinkedList.js";

const linkedList = new LinkedList();

linkedList.prepend("Sasha");
linkedList.append("Sam");
linkedList.append("Joe");
linkedList.append("Alex");
linkedList.append("Bob");
linkedList.append("Kate");


console.log("Head: " + linkedList.head.data);
console.log("Size: " + linkedList.size);
console.log("List values: " + linkedList.getValues());
console.log("Tail: " + linkedList.tail.data);
console.log(linkedList.pop());
console.log("New Tail: " + linkedList.tail.data);
console.log("Item at index 2: " + linkedList.atIndex(2).data);
console.log("Contains 'Alex': " + linkedList.contains("Alex"));
console.log(linkedList.getValues());
console.log("Index of Bob: " + linkedList.find("Bob"));
console.log("LinkedList to String: " + linkedList.toString());