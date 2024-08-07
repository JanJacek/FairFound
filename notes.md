# Full stack FairFound App with Quasar Ts Laravel with Pusher
Let's start codeing!

- Create db
    - `docker run --name your_db_name -e MYSQL_ROOT_PASSWORD=your_password -p 3306:3306 -d mariadb`

- Create directory for the project and then laravel and quasar projects
    - `laravel new projectName`
    - Add sanctum `php artisan install:api`
        - setup: basic project
    - `yarn create quasar`
        - setup: 
           - vue 3 + ts
           - pinia
           - axios
           - vite
           - eslint
           - pritier
- Connect to the db
    - go to the .env file and filed properly values ex
    "
        DB_CONNECTION= mariadb
        DB_HOST= 27.0.0.1
        DB_PORT= 3306
        DB_DATABASE= db_name
        DB_USERNAME= root
        DB_PASSWORD= secret
    ""
- Prepare credentials for Pusher
`
PUSHER_APP_ID= 
PUSHER_APP_KWY=
PUSHER_APP_SECRET=
PUSHER_HOST=
PUSHER_PORT=433
PUSHER_SCHEME=https
PUSHER_APP_CLOUSTER=mt1
`

Now is time to setup the API at the backend. Open the laravel project & lets create new controller 

<!-- Sources -->
Sources:
***
1. https://www.youtube.com/watch?v=ImtZ5yENzgE
2. https://www.youtube.com/watch?v=UZsIFX3fSaY
