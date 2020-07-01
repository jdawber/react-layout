import React from 'react'

import ComponentIndex from "../ComponentIndex"
import LayoutsIndex from "../LayoutsIndex"

//import LayoutOne from './../layouts/LayoutOne'
import Header from './../components/Header'
import ComponentOne from './../components/ComponentOne'
import ComponentTwo from './../components/ComponentTwo'
import Footer from './../components/Footer'

import pages from './../configuration/pages.json';
import layouts from './../configuration/layouts.json';
import components from './../configuration/components.json';

const componentOne = <ComponentOne/>

const slot1Contents = [<Header/>]
const slot2Contents = [componentOne, <ComponentTwo/>, componentOne]
const slot3Contents = [<Footer/>]

const page = pages["page1"];
const layout = layouts[page.layoutId];
const slots = page.slots;

let slotProps = {}

for (const slot in layout.slots) {
    
    let slotContents = []

    for (const pageSlot in page.slots) {

        if (slot === pageSlot) {

            for (const component of page.slots[pageSlot]) {

                console.log(component);

                const componentType = components[component].component;
                
                const MyComponent = ComponentIndex[componentType];

                slotContents.push(<MyComponent {...components[component].props} />);

            }            

        }

    }

    slotProps[slot] = slotContents;

}

const PageOne = Layout => {
    return () => {
        return (
            <Layout
                slotProps={slotProps}
                //slot1={slot1Contents}
                //slot2={slot2Contents}
               //slot3={slot3Contents}
            />
        )
    }
}

const PageLayout = LayoutsIndex[page.layoutId]

//console.log(PageLayout);

export default PageOne(PageLayout)