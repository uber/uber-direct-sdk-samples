import React, { useState } from 'react';
import { Tabs } from 'baseui/tabs';

export default ({ children }) => {
  const [activeKey, setActiveKey] = useState('0');
  return (
    <Tabs
      overrides={{
        Root: {
          style: ({ $theme }) => ({
            // Override styles here
          }),
        },
        TabBar: {
          style: ({ $theme }) => ({
            backgroundColor: $theme.colors.background,
          }),
        },
        TabContent: {
          style: ({ $theme }) => ({
            padding: $theme.sizing.scale600,
          }),
        },
      }}
      onChange={({ activeKey }) => {
        setActiveKey(activeKey.toString());
      }}
      activeKey={activeKey}
    >
      {children}
    </Tabs>
  );
};
