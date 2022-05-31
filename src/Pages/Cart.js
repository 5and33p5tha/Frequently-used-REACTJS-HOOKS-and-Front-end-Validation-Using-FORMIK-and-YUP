import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "./cart.css";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <table className="table table-striped table-hover mytable">
          {/* Table Hover adds hover effect, table striped adds striped color effect */}
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Product Details</th>
              <th scope="col">Product Images</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                {/* <img src='./Images/Image1.jpeg' alt='' height={'100px'} width={"175px"}></img> This is the standard form. Check https://validator.w3.org/#validate_by_upload for standard validation */}
                <img
                  src="https://www.apple.com/v/macbook-pro-14-and-16/a/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111170920"
                  alt=""
                  height={"100px"}
                  width={"175px"}
                ></img>
              </td>
              <td>
                <h4>Apple Macbook Pro 16 (2021)</h4>
                <p>
                  Apple M1 Max, 64GB Unified Memory, 8TB SSD Storage, $6598.98
                </p>
              </td>
              <td>
                <button className="btn btn-info me-2">Update</button>
                <button className="btn btn-info">Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                <img
                  src="https://media.wired.com/photos/5f4ecb34cc91b230ecb28b08/master/pass/Gear-Surface-Book-3-4-ways-SOURCE-Microsoft.jpg"
                  alt=""
                  height={"100px"}
                  width={"175px"}
                ></img>
              </td>
              <td>
                <h4>Microsoft Surface Book 3</h4>
                <p>intel Core i7, 32GB RAM, 2TB SSD Storage, $3999.99</p>
              </td>
              <td>
                <button className="btn btn-info me-2">Update</button>
                <button className="btn btn-info">Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
                <img
                  src="https://i1.wp.com/laptopmedia.com/wp-content/uploads/2021/08/dellxps1393102-in-1featured.jpg?fit=965%2C543&ssl=1"
                  alt=""
                  height={"100px"}
                  width={"175px"}
                ></img>
              </td>
              <td>
                <h4>Dell XPS 13 (2-in-1) </h4>
                <p>intel Core i7, 16GB RAM, 1TB SSD Storage, $1869.99</p>
              </td>
              <td>
                <button className="btn btn-info me-2">Update</button>
                <button className="btn btn-info">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
