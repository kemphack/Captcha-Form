The main problem with your solution is that in case of host checking you need
static hosting for your site, that's why we use nginx docker container which
hosts our html files for us. If you are using php just place this files at servers folder.

DON'T FORGET TO CREATE 2V CAPTCHA KEY IN ADMIN CONSOLE AND PASTE SITE_KEY in index.js
FOR 3V SAME BUT INSIDE data-sitekey attribute of submit button.

Checkout both versions 2V, 3V they should have different site keys respectively.

Requirements:
Docker installed
Docker-compose installed

By default port is 5000, so you should open
http://127.0.0.1:5000
You can change it inside docker-compose.yml

Run following command to check solution:
docker-compose up -d
