import React from "react";
import { Fragment } from "react";
import MenuCmp from "../../Components/MenuComponent/MenuCmp";
import FooterCmp from "../../Components/FooterComponent/FooterCmp";
import AnmeldungKomponente from "../../Components/AnmeldungKomponente/AnmeldungKomponente";

function LoginSeite() {
  return (
    <Fragment>
      <MenuCmp />
      <div className="Container-Center-col">
        <div className="MenüHintergrund"></div>
        <AnmeldungKomponente></AnmeldungKomponente>
      </div>
      <FooterCmp />
    </Fragment>
  );
}

export default LoginSeite;
