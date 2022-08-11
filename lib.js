const {is_func , checkAndRun} = require('./lib/modules');

// runs with single arg handle one data type and one arg at a time
const range = (data , call)=>{
    // if callback not a function or not provided
    if(!is_func(call)){
        throw new Error("callback must be required");
    };

    if(Array.isArray(data)){
        for(let val in data){
            const value = call(data[val] , val);
            if(typeof value === 'boolean' && value === false) {
                break;
            }
        }

        return;
    }else if(typeof data === "string"){
        for(let i = 0; i < data.length; i++){
            const value = call(data[i] , i);
            if(typeof value === 'boolean' && value === false) {
                break;
            };
        }
        return;
    }
    else if(typeof data === 'object'){
        let i = 0;
        for(let key in data){
            const value = call(data[key] , key , i);

            if(typeof value === 'boolean' && value === false) {
                break;
            };
            i++;
        };

        return;

    }else if(data && typeof data === 'number'){
        const count  = Number.parseInt(data);
        
        let i = 0;

        while(i < count){
            call(i);
            i++;
        };
    }else if(typeof data === 'boolean'){
        let isTrue = data;
        let index = 0;
        let setOff = ()=>{
            isTrue = false;
        };

        while(isTrue){
            call(index , setOff);
            index++;
        };
    }else{
        throw new Error("inserted data type not supported yet");
    }
};

// runs with multiple agrs and can handle all possible datatypes
const in_range = (call , ...args)=>{
    if(!is_func(call)){
        throw new Error("callback function not found");
    };
    for(let item of args){
        checkAndRun(item , call);
    };
};

module.exports = {range , in_range};