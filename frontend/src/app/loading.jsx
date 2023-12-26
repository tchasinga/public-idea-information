import { lineSpinner } from "ldrs";

lineSpinner.register();

export default function loading() {
  return (
    <div>
      <l-line-spinner
        size="40"
        stroke="3"
        speed="1"
        color="black"
      ></l-line-spinner>
    </div>
  );
}
