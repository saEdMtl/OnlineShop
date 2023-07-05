import React from 'react';

//Components
import IntroduceSection from "./IntroduceSection";
import CategorySection from "./CategorySection";
import NewProductsSection from "./NewProductsSection";
import BestSellerSection from "./BestSellerSecction";
import StepsSection from "./StepsSection.js";
import FooterSection from "./FooterSection.";

const HomePage = () => {
    return (
        <div>
            <IntroduceSection />
            <CategorySection />
            <NewProductsSection />
            <BestSellerSection />
            <StepsSection />
            <FooterSection />
        </div>
    );
};

export default HomePage;