/*
console.log("==========ARRAY==========")

const names=['A','B','C','D','E'];

console.log(names[1]);
console.log(names.length);

for(const el of names)
{
    console.log(el);
}

names.push('Julie');
console.log(names.length);

const julieIndex=names.findIndex(el=>el === 'Julie');
names.splice(2,1);
console.log(names);
*/

/*
console.log("==========SETS==========")

const ids=new Set();

ids.add('abc');
ids.add(1);
ids.add('bb2');
ids.add(1);

for(const el of ids)
{
    console.log(el);
}

console.log(ids.has('abc'));

//ids.delete('bb2');
console.log(ids);

*/
/*
console.log("==========OBJECTS==========");

const person={
    fname:'ABC',
    age:30,hobby:['Sports','Cooking'],
    age:32,
    greet()
    {console.log('Hi I am '+this.fname)}
            };

//person.LastName='DEF';
//console.log(LastName);

console.log(person);

delete person.age;

console.log(person);
person.greet();
*/


/*==========MAP==========*/
/*
const resultData=new Map();

resultData.set('average',1.50);
resultData.set('lastResult',null);

const germany={name:'Germany',population:82};

resultData.set(germany,0.50);

for(const el of resultData)
{
    console.log(el);
}

resultData.set('average',2.00);
console.log(resultData);

console.log(resultData.get('average'));
console.log(resultData.average);

resultData.delete(germany);
console.log(resultData) ;
*/

/*==========LINKED LIST==========*/

class LinkedList
{
    constructor()
    {
        this.head=null;
        this.tail=null;
    }

    append(value)
    {
        const newNode={value:value,next:null};
        if(this.tail)
        {
            this.tail.next=newNode;      
        }
        this.tail=newNode;
        if(!this.head)
        {
            this.head=newNode;
        }
    } 

    delete(value)
    {
        if(!this.head)
        {
            return;
        }

        while(this.head&&this.head.value===value)
        {
            this.head=this.head.next;
        }

        let curNode=this.head;

        while(curNode.next)
        {
              if(curNode.next.value===value)
              {
                curNode.next=curNode.next.next;
              }  
              else
              {
                curNode=curNode.next;
              }

        }

        if(this.tail.value===value)
        {
            this.tail=curNode;
        }
    }
    
    find(value)
    {
        if(!this.head)
        {
            return null;
        }
        let curNode=this.head;

        while(curNode)
        {
            if(curNode.value===value)
            {       
                return curNode;

            }
            curNode=curNode.next;
        }
        return null;
    }


    prepend(value)
    {
        const newNode={value:value,next:this.head};

        this.head=newNode;
        if(!this.tail)
        {
            this.tail=newNode;
        }
    }

    insertAfter(value,afterValue)
    {
        const exsitingNode=this.find(afterValue);

        if(exsitingNode)
        {
            const newNode={value:value,next:exsitingNode.next};
            exsitingNode.next=newNode;
        }
    }

    toArray()
    {
        const elements=[];

        let curNode=this.head;
        while(curNode)
        {
            elements.push(curNode);
            curNode=curNode.next;
        }
        return elements;
    }
}

const linkedList1=new LinkedList();

linkedList1.append(1);
linkedList1.append('Hi');
linkedList1.append('Sagar');
linkedList1.append('Sagar');
linkedList1.append(true);
linkedList1.append(32);

linkedList1.prepend('First element :');
linkedList1.prepend('First element :');

console.log(linkedList1.toArray());

linkedList1.delete('Sagar');
linkedList1.delete(32);
linkedList1.delete('First element :');

console.log(linkedList1.toArray());

console.log(linkedList1.find('Sagar'));
console.log(linkedList1.find(1));

linkedList1.insertAfter('new value - 1',1);
linkedList1.insertAfter('new value - 2','Hello There : ');         

console.log(linkedList1.toArray());
