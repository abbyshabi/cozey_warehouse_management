# Warehouse Management Application README

Welcome to the Warehouse Management Application!

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Features](#features)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Warehouse Management Application is a powerful tool designed to streamline order management and warehouse operations. Whether you're a warehouse team managing orders or a user looking to efficiently process orders, our application can assist you in organizing and fulfilling customer requests.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following requirements in place:

- Node.js and npm installed on your system.

### Installation

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/your-username/warehouse-management-app.git
   ```

2. Navigate to the project folder:

   ```
   cd warehouse-management-app
   ```

3. Install dependencies in both FE/ordersort_fe and BE folders:

   ```
   npm install 
   ```

## Usage

1. Start the application:

#### BE 
   ```
   npm start 
   ```

#### FE
 ```
   npm run dev
   ```

2. Access the application in your web browser at `http://localhost:3000`.

3. Use the Warehouse Management Application to:

   - **Create Orders**: Add new orders to the system.
   - **Generate Picking Lists**: Automatically generate lists for picking items in the warehouse.
   - **View Packing Lists**: Access packing lists for each order and see the items to be packed.
   - **Streamline Order Fulfillment**: Improve efficiency in managing orders and inventory.

## Endpoints

Here are the API endpoints that you can use with this application:

1. **Create Order**
   - **Endpoint:** `/api/orders`
   - **Description:** Allows users to create a new customer order. Users can specify the order details, line items, shipping address, and customer information.

2. **Generate Picking List**
   - **Endpoint:** `/api/picking-list`
   - **Description:** Automatically generates a picking list for the warehouse team based on the orders received. This endpoint provides a list of items that need to be picked from the warehouse shelves for a given day's orders.

3. **View Packing List by Order ID**
   - **Endpoint:** `/api/packing-list/:orderId`
   - **Description:** Retrieves a packing list for a specific order identified by its unique order ID. Users can see a detailed list of items that need to be packed for a specific customer order.

4. **View All Packing Lists**
   - **Endpoint:** `/api/packing-list/all`
   - **Description:** Retrieves all packing lists for all orders in a single response. Users can see a summary of packing lists for all customer orders.

Please ensure that these endpoints are properly documented in your application, and users are provided with the necessary information on how to make requests to these endpoints, including any required request payloads and expected response formats. Additionally, you may consider implementing authentication and authorization mechanisms to secure these endpoints, depending on your application's requirements.

## Features

- **Picking Lists**: Automatically generate picking lists for warehouse staff.
- **Packing Lists**: View packing lists for individual orders, including sub-items.
- **Efficient Workflow**: Streamline the order fulfillment process for your warehouse.

## Troubleshooting

- If you encounter any issues or have questions, please refer to our [Troubleshooting Guide](#) for assistance.
- For additional support, please contact our [Support Team](#) or [submit an issue](https://github.com/abbyshabi/warehouse-management-app/issues).

## Contributing

We welcome contributions from the community! If you'd like to contribute to the Warehouse Management Application, please follow our [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE.md).
