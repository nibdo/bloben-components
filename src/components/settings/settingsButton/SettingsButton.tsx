import { Button } from '@chakra-ui/react';
import { Context, StoreContext } from '../../../context/store';
import { useContext } from 'react';
import React from 'react';

export interface SettingsButtonProps {
  onClick: any;
  icon: any;
  text: string;
  path: string;
  selected: string;
}
const SettingsButton = (props: SettingsButtonProps) => {
  const [store]: [StoreContext] = useContext(Context);
  const { isMobile } = store;

  return (
    <Button
      _focus={{ boxShadow: 'none' }}
      leftIcon={props.icon}
      variant={props.selected === props.path && !isMobile ? 'solid' : 'ghost'}
      onClick={props.onClick}
      style={{ background: isMobile ? 'transparent' : undefined }}
      width={'full'}
      justifyContent={'flex-start'}
      fontSize={isMobile ? 16 : 14}
    >
      {props.text}
    </Button>
  );
};

export default SettingsButton;
