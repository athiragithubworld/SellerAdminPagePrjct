import React,{useState} from "react";

import SellerAdminPage from "./Components/SellerAdminPage";

function App() {
  // const [keys, setKey] = useState(() => {
  //   // getting stored value
  //   const saved = localStorage.getItem("");
  //   const initialValue = JSON.parse(saved);
  //   return initialValue || "";
  // });
  return (
    <div>
      
      <SellerAdminPage></SellerAdminPage>
      {/* <h2>Let's get started!</h2> */}
    </div>
  );
}

export default App;
