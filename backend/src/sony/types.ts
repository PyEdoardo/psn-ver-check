import type { SonyRegion } from "../types/firmware";

export enum PSN_MANIFEST_URLS {
    "BR" = `http://fbr01.ps5.update.playstation.net/update/ps5/official/tJMRE80IbXnE9YuG0jzTXgKEjIMoabr6/list/br/updatelist.xml`,
    "US" = `http://fus01.ps5.update.playstation.net/update/ps5/official/tJMRE80IbXnE9YuG0jzTXgKEjIMoabr6/list/us/updatelist.xml`,
    "JP" = `http://fjp01.ps5.update.playstation.net/update/ps5/official/tJMRE80IbXnE9YuG0jzTXgKEjIMoabr6/list/jp/updatelist.xml`,
    "EU" = `http://feu01.ps5.update.playstation.net/update/ps5/official/tJMRE80IbXnE9YuG0jzTXgKEjIMoabr6/list/eu/updatelist.xml`,
    "UK" = `http://fuk01.ps5.update.playstation.net/update/ps5/official/tJMRE80IbXnE9YuG0jzTXgKEjIMoabr6/list/uk/updatelist.xml`,
    "KR" = `http://fkr01.ps5.update.playstation.net/update/ps5/official/tJMRE80IbXnE9YuG0jzTXgKEjIMoabr6/list/kr/updatelist.xml`,
    "MX" = `http://fmx01.ps5.update.playstation.net/update/ps5/official/tJMRE80IbXnE9YuG0jzTXgKEjIMoabr6/list/mx/updatelist.xml`,
    "AU" = `http://fau01.ps5.update.playstation.net/update/ps5/official/tJMRE80IbXnE9YuG0jzTXgKEjIMoabr6/list/au/updatelist.xml`,
    "SA" = `http://fsa01.ps5.update.playstation.net/update/ps5/official/tJMRE80IbXnE9YuG0jzTXgKEjIMoabr6/list/sa/updatelist.xml`,
    "TW" = `http://ftw01.ps5.update.playstation.net/update/ps5/official/tJMRE80IbXnE9YuG0jzTXgKEjIMoabr6/list/tw/updatelist.xml`,
    "RU" = `http://fru01.ps5.update.playstation.net/update/ps5/official/tJMRE80IbXnE9YuG0jzTXgKEjIMoabr6/list/ru/updatelist.xml`,
    "CN" = `http://fcn01.ps5.update.playstation.net/update/ps5/official/tJMRE80IbXnE9YuG0jzTXgKEjIMoabr6/list/cn/updatelist.xml`,
    "HK" = `http://fhk01.ps5.update.playstation.net/update/ps5/official/tJMRE80IbXnE9YuG0jzTXgKEjIMoabr6/list/hk/updatelist.xml`,
};

export interface SonyUpdateDataList {
    region: SonyRegion
};

export type Region = keyof typeof PSN_MANIFEST_URLS;
