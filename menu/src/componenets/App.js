import Footer from "./views/Footer/Footer";
import Main from "./views/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageTwo from "./views/PageTwo/PageTwo";
import PageThree from "./views/PageThree/PageThree";
import PageFour from "./views/PageFour/PageFour";
import MenuDetail from "./views/PageThree/Detail/MenuDetail";

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
            <Route path="/Three" element={<PageThree />} />
            <Route path="/Menu" element={<MenuDetail />} />
            <Route path="/Four" element={<PageFour />} />
          </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
