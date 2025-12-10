import React from "react";

const Header = ()=>{
    return(
    <div className="flex justify-evenly ">
        <h1 className="p-3 head"><a href="/">Dee'Voice</a></h1>
        <button className="ml-2 new btn mt-3"><a href="/">✨New</a></button>
    </div>
    )
}

export default Header