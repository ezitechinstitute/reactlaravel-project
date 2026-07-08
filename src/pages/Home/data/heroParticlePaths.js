/* ===========================================================
   HERO PARTICLE CURVES — the 8 motion-path curves the hero
   background particles travel along. `startParticles()` in
   src/components/Layout.jsx looks these up by
   `#curve-path-1`..`#curve-path-8`, so the `n` here MUST stay
   1-8 and map 1:1 to those ids (see Home.jsx render).
=========================================================== */

export const HERO_PARTICLE_CURVES = [
  { n: 1, d: 'M420.5 0V688.857C420.5 739.32 398.08 787.176 359.307 819.475L221.193 934.525C182.42 966.824 160 1014.68 160 1065.14V1436' },
  { n: 2, d: 'M1040.5 0V688.857C1040.5 739.32 1057.92 787.176 1096.69 819.475L1234.81 934.525C1273.58 966.824 1296 1014.68 1296 1065.14V1436' },
  { n: 3, d: 'M296.5 0V647.386C296.5 696.681 275.102 743.549 237.854 775.839L54.6455 934.661C17.3976 966.951 -4 1013.82 -4 1063.11V1469.5' },
  { n: 4, d: 'M1164.5 0V647.386C1164.5 696.681 1185.9 743.549 1223.15 775.839L1406.35 934.661C1443.6 966.951 1465 1013.82 1465 1063.11V1469.5' },
  { n: 5, d: 'M544.5 0V704.584C544.5 749.67 526.589 792.911 494.708 824.792L383.792 935.708C351.911 967.589 334 1010.83 334 1055.92V1469.5' },
  { n: 6, d: 'M916.5 0V704.584C916.5 749.67 934.411 792.911 966.292 824.792L1077.21 935.708C1109.09 967.589 1127 1010.83 1127 1055.92V1469.5' },
  { n: 7, d: 'M668.5 0V679.422C668.5 709.28 660.636 738.611 645.7 764.465L540.8 946.035C525.864 971.889 518 1001.22 518 1031.08V1469.5' },
  { n: 8, d: 'M792.5 0V679.422C792.5 709.28 800.364 738.611 815.3 764.465L920.2 946.035C935.136 971.889 943 1001.22 943 1031.08V1469.5' },
];

/* Each curve has PARTICLE_RECT_COUNT (60) tiny 1x1 <rect> "particles"
   riding along it, ids `rect-<curveN>-<rectIndex>` (1-60). Generated
   in Home.jsx via a nested loop instead of 480 hand-written lines —
   startParticles() only ever does getElementById('rect-N-I'), so the
   generation method doesn't matter as long as every id exists. */
export const PARTICLE_RECT_COUNT = 60;
