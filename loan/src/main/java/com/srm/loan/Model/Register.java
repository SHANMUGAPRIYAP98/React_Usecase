package com.srm.loan.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="register")
public class Register {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "cname")
    private String cname;
    @Column(name = "phone")
    private Long phone;
    @Column(name = "mail",unique = true)
    private String mail;
    @Column(name = "zip")
    private Integer zip;
    @Column(name = "pass")
    private String pass;
    public String getCname() {
        return cname;
    }
    public void setCname(String cname) {
        this.cname = cname;
    }
    public Long getPhone() {
        return phone;
    }
    public void setPhone(Long phone) {
        this.phone = phone;
    }
    public String getMail() {
        return mail;
    }
    public void setMail(String mail) {
        this.mail = mail;
    }
    public Integer getZip() {
        return zip;
    }
    public void setZip(Integer zip) {
        this.zip = zip;
    }
    public String getPass() {
        return pass;
    }
    public void setPass(String pass) {
        this.pass = pass;
    }
    public Register(String cname, Long phone, String mail, Integer zip, String pass) {
        this.cname = cname;
        this.phone = phone;
        this.mail = mail;
        this.zip = zip;
        this.pass = pass;
    }
    @Override
    public String toString() {
        return "Register [cname=" + cname + ", id=" + id + ", mail=" + mail + ", pass=" + pass + ", phone=" + phone
                + ", zip=" + zip + "]";
    }
   
    public Register()
    {
        
    }

}
