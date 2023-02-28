export function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const tabsValues = [
  {
    id: 0,
    title: 'Listado con Géneros'
  },
  {
    id: 1,
    title: 'Listado con RickAndMorty'
  }
]

export const tabs = [0]