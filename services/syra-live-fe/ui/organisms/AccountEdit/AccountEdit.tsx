import React from 'react';
import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import EditProfileTab from '../../molecules/AccountEdit/EditProfileTab/EditProfileTab';
import { useTranslation } from 'react-i18next';
import ChangePasswordTab from '../../molecules/AccountEdit/ChangePasswordTab/ChangePasswordTab';

const panels = {
  editProfile: {
    label: 'Edit Profile',
    content: <EditProfileTab/>,
  },
  changePassword: {
    label: 'Change Password',
    content: <ChangePasswordTab/>,
  },
};

interface Props {
}

function AccountEdit({}: Props) {
  const { t } = useTranslation();

  return (
    <Box p={4} bg={'gray.900'} boxShadow={'0px 3px 24px -5px rgba(0,0,0,1)'}>
      <Tabs orientation={'vertical'}>
        <Flex>
          <TabList border={0} flex={2}>
            {Object.keys(panels).map(panelKey => (
              <Tab
                key={panelKey}
                border={0}
                py={4}
                justifyContent={'flex-start'}
                _selected={{
                  color: 'blue.300',
                  borderRight: '2px solid',
                  borderBottomWidth: 0,
                  borderColor: 'currentColor',
                }}
                _hover={{
                  borderRight: '2px solid',
                  borderBottomWidth: 0,
                  borderColor: 'blue.300',
                }}
              >
                {t(panels[panelKey].label)}
              </Tab>
            ))}
          </TabList>
          <TabPanels flex={10}>
            {Object.keys(panels).map(panelKey => (
              <TabPanel px={32} key={panelKey}>{panels[panelKey].content}</TabPanel>
            ))}
          </TabPanels>
        </Flex>
      </Tabs>
    </Box>
  );
}

export default AccountEdit;
