import {Metadata} from "next";

export const metadata : Metadata = {
    title: 'Contact',
    description: 'Description Contact',
    keywords: ['contact']
}
export default function ContactPage(){
    return(
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}
