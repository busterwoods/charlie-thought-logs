# Project ALFA - Session Overview

## Session Date
June 15, 2026

---

## Session Prompts & Workflow

### 1. Project Configuration Setup
**Prompt:** Create AGENTS.md and CLAUDE.md with parameters for:
- BS5 (Bootstrap 5)
- BS Icons (Bootstrap Icons)
- Google Style Guide (HTML, CSS, JS)
- No JS Modules (vanilla JavaScript only)

**Result:** Created foundational configuration files defining:
- Technology stack and dependencies
- Code generation preferences
- File organization standards
- Code style requirements (no inline/internal styling or scripting)

---

### 2. Create Web Form
**Prompt:** Make a BS5 webform to capture generic content:
- Title
- Author
- Date
- Image
- Description
- Links (multiple)

**Result:** Built form.html with:
- Responsive Bootstrap 5 layout
- Form validation
- Dynamic link management (add/remove links)
- Initial link input field included

---

### 3. Form Enhancements
**Prompt:** 
- Default date entry to today
- Change images from file upload to URL input
- Add description field for each link

**Result:** Updated form.html to:
- Auto-populate date field with today's date
- Accept image URLs instead of file uploads
- Display each link with URL + description in a styled card

---

### 4. Authentication & Data Persistence
**Prompt:**
- Only show form.html if user is logged in (check sessionStorage.getItem('sessionAuthN'))
- Redirect to login if not authenticated
- Save form data to localStorage for retrieval on content.html
- Organize saved data for card display
- Move all JS logic to separate form.js file

**Result:** Created form.js with:
- Authentication check on page load
- Form validation and submission handling
- Data collection with proper structure
- localStorage persistence
- Success alert after submission
- Dynamic link management

---

### 5. Code Style Guidelines Update
**Prompt:** Add to AGENTS.md and CLAUDE.md:
- NO inline styling (no `style` attributes)
- NO internal styling (no `<style>` tags)
- NO inline scripting (no `onclick`, etc.)
- NO internal scripting (no `<script>` tags)

**Result:** Updated both config files with explicit code style requirements

---

### 6. Content Display System
**Prompt:** Add functionality so form data creates cards with content in content.html

**Result:** Created content.js with:
- Authentication check
- Loads content items from localStorage
- Generates Bootstrap cards dynamically
- Displays title, author, date, image, description, links
- Delete functionality with confirmation
- Placeholder message if no content exists
- XSS protection via HTML escaping
- Updated content.html with dynamic card container

---

### 7. Image Fallback
**Prompt:** If no image is inputted in form.html, use a lorem picsum picture instead

**Result:** Updated form.js getFormData() function:
- Checks if image URL is provided
- Uses picsum.photos placeholder with random parameter if empty
- Timestamp ensures unique images per submission

---

## System Architecture

```
Project ALFA
├── Configuration Files
│   ├── AGENTS.md (tech stack & guidelines)
│   └── CLAUDE.md (code generation preferences)
├── HTML Pages
│   ├── pages/auth.html (login page)
│   ├── pages/form.html (content creation form)
│   ├── pages/content.html (content library display)
│   └── index.html (home page)
├── Assets
│   ├── css/style.css (custom styling)
│   ├── js/main.js (global utilities)
│   ├── js/form.js (form logic & validation)
│   ├── js/content.js (content display logic)
│   └── img/ (images)
└── docs/
    └── SESSION_OVERVIEW.md (this file)
```

---

## Technology Stack

| Category | Technology |
|----------|-----------|
| CSS Framework | Bootstrap 5 |
| Icons | Bootstrap Icons |
| JavaScript | Vanilla ES6+ (no modules) |
| HTML | Semantic with Google Style Guide |
| Storage | sessionStorage (auth), localStorage (content) |
| Authentication | Simple sessionStorage check |

---

## How It Works: User Flow

