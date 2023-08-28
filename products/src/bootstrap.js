import faker from "faker";

const mount = (el) => {
    let products = '';

    for (let i=0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`
    }
    el.innerHTML = products;

};

//Context/Situation #1
// We're running the file in development in isolation
// We're using our local index.html file
// Which DEFINETELY has an element with an id of 'dev-products'
// We want to immmediatly render out app into that element
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');
    // Asumming our container does not have an element wiht id 
    // dev-products
    if (el) {
        mount(el);
    }
}

// Context/Situation #2
// We are running this file in development or production
// through CONTAINER app
// NO GUARANTEE that the element with an id of `dev_products` exists
// WE DO NOY WANT to try to immediatly run the app

export { mount };