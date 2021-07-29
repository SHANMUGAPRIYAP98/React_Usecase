package com.srm.loan.Exceptions;

import java.util.Date;
import java.util.Random;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
    
   @ExceptionHandler
   public ResponseEntity<Errors> handleRtException(Exception ex,WebRequest req)
   {
        Random r=new Random();
        Errors err=new Errors();
        err.setId(r.nextInt());
        err.setDate(new Date());
        err.setErrCode("Error Code");
        err.setErrMessage("Invalid Attemps");
        err.setCategory("Runtime Exception");
        System.out.println(err.toString());
        return new ResponseEntity<Errors>(err,HttpStatus.OK);
   }
}
