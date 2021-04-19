import React, { Component } from 'react';
class Productlist extends Component {
    state = {  }
    render() { 
        console.log(this.props)
        return (
            <React.Fragment>
                {this.props.children}

<table className="table table-stripped">
            <thead>
              <tr>
                <th>Product Id</th>
                <th> Laptop</th>
                <th> Tab</th>
              </tr>
            </thead>
            <tbody>
              {this.props.productdata.map((prod, index) => {
                return (
                  <tr key={prod.Productid}>
                    <td>{prod.Productid}</td>
                    <td>{prod.ProductName}</td>
                    <td>{prod.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
            </React.Fragment>
        );
    }
}
 
export default Productlist;