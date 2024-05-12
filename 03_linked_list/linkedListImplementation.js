// 10-->8-->3-->null


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
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        // console.log(this)
        return this;
    }

    prepend(value){
        const newNode = {
            value: value,
            next: null
        }
        
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        console.log(this)
        return this;
    }
}

const list = new LinkedList(10)
list.append(8);
list.append(3);
list.prepend(12);
// console.log(list)