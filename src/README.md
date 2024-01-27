# MERN5 Express Server

Welcome to the MERN5 Express Server! This is my very first Express server designed to manage and showcase Pokémon data. I made it for The RockTheCode Bootcamp 2024.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Endpoints](#endpoints)
  - [Base Routes](#base-routes)
  - [Pokémon Routes](#pokémon-routes)
- [Database](#database)
  - [Data Seeding](#data-seeding)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- [MongoDB](https://www.mongodb.com/) installed and running locally
- Install dependencies with npm install
- To start server npm start

The server will be running at http://localhost:4001.

## Endpoints

### Base Routes

GET /: Home route that returns a welcome message.

### Pokémon Routes
GET /pokemon/: Retrieves information about all Pokémon.
GET /pokemon/:id: Retrieves information about a specific Pokémon by ID.
POST /pokemon/: Creates a new Pokémon entry.
PUT /pokemon/:id: Updates the Pokédex status of a Pokémon.
DELETE /pokemon/:id: Deletes a Pokémon entry.

## Database

The server connects to a MongoDB database named mern5db. The Pokémon data is stored in the pokemons collection.

## Data Seeding

Upon starting the server, the initial data seeding script is executed, clearing the existing data in the pokemons collection and inserting a predefined set of Pokémon data.

## Error Handling

404: Not Found - Returned for wrong URL requests.
500: Internal Server Error - General error handling for unexpected issues.
