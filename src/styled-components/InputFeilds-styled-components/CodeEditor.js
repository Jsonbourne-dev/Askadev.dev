import styled from "styled-components";
import AceEditor from "react-ace";
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

const CodeEditor = styled(AceEditor)`
  height: 200px;
  width: 100%;
  max-width: 100%;
  overflow: hidden;

  @media (max-width: 1000px) {
    height: 150px;
  }
`;

export default CodeEditor;
