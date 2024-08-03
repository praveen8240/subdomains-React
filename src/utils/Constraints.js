import CoiginiteHome from "../homes/CoiginiteHome";
import MainHome from "../homes/MainHome";


export const  APPS=[
    {
        subdomain:"www",
        app: MainHome,
        main:true,
    },
    {
        subdomain:"coiginite",
        app: CoiginiteHome,
        main:false,
    }
]