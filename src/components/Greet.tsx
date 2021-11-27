type GreetProps = {
  name: string;
  message?: number;
  isLogIn: boolean;
};

export let Greet = (props: GreetProps) => {

  let { message = 0 } = props

  return (
    <div>
      <h2>
        {props.isLogIn
          ? `Welcome to ${props.name}. You have ${message} unread messages!`
          : `You are not Logged`}
      </h2>
    </div>
  );
};
