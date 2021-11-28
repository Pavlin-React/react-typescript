type ButtonProps = {
  clickEvent: () => void;
};

export let Button = (props: ButtonProps) => {
  return <button onClick={props.clickEvent} >Click Me</button>;
};
