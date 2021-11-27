type StatusProps = {
  status: 'loading' | 'success' | 'error'
}

export let Status = (props: StatusProps) => {

  let message

  if (props.status === 'loading') {
    message = 'Loading...'
  } else if (props.status === 'success') {
    message = 'Data fetchin successfully'
  } else if (props.status === 'error') {
    message = 'Error fetching data'
  }

  return(
    <div>
      <h2>Status - {message}</h2>
    </div>
  )
}