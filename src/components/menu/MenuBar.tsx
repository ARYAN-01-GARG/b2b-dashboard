import { useNavigate } from "react-router-dom"
import MenuLogo from "./MenuLogo"

function MenuBar() {
  const b2bList = [
    { name: "B2B Dashboard", icon: "dashboard.svg", path: '/' },
    { name: "Gym Lead Management", icon: "analytics.svg", path: '/gym-leads' },
    { name: "Gym Member Management", icon: "settings.svg", path: '/gym-members' },
    { name: "Support Center", icon: "settings.svg", path: '/support' },
    { name: "Marketing Management", icon: "support.svg", path: '/marketing' },
    { name: "B2B Management Setting", icon: "support.svg", path: '/b2b-settings' },
  ]

  const b2cList = [
    { name: "B2C Dashboard", icon: "dashboard.svg", path: '/b2c' },
    { name: "User Management", icon: "analytics.svg", path: '/user-management' },
    { name: "B2C Subscription Management", icon: "settings.svg", path: '/b2c-subscription' },
    { name: "Health Feature Tracking", icon: "reports.svg", path: '/health-tracking' },
    { name: "B2C Management Settings", icon: "support.svg", path: '/b2c-settings' },
  ]

  const navigate = useNavigate()

  const handleRedirect = (path: string) => {
    navigate(path)
  }
  const currentPath = window.location.pathname;

  return (
    <div className="w-76 bg-sidebar p-4 overflow-y-auto"
      style={{
        scrollbarWidth: 'none',
      }}
    >
      <div className="flex flex-col gap-4">
        <MenuLogo />

        {/* B2B MenuList */}
        <div className="flex flex-col gap-2 items-start w-full font-semibold text-lg">
          <span className="text-lg font-semibold mt-4 text-center w-full">B2B</span>
          {b2bList.map((item) => (
          <div key={item.name} className={`px-4 py-2 flex items-start gap-2 ${currentPath === item.path ? 'bg-theme-green rounded-sm text-white' : ''} w-full transition-all duration-100 cursor-pointer`} onClick={() => handleRedirect(item.path)}>
              {/* <img src={`/icons/${item.icon}`} alt={item.name} className="w-4 h-4" /> */}
              <span className="">{item.name}</span>
            </div>
          ))}
        </div>

        {/* B2C MenuList */}
        <div  className="flex flex-col gap-2 items-start w-full font-semibold text-lg">
          <span className="text-lg font-semibold text-center w-full">B2C</span>
          {b2cList.map((item) => (
            <div key={item.name} className={`cursor-pointer px-4 py-2 flex items-start gap-2 ${currentPath === item.path ? 'bg-[#28A745] rounded-sm text-white' : ''} w-full transition-all duration-100`} onClick={() => handleRedirect(item.path)}>
              {/* <img src={`/icons/${item.icon}`} alt={item.name} className="w-4 h-4" /> */}
              <span className="">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuBar