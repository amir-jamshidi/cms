import { InventoryRounded , SettingsRounded,  DashboardRounded , PeopleAltRounded , GroupAddRounded , GroupRemoveRounded, CommentRounded, CommentsDisabled, AddToPhotosRounded, DisabledByDefaultRounded} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  return (
    <>
      <div className="col-3"></div>
      <div className="col-3 sidebar-parent">
        <div className="sidebar">
          {/* Main */}
          <div className="box-group">
            <p className="group-title">صفحه اصلی</p>
            <ul className="group-list">
              <NavLink className="link-page" to="/">
                <li className="group-item">
                  <DashboardRounded />
                  <span className="item-title">نمایش داشبورد</span>
                </li>
              </NavLink>
            </ul>
          </div>

          {/* Users */}
          <div className="box-group">
            <p className="group-title">مدیریت کاربران</p>
            <ul className="group-list">
              <NavLink
                className={(link) =>
                  link.isActive ? "active link-page" : "link-page"
                }
                to="/users"
              >
                <li className="group-item">
                  <PeopleAltRounded />
                  <span className="item-title">نمایش کاربران</span>
                </li>
              </NavLink>
              <NavLink
                className={(link) =>
                  link.isActive ? "active link-page" : "link-page"
                }
                to="/add-user"
              >
                <li className="group-item">
                  <GroupAddRounded />
                  <span className="item-title">افزودن کاربر</span>
                </li>
              </NavLink>
              <NavLink
                className={(link) =>
                  link.isActive ? "active link-page" : "link-page"
                }
                to="/users-block"
              >
                <li className="group-item">
                  <GroupRemoveRounded />
                  <span className="item-title">کاربران مسدود شده</span>
                </li>
              </NavLink>
            </ul>
          </div>

          {/* Products */}
          <div className="box-group">
            <p className="group-title">مدیریت محصولات</p>
            <ul className="group-list">
              <NavLink
                className={(link) =>
                  link.isActive ? "active link-page" : "link-page"
                }
                to="/products"
              >
                <li className="group-item">
                  <InventoryRounded />
                  <span className="item-title">نمایش محصولات</span>
                </li>
              </NavLink>
              <NavLink
                className={(link) =>
                  link.isActive ? "active link-page" : "link-page"
                }
                to="/add-product"
              >
                <li className="group-item">
                  <AddToPhotosRounded />
                  <span className="item-title">افزودن محصول</span>
                </li>
              </NavLink>
              <NavLink
                className={(link) =>
                  link.isActive ? "active link-page" : "link-page"
                }
                to="/products-block"
              >
                <li className="group-item">
                  <DisabledByDefaultRounded />
                  <span className="item-title">محصولات تمام شده</span>
                </li>
              </NavLink>
            </ul>
          </div>

          {/* Comments */}
          <div className="box-group">
            <p className="group-title">مدیریت نظرات</p>
            <ul className="group-list">
              <NavLink
                className={(link) =>
                  link.isActive ? "active link-page" : "link-page"
                }
                to="/comments"
              >
                <li className="group-item">
                  <CommentRounded />
                  <span className="item-title">نمایش نظرات</span>
                </li>
              </NavLink>
              <NavLink
                className={(link) =>
                  link.isActive ? "active link-page" : "link-page"
                }
                to="/comments-block"
              >
                <li className="group-item">
                  <CommentsDisabled />
                  <span className="item-title">نظرات مسدود شده</span>
                </li>
              </NavLink>
            </ul>
          </div>

  {/* Settings */}
  <div className="box-group">
            <p className="group-title">مدیریت سایت</p>
            <ul className="group-list">
              <NavLink
                className={(link) =>
                  link.isActive ? "active link-page" : "link-page"
                }
                to="/setting"
              >
                <li className="group-item">
                  <SettingsRounded />
                  <span className="item-title">تنظیمات سایت</span>
                </li>
              </NavLink>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
};
export default SideBar;
