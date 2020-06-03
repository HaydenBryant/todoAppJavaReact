package com.in28minutes.rest.webservice.restfulwebservices.todo;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Component
public class TodoHardcodeService {
    private static List<Todo> todos = new ArrayList<>();
    private static int idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "in28minutes", "Learn to Dance", new Date(), false));
        todos.add(new Todo(++idCounter, "in28minutes", "Learn microservices", new Date(), false));
        todos.add(new Todo(++idCounter, "in28minutes", "Learn Angular", new Date(), false));
    }

    public List<Todo> findAll(){
        return todos;
    }
}
