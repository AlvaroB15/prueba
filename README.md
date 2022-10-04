# PRUEBA TECNICA - ALVARO BEGAZO CARHUAYO

- Si se desea hacer en docker, el 8000 se cambia por un puerto que uno desee y que este libre claro esta

```
docker pull alvarob15/prueba-tecnica:latest

docker run -d -p 8000:4000 alvarob15/prueba-tecnica

```

URL de los lambdas.

POST ```http://localhost:4000/card```



```
    // Body
    {
        "token": "AzrHlhxvwQEdZ3Nm"
    }

    // Headers 
    Content-Type            application/json
    token_authorization     pk_test_LsRBKejzCOEEWOsw

```

POST ```http://localhost:4000/token```

La data provisional para las pruebas 

```
    // Body
    {
        "email": "prueba.test@gmail.com",
        "card_number": "4557880616004374",
        "cvv": "123",
        "expiration_year": "2027",
        "expiration_month": "12"
    }

    // Headers 
    Content-Type            application/json
    token_authorization     pk_test_LsRBKejzCOEEWOsw

```

Para solo importar un .json en el postman, descargar del siguiente link

https://drive.google.com/file/d/1ml4cSIxJ0vH3YuhYwX1NKphBgnXAdFxP/view?usp=sharing


Para poder ejecutar el linter

```npm run lint ```

Para hacer el build de produccion

```npm run build```

## Para levantar de forma local, se realizo otro proyecto, ese fue el primero, pero luego se cambio la estructura y salio este repo para el lambda.

```npm run develop```

Debes tener instalado el mongo, y se creara el database y collection solo, solo se necesita tener instalado el mongo (se agregara el .env)

El puerto a usar es el 4000, si esta en uso, se debe cambiar en el archivo .env
