<img align=left width=100 src=src/images/acm-hack-logo.svg alt="Hack logo">

# ACM Hack Website


[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code-of-conduct.md)
\
\
This repository contains the code for ACM Hack’s website! 

This website is developed with [Gatsby](https://www.gatsbyjs.org/) and
[Material UI](https://material-ui.com/), and is an active project being
developed by ACM Hack’s Dev Team: Jody Lin
[(@jodymlin)](https://github.com/jodymlin/), Alex Xia
[(@khxia)](https://github.com/khxia/), Timothy Gu
[(@TimothyGu)](https://github.com/TimothyGu/), and Galen Wong
[(@GalenWong)](https://github.com/GalenWong/).

ACM Hack is a subcomittee of [ACM @ UCLA](http://www.uclaacm.com/), the largest
Computer Science student organization in Southern California. Check out [our
website](https://hack.uclaacm.com/) to learn more about who we are and what we
do!

## Getting Started
You’ll need:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [Yarn 1.x](https://classic.yarnpkg.com/en/) (Note that we don’t yet work with
  Yarn 2.)
- if you use VSCode, we recommend you install the
  [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
  extension

### Running the Project
Type the following lines in your command line:
```sh
$ git clone https://github.com/uclaacm/hack.uclaacm.com.git
$ cd hack.uclaacm.com
$ yarn
$ yarn develop
```
You can then navigate to `http://localhost:8000/` in your browser to see the
website!

### Notes
- Be sure to run `yarn` every time there are changes to `package.json`. Usually
  you’ll want to run `yarn` in the following scenarios:
  - after pulling from main
  - after merging main into your branch
  - after switching branches (that may have different dependencies)
- This project uses ESLint to ensure code style compliance. ESLint is
  automatically run when you try to make a Git commit, though this can be
  overridden in exigent circumstances with `--no-verify`. To run ESLint
  manually, do `yarn lint`.

### Troubleshooting
If something breaks in a weird way, try the following in order:
- run `yarn`
- delete the `public`, `.cache`, and `node_modules/.cache` directories
- delete the `node_modules` directory entirely and reinstall dependencies
  by running `yarn`

## Maintenance 

### Adding Blog Posts

The blogs that are written in Markdown format. 

To add new blogs, create a folder of the term under the directory `posts/`,
if it does not exist yet (e.g. `winter2020`). Then, create the directory that
holds the blog post (e.g. `hoth-intro`). This would be the path to the blog
post: 

```
hack.uclaacm.com/blogs/winter2020/hoth-intro/
```

Then, create a `index.md` markdown file. 
Start the file with the following metadata format.

```yml
---
date: 2019-10-08
title: "Function and this"
subtitle: "JavaScript Chats with ACM Hack Session 1"
---
```

Since the title and subtitle are specified in the metadata already, you don't
need to specify it again in the body of the markdown. You should avoid using
level 1 and level 2 title (aka `#` and `##`) since they represent the title
and the subtitle.


### Changing Officer Profiles

Officers come and go. We don't stay in college forever. To change the officer
profiles, go to `src/components/PhotoPage/PhotoPage.js`. Modify the array
directly.


The profile pictures of the officer is put under `src/images/team`. The naming
of the file should be `<id>.jpg` or `<id>.png` where `<id>` is specified in
the data in `PhotoPage.js`.

### Maintaining Events

We list our events in our home page and the event page. 
To change the events, change `src/data/events/events.js`. 
The banner of the events are put under `src/images/event`.
The format of an event is as follow:

```js
{
  name: 'Passion Talks',
  date: getDateTime(2020, 5, 13, 18),
  location: 'Zoom',
  imgFilePath: 'event/2020s-passion-talks.png',
  detailLink: 'https://www.facebook.com/events/275484680297266/'
},
```

If you are in development mode, hot-reloading might not work for updating
events. You need to manually do `yarn develop` again.

### Maintaining Event Highlights

We list some of our featured events in our event page.
To change the featured events, go to `data/events/highlights.js`. 

```js
{
  name: 'Hackschool',
  description: 'A coolest event',
  imgFilePath: 'event/2019f-hackschool.png',
  button: 'Curriculum',
  link: 'https://github.com/uclaacm/hackschool-f19'
},
```

The banner images of these highlighted events can also be found in
`src/images/event`. The `button` field will be rendered as a link that points
to `link`.

## Deployment

Deployment is done automatically when the `main` branch is updated. 
We use GitHub Actions to deploy our site into GitHub pages. We have
our domain `hack.uclaacm.com` to point to this GitHub page. 

### Continuous Integration (CI)

We had set up Netlify to build our site for preview for every pull request.
You can see the preview link right at our pull request. 

But do note that Netlify has a monthly limit of 1000 build minutes. We share
this quota with the HOTH website. Don't push too much.
