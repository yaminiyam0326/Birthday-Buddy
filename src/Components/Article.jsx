import React from "react";

function Article(props){
    let person=props.person;
    return(
        <>
        <article className="flex ">
                <div className="px-12"><img className=" h-24 w-24 rounded-full" alt="Person1" src={person.image}/></div>
                <div>
                    <h1 className=" font-bold text-2xl">{person.name}</h1>
                    <p className="text-xl">{person.age} years</p>
                </div>
            </article>
        </>
    );
}

export default Article;