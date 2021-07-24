package com.srm.loan.Services;


import com.srm.loan.Model.Register;

public interface LoginServ {
    public Register findMailAndPass(String mail);
}
