# Дипломный проект по профессии «Веб-разработчик»

### Доступ администратора:

* **login:** admin@gmail.com,
* **password:** admin123
* /admin/login

PHP ver. 8.0, Laravel ver. 9.47.0, Composer, JS, React, SQLite

### Запуск:

``` 
composer install 
```

установка файлa .env в корень проекта,
<br/>
создание базы данных database.sqlite в папке database

Создание миграции:

```
php artisan migrate
```

Наполнение базы данных информацией (данные администратора, предустановленные фильмы):

```
php artisan db:seed
```

Установка пакетов package.json:

```
npm install
```

Запуск сервера:

```
npm run dev
php artisan serve
```
