import { useEffect } from "react";
import { useParams } from "react-router-dom"

export function Actress () {
    const {id} = useParams();
    useEffect(() => {
        
    })

   return(
    <p>
    hej
    {id}
</p>
   )
}