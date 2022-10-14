var root = document.getElementById ('root');

var productName = 'Samsung s10';
var productPrice = 4000;
var productDescription = 'Bu bir telefon.';

function formatPrice (p) {
  return p + ' TL';
}

var product = {
  name: '',
  price: 4000,
  description: 'bu bir telefon',
  type: ['red', 'blue'],
};

function formatPrice2 (p) {
  return p.price + ' TL';
}
function getDescription (description) {
  //farklı çözümler

  /*if(description) {
        return description;
    } else {
        return "no-description";
    }*/

  /*if(description) {
        return <h5 style={{color: "red"}}>Description : {description}</h5>
    } */

  return description ? description : 'no-description';
}

var number = 0;

function artiBir () {
  number++;
  renderApp ();
  console.log ('arttı');
}
var dateTime = new Date ().toLocaleTimeString ();
function renderApp () {
  var template = (
    <div id="productDetail">
      {/* <h1 id="productName">Name : {product.name ? product.name : "no-name"}</h1>
        <p id="productPrice">Price : {formatPrice2(product)}</p>
        <p id="productPrice">Price : {product.price == 0 ? "free" : product.price}</p>
        <p id="productDescription">{getDescription(product.description)}</p>
        <p>{product.type.length ? product.type.length + " tip var" : "seçenek yok"}</p>
        <p>
            {
                product.type.map((item)=> <p>{item}</p>)
            }
        </p> */}
      <h1>Number: {number}</h1>
      <button id="btnArttir" onClick={artiBir}>+1</button>
      <button
        id="btnAzalt"
        onClick={() => {
          number != 0 ? number-- : alert ('number değeri 0');
          renderApp ();
          console.log ('azaldı');
        }}
      >
        -1
      </button>
      <div>{dateTime}</div>
    </div>
  );
  /* React DOM - 18. Slayt */
  ReactDOM.render (template, root);
}

renderApp ();

function tick () {
  var element = (
    <div>
      <h2>Saat : {new Date ().toLocaleTimeString ()} </h2>
    </div>
  );
  ReactDOM.render (element, root);
}

setInterval (tick, 1000);
