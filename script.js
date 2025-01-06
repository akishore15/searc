var q = fetch(getElemetById("search-query"))
var search = function(q) {
    var url = "https://www.google.com/search?q=" + q
    var output = fetch(url)
    alert(output)
}
