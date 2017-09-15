let counterModule = (function () {
     let count = 0,
        instance;

        let getCounter = function () {
            return count;
        };

        let increaseCounter = function () {
            count++;
            return `now count ${count}`;
        };

        let createCounterInstance = function () {
            return {
                getCounter: getCounter,
                increaseCounter: increaseCounter,
            }
        };

        return {
            getConterInstance: function () {
                return instance || (instance = createCounterInstance())
            }
        }

    }
)();


let stringSaver = (function () {
    let str = '',
        instance;

    let getStr = () => str;

    let setStr = newStr => str = newStr;

    let getStrInstance = () => { return instance || (instance = createInstance())};

    let createInstance = () => { return {getStr: getStr, setStr: setStr} };

    return {
        getStrInstance: getStrInstance
    }
})();





























