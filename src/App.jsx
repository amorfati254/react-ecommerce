import { createContext, useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Products from "./components/Products";

export const CartContext = createContext();

function App() {
	const [cartList, setCartList] = useState([]);

	return (
		<div className="">
			<CartContext.Provider value={{ cartList, setCartList }}>
				<Nav />
				<Hero />
				<Products />
				<Footer />
			</CartContext.Provider>
		</div>
	);
}

export default App;
