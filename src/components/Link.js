import React from "react";
import PropTypes from "prop-types";

/**
 * 
 * @param {bool} active check whether if todo item is active or not 
 */
const Link = ({active, children, onClick }) => {
        if(active){
            return <span>{ children }</span>
        }

        return (
            <a 
                href=""
                onClick={ e => {
                    e.preventDefault()
                    onClick()
                }}
                >
                {
                    //print childre
                    children
                }
                </a>
        )
        
}


//add some validations throught prop-types
Link.propTypes = {

    active:PropTypes.bool.isRequired,
    children:PropTypes.node.isRequired,
    onClick:PropTypes.func.isRequired

}

//export it
export default Link;