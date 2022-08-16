import './App.css';
import styled from 'styled-components';
import { Button } from './components/Button/Button';
import { BiCaretRight, BiChart } from 'react-icons/bi';
import { Box } from './components/Box/Box';

const Text = styled.p`
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.l};
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
`;

function App() {
  return (
    <Box bg="white" px={2} as="main">
      <Text>Text</Text>
      <Button icon={BiCaretRight}>Button</Button>
      <Button icon={BiChart}>Button</Button>
      <Box as="section">
        <Text>Hellow Section</Text>
        <Button type="submit">Submit</Button>
        <Button type="submit" disabled>
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default App;
