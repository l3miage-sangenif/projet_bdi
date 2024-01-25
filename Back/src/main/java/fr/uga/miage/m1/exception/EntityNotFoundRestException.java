package fr.uga.miage.m1.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;


@Getter
public class EntityNotFoundRestException extends RuntimeException {
    private final Object id;

    public EntityNotFoundRestException(String message, Object id) {
        super(message);
        this.id = id;
    }

    public EntityNotFoundRestException(String message, Object id, Throwable cause) {
        super(message, cause);
        this.id = id;
    }

    public HttpStatus getHttpStatus() {
        return HttpStatus.NOT_FOUND;
    }

}