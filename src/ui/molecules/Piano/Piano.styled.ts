import { styled } from '@material-ui/core';

export const PianoContainer = styled('div')({
  width: '100%',
  position: 'relative',
  overflowX: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  marginTop: 20,
});

interface KeyStyleProps {
  isActive: boolean;
}

export const NaturalKey = styled('div')({
  zIndex: 0,
  borderWidth: '1px',
  borderColor: '#4a5568',
  borderTopWidth: 0,
  borderBottomRightRadius: '0.125rem',
  borderBottomLeftRadius: '0.125rem',
  borderStyle: 'solid',
  backgroundColor: '#fff',
  display: 'flex',
  flex: '1 1 0%',
  cursor: 'pointer',
  userSelect: 'none',
  transition: 'all 200ms',
  width: 'auto !important',
  height: ({isActive}: KeyStyleProps) => isActive ? '205px' : '210px',
  backgroundImage: ({isActive}: KeyStyleProps) => isActive ? 'linear-gradient(#42c9ff, #28e6ff)' : 'none',
  borderBottom: '4px solid #90caf9',
});

export const KeyLabel = styled('div')({
  width: '100%',
  userSelect: 'none',
  textTransform: 'uppercase',
  fontSize: '0.875rem',
  color: '#4a5568',
  paddingBottom: '1rem',
  justifyContent: 'center',
  alignSelf: 'flex-end',
  display: 'flex',
});

export const AccidentalKey = styled('div')({
  height: ({isActive}: KeyStyleProps) => isActive ? '5.8rem' : '6rem',
  zIndex: 10,
  borderWidth: '1px',
  borderColor: '#000',
  borderBottomRightRadius: '0.125rem',
  borderBottomLeftRadius: '0.125rem',
  backgroundColor: '#2d3748',
  position: 'absolute',
  top: 0,
  cursor: 'pointer',
  display: 'flex',
  userSelect: 'none',
  transition: 'all 200ms',
  backgroundImage: ({isActive}: KeyStyleProps) => isActive ? 'linear-gradient(#42c9ff, #28e6ff)' : 'none',
  boxShadow: '-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5)',
});