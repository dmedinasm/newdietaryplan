import { useEffect, useState } from "react"

export function useChecked ({checkedType, checkedList}) {
    const[checkedResult, setCheckedResult] = useState()

    useEffect(() => {
        if (!checkedType) return
        const checkedResult = checkedType?.map(val =>
          checkedList?.find(payload => payload.id === val)
        ).map(res => res.data).flat()
       setCheckedResult(checkedResult)
      }, [checkedType])

    return checkedResult
}


