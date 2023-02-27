export function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  export const tabsValues = [
    {
      id: 0,
      title: 'male'
    },
    {
      id: 1,
      title: 'female'
    },
    {
      id: 2,
      title: 'others'
    }
  ]

  export const tabs = [0, 1, 2]