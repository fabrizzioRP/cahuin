SELECT c.cliente_id, c.cliente_nombre, c.accountcode, c.login_user, c.login_pass, c.sip_host, c.sip_config, c.valor_movil, c.valor_fijo, c.proveedor_id, p.proveedor_nombre, c.rol 
FROM cliente c 
JOIN proveedor p ON p.proveedor_id=c.proveedor_id 
WHERE c.cliente_activo=1;

SELECT c.cliente_id, c.cliente_nombre, c.accountcode, c.login_user, c.login_pass, c.sip_host, c.sip_config, c.valor_movil, c.valor_fijo, c.proveedor_id, p.proveedor_nombre, c.rol
FROM cliente c
JOIN proveedor p ON p.proveedor_id=c.proveedor_id 
WHERE c.cliente_id = ${id} and c.cliente_activo=1;

SELECT * FROM cliente WHERE accountcode=${accountcode};