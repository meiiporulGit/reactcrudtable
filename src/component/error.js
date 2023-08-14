export default function ErrorProps(props) {
    return (
      <div
        style={{
          textAlign: "left",
          color: "red",
          fontSize: "0.9rem",
          marginTop: "0.5rem"
        }}
      >
        {props.children}
      </div>
    );
  }