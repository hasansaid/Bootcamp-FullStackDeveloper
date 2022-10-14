const root = document.getElementById ('root');

var app = {
  title: 'ToDo App',
  description: 'Lorem, ipsum.',
  items: ['Lorem.', 'Lorem, ipsum.', 'Lorem, ipsum dolor.'],
  //items: [];
};

function onFormSubmit (event) {
  event.preventDefault ();
  /* document.getElementById("txtItem").value; 
       console.log(event);
     */
  var item = event.target.elements.txtItem.value;
  if (item != '') {
    app.items.push (item);
    event.target.elements.txtItem.value = '';
    render ();
  } else {
    alert ('item boş olamaz');
  }
}

function render () {
  var template = (
    <div>
      <div>{app.title}</div>
      <div>{app.description}</div>
      <ul>
        {app.items.map ((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <p>
        <button
          onClick={() => {
            app.items = [];

            /* app.items.length = 0 
                           app.items.splice(0, app.items.length)
                        */

            render ();
          }}
        >
          Clear Items
        </button>
      </p>
      <p>{app.items.length}</p>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="txtItem" id="txtItem" />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
  ReactDOM.render (template, root);
}

render ();

/* ES6 Const & Let */
var nameVar = 'Kamil KAPLAN';
var nameVar = 'Melih KAPLAN';
console.log (nameVar);

let nameLet = 'Kamil KAPLAN';
//let nameLet = "Melih KAPLAN";
console.log (nameLet);

const nameConst = 'Kamil KAPLAN';
//nameConst = "Kamil";
console.log (nameConst);

let age = 29;

function getAge () {
  let name = 'Kamil';
  let age = 29;
  console.log ('fuction scope : ', name, age);
}
getAge ();

/* ES6 Arrow Functions */

//ES5
function merhabaES5 () {
  console.log ('merhabaES5');
}

var helloES5 = function () {
  console.log ('helloES5');
};

var multiES5 = function (x, y) {
  return x + y;
};

/* id, name, surname */
var getUser = function (id, name, surname) {
  return {
    id,
    name,
    surname,
  };
};

// ES6
let helloES6 = () => {
  console.log ('helloES6');
};

let merhabaES6 = () => console.log ('merhabaES6');
let multiES6 = (x, y) => x + y;
let multiCarpmaES6 = (x, y) => {
  return x * y;
};
let getUserES6 = (name, surname) => ({
  name: name,
  surname: surname,
});

helloES5 ();
merhabaES5 ();
console.log (multiES5 (5, 7));
var userObj = getUser (1, 'Said', 'Sertkaya');
console.log (`${userObj.id} : ${userObj.name} ${userObj.surname}`);

helloES6 ();
merhabaES6 ();
console.log (multiES6 (5, 7));
console.log (multiCarpmaES6 (5, 7));
var userObj2 = getUserES6 ('Said', 'Sertkaya');
console.log (userObj2);

const phones = [
  {name: 'General Mobile', price: 3000},
  {name: 'Iphone 14', price: 25000},
  {name: 'Redmi Note 8', price: 8000},
  {name: 'Iphone X', price: 5000},
];

let priceES6 = phones.map (phone => phone.price);
console.log (priceES6);

let priceES5 = phones.map (function (phone) {
  return phone.price;
});
console.log (priceES5);

let filterES5 = phones.filter (function (phone) {
  return phone.price >= 5000;
});
console.log (filterES5);

let filterES6 = phones.filter (phone => phone.price >= 5000);
console.log (filterES6);

/* ES6 This */
const users = {
  fullName: 'Hasan Said SERTKAYA',
  email: 'hasansaid1999@gmail.com',
  city: 'Ankara',
  roles: ['Admin', 'Çalışan'],

  getRoles: function () {
    console.log (this.fullName);
    console.log (this.roles);

    /* ES6 */
    this.roles.forEach (item => {
      console.log (item);
      console.log (this.fullName);
    });

    /* ES5 */
    this.roles.forEach (function (item) {
      console.log (item);
    });
  },
};
users.getRoles ();

let intArr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < intArr.length; i++) {
  sum += intArr[i];
}
console.log (sum);

const addES5 = function (arr) {
  console.log (arguments);
  let total = 0;
  arguments[0].map (function (e) {
    total += e;
  });
  return total;
};
console.log (addES5 (intArr));

/* ES6 CLASS */

/* ES5 */
var ES5Person = {
  name: '',
}; // obje
var ES5Person2 = function () {}; // fonksiyon olarak class'lar oluşur.

// nesne -object
const ES5p = new ES5Person2 ();
console.log (ES5p);

/* ES6 */
class ES6Person {
  constructor (name = 'Said', year = new Date ().getFullYear ()) {
    this.name = name;
    this.year = year;
    console.log ('Constructor çalıştı.');
  }

  getAgeOfYear () {
    return new Date ().getFullYear () - this.year;
  }

  greeting (text) {
    return `${text}, Benim adım ${this.name}`;
  }
}

// nesne - object
var es6p = new ES6Person ();
var es6p2 = new ES6Person ('Harun Reşit', 1996);
console.log (es6p);
console.log (es6p2.getAgeOfYear (), es6p2.greeting ('selam'));

class ES6Person2 {
  constructor (name = 'Kamil', year = new Date ().getFullYear ()) {
    this.name = name;
    this.year = year;
    console.log ('constructor çalıştı');
  }

  getAgeOfYear () {
    return new Date ().getFullYear () - this.year;
  }

  greeting (text) {
    return `${text}, Benim adım ${this.name}`;
  }
}

class Student extends ES6Person {
  constructor (name, year, lessons) {
    super (name, year);
    this.lessons = lessons;
  }

  teaching () {
    return 'Öğreniyorum';
  }

  greeting (text) {
    return `${super.greeting (text)} Dersim : ${this.lessons}`;
  }
}

const ES6pStudent = new Student ('Muhammed Ali', 1995, 'React');
console.log (ES6pStudent.greeting ('Selam'));

class Teacher extends ES6Person {
  constructor (name, year, departmant) {
    super (name, year);
    this.departmant = departmant;
  }

  teach () {
    return 'Öğretiyorum..';
  }

  greeting (text) {
    return `${super.greeting (text)}. Departmanım : ${this.departmant}`;
  }
}
const ES6pTeacher = new Teacher ('Muhammed Ali', 1942, 'Boksör');
console.log (ES6pTeacher.greeting ('Selam'));
