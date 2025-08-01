import { useState } from "react"

const ManageData = () => {
    let [someData, setSomeData] = useState(12)

    alert(someData, setSomeData)

    return (
    <div>
        <p>{someData}</p>
        <button
            onClick={() => setSomeData(15)}>Aumentar valor</button>
    </div>
  )
}

export default ManageData