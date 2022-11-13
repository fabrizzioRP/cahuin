-- CREATE DATABASE cahuin;
-- \c cahuin;
    
CREATE TABLE IF NOT EXISTS proveedor
(
    proveedor_id serial,
    proveedor_nombre character varying COLLATE pg_catalog."default",
    proveedor_activo integer DEFAULT 1,
    sip_host character varying COLLATE pg_catalog."default",
    sip_config character varying COLLATE pg_catalog."default",
    valor_fijo double precision DEFAULT 0,
    valor_movil double precision DEFAULT 0,
    CONSTRAINT proveedor_pkey PRIMARY KEY (proveedor_id)
);

CREATE TABLE IF NOT EXISTS cliente
(
    cliente_id serial,
    cliente_nombre character varying COLLATE pg_catalog."default",
    cliente_activo integer DEFAULT 1,
    accountcode character varying COLLATE pg_catalog."default",
    login_user character varying COLLATE pg_catalog."default",
    login_pass character varying COLLATE pg_catalog."default",
    sip_host character varying COLLATE pg_catalog."default",
    sip_config character varying COLLATE pg_catalog."default",
    valor_movil double precision DEFAULT 0,
    valor_fijo double precision DEFAULT 0,
    proveedor_id integer,
    rol character varying COLLATE pg_catalog."default" DEFAULT 'cliente'::character varying,
    CONSTRAINT cliente_pkey PRIMARY KEY (cliente_id),
    CONSTRAINT proveedor_id FOREIGN KEY (proveedor_id)
        REFERENCES proveedor (proveedor_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

INSERT INTO proveedor(proveedor_nombre, sip_host, sip_config, valor_fijo, valor_movil) VALUES 
('claro', '192.168.0.1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor ac ipsum', 1000, 900),
('movistar', '192.168.0.2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor ac ipsum', 2000, 200),
('entel', '192.168.0.3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor ac ipsum', 3000, 500);


INSERT INTO cliente(cliente_nombre, accountcode, sip_host, sip_config, valor_movil, valor_fijo, proveedor_id) VALUES
('cliente1','121212','192.168.1.1','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor ac ipsum', 2000, 500, 3),
('cliente2','111111','192.168.1.2','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor ac ipsum', 3000, 700, 2),
('cliente3','131313','192.168.1.3','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor ac ipsum', 1000, 840, 1);

INSERT INTO cliente(cliente_nombre, accountcode, rol) VALUES
('fabrizzio','777777', 'admin'),
('felix','666666', 'admin');