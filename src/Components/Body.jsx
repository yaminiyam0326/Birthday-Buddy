import React from "react";
import Article from "./Article";
import { useState } from "react";

function Body(){
    const [birthdayVal,setBirthdayVal]=useState(5);
    const [persons,setPersons]=useState([ {
        id: 1,
        name: 'Bertie Yates',
        age: 29,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
      },
      {
        id: 2,
        name: 'Hester Hogan',
        age: 32,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
      },
      {
        id: 3,
        name: 'Larry Little',
        age: 36,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      },
      {
        id: 4,
        name: 'Sean Walsh',
        age: 34,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      },
      {
        id: 5,
        name: 'Lola Gardner',
        age: 29,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      },]);

      const clearAll=() =>{
        setPersons([]);
        setBirthdayVal(0);
        val1=0;
      }

    return(
      
        <>
        <div className="h-screen flex items-center justify-center">
            <div className="bg-white w-[600px] rounded-md font-mono">
                <h1 className="py-2 px-12 text-3xl">{birthdayVal} Birthdays Today</h1>
                {
                  persons.map((person)=>(
                    <div className="py-2" key={person.id}>
                      <Article person={person}/>
                    </div>
                  ))
                }
                <div className="py-4 px-10"><button className=" w-[500px] bg-cyan-400 rounded-md" onClick={clearAll}>Clear All</button></div>
            </div>
        </div>
        </>
    );
}

export default Body;