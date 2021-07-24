package com.srm.loan.Services;

import com.srm.loan.Model.Register;
import com.srm.loan.Repository.RegisterRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class RegisterImpl implements RegisterServ {

    @Autowired
    private RegisterRepo register;
    @Override
    public Register postData(Register reg) {
        return register.save(reg);
    }
    
    



}
