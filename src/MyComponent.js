import { useEffect, useState } from "react";

export default function MyComponent(props) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  }, []);

  const [data, setData] = useState("rohinsha");

  return (
    <div>
      {visible ? (
        <h1>it will show if visible is true and then hide after 5secs </h1>
      ) : (
        <></>
      )}

      <h1>{props.name && props.name}</h1>
      <h1>{props.render(data)}</h1>
    </div>
  );
}
