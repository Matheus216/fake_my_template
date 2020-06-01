## Available Scripts

In the project directory, you can run:

### `npm start`


### In console to test request GET 

`GET /
$ curl -G "localhost:3000" 
       --data-urlencode "template=Hello {{name.firstName}}" `

###  response name random 

Hello Trevor 

### In console to test request POST

`POST /template $ curl -X POST 
       -H "Content-Type: application/json" 
       -d '{"template": "Hello {{name.firstName}}"}' 
       localhost:3000/template`
 
###  response name random 

Hello Helena

### In console to test request NotFound

 `GET /xablau (ou qualquer outro endereço)
$ curl localhost:3000/mario `


###  response not found 

Not found.


