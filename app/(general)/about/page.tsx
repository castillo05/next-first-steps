import {Metadata} from "next";

export const metadata : Metadata = {
    title: 'About',
    description: 'Description About'
}


export default function AboutPage(){
    return(
        <main className="flex flex-col itmes-center p-24">
            <span className="text-7xl">About Page</span>
        </main>
    )
}
