import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter} from 'react-router-dom';


ReactDOM.render(
    // React는 Single Page Application을 위한 라이브러리인데
    // 프로젝트의 규모가 커지면 렌더링 시간이 오래 걸린다는 문제가 있다.

    // 이를 해결하기 위해 ReactRouter 라이브러리에서
    // BrowserRouter를 불러와 Routing 기능을 사용한다.
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root')
);