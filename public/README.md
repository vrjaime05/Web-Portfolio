# Engineering Portfolio — Site Guide

A static, dependency-free HTML/CSS/JS portfolio for a mechatronics engineer /
3D CAD designer. No build step — every file is served as-is, which makes it
straightforward to upload to Hatchable or any static host.

## File structure

```
index.html            Home — hero, about preview, featured projects, process
about.html             About — bio, philosophy, expertise, skills & software
projects.html           Projects — full case-study gallery with discipline filter
project.html            Reusable case-study template, reads ?id= from the URL
gallery.html            Photo gallery with lightbox, built from project images
resume.html             Resume / CV page
css/styles.css           All design tokens (colors, type, spacing) + components
js/main.js               Header/footer, nav behavior, scroll reveal, lightbox
js/projects-data.js      ALL project content AND image paths — edit this first
js/technical-art.js      Generated line-art graphics, used only for the
                          decorative hero illustration (index.html) and the
                          About page figure — not used by the projects anymore
assets/Jaime_Valencia_Curriculum.pdf   Your real CV — linked from the
                          "Download Resume" buttons on the Home and Resume pages
assets/project-placeholder.jpg   Placeholder photo used everywhere a project
                          image hasn't been swapped in yet
```

There is no contact page — it was removed on request. The only way to get in
touch is the email and LinkedIn links in the footer, the About page, and the
Resume page.

## The one file you'll edit most: `js/projects-data.js`

Every project card, case-study page, and gallery photo is generated from the
`PROJECTS` array in this file. To add a project, copy an existing object and
change the fields. To remove one, delete its object. Nothing else needs to
change — `project.html` builds itself from whichever project's `id` is in
the URL (e.g. `project.html?id=formula-sae`).

Each project has:
- `summary` / `challenge` / `approach` / `cad` / `sim` — the case-study text.
  The `cad` and `sim` fields on the four current projects are drafts ("Add
  detail here on...") — replace them with your own account of what you
  actually did on each project.
- `resultStats` — three short outcome stats shown as a highlight strip.
- `credits` — an "Acknowledgments" list for that project: teammates, advisors,
  anyone who helped. Each entry is `{ name: "...", contribution: "what they
  helped with" }`. Leave it as an empty array (`[]`) to skip the
  Acknowledgments section entirely on that project's page — it only shows up
  when there's at least one credit.
- `image` — the cover photo, used on cards and at the top of the case study.
- `gallery` — an array of 5 photos used further down the case-study page:
  `gallery[0]` and `gallery[1]` appear under "Design & CAD development",
  `gallery[2]` and `gallery[3]` under "Testing & validation", and
  `gallery[4]` under "Final result".

## Adding your real photos

Every image on the site currently points at
`assets/project-placeholder.jpg` — a plain placeholder graphic. To replace
one:

1. Drop your photo into the `assets/` folder (e.g. `assets/formula-sae-1.jpg`).
   JPG or PNG both work.
2. Open `js/projects-data.js` and change the matching `image` or `gallery[n]`
   path to point at your new file, for example:
   ```js
   image: "assets/formula-sae-1.jpg",
   gallery: ["assets/formula-sae-cad-1.jpg", "assets/formula-sae-cad-2.jpg", ...]
   ```
3. Save — every page that shows that project (Home, Projects, the project's
   own case-study page, and the Gallery) updates automatically, since they
   all read from this one file. No HTML or CSS changes are needed.

You don't have to replace every image at once — placeholder and real photos
can coexist while you gather photos project by project.

**A note on file size:** camera and CAD-render exports are often huge (4000px+
wide, several MB). Before adding a photo, it's worth resizing it to roughly
2000px on the longest side — plenty sharp for this site, and much faster to
load. Any image editor or a free online resizer works fine for this.

The projects already in the file (Pedal System, Recumbent, RC Vehicle with
Launcher) are drafted from your CV. Edit `summary`,
`challenge`, `approach`, `cad`, and `sim` on each to describe what you
actually built, tested, and learned.

## Editing site-wide info (name, email, LinkedIn, nav)

Open `js/main.js` and edit the `SITE` object at the top — it drives the logo,
navigation links, and footer contact details across every page.

## Editing the resume

- `resume.html` is the on-site CV — edit education/experience/certifications/
  languages directly in that file.
- Both "Download Resume" buttons (Home and Resume pages) link to
  `assets/Jaime_Valencia_Curriculum.pdf`. To update your resume, replace that
  file with a new export using the exact same filename — no HTML changes
  needed. If you use a different filename, update the two `href` values in
  `index.html` and `resume.html` to match.

## Colors & type

All design tokens live at the top of `css/styles.css` under `:root`:
dark green, graphite, charcoal, off-white, and the muted gray text color, plus
the two typefaces (IBM Plex Sans for text, IBM Plex Mono for small technical
labels). Changing a value there updates it everywhere.

## Deploying to Hatchable

This is a plain static site (HTML/CSS/JS, no build tools, no framework).
Everything under `public/` is served as-is — keep the `css/`, `js/`, and
`assets/` subfolders intact, with `index.html` as the site's home page.

## Browser support

Vanilla HTML/CSS/JS, no build step, no frameworks. Uses CSS Grid, `columns`
(masonry), and `IntersectionObserver` — all well supported in current
browsers. `prefers-reduced-motion` is respected for the reveal animations.
