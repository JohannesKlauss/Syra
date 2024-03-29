import React from 'react';
import PageBox from '../../ui/atoms/PageBox/PageBox';
import ProtectedRoute from "../../providers/auth/ProtectedRoute";

export default function ChatPage() {

  return (
    <ProtectedRoute>
      <PageBox>
        Messaging is coming soon.
      </PageBox>
    </ProtectedRoute>
  );
}