import { FC, useState, SyntheticEvent } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '../../componets/Tabs/TabPanel';
import { a11yProps, tabs, tabsValues } from './constants';
import { queryKeysFilter } from '../../helper/queryKeysFilter.helper';
import { useQueryPip } from '../../hooks/useQueryPip';
import GenderList from '../GenderList';

const MainTabs: FC = () => {
  const [value, setValue] = useState(0);
  const [queryKeys, setQueryKeys] = useState('male');
  const { data } = useQueryPip({ cacheKey: queryKeys })

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setQueryKeys(queryKeysFilter({ index: newValue }))
  };


  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {
            tabsValues.map((tab) => (
              <Tab key={tab.id} label={tab.title} {...a11yProps(tab.id)} />
            ))
          }
        </Tabs>
      </Box>
      {
        tabs.map((tab) => (
          <TabPanel value={value} index={tab} key={tab}>
            {queryKeys}
            {
              data && data.results.length > 0 && (
                <GenderList people={data.results} />
              )
            }
          </TabPanel>
        ))
      }
    </Box>
  );
}

export default MainTabs
