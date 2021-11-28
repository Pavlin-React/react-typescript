type ContainerProps = {
  style: React.CSSProperties;
};

export let Container = (props: ContainerProps) => {
  return (
    <div style={props.style}>
      Text content goes here
    </div>
  );
};
