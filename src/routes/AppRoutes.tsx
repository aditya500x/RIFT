import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import FAQs from "@/pages/FAQs";
import Jury from "@/pages/Jury";
import Team from "@/pages/Team";
import NotFound from "@/pages/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/jury" element={<Jury />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
