package com.plural.conferencedemo.repositories;

import com.plural.conferencedemo.models.Session;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionRepository  extends JpaRepository<Session,Long> {
}
