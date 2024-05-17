// 10-->8-->3-->null

class Node {
    constructor(value) {
            this.value = value;
            this.next = null;
    }
}

class LinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        // console.log(this)
        console.log(this.head)
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        // console.log(this)
        return this;
    }

    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode != null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
            console.log(currentNode)
        }
        console.log('array', array)
        return array;
    }

    insert(index, value){

    }

    
}

const list = new LinkedList(10)
list.append(8);
list.append(3);
list.prepend(12);
list.printList()
console.log(list)