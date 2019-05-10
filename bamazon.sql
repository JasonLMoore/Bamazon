DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
item_id INTEGER NOT NULL,
product_name VARCHAR(255) NOT NULL,
department_name VARCHAR(255) NOT NULL,
price DECIMAL(10, 2),
stock_quantity INTEGER(10),
primary key(item_id)
);

SELECT * FROM products