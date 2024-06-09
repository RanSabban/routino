import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage  from './pages/HomePage';
import ActivitiesIndex from './pages/ActivitiesIndex';

export default function RootCmp() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/activities" element={<ActivitiesIndex />} />
      </Routes>
  );
}
