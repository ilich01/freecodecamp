const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  );
};

ShoppingCart.defaultProps = {
  items: 0,
};

// Change code below this line

ReactDOM.render(<ShoppingCart />, document.getElementById("app"));
