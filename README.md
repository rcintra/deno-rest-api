# Deno Rest API
    > A starter project with Deno, Oak and PostgreSQL

## Config ENV - LOCAL (.env)
    DB_USER=
    DB_NAME=
    DB_HOSTNAME=localhost
    DB_PASSWORD=
    DB_PORT=5432
    APP_HOST=localhost

## Debug Mode
deno run --inspect-brk  --allow-env --allow-net --allow-read app.ts

## Run only
deno run --allow-env --allow-net --allow-read app.ts

# API
    findAll
        GET /api/v1/users fetch data users
    create
        POST /api/v1/users create data user
    findById
        GET /api/v1/users/:id fetch data user by id     
    update    
        PATCH /api/v1/users/:id update data user by id
    delete
        DELETE /api/v1/users/:id delete data user by id