# REST API For Pets Store

This is a simple API of two end points in pet store application

## Prerequisetes

- Node 14 or higher version
- mongodb 4.4.4 or higher version

or

- Docker
- Docker-Compose

## Install

```
    cd project_dir && npm install
```

Or

```
    cd project_dir && docker-compose up
```

## Important !

Regarding Challenge 2 the script in `app/scripts/generalizedSecondPriceAuctionCalculator`

## Run the app

    npm start

or to run in development mode with nodemon `npm run dev`

## Run the tests

    npm run test

# REST API

## Get All Bids on Specific Pet

### Request

`GET /pets/:petId/bids`

    curl -i -H 'Accept: application/json' http://localhost:3000/pets/60ae19e4fdef13906254ede2/bids/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

Example

```
    {
    "status": true,
    "code": "200",
    "msg": "",
    "data": {
        "_id": "60ae19e4fdef13906254ede2",
        "name": "dog",
        "bids": [
            {
                "_id": "60ae227cf32824a9758b4495",
                "user": "60ae2040fbce8b4f533fb5c7",
                "amount": 12
            }
        ]
    }
}
```

## Add New Bid on specific Pet

### Request

`POST /pets/:petId/bids`

    curl -i -H 'Accept: application/json' -d 'name=Foo&status=new' http://localhost:3000/pets/:petId/bids

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 OK
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36

Example

```
{
    "status": true,
    "code": "200",
    "msg": "bid added successfully"
}
```
