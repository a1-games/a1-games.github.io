
var POSTS = [];
var SORTED_POSTS = [];

var postCount = 0;

var container = document.getElementById("showcase-grid");

// get the array of blog post ids
// Example: [
// "space_voyage", 
// "crab_island", 
// "example_name"
// ]
async function getPosts()
{
    var list;
    fetch("https://a1creator.com/files/blogpostlist.json")
        .then((response) => response.json())
        .then((jsonresponse) =>  {
            // [...] makes a copy instead of a reference
            list = [...jsonresponse.blogposts];
            postCount = list.length;

            for (let i = 0; i < postCount; i++) {
                // get rnd index
                let rnd = Math.floor(Math.random() * list.length);
                loadAndAddPost(list[rnd]);
                list.splice(rnd, 1);
            }
        });
    
}

async function loadAndAddPost(post_id) {
    // fetch the json game info file
    fetch(`https://a1games.fun/blogposts/${post_id}/${post_id}.html`)
        .then((response) => response.text())
        .then((jsonresponse) =>  {

            // return generated json object
            POSTS.push(jsonresponse);
            addItem(jsonresponse);
        });

}

async function addItem(postObj) 
{
    container.append(postObj);
}


getPosts()