import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";
import CartListItem from "./CartListItem";

export default function CartCard() {
	const { cartList, setCartList } = useContext(CartContext);

	const removeCartItem = (id) => {
		let updateCartList = [];
		for (let i = 0; i < cartList.length; i++) {
			if (cartList[i].id !== id) {
				updateCartList.push(cartList[i]);
			} else {
				cartList[i].quantity = 1;
			}
		}
		setCartList([...updateCartList]);
	};
	const totalPriceCalc = () => {
		let total = 0;
		if (cartList) {
			for (let product of cartList) {
				total += Number(product.price) * product.quantity;
			}
		}

		return total;
	};
	return (
		<div class="p-4 w-full max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
			<div class="flex justify-between items-center mb-4">
				<h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
					Product Cart
				</h5>
				<a
					href="#"
					class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 ml-4"
				>
					Check Out
				</a>
			</div>
			<div class="flow-root">
				<ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
					{cartList.map((product) => {
						return (
							<li class="py-3 sm:py-4" key={product.id}>
								<CartListItem
									product={product}
									removeCartItem={removeCartItem}
								/>
							</li>
						);
					})}
				</ul>
			</div>
			<div class="flex justify-between items-center mt-4">
				<h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
					Total Price:
				</h5>
				<span class="text-base font-semibold text-gray-900 dark:text-white">
					${totalPriceCalc()}
				</span>
			</div>
		</div>
	);
}
