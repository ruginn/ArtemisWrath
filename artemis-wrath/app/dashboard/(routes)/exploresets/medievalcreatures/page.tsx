'use client'
import {useState, useEffect} from 'react'



const MedievalCreaturesSet = () => {
    const [cardSet, setCardSet] = useState()
    // const CollectPack = async () => {
    //     const userInfo = {
    //         id: user?.id, 
    //         firstName: user?.firstName, 
    //         lastName: user?.lastName, 
    //     }
    //     const res = await fetch('/api/cardpack/medievalcreatures', {
    //         method: 'POST', 
    //         body: JSON.stringify(userInfo),
    //         headers:{
    //             'Context-Type': 'application/json'
    //         },
    //         cache: 'no-cache'
    //     })
    //     // .then((res) => res.json()) 
    //     const cards: Card[] = await res.json()
    //     console.log(cards)
    //     setCollectedCards(cards)
    //     console.log(collectedCards)
    // }

    useEffect(()=> {    
        const res = fetch('/api/sets/medievalcreatures').then((res) => res.json())
        console.log(res)
    }, [])



    return (
        <div>
            <h1>Medieval Creatures</h1>
        </div>
    )
}

export default MedievalCreaturesSet