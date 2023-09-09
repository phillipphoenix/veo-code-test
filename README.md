# veo-code-test

A code test for applying for a job at Veo.

## Installing dependencies

First step is to open a terminal and navigate into each folder (`api` and `frontend`) and run `npm i` to install dependencies.

## Setting up environment

In the frontend project there is a `.env.template`. It should be copied as a new file called `.env.local`.
The variable `NEXT_PUBLIC_API_BASE_URL` should point to the URL you get from running the API with the path `/api`. For instance `http://localhost:3001/api`. When hosted, this should of course point to the hosted API's URL.

> Note: you can see the local API's URL, when running the API locally.

## Running the app

The application consists of a backend and a frontend.

You should run the backend first by navigating to the api folder and run the command `npm run start`.
This should serve the API and also give you the URL you can use in the environment file `.env.local`.

After making sure this is correct, navigate with another terminal to the frontend folder and run `npm run dev`.

This should serve the frontend app for use locally (in dev mode).

The website should look something like this after loading data from the backend:

![Frontend screenshot](/media/frontend-screenshot.png "frontend screenshot")
