document.addEventListener("DOMContentLoaded", () => {
  fetch("/assets/json/sidebar.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      const sidebarNav = document.getElementById("sidebar-nav");
      const articleContainer = document.getElementById("article-container"); // Ensure this element exists

      // Function to create a category item
      // Function to create a category item
      const createCategoryItem = (categoryName, articles) => {
        const categoryItem = document.createElement("li");
        categoryItem.className = "nav-item";

        const categoryLink = document.createElement("a");
        categoryLink.className = "nav-link collapsed";
        categoryLink.href = "#";
        categoryLink.setAttribute("data-bs-toggle", "collapse");
        categoryLink.setAttribute("data-bs-target", `#${categoryName}-nav`);

        categoryLink.innerHTML = `
    <a
            class="nav-link"
            href="#"
            onclick="loadContent('${categoryName}.html')"
          ><i class="bi bi-folder"></i><span><u>${categoryName}</u></span></a><i class="bi bi-chevron-down ms-auto"></i>
  `;
        categoryItem.appendChild(categoryLink);

        const categoryContent = document.createElement("ul");
        categoryContent.className = "nav-content collapse";
        categoryContent.id = `${categoryName}-nav`;
        categoryContent.setAttribute("data-bs-parent", "#sidebar-nav");

        articles.forEach((article) => {
          const articleItem = document.createElement("li");
          const articleLink = document.createElement("a");
          articleLink.href = "#"; // or any link related to the article

          // Include the logo next to the title
          articleLink.innerHTML = `<img src="assets/img/${article.logo}" class="sidebar-logo me-2" alt="${article.title} Logo" /><span>${article.title}</span>`;
          articleLink.onclick = (event) => {
            event.preventDefault(); // Prevent default link behavior
            displayArticle(article, categoryName); // Pass the article data and categoryName to displayArticle
          };
          articleItem.appendChild(articleLink);
          categoryContent.appendChild(articleItem);
        });

        categoryItem.appendChild(categoryContent);
        return categoryItem;
      };

      function displayArticle(article, categoryName) {
        if (articleContainer) {
          articleContainer.innerHTML = `
          <div class="pagetitle">
            <h1>${article.title}</h1>
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item">${categoryName}</li>
                <li class="breadcrumb-item active">${article.title}</li>
              </ol>
            </nav>
          </div>
      
          <div class="row">
            <!-- Card with image on the left -->
            <div class="col-md-4">
              <img src="assets/img/${article.image}" class="card img-fluid rounded-start" alt="${article.title}">
            </div>
      
            <!-- Card with logo, title, and subtitle on the right -->
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body d-flex align-items-center">
                  <div class="logo-container me-3">
                    <img src="assets/img/${article.logo}" class="img-fluid" alt="Logo">
                  </div>
                  <div>
                    <h5 class="card-title">${article.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${article.subtitle}</h6>
                  </div>
                </div>
              </div>
      
              <!-- Card with content text -->
              <div class="card mb-3">
                <div class="card-body p-4">
                  <p class="card-text">${article.text}</p>
                </div>
              </div>
          `;

          // Aggiunta della card dei contatti solo se esistono i contatti
          if (article.email || article.phone || article.website) {
            articleContainer.innerHTML += `
              <!-- Card with contact information -->
              <div class="card mb-3">
                <div class="card-header">
                  <h5>Contatti</h5>
                </div>
                <div class="card-body">
                  <ul class="list-unstyled">
                    ${
                      article.email
                        ? `<li class="mb-2"><i class="bi bi-envelope me-2"></i><strong>Email:</strong> <a href="mailto:${article.email}">${article.email}</a></li>`
                        : ""
                    }
                    ${
                      article.website
                        ? `<li class="mb-2"><i class="bi bi-globe me-2"></i><strong>Sito Web:</strong> <a href="${article.website}">${article.website}</a></li>`
                        : ""
                    }
                  </ul>
                </div>
              </div>
            `;
          }

          // Chiudi il blocco HTML principale
          articleContainer.innerHTML += `
            </div>
          </div>
          `;
        } else {
          console.error("Article container not found.");
        }
      }

      // Inject the grouped items into the sidebar
      for (const [category, articles] of Object.entries(data.categories)) {
        const categoryItem = createCategoryItem(category, articles);
        sidebarNav.appendChild(categoryItem);
      }
    })
    .catch((error) => {
      console.error("Error loading sidebar:", error);
    });
});