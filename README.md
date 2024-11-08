# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Add all new files git add --all
Remove a file. git rm <filename>
Commit changes. git commit -m '<commit_message>'
Get an idea of the git command to use next. git status

BACKEND OHJEET:
1 - Tee oma .env tiedosto johon tulee DBUSER ja DBKEY. (.env tiedosto tehdään backend kansioon)
    DBUSER on käyttäjäsi nimi MongoDB tietokannassa.
    DBKEY on käyttäjäsi salasana jonka saa generoitua ja kopioitua kun luot omaa käyttäjääsi tietokantaan.
    Esimerkki .env:
        DBUSER="nimi"
        DBKEY="salasana"

2 - Käynnistä backend serveri komennolla: node --env-file=.env .\server.js