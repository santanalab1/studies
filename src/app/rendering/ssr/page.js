
export const dynamic = 'force-dynamic';

async function getDogBreeds(){
    const res = await fetch('https://api.thedogapi.com/v1/breeds', {
        cache: 'no-store'
    })

    if(!res.ok) throw new Error('Failed to fetch Dog Breeds');
    
    return res.json();
}

export default async function Ssr(){
    const breeds = await getDogBreeds();
    return(
        <>
            <h1>Example SSR Page</h1>
            <ul>
                {breeds.slice(0, 5).map(breed => (
                    <li key={breed.id}>
                        <strong>{breed.name}</strong>
                        {breed.reference_image_id &&
                            <div>
                                <img
                                    alt={breed.name}
                                    src={`https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`}
                                    width={200}
                                />
                            </div>
                        }
                    </li>
                ))}
            </ul>
        </>
    )
}