import React from "react";

const MealsSummary = () => {
    return (
        <section className="bg-zinc-800 relative   w-[100%] font-semibold text-center -top-20  md:w-[65%] lg:w-[40%] mx-auto p-6 rounded-xl text-white space-y-3 shadow-2xl shadow-black">
            <h2 className="font-bold text-4xl mb-5">Delicious Food, Delivered To You</h2>
            <p className="text-gray-200">
                Choose your favorite meal from our broad selection of available meals
                and enjoy a delicious lunch or dinner at home.
            </p>
            <p className="text-gray-200">
                All our meals are cooked with high-quality ingredients, just-in-time and
                of course by experienced chefs!
            </p>
        </section>
    );
};

export default MealsSummary;