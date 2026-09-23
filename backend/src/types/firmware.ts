import type { Region } from "../sony/types";

export interface FirmwareInfo {
    region: Region

    latest: {
        version: string;
        sdkVersion: string;
        label: string;
    };
    forced: {
        version: string;
        sdkVersion: string;
    };
};

export interface SonyConditionalRequirement {
    "@_auto_update_version" : string;
    "@_id" : string;
    "@_sdk_version" : string;
    "@_type" : string;
    "@_upd_version" : string;
};

export interface SonySystem {
    "@_auto_update_version" : string;
    "@_sdk_version" : string;
    "@_upd_version" : string;

    conditional_requirement ?: SonyConditionalRequirement;
};

export interface SonyImage {
    "@_size" ?: string;
    "#text" ?: string;
};

export interface SonyUpdateData {
    "@_update_type" : string;
    image?: SonyImage;
};

export interface SonySystemPup {
    "@_auto_update_version" : string;
    "@_label" : string;
    "@_sdk_version" : string;
    "@_upd_version" : string;

    update_data ?: SonyUpdateData;
};

export interface SonyForceUpdate {
    system: SonySystem;
};

export interface SonyRegion {
    "@_id" : string;

    force_update: SonyForceUpdate;
    system_pup: SonySystemPup;
    finished_test_list ?: unknown;
};