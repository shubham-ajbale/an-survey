import { MapPin, Route, Waves, Ruler, Mountain, Sun, LocateFixed, Layers, Calculator, ScanLine, Plane, Crosshair, Building2, Map, DraftingCompass, Compass, Move3D, Grid2X2 } from 'lucide-react'

export const services = [
  ['Layout Survey & Demarcation','Boundary and plot layout measurements to support site planning.',MapPin],
  ['Road Survey','Survey information for road alignment, planning and improvement.',Route],
  ['Nalah Survey','Field measurements for nala and drainage corridor mapping.',Waves],
  ['Canal Survey','Survey support for canal alignment and related infrastructure.',Waves],
  ['L-Section & Cross Section','Longitudinal and cross-sectional measurements for design.',Ruler],
  ['Topographical Survey','Site levels and features captured for planning and design.',Mountain],
  ['Solar Survey','Site survey information to support solar project planning.',Sun],
  ['Construction Setting Out / Demarcation','Transfer design positions and reference points to the site.',LocateFixed],
  ['Contour Mapping','Terrain representation using contours and elevation data.',Layers],
  ['Quantity Survey','Measurement support for quantity calculations and planning.',Calculator],
  ['As-Built Survey','Record existing site conditions and completed work positions.',ScanLine],
  ['Drone Survey & Mapping','Aerial survey and mapping workflows where suitable.',Plane],
  ['DGPS Survey','Satellite positioning support for survey control and coordinates.',Crosshair],
  ['Total Station Survey','Precise site measurements for engineering and construction.',Ruler],
  ['Architecture Ground Plan','Ground information to support architectural planning.',Building2],
  ['Building Plan & Layout','Site layout and planning information for building projects.',Grid2X2],
  ['Site Development Plan','Survey inputs to support site development decisions.',Compass],
  ['Area & Dimension Planning','Area and dimensional information for land and site planning.',Move3D]
].map(([name, description, Icon]) => ({ name, description, Icon }))

export const approach = [
  ['01','Precision-first approach'],['02','Field-to-digital workflow'],
  ['03','Survey & mapping services'],['04','Client-focused delivery']
]
export const projects = [
  { number:'Project 01', title:'Topographic Site Survey', description:'Terrain and site feature mapping for development planning.' },
  { number:'Project 02', title:'Infrastructure Mapping', description:'Organized spatial information for infrastructure projects.' },
  { number:'Project 03', title:'Construction Set-Out', description:'Survey support for accurate positioning and site execution.' }
]

export const gallery = Array.from({ length: 10 }, (_, i) => ({
  src: `${import.meta.env.BASE_URL}assets/site${i + 6}.png`,
  alt: `On-site surveying photograph ${i + 1}`,
  label: `Field work ${String(i + 1).padStart(2, '0')}`
}));


export const clients = Array.from({ length: 10 }, (_, i) => ({
  src: `${import.meta.env.BASE_URL}assets/cli${i + 1}.png`,
  alt: `Client logo ${i + 1}`,
  label: `Client logo ${i + 1}`
}));

export const partners = [
  {
    name: 'Amar Malode',
    role: 'Founder & MD',
    detail: '13+ years of experience',
    image: `${import.meta.env.BASE_URL}assets/pr2.png.png`,
    initials: 'AM'
  },
  {
    name: 'Suraj Malode',
    role: 'Co-Founder',
    detail: '8+ years of experience',
    image: `${import.meta.env.BASE_URL}assets/pr3.png.png`,
    initials: 'SM'
  },
  {
    name: 'Dnyaneshwari Shende',
    role: 'Co-Founder',
    detail: 'B-Tech in Civil Engineering · 2+ years of experience',
    image: `${import.meta.env.BASE_URL}assets/pr1.png.png`,
    initials: 'DS'
  }
];

export const processSteps = [
  ['01','Understand','Review your site, project requirements and expected outputs.'],
  ['02','Survey',"Plan and execute field measurements around the project's needs."],
  ['03','Process','Organize measurements into maps, drawings and spatial data.'],
  ['04','Deliver','Provide clear outputs ready for planning, engineering or construction.']
]