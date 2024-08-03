import { APPS } from "./Constraints";

export const getApp=() =>{
    console.log(window.location.hostname)
    const subdomain=getSubDomain(window.location.hostname)
    if(subdomain===""){
        const main=APPS.find((app)=>app.main)
        if(!main)throw new Error("must have a main page")
        return main.app
    }
    else{
        const app= APPS.find((app)=>app.subdomain===subdomain)
        if(!app)throw new Error("No subdomain found")
        return app.app
    }
}

function getSubDomain(location) {
    const locationParts = location.split(".");
    let sliceTill = -2;
    const isMainWebsite = locationParts.slice(-1)[0] === "localhost";
    if (isMainWebsite) {
        sliceTill = -1;
    }
    return locationParts.slice(0, sliceTill).join(".");
}
