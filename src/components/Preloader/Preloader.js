import React from 'react'
import "./Preloader.css"

function Preloader() {
    return (
        <div>
            <div id="preloader" class="loader-mask">
                <div class="loader">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Preloader