function isString(data){
    if(typeof data === 'string' && data.length > 1)return true;
    return false;
};

function is_func(data){
    if(data){
        if(typeof data !== "function")return false;
        return true;
    };

    return false;
};

function is_bool(data){
    if(typeof data == "boolean"){
        if(data)return true;
        return false;
    };

    return false;
};

function is_obj(data){
    if(typeof data !== "object")return false;
    return true;
};

function findMax(data){
    if(!Array.isArray(data)){
        throw new Error('invalid input entry');
    };

    let value = 0;
    for(let item of data){
        if( typeof item === 'number' && item > value){
            value = item;
        }
    };

    return Number.parseInt(value);
};

function checkAndRun (item , call){
    if(Array.isArray(item)){
        let i = 0;
        for(let arr of item){
            let value = call('arr');
            if(is_func(value)){
                let val = value(arr , i);

                if(val && val === 'break'){
                    break;
                }else if(val && val === 'exit'){
                    return;
                };

                i++;
            }
        };
    }
    else if(isString(item)){
        let i = 0;
        for(let char of item){
            const value = call('str');

            if(is_func(value)){
                let val = value(char , i);

                if(val && val === 'break'){
                    break;
                }else if(val && val === 'exit'){
                    return;
                };
            };

            i++;
        }
    }
    else if(is_obj(item)){
        let i = 0;
        for(let key in item){
            const value = call('obj');
            if(is_func(value)){
                let val = value(item[key] , key , i);

                if(val && val === 'break'){
                    break;
                }else if(val && val === 'exit'){
                    return;
                };
            };

            i++;
        }
    }else{
        throw new Error('invalid input entry');
    }
};
module.exports = {is_func , checkAndRun};