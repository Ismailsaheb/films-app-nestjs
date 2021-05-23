## Description
Films backend Services over Reactive Observables using Nest.js as per the document attached [ Backend Test (Java).docx ]

## Features
* Add Films
* list out Films added
* Oauth2 Jwt Authentication using passport
* Nestjs as back-end
* Postgres as the database
* Multi-stage docker file for local development and production deployment

## Running the code
Clone the repo, ensure you have Docker installed and running.
Go to the project directory and  
`docker-compose up`

* There is health check endpoint that returns HTTP 200 and a "Success" message running
on [http://localhost:8081](http://localhost:8081)
* There is also a nodejs debugger attached to port 9229.    
* The codebase is ready for hot reloading as you make changes to the codebase since docker volumes 
  are being used
  
films data will be pushed from db\Initdb.d\films.sql to postgres db on container creation. If you are getting errors about database you can drop table and run the films.sql script manually connecting postgrese socker container.

# REST API

The REST API to the films app is described below.
## Create a new app User

### Request

`POST /users/`

curl --location --request POST 'http://localhost:8081/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "ismail@gmail.com",
    "password": "123455"
}'

### Response

    HTTP/1.1 201 Created
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36

    {
    "email": "ismail@gmail.com",
    "id": 1,
    "createdAt": "2021-05-23T22:14:10.567Z",
    "updatedAt": "2021-05-23T22:14:10.567Z"
    }

## Get list of Users

### Request

`GET /users/`

   curl --location --request GET 'http://localhost:8081/users' \
--header 'Content-Type: application/json'

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 25

    [{"id":1,"email":"ismail@gmail.com","password":"$2a$08$dLhAZctBRPggnM569advvuMViAiB2GAmtedN8qwcdI4kOdITdcHZW","createdAt":"2021-05-23T22:14:10.567Z","updatedAt":"2021-05-23T22:14:10.567Z"}]
## Get a specific user

### Request

`GET /user/id`

    ccurl --location --request GET 'http://localhost:8081/users/1' \
--header 'Content-Type: application/json'

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 36

    {
    "email": "ismail@gmail.com",
    "id": 1,
    "createdAt": "2021-05-23T22:14:10.567Z",
    "updatedAt": "2021-05-23T22:14:10.567Z"
    }

## Get a non-existent user

### Request

`GET /users/id`

    curl --location --request GET 'http://localhost:8081/users/1333' \
--header 'Content-Type: application/json'

### Response

    HTTP/1.1 404 Not Found
    Status: 404 Not Found
    Connection: close
    Content-Type: application/json
    Content-Length: 35

    {"status":404,"reason":"Not found"}

## Genrate Oauth token

### Request

`POST /auth/`

    curl --location --request POST 'http://localhost:8081/auth' \
--header 'Content-Type: application/json' \
--data-raw '{
  "email":"ismail@gmail.com",
  "password":"123455"
}'

### Response

    HTTP/1.1 201 Created
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36

    {"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyMTgwODI4M30.krccRs6jXyU_bjLN0sJeDGdVTCgX4S3fMI-wC40moro"}

## Create a new Film required Authorization bearer token to create film

### Request

`POST /films/`

curl --location --request POST 'http://localhost:8081/films' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyMTgwMDA4NX0.t37yJFO_1Zs7oMLHcFsy2IGC-YQwm20OkVD5QzFSs2E' \
--data-raw '{
  "name": "KingKong",
  "description": "fiction",
  "rating": "3",
  "ticketPrice": "23",
  "country": "USA",
  "releaseDate": "2012-04-23",
  "genre": "FICTION",
  "photo": "asasasaasas"
}'

### Response

    HTTP/1.1 201 Created
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /films
    Content-Length: 93

    {"id":1,"name":"KingKong1","description":"fiction","rating":"3","ticketPrice":"23","country":"USA","releaseDate":"2012-04-23","genre":"FICTION","photo":"asasasaasas"}

## Get list of Films

### Request

`GET /films/`

  curl --location --request GET 'http://localhost:8081/films'

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    [{"id":101,"name":null,"description":null,"releaseDate":"2021-05-23","rating":null,"ticketPrice":null,"country":null,"genre":null,"photo":null},{"id":201,"name":null,"description":null,"releaseDate":"2021-05-23","rating":null,"ticketPrice":null,"country":null,"genre":null,"photo":null},{"id":301,"name":null,"description":null,"releaseDate":"2021-05-23","rating":null,"ticketPrice":null,"country":null,"genre":null,"photo":null},{"id":401,"name":null,"description":null,"releaseDate":"2021-05-23","rating":null,"ticketPrice":null,"country":null,"genre":null,"photo":null},{"id":501,"name":null,"description":null,"releaseDate":"2021-05-23","rating":null,"ticketPrice":null,"country":null,"genre":null,"photo":null},{"id":601,"name":null,"description":null,"releaseDate":"2021-05-23","rating":null,"ticketPrice":null,"country":null,"genre":null,"photo":null}]

## Get a specific film

### Request

`GET /films/id`

    curl --location --request GET 'http://localhost:8081/films/1'

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 36

    {"id":1,"name":"KingKong1","description":"fiction","rating":"3","ticketPrice":"23","country":"USA","releaseDate":"2012-04-23","genre":"FICTION","photo":"asasasaasas"}

## Get a non-existent film

### Request

`GET /films/id`

    curl --location --request GET 'http://localhost:8081/films/1333'

### Response

    HTTP/1.1 404 Not Found
    Status: 404 Not Found
    Connection: close
    Content-Type: application/json
    Content-Length: 35

    {"status":404,"reason":"Not found"}


