import React from "react";
import ProductCard from "./ProductCard";

export default function Products() {
	return (
		<div>
			<div>
				<h2 className="text-2xl text-center mt-8 font-bold">
					Our Latest Products
				</h2>
			</div>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 mx-10 gap-10">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</div>
	);
}
