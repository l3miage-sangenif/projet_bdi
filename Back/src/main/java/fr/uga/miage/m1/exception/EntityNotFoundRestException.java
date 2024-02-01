package fr.uga.miage.m1.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


@Getter
@ResponseStatus(value = HttpStatus.NOT_FOUND)
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