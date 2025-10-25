import React from 'react'

export default function Fab({ bottom, icon }) {
    return (
        <div className={`fab ${bottom ? bottom : ""}`}>
            <button className="btn btn-lg btn-square btn-primary shadow-main/60 border-white/20 bg-main shadow-md">{icon}</button>
        </div>
    )
}
