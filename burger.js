window.addEventListener("DOMContentLoaded", function () {
    const hamb = document.querySelector("#hamb");
    const popup = document.querySelector("#popup");
    // Глубокое клонирование со всем содержимым
    const menu = document.querySelector("#menulist").cloneNode(1);
    // const body = document.body;

    hamb.addEventListener("click", hambHandler);

    function hambHandler(e) {
        popup.classList.toggle('open');
        renderPopup();
        // body.classList.toggle('noscroll');
    }
    function renderPopup() {
        popup.appendChild(menu);
    }
});