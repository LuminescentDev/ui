import { TextInput } from './components/elements';
import './global.css';

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <TextInput id="clickme">
          Click me
        </TextInput>
      </body>
    </>
  );
};
