# Front End Project

The project was made thinking about performance and scalability, using React Query looking for an easy management of states, requests, status and cache looking for a great solution if we have lists with large values and pagination, and also in its code structure.

I used some component libs like Material UI but also developed my own components to show diversity, also for styles.

The listing returns its users and 3 actions were created where he can delete, edit and view his data in a highlighted modal, I sought a clearer way for the user to view.

The site has the following flow:

in `/' the user should see the list of users

By clicking on one of the actions in the table, such as DETALIS, EDIT, DELETE, a modal will open where he will be able to visualize more of his data.

In the Edit flow, he will be able to view and change his data when confirming and the request is made.

In the Delete flow, he will be able to delete and view his data before confirming the action.

In the Detailhes flow he will only be able to visualize his data without any alteration or deletion.

# Prerequisites
Install [node.js](https://nodejs.org/en/) which includes [npm](https://npmjs.com)

## Running
To be able to run the project he must follow the following steps:

Run to install all project dependencies:
```bash
   npm install
```
Run to start the Project
```bash
   npm run start
```
After that, the project will run on `http://localhost:3000`