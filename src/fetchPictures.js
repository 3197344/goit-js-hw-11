
// https://pixabay.com/api/?key=7652668-fcb425495cfb1d754d33171ff&q=yellow+flowers&image_type=photo&pretty=true
// Your API key: 7652668-fcb425495cfb1d754d33171ff

//

export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.per_page = 40;
}
    fetchPictures() {
        console.log("before", this);
    return fetch(`https://pixabay.com/api/?key=7652668-fcb425495cfb1d754d33171ff&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.per_page}&page=${this.searchQuery}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.incrementPage()
            console.log("after", this);
            
            return data.hits;
        })
    }
    incrementPage() {
    this.page += 1;
    this.per_page += 40;
    }

    resetPage() {
    this.page = 1;
    this.per_page = 40;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
};

