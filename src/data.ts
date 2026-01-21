import type { Region } from './types';
import rawData from '../regiones-provincias-comunas.json';

/**
 * Datos de regiones, provincias y comunas de Chile
 */
export const data: Region[] = rawData as Region[];
