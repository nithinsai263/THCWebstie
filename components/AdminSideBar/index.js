import React from "react";
import {
  ProSidebar,
  Menu,
  SubMenu,
  MenuItem,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
} from "react-pro-sidebar";
import {
  FaTv,
  FaTshirt,
  FaShoppingBag,
  FaStop,
  FaCreditCard,
  FaUser,
} from "react-icons/fa";
import Link from "next/link";  
import "react-pro-sidebar/dist/css/styles.css";

import styles from "./index.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ProSidebar collapsed={false} width="20vw">
        <SidebarHeader>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img style={{ height: 40, opacity: 0.6 }} src={"/logo.png"} />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="circle" popperArrow={true}>
            <MenuItem icon={<FaTv />}>
              <Link href="/admin">
              <a>Dashboard</a>
              </Link>
            </MenuItem>
            <SubMenu title={"Users"} icon={<FaUser />}>
              <MenuItem icon={<FaTshirt />}>
                <Link href="/admin/allusers">
                <a>All Users</a>
                </Link>
              </MenuItem>
            </SubMenu>
            <SubMenu title={"Products"} icon={<FaTshirt />}>
              <MenuItem icon={<FaTshirt />}>
                <Link  href="/admin/uploaditem">
                <a>Upload Products</a>
                </Link>
              </MenuItem>
              <MenuItem icon={<FaTshirt />}>
                <Link href="/admin/activeproducts">
                <a>Active Products</a>
                </Link>
              </MenuItem>
              <MenuItem icon={<FaTshirt />}>
                <Link href="/admin/passiveproducts">
                <a>Passive Products</a>
                </Link>
              </MenuItem>
            </SubMenu>
              <SubMenu title={"Product Category"} icon={<FaShoppingBag />}>
              <MenuItem icon={<FaTshirt />}>
                <Link href="/admin/addcategory">
                <a>Add Category</a>
                </Link>
              </MenuItem>
              <MenuItem icon={<FaTshirt />}>
                <Link href="/admin/viewcategory">
                <a>View Category</a>
                </Link>
              </MenuItem>
            </SubMenu>
            <SubMenu title={"Orders"} icon={<FaShoppingBag />}>
              <MenuItem icon={<FaTshirt />}>
                <Link href="/admin/activeorders">
                <a>Active Orders</a>
                </Link>
              </MenuItem>
              <MenuItem icon={<FaTshirt />}>
                <Link href="/admin/passiveorders">
                <a>Passive Orders</a>
                </Link>
              </MenuItem>
            </SubMenu>
            <SubMenu title={"Issues"} icon={<FaStop />}>
              <MenuItem icon={<FaTshirt />}>
                <Link href="/admin/activeissues">
                <a>Active Issues</a>
                </Link>
              </MenuItem>
              <MenuItem icon={<FaTshirt />}>
                <Link href="/admin/passiveissues">
                <a>Passive Issues</a>
                </Link>
              </MenuItem>
            </SubMenu>
            <SubMenu title={"Coupon"} icon={<FaCreditCard />}>
              <MenuItem icon={<FaTshirt />}>
                <Link href="/admin/addcoupon">
                <a>Add Coupon</a>
                </Link>
              </MenuItem>
              <MenuItem icon={<FaTshirt />}>
                <Link href="/admin/activecoupons">
                <a>Active Coupon</a>
                </Link>
              </MenuItem>
              <MenuItem icon={<FaTshirt />}>
                <Link href="/admin/passivecoupons">
                <a>Passive Coupon</a>
                </Link>
              </MenuItem>
            </SubMenu>
          
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <h5 style={{ display: "flex", justifyContent: "center" }}>
            The Homie Company
          </h5>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
}

export default Sidebar;
