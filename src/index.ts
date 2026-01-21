import { data } from './data';
import type { Region, Provincia, Comuna, ComunaSearchResult, SelectOption } from './types';

// Re-export types
export type { Region, Provincia, Comuna, ComunaSearchResult, SelectOption };

// Re-export raw data
export { data };

/**
 * Gets all regions of Chile
 * @returns Array with all 16 regions of Chile
 */
export function getRegiones(): Region[] {
    return data;
}

/**
 * Finds a region by its number (in Roman numerals)
 * @param number Region number (e.g., "I", "XV", "XIII")
 * @returns The found region or undefined
 */
export function getRegionByNumber(number: string): Region | undefined {
    const normalized = number.toUpperCase().trim();
    return data.find((r) => r.region_number.toUpperCase() === normalized);
}

/**
 * Finds a region by its ISO 3166-2 code
 * @param iso ISO code (e.g., "CL-RM", "CL-AP")
 * @returns The found region or undefined
 */
export function getRegionByISO(iso: string): Region | undefined {
    const normalized = iso.toUpperCase().trim();
    return data.find((r) => r.region_iso_3166_2.toUpperCase() === normalized);
}

/**
 * Finds a region by its name (partial search, case-insensitive)
 * @param name Name or part of the region name
 * @returns The found region or undefined
 */
export function getRegionByName(name: string): Region | undefined {
    const normalized = name.toLowerCase().trim();
    return data.find((r) => r.region.toLowerCase().includes(normalized));
}

/**
 * Gets all provinces of a region
 * @param regionNumber Region number (e.g., "XIII", "V")
 * @returns Array of provinces or empty array if region not found
 */
export function getProvincias(regionNumber: string): Provincia[] {
    const region = getRegionByNumber(regionNumber);
    return region?.provincias ?? [];
}

/**
 * Gets all communes of a region, optionally filtered by province
 * @param regionNumber Region number
 * @param provinciaName Province name (optional)
 * @returns Array of communes
 */
export function getComunas(regionNumber: string, provinciaName?: string): Comuna[] {
    const provincias = getProvincias(regionNumber);

    if (provinciaName) {
        const normalized = provinciaName.toLowerCase().trim();
        const provincia = provincias.find((p) => p.name.toLowerCase() === normalized);
        return provincia?.comunas ?? [];
    }

    return provincias.flatMap((p) => p.comunas);
}

/**
 * Finds a commune by its CUT code (Unique Territorial Code)
 * @param code CUT code of the commune (e.g., "13101" for Santiago)
 * @returns Result with the commune and its context, or undefined
 */
export function getComunaByCode(code: string): ComunaSearchResult | undefined {
    const normalizedCode = code.trim();

    for (const region of data) {
        for (const provincia of region.provincias) {
            const comuna = provincia.comunas.find((c) => c.code === normalizedCode);
            if (comuna) {
                return {
                    comuna,
                    provincia: provincia.name,
                    region: region.region,
                    region_number: region.region_number,
                };
            }
        }
    }

    return undefined;
}

/**
 * Searches communes by name (partial search, case-insensitive)
 * @param query Text to search in commune names
 * @returns Array of results with communes and their context
 */
export function searchComunas(query: string): ComunaSearchResult[] {
    const normalized = query.toLowerCase().trim();
    const results: ComunaSearchResult[] = [];

    for (const region of data) {
        for (const provincia of region.provincias) {
            for (const comuna of provincia.comunas) {
                if (comuna.name.toLowerCase().includes(normalized)) {
                    results.push({
                        comuna,
                        provincia: provincia.name,
                        region: region.region,
                        region_number: region.region_number,
                    });
                }
            }
        }
    }

    return results;
}

/**
 * Gets all communes of Chile
 * @returns Array with all communes
 */
export function getAllComunas(): ComunaSearchResult[] {
    const results: ComunaSearchResult[] = [];

    for (const region of data) {
        for (const provincia of region.provincias) {
            for (const comuna of provincia.comunas) {
                results.push({
                    comuna,
                    provincia: provincia.name,
                    region: region.region,
                    region_number: region.region_number,
                });
            }
        }
    }

    return results;
}

/**
 * Gets all provinces of Chile
 * @returns Array with objects containing the province and its region
 */
export function getAllProvincias(): Array<{ provincia: Provincia; region: string; region_number: string }> {
    const results: Array<{ provincia: Provincia; region: string; region_number: string }> = [];

    for (const region of data) {
        for (const provincia of region.provincias) {
            results.push({
                provincia,
                region: region.region,
                region_number: region.region_number,
            });
        }
    }

    return results;
}

// ============================================================================
// SELECT/DROPDOWN HELPERS - For forms with cascading selects
// ============================================================================

/**
 * Gets regions formatted for a select/dropdown element
 * @returns Array of options with label (name) and value (region number)
 * @example
 * <select>
 *   {getRegionOptions().map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
 * </select>
 */
export function getRegionOptions(): SelectOption[] {
    return data.map((region) => ({
        label: region.region,
        value: region.region_number,
    }));
}

/**
 * Gets provinces of a region formatted for a select/dropdown element
 * @param regionNumber Number of the selected region
 * @returns Array of options with label and value (province name)
 */
export function getProvinciaOptions(regionNumber: string): SelectOption[] {
    const provincias = getProvincias(regionNumber);
    return provincias.map((provincia) => ({
        label: provincia.name,
        value: provincia.name,
    }));
}

/**
 * Gets communes formatted for a select/dropdown element
 * @param regionNumber Number of the selected region
 * @param provinciaName Province name (optional, if not passed returns all communes of the region)
 * @returns Array of options with label (name) and value (CUT code)
 */
export function getComunaOptions(regionNumber: string, provinciaName?: string): SelectOption[] {
    const comunas = getComunas(regionNumber, provinciaName);
    return comunas.map((comuna) => ({
        label: comuna.name,
        value: comuna.code,
    }));
}

/**
 * Gets all communes of Chile formatted for a select/dropdown element
 * Useful for autocomplete or global search
 * @returns Array of options with label (commune - region) and value (CUT code)
 */
export function getAllComunaOptions(): SelectOption[] {
    const allComunas = getAllComunas();
    return allComunas.map((result) => ({
        label: `${result.comuna.name} (${result.region})`,
        value: result.comuna.code,
    }));
}
