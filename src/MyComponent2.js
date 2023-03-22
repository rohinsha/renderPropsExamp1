import { useEffect, useState } from "react";

export default function MyComponent2(props) {
  // const [visible, setVisible] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setVisible(true);
  //   }, 5000);
  // }, []);

  const [data, setData] = useState("gajbhiye");

  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.render(data)}</h1>
    </div>
  );
}
