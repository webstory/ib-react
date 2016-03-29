# [Inkbunny](https://inkbunny.net) favorites viewer

[Live demo](https://dev.storymate.net/ib-react/app/)

**This project currently unstable. Must hit 'F5' after login.**

Unfortunately, [Inkbunny API](https://wiki.inkbunny.net/wiki/API) does not expose 'add favorite/star' API. Therefore I have change this project from 'Unread submission viewer' to 'Favorites viewer'. Of course this project has capability to show unread submissions thanks to search API.

This is server-less static frontend. So nothing stored any information on the server.
If you doubt, clone project and running at your own web server.

To build, you should install nodejs 4.0.0 or higher. Because this project uses ECMAScript6 features.

Package manager: npm, jspm
Build manager: gulp, babel
Libraries used: React, Bootstrap, lo-dash

## PRE-REQUIREMENT
 * nodejs > 4.0.0
Reference: ( https://nodejs.org/en/download/package-manager/ )
 * gulp
 * jspm

## INSTALL
```bash
sudo npm install -g jspm
sudo npm install -g gulp

git clone https://gitlab.com/hoya82/ib-react.git
cd ib-react
npm install
jspm install
gulp rebuild
```

Production file is at /app folder.

open http://your.domain/path/to/ib-react/app

## Changelog
### Feb. 24, 2016
 * API changed: Use fallback thumbnail url(noncustom thumbnail)
 * HTTPS support: Use letsencrypt( http://letsencrypt.org )
