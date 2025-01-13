// Node class that has data and next pointer
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Linked_List {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Method to add data to the linked list
    ADD_DATA(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Method to display the linked list
    DISPLAY() {
        let current = this.head;
        let data = [];
        while (current !== null) {
            // Push each node's data and next (null if no next node)
            data.push({ data: current.data, next: current.next ? current.next.data : null });
            current = current.next;
        }
        console.log(data);
        return data;
    }

    // Method to get node by index
    GETBYID(INDEX) {
        let current = this.head;
        let count = 0;
        while (current !== null) {
            if (count === INDEX) {
                return current; // Return the node at INDEX
            }
            count++;
            current = current.next;
        }
        return "kuch nahi mila gaytonde"; // If no node found at the given index
    }

    // Method to remove node by index
    REMOVEBYINDEX(INDEX) {
        let current = this.head;
        let count = 0;

        // If the index is 0, we need to remove the head node
        if (INDEX === 0) {
            this.head = this.head.next;
            // If there's only one node left, we need to update tail as well
            if (this.head === null) {
                this.tail = null;
            }
        } else {
            // Traverse the list to find the node before the one to remove
            while (current !== null) {
                if (count === INDEX - 1) {
                    current.next =  current.next.next;
                    // If the node is the last one, update the tail
                    if (current.next === null) {
                        this.tail = current;
                    }
                    break;
                }
                count++;
                current = current.next;
            }
        }
    }

}

// Test the Linked List
const list = new Linked_List();
list.ADD_DATA(10);
list.ADD_DATA(20);
list.ADD_DATA(30);
list.ADD_DATA(40);

console.log("Display Linked List:");
list.DISPLAY();

console.log("Get by ID (Index 2):");
console.log(list.GETBYID(2));  // Should return node with data 30

console.log("Remove by Index (Index 1):");
list.REMOVEBYINDEX(1);  // Remove node with data 20
list.DISPLAY();  // Should print nodes without the node having data 20
