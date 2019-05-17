//LRU Implimentation

function LRU(size){
    this.size = size;
    this.memoryObject = {};
    this.priorityList = []
    this.insertNode=function(item,inc){
        debugger;
        if(Object.keys(this.memoryObject).length<this.size && !this.memoryObject[item]){
            if(!inc){
                inc=0;
            }
            this.memoryObject[item]=this.priorityList.length+inc;
            this.priorityList.push(item)
        }else if(Object.keys(this.memoryObject).length===this.size && !this.memoryObject[item]){
            let itemToRemove = this.priorityList.shift();
            delete this.memoryObject[itemToRemove];
            this.insertNode(item,1);
        }else if(Object.keys(this.memoryObject).length === this.size && this.memoryObject[item]){
            let itemToRemove = this.priorityList.splice(this.memoryObject[item]-1, 1);
            this.memoryObject[item]=this.priorityList.length;
            this.priorityList.push(itemToRemove[0]);
        }
        
    }
    this.printMemory = function(){
        console.log(">>>>>>>>>>>>", this.memoryObject,this.priorityList);
    }
}

var lruTest = new LRU(3);
lruTest.insertNode(1)
lruTest.insertNode(2)
lruTest.insertNode(3)
lruTest.insertNode(4)
lruTest.insertNode(3)
lruTest.insertNode(2)
lruTest.insertNode(3)
lruTest.printMemory();

//output:>>>>>>>>>>>> { '2': 2, '3': 2, '4': 3 } [ 4, 2, 3 ]
