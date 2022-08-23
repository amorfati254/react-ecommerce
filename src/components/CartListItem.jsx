import React from "react";

export default function CartListItem({ product, removeCartItem }) {
	let productName = product.name;
	let totalPrice = product.quantity * product.price;
	const handleClick = () => {
		removeCartItem(product.id);
	};
	return (
		<div class="flex items-center space-x-4">
			<div class="flex-shrink-0 cursor-pointer" onClick={handleClick}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 fill-red-600"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
			<div class="flex-1 min-w-0">
				<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
					{productName}
				</p>
				<p class="text-sm text-gray-500 truncate dark:text-gray-400">
					Quantity: {product.quantity}
				</p>
			</div>
			<div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
				${totalPrice}
			</div>
		</div>
	);
}
