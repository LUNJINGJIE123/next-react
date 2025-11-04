interface PropType {
  name: string,
}


const Child: React.FC<PropType> = (props: PropType) => {
  return (
    <div>
      {props.name}
    </div>
  );
}

export default Child;