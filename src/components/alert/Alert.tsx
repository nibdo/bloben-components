import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';
import React, { useRef } from 'react';

interface AlertProps {
  isOpen: boolean;
  onClose: any;
  header: string;
  body: string;
  isLoading?: boolean;
  onSubmit: any;
  submitText?: string;
}

const Alert = (props: AlertProps) => {
  const {
    isOpen,
    header,
    body,
    onClose,
    isLoading,
    onSubmit,
    submitText = 'Confirm',
  } = props;

  const leastDestructiveRef = useRef(null);

  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onClose}
      leastDestructiveRef={leastDestructiveRef}
      isCentered={true}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {header}
          </AlertDialogHeader>

          <AlertDialogBody>{body}</AlertDialogBody>

          <AlertDialogFooter>
            <Button
              ref={leastDestructiveRef}
              _focus={{ boxShadow: 'none' }}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              _focus={{ boxShadow: 'none' }}
              isLoading={isLoading}
              colorScheme="red"
              onClick={onSubmit}
              ml={3}
            >
              {submitText}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default Alert;
