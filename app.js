let newsBox = document.getElementById('newsBox');
let spinner = document.getElementById('spinner');
let newsCategory = ['national', 'business', 'sports', 'world', 'politics', 'technology', 'startup', 'entertainment', 'miscellaneous', 'hatke', 'science', 'automobile'];

function sendCategory(index) {
    getNews(newsCategory[index]);
}

getNews("all");

async function getNews(newsCategoryName) {
    try {
        const response = await fetch(`https://inshortsapi.vercel.app/news?category=${newsCategoryName}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        let data = json.data;
        let newsHTML = "";

        function showSpinner() {
            spinner.style.visibility = 'hidden';
            newsBox.style.visibility = 'visible';
        }

        showSpinner();

        for (const key in data) {
            let news = `<div class="newsCard card">
                        <img src="${data[key].imageUrl}"
                            class="img ard-img-top img-thumbnail" alt="Image" style="height: 15rem;">
                        <h5 class="card-header">${data[key].title}</h5>
                        <div class="card-body">
                            <h5 class="card-title">Author: ${data[key].author}</h5>
                            <p class="card-text">${data[key].content}</p>
                            <a target="_blank" href="${data[key].readMoreUrl}" class="btn btn-primary">Read more..</a>
                        </div>
                        <div class="text-center card-footer text-muted">${data[key].date}</div>
                    </div>`;
            newsHTML += news;
        }

        newsBox.innerHTML = newsHTML;
    } catch (error) {
        console.error("Some error occurred:", error.message);
    }
}
