
type GreetProps = {
  name: string,
}

export let Greet = (props: GreetProps) => {
  return(
    <div>
      <h2>
        Welcome to {props.name}. You have 10 unread messages!
      </h2>
    </div>
  )
}