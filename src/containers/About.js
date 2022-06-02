import React from "react";
import kerem from './images/kerem.jpeg'
import melike from './images/melike.JPG'
import selami from './images/selami.jpeg'
import style from './css/style.css'

export default function About() {
    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>About</h2>
            <b>Team</b>
            <p>Furkan Kerem Selimoğlu</p>
            <p>Melike Akal</p>
            <p>Selami Karakaş</p>
            <div>
                <img id="kerem" className={`aboutImg`} style={style} src={kerem} alt="Kerem" /><img />
                <img id="melike" className={`aboutImg`} style={style} src={melike} alt="Melike" /><img />
                <img id="selami" className={`aboutImg`} style={style} src={selami} alt="Selami" /><img />
            </div>
        </main>
    );
}