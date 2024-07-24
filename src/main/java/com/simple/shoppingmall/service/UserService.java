package com.simple.shoppingmall.service;

import com.simple.shoppingmall.dto.UserDto;
import com.simple.shoppingmall.entity.User;
import com.simple.shoppingmall.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void registerUser(UserDto userDto) {
        User user = userDto.toEntity();
        user = User.of(user.getUsername(), passwordEncoder.encode(user.getPassword()), user.getRole());
        userRepository.save(user);
    }
}
