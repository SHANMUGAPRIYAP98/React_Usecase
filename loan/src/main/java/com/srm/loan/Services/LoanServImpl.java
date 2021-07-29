package com.srm.loan.Services;

import java.util.Optional;

import com.srm.loan.Model.LoanData;
import com.srm.loan.Model.Register;
import com.srm.loan.Repository.LoanRepo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoanServImpl implements LoanServ {

    @Autowired
    private LoanRepo loanRepo;

    @Override
    public void saveLoanData(LoanData loan) {
       Register r=new Register();
       r.setCname("diyashri");
       r.setMail("diyashri@gmail.com");
       r.setPass("Abc@1234");
       r.setPhone(9840515309l);
       r.setZip(600118);
       loan.setRegister(r);
       loanRepo.save(loan);
    }

    @Override
    public Optional<LoanData> getData(Integer id) {      
        return loanRepo.findById(id);
    }
    
}
