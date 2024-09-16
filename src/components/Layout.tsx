import { ChildrenType } from "../types/common";
import Header from "./Header";

function Layout({ children }: ChildrenType) {
  return (
    <div className="layout">
      <Header/>
      {children}
    </div>
  );
}

export default Layout;
