import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import LabTestPrices from '../../_Lab/layouts/LabTestPrices';
// import InternalLabRequest from '../../_Lab/layouts/InternalLabRequest';
import LabRequestsSample from '../../_Lab/layouts/LabRequestsSample';
import LabTestsSummarySubSection from '../../_Lab/layouts/LabTestsSummarySubSection';
import AddLabRequest from '../../_Lab/layouts/AddLabRequest';

const AddLabTest = lazy(() => import('../../_Lab/layouts/AddLabTest'));
const InternalLabRequest = lazy(() => import('../../_Lab/layouts/InternalLabRequest'));
const InternalLabRequestsDetail = lazy(() => import('../../_Lab/layouts/InternalLabRequestDetail'));
const LabTemplates = lazy(() => import('../../_Lab/layouts/LabTemplates'));

const Lab = () => (
  <Routes>
    <Route path="/lab-test-prices" element={<LabTestPrices />} />
    <Route path="/lab-tests-summary-sub-section" element={<LabTestsSummarySubSection />} />
    <Route path="/lab-templates" element={<LabTemplates />} />
    <Route path="/add-lab-test/:id" element={<AddLabTest />} />
    <Route path="/add-lab-request/:id" element={<AddLabRequest />} />
    <Route path="/internal-lab-request" element={<InternalLabRequest />} />
    <Route path="/internal-lab-request-detail/:id" element={<InternalLabRequestsDetail />} />
    <Route path="/lab-request-sample/:id" element={<LabRequestsSample />} />
  </Routes>
);

export default Lab;
