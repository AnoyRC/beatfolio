'use client';

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import { useState } from 'react';

const UnderlineTabs = ({ data, value, margin }) => {
  const [activeTab, setActiveTab] = useState(value);

  return (
    <Tabs value={activeTab} className={margin}>
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
