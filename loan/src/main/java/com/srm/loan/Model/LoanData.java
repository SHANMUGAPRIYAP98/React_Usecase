package com.srm.loan.Model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name = "loan_details")
public class LoanData extends GeneralData {
   private String payment;
   private Integer tenure;
   private String loantype;
   private String disburse;
   private String holdername;
   private  Long accountno;
   private String ifsc;
   private Double income;
   private String purpose;
   @ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
   @JoinColumn(name = "rid")
   private Register register;
public String getPayment() {
    return payment;
}
public void setPayment(String payment) {
    this.payment = payment;
}
public Integer getTenure() {
    return tenure;
}
public void setTenure(Integer tenure) {
    this.tenure = tenure;
}
public String getLoantype() {
    return loantype;
}
public void setLoantype(String loantype) {
    this.loantype = loantype;
}
public String getDisburse() {
    return disburse;
}
public void setDisburse(String disburse) {
    this.disburse = disburse;
}
public String getHoldername() {
    return holdername;
}
public void setHoldername(String holdername) {
    this.holdername = holdername;
}
public Long getAccountno() {
    return accountno;
}
public void setAccountno(Long accountno) {
    this.accountno = accountno;
}
public String getIfsc() {
    return ifsc;
}
public void setIfsc(String ifsc) {
    this.ifsc = ifsc;
}
public Double getIncome() {
    return income;
}
public void setIncome(Double income) {
    this.income = income;
}
public String getPurpose() {
    return purpose;
}
public void setPurpose(String purpose) {
    this.purpose = purpose;
}
public Register getRegister() {
    return register;
}
public void setRegister(Register register) {
    this.register = register;
}
}
