import React, { useState, useEffect } from "react";



const SellerAdminPage = () => {
  const [productId, setproductId] = useState("");
  const [sellingPrice, setsellingPrice] = useState("");
  const [productName, setproductName] = useState("");

  const [productList, setproductList] = useState([]);

  // const [items, setItems] = useState([]);
  useEffect(() => {
    const productLists = JSON.parse(localStorage.getItem('productList'));
    console.log(productLists);
    if (productLists) {
      setproductList(productLists);
    }
  }, []);
  // const [key, setKey] = useState(() => {
  //   // getting stored value
  //   const saved = localStorage.getItem("productId");
  //   const initialValue = JSON.parse(saved);
  //   return initialValue || "";
  // });
 

  
  const productIdHandler = (event) => {
    setproductId(event.target.value);
  };

  const sellingPriceHandler = (event) => {
    setsellingPrice(event.target.value);
  };

  

  const productNameHandler = (event) => {
    setproductName(event.target.value);
  };

  const productSubmitHandler = (event) => {
    event.preventDefault();

    const productobj = {
      productId,
      sellingPrice,
      productName,
    };

    setproductList((prevList) => {
      const productList = [
        ...prevList,
        {
          sellingPrice: sellingPrice,
          productName: productName,
          productId: productId,
        },
      ];
      // console.log("tab",tab);
      
      return productList;
    });

   

    // localStorage.setItem(productobj.productId, JSON.stringify(productobj));

    setproductId("");
    setsellingPrice("");
    setproductName("");
  };
  useEffect(() => {
    
    localStorage.setItem("productList", JSON.stringify(productList));

  }, [productList]);
  

  const productDeleteHandler = (productid) => {
    const updatedProductList = productList.filter(prdt => prdt.productId !== productid)
        setproductList(updatedProductList);
        localStorage.removeItem(productid)
  };

  // var totalPrice = console.log(productList.reduce((a,v) => a=parseInt(a)+parseInt(v.sellingPrice) ,0 ))
  

  return (
    <div>
      <form>
        <label htmlFor="productid">Product ID</label>
        <input
          type="number"
          id="productid"
          value={productId}
          onChange={productIdHandler}
        ></input>

        <label htmlFor="sellingprice">Selling Price</label>
        <input
          type="number"
          id="sellingprice"
          value={sellingPrice}
          onChange={sellingPriceHandler}
        ></input>

        <label htmlFor="productname">Product Name</label>
        <input
          type="text"
          id="productname"
          value={productName}
          onChange={productNameHandler}
        ></input>

        <button type="submit" onClick={productSubmitHandler}>
          {" "}
          Add Product{" "}
        </button>
      </form>
      <h2>Products</h2>
      <div>
        
        <ul id="productList" className="productList">
          {productList.map((product) => (
            <li key={product.productId}>
              {/* {sellingPrice:sellingPrice ,productName:productName,productId:productId} */}
              {product.sellingPrice} - {product.productName}
              <button onClick={() => productDeleteHandler(product.productId)}>
                Delete
              </button>
            </li>
            // totalprice = totalprice + {product.sellingPrice}
          ))}
        </ul>
        {/* { var totalprice=0
        totalprice=totalprice + {sellingPrice}} */}
        {/* {console.log(productList.map((prdt) = (
            (prdt.reduce((a,v) => a=a+v.sellingPrice ,0 ))
        )))} */}

        {/* {  totalPrice = productList.reduce((a,v) => a=parseInt(a)+parseInt(v.sellingPrice) ,0 )} */}
        {/* <label>Total Value worth of Products : + "${totalPrice}" </label> */}
        <p>{`Total Value worth of Products :   ${productList.reduce((a,v) => a=parseInt(a)+parseInt(v.sellingPrice) , 0)} `}</p>
      </div>
    </div>
  );
};

export default SellerAdminPage;
