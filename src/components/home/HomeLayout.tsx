import { Outlet } from "react-router-dom"
import MenuBar from "../menu/MenuBar"

function HomeLayout() {
  return (
    <main className="flex h-screen w-full">
        <MenuBar />
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
    </main>
  )
}

export default HomeLayout