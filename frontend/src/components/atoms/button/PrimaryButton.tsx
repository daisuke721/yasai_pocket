import { Button } from '@chakra-ui/react';

type ButtonProps = {
  onClick: () => void;
  label: string;
};

export const PrimaryButton: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <Button colorScheme="gray" borderRadius="10px" marginLeft="5px" onClick={onClick}>
      {label}
    </Button>
  );
};
