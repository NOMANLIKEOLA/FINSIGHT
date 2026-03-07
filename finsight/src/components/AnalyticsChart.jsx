import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"

import { Line, Bar } from "react-chartjs-2"

import "../styles/Charts.css"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

function AnalyticsCharts() {

  const expenseData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Expenses",
        data: [1200, 900, 1400, 1000, 1600, 1100],
        backgroundColor: "#6366f1"
      }
    ]
  }

  const investmentData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Investment Growth",
        data: [5000, 5200, 5800, 6100, 6700, 7200],
        borderColor: "#4f46e5",
        backgroundColor: "rgba(79,70,229,0.2)",
        tension: 0.4
      }
    ]
  }

  return (

    <div className="chartsContainer">

      <div className="chartCard">
        <h3>Expense Analytics</h3>
        <Bar data={expenseData} />
      </div>

      <div className="chartCard">
        <h3>Investment Growth</h3>
        <Line data={investmentData} />
      </div>

    </div>

  )
}

export default AnalyticsCharts