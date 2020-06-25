package com.in28minutes.rest.webservice.restfulwebservices.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class UserJpaResource {

    @Autowired
    private UserRepository userRepository;

//    @GetMapping("/jpa/users")
//    public List<User> getAllUsers() {
//        return
//    }

    @PostMapping("/jpa/user")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User createdUser = userRepository.save(user);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().buildAndExpand(createdUser.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

}
