import React from "react"
import { useSelector } from "react-redux"

import Unconnected from "../Unconnected"

type Props = Readonly<{
  id: string
}>

// function resourceSelector(id: string) {
//   return (state: any) => state.resources[id]
// }

export function Connected({ id }: Props) {
  const resource = useSelector((state: any) => state.resources[id])

  return <Unconnected value={resource.value} />
}