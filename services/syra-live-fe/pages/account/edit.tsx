import React from 'react';
import PageBox from '../../ui/atoms/PageBox/PageBox';
import AccountEdit from '../../ui/organisms/AccountEdit/AccountEdit';
import ProtectedRoute from "../../providers/auth/ProtectedRoute";

export default function AccountEditPage() {
  return (
    <ProtectedRoute>
      <PageBox>
        <AccountEdit/>
      </PageBox>
    </ProtectedRoute>
  );
}