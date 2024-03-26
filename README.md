<h1 align="center"><strong>REST API Product</strong></h1>

<p align="center">This repository contains a RESTful API for managing products. It allows users to perform CRUD operations (Create, Read, Update, Delete) on product data.</p>

## Table of Contents
1. [Getting Started](#getting-started)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Starting MongoDB](#starting-mongodb)
5. [Usage](#usage)
6. [API Endpoints](#api-endpoints)
7. [Built With](#built-with)
8. [Contributing](#contributing)
9. [License](#license)
10. [Acknowledgements](#acknowledgements)

## Getting Started
To get started with REST API Product, follow the steps below:

## Prerequisites
- Node.js
- npm
- MongoDB

## Installation
1. Clone the repository:





This repository contains a RESTful API for managing products. It allows users to perform CRUD operations (Create, Read, Update, Delete) on product data.

Table of Contents
Getting Started
Prerequisites
Installation
Starting MongoDB
Usage
API Endpoints
Built With
Contributing
License
Acknowledgements



Getting Started
To get started with REST API Product, follow the steps below:

Prerequisites
Node.js
npm
MongoDB
Installation
1) Clone the repository:

git clone https://github.com/your-username/rest-api-product.git

2) Install dependencies:
   cd rest-api-product
   npm install
   
3) Starting MongoDB
Start MongoDB using the following command:
brew services start mongodb-community

Usage
You can now start the server using the following command:

npm start
The server will be running on http://localhost:4500.

API Endpoints
POST /api/v1/product/new: Create a new product
GET /api/v1/products: Get all products
PUT /api/v1/product/:id: Update a product by ID
DELETE /api/v1/product/:id: Delete a product by ID
Built With
Express.js
MongoDB
Mongoose
Body-parser
Contributing
Contributions are welcome! Please read the contributing guidelines for more information.

License
This project is licensed under the MIT License - see the LICENSE file for details.

