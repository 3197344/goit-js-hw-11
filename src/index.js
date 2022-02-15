
import './sass/main.scss';
import articlesTpl from './partials/articles.hbs';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import NewsApiService from './fetchPictures';




const newsApiService = new NewsApiService();
console.log(newsApiService);

const searchFormRef = document.querySelector('#search-form');
const inputSearchFormRef = document.querySelector('.input-search-form');
const btnSearchFormRef = document.querySelector('.btn-search-form');
const galleryRef = document.querySelector('.gallery');
const loadMoreBtnRef = document.querySelector('.load-more');

searchFormRef.addEventListener('submit', onSearch);
loadMoreBtnRef.addEventListener('click', onLoadMore);

function onLoadMore() {
    newsApiService.fetchPictures().then(appendArticlesMarkup);
}

function onSearch(event) {
    event.preventDefault();

    clearGallery()
    newsApiService.query = event.currentTarget.elements.searchQuery.value;
    console.log(event.currentTarget.elements.searchQuery.value);
// || newsApiService.query === null
    if (newsApiService.query === "") {
        // console.log(newsApiService.query);
        cleanInput();
        return Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again");

    }

    newsApiService.resetPage();
    newsApiService.fetchPictures().then(appendArticlesMarkup);
}


function appendArticlesMarkup(hits) {
    galleryRef.insertAdjacentHTML('beforeend', articlesTpl(hits))
}

function clearGallery() {
    galleryRef.innerHTML = '';
}

function cleanInput() {
    inputSearchFormRef.innerHTML = '';
    console.log("clean");
}
/*
В ответе будет массив изображений удовлетворивших критериям параметров запроса. 
Каждое изображение описывается объектом, из которого тебе интересны только следующие свойства:

webformatURL - ссылка на маленькое изображение для списка карточек.
largeImageURL - ссылка на большое изображение.
tags - строка с описанием изображения. Подойдет для атрибута alt.
likes - количество лайков.
views - количество просмотров.
comments - количество комментариев.
downloads - количество загрузок.
*/ 