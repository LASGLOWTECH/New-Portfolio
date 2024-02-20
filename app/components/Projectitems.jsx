
"use-client"

import { useState } from "react";
import Data from "./portfolio";
import Bitems from "./bitems";
import Card from "./card";
// import { SiSalesforce } from "react-icons/si";
const Pdata = () => {


  const [item, setItems] = useState(Data);
  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (finditems) => {
    const newItem = Data.filter((newVal) =>  newVal.category === finditems);
    setItems(newItem);
  };
  return (


    <div className="">


      <div className=" bg-dark">

        <Bitems
          filterItem={filterItem}
          setItems={setItems}
          menuItems={menuItems} /> 

        <Card item={item} />


      </div>



    </div>









  );
}

export default Pdata;
