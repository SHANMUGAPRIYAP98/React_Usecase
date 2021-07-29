package com.srm.loan.Services;

import java.util.Optional;

import com.srm.loan.Model.LoanData;

public interface LoanServ {
    public void saveLoanData(LoanData loan);
    public Optional<LoanData> getData(Integer id);
}
