
// https://pixabay.com/api/?key=7652668-fcb425495cfb1d754d33171ff&q=yellow+flowers&image_type=photo&pretty=true
// Your API key: 7652668-fcb425495cfb1d754d33171ff

//

export default class NewsApiService {
    constructor() {
        this.key = "7652668-fcb425495cfb1d754d33171ff"
        this.searchQuery = '';
        this.page = 1;
        this.per_page = 40;
}
    fetchPictures() {
        console.log("before", this);
        return fetch(`https://pixabay.com/api/?key=${this.key}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&per_page=${this.per_page}&page=${this.page}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.incrementPage();
            console.log("after", this);
            
            return data.hits;
        })
    }
    incrementPage() {
        this.per_page += 40;
        this.page += 1;
    }

    resetPage() {
        this.per_page = 40;
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }

    
};

