const orders = [
    {
      orderNumber: 1,
      orderDate: "September 15th, 2023",
      lineItems: [
        { box: "Valentines Box", quantity: 1 },
        { box: "Birthday Box", quantity: 1 },
        { box: "Client Gift Box", quantity: 1 },
      ],
      shipTo: {
        name: "John Smith",
        address: "100 Dundas Street East",
      },
    },
    {
      orderNumber: 2,
      orderDate: "September 15th, 2023",
      lineItems: [
        { box: "Valentines Box", quantity: 1 },
      ],
      shipTo: {
        name: "Rob Smith",
        address: "100 Queen Street East",
      },
    },
  ];
  module.exports = { orders };