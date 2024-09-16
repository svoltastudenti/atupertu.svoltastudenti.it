function loadContent(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("article-container").innerHTML = data;
    })
    .catch((error) => console.error("Error loading content:", error));
}
