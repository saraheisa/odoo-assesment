table products (
    id number auto increment primay key,
    name string,
    price number,
    created_at date default now,
)
//suppose if flag is true then it's private
table categories (
    id number auto increment primay key,
    name string,
    flag boolean default false
)

// there is a many to many relationship between products and categories so a junction table is needed

table products_categories (
    product_id number forign key products(id),
    category_id number forign key categories(id)
)

// using inner join here because 

SELECT p.*
FROM products_categories pc
INNER JOIN products p ON p.id = pc.product_id
INNER JOIN categories c ON c.id = pc.category_id
WHERE c.flag = false
GROUP BY p.id
HAVING COUNT(p.id) > 5
