# Web Development, Project charlie
> [dev project] charlie

## Authorship and Attribution
- Most work comes from Troy Woods, with assistance coming from GitHub Copilot (assisted with implementation and code suggestions) as well as Dr Cumbie's tutorial videos

## User Story
- **As a** Software Developer and Site Administrator
- **I want** to log in, create and manage content items via a form, and view those items in a content library
- **So that** I can quickly author, preview, and organize content locally in the browser for demos or lightweight publishing

## Project Dir/ Structure
```bash
.
│   index.html
│   README.md
│
├───assets
│   ├───css
│   │       style.css
│   │       
│   ├───img
│   │       logo.png
│   │       
│   └───js
│           main.js
│           form.js
│           content.js
│
├───configuration
│       AGENTS.md
│       CLAUDE.md
│           
├───docs
│       SESSION_OVERVIEW.md
│
└───pages
│       auth.html
│       form.html
│       content.html
│
```

## Tech Stack
- **CSS Framework:** Bootstrap 5 (via CDN)
- **Icons:** Bootstrap Icons (via CDN)
- **JavaScript:** Vanilla ES6+ (no modules) — code kept in external `.js` files
- **Style Guides:** Google Style Guide for HTML, CSS, and JavaScript
- **Storage:** `sessionStorage` for authentication flag, `localStorage` for content persistence
- **Placeholder Images:** picsum.photos for automatic images when none provided

## Validations & Accessibility Checks 
- **Form validation:**
        - Uses native HTML5 validation patterns and Bootstrap's validation styling (`novalidate` + `was-validated`) to surface errors.
        - Required fields: `title`, `author`, `date`, `description`.
        - URL fields use `type="url"` to encourage valid links; additional runtime checks are added where appropriate.

- **Accessibility considerations:**
        - Semantic HTML elements are used throughout (form controls, labels, headings).
        - Form controls are labeled and include `aria`-appropriate attributes where necessary.
        - Visual contrast is provided by Bootstrap; review custom CSS in `assets/css/style.css` to ensure sufficient contrast.

- **Testing & Manual Checks:**
        - Manual tests: login flow, form submission, link add/remove, content listing, delete item.
        - Cross-browser testing recommended for modern browsers (Chrome, Edge, Firefox, Safari).
        - Automated accessibility testing can be added via tools such as axe-core or Lighthouse for CI integration.

  ## Sprint 99 / Future Dev Ideas
  - [milestones](https://github.com/busterwoods/charlie-thought-logs/milestone/1)
 
  ## Wireframes
  - [wireframes](https://github.com/busterwoods/charlie-thought-logs/wiki/Wireframes)
 
  ## Issues/Ideas
  - [issues](https://github.com/busterwoods/charlie-thought-logs/issues?q=is%3Aissue%20state%3Aopen%20label%3Abrainstorm)
