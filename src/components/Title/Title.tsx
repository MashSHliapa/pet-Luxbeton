import './Title.scss';

export const Title = (props: { children: string }) => {
  return (
    <h2 className="title corner-border">
      {props.children}
      <span className="corner-border__corner corner-border__corner-tl"></span>
      <span className="corner-border__corner corner-border__corner-tr"></span>
      <span className="corner-border__corner corner-border__corner-bl"></span>
      <span className="corner-border__corner corner-border__corner-br"></span>
    </h2>
  );
};
