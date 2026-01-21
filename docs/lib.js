"use strict";
var ChileanTerritorialDivisions = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.ts
  var index_exports = {};
  __export(index_exports, {
    data: () => data,
    getAllComunaOptions: () => getAllComunaOptions,
    getAllComunas: () => getAllComunas,
    getAllProvincias: () => getAllProvincias,
    getComunaByCode: () => getComunaByCode,
    getComunaOptions: () => getComunaOptions,
    getComunas: () => getComunas,
    getProvinciaOptions: () => getProvinciaOptions,
    getProvincias: () => getProvincias,
    getRegionByISO: () => getRegionByISO,
    getRegionByName: () => getRegionByName,
    getRegionByNumber: () => getRegionByNumber,
    getRegionOptions: () => getRegionOptions,
    getRegiones: () => getRegiones,
    searchComunas: () => searchComunas
  });

  // regiones-provincias-comunas.json
  var regiones_provincias_comunas_default = [
    {
      region: "Arica y Parinacota",
      region_number: "XV",
      region_iso_3166_2: "CL-AP",
      provincias: [
        {
          name: "Arica",
          comunas: [
            {
              name: "Arica",
              code: "15101"
            },
            {
              name: "Camarones",
              code: "15102"
            }
          ]
        },
        {
          name: "Parinacota",
          comunas: [
            {
              name: "Putre",
              code: "15201"
            },
            {
              name: "General Lagos",
              code: "15202"
            }
          ]
        }
      ]
    },
    {
      region: "Tarapac\xE1",
      region_number: "I",
      region_iso_3166_2: "CL-TA",
      provincias: [
        {
          name: "Iquique",
          comunas: [
            {
              name: "Iquique",
              code: "01101"
            },
            {
              name: "Alto Hospicio",
              code: "01107"
            }
          ]
        },
        {
          name: "Tamarugal",
          comunas: [
            {
              name: "Pozo Almonte",
              code: "01401"
            },
            {
              name: "Cami\xF1a",
              code: "01402"
            },
            {
              name: "Colchane",
              code: "01403"
            },
            {
              name: "Huara",
              code: "01404"
            },
            {
              name: "Pica",
              code: "01405"
            }
          ]
        }
      ]
    },
    {
      region: "Antofagasta",
      region_number: "II",
      region_iso_3166_2: "CL-AN",
      provincias: [
        {
          name: "Antofagasta",
          comunas: [
            {
              name: "Antofagasta",
              code: "02101"
            },
            {
              name: "Mejillones",
              code: "02102"
            },
            {
              name: "Sierra Gorda",
              code: "02103"
            },
            {
              name: "Taltal",
              code: "02104"
            }
          ]
        },
        {
          name: "El Loa",
          comunas: [
            {
              name: "Calama",
              code: "02201"
            },
            {
              name: "Ollag\xFCe",
              code: "02202"
            },
            {
              name: "San Pedro de Atacama",
              code: "02203"
            }
          ]
        },
        {
          name: "Tocopilla",
          comunas: [
            {
              name: "Tocopilla",
              code: "02301"
            },
            {
              name: "Mar\xEDa Elena",
              code: "02302"
            }
          ]
        }
      ]
    },
    {
      region: "Atacama",
      region_number: "III",
      region_iso_3166_2: "CL-AT",
      provincias: [
        {
          name: "Copiap\xF3",
          comunas: [
            {
              name: "Copiap\xF3",
              code: "03101"
            },
            {
              name: "Caldera",
              code: "03102"
            },
            {
              name: "Tierra Amarilla",
              code: "03103"
            }
          ]
        },
        {
          name: "Cha\xF1aral",
          comunas: [
            {
              name: "Cha\xF1aral",
              code: "03201"
            },
            {
              name: "Diego de Almagro",
              code: "03202"
            }
          ]
        },
        {
          name: "Huasco",
          comunas: [
            {
              name: "Vallenar",
              code: "03301"
            },
            {
              name: "Alto del Carmen",
              code: "03302"
            },
            {
              name: "Freirina",
              code: "03303"
            },
            {
              name: "Huasco",
              code: "03304"
            }
          ]
        }
      ]
    },
    {
      region: "Coquimbo",
      region_number: "IV",
      region_iso_3166_2: "CL-CO",
      provincias: [
        {
          name: "Elqui",
          comunas: [
            {
              name: "La Serena",
              code: "04101"
            },
            {
              name: "Coquimbo",
              code: "04102"
            },
            {
              name: "Andacollo",
              code: "04103"
            },
            {
              name: "La Higuera",
              code: "04104"
            },
            {
              name: "Paiguano",
              code: "04105"
            },
            {
              name: "Vicu\xF1a",
              code: "04106"
            }
          ]
        },
        {
          name: "Choapa",
          comunas: [
            {
              name: "Illapel",
              code: "04201"
            },
            {
              name: "Canela",
              code: "04202"
            },
            {
              name: "Los Vilos",
              code: "04203"
            },
            {
              name: "Salamanca",
              code: "04204"
            }
          ]
        },
        {
          name: "Limar\xED",
          comunas: [
            {
              name: "Ovalle",
              code: "04301"
            },
            {
              name: "Combarbal\xE1",
              code: "04302"
            },
            {
              name: "Monte Patria",
              code: "04303"
            },
            {
              name: "Punitaqui",
              code: "04304"
            },
            {
              name: "R\xEDo Hurtado",
              code: "04305"
            }
          ]
        }
      ]
    },
    {
      region: "Valpara\xEDso",
      region_number: "V",
      region_iso_3166_2: "CL-VS",
      provincias: [
        {
          name: "Valpara\xEDso",
          comunas: [
            {
              name: "Valpara\xEDso",
              code: "05101"
            },
            {
              name: "Casablanca",
              code: "05102"
            },
            {
              name: "Conc\xF3n",
              code: "05103"
            },
            {
              name: "Juan Fern\xE1ndez",
              code: "05104"
            },
            {
              name: "Puchuncav\xED",
              code: "05105"
            },
            {
              name: "Quintero",
              code: "05107"
            },
            {
              name: "Vi\xF1a del Mar",
              code: "05109"
            }
          ]
        },
        {
          name: "Isla de Pascua",
          comunas: [
            {
              name: "Isla de Pascua",
              code: "05201"
            }
          ]
        },
        {
          name: "Los Andes",
          comunas: [
            {
              name: "Los Andes",
              code: "05301"
            },
            {
              name: "Calle Larga",
              code: "05302"
            },
            {
              name: "Riconada",
              code: "05303"
            },
            {
              name: "San Esteban",
              code: "05304"
            }
          ]
        },
        {
          name: "Petorca",
          comunas: [
            {
              name: "La Ligua",
              code: "05401"
            },
            {
              name: "Cabildo",
              code: "05402"
            },
            {
              name: "Papudo",
              code: "05403"
            },
            {
              name: "Petorca",
              code: "05404"
            },
            {
              name: "Zapallar",
              code: "05405"
            }
          ]
        },
        {
          name: "Quillota",
          comunas: [
            {
              name: "Quillota",
              code: "05501"
            },
            {
              name: "La Calera",
              code: "05502"
            },
            {
              name: "Hijuelas",
              code: "05503"
            },
            {
              name: "La Cruz",
              code: "05504"
            },
            {
              name: "Nogales",
              code: "05506"
            }
          ]
        },
        {
          name: "San Antonio",
          comunas: [
            {
              name: "San Antonio",
              code: "05601"
            },
            {
              name: "Algarrobo",
              code: "05602"
            },
            {
              name: "Cartagena",
              code: "05603"
            },
            {
              name: "El Quisco",
              code: "05604"
            },
            {
              name: "El Tabo",
              code: "05605"
            },
            {
              name: "Santo Domingo",
              code: "05606"
            }
          ]
        },
        {
          name: "San Felipe de Aconcagua",
          comunas: [
            {
              name: "San Felipe",
              code: "05701"
            },
            {
              name: "Catemu",
              code: "05702"
            },
            {
              name: "Llaillay",
              code: "05703"
            },
            {
              name: "Panquehue",
              code: "05704"
            },
            {
              name: "Putaendo",
              code: "05705"
            },
            {
              name: "Santa Mar\xEDa",
              code: "05706"
            }
          ]
        },
        {
          name: "Marga Marga",
          comunas: [
            {
              name: "Quilpu\xE9",
              code: "05801"
            },
            {
              name: "Limache",
              code: "05802"
            },
            {
              name: "Olmu\xE9",
              code: "05803"
            },
            {
              name: "Villa Alemana",
              code: "05804"
            }
          ]
        }
      ]
    },
    {
      region: "Regi\xF3n del Libertador Gral. Bernardo O'Higgins",
      region_number: "VI",
      region_iso_3166_2: "CL-LI",
      provincias: [
        {
          name: "Cachapoal",
          comunas: [
            {
              name: "Rancagua",
              code: "06101"
            },
            {
              name: "Codegua",
              code: "06102"
            },
            {
              name: "Coinco",
              code: "06103"
            },
            {
              name: "Coltauco",
              code: "06104"
            },
            {
              name: "Do\xF1ihue",
              code: "06105"
            },
            {
              name: "Graneros",
              code: "06106"
            },
            {
              name: "Las Cabras",
              code: "06107"
            },
            {
              name: "Machal\xED",
              code: "06108"
            },
            {
              name: "Malloa",
              code: "06109"
            },
            {
              name: "Mostazal",
              code: "06110"
            },
            {
              name: "Olivar",
              code: "06111"
            },
            {
              name: "Peumo",
              code: "06112"
            },
            {
              name: "Pichidegua",
              code: "06113"
            },
            {
              name: "Quinta de Tilcoco",
              code: "06114"
            },
            {
              name: "Rengo",
              code: "06115"
            },
            {
              name: "Requ\xEDnoa",
              code: "06116"
            },
            {
              name: "San Vicente",
              code: "06117"
            }
          ]
        },
        {
          name: "Cardenal Caro",
          comunas: [
            {
              name: "Pichilemu",
              code: "06201"
            },
            {
              name: "La Estrella",
              code: "06202"
            },
            {
              name: "Litueche",
              code: "06203"
            },
            {
              name: "Marichihue",
              code: "06204"
            },
            {
              name: "Navidad",
              code: "06205"
            },
            {
              name: "Paredones",
              code: "06206"
            }
          ]
        },
        {
          name: "Colchagua",
          comunas: [
            {
              name: "San Fernando",
              code: "06301"
            },
            {
              name: "Ch\xE9pica",
              code: "06302"
            },
            {
              name: "Chimbarongo",
              code: "06303"
            },
            {
              name: "Lolol",
              code: "06304"
            },
            {
              name: "Nancagua",
              code: "06305"
            },
            {
              name: "Palmilla",
              code: "06306"
            },
            {
              name: "Peralillo",
              code: "06307"
            },
            {
              name: "Placilla",
              code: "06308"
            },
            {
              name: "Pumanque",
              code: "06309"
            },
            {
              name: "Santa Cruz",
              code: "06310"
            }
          ]
        }
      ]
    },
    {
      region: "Regi\xF3n del Maule",
      region_number: "VII",
      region_iso_3166_2: "CL-ML",
      provincias: [
        {
          name: "Talca",
          comunas: [
            {
              name: "Talca",
              code: "07101"
            },
            {
              name: "Constituci\xF3n",
              code: "07102"
            },
            {
              name: "Curepto",
              code: "07103"
            },
            {
              name: "Empedrado",
              code: "07104"
            },
            {
              name: "Maule",
              code: "07105"
            },
            {
              name: "Pelarco",
              code: "07106"
            },
            {
              name: "Pencahue",
              code: "07107"
            },
            {
              name: "R\xEDo Claro",
              code: "07108"
            },
            {
              name: "San Clemente",
              code: "07109"
            },
            {
              name: "San Rafael",
              code: "07110"
            }
          ]
        },
        {
          name: "Cauquenes",
          comunas: [
            {
              name: "Cauquenes",
              code: "07201"
            },
            {
              name: "Chanco",
              code: "07202"
            },
            {
              name: "Pelluhue",
              code: "07203"
            }
          ]
        },
        {
          name: "Curic\xF3",
          comunas: [
            {
              name: "Curic\xF3",
              code: "07301"
            },
            {
              name: "Huala\xF1\xE9",
              code: "07302"
            },
            {
              name: "Licant\xE9n",
              code: "07303"
            },
            {
              name: "Molina",
              code: "07304"
            },
            {
              name: "Rauco",
              code: "07305"
            },
            {
              name: "Romeral",
              code: "07306"
            },
            {
              name: "Sagrada Familia",
              code: "07307"
            },
            {
              name: "Teno",
              code: "07308"
            },
            {
              name: "Vichuqu\xE9n",
              code: "07309"
            }
          ]
        },
        {
          name: "Linares",
          comunas: [
            {
              name: "Linares",
              code: "07401"
            },
            {
              name: "Colb\xFAn",
              code: "07402"
            },
            {
              name: "Longav\xED",
              code: "07403"
            },
            {
              name: "Parral",
              code: "07404"
            },
            {
              name: "Retiro",
              code: "07405"
            },
            {
              name: "San Javier",
              code: "07406"
            },
            {
              name: "Villa Alegre",
              code: "07407"
            },
            {
              name: "Yerbas Buenas",
              code: "07408"
            }
          ]
        }
      ]
    },
    {
      region: "Regi\xF3n de \xD1uble",
      region_number: "XVI",
      region_iso_3166_2: "CL-NB",
      provincias: [
        {
          name: "Diguill\xEDn",
          comunas: [
            {
              name: "Chill\xE1n",
              code: "16101"
            },
            {
              name: "Chill\xE1n Viejo",
              code: "16102"
            },
            {
              name: "Quill\xF3n",
              code: "16103"
            },
            {
              name: "Bulnes",
              code: "16104"
            },
            {
              name: "San Ignacio",
              code: "16105"
            },
            {
              name: "El Carmen",
              code: "16106"
            },
            {
              name: "Pinto",
              code: "16107"
            },
            {
              name: "Pemuco",
              code: "16108"
            },
            {
              name: "Yungay",
              code: "16109"
            }
          ]
        },
        {
          name: "Itata",
          comunas: [
            {
              name: "Quirihue",
              code: "16201"
            },
            {
              name: "Cobquecura",
              code: "16202"
            },
            {
              name: "Ninhue",
              code: "16203"
            },
            {
              name: "Treguaco",
              code: "16204"
            },
            {
              name: "Coelemu",
              code: "16205"
            },
            {
              name: "Portezuelo",
              code: "16206"
            },
            {
              name: "R\xE1nqui",
              code: "16207"
            }
          ]
        },
        {
          name: "Punilla",
          comunas: [
            {
              name: "San Carlos",
              code: "16301"
            },
            {
              name: "\xD1iqu\xE9n",
              code: "16302"
            },
            {
              name: "Coihueco",
              code: "16303"
            },
            {
              name: "San Fabi\xE1n",
              code: "16304"
            },
            {
              name: "San Nico",
              code: "16305"
            }
          ]
        }
      ]
    },
    {
      region: "Regi\xF3n del Biob\xEDo",
      region_number: "VIII",
      region_iso_3166_2: "CL-BI",
      provincias: [
        {
          name: "Concepci\xF3n",
          comunas: [
            {
              name: "Concepci\xF3n",
              code: "08101"
            },
            {
              name: "Coronel",
              code: "08102"
            },
            {
              name: "Chiguayante",
              code: "08103"
            },
            {
              name: "Florida",
              code: "08104"
            },
            {
              name: "Hualqui",
              code: "08105"
            },
            {
              name: "Lota",
              code: "08106"
            },
            {
              name: "Penco",
              code: "08107"
            },
            {
              name: "San Pedro de la Paz",
              code: "08108"
            },
            {
              name: "Santa Juana",
              code: "08109"
            },
            {
              name: "Talcahuano",
              code: "08110"
            },
            {
              name: "Tom\xE9",
              code: "08111"
            },
            {
              name: "Hualp\xE9n",
              code: "08112"
            }
          ]
        },
        {
          name: "Arauco",
          comunas: [
            {
              name: "Lebu",
              code: "08201"
            },
            {
              name: "Arauco",
              code: "08202"
            },
            {
              name: "Ca\xF1ete",
              code: "08203"
            },
            {
              name: "Contulmo",
              code: "08204"
            },
            {
              name: "Curanilahue",
              code: "08205"
            },
            {
              name: "Los \xC1lamos",
              code: "08206"
            },
            {
              name: "Tir\xFAa",
              code: "08207"
            }
          ]
        },
        {
          name: "Biob\xEDo",
          comunas: [
            {
              name: "Los \xC1ngeles",
              code: "08301"
            },
            {
              name: "Antuco",
              code: "08302"
            },
            {
              name: "Cabrero",
              code: "08303"
            },
            {
              name: "Laja",
              code: "08304"
            },
            {
              name: "Mulch\xE9n",
              code: "08305"
            },
            {
              name: "Nacimiento",
              code: "08306"
            },
            {
              name: "Negrete",
              code: "08307"
            },
            {
              name: "Quilaco",
              code: "08308"
            },
            {
              name: "Quilleco",
              code: "08309"
            },
            {
              name: "San Rosendo",
              code: "08310"
            },
            {
              name: "Santa B\xE1rbara",
              code: "08311"
            },
            {
              name: "Tucapel",
              code: "08312"
            },
            {
              name: "Yumbel",
              code: "08313"
            },
            {
              name: "Alto Biob\xEDo",
              code: "08314"
            }
          ]
        }
      ]
    },
    {
      region: "Regi\xF3n de la Araucan\xEDa",
      region_number: "IX",
      region_iso_3166_2: "CL-AR",
      provincias: [
        {
          name: "Caut\xEDn",
          comunas: [
            {
              name: "Temuco",
              code: "09101"
            },
            {
              name: "Carahue",
              code: "09102"
            },
            {
              name: "Cunco",
              code: "09103"
            },
            {
              name: "Curarrehue",
              code: "09104"
            },
            {
              name: "Freire",
              code: "09105"
            },
            {
              name: "Galvarino",
              code: "09106"
            },
            {
              name: "Gorbea",
              code: "09107"
            },
            {
              name: "Lautaro",
              code: "09108"
            },
            {
              name: "Loncoche",
              code: "09109"
            },
            {
              name: "Melipeuco",
              code: "09110"
            },
            {
              name: "Nueva Imperial",
              code: "09111"
            },
            {
              name: "Padre Las Casas",
              code: "09112"
            },
            {
              name: "Perquenco",
              code: "09113"
            },
            {
              name: "Pitrufqu\xE9n",
              code: "09114"
            },
            {
              name: "Puc\xF3n",
              code: "09115"
            },
            {
              name: "Saavedra",
              code: "09116"
            },
            {
              name: "Teodoro Schmidt",
              code: "09117"
            },
            {
              name: "Tolt\xE9n",
              code: "09118"
            },
            {
              name: "Vilc\xFAn",
              code: "09119"
            },
            {
              name: "Villarrica",
              code: "09120"
            },
            {
              name: "Cholchol",
              code: "09121"
            }
          ]
        },
        {
          name: "Malleco",
          comunas: [
            {
              name: "Angol",
              code: "09201"
            },
            {
              name: "Collipulli",
              code: "09202"
            },
            {
              name: "Curacaut\xEDn",
              code: "09203"
            },
            {
              name: "Ercilla",
              code: "09204"
            },
            {
              name: "Lonquimay",
              code: "09205"
            },
            {
              name: "Los Sauces",
              code: "09206"
            },
            {
              name: "Lumaco",
              code: "09207"
            },
            {
              name: "Pur\xE9n",
              code: "09208"
            },
            {
              name: "Renaico",
              code: "09209"
            },
            {
              name: "Traigu\xE9n",
              code: "09210"
            },
            {
              name: "Victoria",
              code: "09211"
            }
          ]
        }
      ]
    },
    {
      region: "Regi\xF3n de los R\xEDos",
      region_number: "XIV",
      region_iso_3166_2: "CL-LR",
      provincias: [
        {
          name: "Valdivia",
          comunas: [
            {
              name: "Valdivia",
              code: "14101"
            },
            {
              name: "Corral",
              code: "14102"
            },
            {
              name: "Lanco",
              code: "14103"
            },
            {
              name: "Los Lagos",
              code: "14104"
            },
            {
              name: "M\xE1fil",
              code: "14105"
            },
            {
              name: "Mariquina",
              code: "14106"
            },
            {
              name: "Paillaco",
              code: "14107"
            },
            {
              name: "Panguipulli",
              code: "14108"
            }
          ]
        },
        {
          name: "Ranco",
          comunas: [
            {
              name: "La Uni\xF3n",
              code: "14201"
            },
            {
              name: "Futrono",
              code: "14202"
            },
            {
              name: "Lago Ranco",
              code: "14203"
            },
            {
              name: "R\xEDo Bueno",
              code: "14204"
            }
          ]
        }
      ]
    },
    {
      region: "Regi\xF3n de los Lagos",
      region_number: "X",
      region_iso_3166_2: "CL-LL",
      provincias: [
        {
          name: "Llanquihue",
          comunas: [
            {
              name: "Puerto Montt",
              code: "10101"
            },
            {
              name: "Calbuco",
              code: "10102"
            },
            {
              name: "Cocham\xF3",
              code: "10103"
            },
            {
              name: "Fresia",
              code: "10104"
            },
            {
              name: "Frutillar",
              code: "10105"
            },
            {
              name: "Los Muermos",
              code: "10106"
            },
            {
              name: "Llanquihue",
              code: "10107"
            },
            {
              name: "Maull\xEDn",
              code: "10108"
            },
            {
              name: "Puerto Varas",
              code: "10109"
            }
          ]
        },
        {
          name: "Chilo\xE9",
          comunas: [
            {
              name: "Castro",
              code: "10201"
            },
            {
              name: "Ancud",
              code: "10202"
            },
            {
              name: "Chonchi",
              code: "10203"
            },
            {
              name: "Curaco de V\xE9lez",
              code: "10204"
            },
            {
              name: "Dalcahue",
              code: "10205"
            },
            {
              name: "Puqueld\xF3n",
              code: "10206"
            },
            {
              name: "Queil\xE9n",
              code: "10207"
            },
            {
              name: "Quell\xF3n",
              code: "10208"
            },
            {
              name: "Quemchi",
              code: "10209"
            },
            {
              name: "Quinchao",
              code: "10210"
            }
          ]
        },
        {
          name: "Osorno",
          comunas: [
            {
              name: "Osorno",
              code: "10301"
            },
            {
              name: "Puerto Octay",
              code: "10302"
            },
            {
              name: "Purranque",
              code: "10303"
            },
            {
              name: "Puyehue",
              code: "10304"
            },
            {
              name: "R\xEDo Negro",
              code: "10305"
            },
            {
              name: "San Juan de la Costa",
              code: "10306"
            },
            {
              name: "San Pablo",
              code: "10307"
            }
          ]
        },
        {
          name: "Palena",
          comunas: [
            {
              name: "Chait\xE9n",
              code: "10401"
            },
            {
              name: "Futaleuf\xFA",
              code: "10402"
            },
            {
              name: "Hualaihu\xE9",
              code: "10403"
            },
            {
              name: "Palena",
              code: "10404"
            }
          ]
        }
      ]
    },
    {
      region: "Regi\xF3n Ais\xE9n del Gral. Carlos Iba\xF1ez del Campo",
      region_number: "XI",
      region_iso_3166_2: "CL-AI",
      provincias: [
        {
          name: "Coyhaique",
          comunas: [
            {
              name: "Coihaique",
              code: "11101"
            },
            {
              name: "Lago Verde",
              code: "11102"
            }
          ]
        },
        {
          name: "Ais\xE9n",
          comunas: [
            {
              name: "Ais\xE9n",
              code: "11201"
            },
            {
              name: "Cisnes",
              code: "11202"
            },
            {
              name: "Guaitecas",
              code: "11203"
            }
          ]
        },
        {
          name: "Capit\xE1n Pratt",
          comunas: [
            {
              name: "Cochrane",
              code: "11301"
            },
            {
              name: "O'Higgins",
              code: "11302"
            },
            {
              name: "Tortel",
              code: "11303"
            }
          ]
        },
        {
          name: "General Carrera",
          comunas: [
            {
              name: "Chile Chico",
              code: "11401"
            },
            {
              name: "R\xEDo Ib\xE1\xF1ez",
              code: "11402"
            }
          ]
        }
      ]
    },
    {
      region: "Regi\xF3n de Magallanes y de la Ant\xE1rtica Chilena",
      region_number: "XII",
      region_iso_3166_2: "CL-MA",
      provincias: [
        {
          name: "Magallanes",
          comunas: [
            {
              name: "Punta Arenas",
              code: "12101"
            },
            {
              name: "Laguna Blanca",
              code: "12102"
            },
            {
              name: "R\xEDo Verde",
              code: "12103"
            },
            {
              name: "San Gregorio",
              code: "12104"
            }
          ]
        },
        {
          name: "Ant\xE1rtica Chilena",
          comunas: [
            {
              name: "Cabo de Hornos",
              code: "12201"
            },
            {
              name: "Ant\xE1rtica",
              code: "12202"
            }
          ]
        },
        {
          name: "Tierra del Fuego",
          comunas: [
            {
              name: "Porvenir",
              code: "12301"
            },
            {
              name: "Primavera",
              code: "12302"
            },
            {
              name: "Timaukel",
              code: "12303"
            }
          ]
        },
        {
          name: "\xDAltima Esperanza",
          comunas: [
            {
              name: "Natales",
              code: "12401"
            },
            {
              name: "Torres del Paine",
              code: "12402"
            }
          ]
        }
      ]
    },
    {
      region: "Regi\xF3n Metropolitana de Santiago",
      region_number: "XIII",
      region_iso_3166_2: "CL-RM",
      provincias: [
        {
          name: "Santiago",
          comunas: [
            {
              name: "Santiago",
              code: "13101"
            },
            {
              name: "Cerrillos",
              code: "13102"
            },
            {
              name: "Cerro Navia",
              code: "13103"
            },
            {
              name: "Conchal\xED",
              code: "13104"
            },
            {
              name: "El Bosque",
              code: "13105"
            },
            {
              name: "Estaci\xF3n Central",
              code: "13106"
            },
            {
              name: "Huechuraba",
              code: "13107"
            },
            {
              name: "Independencia",
              code: "13108"
            },
            {
              name: "La Cisterna",
              code: "13109"
            },
            {
              name: "La Florida",
              code: "13110"
            },
            {
              name: "La Granja",
              code: "13111"
            },
            {
              name: "La Pintana",
              code: "13112"
            },
            {
              name: "La Reina",
              code: "13113"
            },
            {
              name: "Las Condes",
              code: "13114"
            },
            {
              name: "Lo Barnechea",
              code: "13115"
            },
            {
              name: "Lo Espejo",
              code: "13116"
            },
            {
              name: "Lo Prado",
              code: "13117"
            },
            {
              name: "Macul",
              code: "13118"
            },
            {
              name: "Maip\xFA",
              code: "13119"
            },
            {
              name: "\xD1u\xF1oa",
              code: "13120"
            },
            {
              name: "Pedro Aguirre Cerda",
              code: "13121"
            },
            {
              name: "Pe\xF1alol\xE9n",
              code: "13122"
            },
            {
              name: "Providencia",
              code: "13123"
            },
            {
              name: "Pudahuel",
              code: "13124"
            },
            {
              name: "Quilicura",
              code: "13125"
            },
            {
              name: "Quinta Normal",
              code: "13126"
            },
            {
              name: "Recoleta",
              code: "13127"
            },
            {
              name: "Renca",
              code: "13128"
            },
            {
              name: "San Joaqu\xEDn",
              code: "13129"
            },
            {
              name: "San Miguel",
              code: "13130"
            },
            {
              name: "San Ram\xF3n",
              code: "13131"
            },
            {
              name: "Vitacura",
              code: "13132"
            }
          ]
        },
        {
          name: "Cordillera",
          comunas: [
            {
              name: "Puente Alto",
              code: "13201"
            },
            {
              name: "Pirque",
              code: "13202"
            },
            {
              name: "San Jos\xE9 de Maipo",
              code: "13203"
            }
          ]
        },
        {
          name: "Chacabuco",
          comunas: [
            {
              name: "Colina",
              code: "13301"
            },
            {
              name: "Lampa",
              code: "13302"
            },
            {
              name: "Tiltil",
              code: "13303"
            }
          ]
        },
        {
          name: "Maipo",
          comunas: [
            {
              name: "San Bernardo",
              code: "13401"
            },
            {
              name: "Buin",
              code: "13402"
            },
            {
              name: "Calera de Tango",
              code: "13403"
            },
            {
              name: "Paine",
              code: "13404"
            }
          ]
        },
        {
          name: "Mellipilla",
          comunas: [
            {
              name: "Melipilla",
              code: "13501"
            },
            {
              name: "Alhu\xE9",
              code: "13502"
            },
            {
              name: "Curacav\xED",
              code: "13503"
            },
            {
              name: "Mar\xEDa Pinto",
              code: "13504"
            },
            {
              name: "San Pedro",
              code: "13505"
            }
          ]
        },
        {
          name: "Talagante",
          comunas: [
            {
              name: "Talagante",
              code: "13601"
            },
            {
              name: "El Monte",
              code: "13602"
            },
            {
              name: "Isla de Maipo",
              code: "13603"
            },
            {
              name: "Padre Hurtado",
              code: "13604"
            },
            {
              name: "Pe\xF1aflor",
              code: "13605"
            }
          ]
        }
      ]
    }
  ];

  // src/data.ts
  var data = regiones_provincias_comunas_default;

  // src/index.ts
  function getRegiones() {
    return data;
  }
  function getRegionByNumber(number) {
    const normalized = number.toUpperCase().trim();
    return data.find((r) => r.region_number.toUpperCase() === normalized);
  }
  function getRegionByISO(iso) {
    const normalized = iso.toUpperCase().trim();
    return data.find((r) => r.region_iso_3166_2.toUpperCase() === normalized);
  }
  function getRegionByName(name) {
    const normalized = name.toLowerCase().trim();
    return data.find((r) => r.region.toLowerCase().includes(normalized));
  }
  function getProvincias(regionNumber) {
    const region = getRegionByNumber(regionNumber);
    return region?.provincias ?? [];
  }
  function getComunas(regionNumber, provinciaName) {
    const provincias = getProvincias(regionNumber);
    if (provinciaName) {
      const normalized = provinciaName.toLowerCase().trim();
      const provincia = provincias.find((p) => p.name.toLowerCase() === normalized);
      return provincia?.comunas ?? [];
    }
    return provincias.flatMap((p) => p.comunas);
  }
  function getComunaByCode(code) {
    const normalizedCode = code.trim();
    for (const region of data) {
      for (const provincia of region.provincias) {
        const comuna = provincia.comunas.find((c) => c.code === normalizedCode);
        if (comuna) {
          return {
            comuna,
            provincia: provincia.name,
            region: region.region,
            region_number: region.region_number
          };
        }
      }
    }
    return void 0;
  }
  function searchComunas(query) {
    const normalized = query.toLowerCase().trim();
    const results = [];
    for (const region of data) {
      for (const provincia of region.provincias) {
        for (const comuna of provincia.comunas) {
          if (comuna.name.toLowerCase().includes(normalized)) {
            results.push({
              comuna,
              provincia: provincia.name,
              region: region.region,
              region_number: region.region_number
            });
          }
        }
      }
    }
    return results;
  }
  function getAllComunas() {
    const results = [];
    for (const region of data) {
      for (const provincia of region.provincias) {
        for (const comuna of provincia.comunas) {
          results.push({
            comuna,
            provincia: provincia.name,
            region: region.region,
            region_number: region.region_number
          });
        }
      }
    }
    return results;
  }
  function getAllProvincias() {
    const results = [];
    for (const region of data) {
      for (const provincia of region.provincias) {
        results.push({
          provincia,
          region: region.region,
          region_number: region.region_number
        });
      }
    }
    return results;
  }
  function getRegionOptions() {
    return data.map((region) => ({
      label: region.region,
      value: region.region_number
    }));
  }
  function getProvinciaOptions(regionNumber) {
    const provincias = getProvincias(regionNumber);
    return provincias.map((provincia) => ({
      label: provincia.name,
      value: provincia.name
    }));
  }
  function getComunaOptions(regionNumber, provinciaName) {
    const comunas = getComunas(regionNumber, provinciaName);
    return comunas.map((comuna) => ({
      label: comuna.name,
      value: comuna.code
    }));
  }
  function getAllComunaOptions() {
    const allComunas = getAllComunas();
    return allComunas.map((result) => ({
      label: `${result.comuna.name} (${result.region})`,
      value: result.comuna.code
    }));
  }
  return __toCommonJS(index_exports);
})();
//# sourceMappingURL=index.global.js.map