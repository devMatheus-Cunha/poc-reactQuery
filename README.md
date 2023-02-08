# Frontend Project

The project was made thinking in perfomace and scability, using React Query seeking an easy management of state, requests, status and cache seeking a great solution in case we have lists with large values and paging. 

The site has the following flow:

in `/' the user should see the company list

Clicking on a company navigates to `/company/:companyId`, and in it the user sees a table of numbers that belong to that company.

Clicking on a number navigates to `number/:numberId`, where the user sees the details of the number.

On both screens, he has the option to go back to the previous one.

# Prerequisites
Instalar [node.js](https://nodejs.org/en/) que inclui [npm](https://npmjs.com)

## Running
To be able to run the project he must do the following steps: 

Run to install all dependencies of the project:
```bash
 npm install
```
Run to start the [api]
```bash
 npm run start
```
After that the project will be running at `http://localhost:3001`

## API
The REST API is based on [json-server](https://www.npmjs.com/package/), and the data is defined in the file [db.json](db.json). To start it, just run it:

```bash
npm run api
```

You should then have the API running at http://localhost:3000.