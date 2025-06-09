function loadRoute(route) {
    const app = document.getElementById('app');
    const body = document.body.style;
    switch (route) {
        case '#/':
            body.backgroundImage = "url('https://vesti-k.ru/i/65/656634da1850b28331cb173f9c2fe0bf.jpg')";

            app.innerHTML = `<div>
         <h1>Welcome to Safe Travels & Passengers</h1>
         <p>Safe Travels & Passengers is your trusted partner for safe, comfortable and affordable private bus travel. Whether you're traveling for business, family events, or group tours, our modern buses and professional drivers are here to ensure you enjoy every moment of your journey.</p>
      </div>`;
            break;
        case '#/about':
            app.innerHTML = `
                <h1>About</h1>
                <p>Hello, travelers. We are a Pune based Travels compony providing you comfortable, safe and secure ride by our decent travel buses.</p>
                `;
            body.backgroundImage = "url('https://big-bus.ru/assets/images/setra-intro.jpg')";
            // body.backgroundSize = 'contain';

            break;
        case '#/contact':
            app.innerHTML = `
                <h1>Contact</h1>
                <p>Email us at contact@example.com</p>
            `;
            body.backgroundImage = "url('https://www.trumpf.com/filestorage/TRUMPF_Magazine/_processed_/0/8/csm_BYD-electric-busses-with-TRUMPF-laser-welded-batteries_6b2a4cee36.jpg')";
            break;
        case '#/services':
            app.innerHTML = `<h1>service</h1>
                <p>Email us at contact@example.com</p>`;
            body.backgroundImage = "url('./images/[GetPaidStock.com]-68464e3cabbe6.jpg')";


            break;
        default:
            app.innerHTML = '<h1>404</h1><p>Page not found.</p>';
    }
}

window.addEventListener('hashchange', () => {
    loadRoute(location.hash);
});

window.addEventListener('load', () => {
    loadRoute(location.hash || '#/');
});

const mobileMenu = document.getElementById("mobileMenu");

menu.addEventListener("click", () => {
    mobileMenu.style.display = "block";
    mobileMenu.style.display = "flex";
    mobileMenu.style.flexDirection = "column";
    isMenuDisplayed = true;
});

const closeButton = document.getElementById("close");

closeButton.addEventListener("click", () => {
    mobileMenu.style.display = "none";
});


