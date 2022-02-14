export default function fetchPictures(name) {
    return fetch(`https://pixabay.com/api/?key=7652668-fcb425495cfb1d754d33171ff&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`)
        .then(response => {
            return response.json();
        })
};

// https://pixabay.com/api/?key=7652668-fcb425495cfb1d754d33171ff&q=yellow+flowers&image_type=photo&pretty=true
// Your API key: 7652668-fcb425495cfb1d754d33171ff

// 