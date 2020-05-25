package com.in28minutes.rest.webservice.restfulwebservices;

import org.springframework.web.bind.annotation.GetMapping;

public class HelloWorldBean {
    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "HelloWorldBean{" +
                "message='" + message + '\'' +
                '}';
    }

    public String getMessage() {
        return message;
    }

    private String message;

    public HelloWorldBean(String message) {
        this.message = message;
    }


}
