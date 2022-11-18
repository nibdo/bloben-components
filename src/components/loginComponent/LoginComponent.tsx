import {
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { Context, StoreContext } from '../../context/store';
import ChakraInput from '../chakraCustom/ChakraInput';
import PrimaryButton from '../chakraCustom/primaryButton/PrimaryButton';
import React, { useContext, useState } from 'react';
import Separator from '../separator/Separator';

interface LoginComponentProps {
  onSubmitLogin: (username: string, password: string) => void;
  onSubmitTwoFactorLogin: (
    username: string,
    password: string,
    otpCode: string,
    trustBrowser: boolean
  ) => void;
  twoFactorVisible: boolean;
  isLoading: boolean;
  title?: string;
  enableTrustBrowser?: boolean;
}
const LoginComponent = (props: LoginComponentProps) => {
  const {
    twoFactorVisible,
    onSubmitLogin,
    onSubmitTwoFactorLogin,
    isLoading,
    title,
    enableTrustBrowser,
  } = props;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [trustBrowser, setTrustBrowser] = useState(false);

  const [store]: [StoreContext, any] = useContext(Context);

  const { isMobile } = store;

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const onChange = (e: any) => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
    if (e.target.name === 'otpCode') {
      setOtpCode(e.target.value);
    }
  };

  const login = () => onSubmitLogin(username, password);

  const submitTwoFactorCode = async () => {
    onSubmitTwoFactorLogin(username, password, otpCode, trustBrowser);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <Container
        width={isMobile ? '100%' : 350}
        paddingInlineStart={'1.3rem'}
        paddingInlineEnd={'1.3rem'}
      >
        {!twoFactorVisible ? (
          <>
            <Heading as="h2" size="2xl">
              {title ? title : 'Login'}
            </Heading>
            <Separator height={30} />
            <FormControl id="username" size="2xl">
              <FormLabel size="2xl">Username</FormLabel>
              <ChakraInput
                id={'login-username'}
                size={'lg'}
                name={'username'}
                value={username}
                onChange={onChange}
                autoComplete={'off'}
              />
            </FormControl>
            <Separator height={20} />
            <FormControl id="password" size="2xl">
              <FormLabel size="2xl">Password</FormLabel>
              <InputGroup size={'lg'}>
                <ChakraInput
                  size={'lg'}
                  type={show ? 'text' : 'password'}
                  name={'password'}
                  value={password}
                  onChange={onChange}
                  onKeyPress={(e: any) => {
                    if (e.key === 'Enter' || e.keyCode == 13) {
                      login();
                    }
                  }}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    _focus={{ boxShadow: 'none' }}
                    h="1.75rem"
                    size="sm"
                    onClick={handleClick}
                  >
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Separator height={40} />
            <Center flexDirection={'column'}>
              <PrimaryButton isLoading={isLoading} onClick={login}>
                Login
              </PrimaryButton>
              <Separator height={80} />
            </Center>
          </>
        ) : (
          <>
            <Heading as="h2" size="2xl">
              Two factor
            </Heading>
            <Separator height={30} />
            <FormControl id="otpCode" size="2xl">
              <FormLabel size="2xl">Code</FormLabel>
              <ChakraInput
                id={'login-otpCode'}
                size={'lg'}
                name={'otpCode'}
                value={otpCode}
                onChange={onChange}
                autoComplete={'off'}
                autoFocus={true}
                onKeyPress={(e: any) => {
                  if (e.key === 'Enter' || e.keyCode == 13) {
                    submitTwoFactorCode();
                  }
                }}
              />
            </FormControl>
            <Separator height={40} />
            {twoFactorVisible && enableTrustBrowser ? (
              <>
                <Flex direction={'row'}>
                  <Checkbox
                    onChange={() => setTrustBrowser(!trustBrowser)}
                    isChecked={trustBrowser}
                    size={'lg'}
                  />
                  <Separator width={24} />
                  <Text>Trust this browser</Text>
                </Flex>
                <Separator height={40} />
              </>
            ) : null}
            <Center flexDirection={'column'}>
              <PrimaryButton
                isLoading={isLoading}
                onClick={submitTwoFactorCode}
              >
                Confirm
              </PrimaryButton>
              <Separator height={80} />
            </Center>
          </>
        )}
      </Container>
    </div>
  );
};

export default LoginComponent;
