import { Service } from "./Service";
import { StylistInfo } from "./StylistInfo";

class BookInfo {
  stylistInfo: StylistInfo;
  service: Service;
  date: Date;

  constructor(stylistInfo: StylistInfo, service: Service, date: Date) {
    this.stylistInfo = stylistInfo;
    this.service = service;
    this.date = date;
  }
}

export { BookInfo };
