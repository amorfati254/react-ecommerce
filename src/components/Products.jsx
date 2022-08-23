import React from "react";
import products from "../../public/products";
import ProductCard from "./ProductCard";

export default function Products() {
	const productList = [...products];
	return (
		<div>
			<div>
				<h2 className="text-6xl text-center mt-8 font-bold">
					Our Latest Products
				</h2>
			</div>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 mx-10 gap-10 mt-10 ">
				{productList.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</div>
	);
}
