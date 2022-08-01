# go-loop

This module makes a layer of abstraction on the top of javascript loops.

## Why use it
In this library there are two simple functions. One can handle 5 most common datatype without getting any troble or any error.<br><br>
And second function can handle 3 data type with multi agrs without getting any restrictions or trouble.

## How to use

import `go-loop`

```javascript
const {range , in_range} = require("go-loop");
```
***

How to use **`range`** function

Let's know about the agruments of the range function

## Two arguments are there
1. Data
2. Callback

## Data
_In the first agument you can put a single value which include anyone of these 5 types of datatypes_
1. Array
2. String
3. Object
4. Number
5. Boolean

**Warning** - This Function not properly works with "*Map*" but it will handle it with no output if you put that into it.In case you passed another datatype it will throw an error.


_In the second argument you have to pass a callback function_

### Here is the five examples given with using all five type of datatypes

## First Example
```javascript
// using with string
range("hello" , (value , index)=>{
    console.log(index , value);
});


/* output will be 
    0 h
    1 e
    2 l
    3 l
    4 o
*/

```

## Second Example
```javascript
// using with Array
let arr = ["Hello" , "World"];

range(arr , (value , index)=>{
    console.log(index , value);
});


/* output will be 
    0 Hello
    1 World
*/

```

## Third Example
```javascript
// using with Object
let obj = {Age : 1000 , lang : "node js"};

range(obj , (value , key , index)=>{
    console.log(index , key , value);
});


/* output will be 
    0 Age 1000
    1 lang node js
*/

```


## Fourth Example
```javascript
// using with number
// loop for 3 times
range(3 , (index)=>{
    console.log(index);
});


/* output will be 
    0
    1
    2
*/

```

## Fifth Example
```javascript
// using with boolean
// for infinite looping
range(true , (index , stop)=>{
    console.log(index);

    // stopping loop by conditioning
    if(index === 3){
        stop();
    };
});


/* output will be 
    0
    1
    2
    3
*/

```

### Example, In case you want to break the loop
```javascript
/* this condition doesn't apply in case you are using with boolean because there already a callback to stop the loop
*/

range(3 , (index)=>{
    // breaking the loop
    if(index == 2){
        return false;
    };
});


/* output will be 
    0
    1
    2
*/

```


***

How to use **`in_range`** function

## Two arguments are there
1. Callback
2. Args

_In the first argument you have to pass a callback function_

## Args
_In the second agument you can put 3 types of datatype and the arguments have not limit_
1. Array
2. String
3. Object

**Warning** - This Function not properly works with "*Map*" but it will handle it if you passed.In case you passed another datatype it will throw an error.

Here is the two example given with using all three type of datatypes

1. Simple
```javascript
in_range((datatype)=>{
    // to run this we need to return a callback function
    return (value , indexOrKey)=>{
        console.log(indexOrKey , value);
    };
    
}, "hello" , ['hello' , 'world'] , {hello : "world" , name : "Alex"} , "string" , ["s" , 't' ,'r'] /* infinite */);

/* output will be 
   0 h
    1 e
    2 l
    3 l
    4 o
    0 hello
    1 world
    hello world
    name Alex
    0 s
    1 t
    2 r
    3 i
    4 n
    5 g
    0 s
    1 t
    2 r
*/
```

2. Advance
```javascript
in_range((datatype)=>{
    // datatype would provide the values according to the args
    /* for example
    it could be "str" for string
                "obj" for objects
                "arr" for arrays
    */

    // for working with we need to return a callback functions it could be single if you are not working with it's datatype argument datatype condition

    // but here i am using with conditions

    switch(datatype){
        case 'str' : return (value , index)=>{
            console.log(index , value);
        };
        case 'obj' : return (value , key , index)=>{
            console.log(index , key , value);
        };
        case 'arr' : return (value , index)=>{
            console.log(index , value);
        };
    };
    
}, "hello" , ['hello' , 'world'] , {hello : "world" , name : "Alex"} , "string" , ["s" , 't' ,'r'] /* infinite */);

/* output will be 
    0 h
    1 e
    2 l
    3 l
    4 o
    0 hello
    1 world
    0 hello world
    1 name Alex
    0 s
    1 t
    2 r
    3 i
    4 n
    5 g
    0 s
    1 t
    2 r
*/
```

### For, In case you want to break the loop for single or multiple datatypes or at any single and multiple arguments example given below

Example for single or multiple datatypes - string

```javascript
in_range((datatype)=>{
    switch(datatype){
        case 'str' : return (value , index)=>{
            // to break a whole datatype loop
            return 'break';
            // just like this you can do it for all
        };
        case 'obj' : return (value , key , index)=>{
            console.log(index , key , value);
        };
        case 'arr' : return (value , index)=>{
            console.log(index , value);
        };
    };
    
}, "hello" , ['hello' , 'world'] , {hello : "world" , name : "Alex"} , "string" , ["s" , 't' ,'r'] /* infinite */);

/* output will be 
    0 hello
    1 world
    0 hello world
    1 name Alex
    0 s
    1 t
    2 r
*/
```

Example for single or multiple arguments - string and array

```javascript
in_range((datatype)=>{
    // i want to stop the first argument when value is equal to l.

    // for stop any argument just make a condition on it's value like i want to break it for second argument when it's value equals to hello and notice there the second argument is a type of array so i have to return the break in case 'arr'
    switch(datatype){
        case 'str' : return (value , index)=>{
            console.log(index , value);

            // stopping the loop
            if(value === 'l'){
                return 'break';
            }
        };
        case 'obj' : return (value , key , index)=>{
            console.log(index , key , value);
        };
        case 'arr' : return (value , index)=>{
            console.log(index , value);
            if(index === 0){
                return 'break'
            };
        };
    };
    
}, "hello" , ['hello' , 'world'] , {hello : "world" , name : "Alex"} , "string" , ["s" , 't' ,'r'] /* infinite */);

/* output will be 
    0 h
    1 e
    2 l
    0 hello
    0 hello world
    1 name Alex
    0 s
    1 t
    2 r
    3 i
    4 n
    5 g
    0 s
*/
```