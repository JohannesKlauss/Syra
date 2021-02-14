import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import Home from '../../index';
import useApiResToast from '../../../hooks/ui/useApiResToast';
import { useTranslation } from 'react-i18next';
import publicRuntimeConfig from "../../../const/config";

export default function Profile({ success }) {
  const toast = useApiResToast();
  const { t } = useTranslation();

  if (typeof window !== 'undefined') {
    if (success) {
      toast(
        t('Sent password via mail'),
        'success',
        t('We sent you a mail that contains your new password. You can now login with that.'),
        5000,
      );
    } else {
      toast(
        t('Link is not valid'),
        'error',
        t('The link you called isn\'t valid anymore. If you want to reset your password, please try again.'),
        5000,
      );
    }
  }

  return <Home />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios.get(`${publicRuntimeConfig.NEXT_PUBLIC_LIVE_GQL_URL}/password/reset/${context.query.token}`);

  const success = res.status === 200;

  return {
    props: {
      success,
    },
  };
};
