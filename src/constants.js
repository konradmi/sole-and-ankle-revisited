const BREAKPOINTS_REM = {
  phoneMax: 37.5,
  tabletMax: 59.375,
  laptopMax: 81.25,
}

export const QUERIES = {
  'phoneAndSmaller' : `(max-width: ${BREAKPOINTS_REM.phoneMax}rem)`,
  'tabletAndSmaller': `(max-width: ${BREAKPOINTS_REM.tabletMax}rem)`,
  'laptopAndSmaller': `(max-width: ${BREAKPOINTS_REM.laptopMax}rem)`,
}
