import { Route, Routes } from "react-router-dom"
import { HomePage } from "../../HomePage"
import { Insurance } from "../pages/insurance"
import { RealEstate } from "../pages/realestate"
import { SmallBusiness } from "../pages/smallbusiness"

import { TaxPrep } from "../pages/taxprep"

export const AppViews=() => {
    return(<>
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/tax" element={<TaxPrep />} />
        <Route path="/realestate" element={<RealEstate />} />
        <Route path="/smallbusiness" element={<SmallBusiness />} />
        <Route path="/insurance" element={<Insurance />} />
    </Routes>
    </>
    )
}