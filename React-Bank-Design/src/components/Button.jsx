import React from "react";

const Button = ({styles}) =>{
    return (
        <button type="button" className={`py-4 px-6 bg-blue-gradient text-primary rounded-lg 
        font-poppins text-lg font-medium outline-none ${styles}`}>
            Get Stared 
        </button>
    )
}

export default Button