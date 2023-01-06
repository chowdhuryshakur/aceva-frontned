import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AcevaScreen from './screens/AcevaScreen';
import AdminScreen from './screens/AdminScreen';
import AuthorScreen from './screens/AuthorScreen';
import BlogDetails from './screens/BlogDetails';
import BlogScreen from './screens/BlogScreen';
import CategoryScreen from './screens/CategoryScreen';
import DashboardScreen from './screens/DashboardScreen';
import DemoScreen from './screens/DemoScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import PageDetailsScreen from './screens/PageDetailsScreen';
import PricingScreen from './screens/PricingScreen';
import ProductScreen from './screens/ProductScreen';

function App() {

  const isUser = localStorage.getItem('userInfo')

  console.log(isUser)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/product" element={<ProductScreen />} />
        <Route path="/pricing" element={<PricingScreen />} />
        <Route path="/blog" element={<BlogScreen />} />
        <Route path="/category/:id" element={<CategoryScreen />} />
        <Route path="/author/:id" element={<AuthorScreen />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/page/:id" element={<PageDetailsScreen />} />
        <Route path="/aceva" element={<AcevaScreen />} />
        <Route path="/demo" element={<DemoScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
