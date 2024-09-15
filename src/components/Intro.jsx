import React from 'react';

function Intro() {
    return (
    <div className="flex items-center justify-center flex-col text-center pt-20 
    pb-6">
        <h1 className="text-4xl md:text-7xl dark:text-white 
        mb-1 md:mb-3 font-bold">Noah Payne</h1>
        <p className="text-base md:text-xl mb-3 font-medium">Fullstack Developer & Embedded Engineer</p>
        <p className="text-sm max-w-xl mb-6 font-bold">  
        Noah Payne is a young and vibrant BSc Electronics Engineering Computer Science graduate from Scotland based in Brighton garnering a total of 6 years professional industry experience working in multi-million pound London based Startups within the Food and International Property sectors.
        </p>
        <p className="text-sm max-w-xl mb-6 font-bold">
        Gaining fast recognition and promotion within the 3 years at Karakuri Ltd within the Machine Learning and Embedded System teams, expanding on the development of Semblr 1.0, which was trialled at Nandos & Ocado HQ in 2021 and backed by chef Heston Blumenthal.
        </p>
    </div>        
    )
}

export default Intro;

