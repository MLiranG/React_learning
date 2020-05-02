import React from 'react';
import { Map } from 'immutable';
import './css/App.css';

const Welcome = ({style, names}) => { //names

    let styl = Map({display: style.display})
    let stylea;
    // console.log(stylea.get('display'))
    if (style.display == "block") {
        stylea = styl.set('display', 'none')
    } else if (style.display == "none") {
        stylea = styl.set('display', 'block')
    } 

    let namesArray = [] 

    // Object.keys(names).map(function(key) {
    //     return [names[key]];
    // });

    names.forEach(name => {
        namesArray.push(name.name)
    })
    
    console.log(namesArray)

    return (
        <div className="WelcomeText" style={{display: stylea.get('display')}} > 
            <h1> Hoi! {namesArray.join()} </h1> {/* {namesArray} */}
            <p>{names.name}</p>
        </div>
    )
}

export default Welcome