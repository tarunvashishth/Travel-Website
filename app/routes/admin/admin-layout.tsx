import { Outlet } from "react-router"

const AdminLayout = () => {
  return (
    <div className="admin-layout">MobileSidebar
      <aside className="w-full max-w-[270px] hidden lg:block">SideBar</aside>
      <aside className="children">
        <Outlet />
      </aside>
    </div>
  )
}

export default AdminLayout