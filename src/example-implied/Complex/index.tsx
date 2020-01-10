import React from "react"
import { useSelector } from "react-redux"
import { Private } from "./Private"

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

type ConnectedProps = Readonly<{
  id: string
}>

// What about other utilities, specific to this component?
// export function validateValue(value) { }

export default function Connected({ id }: ConnectedProps) {
  const resource = useSelector((state: any) => state.resources[id])
  // const resource = useResource(id) // hook that makes API call

  return <Unconnected value={resource.value} />
}