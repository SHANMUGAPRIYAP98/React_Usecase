package com.srm.loan.Services;
import com.srm.loan.Model.Register;
import com.srm.loan.Repository.LoginRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class LoginServImpl implements LoginServ {
    
    @Autowired
    private LoginRepo loginrepo;

    @Override
    public Register findMailAndPass(String mail) {
       return loginrepo.fetchMailAndPass(mail);
    }


    
}
