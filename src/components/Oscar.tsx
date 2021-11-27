type OscarProps = {
  children: React.ReactNode
}

export let Oscar = (props: OscarProps) => {
  return(
    <div>{props.children}</div>
  )
}