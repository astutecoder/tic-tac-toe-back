Tic Tac Toe Backend
===================
This project is meant to work along with **[Tic Tac Toe Frontend](https://github.com/astutecoder/tic-tac-toe-front "Frontend Project")** to store gameplay activity log.

## Prerequisites

> if **Docker Client** is not installed in your system, you must need dedicated environment setup.
- Nodejs
- MongoDB  

**Note:** in case of no docker, you must update *mongodb connection url* manually. You can find these url in `/db/db.js`

## Set-up

[Download](https://github.com/astutecoder/tic-tac-toe-back/archive/dev.zip "download zip file") or [Clone](https://github.com/astutecoder/tic-tac-toe-back.git "copy project https link") this project in your desired location.  
If you have docker client installed in your system, open your favourite terminal / command line and change location to your project directory. Now run the following command:

```javascript
docker-compose up --build
```

if you want to run docker containers in demon mode:
```javascript
docker-compose up -d --build
```

*Incase you don't have docker client*  
Run the following commands:
```javascript
npm install
```
after the installation is completed, run:
```javascript
npm start
```
project will run on port ***4567***. 

**Note:** Frontend application will consume api calls from this port. If you want to change this port number, then you must change frontend application's api url.

## API endpoints
**POST**  
`/activity/create` will return data in JSON format.  
Request body example:
```
{
    "sessionId": "9c6059de-4c34-4f7b-8efc-3a7531b955ef",
    "action": "Game Started",
    "timestamp": 1599497822189
}
```
**GET**  
`/activity` to get all activities.  
Response data example:
```
{
    "status": true,
    "data": [
        {
            "_id": "5f5b0a18de2bd6001fcd9199",
            "sessionId": "9c6059de-4c34-4f7b-8efc-3a7531b955ef",
            "action": "Game Started",
            "timestamp": 1599801880310,
            "__v": 0
        },
        {
            "_id": "5f5b0b52de2bd6001fcd919a",
            "sessionId": "9c6059de-4c34-4f7b-8efc-3a7531b9551e",
            "action": "Game Started",
            "timestamp": 1599802194516,
            "__v": 0
        }
    ]
}
```

`/activity/<sessionId>` to get all activities of specific session  
Response data example:
```
{
    "status": true,
    "data": [
        {
            "_id": "5f5b0a18de2bd6001fcd9199",
            "sessionId": "9c6059de-4c34-4f7b-8efc-3a7531b955ef",
            "action": "Game Started",
            "timestamp": 1599801880310,
            "__v": 0
        }
    ]
}
```
___
Go to **[Tic Tac Toe Forntend Project](https://github.com/astutecoder/tic-tac-toe-front)**
___