import { LangString } from "./LangString";

class Service {
  image: string;
  name: LangString;
  price: number;
  description: LangString;

  constructor(name: LangString, price: number, description: LangString, image?: string) {
    this.image =
      image ||
      "https://lh5.googleusercontent.com/proxy/zPbiLi1SnUa7nHWxhb6ayaBvve_D3T82Pgmagw455meBvtu1H7kU9qdZqIxMuLc2L61pSK_SXseaKWcV72sT1eKBlLya4EjWEdPTvWYrxboQq2585hGXKMYlQb3YBNSJkbNFNq7Kr_S0v8TYprur8PaaHSTLZ02Xwtg7BDU5au4aOqLb4Haoix4iP_84Yw_DJngglQ";
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

export { Service };
