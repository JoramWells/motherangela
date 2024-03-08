import '../globals.css'

import { Providers } from "../providers"
import {Sidebar} from "../_components/dashboard/Sidebar"
import SidebarItems from '../_components/dashboard/SidebarItems'
const Dashboard = () => {
  return (
      <Providers>
        <Sidebar>
              <SidebarItems/>
        </Sidebar>
      </Providers>

  )
}

export default Dashboard