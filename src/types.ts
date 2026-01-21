/**
 * Represents a commune of Chile
 */
export interface Comuna {
    /** Name of the commune */
    name: string;
    /** Unique Territorial Code (CUT) of the commune */
    code: string;
}

/**
 * Represents a province of Chile
 */
export interface Provincia {
    /** Name of the province */
    name: string;
    /** List of communes belonging to the province */
    comunas: Comuna[];
}

/**
 * Represents a region of Chile
 */
export interface Region {
    /** Full name of the region */
    region: string;
    /** Region number in Roman numerals (I, II, III, ... XV, XVI) */
    region_number: string;
    /** ISO 3166-2 code of the region (e.g., CL-AP, CL-RM) */
    region_iso_3166_2: string;
    /** List of provinces belonging to the region */
    provincias: Provincia[];
}

/**
 * Commune search result with context information
 */
export interface ComunaSearchResult {
    /** The found commune */
    comuna: Comuna;
    /** Name of the province it belongs to */
    provincia: string;
    /** Name of the region it belongs to */
    region: string;
    /** Region number */
    region_number: string;
}

/**
 * Generic option for select/dropdown elements
 */
export interface SelectOption {
    /** Visible text in the select */
    label: string;
    /** Option value (used as key/id) */
    value: string;
}
