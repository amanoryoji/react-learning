import "./Example.css";
import List from "./components/List";

const Example = () => {
  return (
    <div className="component">
      <h3>Hello Component</h3>
      {/* ul>li{item-$}*5 */}
      <List />
    </div>
  );
};

export default Example;
