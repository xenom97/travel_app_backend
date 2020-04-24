Travel Web App Backend

- PostgreSql (Sequelize)
- Express
- Node

1. Get start

- sequelize db:create
- sequelize db:migrate
- npm start

API Documentation<br>
**URL**

- ("/admin")

  - ("/register") <br>
    **Method**
    `POST`<br>
    **Params**<br>
    `none`<br>
    **Query (req.query)**<br>
    `none`<br>
    **Data (req.body)**<br>

    ```json
    { username[string], password[string], confirmPassword[string]}
    ```

    **Success Responses**<br>
    **code**<br>
    status = 201

    **content**

    ```json
    { "msg": { "username": [string] } }
    ```

    **Error Responses**<br>

    **code**<br>
    status = 500 (will change later)

    **content**

    ```json
    { "msg": { "error": [string] } }
    ```

  - ("/login")
    **Method**
    `POST`<br>
    **Params**<br>
    `none`<br>
    **Query (req.query)**<br>
    `none`<br>
    **Data (req.body)**<br>

    ```json
    { username[string], password[string]}
    ```

    **Success Responses**<br>
    **code**<br>
    status = 200

    **content**

    ```json
    { "msg": { "token": [string] } }
    ```

    **Error Responses**<br>

    **code**<br>
    status = 500 (will change later)

    **content**

    ```json
    { "msg": { "error": [string] } }
    ```
