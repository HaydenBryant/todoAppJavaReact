package com.in28minutes.rest.webservice.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.*;

import javax.lang.model.util.Elements;
import java.nio.file.Path;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class HelloWorldController {

//    @RequestMapping(method= RequestMethod.GET, path = "/hello-world")
    @GetMapping(path = "/hello-world")
    public String helloWorld() {
        return "Hello World";
    }

    @GetMapping(path = "/hello-world-bean")
    public HelloWorldBean helloWorldBean() {
        return new HelloWorldBean("Hello World");
    }

    @GetMapping(path = "/hello-world/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
//        throw new RuntimeException("something went wrong");
        return new HelloWorldBean(String.format("Hello World, %s", name));
    }
}
