# Chilean Territorial Divisions

Political and administrative divisions of Chile: regions, provinces, and communes.

[![npm version](https://img.shields.io/npm/v/chilean-territorial-divisions.svg)](https://www.npmjs.com/package/chilean-territorial-divisions)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

## Installation

```bash
npm install chilean-territorial-divisions
```

## Usage

### ESM (recommended)

```typescript
import {
  getRegiones,
  getRegionByNumber,
  getComunaByCode,
  searchComunas,
} from 'chilean-territorial-divisions';

// Get all regions
const regiones = getRegiones(); // 16 regions

// Find region by number
const rm = getRegionByNumber('XIII');
console.log(rm?.region); // "Región Metropolitana de Santiago"

// Find commune by CUT code
const santiago = getComunaByCode('13101');
console.log(santiago?.comuna.name); // "Santiago"
console.log(santiago?.provincia);   // "Santiago"
console.log(santiago?.region);      // "Región Metropolitana de Santiago"

// Search communes by name
const results = searchComunas('viña');
console.log(results[0].comuna.name); // "Viña del Mar"
```

### CommonJS

```javascript
const { getRegiones, getComunaByCode } = require('chilean-territorial-divisions');

const regiones = getRegiones();
console.log(regiones.length); // 16
```

## API

### Region Functions

| Function | Description |
|----------|-------------|
| `getRegiones()` | Returns all 16 regions of Chile |
| `getRegionByNumber(number)` | Find region by Roman numeral (e.g., "XIII", "V", "XV") |
| `getRegionByISO(iso)` | Find by ISO 3166-2 code (e.g., "CL-RM", "CL-AP") |
| `getRegionByName(name)` | Find by name (partial, case-insensitive) |

### Province Functions

| Function | Description |
|----------|-------------|
| `getProvincias(regionNumber)` | Returns provinces of a region |
| `getAllProvincias()` | Returns all provinces of Chile |

### Commune Functions

| Function | Description |
|----------|-------------|
| `getComunas(regionNumber, provinciaName?)` | Communes of a region or province |
| `getComunaByCode(code)` | Find commune by CUT code |
| `searchComunas(query)` | Text search (case-insensitive) |
| `getAllComunas()` | Returns all communes of Chile |

### Select/Dropdown Helpers

| Function | Description |
|----------|-------------|
| `getRegionOptions()` | Regions as `{label, value}` for selects |
| `getProvinciaOptions(regionNumber)` | Provinces of a region for selects |
| `getComunaOptions(regionNumber, provinciaName?)` | Communes for selects (value = CUT code) |
| `getAllComunaOptions()` | All communes for autocomplete |

#### Example: Cascading Select (React)

```tsx
import { useState } from 'react';
import {
  getRegionOptions,
  getProvinciaOptions,
  getComunaOptions,
} from 'chilean-territorial-divisions';

function AddressForm() {
  const [region, setRegion] = useState('');
  const [provincia, setProvincia] = useState('');
  const [comuna, setComuna] = useState('');

  return (
    <>
      <select value={region} onChange={(e) => { setRegion(e.target.value); setProvincia(''); setComuna(''); }}>
        <option value="">Select region</option>
        {getRegionOptions().map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>

      <select value={provincia} onChange={(e) => { setProvincia(e.target.value); setComuna(''); }} disabled={!region}>
        <option value="">Select province</option>
        {getProvinciaOptions(region).map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>

      <select value={comuna} onChange={(e) => setComuna(e.target.value)} disabled={!region}>
        <option value="">Select commune</option>
        {getComunaOptions(region, provincia || undefined).map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </>
  );
}
```

#### Example: Region → Commune Only (no province)

```tsx
import { useState } from 'react';
import { getRegionOptions, getComunaOptions } from 'chilean-territorial-divisions';

function SimpleAddressForm() {
  const [region, setRegion] = useState('');
  const [comuna, setComuna] = useState('');

  return (
    <>
      <select value={region} onChange={(e) => { setRegion(e.target.value); setComuna(''); }}>
        <option value="">Select region</option>
        {getRegionOptions().map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>

      <select value={comuna} onChange={(e) => setComuna(e.target.value)} disabled={!region}>
        <option value="">Select commune</option>
        {getComunaOptions(region).map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </>
  );
}
```

## TypeScript Types

```typescript
interface Region {
  region: string;           // Full name
  region_number: string;    // Roman numeral (I, II, ..., XV, XVI, XIII)
  region_iso_3166_2: string; // ISO code (CL-AP, CL-RM, etc.)
  provincias: Provincia[];
}

interface Provincia {
  name: string;
  comunas: Comuna[];
}

interface Comuna {
  name: string;
  code: string;  // Unique Territorial Code (CUT)
}

interface ComunaSearchResult {
  comuna: Comuna;
  provincia: string;
  region: string;
  region_number: string;
}

interface SelectOption {
  label: string;
  value: string;
}
```

## Data

- **16 regions** of Chile
- **56 provinces**
- **346 communes**

Includes official codes:
- **CUT** (Código Único Territorial) for each commune
- **ISO 3166-2:CL** for each region

## License

MIT © Hans Steven Vergara Chamorro
