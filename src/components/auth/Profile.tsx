export type ProfileProp = {
  name: string
}

export let Profile = ({name}: ProfileProp) => {
  return <div>Private Profile component. Name is {name}</div>
}