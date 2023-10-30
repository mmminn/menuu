import Footer from "./views/Footer/Footer";
import Main from "./views/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Top from "./views/Top/Top";
import BarTwo from "./views/BarTwo/BarTwo";
import PageTwo from "./views/PageTwo/PageTwo";

function App() {
  return (
    <div className="App">
      {/* <Top /> */}
      <div style={{ minHeight: 'calc(100vh - 80px)' }}>
        {/* 요청된 경로로 페이지 이동 : 특정 컴포넌트 실행 */}
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Two" element={<PageTwo />} />
          </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
