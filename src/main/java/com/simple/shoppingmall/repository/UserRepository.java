package com.simple.shoppingmall.repository;

import com.simple.shoppingmall.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
