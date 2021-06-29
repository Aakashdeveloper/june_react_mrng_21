import React from 'react';

// function component
const Footer = (props) => {
    console.log(">>>>props in footer",props)
    return(
        <React.Fragment>
            <hr/>
            <center>
                <h2>&copy; Developer Funnel {props.year} {props.month}</h2>
            </center>
        </React.Fragment>
    )
}

export default Footer;