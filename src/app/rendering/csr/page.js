'use client'

import { useEffect, useState } from "react"

export default function Csr() {
    const [breeds, setBreeds] = useState([])
    useEffect(() =>{
        fetch('https://api.thedogapi.com/v1/breeds')
            .then(res => res.json())
            .then(data => setBreeds(data))
    })

    return(
        <>
            <h1>Example CSR page</h1>
            <ul>
                {breeds.map( breed => (
                    
                    <li key={breed.id}>
                        <strong>{breed.name}</strong>
                        {breed.reference_image_id &&
                            <div>
                                <img 
                                    src={`https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`} 
                                    alt={breed.name}
                                    width={200}
                                />
                            </div>
                        }
                    </li>
                )
                
                )}
            </ul>

        </>
    )
}