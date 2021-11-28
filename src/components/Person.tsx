
import { PersonProps } from './Person.types'

export let Person = (props: PersonProps) => {
  return(
    <div>
      {props.name.first} {props.name.last}
    </div>
  )
}