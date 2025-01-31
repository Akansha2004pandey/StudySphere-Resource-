import React from "react";

export default function SubjectLayout({children}:{
    children:React.ReactNode
}){
    return (
        <div>
            <div>MATERIALS</div>
        <div>
            {children}
        </div>
        </div>
    )

}