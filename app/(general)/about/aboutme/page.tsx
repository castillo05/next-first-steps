import {Metadata} from "next";

export const metadata : Metadata = {
    title: 'About',
    description: 'Description About'
}


export default function AboutMePage(){
    return(
        <main className="flex flex-col itmes-center p-24">
            <span className="text-lg">Hola Mundo Me</span>
            <span className="text-7xl">AboutMe Page</span>
        </main>
    )
}
