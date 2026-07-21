# Web Development, Project charlie
> [dev project] charlie

## Authorship and Attribution
- Most work comes from Troy Woods, with assistance coming from GitHub Copilot (assisted with implementation and code suggestions) as well as Dr Cumbie's tutorial videos and gists

## User Story
- **As a** Software Developer and Site Administrator
- **I want** to log in, create and manage content items via a form, and view those items in a content library
- **So that** I can quickly author, preview, and organize content locally in the browser for others to view.

## Project Dir/ Structure
```bash
.
│  index.html
│  README.md
│  
├─assets
│  ├─css
│  │      style.css
│  │      
│  ├─data
│  │      ideas.json
│  │      
│  └─js
│          admin.js
│          auth-guard.js
│          auth.js
│          content.js
│          form.js
│          main.js
│          
├─config
│  │  AGENTS.md
│  │  CLAUDE.md
│  │  
│  └─wireframes
│          charlie-admin-wireframe.png
│          charlie-content-wireframe.png
│          charlie-form-wireframe.png
│          charlie-login-wireframe.png
│          
├─docs
│      sample-content-records.json
│      
└─pages
        admin.html
        auth.html
        content.html
        form.html
```

## Tech Stack
- **CSS Framework:** Bootstrap 5 (via CDN)
- **Icons:** Bootstrap Icons (via CDN)
- **JavaScript:** Vanilla ES6+ (no modules) — code kept in external `.js` files
- **DOM APIs:** Native browser DOM manipulation via `document`, `Element`, `Template`, and event listeners
- **Data Format:** JSON for structured content records and sample seed data
- **Browser Storage:** `sessionStorage` for authentication state and `localStorage` for content persistence
- **Networking:** `fetch()` for loading JSON data and optional runtime IP lookup
- **Forms & Validation:** Native HTML5 form validation, `required`, `type="url"`, and Bootstrap validation styling
- **Style Guides:** Google Style Guide for HTML, CSS, and JavaScript
- **Placeholder Images:** picsum.photos for automatic images when none provided

## resources
- **Github:** repos, pages, wiki, issues, milestone, Gist
- **VSCode:** LiveServer, TODO Highlight
- **References:** Dr. Cumbie Gists, Dr. Cumbie Videos, codeAcademy

  ## Sprint 99 / Future Dev Ideas
  - [milestones](https://github.com/busterwoods/charlie-thought-logs/milestone/1)
 
  ## Wireframes
  - [wireframes](https://github.com/busterwoods/charlie-thought-logs/wiki/Wireframes)
 
  ## Issues/Ideas
  - [issues](https://github.com/busterwoods/charlie-thought-logs/issues?q=is%3Aissue%20state%3Aopen%20label%3Abrainstorm)
