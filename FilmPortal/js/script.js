"use strict";

document.addEventListener(`DOMContentLoaded`, () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const adv = document.querySelectorAll(`.promo__adv img`),
    poster = document.querySelector(`.promo__bg`),
    genre = poster.querySelector(`.promo__genre`),
    movieList = document.querySelector(`.promo__interactive-list`),
    addForm = document.querySelector(`form.add`),
    addInput = addForm.querySelector(`.adding__input`),
    checkbox = addForm.querySelector(`[type="checkbox"]`);

  addForm.addEventListener(`submit`, (event) => {
    event.preventDefault();

    const newFilm = addInput.value;
    const favorite = checkbox.checked;

    console.log("OK");
    movieDB.movies.push(newFilm);
    sortArr(movieDB.movies);
  });

  const makeChanges = () => {
    genre.textContent = `ДРАМА`;
    poster.style.backgroundImage = `url('img/bg.jpg')`;
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  const deleteAdv = (arr) => {
    arr.forEach(function (item) {
      item.remove();
    });
  };

  function createMovieList(films, parent) {
    parent.innerHTML = "";

    films.forEach((film, i) => {
      parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
    });
  }

  sortArr(movieDB.movies);
  deleteAdv(adv);
  makeChanges();
  createMovieList(movieDB.movies, movieList);
});
