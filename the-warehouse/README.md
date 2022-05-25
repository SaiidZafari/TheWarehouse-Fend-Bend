# The Warehouse - React App

## The Task

The assignment is to implement a warehouse software. This software should hold articles, and the articles should contain an identification number, a name and available stock.
It should be possible to load articles into the software from a file, see the attached inventory.json.
The warehouse software should also have products, products are made of different articles. Products should have a name, price and a list of articles of which they are made from with a quantity.
The products should also be loaded from a file, see the attached products.json.

The warehouse should have at least the following functionality:

- Get all products and quantity of each that is an available with the current inventory
- Remove(Sell) a product and update the inventory accordingly


## In this application 

- The given data is placed in a folder called data.
- The data is imported to the relevant pages.
- Show inventory in Warehouse page.
- Show products in products page.
- Data transfer between Warehouse and Products tabs is established by a State in App.js.
- Removing a product will update the data in the warehouse.