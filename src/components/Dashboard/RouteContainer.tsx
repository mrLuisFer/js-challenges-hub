import { PropsWithChildren } from "react";
import Header from "../Global/Header";

export default function RouteContainer({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
