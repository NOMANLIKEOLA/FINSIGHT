import Sidebar from "../components/Sidebar"
import StatCard from "../components/StatCard"
import "../styles/Dashboard.css"
import { useNavigate } from "react-router-dom"
import AnalyticsCharts from "../components/AnalyticsChart"
import Topbar from "../components/Topbar"

function Dashboard() {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    navigate("/login")
  }

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="dashboardContent">

        <Topbar />  

        <button className="logoutBtn" onClick={handleLogout}>
              Logout
        </button>

        <div className="statsGrid">

          <StatCard
            title="Total Balance"
            value="$24,500"
          />

          <StatCard
            title="Monthly Spending"
            value="$2,150"
          />

          <StatCard
            title="Investment Growth"
            value="+8.2%"
          />

          <StatCard
            title="Savings"
            value="$12,300"
          />

        </div>

            <AnalyticsCharts />

        <div className="insights">

          <h2>Investment Insights</h2>

          <div className="insightCard">
            Technology stocks are trending upward this quarter.
          </div>

          <div className="insightCard">
            Your spending on food increased by 12 percent this month.
          </div>

        </div>

      </div>

    </div>

  )
}

export default Dashboard