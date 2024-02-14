import React, { Component, Suspense, lazy } from "react";
import toast from "react-hot-toast";
import Loading from "./../../components/Loading/Loading";
import getAllProduct from "./../../services/getProduct";

import YeshteryNav from "./../../components/YeshteryNav/YeshteryNav";
import MainNavbar from "./../../components/MainNavbar/MainNavbar";

const ProductDetailsLazy = lazy(() =>
  import("./../../components/ProductDetails/ProductDetails")
);
const SimilarProductsLazy = lazy(() =>
  import("./../../components/SimilarProducts/SimilarProducts")
);
const FooterLazy = lazy(() => import("./../../components/Footer/Footer"));
const CartLazy = lazy(() => import("./../../components/Cart/Cart"));

export default class Home extends Component {
  state = {
    cartIsOPen: false,
    products: [],
    quantity: 1,
    cartItems: [],
    cartQuantity: 0,
  };

  handleOpenCart = () => {
    if (this.state.cartIsOPen === true) {
      this.setState({ cartIsOPen: false });
    } else {
      this.setState({ cartIsOPen: true });
    }
  };

  handleGetProducts = async () => {
    const products = await getAllProduct();
    this.setState({ products });
  };

  incrementQuantity = () => {
    let quantity = this.state.quantity;
    quantity += 1;
    this.setState({ quantity });
  };

  decrementQuantity = () => {
    let quantity = this.state.quantity;
    if (quantity > 1) quantity -= 1;
    else return;
    this.setState({ quantity });
  };

  handleAddToCart = (id) => {
    let allProducts = [...this.state.products];
    let cartItems = [...this.state.cartItems];
    let quantity = this.state.quantity;
    let cartQuantity = this.state.cartQuantity;

    // select a specific product by id
    let item = allProducts.filter((pro) => {
      return pro.id === id;
    });

    // for first time
    if (cartItems.length === 0) {
      cartItems.push({ ...item[0], quantity });
      cartQuantity += quantity;
    }
    // for other times
    else {
      cartItems.forEach((pro) => {
        // if product is not exist in cart
        if (pro.id !== id) {
          cartItems.push({ ...item[0], quantity });
          cartQuantity += quantity;
        }
        // if product is exist in cart
        else {
          pro.quantity += quantity;
          cartQuantity += quantity;
        }
      });
    }
    toast.success("Item Added Successfully");
    this.setState({ cartItems, cartQuantity });
  };

  handleRemoveProductFromCart = (id) => {
    let cartItems = [...this.state.cartItems];

    const newCartItems = cartItems.filter((pro) => {
      return pro.id !== id;
    });

    toast.success("Item Deleted Successfully");

    this.setState({ cartItems: newCartItems, cartQuantity: 0 });
  };

  componentDidMount() {
    this.handleGetProducts();
  }

  render() {
    return (
      <>
        <YeshteryNav />
        <MainNavbar
          openCart={this.handleOpenCart}
          cartQuantity={this.state.cartQuantity}
        />

        <Suspense fallback={<Loading />}>
          <ProductDetailsLazy
            product={this.state.products[6]}
            incre={this.incrementQuantity}
            decre={this.decrementQuantity}
            addTocart={this.handleAddToCart}
            quan={this.state.quantity}
          />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <SimilarProductsLazy products={this.state.products} />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <FooterLazy />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <CartLazy
            isOpen={this.state.cartIsOPen}
            openCart={this.handleOpenCart}
            removeItem={this.handleRemoveProductFromCart}
            cartItems={this.state.cartItems}
          />
        </Suspense>

        {/* <ProductDetails
          product={this.state.products[6]}
          incre={this.incrementQuantity}
          decre={this.decrementQuantity}
          addTocart={this.handleAddToCart}
          quan={this.state.quantity}
        /> */}
        {/* <SimilarProducts products={this.state.products} />
        <Footer />
        <Cart
          isOpen={this.state.cartIsOPen}
          openCart={this.handleOpenCart}
          removeItem={this.handleRemoveProductFromCart}
          cartItems={this.state.cartItems}
        /> */}
      </>
    );
  }
}
