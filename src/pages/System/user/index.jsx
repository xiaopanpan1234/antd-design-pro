import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button } from 'antd';
import router from 'umi/router';

export default () => (
  <PageHeaderWrapper>
    <p
      style={{
        textAlign: 'center',
      }}
    >
     <Button onClick = {() =>{router.push('/system/user/add')}}>user go add </Button>
    </p>
  </PageHeaderWrapper>
);
