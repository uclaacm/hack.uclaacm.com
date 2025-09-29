<img align=left width=100 src=src/images/acm-hack-logo.svg alt="Hack logo">

# ACM Hack Website

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code-of-conduct.md)
[![Nightly Build Status](https://github.com/uclaacm/hack.uclaacm.com/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/uclaacm/hack.uclaacm.com/actions?query=workflow%3A%22Deploy+to+GitHub+Pages%22)
\
\
This repository contains the code for ACM Hack’s website!

This website is developed with [React](https://react.dev/) using
[Vite](https://vite.dev/), and is an active project being
developed by ACM Hack’s Dev Team.

#### ACM Hack Dev Team Contributors

- Max Lee [(@maxywaxyy)](https://github.com/maxywaxyy)
- Nishant Ray [(@Nishant-Ray)](https://github.com/Nishant-Ray)
- Arnav Roy [(@aroy23)](https://github.com/aroy23)
- Daniel Zhou [(@danielhzhou)](https://github.com/danielhzhou)
- Jaewook Cho [(@dcho-jaewook)](https://github.com/dcho-jaewook)
- Jenna Wang [(@ariyin)](https://github.com/ariyin)
- Hannah Kendall [(@hannahkendall04)](https://github.com/hannahkendall04)
- Kian Shandi [(@kiankian)](https://github.com/kiankian)
- Kayla Hamakawa [(@kaylahama)](https://github.com/kaylahama)

#### Alumni Dev Team Contributors

- James Wu [(@jamesmwu)](https://github.com/jamesmwu)
- Nathan Zhang [(@nathanzzhang)](https://github.com/nathanzzhang)
- Andy Lewis [(@datowq)](https://github.com/orgs/uclaacm/people/datowq)
- Jakob Reinwald [(@jakobreinwald)](https://github.com/jakobreinwald)
- Katelyn Yu [(@katelynsyu)](https://github.com/katelynsyu)
- Nareh Agazaryan [(@nareha)](https://github.com/nareha)
- Einar Balan [(@EinarBalan)](https://github.com/EinarBalan)
- Alex Xia [(@khxia)](https://github.com/khxia/)
- Jody Lin [(@jodymlin)](https://github.com/jodymlin/)
- Galen Wong [(@GalenWong)](https://github.com/GalenWong/)
- Timothy Gu [(@TimothyGu)](https://github.com/TimothyGu/)

ACM Hack is a subcomittee of [ACM @ UCLA](http://www.uclaacm.com/), the largest
Computer Science student organization in Southern California. Check out [our
website](https://hack.uclaacm.com/) to learn more about who we are and what we
do!

## Getting Started

You’ll need:

- [Git](https://git-scm.com/)
- [Node.js 20.x](https://nodejs.org/en/)
- If you use VSCode, we recommend you install the
  [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  extension to adhere to our linter rules.

### Running the Project

Type the following lines in your command line:

```sh
$ git clone https://github.com/uclaacm/hack.uclaacm.com.git
$ cd hack.uclaacm.com
$ npm install
$ npm run dev
```

You can then navigate to `http://localhost:8000/` in your browser to see the
website!

### Notes

- Be sure to run `npm install` every time there are changes to `package.json`. Usually
  you’ll want to run `npm install` in the following scenarios:
  - after pulling from main
  - after merging main into your branch
  - after switching branches (that may have different dependencies)
- This project uses ESLint to ensure code style compliance. ESLint is
  automatically run when you try to make a Git commit, though this can be
  overridden in exigent circumstances with `--no-verify`. To run ESLint
  manually, do `npm run lint`.

### Troubleshooting

If something breaks in a weird way, try the following in order:

- run `npm install`
- delete the `node_modules` directory entirely and reinstall dependencies
  by running `npm install`

## Maintenance

### Adding Blog Posts

Our blogs are written in Markdown format.

To add new blogs, create a folder of the term under the directory `blogPosts/`. If the current year does not exist yet (e.g. `winter2030`). Then, create the directory that
holds the blog post (e.g. `hoth-intro`). This would be the path to the blog
post:

```
hack.uclaacm.com/blogs/winter2020-hoth-intro/
```

Then, create a `index.md` markdown file.
Start the file with the following metadata format.

```
# Title
## Subtitle
### <Date>
#### By <Authors>
```

Example:

```
# Function and This
## JavaScript Chats with ACM Hack Session 1
### October 8th, 2019
#### By Galen Wong
```

Finally, update `src/data/blogs.js` by adding another object to the `blogs` array. The object should be of the following format:

```
{
  id: '<quarterYear>-<blogTitle>,
  title: <title>,
  author: <author>,
  date: <date (as a string)>,
  readTime: <readTime>,
  summary: <summary (matches subtitle)>
  markdown: new URL(<pathToPost>), import meta.url).href,
}
```

### Adding Events to Workshop Archive

The event workshop data is statically stored (for now) in `src/data/archive.js`. This is incomplete as of Nov 2024, as a result of our migration off of the Gatsby infrastructure to v2 of the Hack website.

You can reference `src/data/archive` for the previous yml files containing workshop data.

### Changing Officer Profiles

Officers come and go. We don't stay in college forever. To change the officer
profiles, go to `src/data/profiles.js`. Modify the array
directly.

The profile pictures of the officer is put under `src/images/team`. The naming
of the file should be `<id>.jpg`, where `<id>` is specified in
the data in `profiles.js`.

This format follows as well for `team-easter-egg`.

To modify alumni data, directly modify the array at `src/data/alumni.js`.

## Deployment

Deployment is done automatically when the `main` branch is updated.
We deploy using Netlify, and have our domain name `hack.uclaacm.com` set to point towards that deployment.

### Continuous Integration (CI)

We set up Netlify to build our site for preview for every pull request.
You can see the preview link right at our pull request.

But do note that Netlify has a monthly limit of 1000 build minutes. We share
this quota with the HOTH website. Don't push too much.
