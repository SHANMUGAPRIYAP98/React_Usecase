package com.srm.loan.Controllers;

import com.srm.loan.Model.Register;
import com.srm.loan.Services.LoginServImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/login")
public class LoginController extends BaseController {
    
    @Autowired
    private LoginServImpl loginserv;

    @GetMapping(value="/getMailPass/{mail}")
    public ResponseEntity<Register> getMailPass(@PathVariable String mail) {
        Register r=loginserv.findMailAndPass(mail);
        System.out.println(r.toString());
        return new ResponseEntity<Register>(loginserv.findMailAndPass(mail),HttpStatus.OK);
    }
}
