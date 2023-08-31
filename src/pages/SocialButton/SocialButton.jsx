import React from 'react';

import facebook from '../../pictures/icons/facebook.png';
import linkedin from '../../pictures/icons/linkedin.png';
import github from '../../pictures/icons/github.png';



const SocialButton = ({ link,pic }) => {


    const buttons = [
        { id: 1, web: "facbook" , link: "https://www.facebook.com/mohammedssamy1", pic: facebook },
        { id: 2, web: "linkedin" , link: "https://www.linkedin.com/in/mohammed-samy-a9641a223", pic: linkedin },
        { id: 3, web: "github" , link: "https://github.com/mohammedsanta", pic: github },
    ]

    const renderButtons = buttons.map((button) => (
        <div className="icon" key={button.id}>
            <a href={button.link} target="_blank"><img src={button.pic} alt="" /></a>
        </div>
     ));

    return (

        renderButtons

    )

}

export default SocialButton