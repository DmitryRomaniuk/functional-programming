const R = require('ramda');

let fetchFromServer = function () {
    return new Promise(function (resolve) {
        resolve({
            user: 'jack',
            posts: [
                {
                    title: 'why curry?'
                },
                {
                    title: 'functional programming'
                }
            ]
        })
    })
};

const get = R.curry((id, object) => object[id]);

const map = R.curry((fn, object) => {
  return object.map(fn)
});


fetchFromServer()
    .then(get('posts'))
    .then(map(get('title')))
    .then(function (titles) {
        console.log('titles', titles)
    });

const add = (first, second) => first + second;

const addCurry = R.curry(add);

console.log(addCurry("")(""));

let objects = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    }
];

console.log(objects.map(elem => elem.id));

const getId = R.curry((id, object) => {
    return object[id]
});

console.log(objects.map(getId('id')));

const getIdWithoutCurry = (id) => (object) =>{
    return object[id]
};

console.log(objects.map(getIdWithoutCurry('id')));
