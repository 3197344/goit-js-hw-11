
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
const buttonBoxRef = document.querySelector('.button-box')
const loadMoreBtnRef = document.querySelector('.load-more');
buttonBoxRef.classList.add('visually-hidden');

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

    if (newsApiService.query === "") {
        return Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again");
    }
    
    cleanInput();
    newsApiService.resetPage();
    newsApiService.fetchPictures().then(appendArticlesMarkup);
    
    // const lightbox = new SimpleLightbox('.gallery a', { close: true });
    buttonBoxRef.classList.remove('visually-hidden');
}


function appendArticlesMarkup(hits) {
    galleryRef.insertAdjacentHTML('beforeend', articlesTpl(hits));
    Notiflix.Notify.success(`Hooray! We found images.`);
}
//  ${totalHits}
function clearGallery() {
    galleryRef.innerHTML = '';

}

function cleanInput() {
    inputSearchFormRef.innerHTML = '';
    // inputSearchFormRef.textContent = '';
    console.log("clean");
    console.log(inputSearchFormRef.innerHTML)
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