// Check authentication on page load
function checkAuthentication() {
  const isAuthenticated = sessionStorage.getItem('sessionAuthN') === 'true';
  if (!isAuthenticated) {
    window.location.assign('../pages/auth.html');
  }
}

// Set date input to today
function initializeDateField() {
  const dateInput = document.getElementById('dateInput');
  const today = new Date().toISOString().split('T')[0];
  dateInput.value = today;
}

// Initialize form validation and submission
function initializeFormValidation() {
  const form = document.getElementById('contentForm');
  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      saveFormData();
    }
    form.classList.add('was-validated');
  });
}

// Collect form data
function getFormData() {
  const links = [];
  document.querySelectorAll('.link-item').forEach(linkItem => {
    const url = linkItem.querySelector('.link-url').value.trim();
    const description = linkItem.querySelector('.link-description').value.trim();
    if (url) {
      links.push({ url, description });
    }
  });

  const imageUrl = document.getElementById('imageInput').value.trim();
  const placeholderImage = 'https://picsum.photos/600/400?random=' + Date.now();

  return {
    title: document.getElementById('titleInput').value.trim(),
    author: document.getElementById('authorInput').value.trim(),
    date: document.getElementById('dateInput').value,
    imageUrl: imageUrl || placeholderImage,
    description: document.getElementById('descriptionInput').value.trim(),
    links: links,
    id: Date.now()
  };
}

// Save form data to localStorage
function saveFormData() {
  const formData = getFormData();

  // Get existing content items from localStorage
  let contentItems = JSON.parse(localStorage.getItem('contentItems')) || [];

  // Add new item
  contentItems.push(formData);

  // Save back to localStorage
  localStorage.setItem('contentItems', JSON.stringify(contentItems));

  // Show success message
  showSuccessMessage();

  // Reset form
  document.getElementById('contentForm').reset();
  document.getElementById('contentForm').classList.remove('was-validated');

  // Reset date to today
  initializeDateField();
}

// Show success message
function showSuccessMessage() {
  const alertDiv = document.createElement('div');
  alertDiv.className = 'alert alert-success alert-dismissible fade show';
  alertDiv.setAttribute('role', 'alert');
  alertDiv.innerHTML = `
    <strong>Success!</strong> Your content has been saved.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;

  const form = document.getElementById('contentForm');
  form.parentNode.insertBefore(alertDiv, form);

  // Auto-dismiss after 5 seconds
  setTimeout(() => {
    alertDiv.remove();
  }, 5000);
}

// Dynamic links functionality
function initializeDynamicLinks() {
  const linksContainer = document.getElementById('linksContainer');
  const btnAddLink = document.getElementById('btnAddLink');

  function createLinkItem() {
    const linkItem = document.createElement('div');
    linkItem.className = 'link-item mb-3 p-3 border rounded';
    linkItem.innerHTML = `
      <div class="mb-2">
        <input type="url" class="form-control link-url" placeholder="Enter URL">
      </div>
      <div class="mb-2">
        <input type="text" class="form-control link-description" placeholder="Link description">
      </div>
      <button class="btn btn-outline-danger btn-sm btn-remove-link" type="button">Remove</button>
    `;

    const removeBtn = linkItem.querySelector('.btn-remove-link');
    removeBtn.addEventListener('click', function () {
      linkItem.remove();
    });

    return linkItem;
  }

  btnAddLink.addEventListener('click', function () {
    linksContainer.appendChild(createLinkItem());
  });

  // Attach remove button listeners to initial link item
  document.querySelectorAll('.btn-remove-link').forEach(btn => {
    btn.addEventListener('click', function () {
      this.closest('.link-item').remove();
    });
  });
}

// Initialize all form functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  checkAuthentication();
  initializeDateField();
  initializeFormValidation();
  initializeDynamicLinks();
});
