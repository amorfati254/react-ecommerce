import React from "react";

export default function ProductCard() {
	return (
		<div class="card bg-base-100 shadow-xl">
			<figure>
				<img src="/src/assets/img/hero-img.jpg" alt="Shoes" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">Shoes!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</div>
	);
}
