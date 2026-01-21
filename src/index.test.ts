import { describe, it, expect } from 'vitest';
import {
    getRegiones,
    getRegionByNumber,
    getRegionByISO,
    getRegionByName,
    getProvincias,
    getComunas,
    getComunaByCode,
    searchComunas,
    getAllComunas,
    getAllProvincias,
    getRegionOptions,
    getProvinciaOptions,
    getComunaOptions,
    getAllComunaOptions,
} from './index';

describe('getRegiones', () => {
    it('debe retornar 16 regiones', () => {
        const regiones = getRegiones();
        expect(regiones).toHaveLength(16);
    });

    it('cada región debe tener las propiedades requeridas', () => {
        const regiones = getRegiones();
        for (const region of regiones) {
            expect(region).toHaveProperty('region');
            expect(region).toHaveProperty('region_number');
            expect(region).toHaveProperty('region_iso_3166_2');
            expect(region).toHaveProperty('provincias');
        }
    });
});

describe('getRegionByNumber', () => {
    it('debe encontrar la Región Metropolitana por "XIII"', () => {
        const region = getRegionByNumber('XIII');
        expect(region).toBeDefined();
        expect(region?.region).toContain('Metropolitana');
    });

    it('debe encontrar Arica y Parinacota por "XV"', () => {
        const region = getRegionByNumber('XV');
        expect(region).toBeDefined();
        expect(region?.region).toBe('Arica y Parinacota');
    });

    it('debe ser case-insensitive', () => {
        const region = getRegionByNumber('xiii');
        expect(region).toBeDefined();
    });

    it('debe retornar undefined para número inválido', () => {
        const region = getRegionByNumber('INVALID');
        expect(region).toBeUndefined();
    });
});

describe('getRegionByISO', () => {
    it('debe encontrar la región por código ISO', () => {
        const region = getRegionByISO('CL-RM');
        expect(region).toBeDefined();
        expect(region?.region_number).toBe('XIII');
    });

    it('debe ser case-insensitive', () => {
        const region = getRegionByISO('cl-rm');
        expect(region).toBeDefined();
    });
});

describe('getRegionByName', () => {
    it('debe encontrar región por nombre parcial', () => {
        const region = getRegionByName('Valparaíso');
        expect(region).toBeDefined();
        expect(region?.region_number).toBe('V');
    });

    it('debe ser case-insensitive', () => {
        const region = getRegionByName('metropolitana');
        expect(region).toBeDefined();
    });
});

describe('getProvincias', () => {
    it('debe retornar provincias de la Región Metropolitana', () => {
        const provincias = getProvincias('XIII');
        expect(provincias.length).toBeGreaterThan(0);
        expect(provincias.some((p) => p.name === 'Santiago')).toBe(true);
    });

    it('debe retornar array vacío para región inválida', () => {
        const provincias = getProvincias('INVALID');
        expect(provincias).toEqual([]);
    });
});

describe('getComunas', () => {
    it('debe retornar todas las comunas de una región', () => {
        const comunas = getComunas('XIII');
        expect(comunas.length).toBeGreaterThan(0);
    });

    it('debe filtrar por provincia', () => {
        const comunas = getComunas('XIII', 'Santiago');
        expect(comunas.length).toBeGreaterThan(0);
        expect(comunas.some((c) => c.name === 'Santiago')).toBe(true);
    });
});

describe('getComunaByCode', () => {
    it('debe encontrar Santiago por código 13101', () => {
        const result = getComunaByCode('13101');
        expect(result).toBeDefined();
        expect(result?.comuna.name).toBe('Santiago');
        expect(result?.provincia).toBe('Santiago');
        expect(result?.region_number).toBe('XIII');
    });

    it('debe retornar undefined para código inválido', () => {
        const result = getComunaByCode('00000');
        expect(result).toBeUndefined();
    });
});

describe('searchComunas', () => {
    it('debe encontrar Viña del Mar', () => {
        const results = searchComunas('viña');
        expect(results.length).toBeGreaterThan(0);
        expect(results.some((r) => r.comuna.name === 'Viña del Mar')).toBe(true);
    });

    it('debe ser case-insensitive', () => {
        const results = searchComunas('VIÑA');
        expect(results.length).toBeGreaterThan(0);
    });

    it('debe retornar array vacío si no hay resultados', () => {
        const results = searchComunas('xyznonexistent');
        expect(results).toEqual([]);
    });
});

describe('getAllComunas', () => {
    it('debe retornar más de 300 comunas', () => {
        const comunas = getAllComunas();
        expect(comunas.length).toBeGreaterThan(300);
    });
});

describe('getAllProvincias', () => {
    it('debe retornar más de 50 provincias', () => {
        const provincias = getAllProvincias();
        expect(provincias.length).toBeGreaterThan(50);
    });
});

// ============================================================================
// TESTS PARA SELECT HELPERS
// ============================================================================

describe('getRegionOptions', () => {
    it('debe retornar 16 opciones para select', () => {
        const options = getRegionOptions();
        expect(options).toHaveLength(16);
    });

    it('cada opción debe tener label y value', () => {
        const options = getRegionOptions();
        for (const opt of options) {
            expect(opt).toHaveProperty('label');
            expect(opt).toHaveProperty('value');
            expect(typeof opt.label).toBe('string');
            expect(typeof opt.value).toBe('string');
        }
    });
});

describe('getProvinciaOptions', () => {
    it('debe retornar provincias de la RM', () => {
        const options = getProvinciaOptions('XIII');
        expect(options.length).toBeGreaterThan(0);
        expect(options.some((o) => o.label === 'Santiago')).toBe(true);
    });
});

describe('getComunaOptions', () => {
    it('debe retornar comunas de una región', () => {
        const options = getComunaOptions('XIII');
        expect(options.length).toBeGreaterThan(0);
        expect(options.some((o) => o.label === 'Santiago')).toBe(true);
    });

    it('el value debe ser el código CUT', () => {
        const options = getComunaOptions('XIII');
        const santiago = options.find((o) => o.label === 'Santiago');
        expect(santiago?.value).toBe('13101');
    });
});

describe('getAllComunaOptions', () => {
    it('debe retornar más de 300 opciones', () => {
        const options = getAllComunaOptions();
        expect(options.length).toBeGreaterThan(300);
    });

    it('el label debe incluir la región', () => {
        const options = getAllComunaOptions();
        const santiago = options.find((o) => o.value === '13101');
        expect(santiago?.label).toContain('Santiago');
        expect(santiago?.label).toContain('Metropolitana');
    });
});
