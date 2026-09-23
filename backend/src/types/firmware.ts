export interface FirmwareInfo {
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
