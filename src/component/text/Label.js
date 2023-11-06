const Label = ({ forId, children }) => {
  return <label for={forId}>{children}</label>;
};

export default Label;
