// src/main/java/com/simple/shoppingmall/controller/UserController.java
package com.simple.shoppingmall.controller;

import com.simple.shoppingmall.dto.UserDto;
import com.simple.shoppingmall.entity.User;
import com.simple.shoppingmall.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user-register")
    public ResponseEntity<?> registerUser(@RequestBody UserDto userDto) {
        User user = userDto.toEntity();
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully");
    }

    @GetMapping("/auth/user")
    public ResponseEntity<?> getAuthenticatedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.isAuthenticated()) {
            User user = (User) authentication.getPrincipal();
            return ResponseEntity.ok(new UserDto(user.getUsername(), user.getPassword(), user.getRole()));
        }
        return ResponseEntity.status(401).body("Unauthorized");
    }
}
