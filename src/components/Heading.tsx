type HeadingProps = {
  children: string
}

export let Heading = (props: HeadingProps) => {
  return(
    <h2>{props.children}</h2>
  )
}