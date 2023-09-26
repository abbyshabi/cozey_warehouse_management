const express = require('express');
const bodyParser = require('body-parser');
const { orders } = require('./data/orders');
const { products } = require('./data/products');

const app = express();

app.use(bodyParser.json());

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/orders', (req, res) => {
  res.json(orders);
});

app.get('/api/picking-list', (req, res) => {
  const pickingList = generatePickingList(orders);
  res.json(pickingList);
});

app.get('/api/packing-list/:orderId', (req, res) => {
  const { orderId } = req.params;
  const order = orders.find((o) => o.orderNumber == orderId);
  if (!order) {
    res.status(404).json({ error: 'Order not found' });
    return;
  }
  const packingList = generatePackingListForOrder(order);
  res.json(packingList);
});

app.get('/api/packing-list', (req, res) => {
  const allPackingLists = [];

  for (const order of orders) {
    const packingList = generatePackingListForOrder(order);
    allPackingLists.push(packingList);
  }

  res.json(allPackingLists);
});

function generatePickingList(orders) {
  const pickingList = {};
  for (const order of orders) {
    for (const lineItem of order.lineItems) {
      const boxName = lineItem.box;
      const quantity = lineItem.quantity;
      for (const product of products[boxName]) {
        if (!pickingList[product]) {
          pickingList[product] = 0;
        }
        pickingList[product] += quantity;
      }
    }
  }
  return pickingList;
}

function generatePackingListForOrder(order) {
  const packingList = {
    orderNumber: order.orderNumber,
    orderDate: order.orderDate,
    shipTo: order.shipTo,
    items: [],
  };

  for (const lineItem of order.lineItems) {
    const boxName = lineItem.box;
    const quantity = lineItem.quantity;

    const subItems = products[boxName].map((product) => ({
      name: product,
      quantity: quantity,
    }));

    packingList.items.push({
      boxName: boxName,
      subItems: subItems,
    });
  }

  return packingList;
}


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
