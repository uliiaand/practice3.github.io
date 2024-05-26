window.addEventListener("DOMContentLoaded", function () {
	"use strict";
	//Получаем табы (переключатели), родительский элемент табов, и контент табов
	let tab = document.querySelectorAll(".advantages__tab"),
		info = document.querySelector(".advantages__header"),
		tabContect = document.querySelectorAll(".advantages__box");
	//Функция которая скрывает контентные табы
	function hideTabContect(a) {
		for (let i = a; i < tabContect.length; i++) {
			tabContect[i].classList.remove("show");
			tabContect[i].classList.add("hide");
		}
	}
	//Скрываются все кроме 1 элемента
	hideTabContect(1);
	//Функция показа контентных табов
	function ShowTabContect(b) {
		if (tabContect[b].classList.contains("hide")) {
			tabContect[b].classList.remove("hide");
			tabContect[b].classList.add("show");
		}
	}

	//Создаем событие клика на родителя, используя делегирование событий
	info.addEventListener("click", function (event) {
		let target = event.target;

		if (target && target.classList.contains("advantages__tab")) {
			// Связь элементов при совпадении target
			for (let i = 0; i < tab.length; i++) {
				//если совпадают
				if (target == tab[i]) {
					//Скрываем все табы
					hideTabContect(0);
					// удаляем класс активности таба
					tab.forEach((item) => {
						item.classList.remove("tab-active");
					});
					//элементу target(на который кликнули) добавляем активный класс
					target.classList.add("tab-active");

					//Совпадение по нумерации
					ShowTabContect(i);

					break;
				}
			}
		}
	});
});