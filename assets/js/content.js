// Check authentication on page load
function checkAuthentication() {
  const isAuthenticated = sessionStorage.getItem('sessionAuthN') === 'true';
  if (!isAuthenticated) {
    window.location.assign('../pages/auth.html');
  }
}

// Load and display content cards from localStorage
function loadContentCards() {
  const contentItems = JSON.parse(localStorage.getItem('contentItems')) || [];
  const cardsContainer = document.getElementById('cardsContainer');

  // Clear existing cards
  cardsContainer.innerHTML = '';

  if (contentItems.length === 0) {
    cardsContainer.innerHTML = `
      <div class="col-12">
        <div class="alert alert-info">
          <p>No content yet. <a href="form.html">Create your first content item</a></p>
        </div>
      </div>
    `;
    return;
  }

  // Create card for each content item
  contentItems.forEach(item => {
    const card = createContentCard(item);
    cardsContainer.appendChild(card);
  });
}

// Create a single content card
function createContentCard(item) {
  const colDiv = document.createElement('div');
  colDiv.className = 'col-md-6 offset-md-3 mb-4';

  const formattedDate = formatDate(item.date);

  let cardHTML = `
    <div class="card h-100">
      <div class="card-header">
        <h5 class="card-title">${escapeHtml(item.title)}</h5>
        <p class="card-text text-muted">By ${escapeHtml(item.author)} | ${formattedDate}</p>
      </div>
  `;

  // Add image if available
  if (item.imageUrl) {
    cardHTML += `
      <div class="card-body">
        <img class="img-fluid rounded" src="${escapeHtml(item.imageUrl)}" alt="${escapeHtml(item.title)}" onerror="this.src='https://via.placeholder.com/600?text=Image+Not+Found'">
      </div>
    `;
  }

  cardHTML += `
      <p class="card-text px-3">${escapeHtml(item.description)}</p>
  `;

  // Add links if available
  if (item.links && item.links.length > 0) {
    cardHTML += `
      <div class="card-footer bg-light">
        <div class="mb-2">
          <strong>Links:</strong>
        </div>
    `;
    item.links.forEach(link => {
      cardHTML += `
        <a href="${escapeHtml(link.url)}" class="card-link" target="_blank" rel="noopener noreferrer">
          ${escapeHtml(link.description || link.url)}
        </a>
      `;
    });
    cardHTML += `
        <div class="mt-3">
          <button class="btn btn-sm btn-danger delete-card" data-id="${item.id}">Delete</button>
        </div>
      </div>
    `;
  } else {
    cardHTML += `
      <div class="card-footer bg-light">
        <button class="btn btn-sm btn-danger delete-card" data-id="${item.id}">Delete</button>
      </div>
    `;
  }

  cardHTML += `</div>`;

  colDiv.innerHTML = cardHTML;

  // Attach delete event listener
  const deleteBtn = colDiv.querySelector('.delete-card');
  deleteBtn.addEventListener('click', function () {
    deleteContentItem(item.id);
  });

  return colDiv;
}

// Delete a content item
function deleteContentItem(id) {
  if (confirm('Are you sure you want to delete this item?')) {
    let contentItems = JSON.parse(localStorage.getItem('contentItems')) || [];
    contentItems = contentItems.filter(item => item.id !== id);
    localStorage.setItem('contentItems', JSON.stringify(contentItems));
    loadContentCards();
  }
}

// Format date to readable format
function formatDate(dateString) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString + 'T00:00:00').toLocaleDateString('en-US', options);
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Initialize content page when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  checkAuthentication();
  loadContentCards();
});
