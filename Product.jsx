import React, { Component } from "react";
import Productlist from "./Productlist";
class Products extends Component {
  myproduct = [
    { Productid: 1, ProductName: "Mobile", price: 30000 },

    { Productid: 2, ProductName: "Laptop", price: 50000 },
    { Productid: 3, ProductName: "Tab", price: 25000 },
  ];

  state = {
    products: this.myproduct,
    showProducts: false,
  };
  handleclick = (value) => {
    this.setState({ showProducts: value });
    console.log(this.state.showProducts)
  };
  render() {
    return (
      <React.Fragment>
        {this.state.showProducts &&
        <div>
        {this.state.products.length > 0 ? (
          <Productlist productdata={this.state.products}>
            <h6>hey i am children of my parent</h6>
          </Productlist>
          // <table className="table table-stripped">
          //   <thead>
          //     <tr>
          //       <th>Product Id</th>
          //       <th> Laptop</th>
          //       <th> Tab</th>
          //     </tr>
          //   </thead>
          //   <tbody>
          //     {this.state.products.map((prod, index) => {
          //       return (
          //         <tr key={prod.Productid}>
          //           <td>{prod.Productid}</td>
          //           <td>{prod.ProductName}</td>
          //           <td>{prod.price}</td>
          //         </tr>
          //       );
          //     })}
          //   </tbody>
          // </table>
        ) : (
          "no product exsist"
        )}</div>
        }
        <button type="submit" onClick={()=>this.handleclick(this.state.showProducts ? (false):(true))}>
          {this.state.showProducts?"Hide Products":"Show Product"}
        </button>
      </React.Fragment>
    );
  }
}

export default Products;
