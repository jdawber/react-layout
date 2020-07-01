import React from 'react'

function Slot(props) {
    return (
        <div>
            I am slot: <b>{props.name}</b>
            {props.children}
        </div>
    )
}

export default Slot
