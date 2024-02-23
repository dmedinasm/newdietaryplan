import { useEffect, useState } from "react"

export function useBMI ({peso, altura}) {
    const [IMC, setIMC] = useState(null)

    useEffect (() =>{
        if (!(/^[0-9]*$/.test(peso) && /^[0-9]*$/.test(altura))) return
        setIMC((peso) / (altura / 100) ** 2)
    },[peso, altura])
    return IMC
}