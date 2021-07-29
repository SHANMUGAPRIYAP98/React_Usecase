package com.srm.loan.Controllers;

import java.util.Optional;
import com.srm.loan.Model.LoanData;
import com.srm.loan.Services.LoanServImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/loan")
public class LoanController extends BaseController{
    @Autowired
    private LoanServImpl loanServ;
    @PostMapping(value = "/postData")
    public void postData(@RequestBody LoanData loan)
    {
        loanServ.saveLoanData(loan);
    }
    @GetMapping(value = "/fetchData/{id}",produces = MediaType.APPLICATION_JSON_VALUE )
    public Optional<LoanData> getData(@PathVariable Integer id)
    {
        return loanServ.getData(id);
    }
}
