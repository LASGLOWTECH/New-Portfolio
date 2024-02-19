

import Data from "./portfolio";

const Bitems = ({ filterItem, setItems, menuItems }) => {
  return (
    <>

 
   <div className="flex justify-center pt-5 " id="btn">
        {menuItems.map((Val, id) => {
          return (
            <button
              className=" font-bold text-darkBlue text-base py-2 px-2 mx-1 shadow-white-2xl rounded-md bg-gradient-to-tr from-amber2 via-amber1 to-amber2 hover:bg-white  "
              onClick={() => filterItem(Val)}
              key={id}>
              {Val}
            </button>
          );
        })}

        <button
          className=" text-ash2  text-base  font-bold hover:bg-amber1 border border-amber1 w-100  px-5 py-2 rounded-lg"
          onClick={() => setItems(Data)}
        >
          All
        </button>


      </div>




   
    </>
  );
};

export default Bitems;