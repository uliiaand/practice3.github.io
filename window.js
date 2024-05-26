document.addEventListener('DOMContentLoaded', function() {
    const cookies = document.getElementById("cookies");
    const cookiesBtn = document.getElementById("cookies__btn");

    cookiesBtn.addEventListener("click", function () {
        cookies.style.display = "none";
    });
});