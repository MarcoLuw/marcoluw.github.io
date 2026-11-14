# marcoluw.github.io

My personal page: who I am, and links to the things I want to share.
Built with [Astro](https://astro.build) and published at https://marcoluw.github.io.

## Adding content

Everything shown on the page lives in `src/data/`. Nothing else needs to change.

| To change | Edit |
| --- | --- |
| Name, tagline, avatar, CV and GitHub links | `src/data/profile.json` |
| Links in the "Engineering" column | `src/data/engineering.yml` |
| Links in the "Practical and useful things" column | `src/data/practical.yml` |

A link is two lines, and links appear in the order they are written:

```yaml
- title: Text shown on the page
  url: https://full-link
```

Quote the title if it contains a colon (`title: "Workshop: Docker"`).
The build fails if an entry has no `title` or no valid `url`, so a broken entry never reaches the live page.

The avatar and CV are files in `public/`. Replace `public/avatar.svg` and `public/cv.pdf`, or add files
with other names and update the paths in `profile.json`.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local server at `localhost:4321` |
| `npm run build` | Build the site to `./dist/` |
| `npm run preview` | Preview the build locally |

## Deployment

Every push to `main` builds and publishes the site through `.github/workflows/deploy.yml`.
This needs **Settings → Pages → Source** set to **GitHub Actions**, once.
