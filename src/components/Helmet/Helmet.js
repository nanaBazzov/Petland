import React from 'react';


// our documnet title - then we pass it to our components so the top title of the document will change
const Helmet = (props) => {

    document.title = 'PetLand -'  + props.title

    return(
        <div className="w-100">
            {props.children}
        </div>
    )
}


export default Helmet;