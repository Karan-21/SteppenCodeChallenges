SELECT 
 	EXTRACT(YEAR FROM orders.ordered_at) as year, 
 	EXTRACT(MONTH FROM orders.ordered_at) as month,
 	orders.customer_id,(
 	SELECT 
 		DISTINCT ON(to_char(date(orders.ordered_at),'Mon-YY'))
 		orders.customer_id,
 		orders.order_id,
 		orders.ordered_at
     FROM (
         SELECT * FROM orders ORDER BY orders.customer_id ASC
     ) 
)
 LEFT JOIN order_line_items ON orders.order_id = order_line_items.order_id
 GROUP BY orders.customer_id, orders.ordered_at, year, month
 ORDER BY orders.ordered_at ASC 

