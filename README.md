## Overview

This web application allows users to view car models for a selected make and year. It uses an API to fetch data and display results on the page. The project is built with Next.js 13 and utilizes Tailwind CSS for styling.

## Features

- Uses Next.js for page rendering
- Uses Tailwind CSS for styling
- Dynamically fetches car data from an API
- Displays car models for a selected make and year

## Technologies

- [Next.js](https://nextjs.org/) — A framework for server-side rendering React applications.
- [Tailwind CSS](https://tailwindcss.com/) — A CSS framework for rapid styling.
- [React](https://reactjs.org/) — A library for building user interfaces.
- [API](https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json) for fetching car models.

## Running the Project Locally

### 1. Clone the Repository

First, clone the repository to your local machine

```
git clone https://github.com/MelnychenkoJenny/car-dealer-app.git
cd car-dealer-app
```

### 2. Installing dependencies

Install all necessary dependencies using npm, yarn or pnpm:

```
npm install
yarn install
pnpm install
```
You also need to create .env.local file in the root, and add environment variables. The names can also be found in the env.default file

### 3. Start the local server

After installing the dependencies, start the local server:

```
pnpm dev
```
The project will be available at http://localhost:3000.

Or you can visit the live page [PAGE](https://car-dealer-app-snowy.vercel.app/)


