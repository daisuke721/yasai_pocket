import { Input } from '@chakra-ui/react';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export const InputText: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  return (
    <Input
      borderRadius="10px"
      bg="white"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      _placeholder={{ opacity: 1, color: 'gray.400' }}
    />
  );
};
