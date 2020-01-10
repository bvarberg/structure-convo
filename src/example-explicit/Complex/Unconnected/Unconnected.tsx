import React from "react"
import Private from "./Private"

type Props = Readonly<{
  value: number
}>

export function Unconnected({ value }: Props) {
  return (
    <div className="unconnected">
      <Private />
      <div>{value}</div>
    </div>
  )
}