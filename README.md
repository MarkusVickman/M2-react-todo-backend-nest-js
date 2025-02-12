# Nest.JS API
Repot innehåller en Nest.Js backend med en CRUD api som ansluter till en MySql-databas. Apin är publicerad i en docker-container till Google Cloud Run.
Nest.Js kändes lite mycket först men jag lärde mig uppskatta strukturen och allt som följer med gratis när ramverket används. Modulerna för "ORM", felhantering och validering har varit klockrena och publiceringen var enkel.

### att göra-inlägg
Apiet hanterar att göra-lista

###  
När id krävs skickas det med som en html-parameter.
POST kräver name, description, set och rep.

## Återskapa
Om du vill testa själv kan du klona och återskapa projektet.
Projektet skapades med version 22.11.0.

### Project setup
Installera nest.js och alla dependencies.

```bash
     npm install -g @nestjs/cli
     npm install
```

Spara anslutningsinställningar till din MySql-databas i en .env i rootkatalogen enligt följande:

     
        DB_HOST=din host
        DB_PORT= din port
        DB_USERNAME=ditt användarnamn
        DB_PASSWORD= ditt lösenord
        DB_DATABASE= din databas

    
Tabeller från /entities/.entity.ts-filerna kommer att skapas och scynkas automatiskt. Så inga tabeller behöver skapas av användaren. Dock bör synchronize ändras till false i filen database.prividers.ts efter publicering för att undvika dataförluster om scheman ändras.

### Testköra lokalt
```bash
     npm run start
```

### Publicera
Projektet kan publiceras med docker till vald tjänst där databas variabler från .env-filen ska sparas som enviremental secrets. Följande dockerfil(finns i repot) används vid publicering:

```bash
     # Use the official Node.js image as the base image
     FROM node:22.11.0
     
     # Set the working directory inside the container
     WORKDIR /usr/src/app
     
     # Copy package.json and package-lock.json to the working directory
     COPY package*.json ./
     
     # Install the application dependencies
     RUN npm install
     
     # Copy the rest of the application files
     COPY . .
     
     # Build the NestJS application
     RUN npm run build
     
     # Expose the application port
     EXPOSE 3000
     
     # Command to run the application
     CMD ["node", "dist/main"]
```


### Skapad av MARKUS VICKMAN (MAVI2302) 
