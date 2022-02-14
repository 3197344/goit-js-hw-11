import './sass/main.scss';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import NewsApiService from './fetchPictures';
import debounce from 'lodash.debounce';



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
    newsApiService.fetchPictures();
}

function onSearch(event) {
    event.preventDefault();
    newsApiService.query = event.currentTarget.elements.searchQuery.value;
    newsApiService.resetPage();
    newsApiService.fetchPictures();


    // if (searchQuery === "") {
    //     cleanInput();
    // }
    // else {
    //     fetchPictures(searchQuery)
    //     .then(renderCard)
    //     .catch(() =>
    //     Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again."))
    //     }
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