// src/main/java/com/simple/shoppingmall/dto/UserDto.java
package com.simple.shoppingmall.dto;

import com.simple.shoppingmall.entity.User;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDto {
    @NotBlank
    @Size(min = 3, max = 50)
    private String username;

    @NotBlank
    @Size(min = 6, max = 100)
    private String password;

    private User.Role role;

    public UserDto() {
    }

    public UserDto(String username, String password, User.Role role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }

    // Getters and setters

    public User toEntity() {
        return User.of(
                this.username,
                this.password,
                this.role == null ? User.Role.USER : this.role // Default to USER role if not set
        );
    }

    public static UserDto of(String username, String password, User.Role role) {
        return new UserDto(username, password, role);
    }
}
