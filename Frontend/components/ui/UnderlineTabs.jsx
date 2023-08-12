'use client';

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import { useState } from 'react';
import PlaylistLists from '../layout/lists/PlaylistLists';
import TrackLists from '../layout/lists/TrackLists';

const UnderlineTabs = () => {
  const [activeTab, setActiveTab] = useState('playlists');

  const data = [
    {
      label: 'Playlists',
      value: 'playlists',
      jsx: <PlaylistLists />,
    },
    {
      label: 'Tracks',
      value: 'tracks',
      jsx: <TrackLists />,
    },
  ];

  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            'bg-transparent border-b-2 border-gray-900 shadow-none rounded-none',
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={`transition-all ease-in-out duration-300 ${
              activeTab === value
                ? 'text-white border-b-2 border-white'
                : 'text-gray-500 border-b-2 border-transparent'
            }`}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>

      <TabsBody>
        {data.map(({ value, jsx }) => (
          <TabPanel key={value} value={value}>
            {jsx}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default UnderlineTabs;
