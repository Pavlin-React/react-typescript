type GreetProps = {
  name: string;
  messages: number;
  isLogIn: boolean;
};

export let Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLogIn
          ? `Welcome to ${props.name}. You have ${props.messages} unread messages!`
          : `You are not Logged`}
      </h2>
    </div>
  );
};
