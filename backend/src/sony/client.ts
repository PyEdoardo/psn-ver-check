import { fetch } from "bun";
import { PSN_MANIFEST_URLS, type Region } from "./types";

export async function fetchManifest(region: Region): Promise<string> {
    const url = PSN_MANIFEST_URLS[region];
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Sony returned HTTP ${response.status}`);
    };

    const xml: string = await response.text();

    return xml;
};