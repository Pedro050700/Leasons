import styled from 'styled-components';

import { Container, FileInfo, Preview } from './styles';

const FileLIst = () => (
    <Container>
    <li>
    <FileInfo>
    <Preview>
    <div>
        <strong>profile.png</strong>
        
        <span>64kb <button onClick={ () => {}}>Excluir</button></span>
    </div>
    <FileInfo/>
    </li>
    <CircularProgressbar
        styles={{
            root: { width: 24},
            path: { stroke: '#7159c1'}
        }}
        strokeWidth={10}
        percentage={60}
    />
    </Container>

);

export default FileList;

