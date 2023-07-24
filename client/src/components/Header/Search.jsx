import React from "react";

function Search() {
  return (
    <div >
       
       <input className="w-96  py-3 px-10"
          placeholder="I'm Shopping for "
          title='Search bar'
        />
        <button className="bg-yellow-500 py-3 px-4 font-semibold focus:ring-none  ">Search</button>
      
      {/* <input type="search"> </input> */}
    </div>
  );
}

export default Search;
