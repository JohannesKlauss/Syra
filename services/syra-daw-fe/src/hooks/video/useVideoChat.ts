import { RefObject, useEffect, useRef, useState } from "react";
import { useMeQuery } from '../../gql/generated';
import { useRecoilValue } from 'recoil';
import { projectStore } from '../../recoil/projectStore';
import { JitsiInstance } from "../../types/JitsiMeetExternalAPI";

export default function useVideoChat(ref: RefObject<HTMLDivElement>, width: number, height: number) {
  const [isInitialized, setIsInitialized] = useState(false);
  const projectId = useRecoilValue(projectStore.id);
  const { data } = useMeQuery();
  const api = useRef<JitsiInstance>();

  useEffect(() => {
    if (data?.me.id && projectId.length > 0 && window.JitsiMeetExternalAPI && ref.current && !isInitialized) {
      api.current = new window.JitsiMeetExternalAPI('meet.jit.si', {
        roomName: `syra-conference-${projectId}`,
        width,
        height,
        parentNode: ref.current,
        userInfo: {
          displayName: data.me.name,
          avatarUrl: data.me.avatar,
        },
        configOverwrite: {
          enableWelcomePage: false,
          chromeExtensionBanner: null,
          hideLobbyButton: true,
          disableProfile: true,
          doNotStoreRoom: true,
          hideConferenceSubject: true,
          hideConferenceTimer: true,
        },
        interfaceConfigOverwrite: {
          DEFAULT_LOGO_URL: 'https://syra.live',
          DEFAULT_WELCOME_PAGE_LOGO_URL: '',
          DISPLAY_WELCOME_FOOTER: false,
          HIDE_DEEP_LINKING_LOGO: true,
          HIDE_INVITE_MORE_HEADER: true,
          JITSI_WATERMARK_LINK: 'https://syra.live',
          NATIVE_APP_NAME: 'S Y R A',
          RECENT_LIST_ENABLED: false,
          SHOW_CHROME_EXTENSION_BANNER: false,
          SHOW_JITSI_WATERMARK: false,
          TOOLBAR_BUTTONS: [
            'microphone', 'camera',
            'fodeviceselection', 'hangup', 'profile', 'recording',
            'videoquality',
            'tileview', 'mute-everyone', 'security'
          ],
        }
      });

      setIsInitialized(true);
    }
  }, [data, projectId, window.JitsiMeetExternalAPI, ref, width, height, isInitialized, setIsInitialized]);

  useEffect(() => {
    return () => {
      api.current?.executeCommand('hangup');
      api.current?.dispose();
    }
  }, []);

  return api.current;
}
