type PersonProps = {
  name: {
    first: string
    last: string
  }
}

export let Person = (props: PersonProps) => {
  return(
    <div>
      {props.name.first} {props.name.last}
    </div>
  )
}