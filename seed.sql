CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    body TEXT NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT false
);

INSERT INTO todos (body, completed) VALUES
('First todo', false),
('Second todo', true),
('Third todo', false);