### 1. **Authentication Flow**
```
User visits form.html
  ↓
form.js checks sessionStorage.getItem('sessionAuthN')
  ↓
If not 'true' → redirect to auth.html
  ↓
User logs in (password: 'password')
  ↓
auth.js sets sessionStorage.getItem('sessionAuthN') = 'true'
  ↓
User redirected to index.html
  ↓
User can now access form.html
```

### 2. **Form Submission Flow**
```
User fills form.html
  ↓
Submits form
  ↓
form.js validates all fields
  ↓
getFormData() collects:
  - Title, Author, Date
  - Image URL (or placeholder if empty)
  - Description
  - Links array (url + description)
  - Unique ID (timestamp)
  ↓
Data saved to localStorage as JSON array
  ↓
Success alert displays
  ↓
Form resets, date repopulated with today
```

### 3. **Content Display Flow**
```
User navigates to content.html
  ↓
content.js checks authentication
  ↓
Loads contentItems from localStorage
  ↓
For each item:
  - Creates Bootstrap card
  - Displays all form data
  - Renders image with fallback
  - Creates clickable links
  - Adds delete button
  ↓
Cards display in responsive grid
  ↓
User can delete items (with confirmation)
```

---

## Data Structure

### Form Data Object (localStorage)
```javascript
{
  id: 1718390400000,                          // Timestamp
  title: "My Content Title",
  author: "John Doe",
  date: "2026-06-15",
  imageUrl: "https://picsum.photos/600/400?random=1718390400000",
  description: "Content description text...",
  links: [
    {
      url: "https://example.com",
      description: "Example link"
    },
    {
      url: "https://another.com",
      description: "Another link"
    }
  ]
}
```

### localStorage Key Structure
- **sessionAuthN**: Stores authentication status ('true' or 'false')
- **contentItems**: Stores array of form data objects

---

## Key Features

### ✅ Authentication
- Session-based authentication using sessionStorage
- Automatic redirect to login for unauthorized users
- Simple password protection (demo mode)

### ✅ Form Management
- Client-side validation
- Dynamic link management (add/remove)
- Date auto-population
- Image URL with automatic placeholder fallback

### ✅ Data Persistence
- localStorage for content persistence
- Structured data format for easy retrieval
- Unique ID for each item (timestamp)

### ✅ Content Display
- Responsive Bootstrap 5 cards
- Image display with fallback
- Link management
- Delete functionality

### ✅ Code Quality
- No inline or internal styling/scripting
- External JS files (form.js, content.js)
- XSS protection via HTML escaping
- Semantic HTML structure

---

## File Breakdown

| File | Purpose |
|------|---------|
| [AGENTS.md](../AGENTS.md) | Project configuration & tech stack |
| [CLAUDE.md](../CLAUDE.md) | Code generation preferences |
| [pages/auth.html](../pages/auth.html) | Login page with sessionStorage auth |
| [pages/form.html](../pages/form.html) | Content creation form |
| [pages/content.html](../pages/content.html) | Content display page |
| [assets/js/form.js](../assets/js/form.js) | Form logic & data management |
| [assets/js/content.js](../assets/js/content.js) | Content display & deletion |
| [assets/js/main.js](../assets/js/main.js) | Global utilities (empty, ready for use) |
| [assets/css/style.css](../assets/css/style.css) | Custom styling |

---

## Next Steps / Future Enhancements

Potential additions:
- [ ] Edit functionality for existing content items
- [ ] Search/filter content by title or author
- [ ] Tags/categories for content organization
- [ ] Export content to CSV/JSON
- [ ] User profile page
- [ ] Multiple user support with proper backend
- [ ] Image upload instead of URL input
- [ ] Rich text editor for descriptions
- [ ] Content sharing/permissions system
- [ ] Analytics tracking

---

## Notes

- All code follows Google Style Guide standards
- No external JavaScript libraries (vanilla only)
- Bootstrap 5 provides layout and component styling
- Uses picsum.photos for placeholder images (requires internet)
- localStorage has ~10MB limit per domain
- Session auth clears when browser closes

