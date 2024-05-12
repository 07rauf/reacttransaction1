import React from 'react'
import './component1.css'
const Component1 = ({ Closed }) => {
  return (
    <div>
      <div className="form1">
        <input name="to" type="text" placeholder="FROM" /><br />
        <input name="from" type="text" placeholder="TO" /><br />
        <input name="amount" type="text" placeholder="AMOUNT" /><br />
        <button type="button" className="addbuttonn">
          Change Api
        </button>
        <button type="button" className="closebutton" onClick={Closed}>
          Close
        </button>
      </div>
    </div>
  )
}

export default Component1
