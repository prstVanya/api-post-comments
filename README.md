____
# Тестовый проект
репозиторий для выполнения тестового задания, по этой [ссылке](https://jobs.sasflix.ru/frontender/);
____

## Содержание
- [Статус проекта](#статус-проекта)
- [Ссылка на деплой приложения](#ссылка-на-деплой-приложения)
- [Используемые технологии](#используемые-технологии)
- [Установка проекта](#установка-проекта)
- [Запуск проекта](#запуск-проекта)
- [Проверка линтинга](#проверка-линтинга)
____

## Статус проекта
проект завершен
____

## Ссылка на деплой приложения

Link: '';
____

## Используемые технологии
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

____

## Установка проекта
Клонирование проекта SSH:
```sh
$ git clone git@github.com:prstVanya/api-post-comments.git
```

Установка зависимостей:
```sh
$ npm i
```
___

## Запуск проекта
Запуск проекта:
```sh
npm run start
```

development сборка:
```sh
npm run build:dev
```

production сборка: 
```sh
npm run build
```
____

## Проверка линтинга
Для проверки TypeScript-файлов используется ESLint с конфигурацией airbnb-base.

Проверка ts-файлов:
```sh
npm run lint:ts
```

Исправить ts-файлы:
```sh
npm run lint:ts:fix
```

Для проверки CSS-файлов используется Stylelint.

Проверить css-файлы:
```sh
npm run lint:css
```

Исправить css-файлы:
```sh
npm run lint:css:fix
```
___