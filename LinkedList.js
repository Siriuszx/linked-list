import Node from "./Node.js";

class LinkedList {
    #listHead = null;

    constructor() {

    }

    append(value) {
        if (this.#listHead == null) this.#listHead = new Node(value);
        else {
            let temp = this.#listHead;

            while (temp.next != null) temp = temp.next;

            temp.next = new Node(value);
        }
    }

    prepend(value) {
        if (this.#listHead == null) this.#listHead = new Node(value);
        else {
            this.#listHead = new Node(value, this.#listHead);
        }
    }

    getValues(accu = [], next = this.#listHead) {
        if (next == null) return accu;

        accu.push(next.data);

        return this.getValues(accu, next.next);
    }

    pop() {
        let temp = this.#listHead;
        let poppedElement = null;

        while (temp.next.next != null) temp = temp.next;

        poppedElement = temp.next;
        temp.next = null;

        return poppedElement;
    }

    atIndex(index) {
        let temp = this.#listHead;
        let nodeCounter = 0;

        while (temp.next != null && nodeCounter != index) {
            temp = temp.next;
            nodeCounter++;
        }

        if (nodeCounter != index)
            return null;
        else
            return temp;
    }

    contains(value) {
        let temp = this.#listHead;

        while (temp.next != null) {
            if (temp.data == value) return true;
            temp = temp.next;
        }

        return (temp.data == value) || false;
    }

    find(value) {
        let temp = this.#listHead;
        let nodeCounter = 0;

        while (temp != null) {
            if (temp.data == value) return nodeCounter;
            temp = temp.next;
            nodeCounter++;
        }

        return null;
    }

    insertAt(value, index) {
        let temp = this.#listHead
        let nextTemp = temp.next;
        let nodeCounter = 0;

        if (index == 0) {
            this.#listHead = new Node(value, temp);
            return;
        }

        while (temp.next != null && nodeCounter != index - 1) {
            temp = temp.next
            nodeCounter++;
        }

        nextTemp = temp.next;
        temp.next = new Node(value, nextTemp);
    }

    removeAt(index) {
        let temp = this.#listHead;
        let tempNext = temp.next;
        let nodeCounter = 0;

        if (index == 0) {
            this.#listHead = this.#listHead.next;
            return;
        }

        while (temp.next != null && nodeCounter != index - 1) {
            temp = temp.next
            nodeCounter++;
        }

        temp.next = temp.next.next;
    }

    toString() {
        let temp = this.#listHead;
        let stringTemp = "";

        while (temp != null) {
            stringTemp += `( ${temp.data} ) -> `;
            temp = temp.next;
        }

        stringTemp += `null`;

        return stringTemp;
    }

    get head() {
        return this.#listHead;
    }

    get tail() {
        let temp = this.#listHead;

        while (temp.next != null) temp = temp.next;

        return temp;
    }

    get size() {
        let counter = 0;
        let temp = this.#listHead;

        while (temp != null) {
            temp = temp.next;
            counter++;
        }

        return counter;
    }
}

export default LinkedList;