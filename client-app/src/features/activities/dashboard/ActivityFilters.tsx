import React from 'react';
import Calendar from 'react-calendar';
import { Header, Menu } from 'semantic-ui-react';

export default function ActivityFilters() {
  return (
    <>
      <Menu vertical size='large' style={{ width: '100%', marginTop: 28 }}>
        <Header icon='filter' attached color='teal' content='filters' />
        <Menu.Item content='All Activites' />
        <Menu.Item content="I'm Going" />
        <Menu.Item content="I'm Hosting" />
      </Menu>
      <Header />
      <Calendar />
    </>
  );
}
