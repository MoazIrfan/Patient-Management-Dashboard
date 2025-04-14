import { FC, ReactNode } from "react";
import Header from "../organisms/Header";

const PageTemplate: FC<{ children: ReactNode }> = ({ children }) => {

  return (
    <div className="main-app">
      <Header />
      <main className="main-content">{children}</main>
    </div>
  );
};

export default PageTemplate;