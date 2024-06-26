import { LangString } from "./LangString";

class StylistInfo {
  name: LangString;
  image: string;

  constructor(name: LangString, image?: string) {
    this.name = name;
    this.image =
      image ||
      "https://png.pngtree.com/png-vector/20220608/ourmid/pngtree-faceless-user-anonymous-unknown-icon-png-image_4816463.png";
  }
}

export { StylistInfo };
