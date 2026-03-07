import "../styles/Topbar.css"

function Topbar() {

  const user = JSON.parse(localStorage.getItem("finsightUser"))

  return (

    <div className="topbar">

      <div>
        <h2 className="topbarTitle">
          Dashboard
        </h2>

        <p className="topbarSubtitle">
          Welcome, {user?.name}
        </p>
      </div>

    </div>

  )
}

export default Topbar