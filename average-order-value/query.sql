select distinct customers.name,count(*) as num_orders,sum(order_line_items.unit_price*order_line_items.quantity) as total_order_value,AVG(order_line_items.unit_price*order_line_items.quantity) as avg_order_value from customers inner JOIN orders on customers.customer_id=orders.customer_id INNER JOIN order_line_items on orders.order_id=order_line_items.order_id
inner join products on order_line_items.product_id=products.product_id group by customers.name
