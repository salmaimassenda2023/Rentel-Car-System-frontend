'use client';

import React from "react";
import {CustomButtonProps} from "@/types";

const CustomButton =({title,containerStyles,handleClick,btnType}:CustomButtonProps)=> {

    return(
        <div>
          <button  disabled={false} className={`${containerStyles} `}  type={btnType}onClick={handleClick}>
              <span className={'flex-1 '}>
               {title}
              </span>

          </button>
        </div>
    )

}

export default CustomButton