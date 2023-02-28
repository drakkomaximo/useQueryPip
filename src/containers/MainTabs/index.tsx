import { FC, useState, SyntheticEvent } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '../../componets/Tabs/TabPanel';
import { a11yProps, tabsValues } from './constants';
import GenderList from '../GenderList';
import { useResponse } from '../../hooks/useResponse';
import RickAndMortyList from '../RickAndMortyList';
import { GenderDto } from '../../interfaces/useQueryPip.interface';
import { Divider, SelectChangeEvent } from '@mui/material';
import FooComponent from '../FooComponent/FooComponent';

const MainTabs: FC = () => {
  const [value, setValue] = useState(0);
  const [gender, setGender] = useState<GenderDto>('male');
  const [size, setSize] = useState<number>(1);
  const [episode, setEpisode] = useState<number>(1);
  const { randonUserResponse, rickAndMortyResponse, rickAndMortyResponseError, rickAndMortyResponseStatus, randonUserResponseError, randonUserResponseStatus } = useResponse({ gender, episode, size })

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleEpisode = ({ episode }: { episode: number }) => {
    setEpisode(episode)
  }

  const handleSize = ({ size }: { size: number }) => {
    setSize(size)
  }

  const handleGender = (event: SelectChangeEvent<GenderDto>) => {
    if (event.target.value === 'male' || event.target.value === 'female' || event.target.value === 'others') {
      setGender(event.target.value);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <FooComponent />
      <Divider sx={{ mt: 2, mb: 1}}/>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {
            tabsValues.map((tab) => (
              <Tab key={tab.id} label={tab.title} {...a11yProps(tab.id)} />
            ))
          }
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
            {
              randonUserResponse && randonUserResponse.results.length > 0 && (
                <GenderList people={randonUserResponse.results} gender={gender}
                  size={size}
                  handleSize={handleSize}
                  handleGender={handleGender}
                  error={randonUserResponseError}
                  loading={randonUserResponseStatus}
                />

              )
            }
          </TabPanel>
      <TabPanel value={value} index={1} >
        <RickAndMortyList rickAndMortyData={rickAndMortyResponse} handleEpisode={handleEpisode} error={rickAndMortyResponseError} loading={rickAndMortyResponseStatus} character={episode} />
      </TabPanel>
    </Box>
  );
}

export default MainTabs
