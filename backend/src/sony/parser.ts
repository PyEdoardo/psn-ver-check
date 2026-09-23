import { XMLParser } from "fast-xml-parser";

import {
    PSN_MANIFEST_URLS,
    type Region,
    type SonyUpdateDataList
} from "./types";

import type {
    FirmwareInfo
} from "../types/firmware"

const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
});

function parseXML(xml: string): SonyUpdateDataList {
    const result = parser.parse(xml);

    return result as SonyUpdateDataList;
};

function parseRegion(value: string): Region {
    const region = value.toUpperCase();

    if (region in PSN_MANIFEST_URLS) {
        return region as Region;
    };

    throw new Error(`Unknown Sony Region: ${value}`);
};

export function parseManifest(xml: string): FirmwareInfo {
    const data = parseXML(xml);

    const region = data.region;

    return {
        region: parseRegion(region["@_id"]),

        latest: {
            version: region.system_pup["@_upd_version"],
            sdkVersion: region.system_pup["@_sdk_version"],
            label: region.system_pup["@_label"],
        },

        forced: {
            version: region.force_update.system["@_upd_version"],
            sdkVersion: region.force_update.system["@_sdk_version"],
        },
    };
};