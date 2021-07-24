package com.srm.loan.Exceptions;

import java.util.Date;

public class Errors {
    private int id;
    private String errMessage;
    private Date date;
    private String errCode;
    private String category;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getErrMessage() {
        return errMessage;
    }
    public void setErrMessage(String errMessage) {
        this.errMessage = errMessage;
    }
    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }
    public String getErrCode() {
        return errCode;
    }
    public void setErrCode(String errCode) {
        this.errCode = errCode;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    @Override
    public String toString() {
        return "Errors [category=" + category + ", date=" + date + ", errCode=" + errCode + ", errMessage=" + errMessage
                + ", id=" + id + "]";
    }
}
