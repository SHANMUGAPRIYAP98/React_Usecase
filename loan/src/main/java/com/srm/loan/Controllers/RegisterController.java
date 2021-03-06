package com.srm.loan.Controllers;

import com.srm.loan.Model.Register;
import com.srm.loan.Services.RegisterImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/register")
public class RegisterController extends BaseController  {
    @Autowired
    private RegisterImpl reg;

    @PostMapping("/saveData")
    public void saveData(@RequestBody Register register)
    {
        System.out.println("welcome to controller class");
        reg.postData(register);
        System.out.println(register);
    }
}
