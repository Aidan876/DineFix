import React from "react";
import { MenuList } from "../helpers/MenuList2";
import MenuItem1 from "./MenuItem1";
import "../styles/Menu.css";

function top3(){
    return (
        <div className="menu1">
          
          <div className="menuList1">
            {MenuList.map((menuItem, key) => {
              return (
                <MenuItem1
                  key={key}
                  image={menuItem.image}
                  name={menuItem.name}
                  
                />
              );
            })}
          </div>
        </div>
      );

}
export default top3