class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // adding data 
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // display 
    display() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

    get(index) {
        let current = this.head;
        let count = 0;

        while (current !== null) {
            if (count === index) {
                return current.value;
            }
            count++;
            current = current.next;
        }
        return null;
    }

    // Method to clear all nodes from the list
    clearList() {
        this.head = this.tail = null; // Clear both head and tail
    }

    // Method to clear the data from the list
    clearAllData() {
        this.clearList(); // This also clears all data, same as clearList
    }

    removeAt(index) {
        if (index < 0) {
            return null; // Index is invalid
        }

        // If removing the head (index 0)
        if (index === 0) {
            this.head = this.head.next; // Move head to the next node
            if (this.head === null) {
                this.tail = null; // If the list becomes empty, reset tail to null
            }
            return; // Done with removal
        } else {
            let current = this.head;
            let count = 0;

            // Traverse the list to find the node just before the one to be removed
            while (current !== null) {
                if (count === index - 1) {
                    // Remove the node at the given index
                    current.next = current.next.next;

                    // If the node removed was the last node, update tail
                    if (current.next === null) {
                        this.tail = current; // Set the current node as the tail
                    }
                    return; // Done with removal
                }
                count++; // Increment count to move to the next node
                current = current.next; // Move to the next node
            }
        }
    }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);

console.log("Original List:");
list.display(); // Expected Output: 10, 20, 30, 40, 50

// Get the element at index 2
console.log("Element at index 2:", list.get(2)); // Expected Output: 30

// Remove the element at index 3 (removes 40)
list.removeAt(0);

console.log("After Removal at index 3:");
list.display(); // Expected Output: 10, 20, 30, 50
