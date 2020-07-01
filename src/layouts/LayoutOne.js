import React from 'react'
import Slot from "../slot/Slot"

function LayoutOne(props) {

    console.log(props.slotProps);

    //let header = props.slotprops.header;
   // let content = props.slotprops.content;
    //let footer = props.slotprops.footer;

    //console.log(header, content, footer)

    return (
        <div>
            <div>
                <Slot name="header">{props.slotProps.header}</Slot>
            </div>
            <div>
                <Slot name="content">{props.slotProps.content}</Slot>
            </div>
            <div>
                <Slot name="footer">{props.slotProps.footer}</Slot>
            </div>
        </div>
    )
}

export default LayoutOne