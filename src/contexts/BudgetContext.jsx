import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {
  const [budgetMode, setBudgetMode] = useState(false);
  const [maxPrice, setMaxPrice] = useState(null);

  const contextValue = { budgetMode, setBudgetMode, maxPrice, setMaxPrice };
  return (
    <BudgetContext.Provider value={contextValue}>
      {children}
    </BudgetContext.Provider>
  );
}

function useBudget() {
  return useContext(BudgetContext);
}

export { BudgetProvider, useBudget };
