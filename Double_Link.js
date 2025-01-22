// Node class that has data and next pointer
class Node {
    constructor(data) {
        this.pre = null;
        this.data = data;
        this.next = null;
    }
}

class Double_Linked_List {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.pre = this.tail;
            this.tail = newNode;
        }
    }

    display() {
        let current = this.head;
        let output = "";
        while (current) {
            output += current.data + " ";
            current = current.next;
        }
        console.log(output.trim());
    }

    getbyid(index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count === index) {
                return current.data;
            }
            count++;
            current = current.next;
        }
        return "Index out of range";
    }

    deletebyindex(index) {
        if (index < 0) return; // Invalid index
        
        let current = this.head;
        let count = 0;

        // Case when deleting the head node
        if (index === 0) {
            this.head = this.head.next;
            if (this.head) {
                this.head.pre = null;
            }
            if (this.head === null) {
                this.tail = null; // If list is empty after deletion
            }
            return;
        }

        while (current) {
            if (count === index - 1 && current.next) {
                let nodeToDelete = current.next;
                current.next = nodeToDelete.next;
                if (nodeToDelete.next) {
                    nodeToDelete.next.pre = current;
                }
                if (nodeToDelete.next == null) {
                    this.tail = current; // Update tail if the last node was deleted
                }
                return;
            }
            count++;
            current = current.next;
        }
    }
}

// Testing the Doubly Linked List implementation
const list = new Double_Linked_List();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);

console.log("List after appending values:");
list.display();  // Expected output: 10 20 30 40 50

console.log("Get element by index 2:");
console.log(list.getbyid(2));  // Expected output: 30

console.log("Get element by index 5 (out of range):");
console.log(list.getbyid(5));  // Expected output: Index out of range

list.deletebyindex(2);  // Delete node at index 2 (value 30)
console.log("List after deleting index 2:");
list.display();  // Expected output: 10 20 40 50

list.deletebyindex(0);  // Delete the head node (value 10)
console.log("List after deleting head node:");
list.display();  // Expected output: 20 40 50

list.deletebyindex(2);  // Delete last node (value 50)
console.log("List after deleting last node:");
list.display();  // Expected output: 20 40
